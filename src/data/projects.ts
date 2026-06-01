import type { Project } from '../types/project'
import asteroidGameImage from '../assets/asteroidzero/asteroid-game.png'
import asteroidLandingImage from '../assets/asteroidzero/landing-page.png'
import asteroidMapImage from '../assets/asteroidzero/map-visiualizor.png'
import asteroidThreatImage from '../assets/asteroidzero/threat-assessment.png'
import cafeDrinksImage from '../assets/cafe195/drink-section.png'
import cafeFoodImage from '../assets/cafe195/food-section.png'
import cafeHomepageImage from '../assets/cafe195/homepage.png'
import cafeSignupImage from '../assets/cafe195/signup-page.png'
import freshTraceAccountImage from '../assets/freshtrace/account-overview.png'
import freshTraceAdminDashboardImage from '../assets/freshtrace/admin-dashboard.png'
import freshTraceAdminUsersImage from '../assets/freshtrace/admin-user-section.png'
import freshTraceErrorLogsImage from '../assets/freshtrace/error-logs.png'
import freshTraceHomeDashboardImage from '../assets/freshtrace/home-dashboard.png'
import freshTraceWeeklyReportImage from '../assets/freshtrace/weekly-report.png'

export const projects: Project[] = [
  {
    id: 'project-freshtrace',
    slug: 'freshtrace',
    title: 'FreshTrace',
    subtitle: 'AI-Powered Grocery Management Platform',
    category: 'Full-Stack / AI',
    year: '2026',
    status: 'Completed',
    featured: true,
    priority: 1,
    shortDescription:
      'A full-stack grocery platform that scans receipts, tracks freshness, and suggests recipes with AI-powered features.',
    longDescription:
      'Built a full-stack grocery management platform that scans receipts with OCR, tracks food freshness, stores receipt images, and generates AI-powered recipe suggestions.',
    problem:
      'Households often lose track of groceries after shopping, making it easy to waste food or miss what should be used first.',
    solution:
      'FreshTrace turns receipt uploads into structured inventory, keeps item status visible, and helps users act on freshness with recipe suggestions.',
    role: 'Full-Stack Developer / Team Member',
    team: '5-person Agile Scrum team',
    techStack: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'OCR', 'REST APIs'],
    features: [
      'OCR receipt scanning',
      'grocery inventory tracking',
      'freshness priority system',
      'AI-powered recipe suggestions',
      'receipt image storage',
      'admin dashboard and item management',
    ],
    challenges: [
      'connecting frontend states with backend APIs',
      'handling OCR extracted items before saving them to inventory',
      'keeping food item status clear across uploaded, reviewed, saved, consumed, and wasted states',
      'integrating Supabase Storage and PostgreSQL',
    ],
    lessons: [
      'learned how full-stack systems move data across frontend, APIs, storage, and database',
      'improved teamwork in Agile sprints',
      'learned how to explain technical architecture clearly',
    ],
    awards: [],
    liveUrl: 'https://freshtrace.app/',
    githubUrl: 'https://github.com/T5-W26-COMP231/freshtrace',
    image: 'freshtrace-product-preview',
    screenshots: [
      { label: 'Home Dashboard', src: freshTraceHomeDashboardImage },
      { label: 'Account Overview', src: freshTraceAccountImage },
      { label: 'Weekly Report', src: freshTraceWeeklyReportImage },
      { label: 'Admin Dashboard', src: freshTraceAdminDashboardImage },
      { label: 'Admin User Section', src: freshTraceAdminUsersImage },
      { label: 'Error Logs', src: freshTraceErrorLogsImage },
    ],
    accent: {
      label: 'AI + inventory',
      colorName: 'cyan',
    },
    stats: [
      { label: 'Team', value: '5' },
      { label: 'Core flows', value: '6' },
      { label: 'Stack', value: 'Full-stack' },
    ],
  },
  {
    id: 'project-cafe195',
    slug: 'cafe195',
    title: 'Cafe195',
    subtitle: 'Full-Stack Coffee Shop Ordering Platform',
    category: 'Full-Stack Web App',
    year: '2025',
    status: 'Completed',
    featured: false,
    priority: 2,
    shortDescription:
      'A MERN-style ordering platform with authentication, product management, orders, and role-based dashboards.',
    longDescription:
      'Built a full-stack coffee shop ordering platform with product management, order handling, authentication, and role-based dashboards.',
    problem:
      'Small ordering systems need clear separation between customer flows and admin operations without making the interface feel heavy.',
    solution:
      'Cafe195 organizes products, orders, and authenticated roles into a practical full-stack application with REST API integration.',
    role: 'Full-Stack Developer',
    team: 'Personal Project',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    features: [
      'user authentication',
      'product CRUD',
      'order management',
      'admin dashboard',
      'role-based views',
      'REST API integration',
    ],
    challenges: [
      'designing backend routes clearly',
      'managing frontend/backend data flow',
      'debugging API and database connection issues',
    ],
    lessons: [
      'strengthened MERN stack fundamentals',
      'improved API testing and debugging workflow',
    ],
    awards: [],
    liveUrl: 'https://cafe-195-frontend.onrender.com/',
    githubUrl: 'https://github.com/ameeshajaswal/Cafe-195',
    image: 'cafe195-ordering-preview',
    screenshots: [
      { label: 'Homepage', src: cafeHomepageImage },
      { label: 'Food Section', src: cafeFoodImage },
      { label: 'Drink Section', src: cafeDrinksImage },
      { label: 'Signup Page', src: cafeSignupImage },
    ],
    accent: {
      label: 'MERN practice',
      colorName: 'emerald',
    },
    stats: [
      { label: 'Role', value: 'Solo' },
      { label: 'APIs', value: 'REST' },
      { label: 'Auth', value: 'JWT' },
    ],
  },
  {
    id: 'project-asteroid-zero',
    slug: 'asteroid-zero',
    title: 'Asteroid Zero',
    subtitle: 'Asteroid Data Visualization Web Application',
    category: 'Hackathon / Data Visualization',
    year: '2025',
    status: 'Award Winner',
    featured: false,
    priority: 3,
    shortDescription:
      'An award-winning hackathon project that used NASA data to visualize asteroid prediction information.',
    longDescription:
      'Developed a web application that used NASA data to display asteroid prediction information and visualize space-related risks.',
    problem:
      'Space-related data can be hard to interpret quickly, especially in a hackathon setting where clarity matters immediately.',
    solution:
      'The project transformed NASA API responses into a responsive interface with dynamic asteroid data and risk-focused visualization.',
    role: 'Frontend Developer / Team Member',
    team: 'Hackathon Team',
    techStack: ['HTML', 'CSS', 'JavaScript', 'NASA APIs', 'REST APIs', 'JSON'],
    features: [
      'NASA API integration',
      'asteroid data display',
      'JSON data processing',
      'responsive UI',
      'dynamic content rendering',
    ],
    challenges: [
      'building under strict hackathon time limits',
      'processing external API data correctly',
      'communicating technical choices as a team',
    ],
    lessons: [
      'learned how to work under time pressure',
      'improved collaboration and fast prototyping skills',
    ],
    awards: ['Most Creative Project', 'Best Use of Data Sources'],
    liveUrl: 'https://asteroidzero.netlify.app/',
    githubUrl: null,
    image: 'nasa-space-apps-data-preview',
    screenshots: [
      { label: 'Landing Page', src: asteroidLandingImage },
      { label: 'Map Visualizer', src: asteroidMapImage },
      { label: 'Threat Assessment', src: asteroidThreatImage },
      { label: 'Asteroid Game', src: asteroidGameImage },
    ],
    accent: {
      label: 'Award winner',
      colorName: 'violet',
    },
    stats: [
      { label: 'Awards', value: '2' },
      { label: 'Event', value: 'Hackathon' },
      { label: 'Data', value: 'NASA' },
    ],
  },
]

export const sortedProjects = [...projects].sort((first, second) => first.priority - second.priority)

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
