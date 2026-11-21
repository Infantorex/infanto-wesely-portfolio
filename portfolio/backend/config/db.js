/**
 * Database Configuration
 * Optional MySQL connection pool with graceful fallback to file-based storage.
 */
const fs = require('fs');
const path = require('path');

let pool = null;

// Attempt to load mysql2 only if installed and configured
if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME) {
    try {
        const mysql = require('mysql2/promise');
        pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME,
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        console.log('[DB] MySQL connection pool initialized.');
    } catch (err) {
        console.warn('[DB] MySQL driver not available or failed to load. Using persistent JSON storage fallback.');
    }
} else {
    console.log('[DB] MySQL credentials not provided in environment. Running in lightweight persistent JSON mode.');
}

module.exports = {
    getPool: () => pool,
    isAvailable: () => !!pool
};
