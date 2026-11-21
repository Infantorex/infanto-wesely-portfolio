/**
 * Contact Controller
 * Handles contact form submissions with input validation, sanitization,
 * persistent JSON storage, and optional MySQL persistence.
 */
const fs = require('fs');
const path = require('path');
const db = require('../config/db');

// Serverless-safe data directory (Vercel serverless uses /tmp)
const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
const DATA_DIR = isServerless ? '/tmp' : path.join(__dirname, '..', 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data directory exists safely
try {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(MESSAGES_FILE)) {
        fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
} catch (e) {
    console.warn('[ContactController] Storage init notice:', e.message);
}

/**
 * Basic email validator
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Handle new contact message submission
 */
async function submitMessage(req, res) {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        const errors = [];
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            errors.push('Full name is required (minimum 2 characters).');
        }
        if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
            errors.push('A valid email address is required.');
        }
        if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
            errors.push('Subject is required (minimum 3 characters).');
        }
        if (!message || typeof message !== 'string' || message.trim().length < 10) {
            errors.push('Message is required (minimum 10 characters).');
        }

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                errors: errors,
                message: errors.join(' ')
            });
        }

        const newEntry = {
            id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim(),
            createdAt: new Date().toISOString(),
            ip: req.ip || req.headers['x-forwarded-for'] || 'local'
        };

        // Save to persistent JSON store
        try {
            const rawData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
            const messages = JSON.parse(rawData || '[]');
            messages.unshift(newEntry);
            fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');
        } catch (fileErr) {
            console.error('[ContactController] Error writing to messages.json:', fileErr);
        }

        // Save to MySQL if available
        const pool = db.getPool();
        if (pool) {
            try {
                const query = `
                    INSERT INTO contact_messages (id, name, email, subject, message, created_at, ip_address)
                    VALUES (?, ?, ?, ?, ?, NOW(), ?)
                `;
                await pool.execute(query, [
                    newEntry.id,
                    newEntry.name,
                    newEntry.email,
                    newEntry.subject,
                    newEntry.message,
                    newEntry.ip
                ]);
                console.log(`[ContactController] Message persisted to MySQL database: ${newEntry.id}`);
            } catch (dbErr) {
                console.warn('[ContactController] Failed to persist to MySQL (saved to JSON instead):', dbErr.message);
            }
        }

        console.log(`[ContactController] Received message from: ${newEntry.name} <${newEntry.email}> - "${newEntry.subject}"`);

        return res.status(200).json({
            success: true,
            message: `Thank you, ${newEntry.name}! Your message has been received. Infanto Wesely R will get back to you shortly.`,
            referenceId: newEntry.id
        });
    } catch (error) {
        console.error('[ContactController] Uncaught error handling submission:', error);
        return res.status(500).json({
            success: false,
            message: 'An unexpected internal error occurred. Please reach out directly via email.'
        });
    }
}

/**
 * Get recent messages (secured or for admin review)
 */
async function getMessages(req, res) {
    try {
        const rawData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
        const messages = JSON.parse(rawData || '[]');
        return res.json({
            success: true,
            count: messages.length,
            messages: messages.map(m => ({
                id: m.id,
                name: m.name,
                subject: m.subject,
                createdAt: m.createdAt
            }))
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Could not read messages.' });
    }
}

module.exports = {
    submitMessage,
    getMessages
};
