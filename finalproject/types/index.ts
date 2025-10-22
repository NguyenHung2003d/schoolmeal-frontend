import { LucideIcon } from "lucide-react";

export interface ParentFeedback {
  id: number;
  rating: number;
  stars: number;
  text: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  feedback: string;
}

export type ReportType = "meals" | "revenue" | "users" | "incidents";
export type TimeRange = "week" | "month" | "quarter" | "year" | "custom";

export interface LoadingContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export type MissionItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type NotificationStatus = "sent" | "scheduled" | "draft";
export type EditMode = "system" | `school-${number}` | null;

export interface HealthRecord {
  date: string;
  height: number;
  weight: number;
  bmi: number;
}

export type BMIStatus = "underweight" | "normal" | "overweight" | "obese";

export interface Student {
  id: number;
  name: string;
  avatar: string;
  gender: string;
  height: number;
  weight: number;
  class: string;
  status: string;
  dob: string;
  bmi: number;
  bmiStatus: string;
  lastUpdate: string;
  present: boolean;
  note?: string;
  parent: {
    name: string;
    email: string;
    phone: string;
    hasAccount: boolean;
  };
  history: { date: string; height: number; weight: number; bmi: number }[];
}

export interface ParentAccount {
  name: string;
  email: string;
  phone: string;
  hasAccount: boolean;
  username?: string;
  password?: string;
  passwordChanged?: boolean;
  linkedStudents?: number[];
}

export type RecentActivity = {
  icon: LucideIcon;
  text: string;
  time: string;
  color: string;
};
export interface ClassStudent {
  id: number;
  name: string;
  gender: string;
  dob: string;
  parent: ParentAccount;
}

export interface InvoiceItem {
  description: string;
  amount: number;
}

export interface Invoice {
  id: string;
  student: string;
  parent: string;
  parentEmail: string;
  class: string;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  paidDate?: string;
  paidMethod?: "bank" | "cash";
  amount: number;
  items: InvoiceItem[];
  type: "tuition" | "meal" | "activity";
}

export const exportContent = {
  bills: true,
  expenses: false,
  statistics: true,
};

export type ExpenseMap = {
  [vendor: string]: number;
};

export type RecentActivities = RecentActivity[];

export type ExportKey = keyof typeof exportContent;

export interface ClassItem {
  id: number;
  name: string;
  grade: number;
  academicYear: string;
  room: string;
  teacher: string;
  students: number;
}
