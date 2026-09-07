export type Accent = "lime" | "cyan" | "magenta" | "amber";

export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  github?: string; // placeholder — replace with your real repo URL
  liveDemo?: string; // omit if there is no live demo
};

export const projects: Project[] = [
  {
    number: "01",
    category: "GENERATIVE AI · RETRIEVAL",
    title: "RAG-Powered Search Engine",
    description:
      "A retrieval-augmented question answering system that retrieves relevant information from documents and generates grounded answers.",
    tags: ["Python", "RAG", "LLM", "Embeddings", "Vector DB"],
    accent: "lime",
    github: "https://github.com/your-username/rag-search-engine", // placeholder
  },
  {
    number: "02",
    category: "GENERATIVE AI · NLP",
    title: "AI Interviewer",
    description:
      "An AI-powered mock interview application that generates interview questions and provides feedback on user responses.",
    tags: ["Python", "Gemini API", "Streamlit", "NLP"],
    accent: "cyan",
    github: "https://github.com/your-username/ai-interviewer", // placeholder
  },
  {
    number: "03",
    category: "DEEP LEARNING · COMPUTER VISION",
    title: "Handwritten Digit Recognition",
    description:
      "A deep-learning image classification application for recognizing handwritten digits.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    accent: "magenta",
    github: "https://github.com/your-username/digit-recognition", // placeholder
  },
];
