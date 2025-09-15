export interface BaseItem {
  image: string;
  description: string;
}

export interface FoodItem extends BaseItem {
  title: string;
  category: string;
  price: number;
}

export interface MealItem extends BaseItem {
  name: string;
  nutrition?: string;
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