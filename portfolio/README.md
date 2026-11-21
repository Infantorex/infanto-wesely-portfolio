# INFANTO WESELY R — PERSONAL PORTFOLIO & VENTURE SHOWCASE
### Founder & CEO — REX HÖREN INDUSTRIES | Product Innovator & Entrepreneur

> **Tagline:** "ENGINEERING IDEAS INTO REALITY."  
> **Brand Identity:** INFANTO WESELY R / IWR  
> **Institution:** K. Ramakrishnan College of Technology, Tamil Nadu, India  
> **Degree:** B.E. Mechanical Engineering  

---

## 01. Overview

This is the official, fully functional, production-ready personal portfolio and startup venture showcase website for **Infanto Wesely R**. 

Built with an **editorial-industrial visual direction**, the website rejects generic template patterns, excessive glassmorphism, and neon gradients in favor of refined typography, asymmetric grid layouts, hairline borders, technical coordinate markers, authentic case studies, and legal fidelity for intellectual property.

---

## 02. Key Dimensions Represented

1. **Engineer:** Mechanical engineering fundamentals, SolidWorks CAD modeling, parametric mechanisms, additive manufacturing (3D printing), and design for manufacturing (DFM).
2. **Founder & CEO:** Executive leadership at **Rex Hören Industries**, leading product ideation, engineering R&D, business modeling, and strategic roadmaps.
3. **Innovator:**
   - **Vibrawave – The Hearing Aid:** Assistive tactile acoustic interface via cranial trigeminal nerve stimulation (Winner of Third Prize at the ARIFA Hackathon, Nagapattinam).
   - **SafeGuardX:** Connected smart industrial safety helmet with multi-parameter biometric and hazard telemetry (ESP32, MAX30102, MPU6050, MQ-135, DHT22, GPS, GSM).
   - **Engineering & Automation Catalog:** Smart agriculture, IoT machine monitoring, robotics, and industrial vibration analytics.
4. **Inventor:** Contributor to **Published Indian Patent Application 202641130456 A** (*Backhoe Hydraulic Cylinder Monitor*) published in *The Patent Office Journal No. 45/2026* (Page 143864).
5. **Entrepreneur:** Commercialization roadmaps, venture scaling, and collegiate innovation leadership.

---

## 03. Design System & Palette

- **Deep Charcoal:** `#111111` (Primary backdrop)
- **Warm Off-White:** `#F3F1EB` (Primary typographic color)
- **Industrial Orange:** `#D97745` (Accents, active states, callouts)
- **Muted Grey:** `#A0A0A0` (Secondary metadata, borders)
- **Typography:**
  - Headers: **Space Grotesk**
  - Body & Reading: **Inter**
  - Editorial Contrast: **Cormorant Garamond**
  - Technical Data & Metadata: **Space Mono**

---

## 04. Project Structure

```
c:\Infanto\
├── package.json                   # Root workspace runner
├── README.md                      # Workspace documentation
└── portfolio/
    ├── .env.example               # Environment variables template
    ├── README.md                  # Detailed portfolio documentation
    ├── backend/
    │   ├── package.json           # Backend dependencies (Express, CORS, Dotenv)
    │   ├── server.js              # Express.js HTTP application server
    │   ├── config/
    │   │   └── db.js              # Optional MySQL pool with JSON fallback
    │   ├── controllers/
    │   │   └── contactController.js # Input validation & message persistence
    │   ├── routes/
    │   │   ├── contact.js         # POST/GET /api/contact
    │   │   └── api.js             # GET /api/patent, /api/projects, /api/resume
    │   └── data/
    │       └── messages.json      # Persistent JSON message archive
    ├── database/
    │   └── schema.sql             # Relational MySQL schema for contacts & IP
    ├── frontend/
    │   ├── index.html             # Master editorial homepage
    │   ├── css/
    │   │   └── style.css          # Bespoke industrial editorial stylesheet
    │   ├── js/
    │   │   └── main.js            # Modals, lightbox, validation, animations
    │   └── assets/
    │       ├── icons/
    │       │   └── favicon.svg    # IWR brand monogram
    │       ├── images/
    │       │   └── infanto-portrait.svg # Framed executive portrait
    │       ├── patents/
    │       │   ├── backhoe-hydraulic-cylinder-monitor-patent.svg
    │       │   └── backhoe-hydraulic-cylinder-monitor-patent.png
    │       ├── projects/
    │       │   ├── vibrawave-schematic.svg
    │       │   ├── safeguardx-schematic.svg
    │       │   ├── smart-agriculture.svg
    │       │   ├── iot-monitoring.svg
    │       │   ├── mechanical-cad.svg
    │       │   ├── embedded-automation.svg
    │       │   ├── robotics.svg
    │       │   ├── additive-mfg.svg
    │       │   └── industrial-monitoring.svg
    │       ├── certificates/
    │       │   └── arifa-hackathon-award.svg
    │       └── resume/
    │           ├── resume.html    # Printable CV
    │           └── Infanto-Wesely-R-Resume.pdf
    └── scripts/
        ├── generate-assets.js
        └── generate-gallery-assets.js
```

---

## 05. Quickstart & Local Installation

### Prerequisites
- Node.js LTS (v18+)
- npm (v9+)

### Installation Steps

1. **Clone or Navigate to the Directory:**
   ```bash
   cd C:\Infanto\portfolio\backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Production / Development Server:**
   ```bash
   node server.js
   ```
   Or from the root directory `C:\Infanto`:
   ```bash
   node portfolio/backend/server.js
   ```

4. **Open in Browser:**
   ```
   http://localhost:3000
   ```

---

## 06. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service status, founder identity, timestamp |
| `POST` | `/api/contact` | Submits contact inquiries (validates name, email, subject, message) |
| `GET` | `/api/contact` | Retrieves archived messages (for review) |
| `GET` | `/api/patent` | Returns official patent application metadata (App No. 202641130456 A) |
| `GET` | `/api/projects` | Returns structured project catalog & case study data |
| `GET` | `/api/resume/download` | Serves official downloadable resume file |

---

## 07. Database Configuration (Optional MySQL)

The server runs out-of-the-box using lightweight persistent JSON storage (`backend/data/messages.json`).

To enable persistent MySQL storage:
1. Import `database/schema.sql` into your MySQL instance:
   ```bash
   mysql -u root -p < portfolio/database/schema.sql
   ```
2. Copy `portfolio/.env.example` to `portfolio/.env`:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=infanto_portfolio
   ```
3. Restart the server. The database controller will automatically connect to the MySQL pool while maintaining file fallback.

---

## 08. Legal & Intellectual Property Accuracy

- **Patent Application:** Officially described as a **Published Indian Patent Application** (*Application No. 202641130456 A* filed on 02/11/2026, published on 06/11/2026 in *The Patent Office Journal No. 45/2026*, Page 143864). It is never referred to as a granted patent.
- **Vibrawave:** Described strictly as an assistive technology concept and engineering proof-of-concept prototype. No claims of medical device approval or clinical trials are made.
- **Rex Hören Industries:** Described authentically as an early-stage startup enterprise focused on hardware and assistive innovation without fabricated revenue or customer metrics.
