/**
 * INFANTO WESELY R — PORTFOLIO CLIENT APPLICATION
 * Founder & CEO — REX HÖREN INDUSTRIES
 * Interactive navigation, modal controllers, patent lightbox,
 * project case studies, and backend form integration.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initExpertiseTabs();
    initProjectModals();
    initPatentLightbox();
    initContactForm();
    initAnimations();
    initDynamicYear();
});

/* ==========================================================
   1. NAVIGATION & ACTIVE SECTION SPY
   ========================================================== */
function initNavigation() {
    const navbar = document.getElementById('siteNav');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const sections = document.querySelectorAll('section[id], header[id]');

    // Toggle Mobile Drawer
    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
            const icon = mobileToggle.querySelector('[data-lucide]');
            if (icon) {
                icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
                if (window.lucide) lucide.createIcons();
            }
        });

        // Close mobile drawer on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileToggle.querySelector('[data-lucide]');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    if (window.lucide) lucide.createIcons();
                }
            });
        });
    }

    // Scroll Navbar Background Enhancement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(17, 17, 17, 0.96)';
            navbar.style.borderBottomColor = 'rgba(243, 241, 235, 0.16)';
        } else {
            navbar.style.backgroundColor = 'rgba(17, 17, 17, 0.88)';
            navbar.style.borderBottomColor = 'rgba(243, 241, 235, 0.08)';
        }
    }, { passive: true });

    // Active Section Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });

                mobileLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
}

/* ==========================================================
   2. TECHNICAL EXPERTISE INTERACTIVE CATEGORIES
   ========================================================== */
function initExpertiseTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.skill-category-card');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetCategory = btn.getAttribute('data-target');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (targetCategory === 'all' || targetCategory === category) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
}

/* ==========================================================
   3. DETAILED PROJECT CASE STUDY MODALS
   ========================================================== */
