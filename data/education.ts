export type EducationEntry = {
  degree: string;
  institution: string;
  year: string;
  status: string;
  points: string[];
};

// Only includes verified information. No companies, internships, or job
// titles have been added — replace/extend this once you have real experience.
export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Osmania University / Pragnya Degree College",
    year: "2026",
    status: "Class of 2026",
    points: [
      "Built a foundation in programming, data structures, and computer science fundamentals.",
      "Independently focused on machine learning, deep learning, and generative AI alongside coursework.",
    ],
  },
];
