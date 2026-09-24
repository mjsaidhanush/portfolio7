/**
 * SPACE-THEMED DEVELOPER PORTFOLIO - CONTROLLER & ENGINE
 * PILOT: MJ SAI DHANUSH
 * SHIP: NEXUS-VII
 * Features: High-Performance Starfield Canvas, Audio Synth, 3D Planets, Telemetry HUD
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Loader
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }, 500);
    });
    // Fallback timer
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 2000);
  }

  // Check data
  if (typeof portfolioData === "undefined") {
    console.error("Critical: portfolioData is missing!");
    return;
  }

  // 2. Initialize Space Engine & Canvases
  initStarfieldCanvas();
  initSpaceAudio();

  // 3. Dynamic Telemetry & Render Pipeline
  renderHero();
  renderMissionControl();
  renderTechnology();
  renderProjectGalaxy("all");
  renderCareerJourney();
  renderAchievementsAndCerts();
  renderServices();
  renderTestimonials();
  renderContactBase();

  // 4. Interactive Listeners & Systems
  setupNavbarAndScroll();
  setupGalaxyControls();
  setupTypewriter();
  setupScrollReveal();
  setupStatsCounters();
  setupCustomCursor();
  setupWarpSpeed();
  setupContactForm();
  setupBackToBridge();
});

/* ==========================================================================
   HIGH-PERFORMANCE HTML5 STARFIELD CANVAS ENGINE
   ========================================================================== */
function initStarfieldCanvas() {
  const canvas = document.getElementById("space-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Responsive star count for optimal 60 FPS
  const isMobile = width < 768;
  const STAR_COUNT = isMobile ? 85 : 220;
  const stars = [];

  // Color spectrum for stars
  const starColors = ["#ffffff", "#e0f2fe", "#bae6fd", "#c4b5fd", "#fbcfe8"];

  class Star {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = (Math.random() - 0.5) * width * 1.5;
      this.y = (Math.random() - 0.5) * height * 1.5;
      this.z = Math.random() * width;
      this.size = Math.random() * 1.8 + 0.5;
      this.color = starColors[Math.floor(Math.random() * starColors.length)];
      this.twinkle = Math.random() * Math.PI;
      this.twinkleSpeed = Math.random() * 0.03 + 0.01;
    }

    update(speed) {
      this.z -= speed;
      this.twinkle += this.twinkleSpeed;
      if (this.z <= 0) {
        this.reset();
        this.z = width;
      }
    }

    draw(cx, cy) {
      const k = 250 / this.z;
      const px = this.x * k + cx;
      const py = this.y * k + cy;

      if (px < 0 || px >= width || py < 0 || py >= height) return;

      const alpha = Math.min(1, (1 - this.z / width) * (Math.sin(this.twinkle) * 0.35 + 0.65));
      const rad = Math.max(0.6, (1 - this.z / width) * this.size * 2);

      ctx.beginPath();
      ctx.arc(px, py, rad, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = rad > 1.8 ? 8 : 0;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Populate Starfield
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star());
  }

  // Shooting Star / Meteor System
  let meteor = null;
  function spawnMeteor() {
    if (isMobile) return; // Save GPU on mobile
    meteor = {
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.4,
      length: Math.random() * 120 + 80,
      speed: Math.random() * 10 + 14,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 1
    };
  }

  setInterval(() => {
    if (!meteor && Math.random() > 0.4) {
      spawnMeteor();
    }
  }, 4000);

  // Parallax on mouse movement
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  window.addEventListener("mousemove", (e) => {
    targetMouseX = (e.clientX - width / 2) * 0.05;
    targetMouseY = (e.clientY - height / 2) * 0.05;
  });

  // Window resize throttle
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, 200);
  });

  // Animation Loop with visibility pause
  let isRunning = true;
  document.addEventListener("visibilitychange", () => {
    isRunning = !document.hidden;
    if (isRunning) requestAnimationFrame(renderLoop);
  });

  window.starfieldSpeed = 0.8; // Default cruising speed

  function renderLoop() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    // Smooth mouse parallax lerp
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    const cx = width / 2 + mouseX;
    const cy = height / 2 + mouseY;

    // Draw Stars
    const curSpeed = window.starfieldSpeed || 0.8;
    for (let i = 0; i < stars.length; i++) {
      stars[i].update(curSpeed);
      stars[i].draw(cx, cy);
    }

    // Draw Meteor if active
    if (meteor) {
      const endX = meteor.x + Math.cos(meteor.angle) * meteor.length;
      const endY = meteor.y + Math.sin(meteor.angle) * meteor.length;

      const grad = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(0.8, `rgba(56, 189, 248, ${meteor.opacity})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`);

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.stroke();

      meteor.x += Math.cos(meteor.angle) * meteor.speed;
      meteor.y += Math.sin(meteor.angle) * meteor.speed;
      meteor.opacity -= 0.025;

      if (meteor.opacity <= 0) {
        meteor = null;
      }
    }

    requestAnimationFrame(renderLoop);
  }

  renderLoop();
}

