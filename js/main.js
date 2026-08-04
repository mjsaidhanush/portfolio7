/**
 * Portfolio Main Interactions Controller
 * Dynamic Render Engine & Animations
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize loader
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    });
    // Fallback: hide loader after 2.5s anyway to avoid stuck state
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 2500);
  }

  // Check data availability
  if (typeof portfolioData === "undefined") {
    console.error("Error: portfolioData is not loaded. Please include data.js before main.js.");
    return;
  }

  // 1. DYNAMIC RENDER PIPELINE
  renderHero();
  renderAboutMe();
  renderSkills();
  renderProjects("all"); // initial render all projects
  renderExperience();
  renderCertifications();
  renderAchievements();
  renderServices();
  renderTestimonials();
  renderContactInfo();
  setupProjectFilters();

  // 2. ADDITIONAL SCRIPTS & INTERACTION BINDINGS
  setupThemeToggle();
  setupScrollProgress();
  setupStickyNavbar();
  setupCustomCursor();
  setupTypewriter();
  setupScrollReveal();
  setupStatsCounter();
  setupContactForm();
  setupBackToTop();
  setupProjectModal();
});

/* ==========================================
   RENDER ENGINES
   ========================================== */

// Hero Section Render
function renderHero() {
  const p = portfolioData.personalInfo;
  document.getElementById("hero-name").textContent = p.name;
  document.getElementById("hero-bio").textContent = p.bio;
  
  // Download Resume link
  const resumeBtn = document.getElementById("hero-resume-btn");
  if (resumeBtn) {
    resumeBtn.setAttribute("href", p.resumeUrl);
    resumeBtn.setAttribute("download", p.name.replace(/\s+/g, '_') + "_Resume.pdf");
  }

  // Social Links mapping
  const heroSocials = document.getElementById("hero-socials");
  if (heroSocials) {
    heroSocials.innerHTML = `
      <a href="${p.socialLinks.linkedin}" target="_blank" class="hero-social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="${p.socialLinks.github}" target="_blank" class="hero-social-btn" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="${p.socialLinks.leetcode}" target="_blank" class="hero-social-btn" aria-label="LeetCode"><i class="fa-solid fa-code"></i></a>
      <a href="${p.socialLinks.instagram}" target="_blank" class="hero-social-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="${p.socialLinks.email}" class="hero-social-btn" aria-label="Email"><i class="far fa-envelope"></i></a>
    `;
  }
}

// About Me Section Render
function renderAboutMe() {
  const a = portfolioData.aboutMe;
  const p = portfolioData.personalInfo;
  
  // Career Objective
  document.getElementById("about-objective").textContent = a.objective;

  // Education Timeline
  const eduContainer = document.getElementById("about-education");
  if (eduContainer) {
    eduContainer.innerHTML = a.education.map(edu => `
      <div class="education-card mb-4 border-start border-primary border-3 ps-3">
        <h5 class="fw-bold mb-1">${edu.degree}</h5>
        <h6 class="text-accent mb-1 text-primary-custom" style="color: var(--accent-color);">${edu.institution}</h6>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${edu.duration}</small>
          <span class="badge bg-secondary-custom" style="border: 1px solid var(--glass-border); color: var(--text-primary);">${edu.score}</span>
        </div>
      </div>
    `).join("");
  }

  // Strengths
  const strengthsContainer = document.getElementById("about-strengths");
  if (strengthsContainer) {
    strengthsContainer.innerHTML = a.strengths.map(str => `
      <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>${str}</li>
    `).join("");
  }

  // Languages
  const langContainer = document.getElementById("about-languages");
  if (langContainer) {
    langContainer.innerHTML = a.languages.map(lang => `
      <div class="mb-2 d-flex justify-content-between align-items-center bg-primary-dark p-2 rounded" style="background: var(--card-hover-bg); border: 1px solid var(--glass-border);">
        <span class="fw-semibold">${lang.name}</span>
        <span class="badge" style="background: var(--accent-glow); color: var(--accent-color);">${lang.level}</span>
      </div>
    `).join("");
  }
}

// Skills Render (categorized tabs)
function renderSkills() {
  const s = portfolioData.skills;
  
  const mapSkills = (skillList) => {
    return skillList.map(skill => `
      <div class="skill-item">
        <div class="skill-info">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
      </div>
    `).join("");
  };

  document.getElementById("skills-frontend").innerHTML = mapSkills(s.frontend);
  document.getElementById("skills-backend").innerHTML = mapSkills(s.backend);
  document.getElementById("skills-database").innerHTML = mapSkills(s.database);
  document.getElementById("skills-programming").innerHTML = mapSkills(s.programming);
  document.getElementById("skills-tools").innerHTML = mapSkills(s.tools);
}

