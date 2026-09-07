export type SkillCategory = {
  label: string;
  skills: { name: string; highlight?: boolean }[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    label: "Data / Machine Learning",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "Matplotlib" },
      { name: "TensorFlow" },
      { name: "Keras" },
    ],
  },
  {
    label: "Generative AI",
    skills: [
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "AI Agents" },
      { name: "Gemini API", highlight: true },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Jupyter" },
      { name: "Streamlit" },
      { name: "MongoDB" },
      { name: "Power BI" },
    ],
  },
];

export const totalSkillsCount = skillCategories.reduce(
  (sum, cat) => sum + cat.skills.length,
  0
);
