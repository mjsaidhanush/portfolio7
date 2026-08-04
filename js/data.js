/**
 * Portfolio Data Configuration File
 * Updated with actual resume details of MJ Sai Dhanush
 */

const portfolioData = {
  // 1. Personal & Hero Section Info
  personalInfo: {
    name: "MJ Sai Dhanush",
    roles: ["Full Stack Developer", "MERN Stack Developer", "Software Engineer", "Problem Solver"],
    bio: "Computer Science undergraduate with hands-on experience in MERN stack development and building responsive full-stack web applications. Skilled in REST APIs, database management, and frontend development using React.js.",
    resumeUrl: "assets/resume.pdf",
    profileImg: "assets/images/profile.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mj-sai-dhanush-b8174228b/",
      github: "https://github.com/mjsaidhanush",
      leetcode: "https://leetcode.com/u/Dhanush_9/",
      instagram: "https://instagram.com/mjsaidhanush", // Placeholder
      email: "mailto:mjsaidhanush@gmail.com"
    }
  },

  // 2. About Me Section
  aboutMe: {
    objective: "Computer Science undergraduate with hands-on experience in MERN stack development and building responsive full-stack web applications. Skilled in REST APIs, authentication, database management, and frontend development using React.js. Passionate about software development, Data Structures, and problem solving.",
    education: [
      {
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Parul University",
        duration: "2023 - 2027",
        score: "CGPA: 7.33"
      },
      {
        degree: "Intermediate Education (Class XII - PCMCs)",
        institution: "Blooms Pu College",
        duration: "2021 - 2023",
        score: "Percentage: 70%"
      }
    ],
    strengths: [
      "Hands-on experience in MERN stack development & building REST APIs",
      "Solid knowledge of Data Structures and Algorithms (DSA) & OOPs",
      "Passionate about software engineering and logical problem solving",
      "Proficient in version control systems and collaborative coding using Git/GitHub"
    ],
    languages: [
      { name: "English", level: "Professional / Fluent" },
      { name: "Kannada", level: "Native / Bilingual" },
      { name: "Hindi", level: "Conversational" }
    ]
  },

  // 3. Skills Section (with percentage for animated progress bars)
  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Bootstrap 5", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 }
    ],
    database: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 75 }
    ],
    programming: [
      { name: "C", level: 75 },
      { name: "C++", level: 80 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 80 }
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 95 }
    ]
  },

  // 4. Projects Section
  projects: [
    {
      id: "smart-farm",
      title: "Smart Farm Assistance",
      category: "fullstack",
      description: "Developed a full-stack Smart Farm Assistant application. Implemented IoT-based monitoring, sensor data management, and REST APIs for irrigation, crops, and weather tracking. Built responsive frontend dashboards for real-time farm monitoring.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "IoT Sensors"],
      image: "assets/images/smart_farm.png",
      liveDemo: "https://github.com/mjsaidhanush", // Placeholder
      github: "https://github.com/mjsaidhanush",
      features: [
        "Real-time IoT sensor telemetry dashboard (Temperature, Humidity, Soil Moisture)",
        "Automated pump irrigation control based on moisture thresholds",
        "Visual history charts for sensor metrics using ChartJS / React Charts",
        "Responsive, recruiter-friendly full-stack dashboards"
      ]
    },
    {
      id: "doctor-mgmt",
      title: "Doctor Management System",
      category: "fullstack",
      description: "Built a doctor appointment and patient management platform with role-based dashboards. Developed REST APIs, appointment scheduling modules, and reusable frontend components. Added backend validation and error handling.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Validation"],
      image: "assets/images/doctor_mgmt.png",
      liveDemo: "https://github.com/mjsaidhanush",
      github: "https://github.com/mjsaidhanush",
      features: [
        "Role-based secure portal dashboards for Patients, Doctors, and Admin staff",
        "Real-time scheduling and interactive calendar appointment management",
        "Secured using JWT authorization, robust session states, and password hashing",
        "Strict input validation and backend error logging systems"
      ]
    },
    {
      id: "weather-app",
      title: "Weather Forecast App",
      category: "frontend",
      description: "A sleek frontend weather application featuring real-time weather details, 7-day forecast lookup, dynamic weather theme backgrounds, and geolocation-based automated weather loading.",
      technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API", "Bootstrap 5"],
      image: "assets/images/weather_app.png",
      liveDemo: "https://github.com/mjsaidhanush",
      github: "https://github.com/mjsaidhanush",
      features: [
        "Real-time lookup for global cities using OpenWeather API integration",
        "Dynamic background changes matching actual temperature and humidity values",
        "Built-in automatic local weather retrieval using HTML Geolocation",
        "Optimized mobile-first interface with Bootstrap grid layers"
      ]
    },
    {
      id: "portfolio-site",
      title: "Portfolio Website",
      category: "frontend",
      description: "My personal portfolio website featuring glassmorphism elements, dark/light mode toggle, scroll-triggered animations, interactive contact form validation, and dynamic content rendering.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      image: "assets/images/portfolio_site.png",
      liveDemo: "#",
      github: "https://github.com/mjsaidhanush",
      features: [
        "Configured variables for rapid switching between Light and Dark themes",
        "Interactive mouse cursor tracing rings and floating responsive elements",
        "Dynamic rendering engine loading resume JSON databases directly",
        "SEO-friendly structures including titles, descriptions, and semantic markup"
      ]
    }
  ],

  // 5. Experience Section (Empty - will be dynamically hidden in UI)
  experience: [],

  // 6. Certifications Section
  certifications: [
    {
      title: "Frontend Web Development Certification",
      organization: "Cognify Technologies",
      date: "Credential",
      link: "assets/cognify_certificate.pdf"
    },
    {
      title: "Advanced Software Engineering Job Simulation Certification",
      organization: "Forage",
      date: "Credential",
      link: "assets/forage_certificate.pdf"
    }
  ],

  // 7. Achievements Section
  achievements: [
    {
      count: 150,
      suffix: "+",
      title: "DSA Solved",
      icon: "fas fa-code",
      link: "https://leetcode.com/u/Dhanush_9/"
    },
    {
      count: 4,
      suffix: "+",
      title: "Projects Built",
      icon: "fas fa-laptop-code"
    },
    {
      count: 2,
      suffix: "",
      title: "Certifications",
      icon: "fas fa-award"
    },
    {
      count: 100,
      suffix: "%",
      title: "Git Version Control",
      icon: "fab fa-git-alt"
    }
  ],

  // 8. Services Section
  services: [
    {
      title: "Web Development",
      description: "Building robust, scalable, and secure web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      icon: "fas fa-globe"
    },
    {
      title: "Responsive Design",
      description: "Crafting interfaces that scale seamlessly across all screen sizes—from high-res desktop monitors to mobile phones.",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "REST API Design",
      description: "Developing structured REST APIs with clean routes, backend validations, error handling, and database operations.",
      icon: "fas fa-server"
    },
    {
      title: "UI/UX Integration",
      description: "Translating mockups and designs into functional frontend modules with sleek animations, glassmorphism, and responsive states.",
      icon: "fas fa-paint-brush"
    }
  ],

  // 9. Testimonials Section
  testimonials: [
    {
      name: "Project Evaluator",
      role: "Academic Evaluator",
      comment: "Sai Dhanush displayed a solid understanding of full-stack engineering when developing the Smart Farm Assistant. His integration of IoT data points with MongoDB was highly logical.",
      avatar: "https://i.pravatar.cc/100?img=68"
    },
    {
      name: "Peer Reviewer",
      role: "Classmate / Hackathon Partner",
      comment: "Dhanush is excellent with JavaScript and API development. He is a reliable teammate during hackathons, handling database routing and component integration seamlessly.",
      avatar: "https://i.pravatar.cc/100?img=33"
    }
  ],

  // 10. Contact Info (used in Contact & Footer sections)
  contact: {
    email: "mjsaidhanush@gmail.com",
    phone: "+91 8217465141",
    location: "India",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.921381395726!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691130000000!5m2!1sen!2sin"
  }
};