// Projects Render with Category Filtering
function renderProjects(filterCategory) {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  const filtered = portfolioData.projects.filter(p => {
    if (filterCategory === "all") return true;
    return p.category === filterCategory;
  });

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">No projects found in this category.</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map(p => `
    <div class="col-lg-6 col-md-6 mb-4 reveal-item">
      <div class="glass-card project-card">
        <div class="project-img-wrapper">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="project-details">
          <div class="project-tags">
            ${p.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join("")}
          </div>
          <h4 class="project-title">${p.title}</h4>
          <p class="project-desc">${p.description}</p>
          <div class="project-actions">
            <a href="${p.liveDemo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
            <a href="${p.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="#" class="project-link explore-btn" data-project-id="${p.id}"><i class="fas fa-info-circle"></i> Details</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Re-run scroll reveal listener for the newly generated project cards
  setTimeout(setupScrollReveal, 100);
}

// Setup Projects Category filter events
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const category = e.target.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

// Experience Section Render
function renderExperience() {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;

  const experienceSection = document.getElementById("experience");

  if (!portfolioData.experience || portfolioData.experience.length === 0) {
    if (experienceSection) {
      experienceSection.style.display = "none";
    }
    // Remove experience link from navigation bar
    const navLink = document.querySelector('a.nav-link-custom[href="#experience"]');
    if (navLink) {
      const parentLi = navLink.parentElement;
      if (parentLi) parentLi.style.display = "none";
    }
    return;
  }

  timeline.innerHTML = portfolioData.experience.map((exp, index) => {
    // Alternate timeline sides
    const sideClass = index % 2 === 0 ? "left-timeline" : "right-timeline";
    return `
      <div class="timeline-item ${sideClass} reveal-item">
        <div class="timeline-item-content">
          <div class="timeline-date"><i class="far fa-clock me-1"></i> ${exp.duration}</div>
          <h4 class="timeline-role">${exp.role}</h4>
          <h5 class="timeline-company">${exp.company}</h5>
          <ul class="timeline-desc">
            ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }).join("");
}

// Certifications Section Render
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(c => `
    <div class="col-lg-4 col-md-6 mb-4 reveal-item">
      <div class="glass-card cert-card">
        <div>
          <div class="cert-header">
            <div class="cert-icon"><i class="fas fa-award"></i></div>
            <span class="cert-date">${c.date}</span>
          </div>
          <h4 class="cert-title">${c.title}</h4>
          <p class="cert-org">${c.organization}</p>
        </div>
        <a href="${c.link}" target="_blank" class="btn btn-secondary-custom btn-sm align-self-start"><i class="fas fa-certificate me-1"></i> View Certificate</a>
      </div>
    </div>
  `).join("");
}

// Achievements Render
function renderAchievements() {
  const container = document.getElementById("achievements-container");
  if (!container) return;

  container.innerHTML = portfolioData.achievements.map(a => {
    const cardContent = `
      <div class="stat-icon"><i class="${a.icon}"></i></div>
      <div class="stat-number" data-target="${a.count}">${a.count}</div>
      <div class="stat-title">${a.title}</div>
    `;

    if (a.link) {
      return `
        <div class="col-md-3 col-6 mb-4 reveal-item">
          <a href="${a.link}" target="_blank" class="text-decoration-none" style="color: inherit;" aria-label="${a.title}">
            <div class="glass-card stat-card">
              ${cardContent}
            </div>
          </a>
        </div>
      `;
    }

    return `
      <div class="col-md-3 col-6 mb-4 reveal-item">
        <div class="glass-card stat-card">
          ${cardContent}
        </div>
      </div>
    `;
  }).join("");
}

// Services Render
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = portfolioData.services.map(s => `
    <div class="col-lg-3 col-md-6 mb-4 reveal-item">
      <div class="glass-card service-card">
        <div class="service-icon-wrapper">
          <i class="${s.icon}"></i>
        </div>
        <h4 class="service-title">${s.title}</h4>
        <p class="service-desc">${s.description}</p>
      </div>
    </div>
  `).join("");
}

// Testimonials Render
function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = portfolioData.testimonials.map(t => `
    <div class="col-lg-6 col-md-6 mb-4 reveal-item">
      <div class="glass-card testimonial-card">
        <p class="testimonial-quote">${t.comment}</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" class="testimonial-avatar" alt="${t.name}">
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// Contact Details Render
function renderContactInfo() {
  const c = portfolioData.contact;
  const p = portfolioData.personalInfo;
  
  // Set text values
  document.getElementById("contact-email").textContent = c.email;
  document.getElementById("contact-email").setAttribute("href", `mailto:${c.email}`);
  document.getElementById("contact-phone").textContent = c.phone;
  document.getElementById("contact-phone").setAttribute("href", `tel:${c.phone.replace(/\s+/g, '')}`);
  document.getElementById("contact-location").textContent = c.location;

  // Set Google maps iframe src
  const mapIframe = document.getElementById("contact-map");
  if (mapIframe) {
    mapIframe.setAttribute("src", c.googleMapEmbedUrl);
  }

  // Footer Social links
  const footerSocials = document.getElementById("footer-socials");
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="${p.socialLinks.linkedin}" target="_blank" class="footer-social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="${p.socialLinks.github}" target="_blank" class="footer-social-btn" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="${p.socialLinks.leetcode}" target="_blank" class="footer-social-btn" aria-label="LeetCode"><i class="fa-solid fa-code"></i></a>
      <a href="${p.socialLinks.instagram}" target="_blank" class="footer-social-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="${p.socialLinks.email}" class="footer-social-btn" aria-label="Email"><i class="far fa-envelope"></i></a>
    `;
  }
}

/* ==========================================
   ANIMATIONS & SCRIPTS INTERACTION INTERFACES
   ========================================== */

// Theme Toggle Code
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("theme");
  
  // Apply stored preference
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    
    // Update local storage and button icon
    if (isLight) {
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
}

// Scroll progress bar
function setupScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
  });
}

// Header changes color when scrolled
function setupStickyNavbar() {
  const navbar = document.querySelector(".navbar-custom");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Track active section highlight in header menu
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link-custom");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 250)) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

// Custom Cursor (Desktop Only)
function setupCustomCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const outline = document.querySelector(".custom-cursor-outline");

  if (!dot || !outline) return;

  // Detect Touch / Mobile
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    dot.style.display = "none";
    outline.style.display = "none";
    return;
  }

  // Display cursors
  dot.style.display = "block";
  outline.style.display = "block";

  let outlineX = 0;
  let outlineY = 0;
  let targetX = 0;
  let targetY = 0;

  // Update target positions on mousemove
  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.left = targetX + "px";
    dot.style.top = targetY + "px";
  });

  // Slow smooth following for outer outline ring
  function animateOutline() {
    // Lerp formulation
    outlineX += (targetX - outlineX) * 0.15;
    outlineY += (targetY - outlineY) * 0.15;

    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Highlight cursor on links & interactive elements
  const hoverables = document.querySelectorAll("a, button, .filter-btn, .glass-card, input, textarea, .theme-toggle-btn");
  hoverables.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    elem.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
}

// Custom typewriter cycle script
function setupTypewriter() {
  const target = document.getElementById("typing-text");
  if (!target) return;

  const roles = portfolioData.personalInfo.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Deleting characters
      target.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // faster deleting
    } else {
      // Typing characters
      target.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150; // normal speed
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing loop
  setTimeout(type, 1000);
}

// Scroll reveal animations using Intersection Observer
function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-item, .reveal-left, .reveal-right");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // If skill progress bar enters view, animate skill bars
        if (entry.target.classList.contains("skills-container") || entry.target.id === "skills") {
          animateSkills();
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(elem => {
    observer.observe(elem);
  });
}

// Animate Skills Progress bars
function animateSkills() {
  const progressBars = document.querySelectorAll(".skill-progress");
  progressBars.forEach(bar => {
    const targetLevel = bar.getAttribute("data-level");
    bar.style.width = targetLevel + "%";
  });
}

// Animate Statistics Counter
function setupStatsCounter() {
  const statsSection = document.getElementById("achievements");
  if (!statsSection) return;

  let counted = false;

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !counted) {
      counted = true;
      const numElements = document.querySelectorAll(".stat-number");
      
      numElements.forEach(el => {
        const target = parseInt(el.getAttribute("data-target"), 10);
        let current = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / target), 15);
        
        const counterInterval = setInterval(() => {
          current += Math.ceil(target / (duration / stepTime));
          if (current >= target) {
            el.textContent = target;
            clearInterval(counterInterval);
          } else {
            el.textContent = current;
          }
        }, stepTime);
      });
    }
  }, {
    threshold: 0.3
  });

  observer.observe(statsSection);
}

// Form Submission & Validation
function setupContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const modal = document.getElementById("form-success-modal");
  
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset validation states
    form.classList.remove("was-validated");

    const name = document.getElementById("form-name");
    const email = document.getElementById("form-email");
    const subject = document.getElementById("form-subject");
    const message = document.getElementById("form-message");

    let isValid = true;

    // Simple validation triggers
    [name, email, subject, message].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("is-invalid");
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() && !emailRegex.test(email.value.trim())) {
      email.classList.add("is-invalid");
      isValid = false;
    }

    if (!isValid) {
      form.classList.add("was-validated");
      return;
    }

    // Success State - Show Modal feedback
    showModalFeedback();
    
    // Reset Form Fields
    form.reset();
    document.querySelectorAll(".form-control-custom").forEach(el => {
      el.classList.remove("is-valid", "is-invalid");
    });
  });
}

// Show Glassmorphism Modal Feedback
function showModalFeedback() {
  // Create dialog elements dynamically or trigger preset modal
  let modal = document.getElementById("success-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "success-modal";
    modal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width:100%; height:100%; background: rgba(7, 14, 27, 0.85); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 2000; opacity: 0; transition: opacity 0.3s ease;">
        <div class="glass-card text-center" style="max-width: 450px; padding: 40px; border-radius: 20px; border: 1px solid var(--accent-color);">
          <div style="width:70px; height:70px; background: var(--accent-glow); color: var(--accent-color); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem; margin:0 auto 20px auto;">
            <i class="fas fa-paper-plane"></i>
          </div>
          <h3 class="fw-bold mb-2">Message Sent!</h3>
          <p class="text-secondary mb-4">Thank you for reaching out, Sai Dhanush. Your message has been received successfully. I will get back to you shortly!</p>
          <button id="close-modal-btn" class="btn btn-custom btn-primary-custom" style="padding:10px 30px;">Great!</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = document.getElementById("close-modal-btn");
    closeBtn.addEventListener("click", () => {
      const overlay = modal.firstElementChild;
      overlay.style.opacity = "0";
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    });
  }

  modal.style.display = "block";
  // Trigger transition
  setTimeout(() => {
    modal.firstElementChild.style.opacity = "1";
  }, 50);
}

// Back to top button triggers
function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Setup Project Details Modal
function setupProjectModal() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".explore-btn");
    if (!btn) return;

    e.preventDefault();
    const projectId = btn.getAttribute("data-project-id");
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    showProjectModal(project);
  });
}

function showProjectModal(project) {
  let modal = document.getElementById("project-details-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "project-details-modal";
    document.body.appendChild(modal);
  }

  // Generate detailed features list
  const featuresList = (project.features || [])
    .map(f => `<li class="mb-2" style="font-size: 0.9rem;"><i class="fas fa-check text-success me-2"></i> ${f}</li>`)
    .join("");

  modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width:100%; height:100%; background: rgba(7, 14, 27, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; z-index: 2000; opacity: 0; transition: opacity 0.3s ease;">
      <div class="glass-card text-start" style="max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto; padding: 35px; border-radius: 20px; border: 1px solid var(--accent-color); position: relative;">
        <!-- Close Button -->
        <button id="close-project-modal" aria-label="Close details" style="position: absolute; top: 20px; right: 20px; background: none; border: none; color: var(--text-primary); font-size: 1.5rem; cursor: pointer;">
          <i class="fas fa-times"></i>
        </button>
        
        <!-- Image header -->
        <div style="width: 100%; height: 200px; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); margin-bottom: 25px;">
          <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <h3 class="fw-bold mb-2" style="font-family: var(--font-heading); color: var(--text-primary);">${project.title}</h3>
        <div class="project-tags mb-3 d-flex flex-wrap gap-2">
          ${project.technologies.map(t => `<span class="project-tag" style="background: var(--card-hover-bg); border: 1px solid var(--glass-border); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; color: var(--accent-color); font-weight: 500;">${t}</span>`).join("")}
        </div>

        <h5 class="fw-semibold mb-2" style="color: var(--accent-color);">Description</h5>
        <p class="text-secondary-custom mb-4" style="font-size: 0.95rem; line-height: 1.6;">${project.description}</p>
        
        ${project.features && project.features.length > 0 ? `
          <h5 class="fw-semibold mb-2" style="color: var(--accent-color);">Key Features</h5>
          <ul class="list-unstyled text-secondary-custom mb-4">
            ${featuresList}
          </ul>
        ` : ""}

        <div class="project-actions mt-4 pt-3 border-top border-secondary border-opacity-25 d-flex gap-3">
          <a href="${project.liveDemo}" target="_blank" class="btn btn-custom btn-primary-custom" style="padding: 10px 20px;"><i class="fas fa-external-link-alt"></i> Live Demo</a>
          <a href="${project.github}" target="_blank" class="btn btn-custom btn-secondary-custom" style="padding: 10px 20px;"><i class="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    </div>
  `;

  modal.style.display = "block";
  // Fade in
  setTimeout(() => {
    modal.firstElementChild.style.opacity = "1";
  }, 50);

  // Close binding
  const closeBtn = document.getElementById("close-project-modal");
  const overlay = modal.firstElementChild;
  
  const closeModal = () => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  
  // Custom cursor hover states inside modal
  const hoverables = modal.querySelectorAll("a, button");
  hoverables.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    elem.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
}
