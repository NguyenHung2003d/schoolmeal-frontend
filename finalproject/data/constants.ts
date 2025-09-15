import { FoodItem } from "@/types";

export const FOOD_ITEMS: FoodItem[] = [
  // Món cơm
  {
    image: "/com.jpg",
    title: "Cơm chiên dương châu",
    description: "Cơm chiên đầy màu sắc với tôm, trứng và rau củ tươi ngon",
    category: "rice",
    price: 45000,
  },
  {
    image: "/trung_chien.jpg",
    title: "Trứng chiên",
    description: "Trứng gà chiên vàng ươm, thơm ngon, dễ ăn",
    category: "egg",
    price: 20000,
  },
  {
    image: "/com_suon_nuong.jpg",
    title: "Cơm sườn nướng",
    description: "Sườn nướng mật ong thơm phức, ăn kèm cơm trắng dẻo ngon",
    category: "rice",
    price: 55000,
  },
  {
    image: "/ca_kho_to.jpg",
    title: "Cá kho tộ",
    description: "Cá kho tộ đậm đà, thấm vị, ăn với cơm nóng rất ngon",
    category: "fish",
    price: 48000,
  },
  {
    image: "/pho_bo.jpg",
    title: "Phở bò tái",
    description: "Phở bò tái nóng hổi, nước dùng ngọt thanh, thịt bò tươi ngon",
    category: "noodles",
    price: 58000,
  },
  {
    image: "/bun_rieu_cua.jpg",
    title: "Bún riêu cua",
    description: "Bún riêu cua đồng đậm đà, chua chua ngọt ngọt rất hấp dẫn",
    category: "noodles",
    price: 46000,
  },
  {
    image: "/mi_quang.jpg",
    title: "Mì Quảng",
    description: "Mì Quảng đặc sản miền Trung với tôm, thịt và trứng cút",
    category: "noodles",
    price: 54000,
  },
  // Món canh/soup
  {
    image: "/canh_chua_ca.jpg",
    title: "Canh chua cá",
    description:
      "Canh chua cá thanh mát, chua ngọt hài hòa, kích thích vị giác",
    category: "soup",
    price: 42000,
  },
  {
    image: "/canh_bau_tom.jpg",
    title: "Canh bầu tôm",
    description: "Canh bầu tôm thanh đạm, ngọt mát, rất tốt cho sức khỏe",
    category: "soup",
    price: 38000,
  },
  {
    image: "/sup_cua_chay.jpg",
    title: "Súp cua chay",
    description: "Súp cua chay dinh dưỡng với nấm và đậu phụ thơm ngon",
    category: "soup",
    price: 40000,
  },
  // Món thịt
  {
    image: "/thit_kho_tau.jpg",
    title: "Thịt kho tàu",
    description: "Thịt kho tàu đậm đà, mềm ngon, ăn với bánh mì rất tuyệt",
    category: "meat",
    price: 65000,
  },
  {
    image: "/ga_nuong_mat_ong.jpg",
    title: "Gà nướng mật ong",
    description: "Gà nướng mật ong vàng ươm, da giòn thịt mềm, thơm phức",
    category: "meat",
    price: 85000,
  },
  {
    image: "/ca_chien_nuoc_mam.jpg",
    title: "Cá chiên nước mắm",
    description: "Cá chiên giòn tan, tẩm nước mắm đậm đà, ăn kèm rau sống",
    category: "meat",
    price: 72000,
  },
  // Món rau củ
  {
    image: "/rau_muong_xao_toi.jpg",
    title: "Rau muống xào tỏi",
    description: "Rau muống xào tỏi giòn ngon, đơn giản mà đưa cơm",
    category: "vegetable",
    price: 25000,
  },
  {
    image: "/canh_chua_rau_muong.jpg",
    title: "Canh chua rau muống",
    description: "Canh chua rau muống thanh mát, chua ngọt tự nhiên",
    category: "vegetable",
    price: 28000,
  },
  {
    image: "/dau_hu_sot_ca_chua.jpg",
    title: "Đậu hũ sốt cà chua",
    description: "Đậu hũ sốt cà chua đậm đà, giàu protein thực vật",
    category: "vegetable",
    price: 32000,
  },
  // Món ăn vặt/tráng miệng
  {
    image: "/banh_mi_thit_nuong.jpg",
    title: "Bánh mì thịt nướng",
    description:
      "Bánh mì giòn tan với thịt nướng thơm phức và rau sống tươi mát",
    category: "snack",
    price: 35000,
  },
  {
    image: "/che_ba_mau.jpg",
    title: "Chè ba màu",
    description: "Chè ba màu mát lành, ngọt dịu, là món tráng miệng lý tưởng",
    category: "dessert",
    price: 18000,
  },
  {
    image: "/banh_flan.jpg",
    title: "Bánh flan",
    description: "Bánh flan mềm mịn, vị caramel đậm đà, tan chảy trong miệng",
    category: "dessert",
    price: 22000,
  },
  {
    image: "/kem_trai_cay.jpg",
    title: "Kem trái cây",
    description: "Kem trái cây tự nhiên, mát lạnh, nhiều hương vị thơm ngon",
    category: "dessert",
    price: 15000,
  },
  {
    image: "/banana.jpg",
    title: "fruit",
    description: "Chuối chín tự nhiên, giàu kali và vitamin",
    category: "fruit",
    price: 15000,
  },

  // Món đặc biệt
  {
    image: "/lau_ca_khoai.jpg",
    title: "Lẩu cá khoai",
    description: "Lẩu cá khoai đậm đà, chua cay vừa phải, ăn nhóm rất vui",
    category: "special",
    price: 120000,
  },
  {
    image: "/banh_xeo_mien_tay.jpg",
    title: "Bánh xèo miền Tây",
    description: "Bánh xèo giòn rụm, nhân tôm thịt đầy đặn, ăn kèm rau sống",
    category: "special",
    price: 45000,
  },
  {
    image: "/nem_nuong_ninh_hoa.jpg",
    title: "Nem nướng Ninh Hòa",
    description: "Nem nướng thơm phức, cuốn với bánh tráng và rau thơm",
    category: "special",
    price: 58000,
  },
  // Đồ uống
  {
    image: "/nuoc_chanh_tuyet.jpg",
    title: "Nước chanh tuyết",
    description:
      "Nước chanh tuyết mát lạnh, chua ngọt hài hòa, giải khát tuyệt vời",
    category: "drink",
    price: 12000,
  },
  {
    image: "/tra_sua_tran_chau.jpg",
    title: "Trà sữa trân châu",
    description:
      "Trà sữa trân châu đen ngọt ngào, thơm béo, rất được yêu thích",
    category: "drink",
    price: 25000,
  },
  {
    image: "/nuoc_cam_vat.jpg",
    title: "Nước cam vắt",
    description: "Nước cam vắt tươi ngon, giàu vitamin C, tốt cho sức khỏe",
    category: "drink",
    price: 18000,
  },
];

export const slides = [
  {
    image: "/anh_banner1.jpg",
  },
  {
    image: "/anh_banner2.jpg",
  },
  {
    image: "/anh_banner3.jpg",
  },
  {
    image: "/anh_banner4.jpg",
  },
  {
    image: "/anh_banner5.jpg",
  },
];
