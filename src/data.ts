import { Cpu, Layout, Workflow, Cloud, CheckCircle, BarChart, Shield, Zap, TrendingUp, Users } from "lucide-react";

export interface SolutionItem {
  title: string;
  description: string;
  items: string[];
  image: string;
  accent: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    title: "AI & Intelligent Solutions",
    description: "Unlocking New Possibilities Through Artificial Intelligence",
    items: [
      "AI-powered business solutions",
      "Intelligent applications",
      "AI automation",
      "Smart assistants & conversational solutions",
      "Data-driven insights",
      "AI integration with business systems"
    ],
    image: "ai_solutions", // Will resolve to the generated AI solutions image
    accent: "indigo"
  },
  {
    title: "Digital Applications & Platforms",
    description: "Creating Digital Experiences That Drive Business Growth",
    items: [
      "Custom digital applications",
      "Enterprise platforms",
      "Web-based solutions",
      "Mobile applications",
      "Customer engagement platforms",
      "Business management systems"
    ],
    image: "digital_platforms", // Will resolve to the generated digital platforms image
    accent: "teal"
  },
  {
    title: "Automation & Business Optimisation",
    description: "Helping Businesses Work Smarter Through Automation",
    items: [
      "Business process automation",
      "Workflow optimisation",
      "Digital process improvement",
      "System integration",
      "Operational efficiency solutions"
    ],
    image: "automation", // Fallback placeholder or icon grid
    accent: "sky"
  },
  {
    title: "Cloud & Technology Enablement",
    description: "Building Secure Foundations For Digital Transformation",
    items: [
      "Cloud-based applications",
      "Cloud technology solutions",
      "Digital infrastructure support",
      "Technology integration",
      "Application deployment",
      "System optimisation"
    ],
    image: "cloud", // Fallback placeholder or icon grid
    accent: "emerald"
  }
];

export interface ApproachStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const APPROACH: ApproachStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand your core challenges",
    description: "We work directly with your stakeholders to analyze existing operations, identify friction points, and clarify digital objectives that align with your long-term vision."
  },
  {
    number: "02",
    title: "Innovate",
    subtitle: "Design modern, intelligent architectures",
    description: "Our experts formulate bespoke technology solutions, leveraging advanced AI models, automated workflows, and robust cloud scaling built specifically for your business goals."
  },
  {
    number: "03",
    title: "Transform",
    subtitle: "Implement and scale with confidence",
    description: "We deploy the engineered solutions seamlessly, ensuring strict integration, comprehensive performance monitoring, and team empowerment for sustainable digital adoption."
  }
];

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Innovation Driven",
    description: "We leverage emerging intelligent technologies to unlock unprecedented possibilities and keep your business ahead of the curve."
  },
  {
    title: "Business Focused",
    description: "We map technology directly to concrete business outcomes. Every line of code is designed to deliver measurable strategic value."
  },
  {
    title: "Intelligent Technology",
    description: "By integrating AI, smart automation, and enterprise-grade platforms, we transform traditional workflows into intelligent operations."
  },
  {
    title: "Scalable Solutions",
    description: "Our digital systems are built on modern architectures that grow seamlessly alongside your enterprise size and load requirements."
  },
  {
    title: "Future Ready",
    description: "We future-proof your tech stack and train your team, preparing your organization to capitalize on tomorrow's digital economy."
  }
];

export const INDUSTRIES = [
  "Technology & Digital Economy",
  "Financial Services",
  "Professional Services",
  "Retail & E-Commerce",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Startups & Growth Companies"
];

export interface AssessmentQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: "How are your business workflows and processes currently managed?",
    category: "Automation",
    options: [
      {
        text: "Primarily manual, paper-based, or reliant on disconnected Excel sheets.",
        score: 1,
        feedback: "High operational friction and vulnerability to manual errors."
      },
      {
        text: "Partially digitized, but team members must manually transfer data between separate tools.",
        score: 2,
        feedback: "Interoperability gaps exist. Bridging them can recover significant time."
      },
      {
        text: "Mostly automated with digital systems, though some bottlenecks and manual approvals remain.",
        score: 3,
        feedback: "Good foundation. Optimizing final approval bottlenecks will fully unlock efficiency."
      },
      {
        text: "Fully integrated and automated workflows with real-time tracking and zero manual hand-offs.",
        score: 4,
        feedback: "Excellent posture. Ready to layer predictive AI models on top of your automated flows."
      }
    ]
  },
  {
    id: 2,
    question: "What is your organization's current posture towards Artificial Intelligence (AI)?",
    category: "AI Readiness",
    options: [
      {
        text: "We do not use AI, and have no immediate plans or knowledge on how to leverage it.",
        score: 1,
        feedback: "Risk of falling behind competitors. Exploring low-risk AI integrations is highly recommended."
      },
      {
        text: "Individual employees use general public AI tools, but we have no company-wide solutions or security rules.",
        score: 2,
        feedback: "Ad-hoc usage. Moving towards custom-built secure AI assistants can secure company IP and align tools."
      },
      {
        text: "We are actively exploring custom AI pilots or have integrated simple chat interfaces into our workflows.",
        score: 3,
        feedback: "Great momentum! Moving from pilot chat models to automated AI agent systems is your next phase."
      },
      {
        text: "We have fully embedded, proprietary AI solutions that drive real-time analysis and decision-making.",
        score: 4,
        feedback: "Elite posture. Keep refining and scaling models, focusing on edge intelligence and agentic workflows."
      }
    ]
  },
  {
    id: 3,
    question: "How resilient and scalable is your core digital infrastructure?",
    category: "Cloud Infrastructure",
    options: [
      {
        text: "On-premise servers or outdated hardware that requires frequent hands-on maintenance.",
        score: 1,
        feedback: "Critical bottleneck. Moving to a cloud-enabled infrastructure will eliminate server maintenance and downtime."
      },
      {
        text: "Basic cloud migration completed (e.g. cloud storage or virtual machines), but not optimized.",
        score: 2,
        feedback: "We recommend serverless architectures and managed services to reduce infrastructure costs."
      },
      {
        text: "SaaS platforms are widely used, but they function in silos without unified cloud coordination.",
        score: 3,
        feedback: "Integration-heavy stage. Building centralized APIs and a cloud-native platform is key."
      },
      {
        text: "Cloud-native, highly available microservices with automated scaling and enterprise-grade security.",
        score: 4,
        feedback: "World-class architecture. Ready for high-volume cross-region expansion and multi-cloud configurations."
      }
    ]
  },
  {
    id: 4,
    question: "How does your company currently utilize and analyze business data?",
    category: "Data & Insights",
    options: [
      {
        text: "We rarely analyze data. Decisions are based mostly on intuition or static retrospect reviews.",
        score: 1,
        feedback: "High-risk decision-making. Setting up simple tracking dashboards can instantly clarify growth channels."
      },
      {
        text: "Data is gathered manually into reports once a month, which is time-consuming and often outdated.",
        score: 2,
        feedback: "Delayed feedback loops. Automating your reporting pipeline will yield real-time indicators."
      },
      {
        text: "We have interactive dashboards (e.g. BI tools) showing historical performance, but no predictive insights.",
        score: 3,
        feedback: "Solid data collection. Integrating predictive AI or trend-forecasting models will empower proactive planning."
      },
      {
        text: "Dynamic, real-time analytics engines automatically generate actionable, automated operational insights.",
        score: 4,
        feedback: "Advanced data strategy. Keep enriching datasets and test automated AI decision-making loops."
      }
    ]
  }
];
