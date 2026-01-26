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
    headline: 'Software Engineer (Full‑Stack & Mobile)',
    summary:
      'I build full‑stack and mobile products with clean APIs, strong data models, and production‑ready cloud deployments.',
    primarySkills: ['Python', 'TypeScript', 'React Native', 'Django', 'REST APIs', 'AWS', 'MySQL', 'Docker'],
    resumePath: '/resume-sde.pdf',
  },
  aiml: {
    label: 'AI/ML',
    headline: 'AI/ML Engineer (Applied ML + GenAI)',
    summary:
      'I build practical AI systems—from diffusion and RAG pipelines to scalable inference—with measurable results and clear tradeoffs.',
    primarySkills: ['Python', 'PyTorch', 'TensorFlow', 'RAG', 'Diffusion Models', 'Vector Search', 'SHAP', 'FastAPI'],
    resumePath: '/resume-aiml.pdf',
  },
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  timeframe: string;
  highlights: string[];
  tracks: Track[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'University at Buffalo',
    role: 'Research Assistant, 3D Human‑Object Interaction',
    location: 'Buffalo, NY',
    timeframe: 'Jan 2026 – Present',
    highlights: [
      'Deconstructed 3D human‑object interaction into 3+ reusable primitives mapped to SMPL‑based human meshes with 10^4+ vertices.',
      'Assessed diffusion‑based HOI reconstruction and contact‑aware optimization using short monocular videos (10–30 frames).',
      'Unified three ICCV 2025 HOI methods into a single PyTorch pipeline with standardized mesh and point‑cloud processing.',
    ],
    tracks: ['sde', 'aiml'],
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
    tracks: ['sde', 'aiml'],
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
    tracks: ['sde'],
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
    tracks: ['sde', 'aiml'],
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
    timeframe: '2025 – Present',
    subtitle: 'Multi‑tenant RAG platform with isolated agent workflows and vector search.',
    bullets: [
      'Architected a multi‑tenant RAG platform supporting 10+ isolated AI agents with dedicated vector indexes, API keys, and knowledge bases.',
      'Implemented end‑to‑end RAG pipelines with embeddings, vector similarity search, and LLM inference across three core stages.',
      'Built a FastAPI orchestration layer and React dashboard to manage 5+ agent lifecycle operations (ingestion, querying, automation).',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Vector DB', 'Embeddings', 'LLMs'],
    tracks: ['aiml'],
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
      'Benchmarked against BART/T5 baselines and analyzed model behavior via MSE (0.047 vs 0.165) for real‑time 512×512 generation.',
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
    timeframe: '2025',
    subtitle: 'Full‑stack Django app with PayPal payments, auth flows, and AWS deployment.',
    bullets: [
      'Architected a full‑stack Django app with 30+ REST endpoints and coordinated end‑to‑end feature delivery.',
      'Integrated PayPal payments with 100% transaction validation, email verification, password reset, and session‑based cart persistence.',
      'Provisioned AWS infrastructure on S3, RDS, and Elastic Beanstalk for 99.9% uptime and production readiness.',
    ],
    tech: ['Django', 'Python', 'PostgreSQL', 'AWS S3', 'AWS RDS', 'Elastic Beanstalk', 'PayPal'],
    tracks: ['sde'],
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
    "If you're hiring for backend / full‑stack or AI/ML roles, I'd love to chat. Email is best — I respond quickly.",
};
