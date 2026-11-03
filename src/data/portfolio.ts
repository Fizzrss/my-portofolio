export interface Profile {
  name: string;
  tagline: string;
  status: string;
  location: string;
  bioLead: string;
  bioLong: string;
  avatar: string;
  resumeUrl?: string;
  contacts: {
    email: string;
    whatsapp: string;
    whatsappNumber: string;
    github: string;
    githubUsername: string;
    linkedin: string;
    linkedinUsername: string;
    instagram: string;
    instagramUsername: string;
  };
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  badge: string;
  courses?: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export interface ProjectGalleryItem {
  image: string;
  title: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web App" | "Mobile App" | "Full-Stack";
  year: string;
  image: string;
  fallbackImage?: string;
  gallery?: ProjectGalleryItem[];
  summary: string;
  description: string;
  tags: string[];
  features: string[];
  deliverables: string[];
  techStack: {
    name: string;
    icon?: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface ExperienceActivity {
  title: string;
  role: string;
  year: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Experience {
  organization: string;
  role: string;
  division: string;
  period: string;
  logo: string;
  description: string;
  activities: ExperienceActivity[];
  skillsApplied: string[];
}

export const portfolioData: {
  profile: Profile;
  education: Education[];
  skillCategories: SkillCategory[];
  toolsRibbon: string[];
  projects: Project[];
  experience: Experience;
} = {
  profile: {
    name: "Fiza Rahmatus Sholikha",
    tagline: "Web & Mobile Developer | Software Quality Assurance",
    status: "Business Information Systems Student - Polinema",
    location: "Malang, East Java, Indonesia",
    bioLead: "Passionate Software Engineer skilled in Full-Stack Web, Mobile Development, and Software Quality Assurance.",
    bioLong: "I am a Business Information Systems student at Politeknik Negeri Malang with experience in web and mobile development (frontend, backend, and databases). I have built applications using Laravel, Flutter, and Supabase, and performed end-to-end testing with Cypress. I am used to working in a team using GitHub, leading software development teams, and creating specification documents like SRS and UML.",
    avatar: "/images/profile.jpg",
    contacts: {
      email: "fizars123@gmail.com",
      whatsapp: "https://wa.me/6289515890385",
      whatsappNumber: "+62 895-1589-0385",
      github: "https://github.com/Fizzrss",
      githubUsername: "Fizzrss",
      linkedin: "https://linkedin.com/in/fiza-rahmatus",
      linkedinUsername: "fiza-rahmatus",
      instagram: "https://instagram.com/fizaaars_",
      instagramUsername: "@fizaaars_",
    },
  },
  education: [
    {
      id: "polinema",
      institution: "Politeknik Negeri Malang",
      degree: "D4 Sistem Informasi Bisnis (Business Information Systems)",
      period: "2024 – Present",
      badge: "Current Degree",
      description: "Focused on Enterprise Information Systems, Software Quality Assurance, Full-Stack Web Architecture, and Mobile Application Engineering.",
      courses: [
        "Object-Oriented Programming",
        "Database Design & Administration",
        "Web & Mobile Application Development",
        "Software Engineering & Architecture",
        "System Analysis & Design (SRS/UML)",
      ],
    },
    {
      id: "sman1babat",
      institution: "SMA Negeri 1 Babat",
      degree: "Natural Sciences / MIPA",
      period: "2021 – 2024",
      badge: "Alumna",
      description: "Built strong foundations in mathematics, algorithmic problem solving, analytical reasoning, and scientific methodology.",
    },
  ],
  skillCategories: [
    {
      category: "Languages",
      icon: "code",
      skills: [
        { name: "PHP" },
        { name: "Dart" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "HTML & CSS" },
      ],
    },
    {
      category: "Frameworks & Libs",
      icon: "layers",
      skills: [
        { name: "Laravel" },
        { name: "Flutter" },
        { name: "Tailwind CSS" },
        { name: "Alpine.js" },
      ],
    },
    {
      category: "Databases & Cloud",
      icon: "database",
      skills: [
        { name: "PostgreSQL" },
        { name: "Supabase (BaaS)" },
        { name: "MySQL" },
      ],
    },
    {
      category: "Quality Assurance",
      icon: "check-circle",
      skills: [
        { name: "Cypress (E2E)" },
        { name: "PHPUnit" },
        { name: "Black Box Testing" },
      ],
    },
  ],
  toolsRibbon: [
    "Git",
    "GitHub",
    "VS Code",
    "Draw.io",
    "SRS (Software Requirements Spec)",
    "UML Modeling",
  ],
  projects: [
    {
      id: "rentalbase",
      title: "RentalBase",
      subtitle: "Multi-Tenant Equipment Rental Management System",
      category: "Web App",
      year: "Sep 2026 - Present",
      image: "/images/projects/rentalbase.png",
      fallbackImage: "/images/projects/rentalbase.svg",
      gallery: [
        {
          image: "/images/projects/rentalbase.png",
          title: "RentalBase Platform & Booking Portal",
          caption: "Primary rental interface with interactive catalog & filtering",
        },
        {
          image: "/images/projects/rentalbase(1).png",
          title: "Inventory & Operational Analytics",
          caption: "Multi-tenant inventory distribution and fleet health dashboard",
        },
        {
          image: "/images/projects/rentalbase(2).png",
          title: "System Architecture & Booking Flow",
          caption: "Data flow from customer order to asset inspection return",
        },
      ],
      summary: "A web-based equipment rental management system designed to help rental businesses manage products, inventory, bookings, and rental transactions.",
      description: "RentalBase is a web-based equipment rental management system developed as part of a Project-Based Learning (PBL) project. The application uses a multi-tenant architecture to support multiple rental businesses within one platform. My responsibilities focus on backend development and database management, including implementing application features, managing data relationships, and preparing software testing documentation.",
      tags: ["Laravel", "Supabase", "PostgreSQL", "Tailwind CSS", "Alpine.js"],
      features: [
        "Multi-tenant architecture for managing multiple rental businesses",
        "Product and rental unit management",
        "Booking and rental transaction management",
        "Rental return and physical condition inspection",
        "Role-based access control for application users",
      ],
      deliverables: [
        "Software Requirements Specification (SRS) documentation",
        "Relational database design and Entity Relationship Diagram (ERD)",
        "UML Use Case, Activity, and Class Diagrams",
        "Software Test Plan based on IEEE 829",
        "Unit, integration, and end-to-end testing plans",
      ],
      techStack: [
        { name: "Laravel 13" },
        { name: "PHP 8.3" },
        { name: "Supabase BaaS" },
        { name: "PostgreSQL" },
        { name: "Tailwind CSS" },
        { name: "Alpine.js" },
      ],
      githubUrl: "https://github.com/tersiqo/RentalBase",
      stats: [
        { label: "Architecture", value: "Multi-Tenant" },
        { label: "Testing", value: "Cypress E2E" },
        { label: "Database", value: "Supabase" },
      ],
    },
    {
      id: "buildmatch",
      title: "BuildMatch",
      subtitle: "Architect and Contractor Marketplace Application",
      category: "Mobile App",
      year: "Mar 2026 - Jun 2026",
      image: "/images/projects/buildmatch.png",
      fallbackImage: "/images/projects/buildmatch.svg",
      gallery: [
        {
          image: "/images/projects/buildmatch.png",
          title: "Mobile App Marketplace Discovery",
          caption: "Contractor and architect discovery with budget estimation",
        },
        {
          image: "/images/projects/buildmatch(1).jpeg",
          title: "Real-Time Consultation & Milestones",
          caption: "Direct architect messaging and verified milestone tracking",
        },
        {
          image: "/images/projects/buildmatch(2).jpeg",
          title: "Matching System Architecture",
          caption: "End-to-end client to contractor transaction pipeline",
        },
      ],
      summary: "A mobile marketplace application designed to connect clients with architects and contractors for construction and design projects.",
      description: "BuildMatch is a mobile marketplace application developed as part of a Project-Based Learning (PBL) project. The application aims to connect clients with architects and contractors through a digital platform. My contributions included developing mobile application features using Flutter, managing backend data with Supabase, analyzing business processes, and designing system models.",
      tags: ["Flutter", "Dart", "Supabase"],
      features: [
        "Professional portfolio showcase for architects and contractors",
        "Custom quotation request system with budget estimation tools",
        "Real-time consultation chat with media attachment and status timestamps",
        "Location-based contractor and architect discovery with interactive distance filters",
        "Milestone-based progress tracker and sign-off approval flows",
      ],
      deliverables: [
        "Complete interactive UI/UX Figma system and prototype",
        "Modular Flutter mobile client codebase with clean architectural separation",
        "Business process analysis",
        "Use Case, Activity, and Sequence Diagrams",
        "Black Box Testing documentation and questionnaire involving 33 respondents",
      ],
      techStack: [
        { name: "Flutter SDK" },
        { name: "Dart" },
        { name: "Supabase BaaS" },
      ],
      githubUrl: "https://github.com/dimasaditthaliaputra/buildmatch_mobile",
      stats: [
        { label: "Platform", value: "Android" },
        { label: "Backend", value: "Supabase" },
        { label: "Role", value: "System Designer & Programmer" },
      ],
    },
    {
      id: "lab-se-polinema",
      title: "Software Engineering Lab Portal",
      subtitle: "Laboratory Profile Website - Politeknik Negeri Malang",
      category: "Web App",
      year: "Nov 2025 - Des 2025",
      image: "/images/projects/lab-se-polinema.jpeg",
      fallbackImage: "/images/projects/lab-se-polinema.svg",
      gallery: [
        {
          image: "/images/projects/lab-se-polinema.jpeg",
          title: "Laboratory Profile Homepage",
          caption: "Web portal for Software Engineering Laboratory at Polinema",
        },
        {
          image: "/images/projects/lab-se-polinema(1).png",
          title: "Research Directory & Asset Management",
          caption: "Inventory loans, project listings, and academic publications",
        },
        {
          image: "/images/projects/lab-se-polinema(2).jpeg",
          title: "PHP Native MVC Architecture",
          caption: "Model-View-Controller modular data flow and PostgreSQL schema",
        },
      ],
      summary: "A simple laboratory profile website developed as an early learning project to practice basic web development using PHP Native MVC and PostgreSQL.",
      description: "This project was my first experience developing a web application using the PHP Native MVC concept as part of a Project-Based Learning (PBL) course. At that time, I was still learning the fundamentals of web development, including how to structure application code, connect to a database, and implement basic website functionality. I also took part in coordinating the development process with my team. The website was developed and tested locally on a development environment and was not deployed to a public server.",
      tags: ["PHP MVC", "PostgreSQL", "Tailwind CSS", "JavaScript", "jQuery"],
      features: [
        "Basic laboratory profile and information pages",
        "Simple administrator authentication",
        "Database integration using PostgreSQL and PDO",
        "Basic data management functionality",
        "Responsive interface using Bootstrap 5",
      ],
      deliverables: [
        "A locally developed laboratory profile website",
        "Basic PHP Native MVC application structure",
        "PostgreSQL database integration",
        "Basic authentication implementation",
        "Initial experience in team coordination and web application development",
      ],
      techStack: [
        { name: "PHP MVC" },
        { name: "PostgreSQL" },
        { name: "Bootstrap 5" },
        { name: "JavaScript" },
        { name: "jQuery" },
      ],
      githubUrl: "https://github.com/Fizzrss/Lab_SE_Website",
      stats: [
        { label: "Development", value: "Local Environment" },
        { label: "Architecture", value: "Basic MVC" },
        { label: "Experience", value: "Beginner Project" },
      ],
    },
  ],
  experience: {
    organization: "UKM Pendidikan dan Penalaran - Politeknik Negeri Malang",
    role: "Organizing Committee",
    division: "Research & Technology Development Division",
    period: "2024 – 2025",
    logo: "/images/ukm.jpg",
    description: "Actively involved in organizing academic and scientific activities within UKM Pendidikan dan Penalaran at Politeknik Negeri Malang. Gained experience in event coordination, administrative management, and teamwork through involvement in various student programs.",
    activities: [
      {
        title: "Scientific Research Program",
        role: "Head of Event Coordinator",
        year: "Mar 2025 - Jul 2025",
        description: "Responsible for coordinating the event preparation and implementation of a student scientific research program, including developing activity concepts, arranging schedules, and coordinating event activities.",
        image: "/images/experience/scientific-research.jpg",
        highlights: [
          "Developed event concepts and activity plans",
          "Arranged event schedules and coordinated the event team",
          "Supported the smooth execution of program activities"
        ],
      },
      {
        title: "Student Scientific Paper Competition",
        role: "Head of Secretariat Coordinator",
        year: "Apr 2025 - Jul 2025",
        description: "Responsible for managing administrative activities and secretariat needs for a student scientific paper competition, including handling official correspondence, documentation, and event administration.",
        image: "/images/experience/student-paper.JPG",
        highlights: [
          "Managed event administration and documentation",
          "Prepared official letters and event correspondence",
          "Organized permits and other secretariat requirements",
        ],
      },
    ],
    skillsApplied: [
      "Event Coordination",
      "Project Scheduling",
      "Stakeholder Negotiation",
      "Administration & Archiving",
      "Cross-functional Team Coordination",
      "Risk Mitigation",
    ],
  },
};

