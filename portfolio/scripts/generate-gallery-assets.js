const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'frontend', 'assets', 'projects');

const galleryProjects = [
  {
    file: 'smart-agriculture.svg',
    title: 'SMART AGRICULTURE SYSTEM',
    sub: 'Soil Telemetry & Actuated Precision Irrigation',
    code: 'AGRI_IOT_26',
    accent: '#5E8B63',
    icon: `<path d="M50 140 C50 80, 110 50, 150 50 C190 50, 250 80, 250 140 C250 180, 200 200, 150 200 C100 200, 50 180, 50 140 Z" fill="none" stroke="#D97745" stroke-width="3"/><path d="M150 200 L150 70 M150 110 L190 85 M150 145 L110 120" stroke="#FFFFFF" stroke-width="2.5"/>`
  },
  {
    file: 'iot-monitoring.svg',
    title: 'INDUSTRIAL IOT MONITORING',
    sub: 'Edge Transducer Telemetry & Dashboard Telematics',
    code: 'EDGE_HUB_ESP32',
    accent: '#4A7C9B',
    icon: `<rect x="60" y="60" width="180" height="130" rx="8" fill="none" stroke="#D97745" stroke-width="3"/><circle cx="150" cy="125" r="30" fill="none" stroke="#FFFFFF" stroke-width="2.5"/><path d="M150 75 L150 95 M150 155 L150 175 M100 125 L120 125 M180 125 L200 125" stroke="#D97745" stroke-width="2.5"/>`
  },
  {
    file: 'mechanical-cad.svg',
    title: 'PARAMETRIC MECHANICAL DESIGN',
    sub: 'SolidWorks Kinematics & Stress Minimization',
    code: 'CAD_SW_ISO',
    accent: '#B85D38',
    icon: `<polygon points="150,50 240,105 240,195 150,250 60,195 60,105" fill="none" stroke="#D97745" stroke-width="3"/><line x1="150" y1="50" x2="150" y2="250" stroke="#FFFFFF" stroke-width="1.8"/><line x1="60" y1="105" x2="240" y2="195" stroke="#FFFFFF" stroke-width="1.8"/><line x1="60" y1="195" x2="240" y2="105" stroke="#FFFFFF" stroke-width="1.8"/>`
  },
  {
    file: 'embedded-automation.svg',
    title: 'EMBEDDED AUTOMATION',
    sub: 'Microcontroller Timing Loops & Relay Sequencer',
    code: 'FIRMWARE_C',
    accent: '#82659B',
    icon: `<rect x="70" y="70" width="160" height="160" rx="4" fill="none" stroke="#D97745" stroke-width="3"/><circle cx="150" cy="150" r="40" fill="none" stroke="#FFFFFF" stroke-width="2"/><path d="M70 100 L45 100 M70 130 L45 130 M70 160 L45 160 M70 190 L45 190 M230 100 L255 100 M230 130 L255 130 M230 160 L255 160 M230 190 L255 190" stroke="#D97745" stroke-width="3"/>`
  },
  {
    file: 'robotics.svg',
    title: 'MULTI-AXIS ROBOTICS',
    sub: 'Servo Inverse Kinematics & Actuator Control',
    code: 'ROBOT_ARM_6DOF',
    accent: '#9E854E',
    icon: `<path d="M70 230 L110 170 L190 150 L225 80" fill="none" stroke="#D97745" stroke-width="3.5"/><circle cx="70" cy="230" r="8" fill="#FFFFFF"/><circle cx="110" cy="170" r="8" fill="#FFFFFF"/><circle cx="190" cy="150" r="8" fill="#FFFFFF"/><circle cx="225" cy="80" r="6" fill="#D97745"/>`
  },
  {
    file: 'additive-mfg.svg',
    title: 'ADDITIVE MANUFACTURING (3D PRINTING)',
    sub: 'Rapid Functional Prototyping & PETG Infill Spec',
    code: 'FDM_RAPID_PROT',
    accent: '#4F8885',
    icon: `<path d="M80 220 L150 180 L220 220 L150 260 Z" fill="none" stroke="#FFFFFF" stroke-width="2"/><path d="M80 180 L150 140 L220 180 L150 220 Z" fill="none" stroke="#D97745" stroke-width="2"/><path d="M150 50 L150 110 M140 110 L160 110" stroke="#FFFFFF" stroke-width="3"/><path d="M145 110 L150 130 L155 110 Z" fill="#D97745"/>`
  },
  {
    file: 'industrial-monitoring.svg',
    title: 'VIBRATION & MACHINE MONITORING',
    sub: 'Preventative Threshold Alerting & Health Index',
    code: 'PRED_MAINT_VIB',
    accent: '#9C4D4D',
    icon: `<path d="M50 150 L85 150 L100 110 L120 190 L140 80 L160 210 L180 130 L200 165 L215 150 L250 150" fill="none" stroke="#D97745" stroke-width="3" stroke-linecap="round"/><circle cx="150" cy="150" r="95" fill="none" stroke="#333333" stroke-width="1.5" stroke-dasharray="4 4"/>`
  }
];

galleryProjects.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350">
    <rect width="500" height="350" fill="#141414"/>
    <rect x="2" y="2" width="496" height="346" fill="none" stroke="#252525" stroke-width="1.5"/>
    <line x1="20" y1="20" x2="480" y2="20" stroke="#202020" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="20" y1="330" x2="480" y2="330" stroke="#202020" stroke-width="1" stroke-dasharray="3 3"/>
    
    <g transform="translate(100, 10)">
      ${p.icon}
    </g>

    <g transform="translate(30, 275)">
      <text x="0" y="0" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="#D97745">${p.code}</text>
      <text x="0" y="22" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">${p.title}</text>
      <text x="0" y="40" font-family="'Inter', sans-serif" font-size="11" fill="#888888">${p.sub}</text>
    </g>
  </svg>`;
  fs.writeFileSync(path.join(DIR, p.file), svg, 'utf-8');
  console.log('Created:', p.file);
});
