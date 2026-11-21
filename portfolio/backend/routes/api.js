/**
 * API Data Routes
 * Provides structured programmatic endpoints for portfolio information,
 * projects, patents, and system status.
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

/**
 * GET /api/patent
 * Official patent application metadata for Backhoe Hydraulic Cylinder Monitor
 */
router.get('/patent', (req, res) => {
    res.json({
        success: true,
        data: {
            title: "BACKHOE HYDRAULIC CYLINDER MONITOR",
            status: "Published Indian Patent Application",
            legalDisclaimer: "This document represents a Published Indian Patent Application under The Patents Act, 1970. It is an officially published specification, not a granted patent.",
            applicationNumber: "202641130456 A",
            applicationFilingDate: "02 November 2026",
            publicationDate: "06 November 2026",
            publicationJournal: "The Patent Office Journal No. 45/2026",
            journalPageNumber: 143864,
            applicants: [
                "K. Ramakrishnan College of Technology",
                "M. Kumarasamy College of Engineering",
                "K. Ramakrishnan College of Engineering"
            ],
            inventors: [
                {
                    name: "INFANTO WESELY REX JOHN VISUVASAM",
                    designation: "Inventor / Mechanical Engineering Student",
                    institution: "K. Ramakrishnan College of Technology"
                }
            ],
            systemArchitecture: {
                controller: "ESP32-Based Central Controller",
                sensors: [
                    { name: "Hydraulic Pressure Sensor", role: "Monitors dynamic line pressure and spikes" },
                    { name: "Hydraulic Oil Temperature Sensor", role: "Continuous thermal monitoring of fluid" },
                    { name: "Oil-Level Sensor", role: "Real-time reservoir depletion alert" }
                ],
                subsystems: [
                    "Display Unit (In-Cabin Real-Time HUD / Telemetry)",
                    "Communication Unit (Wireless Telemetry / IoT Uplink)",
                    "Alert Unit (Immediate Audio-Visual Warning for High Pressure, Thermal Overload, Low Oil)"
                ]
            },
            keyFeatures: [
                "Continuous hydraulic cylinder operating condition tracking",
                "Hydraulic pressure monitoring with spike detection",
                "Oil temperature real-time tracking",
                "Low oil-level identification prior to pump cavitation",
                "Abnormal condition detection algorithms",
                "Real-time operator warning generation",
                "Historical telemetry logging for preventative maintenance"
            ]
        }
    });
});

/**
 * GET /api/projects
 * Detailed project catalog
 */
router.get('/projects', (req, res) => {
    res.json({
        success: true,
        data: [
            {
                id: "vibrawave",
                title: "Vibrawave – The Hearing Aid",
                category: "Assistive Technology / Product Innovation",
                company: "REX HÖREN INDUSTRIES",
                isFlagship: true,
                achievement: "Third Prize – ARIFA Hackathon, Nagapattinam",
                tagline: "Tactile vibration acoustic interface via trigeminal nerve stimulation.",
                overview: "Vibrawave is an assistive technology concept designed to convert acoustic information into tactile vibration signals through trigeminal nerve stimulation rather than conventional acoustic amplification or bone conduction.",
                disclaimer: "Concept & development prototype. Not a certified clinical medical device.",
                technologies: [
                    "MEMS Microphone",
                    "Digital Signal Processing (DSP)",
                    "Adaptive Noise Reduction",
                    "Bluetooth 5.0",
                    "Vibration Transducer",
                    "Rechargeable Li-Po Power Management",
                    "Modular Ergonomic Enclosure"
                ],
                status: "Prototype Development & Engineering Testing"
            },
            {
                id: "safeguardx",
                title: "SafeGuardX Smart Industrial Safety Helmet",
                category: "Industrial Safety / AI and IoT",
                company: "INFANTO WESELY R",
                isFlagship: false,
                tagline: "Comprehensive wearable worker safety telemetry and hazardous condition detection.",
                overview: "A connected smart industrial safety helmet integrating multi-parameter physiological and environmental sensors with low-latency cellular and satellite telemetry for harsh industrial environments.",
                technologies: [
                    "ESP32 Microcontroller",
                    "MAX30102 (Pulse Oximetry & Heart Rate)",
                    "MPU6050 (6-Axis Impact & Fall Detection)",
                    "MQ-135 (Hazardous Gas & Air Quality)",
                    "DHT22 (Ambient Temperature & Humidity)",
                    "NEO-6M GPS Module",
                    "SIM800L GSM Telemetry Module"
                ],
                status: "Prototype Development & Sensor Validation"
            }
        ]
    });
});

/**
 * GET /api/resume/download
 * Serves the PDF or structured resume
 */
router.get('/resume/download', (req, res) => {
    const resumePath = path.join(__dirname, '..', '..', 'frontend', 'assets', 'resume', 'Infanto-Wesely-R-Resume.pdf');
    if (fs.existsSync(resumePath)) {
        res.download(resumePath, 'Infanto-Wesely-R-Resume.pdf');
    } else {
        // Fallback to printable HTML version
        res.redirect('/assets/resume/resume.html');
    }
});

module.exports = router;
