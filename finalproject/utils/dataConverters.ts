// utils/dataConverters.ts
import { DayMenu, MealItem, FoodItem } from "@/types";

/**
 * Convert FoodItem to MealItem
 * @param foodItem - FoodItem to convert
 * @returns MealItem
 */
export const convertFoodItemToMealItem = (foodItem: FoodItem): MealItem => {
  return {
    name: foodItem.title,
    image: foodItem.image,
    description: foodItem.description,
    nutrition: "Bổ dưỡng, đầy đủ chất", // Default nutrition info
  };
};

/**
 * Convert multiple FoodItems to MealItems
 * @param foodItems - Array of FoodItems to convert
 * @returns Array of MealItems
 */
export const convertFoodItemsToMealItems = (
  foodItems: FoodItem[]
): MealItem[] => {
  return foodItems.map(convertFoodItemToMealItem);
};

/**
 * Convert FoodItem to MealItem with custom nutrition info
 * @param foodItem - FoodItem to convert
 * @param nutrition - Custom nutrition information
 * @returns MealItem with custom nutrition
 */
export const convertFoodItemToMealItemWithNutrition = (
  foodItem: FoodItem,
  nutrition: string
): MealItem => {
  return {
    name: foodItem.title,
    image: foodItem.image,
    description: foodItem.description,
    nutrition,
  };
};

/**
 * Generate weekly menu from food items with predefined breakfast and snack items
 * @param foodItems - Array of food items to use for lunch
 * @returns Weekly menu data
 */
export const generateWeeklyMenuFromFoodItems = (
  foodItems: FoodItem[]
): DayMenu[] => {
  const vietnameseDays = [
    { day: "Monday", dayVn: "Thứ Hai" },
    { day: "Tuesday", dayVn: "Thứ Ba" },
    { day: "Wednesday", dayVn: "Thứ Tư" },
    { day: "Thursday", dayVn: "Thứ Năm" },
    { day: "Friday", dayVn: "Thứ Sáu" },
    { day: "Saturday", dayVn: "Thứ Bảy" },
    { day: "Sunday", dayVn: "Chủ Nhật" },
  ];

  const breakfastItems: MealItem[] = [
    {
      name: "Cháo tôm rau củ",
      image: "/chao-tom.jpg",
      description: "Cháo mềm mịn với tôm tươi",
      nutrition: "Protein, Vitamin A",
    },
    {
      name: "Bánh mì trứng",
      image: "/banh-mi-trung.jpg",
      description: "Bánh mì mềm với trứng chiên",
      nutrition: "Carbs, Protein",
    },
    {
      name: "Sữa ngô",
      image: "/sua-ngo.jpg",
      description: "Sữa ngô thơm ngậy bổ dưỡng",
      nutrition: "Vitamin B, Chất xơ",
    },
    {
      name: "Cháo gà",
      image: "/chao-ga.jpg",
      description: "Cháo gà mềm ngon cho bé",
      nutrition: "Protein, Iron",
    },
    {
      name: "Bánh flan",
      image: "/banh-flan.jpg",
      description: "Bánh flan mềm mịn",
      nutrition: "Calcium, Vitamin D",
    },
    {
      name: "Cháo cá",
      image: "/chao-ca.jpg",
      description: "Cháo cá bổ dưỡng",
      nutrition: "Omega-3, Protein",
    },
    {
      name: "Sữa đậu nành",
      image: "/sua-dau-nanh.jpg",
      description: "Sữa đậu nành thơm ngon",
      nutrition: "Protein thực vật",
    },
  ];

  const snackItems: MealItem[] = [
    {
      name: "Sữa chua trái cây",
      image: "/sua-chua.jpg",
      description: "Sữa chua với trái cây tươi",
      nutrition: "Probiotics, Vitamin C",
    },
    {
      name: "Bánh quy",
      image: "/banh-quy.jpg",
      description: "Bánh quy giòn tan",
      nutrition: "Carbs, Chất béo tốt",
    },
    {
      name: "Sinh tố bơ",
      image: "/sinh-to-bo.jpg",
      description: "Sinh tố bơ mịn ngậy",
      nutrition: "Vitamin E, Chất béo tốt",
    },
    {
      name: "Chè đậu xanh",
      image: "/che-dau-xanh.jpg",
      description: "Chè đậu xanh mát lành",
      nutrition: "Protein, Chất xơ",
    },
    {
      name: "Bánh khoai lang",
      image: "/banh-khoai-lang.jpg",
      description: "Bánh khoai lang ngọt",
      nutrition: "Beta-carotene",
    },
    {
      name: "Nước ép cam",
      image: "/nuoc-ep-cam.jpg",
      description: "Nước ép cam tươi",
      nutrition: "Vitamin C",
    },
    {
      name: "Bánh bông lan",
      image: "/banh-bong-lan.jpg",
      description: "Bánh bông lan mềm",
      nutrition: "Carbs, Protein",
    },
  ];

  return vietnameseDays.map((day, index) => ({
    day: day.day,
    dayVn: day.dayVn,
    breakfast: breakfastItems[index],
    lunch: convertFoodItemToMealItem(foodItems[index % foodItems.length]),
    snack: snackItems[index],
  }));
};

/**
 * Create a custom meal item
 * @param name - Meal name
 * @param image - Image path
 * @param description - Meal description
 * @param nutrition - Nutrition information (optional)
 * @returns MealItem
 */
export const createMealItem = (
  name: string,
  image: string,
  description: string,
  nutrition?: string
): MealItem => {
  return {
    name,
    image,
    description,
    nutrition,
  };
};

/**
 * Create a day menu
 * @param day - English day name
 * @param dayVn - Vietnamese day name
 * @param breakfast - Breakfast meal item
 * @param lunch - Lunch meal item
 * @param snack - Snack meal item
 * @returns DayMenu
 */
export const createDayMenu = (
  day: string,
  dayVn: string,
  breakfast: MealItem,
  lunch: MealItem,
  snack: MealItem
): DayMenu => {
  return {
    day,
    dayVn,
    breakfast,
    lunch,
    snack,
  };
};
