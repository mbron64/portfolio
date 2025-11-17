export const personalInfo = {
  name: "MICHAEL BRONIKOWSKI",
  title: "AI Researcher × Entrepreneur × Beekeeper",
  role: "AI Program Coordinator @ NYU Langone",
  email: "mbronik1@binghamton.edu",
  location: "Greater Binghamton, NY",
  bio: "AI researcher and entrepreneur bridging cutting-edge machine learning with environmental impact. Currently building production AI systems in enterprise healthcare while advancing research in LLM truthfulness, agentic AI, and world models. Co-founder of BuzzHive, creating AI-powered solutions for sustainable beekeeping and pollination.",
  links: [
    { label: "NYU Profile", url: "https://tov.med.nyu.edu/team/michael-bronikowski/" },
  ],
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    concentration: "Artificial Intelligence",
    school: "Binghamton University - Watson School of Computing",
    location: "Binghamton, NY",
    period: "Jan 2025 - May 2026 (Expected)",
    gpa: "3.8",
    coursework: ["Deep Learning", "Intro to AI & ML", "Data Structures and Algorithms", "Quantum Computing"],
  },
  {
    degree: "Bachelor of Science in Engineering Physics",
    additionalDegree: "Bachelor of Arts in Mathematical Sciences",
    school: "Binghamton University - Harpur School of Arts & Sciences",
    location: "Binghamton, NY",
    period: "Aug 2019 - Dec 2024",
  },
];

export const research = {
  currentLabs: [
    {
      name: "CRAFT Lab",
      institution: "Binghamton University",
      focus: "Truthfulness in LLMs, Retrieval Augmented Generation, and Agentic AI",
      period: "Aug 2025 - Present",
      description: "Exploring the underlying differences and overlaps between LLM outputs and human language/reasoning to develop methods for deeper human and AI collaboration through more human-aligned, reliable, and creative AI systems.",
    },
    {
      name: "AIR (Autonomous Intelligent Robotics) Lab",
      institution: "Binghamton University",
      focus: "Large Language / Vision Language Models",
      period: "Sep 2023 - Dec 2024",
      description: "Exploring the supplementation of computer vision models with natural language processing models to create a common sense reasoning system replicating intelligent disobedience in guide dogs for visually impaired users.",
    },
    {
      name: "BuzzHive Research",
      focus: "World Models for Environmental Understanding (Time Series & NLP)",
      period: "Jan 2024 - Present",
      description: "Lead research on building world models for beehive environments using custom-built multimodal sensors and time series/NLP models to detect/convey early anomalies in honeybee health and improve honeybee colony survival rates.",
    },
  ],
  publications: [
    {
      title: "Scalable Oversight in Multi-Agent Systems: Provable Alignment via Delegated Debate and Hierarchical Verification",
      venue: "Agents4Science 2025, Stanford University",
      year: 2025,
      status: "published",
      award: "Top 10 Paper by Score",
      links: [
        { label: "OpenReview", url: "https://openreview.net/forum?id=l5Wrcgyobp" },
      ],
    },
    {
      title: "Stylistic Contrastive Learning for Human-Like AI Text Generation",
      venue: "Agents4Science 2025, Stanford University",
      year: 2025,
      status: "published",
      links: [
        { label: "OpenReview", url: "https://openreview.net/forum?id=0fo0d9Tbey" },
      ],
    },
  ],
  prePublications: [
    {
      title: "Feature not a Flaw: Leveraging \"AI Creativity\" (Hallucinations) for Scientific Discovery",
      status: "pre-publication",
      links: [
        { label: "Paper", url: "https://drive.google.com/file/d/1ys5t2B2wx90VTHhUpmskC8bY2Dw0e9Ag/view?usp=sharing" },
      ],
    },
    {
      title: "Towards Intelligent Disobedience for Robotic Guide Dogs: Evaluation of Dangerous Scenes using VLMs",
      status: "pre-publication",
      links: [
        { label: "Paper", url: "https://drive.google.com/file/d/1Qpq4cUA4qnOysQ70aJlkJHy1x7i5vhUQ/view?usp=sharing" },
      ],
    },
  ],
};

