export interface BaseItem {
  image: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

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

export interface LoadingContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export type MenuItem = {
  id: number;
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
  day?: string; // dùng cho upcoming/dessert
};

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

// Một ngày trong menu (dùng khi tạo thực đơn mới)
export type DayMenu = {
  main: Dish | null;
  dessert: Dish | null;
};

// Thực đơn cả tuần cho trang tạo menu
export type WeeklyMenu = {
  name: string;
  description: string;
  weekStart: string;
  weekEnd: string;
  monday: DayMenu;
  tuesday: DayMenu;
  wednesday: DayMenu;
  thursday: DayMenu;
  friday: DayMenu;
};

// Dùng cho MenuTab (render thực đơn sắp tới)
export type WeeklyMenuByDay = {
  [day: string]: {
    main: MenuItem | null;
    dessert: MenuItem | null;
    date: string;
  };
};
