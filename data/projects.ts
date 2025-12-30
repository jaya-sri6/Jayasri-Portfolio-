export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  imageUrl?: string;
  duration: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'rag-document-processing',
    title: 'LLM-Based Document Processing System (RAG)',
    description: 'Implemented RAG using embeddings, chunking, and semantic similarity search with scalable LLM-powered APIs.',
    longDescription: 'Built scalable LLM-powered APIs with OpenAI embeddings and GPT-4-turbo. Implemented efficient context management for document-based Q&A using advanced chunking strategies.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Vector DB'],
    githubUrl: 'https://github.com/jaya-sri6/LLM-RAG-Based-Document-Processing-System',
    duration: 'November 2025 – December 2025',
    featured: true,
  },
  {
    id: 'agentic-delivery',
    title: 'Agentic Last-Mile Delivery Coordinator',
    description: 'Applied data-driven decision modeling for autonomous delivery systems using multi-agent orchestration.',
    longDescription: 'Used multi-agent orchestration to optimize routing efficiency and reduce failures through advanced AI coordination patterns.',
    techStack: ['Python', 'LangChain', 'Multi-Agent Systems', 'AI'],
    githubUrl: 'https://github.com/jaya-sri6/Agentic-Last-Mile-Delivery-Coordinator',
    duration: 'June 2025 – August 2025',
    featured: true,
  },
  {
    id: 'multi-format-ai',
    title: 'Multi-Format AI Processing System',
    description: 'Built backend systems for processing PDFs, JSON files, and emails with intelligent routing and caching.',
    longDescription: 'Implemented SQL optimization and Redis for fault tolerance and low-latency communication. Used Docker and Kubernetes for containerized deployment.',
    techStack: ['FastAPI', 'Node.js', 'Redis', 'OpenAI', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/jaya-sri6/MULTI_AI_AGENT',
    duration: 'January 2025 – April 2025',
    featured: true,
  },
  {
    id: 'airflow-canvas',
    title: 'AirFlow Canvas',
    description: 'Developed a gesture-controlled interactive system with event-driven architecture.',
    longDescription: 'Implemented state recovery techniques using computer vision for real-time hand gesture recognition and drawing.',
    techStack: ['Python', 'OpenCV', 'MediaPipe'],
    githubUrl: 'https://github.com/jaya-sri6/AirFlow_Canvas-Using_OpenCV',
    duration: 'August 2024 – November 2024',
    featured: false,
  },
  {
    id: 'airline-analysis',
    title: 'Airline Ticket Price Analysis',
    description: 'Automated large-scale data scraping pipelines with anomaly detection and visualization.',
    longDescription: 'Applied data analysis techniques to extract insights from airline pricing data with automated collection.',
    techStack: ['Python', 'Selenium', 'Pandas', 'Seaborn'],
    githubUrl: 'https://github.com/jaya-sri6/airlineticketpriceanalysis',
    duration: 'January 2024 – April 2024',
    featured: false,
  },
  {
    id: 'railway-management',
    title: 'Railway Management System',
    description: 'Built a full-stack railway management application with Java REST backend and web frontend.',
    longDescription: 'Implemented search, real-time seat availability, and fare calculation using a modular MVC-based architecture.',
    techStack: ['Java', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
    githubUrl: 'https://github.com/jaya-sri6/Railway-Management-System',
    duration: 'January 2024 – April 2024',
    featured: false,
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 'iaaiic',
    company: 'IAAIIC',
    role: 'AIML Intern',
    duration: 'September 2025 – October 2025',
    location: 'Bengaluru',
    responsibilities: [
      'Designed and integrated LLM prompts for real-world applications with deterministic and predictable outcomes',
      'Built ML pipelines incorporating anomaly detection, debugging, and unit testing',
      'Improved backend system reliability',
    ],
  },
  {
    id: 'opportive',
    company: 'Opportive',
    role: 'Full Stack Development Intern',
    duration: 'July 2025 – August 2025',
    responsibilities: [
      'Developed low-latency APIs',
      'Contributed to large-scale backend systems using Spring in distributed environments',
      'Authored SDKs and improved storage scalability and system resilience',
    ],
  },
  {
    id: 'plasmid',
    company: 'Plasmid Innovation Pvt Ltd',
    role: 'AI / Backend Intern',
    duration: 'April 2024 – June 2024',
    responsibilities: [
      'Built LLM-powered backend applications',
      'Developed multi-service APIs with intelligent routing',
      'Used TypeScript, Node.js, and MongoDB',
      'Contributed to collaborative, multi-developer projects emphasizing scalable system design',
    ],
  },
];

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'ai' | 'tool' | 'library';
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'C', category: 'language' },
  { name: 'SQL', category: 'language' },
  
  // Backend & Frameworks
  { name: 'FastAPI', category: 'framework' },
  { name: 'Flask', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'React', category: 'framework' },
  { name: 'LangChain', category: 'framework' },
  { name: 'Redis', category: 'framework' },
  { name: 'REST APIs', category: 'framework' },
  
  // AI/ML
  { name: 'LLMs', category: 'ai' },
  { name: 'NLP', category: 'ai' },
  { name: 'TensorFlow', category: 'ai' },
  { name: 'PyTorch', category: 'ai' },
  { name: 'Scikit-learn', category: 'ai' },
  { name: 'Prompt Engineering', category: 'ai' },
  { name: 'Anomaly Detection', category: 'ai' },
  
  // Tools
  { name: 'Git', category: 'tool' },
  { name: 'VS Code', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'Kubernetes', category: 'tool' },
  { name: 'Jupyter', category: 'tool' },
  
  // Libraries
  { name: 'NumPy', category: 'library' },
  { name: 'Pandas', category: 'library' },
  { name: 'OpenCV', category: 'library' },
  { name: 'Matplotlib', category: 'library' },
  { name: 'Seaborn', category: 'library' },
];

export interface Certification {
  title: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { title: 'Advanced Software Engineering Job Simulation', issuer: 'Walmart Global Tech' },
  { title: 'AI Associate', issuer: 'Salesforce' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte' },
  { title: 'Machine Learning Terminology and Process', issuer: 'Amazon' },
  { title: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon' },
  { title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', issuer: 'Oracle' },
];

export const personalInfo = {
  name: 'Jayasri Jonnalagadda',
  role: 'AI/ML Engineer & Full Stack Developer',
  email: 'jayasriijonnalagadda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jayasri-jonnalagadda-5b86a2379/',
  github: 'https://github.com/jaya-sri6',
  leetcode: 'https://leetcode.com/u/jayasri_9/',
  education: {
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, Tamil Nadu',
    degree: 'B.Tech in Computer Science and Engineering (AI/ML Major)',
    cgpa: '9.45',
    duration: 'June 2022 – May 2026',
  },
  bio: `I'm a passionate AI/ML Engineer and Full Stack Developer pursuing B.Tech in Computer Science with AI/ML specialization at SRM Institute of Science and Technology. With a strong foundation in building LLM-powered applications, scalable backend systems, and intelligent routing solutions, I thrive at the intersection of cutting-edge AI and robust software engineering.`,
};