export const experience = [
  {
    company: "NYU Langone - Office of Technology Opportunities and Ventures (TOV)",
    location: "New York, NY (Hybrid)",
    roles: [
      {
        title: "AI Program Coordinator",
        period: "Feb 2025 - Present",
        type: "Full Time",
        highlights: [
          "Build production AI applications within enterprise healthcare systems using Python, TypeScript, LangChain, OpenAI, and Azure, delivering technical artifacts including MCP servers, sub-agents, and agents used in production workflows",
          "Provide white glove deployment support directly with enterprise IT systems, leading end-to-end development from stakeholder discovery to production deployment while identifying and codifying repeatable deployment patterns",
        ],
      },
      {
        title: "AI Solutions Development Consultant",
        period: "Aug 2024 - Feb 2025",
        highlights: [
          "Researched and evaluated emerging LLM capabilities and implementation patterns to assess fit for TOV's goals, delivering reports, demos, and recommendations that shaped the AI roadmap and led to a full-time offer",
          "Built long-term relationships with faculty and staff across NYU and NYU Langone to conduct discovery, surface high-value AI use cases, and proactively identify new deployment opportunities throughout engagement lifecycle",
        ],
      },
    ],
  },
  {
    company: "Binghamton University - Office of Entrepreneurship and Innovation Partnerships",
    location: "Binghamton, NY",
    roles: [
      {
        title: "AI Process Development Intern - Technology Transfer Office",
        period: "Mar 2024 - Jun 2024",
        highlights: [
          "Worked directly with tech transfer officers and faculty stakeholders to evaluate and deploy AI tools for disclosure forms, patent applications, and licensing workflows with white glove deployment support",
          "Improved the operational efficiency of workflows by introducing AI enabled tools, including building custom AI assistant solutions through Custom GPT's, custom developed software interfaces, and industry available AI tools",
        ],
      },
    ],
  },
  {
    company: "Hoku Analytics - Fintech Startup",
    location: "Honolulu, HI",
    roles: [
      {
        title: "AI Software Engineer",
        period: "Jan 2023 - Sep 2023",
        highlights: [
          "Restructured and optimized a Python-based AI/ML financial features library reducing processing time from 58 seconds to 3 seconds and integrating 30+ new features from C# technical analysis libraries",
          "Reverse-engineered over 200 mathematical and statistical academic studies into PyTorch models adding hyperparameters for AI/ML optimization totaling over 10 million data points and improving model accuracy by 50%",
        ],
      },
    ],
  },
];

