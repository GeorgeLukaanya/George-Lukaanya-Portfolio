// ===== DATA =====
const SKILLS_DATA = [
  { category: "Languages", items: ["Python", "JavaScript", "PHP", "SQL", "HTML/CSS"] },
  { category: "ML & CV", items: ["YOLOv8", "TensorFlow", "DETR", "OpenCV", "Scikit-learn", "Knowledge Distillation"] },
  { category: "Frameworks", items: ["FastAPI", "ReactJS", "Laravel", "Django", "Flask", "ExpressJS"] },
  { category: "Data", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SQLAlchemy"] },
  { category: "DevOps", items: ["Docker", "Linux", "Git", "VPS", "Hugging Face Spaces"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL"] },
];

const PROJECTS_DATA = [
  {
    title: "HospiNav",
    subtitle: "Real-Time Hospital Navigation System",
    period: "Oct 2025 – Present",
    tags: ["YOLOv8", "Flask", "Depth Estimation", "A* Planning", "Docker"],
    description: "A dual-model convolutional architecture for autonomous wheelchair navigation in hospital corridors. Combines a hospital-specific YOLOv8 model with a frozen COCO pedestrian detector to prevent catastrophic forgetting. Features class-weighted focal loss, monocular depth estimation via Depth Anything V2, and A* path planning on a 20×20 occupancy grid.",
    highlights: [
      "mAP@0.5 of 0.835 with recall of 0.787",
      "Person Recall improved from 0.04 → 0.71 via dual-model architecture",
      "Knowledge distillation reduced model size by 73%",
      "Deployed as containerised Flask app on Hugging Face Spaces",
    ],
    link: "https://huggingface.co/spaces/Blackbody256/HospiNav",
    github: "https://github.com/blackbody256/HospiNav",
  },
  {
    title: "Network Monitoring System",
    subtitle: "RENU – Research and Education Network for Uganda",
    period: "Dec 2025 – Mar 2026",
    tags: ["Backend", "REST API", "Testing", "Deployment"],
    description: "Backend system for real-time network monitoring. Contributed to architecture design, RESTful API development, integration testing, and production deployment as part of a contracted student team.",
    highlights: [
      "Backend architecture & REST API development",
      "Integration testing & deployment pipelines",
      "Agile development & code reviews",
    ],
  },
  {
    title: "IoT Bee Monitoring",
    subtitle: "IoT Research & Applications Lab, Makerere University",
    period: "Oct 2024 – Present",
    tags: ["Raspberry Pi", "YOLOv8", "Data Pipelines", "Python"],
    description: "End-to-end data pipeline for apiary monitoring using IoT sensors and computer vision. Configured Raspberry Pi prototypes, built data ingestion pipelines, and trained object detection models.",
    highlights: [
      "Raspberry Pi prototype deployment",
      "Data collection, cleaning & pipeline engineering",
      "YOLOv8 object detection for agricultural monitoring",
    ],
  },
  {
    title: "YOLO-Based Beehive Monitoring System",
    subtitle: "Ademnea – IoT Research & Applications Lab, Makerere University",
    period: "Oct 2024 – Present",
    status: "In Progress",
    tags: ["YOLOv8", "Computer Vision", "Object Detection", "Python", "Precision Apiculture"],
    description: "A non-invasive, automated bee entrance counting system using YOLO-based object detection, designed for tropical beekeeping environments in Uganda. Addresses the contextual gap of applying deep learning to unmodified real-world hives with Apis mellifera scutellata — a subspecies underrepresented in existing datasets.",
    highlights: [
      "Dataset collection & annotation from Ugandan apiaries (Apis mellifera scutellata)",
      "YOLO-based bee entrance counting under real-world field conditions",
      "Comparative evaluation against established detection architectures",
      "Co-authored research paper in preparation",
    ],
  },
];

const EXPERIENCE_DATA = [
  {
    role: "Software Engineer (Student Contractor)",
    org: "RENU – Research and Education Network for Uganda",
    period: "Dec 2025 – Mar 2026",
    location: "Kampala, Uganda",
  },
  {
    role: "Fullstack R&D Intern",
    org: "IoT Research & Applications Lab, Makerere University",
    period: "Oct 2024 – Present",
    location: "Kampala, Uganda",
  },
];
