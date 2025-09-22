export interface BaseItem {
  image: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NutritionInfo {
  nutrients: string[];
  benefits: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  fiber?: number;
  vitamins?: string[];
  minerals?: string[];
}

export interface FoodItem extends BaseItem {
  title: string;
  category: string;
  price: number;
  nutrition?: NutritionInfo;
}

export interface DayMenu {
  day: string;
  dayVn: string;
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