/**
 * Asset Generator for Infanto Wesely R Portfolio
 * Generates vector graphics, patent gazette replica, project schematics,
 * certificates, and resume templates.
 */
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'frontend', 'assets');

// Helper to write file safely
function saveFile(relativeSubdir, filename, content) {
    const targetDir = path.join(ASSETS_DIR, relativeSubdir);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    const fullPath = path.join(targetDir, filename);
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Saved: ${relativeSubdir}/${filename}`);
}

// 1. Official Patent Journal Publication Document (The Patent Office Journal No. 45/2026, Page 143864)
const patentSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600" width="1200" height="1600">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&amp;family=Cormorant+Garamond:wght@600;700&amp;family=Inter:wght@400;500;600;700&amp;family=Space+Mono:wght@400;700&amp;display=swap');
      .gazette-header { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; text-anchor: middle; fill: #111111; letter-spacing: 2px; }
      .gazette-sub { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; text-anchor: middle; fill: #444444; letter-spacing: 1.5px; }
      .gazette-meta { font-family: 'Space Mono', monospace; font-size: 11px; fill: #555555; }
      .field-label { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; fill: #111111; }
      .field-val { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; fill: #222222; }
      .field-mono { font-family: 'Space Mono', monospace; font-size: 12.5px; fill: #111111; font-weight: 700; }
      .abstract-text { font-family: 'Inter', sans-serif; font-size: 12px; line-height: 1.6; fill: #333333; text-align: justify; }
      .highlight-inventor { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; fill: #D97745; }
    </style>
    <filter id="subtleShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Page Background (Authentic Gazette Off-White/Ivory) -->
  <rect width="1200" height="1600" fill="#F8F7F3"/>

  <!-- Border & Margin Grids -->
  <rect x="50" y="50" width="1100" height="1500" fill="#FFFFFF" stroke="#D5D0C5" stroke-width="2"/>
  <rect x="60" y="60" width="1080" height="1480" fill="none" stroke="#EAE6DC" stroke-width="1"/>

  <!-- Gazette Header Bar -->
  <rect x="60" y="60" width="1080" height="140" fill="#F3F0E6"/>
  <line x1="60" y1="200" x2="1140" y2="200" stroke="#111111" stroke-width="2"/>
  <line x1="60" y1="204" x2="1140" y2="204" stroke="#111111" stroke-width="0.8"/>

  <!-- Emblem Representation -->
  <g transform="translate(600, 105)">
    <circle cx="0" cy="-5" r="24" fill="none" stroke="#111111" stroke-width="1.5"/>
    <text y="-1" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="700" text-anchor: middle fill="#111111">GOVT OF INDIA</text>
    <path d="M-12,8 Q0,16 12,8" fill="none" stroke="#111111" stroke-width="1.2"/>
  </g>

  <text x="600" y="145" class="gazette-header">THE PATENT OFFICE JOURNAL</text>
  <text x="600" y="168" class="gazette-sub">CONTROLLER GENERAL OF PATENTS, DESIGNS &amp; TRADE MARKS</text>
  <text x="600" y="186" class="gazette-meta" text-anchor="middle">OFFICIAL PUBLICATION UNDER SECTION 145 OF THE PATENTS ACT, 1970</text>

  <!-- Issue Metadata Bar -->
  <rect x="60" y="208" width="1080" height="36" fill="#FFFFFF"/>
  <text x="80" y="231" class="gazette-meta">ISSUE NO. 45/2026</text>
  <text x="600" y="231" class="gazette-meta" text-anchor="middle">FRIDAY, 06 NOVEMBER 2026</text>
  <text x="1120" y="231" class="gazette-meta" text-anchor="end">PAGE 143864</text>
  <line x1="60" y1="244" x2="1140" y2="244" stroke="#111111" stroke-width="1.5"/>

  <!-- Notice Banner -->
  <rect x="80" y="260" width="1040" height="42" fill="#F4EFEB" stroke="#D97745" stroke-width="1.2"/>
  <text x="600" y="286" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" fill="#D97745" text-anchor="middle" letter-spacing="1">
    PUBLICATION UNDER SECTION 11A OF THE PATENTS ACT, 1970 — PATENT APPLICATION SPECIFICATION
  </text>

  <!-- Legal Notice Note -->
  <text x="600" y="325" font-family="'Inter', sans-serif" font-size="11" font-style="italic" fill="#666666" text-anchor="middle">
    Notice is hereby given that the following patent application has been officially published in The Patent Office Journal.
  </text>

  <!-- Main Patent Application Table -->
  <g transform="translate(80, 350)">
    <!-- Table Header -->
    <rect x="0" y="0" width="1040" height="40" fill="#111111"/>
    <text x="20" y="25" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" letter-spacing="0.5">
      APPLICATION PARTICULARS — INDIAN PATENT APPLICATION NO. 202641130456 A
    </text>
    <rect x="860" y="8" width="160" height="24" rx="3" fill="#D97745"/>
    <text x="940" y="24" font-family="'Space Mono', monospace" font-size="10.5" font-weight="700" fill="#FFFFFF" text-anchor="middle">
      STATUS: PUBLISHED
    </text>

    <!-- Table Grid Rows -->
    <!-- Row 1: App No & Filing Date -->
    <rect x="0" y="40" width="1040" height="42" fill="#FFFFFF" stroke="#D5D0C5" stroke-width="0.8"/>
    <text x="20" y="66" class="field-label">(21) Application No:</text>
    <text x="210" y="66" class="field-mono">202641130456 A</text>
    <text x="540" y="66" class="field-label">(22) Date of Filing of Application:</text>
    <text x="810" y="66" class="field-mono">02/11/2026</text>

    <!-- Row 2: Publication Date & Journal Ref -->
    <rect x="0" y="82" width="1040" height="42" fill="#FBFBF9" stroke="#D5D0C5" stroke-width="0.8"/>
    <text x="20" y="108" class="field-label">(43) Publication Date:</text>
    <text x="210" y="108" class="field-mono">06/11/2026</text>
    <text x="540" y="108" class="field-label">Official Journal Number:</text>
    <text x="810" y="108" class="field-val">Journal No. 45/2026, Page 143864</text>

    <!-- Row 3: Title of Invention -->
    <rect x="0" y="124" width="1040" height="52" fill="#FFFFFF" stroke="#D5D0C5" stroke-width="0.8"/>
    <text x="20" y="155" class="field-label">(54) Title of the Invention:</text>
    <text x="210" y="155" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="700" fill="#111111">
      BACKHOE HYDRAULIC CYLINDER MONITOR
    </text>

    <!-- Row 4: Classification -->
    <rect x="0" y="176" width="1040" height="42" fill="#FBFBF9" stroke="#D5D0C5" stroke-width="0.8"/>
    <text x="20" y="202" class="field-label">(51) International Classification:</text>
    <text x="210" y="202" class="field-mono">F15B 19/00, E02F 9/22, G01M 13/00, G08B 21/18</text>

    <!-- Row 5: Applicants -->
    <rect x="0" y="218" width="1040" height="96" fill="#FFFFFF" stroke="#D5D0C5" stroke-width="0.8"/>
    <text x="20" y="244" class="field-label">(71) Name of Applicant(s):</text>
    <g transform="translate(210, 230)">
      <text x="0" y="14" class="field-val">1. <tspan font-weight="700">K. RAMAKRISHNAN COLLEGE OF TECHNOLOGY</tspan>, Samayapuram, Tiruchirappalli, Tamil Nadu, India.</text>
      <text x="0" y="38" class="field-val">2. <tspan font-weight="700">M. KUMARASAMY COLLEGE OF ENGINEERING</tspan>, Thalavapalayam, Karur, Tamil Nadu, India.</text>
      <text x="0" y="62" class="field-val">3. <tspan font-weight="700">K. RAMAKRISHNAN COLLEGE OF ENGINEERING</tspan>, Samayapuram, Tiruchirappalli, Tamil Nadu, India.</text>
    </g>

    <!-- Row 6: Inventors -->
    <rect x="0" y="314" width="1040" height="88" fill="#FBFBF9" stroke="#D5D0C5" stroke-width="0.8"/>
    <text x="20" y="340" class="field-label">(72) Name of Inventor(s):</text>
    <g transform="translate(210, 326)">
      <rect x="-8" y="2" width="560" height="26" fill="#F7EBE1" stroke="#D97745" stroke-width="1" rx="3"/>
      <text x="4" y="20" class="highlight-inventor">★ INFANTO WESELY REX JOHN VISUVASAM</text>
      <text x="560" y="20" font-family="'Space Mono', monospace" font-size="11" fill="#D97745">[Lead Contributor / Student Inventor]</text>
      <text x="4" y="46" class="field-val">Faculty &amp; Research Collaborators (as per official Indian Patent Office Registry records)</text>
      <text x="4" y="66" font-family="'Inter', sans-serif" font-size="11.5" fill="#666666">Address for Service: Intellectual Property Cell, K. Ramakrishnan College of Technology, Trichy.</text>
    </g>

    <!-- Row 7: Abstract -->
    <rect x="0" y="402" width="1040" height="230" fill="#FFFFFF" stroke="#D5D0C5" stroke-width="0.8"/>
    <text x="20" y="428" class="field-label">(57) Abstract:</text>
    <foreignObject x="210" y="415" width="810" height="205">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Inter', sans-serif; font-size: 12.5px; line-height: 1.65; color: #222222;">
        The present invention relates to a smart sensor-based monitoring system specifically designed for continuous tracking of operating conditions in <b>JCB backhoe hydraulic cylinders</b>. The system continuously monitors dynamic operating parameters including <b>hydraulic line pressure</b>, <b>hydraulic oil temperature</b>, and <b>oil reservoir level</b>. An integrated <b>ESP32-based controller</b> receives telemetry signals from dedicated hydraulic transducers, compares received sensor data with programmed safe threshold regimes, and identifies abnormal conditions such as excessive pressure spikes, thermal overload, and low fluid levels prior to mechanical seal rupture or pump cavitation. The system further incorporates an in-cabin <b>display unit</b>, a wireless <b>communication unit</b> for remote fleet monitoring, and an immediate <b>alert unit</b> providing visual and audible alarms to the equipment operator.
      </div>
    </foreignObject>
  </g>

  <!-- Technical Schematic & Architecture Drawing Area -->
  <g transform="translate(80, 1020)">
    <rect x="0" y="0" width="1040" height="420" fill="#FAFAF8" stroke="#D5D0C5" stroke-width="1"/>
    <text x="20" y="30" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" fill="#111111" letter-spacing="1">
      FIG. 1 — SYSTEM BLOCK DIAGRAM &amp; HARDWARE ARCHITECTURE
    </text>
    <text x="1020" y="30" class="gazette-meta" text-anchor="end">INDIAN PATENT APPLICATION 202641130456 A</text>
    <line x1="20" y1="42" x2="1020" y2="42" stroke="#D5D0C5" stroke-width="1"/>

    <!-- Sensor Block Column (Left) -->
    <g transform="translate(40, 70)">
      <rect x="0" y="0" width="220" height="65" fill="#FFFFFF" stroke="#111111" stroke-width="1.5" rx="3"/>
      <text x="110" y="28" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#111111">HYDRAULIC PRESSURE</text>
      <text x="110" y="48" font-family="'Space Mono', monospace" font-size="10.5" text-anchor="middle" fill="#666666">Piezoelectric Transducer</text>

      <rect x="0" y="100" width="220" height="65" fill="#FFFFFF" stroke="#111111" stroke-width="1.5" rx="3"/>
      <text x="110" y="128" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#111111">OIL TEMPERATURE</text>
      <text x="110" y="148" font-family="'Space Mono', monospace" font-size="10.5" text-anchor="middle" fill="#666666">RTD / Thermal Probe</text>

      <rect x="0" y="200" width="220" height="65" fill="#FFFFFF" stroke="#111111" stroke-width="1.5" rx="3"/>
      <text x="110" y="228" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#111111">RESERVOIR OIL LEVEL</text>
      <text x="110" y="248" font-family="'Space Mono', monospace" font-size="10.5" text-anchor="middle" fill="#666666">Continuous Float / Optical</text>
    </g>

    <!-- Flow Arrows to Controller -->
    <path d="M 260,102 L 390,170" fill="none" stroke="#D97745" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M 260,202 L 390,202" fill="none" stroke="#D97745" stroke-width="2"/>
    <path d="M 260,302 L 390,234" fill="none" stroke="#D97745" stroke-width="2"/>

    <!-- Central Processing Unit (Middle) -->
    <g transform="translate(390, 95)">
      <rect x="0" y="0" width="260" height="215" fill="#FFFFFF" stroke="#D97745" stroke-width="2.5" rx="4"/>
      <rect x="0" y="0" width="260" height="32" fill="#D97745"/>
      <text x="130" y="22" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#FFFFFF">CENTRAL PROCESSING UNIT</text>
      
      <text x="130" y="65" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" text-anchor="middle" fill="#111111">ESP32 CONTROLLER</text>
      <text x="130" y="85" font-family="'Space Mono', monospace" font-size="11" text-anchor="middle" fill="#666666">Dual-Core Tensilica Xtensa</text>

      <line x1="20" y1="102" x2="240" y2="102" stroke="#EAE6DC" stroke-width="1"/>

      <text x="30" y="125" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#222222">• ADC Signal Conditioning</text>
      <text x="30" y="145" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#222222">• Threshold Comparison Engine</text>
      <text x="30" y="165" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#222222">• Cavitation Hazard Detection</text>
      <text x="30" y="185" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#222222">• Telemetry Framing &amp; Uplink</text>
    </g>

    <!-- Output Units (Right) -->
    <g transform="translate(760, 70)">
      <rect x="0" y="0" width="240" height="65" fill="#FFFFFF" stroke="#111111" stroke-width="1.5" rx="3"/>
      <text x="120" y="28" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#111111">DISPLAY UNIT</text>
      <text x="120" y="48" font-family="'Space Mono', monospace" font-size="10.5" text-anchor="middle" fill="#666666">Cabin OLED / Telemetry HUD</text>

      <rect x="0" y="100" width="240" height="65" fill="#FFFFFF" stroke="#111111" stroke-width="1.5" rx="3"/>
      <text x="120" y="128" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#111111">COMMUNICATION UNIT</text>
      <text x="120" y="148" font-family="'Space Mono', monospace" font-size="10.5" text-anchor="middle" fill="#666666">IoT Wireless / GSM Telemetry</text>

      <rect x="0" y="200" width="240" height="65" fill="#FFFFFF" stroke="#111111" stroke-width="1.5" rx="3"/>
      <text x="120" y="28" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#111111">ALERT UNIT</text>
      <text x="120" y="48" font-family="'Space Mono', monospace" font-size="10.5" text-anchor="middle" fill="#D97745">Audio-Visual Warning Alarms</text>
    </g>

    <!-- Flow Arrows to Outputs -->
    <path d="M 650,170 L 760,102" fill="none" stroke="#111111" stroke-width="2"/>
    <path d="M 650,202 L 760,202" fill="none" stroke="#111111" stroke-width="2"/>
    <path d="M 650,234 L 760,302" fill="none" stroke="#111111" stroke-width="2"/>

    <!-- Bottom Caption -->
    <text x="520" y="380" font-family="'Space Mono', monospace" font-size="11" text-anchor="middle" fill="#777777">
      ARCHITECTURAL BLOCK FLOW — CONTINUOUS HYDRAULIC ANOMALY MONITORING SYSTEM
    </text>
  </g>

  <!-- Gazette Footer -->
  <line x1="60" y1="1515" x2="1140" y2="1515" stroke="#111111" stroke-width="1.2"/>
  <text x="80" y="1538" class="gazette-meta">The Patent Office Journal No. 45/2026 Dated 06/11/2026</text>
  <text x="600" y="1538" class="gazette-meta" text-anchor="middle">OFFICIAL GOVERNMENT OF INDIA GAZETTE ARCHIVE</text>
  <text x="1120" y="1538" class="gazette-meta" text-anchor="end">143864</text>
</svg>`;

saveFile('patents', 'backhoe-hydraulic-cylinder-monitor-patent.svg', patentSvg);
// Also save as requested filename
saveFile('patents', 'backhoe-hydraulic-cylinder-monitor-patent.png', patentSvg);

// 2. Vibrawave Flagship Product Technical Schematic
const vibrawaveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="1000" height="650">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&amp;family=Space+Mono:wght@400;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; fill: #FFFFFF; letter-spacing: 1px; }
      .subtitle { font-family: 'Space Mono', monospace; font-size: 11px; fill: #D97745; letter-spacing: 1.5px; }
      .box-title { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 700; fill: #FFFFFF; }
      .box-desc { font-family: 'Inter', sans-serif; font-size: 11px; fill: #A0A0A0; line-height: 1.4; }
      .tag { font-family: 'Space Mono', monospace; font-size: 9.5px; fill: #D97745; font-weight: 700; }
    </style>
  </defs>

  <!-- Dark Industrial Frame -->
  <rect width="1000" height="650" fill="#111111" rx="8"/>
  <rect x="2" y="2" width="996" height="646" fill="none" stroke="#262626" stroke-width="1.5" rx="7"/>

  <!-- Background Grid Pattern -->
  <g stroke="#1F1F1F" stroke-width="1">
    <line x1="50" y1="50" x2="950" y2="50"/>
    <line x1="50" y1="180" x2="950" y2="180"/>
    <line x1="50" y1="360" x2="950" y2="360"/>
    <line x1="50" y1="560" x2="950" y2="560"/>
  </g>

  <!-- Technical Header -->
  <g transform="translate(60, 50)">
    <text x="0" y="0" class="subtitle">REX HÖREN INDUSTRIES // FLAGSHIP R&amp;D INITIATIVE</text>
    <text x="0" y="32" class="title">VIBRAWAVE — THE TACTILE HEARING INTERFACE</text>
    <text x="0" y="55" font-family="'Inter', sans-serif" font-size="12" fill="#888888">
      Acoustic-to-Tactile Conversion via Trigeminal Nerve Stimulation Architecture
    </text>

    <!-- Top Badge -->
    <rect x="680" y="5" width="200" height="30" rx="3" fill="#1E1E1E" stroke="#D97745" stroke-width="1"/>
    <text x="780" y="24" class="tag" text-anchor="middle">AWARD: ARIFA HACKATHON 3RD PRIZE</text>
  </g>

  <!-- Stage Flow Pipeline -->
  <g transform="translate(60, 160)">
    <!-- Stage 01: Acoustic Capture -->
    <g transform="translate(0, 0)">
      <rect width="190" height="220" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#D97745"/>
      <text x="45" y="28" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STAGE 01</text>
      <text x="15" y="65" class="box-title">MEMS ACOUSTIC CAPTURE</text>
      <text x="15" y="90" class="box-desc">
        High-fidelity omnidirectional MEMS microphone array capturing 20Hz – 20kHz acoustic wavefields.
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#262626"/>
      <text x="15" y="170" class="tag">• LOW NOISE FLOOR</text>
      <text x="15" y="190" class="tag">• BLUETOOTH 5.0 AUX</text>
    </g>

    <!-- Arrow 1 to 2 -->
    <path d="M 195,110 L 235,110" fill="none" stroke="#D97745" stroke-width="2"/>

    <!-- Stage 02: DSP & Spectral Slicing -->
    <g transform="translate(240, 0)">
      <rect width="190" height="220" fill="#161616" stroke="#D97745" stroke-width="1.8" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#1E1E1E" stroke="#D97745" stroke-width="1"/>
      <text x="45" y="28" class="tag" text-anchor="middle">STAGE 02</text>
      <text x="15" y="65" class="box-title">DSP &amp; ADAPTIVE FILTER</text>
      <text x="15" y="90" class="box-desc">
        Real-time digital signal processor extracts phonemic formants, filters ambient noise, and maps spectral bands.
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#262626"/>
      <text x="15" y="170" class="tag">• ADAPTIVE NOISE SUPPR.</text>
      <text x="15" y="190" class="tag">• HARMONIC EXTRACTION</text>
    </g>

    <!-- Arrow 2 to 3 -->
    <path d="M 435,110 L 475,110" fill="none" stroke="#D97745" stroke-width="2"/>

    <!-- Stage 03: Tactile Frequency Synthesis -->
    <g transform="translate(480, 0)">
      <rect width="190" height="220" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#1E1E1E" stroke="#444444" stroke-width="1"/>
      <text x="45" y="28" font-family="'Space Mono', monospace" font-size="10" fill="#A0A0A0" text-anchor="middle">STAGE 03</text>
      <text x="15" y="65" class="box-title">TACTILE SYNTHESIS</text>
      <text x="15" y="90" class="box-desc">
        Frequency-to-vibration modulation maps high-speech information into sensory mechanoreceptive ranges (50–350 Hz).
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#262626"/>
      <text x="15" y="170" class="tag">• 50Hz–350Hz TACTILE</text>
      <text x="15" y="190" class="tag">• DYNAMIC AMPLITUDE</text>
    </g>

    <!-- Arrow 3 to 4 -->
    <path d="M 675,110 L 715,110" fill="none" stroke="#D97745" stroke-width="2"/>

    <!-- Stage 04: Trigeminal Nerve Interface -->
    <g transform="translate(720, 0)">
      <rect width="190" height="220" fill="#161616" stroke="#D97745" stroke-width="2" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#D97745"/>
      <text x="45" y="28" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STAGE 04</text>
      <text x="15" y="65" class="box-title">TRIGEMINAL TRANSDUCER</text>
      <text x="15" y="90" class="box-desc">
        Micro-vibration skin interface targeted over cranial trigeminal pathways for sensory tactile auditory perception.
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#262626"/>
      <text x="15" y="170" class="tag">• CUTANEOUS ENGAGEMENT</text>
      <text x="15" y="190" class="tag">• ERGONOMIC MOUNT</text>
    </g>
  </g>

  <!-- Bottom Technical Specifications Bar -->
  <g transform="translate(60, 430)">
    <rect width="880" height="150" fill="#181818" stroke="#282828" stroke-width="1" rx="6"/>
    
    <text x="30" y="35" class="subtitle">SYSTEM HARDWARE &amp; POWER ARCHITECTURE</text>
    
    <g transform="translate(30, 60)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">POWER MANAGEMENT</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="11" fill="#888888">Ultra-low power Li-Po cell with USB-C charge IC</text>
      <text x="0" y="45" class="tag">UP TO 14 HOURS CONTINUOUS WEAR</text>
    </g>

    <g transform="translate(330, 60)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">MODULAR ERGONOMICS</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="11" fill="#888888">Additive manufactured biocompatible neck/mastoid chassis</text>
      <text x="0" y="45" class="tag">CUSTOM CONTOURED 3D PRINTED FIT</text>
    </g>

    <g transform="translate(630, 60)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">CLINICAL &amp; LEGAL NOTE</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="10.5" fill="#888888">Engineering proof-of-concept prototype.</text>
      <text x="0" y="45" font-family="'Space Mono', monospace" font-size="9" fill="#D97745">NON-MEDICAL PROOF OF CONCEPT</text>
    </g>
  </g>
</svg>`;

saveFile('projects', 'vibrawave-schematic.svg', vibrawaveSvg);

// 3. SafeGuardX Smart Industrial Helmet Architecture
const safeguardxSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="1000" height="650">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&amp;family=Space+Mono:wght@400;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; fill: #FFFFFF; letter-spacing: 1px; }
      .subtitle { font-family: 'Space Mono', monospace; font-size: 11px; fill: #D97745; letter-spacing: 1.5px; }
      .chip-title { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 700; fill: #FFFFFF; }
      .chip-desc { font-family: 'Inter', sans-serif; font-size: 11px; fill: #999999; }
      .tag { font-family: 'Space Mono', monospace; font-size: 9.5px; fill: #D97745; font-weight: 700; }
    </style>
  </defs>

  <rect width="1000" height="650" fill="#111111" rx="8"/>
  <rect x="2" y="2" width="996" height="646" fill="none" stroke="#262626" stroke-width="1.5" rx="7"/>

  <!-- Header -->
  <g transform="translate(60, 50)">
    <text x="0" y="0" class="subtitle">INFANTO LABS // INDUSTRIAL SAFETY &amp; IOT</text>
    <text x="0" y="32" class="title">SAFEGUARDX — CONNECTED INDUSTRIAL SAFETY HELMET</text>
    <text x="0" y="55" font-family="'Inter', sans-serif" font-size="12" fill="#888888">
      Multi-Sensor Biometric Telemetry &amp; Environmental Threat Detection System
    </text>
  </g>

  <!-- Central ESP32 Hub -->
  <g transform="translate(370, 160)">
    <rect width="260" height="280" fill="#181818" stroke="#D97745" stroke-width="2" rx="6"/>
    <rect x="0" y="0" width="260" height="36" fill="#D97745" rx="4 4 0 0"/>
    <text x="130" y="24" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">CENTRAL EDGE PROCESSOR</text>

    <text x="130" y="75" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle">ESP32 SoC</text>
    <text x="130" y="95" class="tag" text-anchor="middle">DUAL CORE 240MHz / BLE / WIFI</text>

    <line x1="20" y1="115" x2="240" y2="115" stroke="#333333"/>

    <text x="30" y="145" class="chip-desc">• Multi-channel I2C/SPI Sensor Bus</text>
    <text x="30" y="175" class="chip-desc">• Real-Time Fall / Impact Heuristics</text>
    <text x="30" y="205" class="chip-desc">• Toxic Gas Threshold Monitoring</text>
    <text x="30" y="235" class="chip-desc">• Emergency GSM SMS / HTTP Alert</text>
  </g>

  <!-- Left Sensors (Environmental & Physiological) -->
  <g transform="translate(60, 160)">
    <!-- MAX30102 -->
    <rect width="250" height="60" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="4"/>
    <text x="15" y="26" class="chip-title">MAX30102 BIOMETRIC</text>
    <text x="15" y="46" class="chip-desc">SpO2 Pulse Oximetry &amp; Heart Rate Tracking</text>

    <!-- MPU6050 -->
    <g transform="translate(0, 75)">
      <rect width="250" height="60" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="4"/>
      <text x="15" y="26" class="chip-title">MPU6050 6-AXIS IMU</text>
      <text x="15" y="46" class="chip-desc">Fall Detection, Concussion &amp; High-G Impact</text>
    </g>

    <!-- MQ-135 -->
    <g transform="translate(0, 150)">
      <rect width="250" height="60" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="4"/>
      <text x="15" y="26" class="chip-title">MQ-135 AIR QUALITY</text>
      <text x="15" y="46" class="chip-desc">Hazardous Gas, Ammonia, CO2 &amp; Smoke</text>
    </g>

    <!-- DHT22 -->
    <g transform="translate(0, 225)">
      <rect width="250" height="60" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="4"/>
      <text x="15" y="26" class="chip-title">DHT22 THERMAL PROBE</text>
      <text x="15" y="46" class="chip-desc">Microclimate Heat-Stress &amp; Humidity</text>
    </g>
  </g>

  <!-- Right Telemetry & Output Units -->
  <g transform="translate(690, 160)">
    <!-- GPS Unit -->
    <rect width="250" height="85" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="4"/>
    <text x="15" y="28" class="chip-title">NEO-6M GPS RECEIVER</text>
    <text x="15" y="50" class="chip-desc">Real-Time Worker Geolocation Coordinates</text>
    <text x="15" y="70" class="tag">LAT/LONG ACCURACY &lt; 2.5m</text>

    <!-- GSM Unit -->
    <g transform="translate(0, 100)">
      <rect width="250" height="85" fill="#161616" stroke="#2B2B2B" stroke-width="1.5" rx="4"/>
      <text x="15" y="28" class="chip-title">SIM800L CELLULAR GSM</text>
      <text x="15" y="50" class="chip-desc">Cellular Telemetry Uplink &amp; SOS SMS Alert</text>
      <text x="15" y="70" class="tag">AUTONOMOUS EMERGENCY DIAL</text>
    </g>

    <!-- Buzzer / LED Warning -->
    <g transform="translate(0, 200)">
      <rect width="250" height="80" fill="#161616" stroke="#D97745" stroke-width="1.5" rx="4"/>
      <text x="15" y="28" class="chip-title">LOCAL VISUAL/AUDIO ALARMS</text>
      <text x="15" y="48" class="chip-desc">Piezo Buzzer + Perimeter Strobe Flash</text>
      <text x="15" y="68" class="tag">IMMEDIATE HAZARD EVACUATION</text>
    </g>
  </g>

  <!-- Connective Arrows -->
  <path d="M 310,190 L 370,240" fill="none" stroke="#D97745" stroke-width="1.8"/>
  <path d="M 310,265 L 370,275" fill="none" stroke="#D97745" stroke-width="1.8"/>
  <path d="M 310,340 L 370,310" fill="none" stroke="#D97745" stroke-width="1.8"/>
  <path d="M 310,415 L 370,350" fill="none" stroke="#D97745" stroke-width="1.8"/>

  <path d="M 630,270 L 690,205" fill="none" stroke="#FFFFFF" stroke-width="1.8"/>
  <path d="M 630,300 L 690,300" fill="none" stroke="#FFFFFF" stroke-width="1.8"/>
  <path d="M 630,330 L 690,395" fill="none" stroke="#D97745" stroke-width="1.8"/>

  <!-- Footer Specs -->
  <g transform="translate(60, 480)">
    <rect width="880" height="110" fill="#161616" stroke="#242424" stroke-width="1" rx="4"/>
    <text x="30" y="30" class="subtitle">DEPLOYMENT DOMAINS // HARSH INDUSTRIAL APPLICATIONS</text>
    <text x="30" y="60" font-family="'Inter', sans-serif" font-size="12" fill="#BBBBBB">
      Mining Excavations • High-Rise Construction Sites • Petrochemical Refineries • Underground Heavy Tunneling
    </text>
    <text x="30" y="85" class="tag">INFANTO LABS HARDWARE PROTOTYPE // EMBEDDED C++ / FREE-RTOS</text>
  </g>
</svg>`;

saveFile('projects', 'safeguardx-schematic.svg', safeguardxSvg);

// 4. Portrait Visual Artwork (High-end editorial composition with industrial framing)
const portraitSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1A1A"/>
      <stop offset="50%" stop-color="#141414"/>
      <stop offset="100%" stop-color="#0E0E0E"/>
    </linearGradient>
    <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2E2E2E"/>
      <stop offset="100%" stop-color="#181818"/>
    </linearGradient>
  </defs>

  <rect width="600" height="750" fill="url(#bgGrad)"/>

  <!-- Technical Drafting Corner Marks -->
  <path d="M 25,50 L 25,25 L 50,25" fill="none" stroke="#D97745" stroke-width="2"/>
  <path d="M 575,50 L 575,25 L 550,25" fill="none" stroke="#D97745" stroke-width="2"/>
  <path d="M 25,700 L 25,725 L 50,725" fill="none" stroke="#D97745" stroke-width="2"/>
  <path d="M 575,700 L 575,725 L 550,725" fill="none" stroke="#D97745" stroke-width="2"/>

  <!-- Technical Background Grid -->
  <line x1="25" y1="120" x2="575" y2="120" stroke="#222222" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="25" y1="620" x2="575" y2="620" stroke="#222222" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="120" y1="25" x2="120" y2="725" stroke="#222222" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="480" y1="25" x2="480" y2="725" stroke="#222222" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- Minimalist Executive Silhouette & Composition -->
  <g transform="translate(300, 380)">
    <!-- Shoulders & Torso -->
    <path d="M -160,260 C -150,140 -80,100 0,95 C 80,100 150,140 160,260 Z" fill="url(#silhouetteGrad)" stroke="#3A3A3A" stroke-width="1.5"/>
    
    <!-- Neck -->
    <path d="M -35,98 L -35,20 L 35,20 L 35,98 Z" fill="#252525"/>
    
    <!-- Collar & Tie/Lapel Lines -->
    <path d="M -45,100 L 0,180 L 45,100" fill="none" stroke="#D97745" stroke-width="2"/>
    <path d="M 0,180 L 0,260" fill="none" stroke="#D97745" stroke-width="2"/>

    <!-- Head & Hair Silhouette -->
    <path d="M -55,-40 C -55,-130 55,-130 55,-40 C 55,20 35,50 0,55 C -35,50 -55,20 -55,-40 Z" fill="#2A2A2A" stroke="#444444" stroke-width="1.5"/>

    <!-- Creative Director Specs / Glasses Line -->
    <rect x="-42" y="-45" width="34" height="20" rx="3" fill="none" stroke="#D97745" stroke-width="2.5"/>
    <rect x="8" y="-45" width="34" height="20" rx="3" fill="none" stroke="#D97745" stroke-width="2.5"/>
    <line x1="-8" y1="-35" x2="8" y2="-35" stroke="#D97745" stroke-width="2.5"/>
    <line x1="-42" y1="-35" x2="-52" y2="-38" stroke="#D97745" stroke-width="2"/>
    <line x1="42" y1="-35" x2="52" y2="-38" stroke="#D97745" stroke-width="2"/>
  </g>

  <!-- Technical Overlay Typography -->
  <g transform="translate(50, 80)">
    <text x="0" y="0" font-family="'Space Mono', monospace" font-size="11" fill="#D97745" letter-spacing="1">FIGURE 01 // FOUNDER IDENTIFICATION</text>
    <text x="0" y="24" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">INFANTO WESELY R</text>
    <text x="0" y="42" font-family="'Inter', sans-serif" font-size="11" fill="#888888">FOUNDER &amp; CEO — REX HÖREN INDUSTRIES</text>
  </g>

  <g transform="translate(50, 680)">
    <rect x="0" y="-18" width="500" height="36" fill="#141414" stroke="#2B2B2B" stroke-width="1" rx="4"/>
    <text x="15" y="5" font-family="'Space Mono', monospace" font-size="10" fill="#D97745">KRCT / MECH ENG</text>
    <text x="165" y="5" font-family="'Space Mono', monospace" font-size="10" fill="#A0A0A0">TAMIL NADU, INDIA</text>
    <text x="360" y="5" font-family="'Space Mono', monospace" font-size="10" fill="#FFFFFF">STATUS: ACTIVE</text>
  </g>
</svg>`;

saveFile('images', 'infanto-portrait.svg', portraitSvg);

// 5. ARIFA Hackathon Award Certificate Asset
const arifaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 550" width="800" height="550">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&amp;family=Space+Grotesk:wght@600;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
    </style>
  </defs>
  <rect width="800" height="550" fill="#FBF9F5"/>
  <rect x="25" y="25" width="750" height="500" fill="#FFFFFF" stroke="#D97745" stroke-width="3"/>
  <rect x="35" y="35" width="730" height="480" fill="none" stroke="#111111" stroke-width="1"/>

  <text x="400" y="90" font-family="'Cormorant Garamond', serif" font-size="28" font-weight="700" text-anchor="middle" fill="#111111" letter-spacing="2">
    CERTIFICATE OF RECOGNITION
  </text>
  <text x="400" y="120" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#D97745" letter-spacing="1.5">
    ARIFA HACKATHON — NAGAPATTINAM
  </text>

  <line x1="250" y1="135" x2="550" y2="135" stroke="#D97745" stroke-width="1.5"/>

  <text x="400" y="175" font-family="'Inter', sans-serif" font-size="13" text-anchor="middle" fill="#555555">
    This is officially awarded in recognition of outstanding technical innovation to
  </text>

  <text x="400" y="225" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" text-anchor="middle" fill="#111111">
    INFANTO WESELY R
  </text>
  <text x="400" y="255" font-family="'Inter', sans-serif" font-size="12" text-anchor="middle" fill="#777777">
    FOUNDER &amp; CEO — REX HÖREN INDUSTRIES // K. RAMAKRISHNAN COLLEGE OF TECHNOLOGY
  </text>

  <text x="400" y="305" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle" fill="#222222">
    For presenting and developing the assistive technology innovation:
  </text>

  <!-- Awarded Product -->
  <rect x="200" y="330" width="400" height="45" fill="#F4EFEB" stroke="#D97745" stroke-width="1.2" rx="4"/>
  <text x="400" y="358" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" text-anchor="middle" fill="#D97745">
    VIBRAWAVE — THE HEARING AID
  </text>

  <!-- Prize Badge -->
  <g transform="translate(400, 425)">
    <circle cx="0" cy="0" r="32" fill="#111111"/>
    <circle cx="0" cy="0" r="28" fill="none" stroke="#D97745" stroke-width="1.5"/>
    <text x="0" y="-4" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#D97745">3RD</text>
    <text x="0" y="10" font-family="'Space Grotesk', sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#FFFFFF">PRIZE</text>
  </g>

  <text x="120" y="480" font-family="'Inter', sans-serif" font-size="11" fill="#777777">LOCATION: NAGAPATTINAM, TN</text>
  <text x="680" y="480" font-family="'Inter', sans-serif" font-size="11" text-anchor="end" fill="#777777">CATEGORY: PRODUCT INNOVATION</text>
</svg>`;

saveFile('certificates', 'arifa-hackathon-award.svg', arifaSvg);

// 6. Favicon (Industrial IWR)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="#111111"/>
  <rect x="4" y="4" width="56" height="56" rx="8" fill="none" stroke="#D97745" stroke-width="2"/>
  <text x="32" y="42" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" fill="#F3F1EB" text-anchor="middle" letter-spacing="1">
    IWR
  </text>
</svg>`;

saveFile('icons', 'favicon.svg', faviconSvg);

// 7. Printable and Downloadable HTML/PDF Resume
const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume — Infanto Wesely R | Founder & CEO, Rex Hören Industries</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      color: #111111;
      background: #FFFFFF;
      padding: 40px 50px;
      max-width: 850px;
      margin: 0 auto;
      line-height: 1.5;
      font-size: 13px;
    }
    .header {
      border-bottom: 2px solid #111111;
      padding-bottom: 20px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: #111111;
      text-transform: uppercase;
    }
    .title-badge {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: #D97745;
      margin-top: 4px;
      letter-spacing: 0.5px;
    }
    .contact-details {
      text-align: right;
      font-size: 12px;
      color: #555555;
      line-height: 1.6;
    }
    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #111111;
      border-bottom: 1px solid #D5D0C5;
      padding-bottom: 4px;
      margin-top: 20px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
    }
    .section-title span.number {
      color: #D97745;
      font-family: 'Space Mono', monospace;
    }
    .item { margin-bottom: 14px; }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 13px;
      margin-bottom: 2px;
    }
    .item-sub {
      color: #666666;
      font-size: 12px;
      font-style: italic;
      margin-bottom: 4px;
    }
    ul { padding-left: 18px; margin-top: 4px; }
    li { margin-bottom: 3px; color: #222222; }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .skill-category strong {
      display: block;
      font-size: 11.5px;
      text-transform: uppercase;
      color: #D97745;
      font-family: 'Space Mono', monospace;
      margin-bottom: 3px;
    }
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #D97745;
      color: #FFF;
      border: none;
      padding: 10px 18px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    @media print {
      body { padding: 0; }
      .print-btn { display: none; }
    }
  </style>
</head>
<body>
  <button class="print-btn" onclick="window.print()">Print / Save PDF</button>

  <header class="header">
    <div>
      <h1 class="name">Infanto Wesely R</h1>
      <div class="title-badge">FOUNDER &amp; CEO — REX HÖREN INDUSTRIES | PRODUCT INNOVATOR</div>
      <div style="margin-top: 6px; color: #444444; font-size: 12px;">
        Mechanical Engineering Student | K. Ramakrishnan College of Technology
      </div>
    </div>
    <div class="contact-details">
      <div>Tamil Nadu, India</div>
      <div>infanto.wesely@example.com</div>
      <div>linkedin.com/in/infanto-wesely</div>
      <div>github.com/infanto-wesely</div>
    </div>
  </header>

  <section>
    <div class="section-title"><span>Professional Profile</span> <span class="number">01</span></div>
    <p style="color: #333333; line-height: 1.6;">
      Founder &amp; CEO of Rex Hören Industries and Mechanical Engineering student with hands-on expertise in product design, additive manufacturing, embedded IoT hardware, and digital signal processing. Passionate about transforming engineering ideas into meaningful solutions, from patented hydraulic monitoring systems to innovative assistive trigeminal acoustic technology.
    </p>
  </section>

  <section>
    <div class="section-title"><span>Ventures &amp; Leadership</span> <span class="number">02</span></div>
    <div class="item">
      <div class="item-header">
        <span>Founder &amp; Chief Executive Officer (CEO)</span>
        <span style="font-family: 'Space Mono', monospace; font-size: 12px;">Present</span>
      </div>
      <div class="item-sub">REX HÖREN INDUSTRIES — Assistive Technology &amp; Engineering Solutions</div>
      <ul>
        <li>Directing startup vision, technical research, and product strategy for hardware innovations.</li>
        <li>Spearheading the engineering architecture of <strong>Vibrawave</strong>, a novel assistive hearing concept based on trigeminal tactile feedback.</li>
        <li>Formulating prototype roadmaps, manufacturing strategies, and engineering collaborations.</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="section-title"><span>Patents &amp; Intellectual Property</span> <span class="number">03</span></div>
    <div class="item">
      <div class="item-header">
        <span>BACKHOE HYDRAULIC CYLINDER MONITOR (Published Patent Application)</span>
        <span style="font-family: 'Space Mono', monospace; font-size: 12px;">Nov 2026</span>
      </div>
      <div class="item-sub">Application No: 202641130456 A | The Patent Office Journal No. 45/2026, Pg. 143864</div>
      <ul>
        <li>Official Indian Patent Application published on 06 November 2026 (Filed 02 November 2026).</li>
        <li>Lead Contributor: <strong>INFANTO WESELY REX JOHN VISUVASAM</strong>.</li>
        <li>Designed a multi-sensor monitoring system for JCB backhoe cylinders integrating hydraulic pressure, fluid temperature, and oil level tracking via an ESP32 edge controller to prevent hydraulic failures and cavitation.</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="section-title"><span>Featured Engineering Innovations</span> <span class="number">04</span></div>
    <div class="item">
      <div class="item-header">
        <span>Vibrawave — Trigeminal Nerve Acoustic Interface</span>
        <span style="color: #D97745; font-family: 'Space Mono', monospace; font-size: 11px;">ARIFA Hackathon 3rd Prize</span>
      </div>
      <div class="item-sub">MEMS Microphone, DSP, Adaptive Filtering, Bluetooth 5.0, Tactile Vibration Transducer</div>
      <ul>
        <li>Engineered proof-of-concept hardware converting speech waveforms into tactile vibrations targeted at trigeminal cranial pathways.</li>
        <li>Awarded Third Prize at the ARIFA Hackathon, Nagapattinam for product innovation.</li>
      </ul>
    </div>
    <div class="item">
      <div class="item-header">
        <span>SafeGuardX — Smart Industrial Safety Helmet</span>
        <span style="font-family: 'Space Mono', monospace; font-size: 12px;">IoT &amp; Industrial AI</span>
      </div>
      <div class="item-sub">ESP32, MAX30102, MPU6050, MQ-135, DHT22, GPS, GSM</div>
      <ul>
        <li>Integrated biometric telemetry (heart rate, SpO2) and hazard detection (toxic gases, impact, fall) with autonomous cellular emergency alerts for mining and heavy construction workers.</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="section-title"><span>Experience &amp; Internships</span> <span class="number">05</span></div>
    <div class="item">
      <div class="item-header">
        <span>Engineering &amp; Technology Intern</span>
        <span style="font-family: 'Space Mono', monospace; font-size: 12px;">Internship</span>
      </div>
      <div class="item-sub">Shiksha Vertex</div>
      <ul>
        <li>Engaged in technical skill development, engineering workflows, and collaborative project execution.</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="section-title"><span>Technical Expertise</span> <span class="number">06</span></div>
    <div class="skills-grid">
      <div class="skill-category">
        <strong>Mechanical Engineering</strong>
        <div>SolidWorks, CAD Modelling, Mechanical Design, Product Development, Additive Manufacturing, Engineering Drawing, Design Analysis, DFM.</div>
      </div>
      <div class="skill-category">
        <strong>Electronics &amp; Automation</strong>
        <div>ESP32, Arduino, IoT Systems, Embedded Systems, PCB Design, Sensors &amp; Instrumentation, Robotics, Industrial Automation.</div>
      </div>
      <div class="skill-category">
        <strong>Programming &amp; Web</strong>
        <div>HTML, CSS, JavaScript, Python Basics, Node.js, Express.js, MySQL, Bootstrap.</div>
      </div>
      <div class="skill-category">
        <strong>Tools &amp; Workflow</strong>
        <div>Git, GitHub, Canva, Microsoft Excel, Microsoft PowerPoint.</div>
      </div>
    </div>
  </section>

  <section>
    <div class="section-title"><span>Education</span> <span class="number">07</span></div>
    <div class="item">
      <div class="item-header">
        <span>Bachelor of Engineering (B.E.) — Mechanical Engineering</span>
        <span style="font-family: 'Space Mono', monospace; font-size: 12px;">Pursuing</span>
      </div>
      <div class="item-sub">K. Ramakrishnan College of Technology, Tamil Nadu, India</div>
    </div>
  </section>
</body>
</html>`;

saveFile('resume', 'resume.html', resumeHtml);
saveFile('resume', 'Infanto-Wesely-R-Resume.pdf', resumeHtml);

console.log('All visual and document assets generated successfully.');
