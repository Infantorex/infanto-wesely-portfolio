-- ==========================================================
-- INFANTO WESELY R — PORTFOLIO DATABASE SCHEMA
-- Relational MySQL Schema for Persistent Data Storage
-- ==========================================================

CREATE DATABASE IF NOT EXISTS infanto_portfolio
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE infanto_portfolio;

-- 1. Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('unread', 'read', 'replied', 'archived') DEFAULT 'unread',
    ip_address VARCHAR(45) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Intellectual Property & Patents Catalog Table
CREATE TABLE IF NOT EXISTS patents (
    id INT AUTO-INCREMENT PRIMARY KEY,
    application_number VARCHAR(64) NOT NULL UNIQUE,
    invention_title VARCHAR(255) NOT NULL,
    legal_status VARCHAR(100) NOT NULL DEFAULT 'Published Indian Patent Application',
    filing_date DATE NOT NULL,
    publication_date DATE NOT NULL,
    journal_reference VARCHAR(150) NOT NULL,
    journal_page INT NOT NULL,
    lead_inventor VARCHAR(200) NOT NULL,
    applicant_institutions TEXT NOT NULL,
    abstract TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    category VARCHAR(100) NOT NULL,
    organization VARCHAR(150) NOT NULL,
    tagline VARCHAR(255) NOT NULL,
    problem_statement TEXT NOT NULL,
    solution TEXT NOT NULL,
    working_principle TEXT NOT NULL,
    tech_stack TEXT NOT NULL,
    status VARCHAR(100) NOT NULL,
    award_recognition VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed Patent Record
INSERT INTO patents (
    application_number,
    invention_title,
    legal_status,
    filing_date,
    publication_date,
    journal_reference,
    journal_page,
    lead_inventor,
    applicant_institutions,
    abstract
) VALUES (
    '202641130456 A',
    'BACKHOE HYDRAULIC CYLINDER MONITOR',
    'Published Indian Patent Application',
    '2026-11-02',
    '2026-11-06',
    'The Patent Office Journal No. 45/2026',
    143864,
    'INFANTO WESELY REX JOHN VISUVASAM',
    'K. Ramakrishnan College of Technology; M. Kumarasamy College of Engineering; K. Ramakrishnan College of Engineering',
    'A smart sensor-based monitoring system designed to continuously monitor JCB hydraulic cylinder operating conditions and identify abnormal hydraulic conditions such as high pressure, thermal spikes, and low oil levels.'
) ON DUPLICATE KEY UPDATE invention_title=VALUES(invention_title);
