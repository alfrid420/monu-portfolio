export type Accent = "lime" | "cyan" | "magenta" | "amber";

export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  github?: string;
  liveDemo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "GENERATIVE AI · RETRIEVAL",
    title: "RAG-Based Document Analyser",
    description:
      "A privacy-focused Retrieval-Augmented Generation app that lets users upload PDFs and ask natural-language questions — running entirely on local models (Llama 3 via Ollama) with no external LLM API, so sensitive documents never leave the machine. Automatically flags deadlines, risks, and legal obligations in uploaded documents.",
    tags: ["Python", "LangChain", "ChromaDB", "Ollama", "Streamlit"],
    accent: "lime",
    github: "https://github.com/alfrid420/RAG-Based-Document-Analyser",
    liveDemo: "https://rag-based-document-analyser-d9yiya8ncczzvugrzdoeuy.streamlit.app/",
  },
  {
    number: "02",
    category: "GENERATIVE AI · NLP",
    title: "AI Interviewer + Career Assessment Platform",
    description:
      "An AI-powered mock interview platform that analyzes an uploaded resume and generates interview questions targeted to the candidate's specific skills and projects, adapting difficulty based on performance. Scores answers across technical accuracy, communication clarity, and project knowledge — for both typed and voice responses via Whisper speech-to-text.",
    tags: ["Python", "Streamlit", "Groq API", "Whisper", "LangChain"],
    accent: "cyan",
    github: "https://github.com/alfrid420/ai-interviewer",
    liveDemo: "https://ai-interviewer-9mgewwvjx2jh7narzphojr.streamlit.app/",
  },
];