const projectDataStore = {
    vibrawave: {
        title: "VIBRAWAVE — THE HEARING AID",
        category: "Assistive Technology / Product Innovation",
        company: "REX HÖREN INDUSTRIES (Flagship Product)",
        tagline: "Tactile vibration acoustic interface through cranial trigeminal nerve stimulation.",
        award: "Third Prize – ARIFA Hackathon, Nagapattinam",
        disclaimer: "Proof of concept & development prototype. This engineering project is not a clinically validated or certified medical device.",
        overview: "Vibrawave is an assistive technology concept designed to convert acoustic information into tactile vibration signals through trigeminal nerve stimulation rather than conventional hearing amplification or bone conduction.",
        problemStatement: "Traditional hearing aids rely on acoustic amplification through the damaged auditory canal, which fails for individuals with severe sensorineural hearing loss, atresia, or chronic ear canal infections. Conventional bone-conduction transducers require high clamping pressure and bulky mechanical headbands that cause discomfort.",
        proposedSolution: "Vibrawave bypasses damaged auditory pathways entirely by translating incoming sound frequencies into precise tactile micro-vibration patterns targeted over cutaneous branches of the cranial trigeminal nerve. The brain's neuroplasticity interprets these tactile modulations to recognize phonetic and environmental cues.",
        workingPrinciple: "Acoustic signals captured by high-sensitivity MEMS microphones undergo real-time digital filtering. Adaptive algorithms isolate human speech formants and compress high-frequency acoustic data into tactile mechanoreceptive sensitivity ranges (50 Hz – 350 Hz). A custom resonant vibration transducer transmits modulated tactile pulses directly to the skin.",
        architecture: [
            "Acoustic Capture: Omnidirectional MEMS microphone with ultra-low noise floor",
            "Digital Signal Processing: Real-time spectral segmentation & formant extraction",
            "Adaptive Noise Reduction: Real-time environmental ambient noise suppression",
            "Wireless Subsystem: Bluetooth 5.0 for configuration & auxiliary audio input",
            "Tactile Transducer: Custom resonant linear vibration motor",
            "Power Architecture: Rechargeable Li-Po cell with USB-C battery management IC",
            "Ergonomics: Additive manufactured modular chassis for mastoid & neck placement"
        ],
        infantoContribution: "As Founder & CEO of Rex Hören Industries, Infanto Wesely R conceived the product concept, designed the hardware schematic, selected the sensor and DSP architecture, supervised additive chassis prototyping, and led the team to win Third Prize at the ARIFA Hackathon in Nagapattinam.",
        currentStatus: "Benchtop proof-of-concept prototype completed and tested for frequency-to-vibration response. Signal filtering algorithms validated in laboratory simulation.",
        futureRoadmap: "Miniaturization of DSP firmware into dedicated ASIC/FPGA, optimization of transducer power efficiency, and user-experience tactile mapping studies."
    },
    safeguardx: {
        title: "SAFEGUARDX — SMART INDUSTRIAL SAFETY HELMET",
        category: "Industrial Safety / AI and IoT",
        company: "INFANTO WESELY R",
        tagline: "Multi-sensor biometric telemetry & hazardous environmental threat detection.",
        disclaimer: "Industrial safety research prototype developed for harsh operational environments.",
        overview: "SafeGuardX is a smart industrial safety helmet concept integrating connected multi-parameter sensors for comprehensive industrial worker health and hazardous environment monitoring.",
        problemStatement: "In underground mining, high-rise construction, and petrochemical plants, workers are exposed to sudden toxic gas leaks, thermal exhaustion, hypoxia, and traumatic head impacts. Conventional passive helmets protect against falling debris but fail to provide early warning or real-time geolocation in emergencies.",
        proposedSolution: "SafeGuardX transforms passive personal protective equipment into an active telemetry node. It continuously tracks vital signs, ambient environmental hazards, and sudden kinematic impacts, instantly transmitting SOS alerts with GPS coordinates over cellular GSM networks.",
        workingPrinciple: "Sensors integrated into the helmet headband and outer crown continuously poll physiological parameters (SpO2, heart rate) and ambient atmospheric conditions (toxic gas, humidity, temperature). An onboard ESP32 evaluates incoming readings against safety threshold bounds. Upon anomaly detection or high-G shock, local audible and visual alarms activate simultaneously with remote SMS/IoT telemetry dispatch.",
        architecture: [
            "Processing Core: Dual-core ESP32 microcontroller with Wi-Fi & Bluetooth",
            "Biometric Sensor: MAX30102 pulse oximeter and heart rate sensor on inner headband",
            "Kinematic IMU: MPU6050 6-axis accelerometer & gyroscope for fall and impact detection",
            "Environmental Air Quality: MQ-135 gas sensor for ammonia, carbon monoxide, and smoke",
            "Microclimate Monitoring: DHT22 ambient temperature and humidity sensor",
            "Geolocation: NEO-6M GPS receiver providing real-time latitude & longitude",
            "Cellular Telemetry: SIM800L GSM module for autonomous emergency SMS & server uplink"
        ],
        infantoContribution: "Architected the overall system topology, integrated the I2C sensor bus, developed the firmware logic for threshold alerting and fall detection, and built the physical demonstration prototype.",
        currentStatus: "Functional laboratory prototype successfully demonstrating sensor acquisition, fall detection triggers, and GSM SMS dispatch.",
        futureRoadmap: "Ultra-low-power sleep optimization, integration with industrial LoRaWAN gateways, and ATEX intrinsically safe enclosure certification design."
    },
    agriculture: {
        title: "SMART AGRICULTURE TELEMETRY SYSTEM",
        category: "IoT & Embedded Automation",
        company: "INFANTO WESELY R",
        tagline: "Precision soil moisture monitoring and automated irrigation actuation.",
        overview: "An automated agricultural monitoring system that measures soil moisture, temperature, and electrical conductivity to trigger precise drip-irrigation cycles, conserving water while optimizing crop yields.",
        architecture: ["ESP32 Microcontroller", "Capacitive Soil Moisture Sensors", "Relay Actuation Bank", "Solenoid Valves", "Cloud Telemetry Dashboard"],
        status: "Validated Prototype"
    },
    iot_monitoring: {
        title: "INDUSTRIAL IOT MACHINE MONITORING",
        category: "Industrial IoT & Automation",
        company: "INFANTO WESELY R",
        tagline: "Edge sensor nodes for distributed industrial machinery condition tracking.",
        overview: "A modular telemetry hub capturing vibration, thermal dissipation, and electrical current in shop-floor equipment, streaming diagnostic telematics to centralized monitoring consoles.",
        architecture: ["ESP32 / Arduino Nodes", "Current Transducers (CT)", "Thermocouples", "MQTT Broker Uplink"],
        status: "Prototype Development"
    },
    cad_design: {
        title: "PARAMETRIC MECHANICAL PRODUCT DESIGN",
        category: "Mechanical Engineering / CAD",
        company: "INFANTO WESELY R",
        tagline: "SolidWorks 3D modelling, stress concentration analysis, and DFM optimization.",
        overview: "Precision engineering models and assemblies created in SolidWorks, focusing on geometric dimensioning and tolerancing (GD&T), structural load path optimization, and design for manufacturing (DFM).",
        architecture: ["SolidWorks", "Finite Element Analysis (FEA)", "Kinematic Assembly", "Technical Drafting"],
        status: "Engineering Portfolio"
    },
    embedded_auto: {
        title: "EMBEDDED AUTOMATION CONTROLLER",
        category: "Automation & Embedded Systems",
        company: "INFANTO WESELY R",
        tagline: "Deterministic timing routines, relay sequencing, and industrial logic controllers.",
        overview: "Microcontroller-driven sequence controllers for automated industrial sorting, pneumatic cylinder actuation, and safety interlocks.",
        architecture: ["Arduino / ESP32", "Pneumatic Valves", "Optoisolated Relays", "State Machine Firmware"],
        status: "Demonstration Rig"
    },
    robotics: {
        title: "MULTI-AXIS ARTICULATED ROBOTICS",
        category: "Robotics & Actuation",
        company: "INFANTO WESELY R",
        tagline: "Servo-driven multi-axis arm kinematics and trajectory planning.",
        overview: "Multi-degree-of-freedom robotic manipulator concept with inverse kinematics algorithms for precision pick-and-place automation.",
        architecture: ["Servo Actuators", "PWM Controllers", "Kinematics Firmware", "Custom Gripper"],
        status: "Design & Simulation"
    },
    additive_mfg: {
        title: "ADDITIVE MANUFACTURING (3D PROTOTYPING)",
        category: "Additive Manufacturing",
        company: "INFANTO WESELY R",
        tagline: "Rapid functional prototyping, infill optimization, and enclosure fabrication.",
        overview: "Designing functional mechanical enclosures and test jigs optimized for fused deposition modeling (FDM), utilizing PETG, PLA, and ABS materials for thermal and impact resistance.",
        architecture: ["FDM Slicing", "Tolerance Clearance Testing", "PETG / PLA Polymers", "Threaded Heat-Set Inserts"],
        status: "Continuous R&D"
    },
    vibration_monitor: {
        title: "VIBRATION & MACHINE HEALTH MONITORING",
        category: "Preventative Maintenance",
        company: "INFANTO WESELY R",
        tagline: "Piezoelectric accelerometer tracking for bearing failure prediction.",
        overview: "Continuous monitoring system analyzing mechanical oscillation frequencies to detect bearing wear, rotor unbalance, and misalignment before catastrophic downtime occurs.",
        architecture: ["Piezoelectric Accelerometers", "Fast Fourier Transform (FFT)", "Threshold Alarms"],
        status: "Prototype Development"
    }
};

