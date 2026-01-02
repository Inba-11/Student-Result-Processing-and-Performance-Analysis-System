// Mock data for Student Performance Dashboard

export const currentUser = {
  id: "1",
  name: "John Anderson",
  email: "john.anderson@school.edu",
  role: "student", // "student" | "teacher" | "admin"
  avatar: null,
  grade: "12th Grade",
  section: "A",
};

export const studentStats = {
  gpa: 3.78,
  gpaChange: 0.12,
  attendance: 94.5,
  attendanceChange: 2.3,
  aiScore: 87,
  aiScoreChange: 5,
  classRank: 12,
  totalStudents: 145,
  rankChange: 3,
};

export const performanceTrend = [
  { month: "Sep", score: 72 },
  { month: "Oct", score: 78 },
  { month: "Nov", score: 74 },
  { month: "Dec", score: 82 },
  { month: "Jan", score: 85 },
  { month: "Feb", score: 88 },
];

export const subjectScores = [
  { subject: "Mathematics", score: 92, maxScore: 100, color: "chart-1" },
  { subject: "Physics", score: 88, maxScore: 100, color: "chart-2" },
  { subject: "Chemistry", score: 85, maxScore: 100, color: "chart-3" },
  { subject: "English", score: 90, maxScore: 100, color: "chart-4" },
  { subject: "Computer Science", score: 95, maxScore: 100, color: "chart-5" },
];

export const recentAssignments = [
  { id: 1, title: "Calculus Quiz", subject: "Mathematics", score: 45, maxScore: 50, date: "2024-02-15" },
  { id: 2, title: "Lab Report", subject: "Chemistry", score: 88, maxScore: 100, date: "2024-02-14" },
  { id: 3, title: "Essay Writing", subject: "English", score: 42, maxScore: 50, date: "2024-02-12" },
  { id: 4, title: "Physics Project", subject: "Physics", score: 92, maxScore: 100, date: "2024-02-10" },
  { id: 5, title: "Programming Assignment", subject: "Computer Science", score: 98, maxScore: 100, date: "2024-02-08" },
];

export const aiInsights = [
  {
    type: "strength",
    message: "Excellent progress in Computer Science. You're in the top 5% of your class.",
  },
  {
    type: "improvement",
    message: "Chemistry scores have been declining. Consider reviewing organic chemistry concepts.",
  },
  {
    type: "recommendation",
    message: "Based on your learning pattern, morning study sessions yield 23% better retention.",
  },
];

export const classStudents = [
  { id: 1, name: "Alice Johnson", gpa: 3.95, attendance: 98, rank: 1 },
  { id: 2, name: "Bob Smith", gpa: 3.88, attendance: 96, rank: 2 },
  { id: 3, name: "Carol Williams", gpa: 3.85, attendance: 94, rank: 3 },
  { id: 4, name: "David Brown", gpa: 3.82, attendance: 97, rank: 4 },
  { id: 5, name: "Eva Martinez", gpa: 3.80, attendance: 92, rank: 5 },
  { id: 6, name: "Frank Davis", gpa: 3.78, attendance: 95, rank: 6 },
  { id: 7, name: "Grace Wilson", gpa: 3.75, attendance: 91, rank: 7 },
  { id: 8, name: "Henry Taylor", gpa: 3.72, attendance: 93, rank: 8 },
];

export const classStats = {
  averageGpa: 3.62,
  averageAttendance: 92.3,
  totalStudents: 32,
  topPerformers: 8,
  needsAttention: 4,
};
