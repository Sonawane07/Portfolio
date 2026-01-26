export type Track = 'sde' | 'aiml';

export const SITE = {
  name: 'Darshan Sonawane',
  email: 'darshansonawane2012@gmail.com',
  phone: '+1-716-709-1497',
  github: 'https://github.com/Sonawane07',
  linkedin: 'https://linkedin.com/in/darshan2012/',
  location: 'Buffalo, NY',
  repoNote: 'Built with Next.js + TypeScript + Tailwind',
};

export const TRACKS: Record<Track, { label: string; headline: string; summary: string; primarySkills: string[]; resumePath: string }> = {
  sde: {
    label: 'SDE',
    headline: 'Software Engineer (Backend / Full‑Stack)',
    summary:
      'I build reliable backend systems and full‑stack applications with clean APIs, strong data models, and production deployment in mind.',
    primarySkills: ['Python', 'TypeScript', 'Django', 'React Native', 'REST APIs', 'PostgreSQL', 'AWS', 'Docker'],
    resumePath: '/resume-sde.pdf',
  },
  aiml: {
    label: 'AI/ML',
    headline: 'AI/ML Engineer (Applied ML + GenAI)',
    summary:
      'I build practical AI systems—from diffusion and LLM pipelines to scalable inference—with measurable results and clear tradeoffs.',
    primarySkills: ['Python', 'PyTorch', 'Diffusion Models', 'LLMs', 'RAG', 'Vector Search', 'FastAPI', 'AWS/OCI'],
    resumePath: '/resume-aiml.pdf',
  },
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  timeframe: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'Qu Social',
    role: 'React Native Developer Intern',
    location: 'Buffalo, NY',
    timeframe: 'Jan 2025 – May 2025',
    highlights: [
      'Built a React Native app enabling 1K+ users for live topic‑based video chats (AWS + MySQL).',
      'Developed frontend + backend services in TypeScript + Python with REST APIs; reached 85% unit test coverage (Jest/Pytest).',
      'Reduced runtime bugs by 30% via unit tests across auth, video, and data API modules; demoed at CSE Demo Day (2nd of 95).',
    ],
  },
  {
    company: 'Trivia Software',
    role: 'Python Developer Intern',
    location: 'Mumbai, India',
    timeframe: 'Dec 2020 – Mar 2021',
    highlights: [
      'Built a Python app with SQL backend, validation, and logging; improved retrieval time by 15%.',
      'Added Matplotlib visualizations to improve academic performance analysis efficiency by 50%.',
      'Resolved pipeline bottlenecks, improving data reliability by 20%.',
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  timeframe: string;
  subtitle: string;
  bullets: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  tracks: Track[]; // which tracks to show this under
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'autorag',
    title: 'AutoRAG Studio — RAG-as-a-Service Platform',
    timeframe: 'Dec 2025 – Present',
    subtitle: 'Multi‑tenant agent workflows with embeddings + vector search + scalable inference.',
    bullets: [
      'Designing multi‑tenant AI services for LLM‑powered agent workflows.',
      'Building pipelines for embeddings, vector search, and inference for scalable orchestration.',
      'FastAPI backend + React dashboard integrated with OCI Generative AI.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Vector DB', 'Embeddings', 'LLMs', 'OCI Generative AI'],
    tracks: ['aiml'],
    tags: ['GenAI', 'RAG', 'Backend'],
  },
  {
    id: 'text2image',
    title: 'Text‑to‑Image Generation (Stable Diffusion + LoRA)',
    timeframe: 'Jan 2025 – May 2025',
    subtitle: 'Fine‑tuned Stable Diffusion v1.5 on CelebA; faster training and real‑time inference goals.',
    bullets: [
      'Fine‑tuned Stable Diffusion v1.5 using LoRA on CelebA; reduced trainable params 22× and compute cost 75%.',
      'Built attribute‑conditioned synthesis pipeline with PyTorch DDP across 4 GPUs for 110k‑step training.',
      'Benchmarked vs BART/T5 baselines and analyzed outputs with MSE; targeted photorealistic face generation at 512×512.',
    ],
    tech: ['PyTorch', 'Diffusion Models', 'LoRA', 'DDP', 'CUDA', 'Transformers'],
    tracks: ['aiml'],
    tags: ['Generative AI', 'Diffusion', 'Training'],
  },
  {
    id: 'crop-yield',
    title: 'Crop Yield Prediction (ML + Explainability)',
    timeframe: 'Sep 2024 – Nov 2024',
    subtitle: 'Random Forest model + SHAP explainability with batch and real‑time prediction interface.',
    bullets: [
      'Built Random Forest model achieving 89% accuracy to predict crop yield (tons/hectare).',
      'Created Flask interface and data pipeline for batch + real‑time processing.',
      'Used SHAP for explainability and presented results for food security insights.',
    ],
    tech: ['Python', 'scikit-learn', 'SHAP', 'Flask', 'Pandas'],
    tracks: ['aiml', 'sde'],
    tags: ['ML', 'Backend', 'Data'],
  },
  {
    id: 'ecommerce',
    title: 'E‑commerce Web App (Django + AWS)',
    timeframe: 'Nov 2025 – Jan 2026',
    subtitle: 'Full‑stack Django app with PayPal payments, auth flows, and AWS deployment.',
    bullets: [
      'Built Django app with 30+ REST endpoints, session‑safe cart handling, and idempotent order processing.',
      'Integrated PayPal payments with full validation plus email verification and password reset flows; improved checkout conversion.',
      'Deployed on AWS (S3, RDS, Elastic Beanstalk) for production‑ready scalability.',
    ],
    tech: ['Django', 'Python', 'PostgreSQL', 'AWS S3', 'AWS RDS', 'Elastic Beanstalk', 'PayPal'],
    tracks: ['sde'],
    tags: ['Full‑Stack', 'Backend', 'Cloud'],
  },
  {
    id: 'sales-module',
    title: 'Sales Module App for Retailers (Flutter)',
    timeframe: 'Jun 2022 – May 2023',
    subtitle: 'Cross‑platform mobile app for retailer‑wholesaler order workflows.',
    bullets: [
      'Built cross‑platform Flutter app for order management between retailers and wholesalers.',
      'Implemented real‑time Firebase data handling to improve efficiency.',
      'Shipped auth, cart, and password recovery; published a technical paper (Equinox 2023).',
    ],
    tech: ['Flutter', 'Dart', 'Firebase'],
    tracks: ['sde'],
    tags: ['Mobile', 'Full‑Stack'],
  },
];

export const EDUCATION = [
  {
    school: 'University at Buffalo, The State University of New York (SUNY)',
    degree: 'M.S. in Computer Science',
    timeframe: 'Aug 2024 – Dec 2025',
    meta: 'GPA: 3.57 / 4.00',
    coursework: ['Algorithms', 'Deep Learning', 'Operating Systems', 'Computer Vision'],
  },
  {
    school: 'University of Mumbai',
    degree: 'B.E. in Electronics and Telecommunication Engineering',
    timeframe: 'Aug 2019 – May 2023',
    meta: 'GPA: 3.36 / 4.00',
    coursework: ['Natural Language Processing', 'Deep Learning', 'Image Processing'],
  },
];

export const CONTACT = {
  blurb:
    "If you're hiring for backend / full‑stack or AI/ML roles, I'd love to chat. Email is best — I respond quickly.",
};
