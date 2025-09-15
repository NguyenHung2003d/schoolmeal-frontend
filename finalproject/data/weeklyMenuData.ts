import { DayMenu } from "@/types";
import { FOOD_ITEMS } from "./constants";
import { generateWeeklyMenuFromFoodItems } from "@/utils/dataConverters";

export const WEEKLY_MENU_DATA: DayMenu[] = [
  {
    day: "Monday",
    dayVn: "Thứ Hai",
    breakfast: {
      name: "Cháo tôm rau củ",
      image: "/chao-tom.jpg",
      description: "Cháo mềm mịn với tôm tươi và rau củ bổ dưỡng",
      nutrition: "Protein, Vitamin A, Chất xơ",
    },
    lunch: {
      name: "Phở gà",
      image: "/pho_ga.jpg",
      description: "Phở gà thơm ngon, đầy đủ dưỡng chất, bé ăn là mê!",
      nutrition: "Protein, Carbs, Vitamin B",
    },
    snack: {
      name: "Sữa chua trái cây",
      image: "/sua-chua-trai-cay.jpg",
      description: "Sữa chua tự nhiên với trái cây tươi",
      nutrition: "Probiotics, Vitamin C",
    },
  },
  {
    day: "Tuesday",
    dayVn: "Thứ Ba",
    breakfast: {
      name: "Bánh mì trứng",
      image: "/banh-mi-trung.jpg",
      description: "Bánh mì mềm với trứng chiên golden",
      nutrition: "Carbs, Protein, Vitamin D",
    },
    lunch: {
      name: "Cơm Gà Nướng",
      image: "/com_ga_nuong.jpg",
      description: "Gà nướng thơm lừng, mềm ngon, đủ chất.",
      nutrition: "Protein cao, Iron, Zinc",
    },
    snack: {
      name: "Bánh quy bơ",
      image: "/banh-quy-bo.jpg",
      description: "Bánh quy giòn tan với vị bơ thơm",
      nutrition: "Carbs, Chất béo tốt",
    },
  },
  {
    day: "Wednesday",
    dayVn: "Thứ Tư",
    breakfast: {
      name: "Sữa ngô",
      image: "/sua-ngo.jpg",
      description: "Sữa ngô thơm ngậy bổ dưỡng cho bé",
      nutrition: "Vitamin B, Chất xơ, Folate",
    },
    lunch: {
      name: "Bún bò",
      image: "/bun_bo.jpg",
      description: "Bún bò thơm ngon, ăn là ghiền.",
      nutrition: "Protein, Iron, Vitamin C",
    },
    snack: {
      name: "Sinh tố bơ",
      image: "/sinh-to-bo.jpg",
      description: "Sinh tố bơ mịn ngậy, giàu dinh dưỡng",
      nutrition: "Vitamin E, Chất béo tốt, Potassium",
    },
  },
  {
    day: "Thursday",
    dayVn: "Thứ Năm",
    breakfast: {
      name: "Cháo gà",
      image: "/chao-ga.jpg",
      description: "Cháo gà mềm ngon, dễ tiêu hóa",
      nutrition: "Protein, Iron, Vitamin B12",
    },
    lunch: {
      name: "Cơm trộn thập cẩm",
      image: "/com_tron_thap_cam.jpg",
      description: "Cơm trộn thập cẩm thơm ngon !",
      nutrition: "Đa dạng vitamin, Chất xơ",
    },
    snack: {
      name: "Chè đậu xanh",
      image: "/che-dau-xanh.jpg",
      description: "Chè đậu xanh mát lành, bổ dưỡng",
      nutrition: "Protein thực vật, Chất xơ",
    },
  },
  {
    day: "Friday",
    dayVn: "Thứ Sáu",
    breakfast: {
      name: "Bánh flan",
      image: "/banh-flan.jpg",
      description: "Bánh flan mềm mịn, thơm ngon",
      nutrition: "Calcium, Vitamin D, Protein",
    },
    lunch: {
      name: "Bánh canh chả cua",
      image: "/banh_canh.jpg",
      description: "Bánh canh chả cua thơm ngon bổ dưỡng",
      nutrition: "Protein biển, Calcium, Iodine",
    },
    snack: {
      name: "Bánh khoai lang",
      image: "/banh-khoai-lang.jpg",
      description: "Bánh khoai lang ngọt tự nhiên",
      nutrition: "Beta-carotene, Vitamin A, Chất xơ",
    },
  },
  {
    day: "Saturday",
    dayVn: "Thứ Bảy",
    breakfast: {
      name: "Cháo cá",
      image: "/chao-ca.jpg",
      description: "Cháo cá bổ dưỡng, giàu omega-3",
      nutrition: "Omega-3, Protein, Phosphorus",
    },
    lunch: {
      name: "Phở gà",
      image: "/pho_ga.jpg",
      description: "Phở gà đậm đà, thơm ngon",
      nutrition: "Protein, Carbs, Vitamin B",
    },
    snack: {
      name: "Nước ép cam",
      image: "/nuoc-ep-cam.jpg",
      description: "Nước ép cam tươi, vitamin C cao",
      nutrition: "Vitamin C, Folate, Potassium",
    },
  },
  {
    day: "Sunday",
    dayVn: "Chủ Nhật",
    breakfast: {
      name: "Sữa đậu nành",
      image: "/sua-dau-nanh.jpg",
      description: "Sữa đậu nành thơm ngon, bổ dưỡng",
      nutrition: "Protein thực vật, Isoflavones",
    },
    lunch: {
      name: "Cơm Gà Nướng",
      image: "/com_ga_nuong.jpg",
      description: "Cơm gà nướng đặc biệt ngày cuối tuần",
      nutrition: "Protein, Iron, Vitamin B6",
    },
    snack: {
      name: "Bánh bông lan",
      image: "/banh-bong-lan.jpg",
      description: "Bánh bông lan mềm xốp, thơm ngon",
      nutrition: "Carbs, Protein, Calcium",
    },
  },
];

export const GENERATED_WEEKLY_MENU =
  generateWeeklyMenuFromFoodItems(FOOD_ITEMS);

export default WEEKLY_MENU_DATA;