/* ==========================================================================
   WEB AUDIO API SOUND SYNTHESIZER (ZERO ASSETS NEEDED)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initSpaceAudio() {
  const toggleBtn = document.getElementById("audio-toggle");
  if (!toggleBtn) return;

  // Retrieve setting
  const saved = localStorage.getItem("space_sfx");
  if (saved !== null) {
    soundEnabled = saved === "true";
  }

  updateAudioBtnUI(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem("space_sfx", soundEnabled);
    updateAudioBtnUI(toggleBtn);
    if (soundEnabled) playSynthSound("blip");
  });
}

function updateAudioBtnUI(btn) {
  if (soundEnabled) {
    btn.innerHTML = '<i class="fas fa-volume-up"></i> <span>SFX: ON</span>';
    btn.style.borderColor = "var(--neon-cyan)";
    btn.style.color = "var(--neon-cyan)";
  } else {
    btn.innerHTML = '<i class="fas fa-volume-mute"></i> <span>SFX: OFF</span>';
    btn.style.borderColor = "var(--border-hud)";
    btn.style.color = "var(--text-muted-space)";
  }
}

function playSynthSound(type) {
  if (!soundEnabled) return;

  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === "blip") {
      // High-tech UI chirp
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.06);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "scan") {
      // Planetary scan telemetry burst
      osc.type = "triangle";
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(950, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "warp") {
      // Hyperspace warp drive resonance
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(850, now + 0.9);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
      osc.start(now);
      osc.stop(now + 1.1);
    }
  } catch (e) {
    // Audio unsupported or restricted
  }
}

/* ==========================================================================
   DYNAMIC RENDER ENGINES
   ========================================================================== */

// 1. Hero Section
function renderHero() {
  const p = portfolioData.personalInfo;
  document.getElementById("hero-name").textContent = p.name;
  document.getElementById("hero-bio").textContent = p.bio;
  
  const statusEl = document.getElementById("hero-status");
  if (statusEl) statusEl.textContent = `${p.coordinates} // ${p.statusBadge}`;

  // Download resume link
  const resumeBtn = document.getElementById("hero-resume-btn");
  if (resumeBtn) {
    resumeBtn.setAttribute("href", p.resumeUrl);
    resumeBtn.setAttribute("download", p.name.replace(/\s+/g, '_') + "_Resume.pdf");
  }

  // Hero Avatar
  const avatar = document.getElementById("hero-avatar");
  if (avatar && p.profileImg) {
    avatar.src = p.profileImg;
  }

  // Hero Social Buttons
  const heroSocials = document.getElementById("hero-socials");
  if (heroSocials) {
    heroSocials.innerHTML = `
      <a href="${p.socialLinks.linkedin}" target="_blank" class="footer-social-btn" aria-label="LinkedIn" title="LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
      <a href="${p.socialLinks.github}" target="_blank" class="footer-social-btn" aria-label="GitHub" title="GitHub Profile"><i class="fab fa-github"></i></a>
      <a href="${p.socialLinks.leetcode}" target="_blank" class="footer-social-btn" aria-label="LeetCode" title="LeetCode (150+ Solved)"><i class="fa-solid fa-code"></i></a>
      <a href="${p.socialLinks.instagram}" target="_blank" class="footer-social-btn" aria-label="Instagram" title="Instagram Profile"><i class="fab fa-instagram"></i></a>
      <a href="${p.socialLinks.email}" class="footer-social-btn" aria-label="Email" title="Send Direct Transmission"><i class="far fa-envelope"></i></a>
    `;
  }
}

