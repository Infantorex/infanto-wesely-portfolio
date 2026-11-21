/**
 * Infanto Wesely R — Personal Portfolio & Venture Showcase Server
 * Express.js Backend Server
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Mount API routes
const contactRoutes = require('./routes/contact');
const apiRoutes = require('./routes/api');

app.use('/api/contact', contactRoutes);
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        system: 'INFANTO WESELY R Portfolio Service',
        founder: 'Infanto Wesely R',
        company: 'REX HÖREN INDUSTRIES',
        timestamp: new Date().toISOString()
    });
});

// Serve frontend static assets
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');
app.use(express.static(FRONTEND_DIR));

// Fallback to index.html for single-page routing
app.get('*', (req, res) => {
    const indexPath = path.join(FRONTEND_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('Frontend index.html is being prepared.');
    }
});

// Start listening when executed directly
if (!process.env.VERCEL && require.main === module) {
    app.listen(PORT, () => {
        console.log('====================================================');
        console.log(` INFANTO WESELY R — PORTFOLIO & VENTURE SERVER`);
        console.log(` Founder & CEO – REX HÖREN INDUSTRIES`);
        console.log(` Running on: http://localhost:${PORT}`);
        console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log('====================================================');
    });
}

module.exports = app;
