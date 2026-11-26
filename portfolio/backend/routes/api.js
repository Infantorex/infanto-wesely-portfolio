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
            },
            {
                id: "thermomix",
                title: "ThermoMix Smart – Mechatronic Mixing System",
                category: "Mechatronics / Thermal Automation",
                company: "INFANTO WESELY R",
                isFlagship: false,
                tagline: "Closed-loop PID thermal regulation with variable-speed dual impeller fluid mixing.",
                overview: "A mechatronic fluid processing system combining closed-loop PID temperature stabilization with high-torque variable-speed impeller mixing, engineered for laboratory fluid dynamics and industrial chemical batching.",
                technologies: [
                    "Dual DS18B20 & K-Type Thermocouples",
                    "Closed-Loop PID Control Algorithm",
                    "Pulse-Width Modulated (PWM) Heating",
                    "BLDC Motor with Optical Encoder",
                    "High-Shear Dual-Impeller Blades",
                    "ESP32 Edge Microcontroller",
                    "In-Situ OLED Telemetry HUD"
                ],
                status: "Working Prototype & Benchtop Testing"
            },
            {
                id: "hydraulic_monitor",
                title: "Backhoe Hydraulic Cylinder Monitor",
                category: "Heavy Equipment Telemetry / Intellectual Property",
                company: "INFANTO WESELY R (Inventor)",
                isFlagship: true,
                patentApplication: "202641130456 A",
                tagline: "Continuous sensor-based hydraulic operating condition tracking and cavitation prevention.",
                overview: "A smart sensor-based monitoring system specifically designed for continuous tracking of operating conditions in JCB backhoe hydraulic cylinders, identifying abnormal hydraulic conditions such as high pressure, thermal spikes, and low oil levels prior to catastrophic failure.",
                disclaimer: "Published Indian Patent Application (The Patents Act, 1970). The Patent Office Journal No. 45/2026, Page 143864.",
                technologies: [
                    "Industrial Piezoelectric Pressure Transducer (up to 400 bar)",
                    "Stainless-Steel RTD PT100 Oil Temperature Probe",
                    "Continuous Optical/Capacitive Reservoir Oil-Level Sensor",
                    "ESP32 Edge Controller with Analog Signal Conditioning",
                    "Cabin OLED Real-Time Telemetry HUD",
                    "Multi-Stage Audio-Visual Warning Alarm Engine",
                    "Wireless Telemetry Fleet Maintenance Uplink"
                ],
                status: "Published Indian Patent Application (Journal No. 45/2026)"
            },
            {
                id: "analytics_sensor",
                title: "Industrial Sensor Telemetry & Anomaly Analytics",
                category: "Data Analytics / Python & Pandas",
                company: "INFANTO WESELY R",
                isFlagship: false,
                tagline: "Statistical outlier detection, feature engineering, and time-series sensor analytics.",
                overview: "Developed Python data analysis pipelines utilizing Pandas, NumPy, and Seaborn to process, resample, and analyze over 128,000 telemetry records from industrial sensor rigs, detecting hydraulic pressure spikes and thermal anomalies using rolling z-score algorithms.",
                technologies: [
                    "Python 3.11",
                    "Pandas DataFrames",
                    "NumPy Vectorized Math",
                    "Seaborn & Matplotlib",
                    "Rolling Z-Score Outlier Heuristics",
                    "Time-Series Imputation & Resampling"
                ],
                status: "Validated Analytical Pipeline"
            },
            {
                id: "webdev_portal",
                title: "Infanto Wesely R Founder Portfolio & Platform",
                category: "Full-Stack Web Development",
                company: "INFANTO WESELY R",
                isFlagship: false,
                tagline: "Modern full-stack web application with Node.js Express backend and Vercel serverless deployment.",
                overview: "Architected and engineered this personal founder portfolio using semantic HTML5, modern CSS3, vanilla ES6+ JavaScript, an Express.js backend for asynchronous contact handling and telemetry APIs, and automated Vercel CI/CD Git integration.",
                technologies: [
                    "Semantic HTML5 & Modern CSS3",
                    "Vanilla ES6+ JavaScript",
                    "Node.js & Express.js REST API",
                    "Vercel Serverless Functions",
                    "Git & GitHub Actions / Vercel CI/CD",
                    "Responsive Mobile Architecture"
                ],
                status: "Production Live"
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