// 2. MISSION CONTROL (About Me)
function renderMissionControl() {
  const mc = portfolioData.missionControl;
  
  // Objective
  const objEl = document.getElementById("about-objective");
  if (objEl) objEl.textContent = mc.objective;

  // Strengths
  const strengthsEl = document.getElementById("about-strengths");
  if (strengthsEl) {
    strengthsEl.innerHTML = mc.strengths.map(s => `
      <li><i class="fas fa-check-circle me-2"></i> ${s}</li>
    `).join("");
  }

  // Education Timeline
  const eduEl = document.getElementById("about-education");
  if (eduEl) {
    eduEl.innerHTML = mc.education.map(edu => `
      <div class="education-block mb-3 p-3 rounded" style="background: rgba(4,9,21,0.7); border-left: 3px solid var(--neon-cyan);">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="panel-code" style="font-size:0.6rem;">${edu.code}</span>
          <span class="badge" style="background: rgba(56,189,248,0.15); color: var(--neon-cyan); border: 1px solid var(--border-hud);">${edu.score}</span>
        </div>
        <h5 class="fw-bold mb-1" style="font-family: var(--font-hud); font-size: 0.95rem; color: #fff;">${edu.degree}</h5>
        <div class="text-dim mb-2" style="font-family: var(--font-tech); font-size: 0.85rem;"><i class="fas fa-university me-1 text-info"></i> ${edu.institution}</div>
        <div class="d-flex justify-content-between text-muted-space" style="font-size: 0.78rem;">
          <span><i class="far fa-clock me-1"></i> ${edu.duration}</span>
        </div>
      </div>
    `).join("");
  }

  // Languages
  const langEl = document.getElementById("about-languages");
  if (langEl) {
    langEl.innerHTML = mc.languages.map(l => `
      <div class="d-flex justify-content-between align-items-center p-2 mb-2 rounded" style="background: rgba(4,9,21,0.7); border: 1px solid rgba(255,255,255,0.05);">
        <span class="fw-semibold text-white" style="font-family: var(--font-tech); font-size: 0.9rem;">
          <i class="fas fa-signal me-2 text-cyan"></i>${l.name}
        </span>
        <span class="badge" style="background: rgba(168,85,247,0.15); color: #c084fc; border: 1px solid rgba(168,85,247,0.3); font-size: 0.72rem;">${l.level}</span>
      </div>
    `).join("");
  }
}

// 3. TECHNOLOGY (Skills)
function renderTechnology() {
  const t = portfolioData.technology;

  const buildSkillBars = (list) => {
    return list.map(item => `
      <div class="skill-item">
        <div class="skill-info">
          <span class="skill-name">
            <i class="${item.icon}" style="color: ${item.color || 'var(--neon-cyan)'}; font-size: 1rem;"></i>
            ${item.name}
          </span>
          <span class="skill-pct">${item.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" data-level="${item.level}"></div>
        </div>
      </div>
    `).join("");
  };

  document.getElementById("skills-frontend").innerHTML = buildSkillBars(t.frontend);
  document.getElementById("skills-backend").innerHTML = buildSkillBars(t.backend);
  document.getElementById("skills-database").innerHTML = buildSkillBars(t.database);
  document.getElementById("skills-programming").innerHTML = buildSkillBars(t.programming);
  document.getElementById("skills-tools").innerHTML = buildSkillBars(t.tools);
}

