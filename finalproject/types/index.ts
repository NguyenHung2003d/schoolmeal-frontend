import { LucideIcon } from "lucide-react";

// ============= BASE TYPES =============
export interface BaseItem {
  image: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

// ============= NAVIGATION MENU (cho Parent Dashboard tabs) =============
export type NavigationMenuItem = {
  id: string;
  icon: LucideIcon;
  label: string;
  color: string;
};

// ✅ SỬA: NavigationTabsProps dùng NavigationMenuItem[] thay vì MenuItem[]
export interface NavigationTabsProps {
  menuItems: NavigationMenuItem[]; // ✅ ĐÃ SỬA
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// ============= FOOD MENU ITEM (cho món ăn) =============
export type FoodMenuItem = {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  allergies: string[];
  date: string;
  category?: string;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
  };
  feedback?: {
    rating: number;
    comments: number;
    wastage: string;
  };
  day?: string;
};

export interface MenuItem {
  day: string;
  date: string;
  morning: string;
  lunch: string;
  afternoon: string;
  details?: {
    morning: string[];
    lunch: string[];
    afternoon: string[];
    nutrition?: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  };
}

// ============= DISH (cho Kitchen Staff) =============
export type Dish = {
  id: number;
  name: string;
  category: string;
  ingredients: string[];
  allergies: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  image: string;
};

// ============= MENU TYPES =============
export interface MenuDay {
  date: string;
  dayOfWeek: string;
  meals: {
    morning?: Meal;
    lunch?: Meal;
    afternoon?: Meal;
  };
  notes?: string;
}

export interface WeeklyMenu {
  weekId: string;
  period: string;
  days: MenuDay[];
}

// ============= CHILD & PARENT =============
export interface Child {
  id: number;
  name: string;
  class: string;
  avatar?: LucideIcon;
  allergies: string[];
}

export interface ChildrenListProps {
  children: Child[];
  selectedChild: Child | null;
  setSelectedChild: (child: Child) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface SectionProps {
  selectedChild: Child | null;
}

export interface TabContentProps {
  activeTab: string;
  selectedChild: Child | null; // ✅ Thêm type cụ thể
}

export interface RegisterMealProps {
  selectedChild: Child | null; // ✅ Thêm type cụ thể
}

// ============= NOTIFICATIONS =============
export type NotificationStatus = "sent" | "scheduled" | "draft";

export interface Notification {
  id: number;
  title: string;
  content: string;
  type: "immediate" | "periodic";
  target: string;
  schools: string[];
  schedule: string;
  status: NotificationStatus;
  sent: number;
  read: number;
  createdDate: string;
  updatedDate?: string;
}

export interface FormData {
  title: string;
  content: string;
  type: "immediate" | "periodic";
  target: string;
  schools: string[];
  classes: string[];
  scheduleType: "now" | "schedule";
  scheduleDate: string;
  scheduleTime: string;
  repeatType: "none" | "daily" | "weekly" | "monthly";
  file: File | null;
}

// ============= HEALTH & BMI =============
export type BMIStatus = "underweight" | "normal" | "overweight" | "obese";

export interface HealthRecord {
  date: string;
  height: number;
  weight: number;
  bmi: number;
}

export interface Student {
  id: number;
  name: string;
  avatar: string;
  gender: string;
  height: number;
  weight: number;
  bmi: number;
  bmiStatus: BMIStatus;
  lastUpdate: string;
  history: HealthRecord[];
}

// ============= ANALYTICS & REPORTS =============
export interface MealData {
  date: string;
  registered: number;
  actual: number;
  missed: number;
}

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface SchoolDistribution {
  name: string;
  value: number;
  color: string;
}

export interface UserStat {
  type: string;
  count: number;
  change: string;
}

export type IncidentSeverity = "high" | "medium";

export interface Incident {
  type: string;
  count: number;
  severity: IncidentSeverity;
}

export interface Meal {
  name: string;
  dishes: string[]; // Danh sách các món ăn trong bữa
  calories?: number; // Ví dụ: có thể thêm calo
}

export type ReportType = "meals" | "revenue" | "users" | "incidents";
export type TimeRange = "week" | "month" | "quarter" | "year" | "custom";

// ============= CONTACTS =============
export interface SystemContact {
  hotline: string;
  zalo: string;
  email: string;
  address: string;
}

export interface SchoolContact {
  id: number;
  name: string;
  hotline: string;
  zalo: string;
  email: string;
  address: string;
}

// ============= FEATURES & FEEDBACK =============
export interface Features {
  title: string;
  desc: string;
  image: string;
  features?: string[];
  badge?: string;
}

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

// ============= MISC =============
export type MissionItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type EditMode = "system" | `school-${number}` | null;

export interface LoadingContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export type RecentActivity = {
  icon: LucideIcon;
  text: string;
  time: string;
  color: string;
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
