const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'frontend', 'assets', 'projects');

// 1. ThermoMix Smart Case Study Schematic
const thermoMixSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="1000" height="650">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&amp;family=Space+Mono:wght@400;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; fill: #FFFFFF; letter-spacing: 1px; }
      .subtitle { font-family: 'Space Mono', monospace; font-size: 11px; fill: #0A84FF; letter-spacing: 1.5px; }
      .box-title { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 700; fill: #FFFFFF; }
      .box-desc { font-family: 'Inter', sans-serif; font-size: 11px; fill: #A0A0A0; line-height: 1.45; }
      .tag { font-family: 'Space Mono', monospace; font-size: 9.5px; fill: #0A84FF; font-weight: 700; }
    </style>
  </defs>

  <rect width="1000" height="650" fill="#0C0E12" rx="8"/>
  <rect x="2" y="2" width="996" height="646" fill="none" stroke="#1E232F" stroke-width="1.5" rx="7"/>

  <!-- Background Grid -->
  <g stroke="#141822" stroke-width="1">
    <line x1="50" y1="50" x2="950" y2="50"/>
    <line x1="50" y1="180" x2="950" y2="180"/>
    <line x1="50" y1="360" x2="950" y2="360"/>
    <line x1="50" y1="560" x2="950" y2="560"/>
  </g>

  <!-- Header -->
  <g transform="translate(60, 50)">
    <text x="0" y="0" class="subtitle">INFANTO WESELY R // SMART THERMAL AUTOMATION</text>
    <text x="0" y="32" class="title">THERMOMIX SMART — PRECISION THERMAL FLUID MIXING SYSTEM</text>
    <text x="0" y="55" font-family="'Inter', sans-serif" font-size="12" fill="#888888">
      Closed-Loop PID Temperature Regulation with Motorized Impeller Viscosity Telemetry
    </text>

    <!-- Top Badge -->
    <rect x="680" y="5" width="200" height="30" rx="3" fill="#131926" stroke="#0A84FF" stroke-width="1"/>
    <text x="780" y="24" class="tag" text-anchor="middle">STATUS: WORKING PROTOTYPE</text>
  </g>

  <!-- Flow Pipeline -->
  <g transform="translate(60, 160)">
    <!-- Stage 01: Thermal Sensing -->
    <g transform="translate(0, 0)">
      <rect width="190" height="220" fill="#11151F" stroke="#1E2738" stroke-width="1.5" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#0A84FF"/>
      <text x="45" y="28" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STAGE 01</text>
      <text x="15" y="65" class="box-title">DUAL THERMAL PROBES</text>
      <text x="15" y="90" class="box-desc">
        Dual DS18B20 &amp; K-type thermocouple probes continuously measuring chamber fluid core and surface heat gradients.
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#1A2233"/>
      <text x="15" y="170" class="tag">• 0.1°C SENSITIVITY</text>
      <text x="15" y="190" class="tag">• ANTI-CORROSION PROBE</text>
    </g>

    <path d="M 195,110 L 235,110" fill="none" stroke="#0A84FF" stroke-width="2"/>

    <!-- Stage 02: PID Control Core -->
    <g transform="translate(240, 0)">
      <rect width="190" height="220" fill="#11151F" stroke="#0A84FF" stroke-width="1.8" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#152136" stroke="#0A84FF" stroke-width="1"/>
      <text x="45" y="28" class="tag" text-anchor="middle">STAGE 02</text>
      <text x="15" y="65" class="box-title">CLOSED-LOOP PID CORE</text>
      <text x="15" y="90" class="box-desc">
        Microcontroller-driven PID loop dynamically adjusting induction heating pulse-width modulation (PWM) to prevent thermal overshoot.
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#1A2233"/>
      <text x="15" y="170" class="tag">• PWM HEATING LOGIC</text>
      <text x="15" y="190" class="tag">• ZERO OVERSHOOT</text>
    </g>

    <path d="M 435,110 L 475,110" fill="none" stroke="#0A84FF" stroke-width="2"/>

    <!-- Stage 03: Motorized Mixing -->
    <g transform="translate(480, 0)">
      <rect width="190" height="220" fill="#11151F" stroke="#1E2738" stroke-width="1.5" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#152136" stroke="#38BDF8" stroke-width="1"/>
      <text x="45" y="28" font-family="'Space Mono', monospace" font-size="10" fill="#38BDF8" text-anchor="middle">STAGE 03</text>
      <text x="15" y="65" class="box-title">VARIABLE BLENDER</text>
      <text x="15" y="90" class="box-desc">
        BLDC motor with closed-loop optical encoder regulating continuous shear mixing, vortex control, and cavitation suppression.
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#1A2233"/>
      <text x="15" y="170" class="tag">• 200–3500 RPM BLDC</text>
      <text x="15" y="190" class="tag">• TORQUE FEEDBACK</text>
    </g>

    <path d="M 675,110 L 715,110" fill="none" stroke="#0A84FF" stroke-width="2"/>

    <!-- Stage 04: Telemetry & Safety -->
    <g transform="translate(720, 0)">
      <rect width="190" height="220" fill="#11151F" stroke="#0A84FF" stroke-width="2" rx="6"/>
      <rect x="15" y="15" width="60" height="20" rx="3" fill="#0A84FF"/>
      <text x="45" y="28" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">STAGE 04</text>
      <text x="15" y="65" class="box-title">TELEMETRY &amp; OLED</text>
      <text x="15" y="90" class="box-desc">
        In-situ OLED display monitoring setpoints, live temperature curves, thermal runaway interlocks, and Bluetooth telemetry streaming.
      </text>
      <line x1="15" y1="145" x2="175" y2="145" stroke="#1A2233"/>
      <text x="15" y="170" class="tag">• AUTO THERMAL CUTOFF</text>
      <text x="15" y="190" class="tag">• LIVE BLE LOGGING</text>
    </g>
  </g>

  <!-- Bottom Specs -->
  <g transform="translate(60, 430)">
    <rect width="880" height="150" fill="#11151F" stroke="#1C2433" stroke-width="1" rx="6"/>
    <text x="30" y="35" class="subtitle">HARDWARE ARCHITECTURE &amp; MECHATRONIC INTEGRATION</text>
    
    <g transform="translate(30, 60)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">MICROCONTROLLER</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="11" fill="#888888">ESP32 dual-core with hardware timer interrupts for PID</text>
      <text x="0" y="45" class="tag">REAL-TIME INTERRUPT DRIVEN</text>
    </g>

    <g transform="translate(330, 60)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">MECHANICAL CHASSIS</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="11" fill="#888888">SolidWorks designed thermal-barrier acrylic &amp; stainless baffle</text>
      <text x="0" y="45" class="tag">HEAT-RESISTANT PETG ENCLOSURE</text>
    </g>

    <g transform="translate(630, 60)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">APPLICATIONS</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="11" fill="#888888">Food science research, lab chemistry, and fluid formulation.</text>
      <text x="0" y="45" font-family="'Space Mono', monospace" font-size="9" fill="#0A84FF">TESTED WITH HIGH-VISCOSITY FLUIDS</text>
    </g>
  </g>
</svg>`;

// 2. Data Analytics: Python & Pandas Telemetry Dashboard
const analyticsDashboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="1000" height="650">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&amp;family=Space+Mono:wght@400;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .title { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; fill: #FFFFFF; }
      .meta { font-family: 'Space Mono', monospace; font-size: 11px; fill: #0A84FF; font-weight: 700; }
      .card-title { font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 700; fill: #E2E8F0; }
      .metric-val { font-family: 'Space Mono', monospace; font-size: 22px; font-weight: 700; fill: #FFFFFF; }
      .label { font-family: 'Inter', sans-serif; font-size: 10px; fill: #94A3B8; }
    </style>
  </defs>

  <rect width="1000" height="650" fill="#0A0C10" rx="8"/>
  <rect x="2" y="2" width="996" height="646" fill="none" stroke="#1E232E" stroke-width="1.5" rx="7"/>

  <!-- Top Dashboard Bar -->
  <g transform="translate(40, 40)">
    <rect width="920" height="60" fill="#11141B" stroke="#1E2535" stroke-width="1" rx="6"/>
    <text x="25" y="36" class="title">PYTHON &amp; PANDAS // SENSOR TELEMETRY &amp; ANOMALY ANALYTICS</text>
    <rect x="740" y="16" width="155" height="28" rx="4" fill="#141E33" stroke="#0A84FF" stroke-width="1"/>
    <text x="817" y="34" class="meta" text-anchor="middle">PYTHON 3.11 • EDA</text>
  </g>

  <!-- 4 KPI Metrics Cards -->
  <g transform="translate(40, 120)">
    <!-- KPI 1 -->
    <rect x="0" y="0" width="215" height="85" fill="#11141B" stroke="#1E2535" rx="5"/>
    <text x="18" y="26" class="label">RECORDS PROCESSED</text>
    <text x="18" y="56" class="metric-val">128,450</text>
    <text x="18" y="74" class="meta" font-size="9.5">+100% CLEANED &amp; INDEXED</text>

    <!-- KPI 2 -->
    <rect x="235" y="0" width="215" height="85" fill="#11141B" stroke="#1E2535" rx="5"/>
    <text x="18" y="26" class="label">ANOMALIES DETECTED</text>
    <text x="18" y="56" class="metric-val" fill="#38BDF8">412</text>
    <text x="18" y="74" class="meta" font-size="9.5">Z-SCORE &gt; 3.0 THRESHOLD</text>

    <!-- KPI 3 -->
    <rect x="470" y="0" width="215" height="85" fill="#11141B" stroke="#1E2535" rx="5"/>
    <text x="18" y="26" class="label">HYDRAULIC PRESSURE MEAN</text>
    <text x="18" y="56" class="metric-val">184.6 <tspan font-size="13">bar</tspan></text>
    <text x="18" y="74" class="meta" font-size="9.5">STD: ± 14.2 bar</text>

    <!-- KPI 4 -->
    <rect x="705" y="0" width="215" height="85" fill="#11141B" stroke="#0A84FF" stroke-width="1.2" rx="5"/>
    <text x="18" y="26" class="label">PREDICTIVE HEALTH INDEX</text>
    <text x="18" y="56" class="metric-val" fill="#0A84FF">97.8%</text>
    <text x="18" y="74" class="meta" font-size="9.5">RELIABILITY CONFIRMED</text>
  </g>

  <!-- Main Chart Section: Time Series with Anomaly Flags -->
  <g transform="translate(40, 225)">
    <rect width="590" height="260" fill="#11141B" stroke="#1E2535" rx="6"/>
    <text x="25" y="30" class="card-title">REAL-TIME SENSOR TIME-SERIES &amp; ANOMALY SPIKE DETECTION</text>
    <text x="565" y="30" class="meta" text-anchor="end" font-size="9.5">SEABORN / MATPLOTLIB</text>

    <!-- Grid lines -->
    <line x1="40" y1="60" x2="550" y2="60" stroke="#1A202E"/>
    <line x1="40" y1="110" x2="550" y2="110" stroke="#1A202E"/>
    <line x1="40" y1="160" x2="550" y2="160" stroke="#1A202E"/>
    <line x1="40" y1="210" x2="550" y2="210" stroke="#1A202E"/>

    <!-- Waveform Line (Normal in Blue) -->
    <path d="M 40,150 Q 80,130 110,145 T 160,140 T 210,155 T 260,135 T 290,148 T 330,65 T 350,142 T 400,138 T 440,146 T 470,72 T 490,144 T 550,135" fill="none" stroke="#0A84FF" stroke-width="2.5"/>

    <!-- Red Anomaly Flags -->
    <circle cx="330" cy="65" r="5" fill="#EF4444"/>
    <line x1="330" y1="65" x2="330" y2="95" stroke="#EF4444" stroke-dasharray="2 2"/>
    <text x="330" y="110" font-family="'Space Mono', monospace" font-size="8.5" fill="#EF4444" text-anchor="middle">SPIKE: 242 bar</text>

    <circle cx="470" cy="72" r="5" fill="#EF4444"/>
    <line x1="470" y1="72" x2="470" y2="98" stroke="#EF4444" stroke-dasharray="2 2"/>
    <text x="470" y="112" font-family="'Space Mono', monospace" font-size="8.5" fill="#EF4444" text-anchor="middle">THERMAL SURGE</text>

    <!-- Legend -->
    <rect x="40" y="235" width="12" height="6" fill="#0A84FF"/>
    <text x="60" y="241" class="label">Operating Telemetry</text>
    <circle cx="200" cy="238" r="4" fill="#EF4444"/>
    <text x="212" y="241" class="label">Statistical Outliers (z &gt; 3.0)</text>
  </g>

  <!-- Side Chart: Frequency Distribution / Histogram -->
  <g transform="translate(650, 225)">
    <rect width="310" height="260" fill="#11141B" stroke="#1E2535" rx="6"/>
    <text x="20" y="30" class="card-title">FREQUENCY DISTRIBUTION</text>
    <text x="290" y="30" class="meta" text-anchor="end" font-size="9.5">NUMPY / PANDAS</text>

    <!-- Histogram Bars -->
    <g transform="translate(30, 60)">
      <rect x="10" y="130" width="22" height="30" fill="#1C273C" stroke="#0A84FF"/>
      <rect x="40" y="90" width="22" height="70" fill="#1C273C" stroke="#0A84FF"/>
      <rect x="70" y="50" width="22" height="110" fill="#1C273C" stroke="#0A84FF"/>
      <rect x="100" y="20" width="22" height="140" fill="#0A84FF"/>
      <rect x="130" y="40" width="22" height="120" fill="#1C273C" stroke="#0A84FF"/>
      <rect x="160" y="80" width="22" height="80" fill="#1C273C" stroke="#0A84FF"/>
      <rect x="190" y="125" width="22" height="35" fill="#1C273C" stroke="#0A84FF"/>
      <rect x="220" y="145" width="22" height="15" fill="#EF4444"/>
      <line x1="0" y1="160" x2="250" y2="160" stroke="#475569"/>
    </g>

    <text x="20" y="240" class="label">Normal Gaussian bell curve with positive skew tail.</text>
  </g>

  <!-- Footer Insight Bar -->
  <g transform="translate(40, 505)">
    <rect width="920" height="105" fill="#11141B" stroke="#1E2535" rx="6"/>
    <text x="25" y="32" class="meta">ENGINEERING DATA INSIGHTS &amp; PIPELINE STACK</text>
    <text x="25" y="58" font-family="'Inter', sans-serif" font-size="11.5" fill="#CBD5E1">
      • Data Ingestion: Automated CSV/JSON sensor stream imports with regex validation.
    </text>
    <text x="25" y="78" font-family="'Inter', sans-serif" font-size="11.5" fill="#CBD5E1">
      • Preprocessing: Missing values imputed via rolling median; timestamp synchronization with pandas Resample.
    </text>
    <text x="650" y="58" class="meta">• STACK: Python, Pandas, NumPy</text>
    <text x="650" y="78" class="meta">• VISUALS: Matplotlib, Seaborn</text>
  </g>
</svg>`;

// 3. Data Analytics: Excel Advanced Modeling & Pivot Dashboard
const analyticsExcelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="1000" height="650">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&amp;family=Space+Mono:wght@400;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .title { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; fill: #FFFFFF; }
      .meta { font-family: 'Space Mono', monospace; font-size: 11px; fill: #10B981; font-weight: 700; }
      .sheet-hdr { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; fill: #FFFFFF; }
      .sheet-cell { font-family: 'Space Mono', monospace; font-size: 11px; fill: #E2E8F0; }
    </style>
  </defs>

  <rect width="1000" height="650" fill="#0A0C10" rx="8"/>
  <rect x="2" y="2" width="996" height="646" fill="none" stroke="#1E232E" stroke-width="1.5" rx="7"/>

  <!-- Excel Top Header -->
  <g transform="translate(40, 40)">
    <rect width="920" height="60" fill="#11161F" stroke="#1A2433" rx="6"/>
    <text x="25" y="36" class="title">MICROSOFT EXCEL // ADVANCED DYNAMIC MODELING &amp; PIVOT SUITE</text>
    <rect x="730" y="16" width="165" height="28" rx="4" fill="#0D281E" stroke="#10B981" stroke-width="1"/>
    <text x="812" y="34" class="meta" text-anchor="middle">EXCEL • XLOOKUP • PIVOTS</text>
  </g>

  <!-- Spreadsheet Table Simulation -->
  <g transform="translate(40, 120)">
    <rect width="920" height="260" fill="#0F141C" stroke="#1E2638" rx="6"/>
    
    <!-- Header Row -->
    <rect x="0" y="0" width="920" height="36" fill="#16202E" rx="6 6 0 0"/>
    <text x="25" y="23" class="sheet-hdr">COMPONENT_ID</text>
    <text x="180" y="23" class="sheet-hdr">SYSTEM DOMAIN</text>
    <text x="360" y="23" class="sheet-hdr">PLANNED BUDGET</text>
    <text x="520" y="23" class="sheet-hdr">ACTUAL SPEND</text>
    <text x="680" y="23" class="sheet-hdr">VARIANCE (%)</text>
    <text x="820" y="23" class="sheet-hdr">STATUS</text>

    <!-- Row 1 -->
    <rect x="0" y="36" width="920" height="40" fill="#0F141C" stroke="#161E2D" stroke-width="0.5"/>
    <text x="25" y="61" class="sheet-cell">VW-DSP-01</text>
    <text x="180" y="61" class="sheet-cell">Vibrawave DSP Core</text>
    <text x="360" y="61" class="sheet-cell">₹ 42,000</text>
    <text x="520" y="61" class="sheet-cell">₹ 39,450</text>
    <text x="680" y="61" class="sheet-cell" fill="#10B981">- 6.07%</text>
    <text x="820" y="61" class="sheet-cell" fill="#10B981">OPTIMAL</text>

    <!-- Row 2 -->
    <rect x="0" y="76" width="920" height="40" fill="#131924" stroke="#161E2D" stroke-width="0.5"/>
    <text x="25" y="101" class="sheet-cell">SG-SENS-04</text>
    <text x="180" y="101" class="sheet-cell">SafeGuardX IMU Hub</text>
    <text x="360" y="101" class="sheet-cell">₹ 18,500</text>
    <text x="520" y="101" class="sheet-cell">₹ 18,100</text>
    <text x="680" y="101" class="sheet-cell" fill="#10B981">- 2.16%</text>
    <text x="820" y="101" class="sheet-cell" fill="#10B981">OPTIMAL</text>

    <!-- Row 3 -->
    <rect x="0" y="116" width="920" height="40" fill="#0F141C" stroke="#161E2D" stroke-width="0.5"/>
    <text x="25" y="141" class="sheet-cell">HYD-MON-02</text>
    <text x="180" y="141" class="sheet-cell">Hydraulic Transducers</text>
    <text x="360" y="141" class="sheet-cell">₹ 55,000</text>
    <text x="520" y="141" class="sheet-cell">₹ 53,200</text>
    <text x="680" y="141" class="sheet-cell" fill="#10B981">- 3.27%</text>
    <text x="820" y="141" class="sheet-cell" fill="#10B981">OPTIMAL</text>

    <!-- Row 4 -->
    <rect x="0" y="156" width="920" height="40" fill="#131924" stroke="#161E2D" stroke-width="0.5"/>
    <text x="25" y="181" class="sheet-cell">TMX-HEAT-03</text>
    <text x="180" y="181" class="sheet-cell">ThermoMix Induction</text>
    <text x="360" y="181" class="sheet-cell">₹ 24,000</text>
    <text x="520" y="181" class="sheet-cell">₹ 25,600</text>
    <text x="680" y="181" class="sheet-cell" fill="#F59E0B">+ 6.67%</text>
    <text x="820" y="181" class="sheet-cell" fill="#F59E0B">REVIEW</text>

    <!-- Row 5 (Totals) -->
    <rect x="0" y="196" width="920" height="40" fill="#16202E" stroke="#161E2D" stroke-width="0.5"/>
    <text x="25" y="221" class="sheet-cell" font-weight="700">AGGREGATE</text>
    <text x="180" y="221" class="sheet-cell" font-weight="700">All Active R&amp;D Lines</text>
    <text x="360" y="221" class="sheet-cell" font-weight="700">₹ 1,39,500</text>
    <text x="520" y="221" class="sheet-cell" font-weight="700">₹ 1,36,350</text>
    <text x="680" y="221" class="sheet-cell" fill="#10B981" font-weight="700">- 2.26%</text>
    <text x="820" y="221" class="sheet-cell" fill="#10B981" font-weight="700">UNDER BUDGET</text>
  </g>

  <!-- Highlights & Formulas -->
  <g transform="translate(40, 400)">
    <rect width="920" height="195" fill="#11161F" stroke="#1E2638" rx="6"/>
    <text x="25" y="32" class="meta">ANALYTICAL FUNCTIONS &amp; DASHBOARD FEATURES</text>

    <g transform="translate(25, 55)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">DYNAMIC LOOKUP &amp; INDEX MATCH</text>
      <text x="0" y="22" font-family="'Inter', sans-serif" font-size="11.5" fill="#94A3B8">Seamless relational linkage between component bill-of-materials and procurement price indexes.</text>
      <text x="0" y="44" font-family="'Space Mono', monospace" font-size="10.5" fill="#0A84FF">=XLOOKUP(part_id, catalog_table[id], catalog_table[cost], "Not Found")</text>
    </g>

    <g transform="translate(500, 55)">
      <text x="0" y="0" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">MULTI-DIMENSIONAL PIVOT TABLES</text>
      <text x="0" y="22" font-family="'Inter', sans-serif" font-size="11.5" fill="#94A3B8">Automated slicers filtering development iterations by timeline, supplier, and testing status.</text>
      <text x="0" y="44" font-family="'Space Mono', monospace" font-size="10.5" fill="#10B981">GETPIVOTDATA("Variance", PivotTable1, "Phase", "Prototype")</text>
    </g>
  </g>
</svg>`;

// 4. Web Development: IoT Telemetry & Portal Full-Stack Preview
const webdevDashboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="1000" height="650">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&amp;family=Space+Mono:wght@400;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .browser-hdr { font-family: 'Space Mono', monospace; font-size: 11px; fill: #64748B; }
      .app-title { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; fill: #FFFFFF; }
      .nav-item { font-family: 'Inter', sans-serif; font-size: 11px; fill: #94A3B8; }
      .card-h { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 700; fill: #E2E8F0; }
      .code-line { font-family: 'Space Mono', monospace; font-size: 11px; fill: #38BDF8; }
    </style>
  </defs>

  <rect width="1000" height="650" fill="#0A0C10" rx="8"/>
  <rect x="2" y="2" width="996" height="646" fill="none" stroke="#1E232E" stroke-width="1.5" rx="7"/>

  <!-- Browser Frame Window -->
  <g transform="translate(40, 40)">
    <rect width="920" height="570" fill="#0E121A" stroke="#1F2637" rx="8"/>
    
    <!-- Browser Top Bar -->
    <rect width="920" height="42" fill="#141923" rx="8 8 0 0"/>
    <circle cx="25" cy="21" r="5" fill="#EF4444"/>
    <circle cx="42" cy="21" r="5" fill="#F59E0B"/>
    <circle cx="59" cy="21" r="5" fill="#10B981"/>

    <rect x="180" y="8" width="560" height="26" rx="4" fill="#0C0F17" stroke="#252F44"/>
    <text x="460" y="25" class="browser-hdr" text-anchor="middle">https://infanto-telemetry-portal.app/live-feed</text>

    <!-- Web App Sidebar -->
    <g transform="translate(0, 42)">
      <rect width="180" height="528" fill="#101520" stroke="#1F2637" stroke-width="0.5"/>
      <text x="25" y="40" class="app-title" font-size="14">IWR PORTAL</text>
      
      <g transform="translate(25, 75)">
        <text x="0" y="0" class="nav-item" fill="#0A84FF" font-weight="700">● LIVE MONITOR</text>
        <text x="0" y="32" class="nav-item">◈ REST API DOCS</text>
        <text x="0" y="64" class="nav-item">◈ SENSOR LOGS</text>
        <text x="0" y="96" class="nav-item">◈ MYSQL TELEMETRY</text>
        <text x="0" y="128" class="nav-item">◈ CLIENT INTERFACE</text>
      </g>

      <rect x="15" y="440" width="150" height="65" rx="4" fill="#161D2B"/>
      <text x="25" y="465" font-family="'Space Mono', monospace" font-size="9" fill="#0A84FF">STACK ARCHITECTURE</text>
      <text x="25" y="485" font-family="'Inter', sans-serif" font-size="10" fill="#CBD5E1">Node.js • Express • MySQL</text>
    </g>

    <!-- Web App Main Content -->
    <g transform="translate(205, 65)">
      <!-- API Live Endpoint Banner -->
      <rect width="690" height="65" fill="#131926" stroke="#232E44" rx="6"/>
      <text x="25" y="28" class="card-h">EXPRESS.JS REST API STATUS // 200 OK</text>
      <text x="25" y="48" class="code-line">GET /api/v1/sensors/telemetry -&gt; Response Time: 14ms | Compression: gzip</text>

      <!-- 2 Cards Grid -->
      <g transform="translate(0, 85)">
        <rect width="335" height="180" fill="#121722" stroke="#1F2739" rx="6"/>
        <text x="20" y="28" class="card-h">FRONTEND: HTML5 / CSS3 / JS</text>
        <text x="20" y="55" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Semantic HTML5 document structure</text>
        <text x="20" y="80" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Modular CSS3 Flexbox &amp; Grid layouts</text>
        <text x="20" y="105" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Vanilla ES6+ async/await fetch pipeline</text>
        <text x="20" y="130" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Dynamic DOM mutation without reloads</text>
        <text x="20" y="155" font-family="'Space Mono', monospace" font-size="10" fill="#0A84FF">RESPONSIVE &amp; LIGHTWEIGHT</text>

        <rect x="355" y="0" width="335" height="180" fill="#121722" stroke="#1F2739" rx="6"/>
        <text x="20" y="28" class="card-h">BACKEND: NODE / EXPRESS / MYSQL</text>
        <text x="20" y="55" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Express middleware for CORS &amp; rate limit</text>
        <text x="20" y="80" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Input sanitization &amp; strict schema check</text>
        <text x="20" y="105" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Relational MySQL pool with JSON fallback</text>
        <text x="20" y="130" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">• Vercel serverless function export</text>
        <text x="20" y="155" font-family="'Space Mono', monospace" font-size="10" fill="#10B981">ZERO STANDALONE SERVER LAG</text>
      </g>

      <!-- Code Snippet Area -->
      <g transform="translate(0, 285)">
        <rect width="690" height="175" fill="#0B0E14" stroke="#1E273A" rx="6"/>
        <text x="20" y="25" font-family="'Space Mono', monospace" font-size="10" fill="#64748B">// SERVER CONTROLLER SNIPPET</text>
        <text x="20" y="50" class="code-line">app.post('/api/contact', async (req, res) =&gt; {</text>
        <text x="45" y="72" class="code-line">const { name, email, subject, message } = req.body;</text>
        <text x="45" y="94" class="code-line">if (!isValidEmail(email)) return res.status(400).json({ error: "Invalid email" });</text>
        <text x="45" y="116" class="code-line">await db.query('INSERT INTO contact_messages SET ?', newEntry);</text>
        <text x="45" y="138" class="code-line">return res.status(200).json({ success: true, refId: newEntry.id });</text>
        <text x="20" y="160" class="code-line">});</text>
      </g>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(ASSETS_DIR, 'thermomix-schematic.svg'), thermoMixSvg, 'utf-8');
console.log('Created: thermomix-schematic.svg');

fs.writeFileSync(path.join(ASSETS_DIR, 'analytics-telemetry-dashboard.svg'), analyticsDashboardSvg, 'utf-8');
console.log('Created: analytics-telemetry-dashboard.svg');

fs.writeFileSync(path.join(ASSETS_DIR, 'analytics-excel-model.svg'), analyticsExcelSvg, 'utf-8');
console.log('Created: analytics-excel-model.svg');

fs.writeFileSync(path.join(ASSETS_DIR, 'webdev-iot-dashboard.svg'), webdevDashboardSvg, 'utf-8');
console.log('Created: webdev-iot-dashboard.svg');