// 4. PROJECT GALAXY (Planetary Render Engine)
function renderProjectGalaxy(category) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = portfolioData.projects.filter(p => {
    if (category === "all") return true;
    return p.category === category;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center py-5"><p class="text-dim">No celestial worlds found in this sector.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="col-lg-6 col-md-6 mb-4 planet-card-wrapper reveal-item">
      <div class="planet-card" style="--card-theme: ${p.themeColor}; --card-glow: ${p.glowColor};">
        
        <!-- Planet Call Sign -->
        <div class="planet-callsign"><i class="fas fa-satellite me-1"></i> ${p.planetName}</div>
        <h3 class="planet-name-title">${p.planetTitle}</h3>
        <div class="planet-type-badge">${p.planetType}</div>

        <!-- Interactive 3D Planet Sphere -->
        <div class="planet-stage" data-project-id="${p.id}" title="Click to Scan Planet">
          <div class="celestial-sphere" style="background: ${p.planetGradient}; --planet-glow: ${p.glowColor};">
            ${p.hasRing ? `<div class="celestial-ring" style="border-color: ${p.themeColor};"></div>` : ""}
            <div class="orbiting-moon"></div>
          </div>
        </div>

        <!-- Description -->
        <p class="planet-desc">${p.description}</p>

        <!-- Tech tags -->
        <div class="planet-tech-tags">
          ${p.technologies.map(t => `<span class="planet-tech-tag">${t}</span>`).join("")}
        </div>

        <!-- Planetary Actions -->
        <div class="planet-actions">
          <button class="btn-planet-action btn-scan explore-btn" data-project-id="${p.id}">
            <i class="fas fa-radar"></i> SCAN PLANET
          </button>
          <a href="${p.liveDemo}" target="_blank" class="btn-planet-action btn-outline-planet">
            <i class="fas fa-external-link-alt"></i> LIVE
          </a>
          <a href="${p.github}" target="_blank" class="btn-planet-action btn-outline-planet">
            <i class="fab fa-github"></i> REPO
          </a>
        </div>

      </div>
    </div>
  `).join("");

  // Bind planet stage clicks
  const planetStages = document.querySelectorAll(".planet-stage");
  planetStages.forEach(stage => {
    stage.addEventListener("click", () => {
      const pid = stage.getAttribute("data-project-id");
      const proj = portfolioData.projects.find(x => x.id === pid);
      if (proj) {
        playSynthSound("scan");
        showProjectModal(proj);
      }
    });
  });

  // Re-observe reveal items
  setTimeout(setupScrollReveal, 100);
}

// 5. CAREER JOURNEY (Mission Log Timeline)
function renderCareerJourney() {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;

  timeline.innerHTML = portfolioData.careerJourney.map((mission, index) => {
    const sideClass = index % 2 === 0 ? "left-mission" : "right-mission";
    return `
      <div class="timeline-mission-item ${sideClass} reveal-item">
        <div class="mission-panel">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="mission-code-badge">${mission.flightCode}</span>
            <span class="badge" style="background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.4); font-size: 0.68rem;">${mission.badge}</span>
          </div>
          <h4 class="mission-role-title">${mission.role}</h4>
          <div class="mission-org-text"><i class="fas fa-space-shuttle me-2"></i>${mission.organization}</div>
          <div class="text-dim mb-3" style="font-size: 0.8rem; font-family: var(--font-tech);"><i class="far fa-calendar-alt me-1"></i> ${mission.duration}</div>
          <ul class="mission-duties">
            ${mission.responsibilities.map(r => `<li>${r}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }).join("");
}

// 6. ACHIEVEMENTS & CERTIFICATES
function renderAchievementsAndCerts() {
  // Counters
  const achContainer = document.getElementById("achievements-container");
  if (achContainer) {
    achContainer.innerHTML = portfolioData.achievements.map(a => `
      <div class="col-lg-3 col-6 reveal-item">
        <a href="${a.link || '#'}" ${a.link ? 'target="_blank"' : ''} class="text-decoration-none">
          <div class="stat-telemetry-box">
            <div class="stat-icon"><i class="${a.icon}"></i></div>
            <div class="stat-number" data-target="${a.count}">${a.count}${a.suffix}</div>
            <div class="stat-label">${a.title}</div>
            <div class="stat-sub">${a.subtitle}</div>
          </div>
        </a>
      </div>
    `).join("");
  }

  // Certifications
  const certContainer = document.getElementById("certifications-container");
  if (certContainer) {
    certContainer.innerHTML = portfolioData.certifications.map(c => `
      <div class="col-lg-6 reveal-item">
        <div class="glass-panel cert-card h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="cert-code">${c.code}</span>
              <span class="badge" style="background: rgba(56,189,248,0.12); color: var(--neon-cyan); border: 1px solid var(--border-hud);">${c.date}</span>
            </div>
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="${c.icon} text-cyan" style="font-size: 1.3rem;"></i>
              <h4 class="cert-title mb-0">${c.title}</h4>
            </div>
            <p class="cert-org"><i class="fas fa-building me-1 text-purple"></i> ${c.organization}</p>
          </div>
          <a href="${c.link}" target="_blank" class="btn-space btn-space-primary btn-sm align-self-start mt-3">
            <span class="btn-corner tl"></span><span class="btn-corner br"></span>
            <i class="fas fa-file-pdf me-2"></i> VERIFY CREDENTIAL
          </a>
        </div>
      </div>
    `).join("");
  }
}

// 7. SERVICES
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = portfolioData.services.map(s => `
    <div class="col-lg-3 col-md-6 reveal-item">
      <div class="glass-panel h-100">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="contact-icon-box m-0"><i class="${s.icon}"></i></div>
          <span class="panel-code" style="font-size: 0.62rem;">${s.badge}</span>
        </div>
        <h4 class="panel-title mb-2" style="font-size: 1.05rem;">${s.title}</h4>
        <p class="panel-text" style="font-size: 0.88rem;">${s.description}</p>
      </div>
    </div>
  `).join("");
}

// 8. TESTIMONIALS
function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = portfolioData.testimonials.map(t => `
    <div class="col-lg-6 reveal-item">
      <div class="glass-panel h-100">
        <div class="mb-3 text-cyan" style="font-size: 1.8rem;"><i class="fas fa-quote-left"></i></div>
        <p class="panel-text mb-4" style="font-style: italic;">${t.comment}</p>
        <div class="d-flex align-items-center gap-3">
          <img src="${t.avatar}" alt="${t.name}" class="rounded-circle border border-cyan" style="width: 48px; height: 48px; object-fit: cover;">
          <div>
            <div class="fw-bold text-white" style="font-family: var(--font-hud); font-size: 0.95rem;">${t.name}</div>
            <div class="text-dim" style="font-size: 0.78rem;">${t.role}</div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// 9. CONTACT BASE
function renderContactBase() {
  const c = portfolioData.contact;
  const p = portfolioData.personalInfo;

  document.getElementById("contact-email").textContent = c.email;
  document.getElementById("contact-email").href = `mailto:${c.email}`;
  document.getElementById("contact-phone").textContent = c.phone;
  document.getElementById("contact-phone").href = `tel:${c.phone.replace(/\s+/g, '')}`;
  document.getElementById("contact-location").textContent = c.location;

  const mapIframe = document.getElementById("contact-map");
  if (mapIframe) {
    mapIframe.src = c.googleMapEmbedUrl;
  }

  // Footer Socials
  const footerSocials = document.getElementById("footer-socials");
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="${p.socialLinks.linkedin}" target="_blank" class="footer-social-btn" aria-label="LinkedIn" title="LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
      <a href="${p.socialLinks.github}" target="_blank" class="footer-social-btn" aria-label="GitHub" title="GitHub Profile"><i class="fab fa-github"></i></a>
      <a href="${p.socialLinks.leetcode}" target="_blank" class="footer-social-btn" aria-label="LeetCode" title="LeetCode (150+ Solved)"><i class="fa-solid fa-code"></i></a>
      <a href="${p.socialLinks.instagram}" target="_blank" class="footer-social-btn" aria-label="Instagram" title="Instagram Profile"><i class="fab fa-instagram"></i></a>
      <a href="${p.socialLinks.email}" class="footer-social-btn" aria-label="Email" title="Send Email"><i class="far fa-envelope"></i></a>
    `;
  }
}

/* ==========================================================================
   INTERACTIONS & HUD CONTROLLER
   ========================================================================== */

// 1. Navigation Sticky & Section Tracking
function setupNavbarAndScroll() {
  const navbar = document.querySelector(".navbar-custom");
  const scrollProg = document.getElementById("scroll-progress");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link-custom");

  window.addEventListener("scroll", () => {
    // Scroll progress bar
    const scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollH > 0 && scrollProg) {
      scrollProg.style.width = (window.scrollY / scrollH) * 100 + "%";
    }

    // Navbar style
    if (window.scrollY > 40) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }

    // Active Section Tracking
    let curId = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 260) {
        curId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${curId}`) {
        link.classList.add("active");
      }
    });
  });
}

