/**
 * SPACE-THEMED DEVELOPER PORTFOLIO DATA CONFIGURATION
 * Pilot: MJ SAI DHANUSH
 * Ship: NEXUS-VII // Starfleet Developer Vessel
 */

const portfolioData = {
  // 1. Mission Header & Hero Telemetry
  personalInfo: {
    name: "MJ SAI DHANUSH",
    callsign: "COMMANDER DHANUSH // SECTOR-IND",
    subtitle: "Building Digital Experiences Through Code & AI",
    roles: [
      "Full Stack Developer",
      "MERN Stack Architect",
      "Algorithmic Navigator (150+ DSA)",
      "Software Engineer"
    ],
    bio: "Computer Science undergraduate engineering next-generation web platforms across the digital cosmos. Specialized in MERN stack architecture, robust RESTful APIs, intelligent automation, and high-performance interactive interfaces.",
    resumeUrl: "assets/resume.pdf",
    profileImg: "assets/images/profile.jpg",
    coordinates: "ORBIT: 12.9716° N, 77.5946° E // LEO-2027",
    statusBadge: "SYS: ONLINE // WARP READY",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mj-sai-dhanush-b8174228b/",
      github: "https://github.com/mjsaidhanush",
      leetcode: "https://leetcode.com/u/Dhanush_9/",
      instagram: "https://instagram.com/mjsaidhanush",
      email: "mailto:mjsaidhanush@gmail.com"
    }
  },

  // 2. MISSION CONTROL (About Section)
  missionControl: {
    designation: "Flight Commander // Full Stack Developer",
    status: "ORBITAL MISSION: ACTIVE (PARUL UNIVERSITY // 2023 - 2027)",
    objective: "Driven by computational exploration, I architect resilient full-stack systems through the MERN stack, Data Structures, and AI-augmented workflows. Seeking mission-critical software engineering opportunities to build scalable platforms, optimize complex algorithmic pipelines, and craft immersive digital experiences.",
    education: [
      {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        institution: "Parul University, India",
        duration: "2023 - 2027 // Orbital Flight",
        score: "CGPA: 7.33",
        code: "SECTOR-BTECH-CSE",
        coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"]
      },
      {
        degree: "Intermediate Education (Class XII - PCMCs)",
        institution: "Blooms PU College, India",
        duration: "2021 - 2023 // Pre-Flight Launch",
        score: "Percentage: 70%",
        code: "SECTOR-PCMC-12",
        coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
      }
    ],
    strengths: [
      "Hands-on MERN stack development & distributed REST API architectures",
      "Rigorous algorithmic problem-solving with 150+ verified DSA solutions",
      "Scalable database modeling across MongoDB documents and relational schemas",
      "Collaborative version control, git flow, and automated continuous deployment"
    ],
    languages: [
      { name: "English", level: "Fluent / Professional Flight Comms" },
      { name: "Kannada", level: "Native / Starbase Primary" },
      { name: "Hindi", level: "Conversational / Standard Comms" }
    ],
    telemetry: [
      { label: "Core Focus", value: "Full Stack & AI" },
      { label: "Flight Year", value: "3rd Year CSE" },
      { label: "Algorithms", value: "150+ Solved" },
      { label: "Ship Status", value: "Flight Ready" }
    ]
  },

  // 3. TECHNOLOGY (Skills Section)
  technology: {
    frontend: [
      { name: "React.js", level: 90, icon: "fab fa-react", color: "#61dafb" },
      { name: "HTML5", level: 95, icon: "fab fa-html5", color: "#f97316" },
      { name: "CSS3 / 3D Animations", level: 92, icon: "fab fa-css3-alt", color: "#38bdf8" },
      { name: "JavaScript (ES6+)", level: 90, icon: "fab fa-js", color: "#facc15" },
      { name: "Bootstrap 5", level: 88, icon: "fab fa-bootstrap", color: "#a855f7" }
    ],
    backend: [
      { name: "Node.js", level: 85, icon: "fab fa-node-js", color: "#22c55e" },
      { name: "Express.js", level: 82, icon: "fas fa-server", color: "#94a3b8" },
      { name: "REST APIs & JSON", level: 88, icon: "fas fa-network-wired", color: "#06b6d4" },
      { name: "JWT Auth & Security", level: 80, icon: "fas fa-shield-alt", color: "#f43f5e" }
    ],
    database: [
      { name: "MongoDB", level: 85, icon: "fas fa-database", color: "#10b981" },
      { name: "MySQL", level: 78, icon: "fas fa-table", color: "#3b82f6" },
      { name: "Database Modeling", level: 82, icon: "fas fa-project-diagram", color: "#8b5cf6" }
    ],
    programming: [
      { name: "Java", level: 88, icon: "fab fa-java", color: "#ef4444" },
      { name: "JavaScript", level: 90, icon: "fab fa-js-square", color: "#facc15" },
      { name: "Python", level: 80, icon: "fab fa-python", color: "#38bdf8" },
      { name: "C / C++", level: 82, icon: "fas fa-code", color: "#6366f1" }
    ],
    tools: [
      { name: "Git & Version Control", level: 92, icon: "fab fa-git-alt", color: "#f97316" },
      { name: "GitHub", level: 90, icon: "fab fa-github", color: "#cbd5e1" },
      { name: "Postman API Suite", level: 85, icon: "fas fa-paper-plane", color: "#fb923c" },
      { name: "VS Code IDE", level: 95, icon: "fas fa-terminal", color: "#0ea5e9" }
    ]
  },

  // 4. PROJECT GALAXY (Planets with 3D Styles & Telemetry)
  projects: [
    {
      id: "smart-farm",
      planetName: "AETHERIA-IX",
      planetTitle: "Smart Farm Assistance",
      planetType: "Bio-Agro Telemetry Planet",
      category: "fullstack",
      themeColor: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.6)",
      ringGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.6), rgba(6, 182, 212, 0.3))",
      planetGradient: "radial-gradient(circle at 30% 30%, #34d399, #059669 45%, #064e3b 85%, #022c22 100%)",
      hasRing: true,
      description: "A full-stack IoT smart agricultural ecosystem that monitors real-time soil moisture, environmental humidity, and ambient temperature, automatically triggering irrigation pumps via sensor thresholds.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "IoT Sensors", "REST APIs"],
      image: "assets/images/smart_farm.png",
      liveDemo: "https://github.com/mjsaidhanush",
      github: "https://github.com/mjsaidhanush",
      features: [
        "Real-time telemetry streaming from soil moisture, temperature, and atmospheric IoT sensors",
        "Automated pump actuation logic based on configurable moisture thresholds",
        "Interactive graphical charts for sensor telemetry history and analytics",
        "Mobile-first responsive dashboard interface built with React & Bootstrap"
      ],
      missionStats: {
        telemetry: "Real-Time Sensor Bus",
        database: "MongoDB Atlas",
        architecture: "MERN Stack IoT"
      }
    },
    {
      id: "doctor-mgmt",
      planetName: "MEDISYS-PRIME",
      planetTitle: "Doctor Management System",
      planetType: "Cyan Cyber-Medical Core",
      category: "fullstack",
      themeColor: "#06b6d4",
      glowColor: "rgba(6, 182, 212, 0.6)",
      ringGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.6), rgba(99, 102, 241, 0.3))",
      planetGradient: "radial-gradient(circle at 30% 30%, #67e8f9, #0891b2 45%, #164e63 85%, #083344 100%)",
      hasRing: true,
      description: "An enterprise medical consultation and clinic scheduling platform featuring role-based portals for doctors, patients, and admins with strict backend validation and secure auth workflows.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Validation"],
      image: "assets/images/doctor_mgmt.png",
      liveDemo: "https://github.com/mjsaidhanush",
      github: "https://github.com/mjsaidhanush",
      features: [
        "Role-based multi-tier dashboard authorization for Patients, Doctors, and Admin personnel",
        "Interactive schedule planner with real-time consultation slot reservation",
        "End-to-end data integrity with server-side validation and structured error pipelines",
        "Modular React frontend components with high-speed query state management"
      ],
      missionStats: {
        telemetry: "Multi-Role Dashboards",
        database: "MongoDB Auth Core",
        architecture: "MERN HealthTech"
      }
    },
    {
      id: "weather-app",
      planetName: "METEORA-VI",
      planetTitle: "Weather Forecast App",
      planetType: "Atmospheric Storm Giant",
      category: "frontend",
      themeColor: "#8b5cf6",
      glowColor: "rgba(139, 92, 246, 0.6)",
      ringGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.3))",
      planetGradient: "radial-gradient(circle at 30% 30%, #c4b5fd, #7c3aed 45%, #4c1d95 85%, #2e1065 100%)",
      hasRing: false,
      description: "A sleek atmospheric weather intelligence application delivering real-time weather metrics, multi-day forecasting, dynamic background visualizers, and automatic geolocation lookup.",
      technologies: ["JavaScript (ES6)", "HTML5", "CSS3", "OpenWeather API", "Geolocation"],
      image: "assets/images/weather_app.png",
      liveDemo: "https://github.com/mjsaidhanush",
      github: "https://github.com/mjsaidhanush",
      features: [
        "Real-time meteorological queries with global city coverage through OpenWeather API",
        "Automatic user position triangulation using browser HTML5 Geolocation",
        "Dynamic atmospheric themes adjusting automatically to rainfall, sunshine, and storms",
        "Fluid 7-day predictive weather metrics rendered on modern glass cards"
      ],
      missionStats: {
        telemetry: "Global API Geocoding",
        database: "Client-Side Cache",
        architecture: "Dynamic Frontend"
      }
    },
    {
      id: "portfolio-site",
      planetName: "NEXUS-COMMAND",
      planetTitle: "Immersive Space Portfolio",
      planetType: "Futuristic Flagship Planet",
      category: "frontend",
      themeColor: "#ec4899",
      glowColor: "rgba(236, 72, 153, 0.6)",
      ringGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(129, 140, 248, 0.4))",
      planetGradient: "radial-gradient(circle at 30% 30%, #f472b6, #db2777 45%, #831843 85%, #500724 100%)",
      hasRing: true,
      description: "An immersive space-themed developer portfolio styled as a futuristic spaceship cockpit with cosmic starfields, 3D CSS planetary orbits, holographic modals, and recruiter-focused telemetry.",
      technologies: ["HTML5 Canvas", "CSS3 3D Shaders", "JavaScript", "Web Audio API", "Bootstrap 5"],
      image: "assets/images/portfolio_site.png",
      liveDemo: "#",
      github: "https://github.com/mjsaidhanush/portfolio7",
      features: [
        "Hardware-accelerated HTML5 starfield canvas with dynamic parallax and shooting stars",
        "Interactive 3D planetary project galaxy with rotational physics and modal scan view",
        "Synthesized futuristic sound effects using zero-dependency Web Audio API",
        "Responsive spacecraft cockpit navigation HUD with telemetry status indicators"
      ],
      missionStats: {
        telemetry: "60 FPS Canvas Starfield",
        database: "JSON Data Architecture",
        architecture: "Sci-Fi Spacecraft UI"
      }
    }
  ],

  // 5. CAREER JOURNEY (Mission Log & Flight Timeline)
  careerJourney: [
    {
      flightCode: "MISSION 04 // ACTIVE ORBIT",
      role: "B.Tech Computer Science Undergraduate & Full-Stack Developer",
      organization: "Parul University",
      duration: "2023 - 2027 // Active Flight",
      type: "ACADEMIC & R&D EXPEDITION",
      badge: "In Flight",
      responsibilities: [
        "Engineering responsive web applications and full-stack solutions using React, Node.js, and MongoDB.",
        "Developing real-time IoT architectures, including sensor data telemetry for the Smart Farm Assistant.",
        "Mastering computer science core fundamentals: Data Structures, Operating Systems, DBMS, and OOP.",
        "Collaborating across hackathon teams to deploy production-ready web software under tight deadlines."
      ]
    },
    {
      flightCode: "MISSION 03 // SIMULATION ORBIT",
      role: "Advanced Software Engineering Virtual Scholar",
      organization: "Forage (Walmart & Enterprise Simulations)",
      duration: "Credential Achieved",
      type: "ENTERPRISE SYSTEM SIMULATION",
      badge: "Certified",
      responsibilities: [
        "Completed simulated enterprise engineering tasks focusing on data structures, algorithmic design, and architectural scalability.",
        "Implemented high-performance backend modules adhering to object-oriented programming standards.",
        "Evaluated memory efficiency and algorithm time complexity for enterprise-grade applications."
      ]
    },
    {
      flightCode: "MISSION 02 // FRONTEND ORBIT",
      role: "Frontend Web Development Scholar & Intern",
      organization: "Cognify Technologies",
      duration: "Credential Achieved",
      type: "REACT UI/UX ODYSSEY",
      badge: "Certified",
      responsibilities: [
        "Crafted dynamic, accessible single-page web applications utilizing React.js, modern ES6+, and CSS Grid/Flexbox.",
        "Integrated third-party asynchronous REST endpoints with error handling, skeletons, and graceful fallbacks.",
        "Enhanced page speed and rendering performance by 35% through asset minification and responsive layout techniques."
      ]
    },
    {
      flightCode: "MISSION 01 // ALGORITHM EXPLORATION",
      role: "Competitive Algorithmic Navigator (150+ Solved)",
      organization: "LeetCode & GeeksforGeeks",
      duration: "Ongoing Voyage",
      type: "DATA STRUCTURES MATRIX",
      badge: "Mastery",
      responsibilities: [
        "Solved 150+ Data Structures & Algorithm challenges focusing on Trees, Graphs, Dynamic Programming, and Arrays.",
        "Active competitive solver under handle 'Dhanush_9', verifying rigorous logical problem-solving aptitude.",
        "Applied optimal space-time complexities to real-world backend engineering and database optimization."
      ]
    }
  ],

  // 6. ACHIEVEMENTS & CERTIFICATIONS (Flight Badges)
  achievements: [
    {
      count: 150,
      suffix: "+",
      title: "DSA Solved",
      subtitle: "LeetCode & GeeksforGeeks",
      icon: "fas fa-code",
      link: "https://leetcode.com/u/Dhanush_9/"
    },
    {
      count: 4,
      suffix: "+",
      title: "Planetary Projects",
      subtitle: "Full-Stack & Frontend",
      icon: "fas fa-globe-americas",
      link: "#projects"
    },
    {
      count: 2,
      suffix: "",
      title: "Flight Credentials",
      subtitle: "Cognify & Forage Certified",
      icon: "fas fa-award",
      link: "#certifications"
    },
    {
      count: 100,
      suffix: "%",
      title: "Git Version Control",
      subtitle: "Collaborative Git/GitHub",
      icon: "fab fa-git-alt",
      link: "https://github.com/mjsaidhanush"
    }
  ],

  certifications: [
    {
      title: "Frontend Web Development Certification",
      organization: "Cognify Technologies",
      date: "Credential Verified",
      code: "ID: COG-WEB-2024",
      link: "assets/cognify_certificate.pdf",
      icon: "fas fa-satellite"
    },
    {
      title: "Advanced Software Engineering Job Simulation Certification",
      organization: "Forage",
      date: "Credential Verified",
      code: "ID: FORAGE-SWE-2024",
      link: "assets/forage_certificate.pdf",
      icon: "fas fa-space-shuttle"
    }
  ],

  // 7. SERVICES (Orbital Capabilities)
  services: [
    {
      title: "Full Stack Web Engineering",
      description: "Developing robust, scalable, and secure web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      icon: "fas fa-layer-group",
      badge: "MISSION CORE"
    },
    {
      title: "Responsive & 3D Web Design",
      description: "Crafting fluid, futuristic interfaces that scale seamlessly across high-resolution ultra-wide monitors to mobile devices.",
      icon: "fas fa-cubes",
      badge: "FRONTEND HUD"
    },
    {
      title: "RESTful API Architecture",
      description: "Designing structured REST APIs with clean routes, strict authentication, input validation, and optimized database queries.",
      icon: "fas fa-network-wired",
      badge: "COMMUNICATIONS"
    },
    {
      title: "Algorithmic Optimization",
      description: "Refining data flow and computational efficiency through deep DSA problem-solving and clean code paradigms.",
      icon: "fas fa-microchip",
      badge: "SYSTEM LOGIC"
    }
  ],

  // 8. TESTIMONIALS (Mission Feedback)
  testimonials: [
    {
      name: "Academic Project Mentor",
      role: "Faculty // Parul University",
      comment: "Sai Dhanush exhibited commendable full-stack capability when developing the Smart Farm Assistant. His integration of IoT sensor telemetry with MongoDB and React dashboards was thorough and reliable.",
      avatar: "https://i.pravatar.cc/100?img=68"
    },
    {
      name: "Peer Reviewer & Hackathon Teammate",
      role: "Fellow Engineering Scholar",
      comment: "Dhanush is an exceptional collaborator with JavaScript and API development. He navigates database pipelines and component integration with precision under tight project schedules.",
      avatar: "https://i.pravatar.cc/100?img=33"
    }
  ],

  // 9. CONTACT BASE (Subspace Comms)
  contact: {
    email: "mjsaidhanush@gmail.com",
    phone: "+91 8217465141",
    location: "Bengaluru, India // Global Subspace Transmission",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.921381395726!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691130000000!5m2!1sen!2sin"
  }
};
