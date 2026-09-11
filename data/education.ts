export type EducationEntry = {
  degree: string;
  institution: string;
  year: string;
  status: string;
  points: string[];
};

export const education: EducationEntry[] = [
  {
    degree: "AI Engineer Program",
    institution: "Datamites",
    year: "In Progress",
    status: "Current",
    points: [
      "10-month program (6 months training + 4 months project/internship) covering Python, Statistics, Machine Learning, Deep Learning, NLP, and Generative & Agentic AI.",
      "400+ learning hours completed; currently in the project/internship phase.",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Pragnya Degree College, Hyderabad",
    year: "Result pending",
    status: "Expected ~8 CGPA",
    points: [
      "Built a foundation in programming, data structures, and computer science fundamentals.",
      "Independently focused on machine learning, deep learning, and generative AI alongside coursework.",
    ],
  },
];