// 2. Project Galaxy Controls
function setupGalaxyControls() {
  // Category Filters
  const filterBtns = document.querySelectorAll(".project-filter-container .filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      playSynthSound("blip");
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-filter");
      renderProjectGalaxy(cat);
    });
  });

  // View Mode: Orbit vs Matrix
  const orbitBtn = document.getElementById("view-mode-orbit");
  const gridBtn = document.getElementById("view-mode-grid");
  const gridContainer = document.getElementById("projects-grid");

  if (orbitBtn && gridBtn) {
    orbitBtn.addEventListener("click", () => {
      playSynthSound("blip");
      orbitBtn.classList.add("active");
      gridBtn.classList.remove("active");
      gridContainer.classList.remove("matrix-mode");
    });

    gridBtn.addEventListener("click", () => {
      playSynthSound("blip");
      gridBtn.classList.add("active");
      orbitBtn.classList.remove("active");
      gridContainer.classList.add("matrix-mode");
    });
  }

  // Delegate project modal buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".explore-btn");
    if (!btn) return;

    e.preventDefault();
    const pid = btn.getAttribute("data-project-id");
    const project = portfolioData.projects.find(p => p.id === pid);
    if (project) {
      playSynthSound("scan");
      showProjectModal(project);
    }
  });
}

