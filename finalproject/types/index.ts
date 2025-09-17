export interface BaseItem {
  image: string;
  description: string;
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

export interface MealItem extends BaseItem {
  name: string;
  nutrition?: NutritionInfo;
}

export interface DayMenu {
  day: string;
  dayVn: string;
  breakfast: MealItem;
  lunch: MealItem;
  snack: MealItem;
}

export interface WithWeeklyMenu {
  weeklyMenu: DayMenu[];
}

export interface Features {
  title: string;
  desc: string;
  image: string;
}