export const entrepreneurship = [
  {
    name: "BuzzHive, LLC",
    role: "Co-Founder, CEO, Head of Beekeeping",
    period: "Mar 2024 - Present",
    description: "Designing and implementing an AI-powered beehive management system, integrating IoT sensors and predictive analytics to monitor hive health, reduce bee mortality, and optimize operational efficiency for beekeepers.",
    links: [
      { label: "Website", url: "https://buzzhivetech.com/" },
      { label: "2025 NYBPC Winner", url: "https://nybpc.org/news/2025/5/1/2025-nybpc-final-results" },
      { label: "2024 NYBPC Winner", url: "https://nybpc.org/news/2024/4/26/2024-nybpc-winners" },
      { label: "Hackathon Win", url: "https://www.linkedin.com/posts/michael-bronikowski_excited-to-share-that-this-weekend-at-activity-7303512651484049409-j9kL" },
      { label: "FuzeHub Finalist", url: "https://fuzehub.com/fuzehub-announces-2025-commercialization-competition-finalists-to-pitch-at-the-new-york-state-innovation-summit/" },
    ],
    highlights: [
      "Lead development and prototyping of hardware and software solutions",
      "Secured funding and partnerships through grants and pitch competitions",
      "2024 REV Ithaca / Cornell Protofacturing Accelerator Graduate",
      "1st Place: 2025 NY State Business Plan Competition - Food & AgTech Track",
      "1st Place: 2024 NY State Business Plan Competition - Software & Services Track",
      "Grand Prize: 2025 Cornell DigitalAg Hackathon",
    ],
    impact: "AI-powered IoT solution for sustainable beekeeping",
  },
  {
    name: "Irek's Apiary, LLC",
    role: "Co-Founder, Assistant Beekeeper, Head of Product",
    period: "2012 - Present",
    description: "Scaled sales and marketing operations for a 30-hive apiary, building a strong presence through farmers markets and a TikTok channel with over 60,000 followers fostering brand loyalty and happy honey customers.",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/photo.php?fbid=973959521187965&id=100057217789148&set=a.762210265696226" },
    ],
    highlights: [
      "Care for 30 beehives through routine inspections and health monitoring",
      "Built TikTok following of 60,000+ followers",
      "Sustainable honey production with modern beekeeping practices",
      "Strong local presence through farmers markets",
    ],
    impact: "13+ years of sustainable beekeeping",
  },
  {
    name: "Fine Mining, LLC",
    role: "Co-Founder, CEO",
    period: "Dec 2021 - Dec 2022",
    description: "Built and scaled Fine Mining's high end computing hardware marketplace platform from concept to launch with over 5,000 impressions on the App Store and driving early user adoption through strategic marketing and product design.",
    links: [
      { label: "2023 NYBPC Finalist", url: "https://nybpc.org/news/2023/4/17/results-2023-nybpc-regional-competitions" },
    ],
    highlights: [
      "Led product design and development using Flutter with REST APIs",
      "Integrated Stripe API for secure payment processing",
      "Real-time inventory management and user authentication",
      "5,000+ App Store impressions",
      "2023 NY State Business Plan Competition Finalist",
    ],
    impact: "High-end computing hardware marketplace",
  },
];

