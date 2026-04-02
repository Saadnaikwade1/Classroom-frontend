import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  // ===== Computer Science =====
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "CS",
    description: "Basics of programming using C/C++ including variables, loops, and functions.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "CS102",
    name: "Data Structures",
    department: "CS",
    description: "Study of arrays, linked lists, stacks, queues, and trees.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "CS103",
    name: "Operating Systems",
    department: "CS",
    description: "Concepts of processes, memory management, and file systems.",
    createdAt: new Date().toISOString(),
  },

  // ===== Mathematics =====
  {
    id: 4,
    code: "MATH101",
    name: "Calculus I",
    department: "Math",
    description: "Limits, derivatives, and basic integration concepts.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    code: "MATH102",
    name: "Linear Algebra",
    department: "Math",
    description: "Matrices, vectors, determinants, and linear transformations.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    code: "MATH103",
    name: "Probability & Statistics",
    department: "Math",
    description: "Basic probability theory and statistical methods.",
    createdAt: new Date().toISOString(),
  },

  // ===== English =====
  {
    id: 7,
    code: "ENG101",
    name: "English Grammar",
    department: "English",
    description: "Fundamentals of grammar, sentence structure, and usage.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    code: "ENG102",
    name: "Communication Skills",
    department: "English",
    description: "Verbal and written communication techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 9,
    code: "ENG103",
    name: "Literature",
    department: "English",
    description: "Study of prose, poetry, and drama.",
    createdAt: new Date().toISOString(),
  },
];