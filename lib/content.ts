export const SITE = {
  name: 'Darshan Sunil Sonawane',
  shortName: 'Darshan',
  email: 'darshansonawane2012@gmail.com',
  github: 'https://github.com/Sonawane07',
  linkedin: 'https://linkedin.com/in/darshan2012/',
  location: 'Atlanta, GA',
  repoNote: 'Next.js · TypeScript · Tailwind',
};

/** Unified hero — AI/ML + software engineering in one narrative */
export const HERO = {
  headline: 'AI / ML & Software Engineer',
  summary:
    'I focus on software engineering and AI: production APIs, mobile and web apps, and applied ML—RAG, diffusion, and scalable training and inference—with clear metrics and solid engineering practices.',
  skillChips: [
    'Python',
    'PyTorch',
    'TypeScript',
    'React Native',
    'RAG',
    'FastAPI',
    'Django',
    'AWS',
    'Docker',
    'REST APIs',
    'Vector search',
  ],
};

export const RESUMES = [
  { label: 'AI / ML resume (PDF)', path: '/resume-aiml.pdf' },
  { label: 'Software engineering resume (PDF)', path: '/resume-sde.pdf' },
] as const;

export type Experience = {
  company: string;
  role: string;
  location?: string;
  timeframe: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'University at Buffalo',
    role: 'Graduate Research Assistant, ML & deep learning',
    location: 'Buffalo, NY',
    timeframe: 'Jan 2026 – Present',
    highlights: [
      'Built a unified PyTorch experimentation pipeline by consolidating multiple research codebases with consistent preprocessing, training loops, and evaluation.',
      'Worked on diffusion-based reconstruction and optimization from short video clips, emphasizing accuracy, robustness, and reproducible benchmarks.',
      'Standardized mesh and point-cloud workflows so models and ablations could be compared fairly across experiments.',
    ],
  },
  {
    company: 'Qu Social',
    role: 'Full Stack Developer Intern',
    location: 'Buffalo, NY',
    timeframe: 'Jan 2025 – May 2025',
    highlights: [
      'Delivered a React Native app enabling 1K+ users’ live topic‑based video chats in a cross‑functional team of 5.',
      'Operationalized frontend and backend using React Native, TypeScript, AWS, and MySQL with ConnectyCube API; achieved 85% unit test coverage.',
      'Reduced runtime bugs by 30% via unit tests across authentication, video, and data APIs through collaborative debugging.',
    ],
  },
  {
    company: 'e-stone',
    role: 'Full Stack Developer Intern',
    location: 'Mumbai, India',
    timeframe: 'Jun 2022 – May 2023',
    highlights: [
      'Programmed a cross‑platform Flutter app for retailer‑wholesaler order management across two user roles.',
      'Implemented real‑time Firebase data handling to synchronize orders and updates, improving operational efficiency by 25%.',
      'Built auth, cart, and password recovery features across three core modules; published a technical paper in Equinox.',
    ],
  },
  {
    company: 'Trivia Software',
    role: 'Python Developer Intern',
    location: 'Mumbai, India',
    timeframe: 'Dec 2020 – Mar 2021',
    highlights: [
      'Built a Python application with a SQL backend, reducing retrieval time by 15% through Agile iteration.',
      'Integrated Matplotlib to visualize academic trends, improving analysis efficiency by 50% through collaborative validation.',
      'Resolved performance bottlenecks, improving data reliability by 20% via iterative code reviews.',
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
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'autorag',
    title: 'AutoRAG Studio — RAG-as-a-Service Platform',
    timeframe: '2025 – Present',
    subtitle: 'Multi‑tenant RAG platform with isolated agent workflows and vector search.',
    bullets: [
      'Architected a multi‑tenant RAG platform supporting 10+ isolated AI agents with dedicated vector indexes, API keys, and knowledge bases.',
      'Implemented end‑to‑end RAG pipelines with embeddings, vector similarity search, and LLM inference across three core stages.',
      'Built a FastAPI orchestration layer and React dashboard to manage 5+ agent lifecycle operations (ingestion, querying, automation).',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Vector DB', 'Embeddings', 'LLMs'],
    tags: ['GenAI', 'RAG', 'Backend'],
  },
  {
    id: 'text2image',
    title: 'Text‑to‑Image Generation (Stable Diffusion + LoRA)',
    timeframe: 'Jan 2025 – May 2025',
    subtitle: 'Fine‑tuned Stable Diffusion v1.5 on CelebA with LoRA for faster training.',
    bullets: [
      'Designed a text‑conditioned diffusion model and fine‑tuned Stable Diffusion v1.5 with LoRA, cutting trainable params 22× and compute cost 75%.',
      'Built an attribute‑conditioned synthesis pipeline achieving 85% accuracy with 4× faster convergence using PyTorch DDP across four GPUs.',
      'Benchmarked against BART/T5 baselines and analyzed model behavior via MSE (0.047 vs. 0.165) for real‑time 512×512 generation.',
    ],
    tech: ['PyTorch', 'Diffusion Models', 'LoRA', 'DDP', 'CUDA', 'Transformers'],
    tags: ['Generative AI', 'Diffusion', 'Training'],
  },
  {
    id: 'crop-yield',
    title: 'Crop Yield Prediction (ML + Explainability)',
    timeframe: 'Sep 2024 – Nov 2024',
    subtitle: 'Random Forest with engineered features; Flask + batch/real-time pipelines.',
    bullets: [
      'Developed a Random Forest model achieving 89% accuracy using 15+ engineered features in a 2-person Agile team.',
      'Coordinated a Flask interface plus data pipelines for batch and real-time processing, including Spark/Hadoop for distributed workloads where required.',
      'Presented results across review cycles for food security and agricultural insight stakeholders.',
    ],
    tech: ['Python', 'scikit-learn', 'SHAP', 'Flask', 'Pandas', 'Spark', 'Hadoop'],
    tags: ['ML', 'Backend', 'Data'],
  },
  {
    id: 'pintos',
    title: 'Pintos Operating System',
    timeframe: '2024',
    subtitle: 'Kernel-level scheduling, synchronization, and system calls in C.',
    bullets: [
      'Engineered kernel-level thread scheduling, synchronization primitives, and system call interfaces across four Pintos modules.',
      'Extended process management and memory handling, improving stability under concurrent workloads by roughly 30%.',
      'Debugged low-level C kernel logic with GDB and validated behavior through 50+ targeted test scenarios.',
    ],
    tech: ['C', 'GDB', 'Kernel', 'Concurrency', 'OS'],
    tags: ['Systems', 'Low-level'],
  },
  {
    id: 'incident-handoff',
    title: 'Incident Handoff Platform — AI-Assisted On-Call Collaboration',
    timeframe: '2026',
    subtitle: 'Full-stack incident management with async AI summaries and reliable webhook ingestion.',
    bullets: [
      'Spearheaded a full-stack incident management platform using FastAPI, React, Supabase, and Redis, centralizing alerts, timelines, and attachments across five incident states for 100+ simulated workflows.',
      'Built an asynchronous AI summarization pipeline with Celery workers and structured JSON outputs, cutting responder handoff prep time by 42% with sub-25s p95 draft latency.',
      'Implemented RBAC, idempotent webhook ingestion, and append-only audit logs for 1,000+ synthetic alert payloads, achieving 99.3% processing reliability.',
    ],
    tech: ['FastAPI', 'React', 'Supabase', 'Redis', 'Celery', 'Python'],
    tags: ['Full-Stack', 'AI', 'Backend'],
  },
  {
    id: 'ecommerce',
    title: 'E‑commerce Web App (Django + AWS)',
    timeframe: '2025',
    subtitle: 'Full‑stack Django app with PayPal payments, auth flows, and AWS deployment.',
    bullets: [
      'Architected a full‑stack Django app with 30+ REST endpoints and coordinated end‑to‑end feature delivery.',
      'Integrated PayPal payments with 100% transaction validation, email verification, password reset, and session‑based cart persistence.',
      'Provisioned AWS infrastructure on S3, RDS, and Elastic Beanstalk for 99.9% uptime and production readiness.',
    ],
    tech: ['Django', 'Python', 'PostgreSQL', 'AWS S3', 'AWS RDS', 'Elastic Beanstalk', 'PayPal'],
    tags: ['Full‑Stack', 'Backend', 'Cloud'],
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
    "If you're hiring for AI/ML, backend, or full-stack roles, I'd love to connect. Email works best — I reply quickly.",
};

export const ABOUT = {
  paragraphs: [
    "I'm an M.S. Computer Science student at the University at Buffalo with a background in electronics engineering from the University of Mumbai. My focus is software engineering plus AI: shipping reliable products while applying ML where it matters—GenAI, classical ML, and solid MLOps-style workflows.",
    "I've built multi-tenant RAG platforms and diffusion experiments in PyTorch, and shipped mobile and full-stack software at scale—for example a React Native app for 1K+ users with strong test coverage on AWS and MySQL.",
    "This portfolio is one narrative: SDE work across APIs, cloud, and mobile, alongside AI projects from RAG and generative models to data pipelines and systems programming.",
  ],
};

export type SkillCategory = { title: string; items: string[] };

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C/C++', 'SQL'],
  },
  {
    title: 'ML & AI',
    items: [
      'PyTorch',
      'TensorFlow',
      'RAG',
      'Diffusion',
      'Transformers',
      'Hugging Face',
      'Embeddings',
      'Vector search',
      'SHAP',
    ],
  },
  {
    title: 'Frontend & mobile',
    items: ['React', 'React Native', 'Flutter', 'HTML/CSS', 'Tailwind'],
  },
  {
    title: 'Backend & APIs',
    items: ['FastAPI', 'Django', 'Django REST', 'Flask', 'Node.js', 'REST'],
  },
  {
    title: 'Data & infra',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'CI/CD', 'Kubernetes'],
  },
];