export const awards = [
  {
    title: "Invited Speaker - \"Future of AI and Nature\"",
    organization: "Shibuya QWS Academia, Waseda University",
    location: "Tokyo, Japan",
    date: "Nov 28, 2025",
    category: "speaking",
    link: "https://shibuya-qws.com/event/qws-academia1128",
  },
  {
    title: "Finalist - NYS Innovation Summit Commercialization Competition",
    organization: "FuzeHub",
    date: "Oct 29, 2025",
    category: "recognition",
    link: "https://fuzehub.com/fuzehub-announces-2025-commercialization-competition-finalists-to-pitch-at-the-new-york-state-innovation-summit/",
  },
  {
    title: "Second Place - City of Binghamton Business Plan Competition",
    date: "June 3, 2025",
    category: "competition",
    link: "https://www.binghamton-ny.gov/government/departments/economic-development/2026-business-plan-competition",
  },
  {
    title: "First Place - NY State Business Plan Competition: AgTech",
    date: "Apr 24, 2025",
    category: "competition",
    link: "https://nybpc.org/news/2025/5/1/2025-nybpc-final-results",
  },
  {
    title: "Nominee - Entrepreneur of The Year",
    organization: "Greater Binghamton Chamber of Commerce",
    date: "Apr 22, 2025",
    category: "recognition",
    link: "https://drive.google.com/file/d/1VUVu6gi8-hBwyGQagV29vjQfTWUj4YnI/view?usp=sharing",
  },
  {
    title: "Grand Prize - Cornell DigitalAg Hackathon",
    organization: "Cornell University",
    date: "Mar 3, 2025",
    category: "competition",
    link: "https://www.linkedin.com/posts/michael-bronikowski_excited-to-share-that-this-weekend-at-activity-7303512651484049409-j9kL",
  },
  {
    title: "Invited Judge - Entrepreneur Connect Club Pitch Competition",
    organization: "Binghamton University",
    date: "Nov 22, 2024",
    category: "speaking",
    link: "https://drive.google.com/drive/folders/1bfCNj9uMKZdktlW6Y9YLAOOBof-MMGQv?usp=sharing",
  },
  {
    title: "Invited Lecturer - Entrepreneurship 460",
    organization: "Binghamton University School of Management",
    date: "Sep 17, 2024",
    category: "speaking",
    link: "https://drive.google.com/file/d/1BUkoQbCXEM7WRIv6sp_bJxqqD4-zTl4a/view?usp=sharing",
  },
  {
    title: "First Place - NY State Business Plan Competition: Software & Services",
    date: "Apr 25, 2024",
    category: "competition",
    link: "https://nybpc.org/news/2024/4/26/2024-nybpc-winners",
  },
  {
    title: "State Finalist - NY State Business Plan Competition: Software & Services",
    date: "Apr 27, 2023",
    category: "competition",
    link: "https://nybpc.org/news/2023/4/17/results-2023-nybpc-regional-competitions",
  },
  {
    title: "Research Mentor of Impact Award",
    organization: "Binghamton University Research Immersion Program",
    date: "Dec 15, 2022",
    category: "recognition",
    link: "https://drive.google.com/file/d/1JeGHEVlGzLVNiY4LrfGKltfaOfiUx-QL/view?usp=sharing",
  },
  {
    title: "Second Place - NY State Business Plan Competition: AgTech",
    date: "May 11, 2021",
    category: "competition",
    link: "https://nybpc.org/news/2021/5/11/winners-of-2021-new-york-business-plan-competition-announcednbsp",
  },
  {
    title: "National Finalist - FBLA Competition: Entrepreneurship",
    organization: "Future Business Leaders of America",
    date: "Apr 11, 2019",
    category: "competition",
    link: "https://drive.google.com/drive/folders/16q6ivQ28JSnpshcyBfOT0QIX7oPZvIM0?usp=sharing",
  },
  {
    title: "Team Captain - Science Olympiad",
    organization: "Vestal High School",
    date: "2017-2018",
    category: "leadership",
    link: "https://scioly.org/wiki/Vestal_High_School",
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#"],
  aiml: [
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "OpenAI API",
    "Azure AI",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Time Series Analysis",
    "RAG",
    "Agentic AI",
  ],
  frameworks: ["Next.js", "React", "Flutter", "Node.js", "FastAPI"],
  tools: ["Git", "Docker", "REST APIs", "Stripe API", "IoT Development", "MCP Servers"],
  domains: ["Healthcare AI", "FinTech", "AgTech", "Robotics", "Enterprise Systems"],
};

export const leadership = [
  {
    organization: "Binghamton University Bees Club",
    role: "Executive Beekeeper",
    period: "Aug 2023 - Present",
    description: "Lead group beehive visits, taking care of on-campus beehives including routine hive inspections and honey collection",
  },
  {
    organization: "Binghamton University Bees Club",
    role: "President",
    period: "Aug 2021 - Jul 2023",
    description: "Coordinated bee events for 370+ students teaching beekeeping methods and winning student's choice award: best club",
  },
  {
    organization: "Binghamton University Research Immersion Program",
    role: "Course Assistant / Student Research Mentor",
    period: "Aug 2020 - May 2021",
    description: "Advised a team of 6 students researching machine learning for fraudulent facial recognition tested over large datasets. Prepared and presented research findings at Binghamton's research symposium to over 300 faculty and peer attendees.",
  },
];

export const accelerators = [
  {
    name: "Cornell University - REV Ithaca Startup Works",
    program: "Protofacturing & Manufacturing Startup Accelerator",
    location: "Ithaca, NY (Remote)",
    period: "Jul 2024 - Jul 2025",
    description: "Transitioned BuzzHive's multimodal IoT beehive monitor from proof-of-concept to \"design freeze\" production prototype exploring user engagement, and data streaming for AI model training with Cornell Engineering partners",
  },
  {
    name: "Binghamton University - Koffman Southern Tier Incubator",
    program: "Software Startup Accelerator",
    location: "Binghamton, NY",
    period: "Feb 2021 - Dec 2022",
    description: "Learned go-to-market strategy for early-stage startups through one-on-one mentorship and group coursework, refining plans through customer discovery to improve user journeys, prioritize features, and prepare for scalable software",
  },
];

