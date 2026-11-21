/**
 * Vercel Serverless Function Entry Point
 * Routes incoming serverless requests to the Express.js application
 */
const app = require('../portfolio/backend/server');

module.exports = app;