function initProjectModals() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.getElementById('modalCloseBtn');
    const projectCards = document.querySelectorAll('[data-project-id]');

    if (!modal) return;

    function openModal(projectId) {
        const data = projectDataStore[projectId];
        if (!data) return;

        modalTitle.textContent = data.title;
        
        let html = `
            <div style="margin-bottom: 1.25rem;">
                <span class="badge-tag orange">${data.category}</span>
                <span class="badge-tag white" style="margin-left: 0.5rem;">${data.company}</span>
            </div>
            <p style="font-family: var(--font-serif); font-style: italic; font-size: 1.2rem; color: var(--accent-orange); margin-bottom: 1rem;">
                "${data.tagline}"
            </p>
        `;

        if (data.award) {
            html += `
                <div style="background-color: var(--accent-orange-subtle); border: 1px solid var(--border-orange); padding: 0.75rem 1rem; border-radius: 2px; margin-bottom: 1.25rem; font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--accent-orange);">
                    🏆 ${data.award}
                </div>
            `;
        }

        if (data.disclaimer) {
            html += `
                <div style="background-color: rgba(255, 255, 255, 0.04); border-left: 3px solid #A0A0A0; padding: 0.6rem 1rem; margin-bottom: 1.5rem; font-size: 0.82rem; color: #A0A0A0;">
                    <strong>Notice:</strong> ${data.disclaimer}
                </div>
            `;
        }

        html += `
            <h3>Overview</h3>
            <p>${data.overview}</p>
        `;

        if (data.problemStatement) {
            html += `
                <h3>Problem Statement</h3>
                <p>${data.problemStatement}</p>
                <h3>Proposed Solution</h3>
                <p>${data.proposedSolution}</p>
                <h3>Working Principle</h3>
                <p>${data.workingPrinciple}</p>
            `;
        }

        if (data.architecture && data.architecture.length > 0) {
            html += `
                <h3>System Architecture &amp; Technologies</h3>
                <ul>
                    ${data.architecture.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        }

        if (data.infantoContribution) {
            html += `
                <h3>My Contribution &amp; Leadership</h3>
                <p>${data.infantoContribution}</p>
            `;
        }

        if (data.currentStatus) {
            html += `
                <h3>Current Development Status</h3>
                <p>${data.currentStatus}</p>
            `;
        }

        if (data.futureRoadmap) {
            html += `
                <h3>Future Improvements</h3>
                <p>${data.futureRoadmap}</p>
            `;
        }

        modalBody.innerHTML = html;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const projectId = card.getAttribute('data-project-id');
            if (projectId) {
                openModal(projectId);
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

/* ==========================================================
   4. PATENT DOCUMENT LIGHTBOX & INTERACTIVE ZOOM
   ========================================================== */
function initPatentLightbox() {
    const lightbox = document.getElementById('patentLightbox');
    const openBtn = document.getElementById('viewPatentBtn');
    const docImgThumb = document.getElementById('patentThumbImg');
    const closeBtn = document.getElementById('patentCloseBtn');
    const zoomImg = document.getElementById('patentZoomImg');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');

    if (!lightbox) return;

    let currentZoom = 1;

    function updateZoom() {
        if (zoomImg) {
            zoomImg.style.transform = `scale(${currentZoom})`;
        }
    }

    function openLightbox() {
        currentZoom = 1;
        updateZoom();
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', openLightbox);
    if (docImgThumb) docImgThumb.addEventListener('click', openLightbox);
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
        }
    });

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            if (currentZoom < 2.5) {
                currentZoom += 0.25;
                updateZoom();
            }
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            if (currentZoom > 0.6) {
                currentZoom -= 0.25;
                updateZoom();
            }
        });
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', () => {
            currentZoom = 1;
            updateZoom();
        });
    }
}

/* ==========================================================
   5. CONTACT FORM & BACKEND INTEGRATION
   ========================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const feedbackBox = document.getElementById('formFeedback');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // Client-side Validation
        if (!name || name.length < 2) {
            showFeedback('Please provide your full name (minimum 2 characters).', 'error');
            nameInput.focus();
            return;
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRe.test(email)) {
            showFeedback('Please provide a valid email address.', 'error');
            emailInput.focus();
            return;
        }

        if (!subject || subject.length < 3) {
            showFeedback('Please provide a subject line (minimum 3 characters).', 'error');
            subjectInput.focus();
            return;
        }

        if (!message || message.length < 10) {
            showFeedback('Please provide a detailed message (minimum 10 characters).', 'error');
            messageInput.focus();
            return;
        }

        // Button state
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Sending Message...</span>`;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showFeedback(result.message || 'Thank you! Your message has been sent successfully.', 'success');
                showToast(`Message sent! Reference ID: ${result.referenceId || 'CONFIRMED'}`);
                form.reset();
            } else {
                showFeedback(result.message || 'Failed to deliver message. Please verify fields and try again.', 'error');
            }
        } catch (err) {
            console.error('Contact submission error:', err);
            showFeedback('Connection error. Please try again or email directly to infantowesely15@gmail.com.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            if (window.lucide) lucide.createIcons();
        }
    });

    function showFeedback(msg, type) {
        if (!feedbackBox) return;
        feedbackBox.textContent = msg;
        feedbackBox.className = `form-feedback ${type}`;
        feedbackBox.style.display = 'block';
    }
}

/* ==========================================================
   6. TOAST NOTIFICATION UTILITY
   ========================================================== */
function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotice';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<span style="color: var(--accent-orange); font-size: 1.1rem;">✓</span> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4500);
}

/* ==========================================================
   7. PURPOSEFUL SCROLL ANIMATIONS
   ========================================================== */
function initAnimations() {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Hero reveal
        gsap.from('.hero-title', {
            opacity: 0,
            y: 35,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.hero-intro', {
            opacity: 0,
            y: 25,
            duration: 0.9,
            delay: 0.25,
            ease: 'power3.out'
        });

        gsap.from('.hero-visual-frame', {
            opacity: 0,
            scale: 0.96,
            duration: 1.1,
            delay: 0.35,
            ease: 'power3.out'
        });

        // Purposeful section fade-ups
        const animatedSections = document.querySelectorAll('.section-header, .project-case-card, .patent-spotlight-card, .venture-hero-card');
        animatedSections.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                duration: 0.85,
                ease: 'power2.out'
            });
        });
    }
}

/* ==========================================================
   8. DYNAMIC COPYRIGHT YEAR
   ========================================================== */
function initDynamicYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (window.lucide) {
        lucide.createIcons();
    }
}