// 3. Holographic Project Modal
function showProjectModal(project) {
  let modal = document.getElementById("project-details-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "project-details-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="position: fixed; inset: 0; background: rgba(2, 4, 10, 0.9); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); display: flex; align-items: center; justify-content: center; z-index: 99999; opacity: 0; transition: opacity 0.3s ease;">
      <div class="glass-panel text-start" style="max-width: 650px; width: 92%; max-height: 90vh; overflow-y: auto; padding: 35px; border-radius: 16px; border: 1px solid ${project.themeColor}; box-shadow: 0 0 50px ${project.glowColor}; position: relative;">
        
        <!-- Close Button -->
        <button id="close-project-modal" aria-label="Close Mission Briefing" style="position: absolute; top: 20px; right: 20px; background: none; border: 1px solid var(--border-hud); color: var(--neon-cyan); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; cursor: pointer;">
          <i class="fas fa-times"></i>
        </button>

        <!-- Modal Top Header -->
        <div class="d-flex align-items-center gap-3 mb-3">
          <div style="width: 50px; height: 50px; border-radius: 50%; background: ${project.planetGradient}; box-shadow: 0 0 20px ${project.glowColor}; flex-shrink: 0;"></div>
          <div>
            <div class="panel-code" style="font-size:0.65rem;">${project.planetName} // ORBIT BRIEFING</div>
            <h3 class="fw-bold mb-0" style="font-family: var(--font-hud); font-size: 1.4rem; color: #fff;">${project.planetTitle}</h3>
          </div>
        </div>

        <!-- Project Image -->
        <div style="width: 100%; height: 210px; border-radius: 10px; overflow: hidden; border: 1px solid var(--border-hud); margin-bottom: 20px;">
          <img src="${project.image}" alt="${project.planetTitle}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <!-- Tech chips -->
        <div class="d-flex flex-wrap gap-2 mb-3">
          ${project.technologies.map(t => `<span class="planet-tech-tag" style="border-color:${project.themeColor}; color:${project.themeColor};">${t}</span>`).join("")}
        </div>

        <!-- Description -->
        <div class="panel-sub-header mb-1"><i class="fas fa-terminal text-cyan me-1"></i> MISSION SUMMARY</div>
        <p class="panel-text mb-4" style="line-height: 1.7;">${project.description}</p>

        <!-- Key Features Checklist -->
        <div class="panel-sub-header mb-2"><i class="fas fa-check-double text-success me-1"></i> KEY MISSION CAPABILITIES</div>
        <ul class="panel-checklist mb-4">
          ${project.features.map(f => `<li><i class="fas fa-chevron-right text-cyan"></i> ${f}</li>`).join("")}
        </ul>

        <!-- Action Links -->
        <div class="d-flex flex-wrap gap-3 pt-3 border-top border-secondary border-opacity-25">
          <a href="${project.liveDemo}" target="_blank" class="btn-space btn-space-primary">
            <span class="btn-corner tl"></span><span class="btn-corner br"></span>
            <i class="fas fa-satellite-dish me-2"></i> TRANSMIT LIVE
          </a>
          <a href="${project.github}" target="_blank" class="btn-space btn-space-secondary">
            <span class="btn-corner tl"></span><span class="btn-corner br"></span>
            <i class="fab fa-github me-2"></i> GITHUB REPO
          </a>
        </div>

      </div>
    </div>
  `;

  modal.style.display = "block";
  setTimeout(() => {
    modal.firstElementChild.style.opacity = "1";
  }, 40);

  const closeBtn = document.getElementById("close-project-modal");
  const overlay = modal.firstElementChild;

  const closeModal = () => {
    playSynthSound("blip");
    overlay.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // ESC key
  const escHandler = (e) => {
    if (e.key === "Escape") {
      closeModal();
      window.removeEventListener("keydown", escHandler);
    }
  };
  window.addEventListener("keydown", escHandler);
}

// 4. Warp Speed Button Handler
function setupWarpSpeed() {
  const warpBtn = document.getElementById("warp-btn");
  const tunnel = document.getElementById("warp-tunnel");
  if (!warpBtn || !tunnel) return;

  warpBtn.addEventListener("click", () => {
    playSynthSound("warp");

    // Accelerate Starfield
    window.starfieldSpeed = 25;
    tunnel.classList.add("warp-active");

    setTimeout(() => {
      window.starfieldSpeed = 0.8;
      tunnel.classList.remove("warp-active");

      // Smooth jump to projects
      const projSec = document.getElementById("projects");
      if (projSec) {
        projSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 1100);
  });
}

// 5. Cyber Terminal Typewriter
function setupTypewriter() {
  const target = document.getElementById("typing-text");
  if (!target) return;

  const roles = portfolioData.personalInfo.roles;
  let rIdx = 0;
  let cIdx = 0;
  let isDeleting = false;
  let speed = 90;

  function typeStep() {
    const cur = roles[rIdx];

    if (isDeleting) {
      target.textContent = cur.substring(0, cIdx - 1);
      cIdx--;
      speed = 40;
    } else {
      target.textContent = cur.substring(0, cIdx + 1);
      cIdx++;
      speed = 100;
    }

    if (!isDeleting && cIdx === cur.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && cIdx === 0) {
      isDeleting = false;
      rIdx = (rIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeStep, speed);
  }

  setTimeout(typeStep, 800);
}

// 6. Scroll Reveal Observer
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal-item, .reveal-left, .reveal-right");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        if (entry.target.id === "skills" || entry.target.classList.contains("skills-module")) {
          animateSkillBars();
        }
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  items.forEach(el => observer.observe(el));
}

function animateSkillBars() {
  const bars = document.querySelectorAll(".skill-progress");
  bars.forEach(bar => {
    const lvl = bar.getAttribute("data-level");
    bar.style.width = lvl + "%";
  });
}

// 7. Stats Counter Animation
function setupStatsCounters() {
  const sec = document.getElementById("certifications");
  if (!sec) return;

  let hasCounted = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      const numEls = document.querySelectorAll(".stat-number");
      numEls.forEach(el => {
        const target = parseInt(el.getAttribute("data-target"), 10);
        let cur = 0;
        const duration = 1800;
        const stepTime = 20;
        const increment = Math.ceil(target / (duration / stepTime));

        const interval = setInterval(() => {
          cur += increment;
          if (cur >= target) {
            el.textContent = target + "+";
            clearInterval(interval);
          } else {
            el.textContent = cur + "+";
          }
        }, stepTime);
      });
    }
  }, { threshold: 0.25 });

  observer.observe(sec);
}

// 8. Custom Sci-Fi Reticle Cursor (Desktop)
function setupCustomCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const outline = document.querySelector(".custom-cursor-outline");
  if (!dot || !outline) return;

  if (window.innerWidth < 992 || 'ontouchstart' in window) {
    dot.style.display = "none";
    outline.style.display = "none";
    return;
  }

  dot.style.display = "block";
  outline.style.display = "block";

  let outX = 0, outY = 0;
  let targetX = 0, targetY = 0;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.left = targetX + "px";
    dot.style.top = targetY + "px";
  });

  function followLoop() {
    outX += (targetX - outX) * 0.18;
    outY += (targetY - outY) * 0.18;
    outline.style.left = outX + "px";
    outline.style.top = outY + "px";
    requestAnimationFrame(followLoop);
  }
  followLoop();

  // Hover triggers
  const hoverables = document.querySelectorAll("a, button, .planet-stage, .glass-panel, input, textarea");
  hoverables.forEach(elem => {
    elem.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    elem.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

// 9. Contact Form Subspace Transmission
function setupContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name");
    const email = document.getElementById("form-email");
    const subject = document.getElementById("form-subject");
    const msg = document.getElementById("form-message");

    let valid = true;
    [name, email, subject, msg].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("is-invalid");
        valid = false;
      } else {
        input.classList.remove("is-invalid");
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() && !emailRegex.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    }

    if (!valid) return;

    playSynthSound("scan");
    showTransmissionFeedback();
    form.reset();
  });
}

function showTransmissionFeedback() {
  let modal = document.getElementById("subspace-success-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "subspace-success-modal";
    modal.innerHTML = `
      <div style="position: fixed; inset: 0; background: rgba(2, 4, 10, 0.92); backdrop-filter: blur(16px); display: flex; align-items: center; justify-content: center; z-index: 99999; opacity: 0; transition: opacity 0.3s ease;">
        <div class="glass-panel text-center" style="max-width: 480px; padding: 40px; border-radius: 16px; border: 1px solid var(--neon-cyan); box-shadow: 0 0 40px var(--glow-cyan);">
          <div style="width: 70px; height: 70px; background: rgba(56, 189, 248, 0.15); border: 1px solid var(--neon-cyan); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--neon-cyan); margin: 0 auto 20px auto; box-shadow: 0 0 20px var(--glow-cyan);">
            <i class="fas fa-satellite-dish"></i>
          </div>
          <h3 class="fw-bold mb-2" style="font-family: var(--font-hud); color: #fff;">TRANSMISSION RECEIVED</h3>
          <p class="panel-text mb-4">Signal acknowledged! Your mission payload has been routed to Commander MJ Sai Dhanush. Expect a subspace reply shortly.</p>
          <button id="close-tx-btn" class="btn-space btn-space-primary" style="padding: 10px 30px;">
            <span class="btn-corner tl"></span><span class="btn-corner br"></span>
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = document.getElementById("close-tx-btn");
    closeBtn.addEventListener("click", () => {
      playSynthSound("blip");
      modal.firstElementChild.style.opacity = "0";
      setTimeout(() => { modal.style.display = "none"; }, 300);
    });
  }

  modal.style.display = "block";
  setTimeout(() => {
    modal.firstElementChild.style.opacity = "1";
  }, 40);
}

// 10. Return to Bridge Button
function setupBackToBridge() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    playSynthSound("blip");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
