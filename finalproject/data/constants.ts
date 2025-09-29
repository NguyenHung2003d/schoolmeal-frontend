import { ParentFeedback } from "@/types";

export const images = [
  {
    image: "/hero_section.png",
  },
];

export const features = [
  {
    id: 1,
    title: "Đặt Món Online",
    subtitle: "Chọn từ menu hàng tuần, tránh xếp hàng",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-200",
    image: "/api/placeholder/400/300",
    details: {
      title: "Đặt Món Online Thông Minh",
      description:
        "Hệ thống đặt món hiện đại giúp phụ huynh và học sinh dễ dàng chọn bữa trưa yêu thích chỉ với vài thao tác đơn giản.",
      benefits: [
        "Menu được cập nhật hàng tuần với đa dạng món ăn",
        "Đặt trước để tránh hết suất, không cần xếp hàng",
        "Lưu món yêu thích để đặt lại nhanh chóng",
        "Thông báo tự động khi có món mới hoặc khuyến mãi",
      ],
      mockupFeatures: [
        "Giao diện thân thiện, dễ sử dụng",
        "Tìm kiếm món ăn theo danh mục",
        "Xem trước hình ảnh và mô tả chi tiết",
        "Đặt lịch trước cho cả tuần",
      ],
    },
  },
  {
    id: 2,
    title: "Theo Dõi Dinh Dưỡng",
    subtitle: "Cảnh báo dị ứng, gợi ý món lành mạnh",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-200",
    image: "/api/placeholder/400/300",
    details: {
      title: "Theo Dõi Dinh Dưỡng Toàn Diện",
      description:
        "AI thông minh phân tích thói quen ăn uống và đưa ra những gợi ý dinh dưỡng phù hợp cho từng trẻ.",
      benefits: [
        "Cảnh báo tự động về các thành phần gây dị ứng",
        "Phân tích calo và chất dinh dưỡng hàng ngày",
        "Gợi ý menu cân bằng protein, vitamin, khoáng chất",
        "Báo cáo dinh dưỡng chi tiết gửi về phụ huynh",
      ],
      nutritionFeatures: [
        "Biểu đồ dinh dưỡng trực quan",
        "Cảnh báo thiếu hụt vitamin",
        "Theo dõi lượng nước uống",
        "Tư vấn từ chuyên gia dinh dưỡng",
      ],
    },
  },
  {
    id: 3,
    title: "Thanh Toán An Toàn",
    subtitle: "Nạp tiền dễ dàng, báo cáo chi tiêu cho phụ huynh",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-200",
    image: "/api/placeholder/400/300",
    details: {
      title: "Ví Điện Tử An Toàn & Tiện Lợi",
      description:
        "Hệ thống thanh toán bảo mật cao với nhiều phương thức nạp tiền và theo dõi chi tiêu minh bạch.",
      benefits: [
        "Nạp tiền qua banking, ví điện tử, thẻ cào",
        "Bảo mật 2 lớp, mã hóa thông tin thanh toán",
        "Báo cáo chi tiêu chi tiết theo ngày/tuần/tháng",
        "Cảnh báo khi số dư thấp hoặc chi tiêu bất thường",
      ],
      paymentFeatures: [
        "Hỗ trợ tất cả ngân hàng lớn",
        "Cashback cho giao dịch thường xuyên",
        "Kiểm soát hạn mức chi tiêu",
        "Lịch sử giao dịch minh bạch",
      ],
    },
  },
  {
    id: 4,
    title: "Dành Cho Học Sinh",
    subtitle: "Chọn món yêu thích qua app, nhận badge vui khi ăn đủ",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-200",
    image: "/api/placeholder/400/300",
    details: {
      title: "Trải Nghiệm Vui Nhộn Cho Học Sinh",
      description:
        "Ứng dụng được thiết kế đặc biệt để tạo động lực cho trẻ em có thói quen ăn uống lành mạnh.",
      benefits: [
        "Giao diện game hóa với avatar và level up",
        "Nhận badge khi hoàn thành thử thách dinh dưỡng",
        "Bảng xếp hạng lớp về việc ăn uống lành mạnh",
        "Mini-game giáo dục về dinh dưỡng và sức khỏe",
      ],
      studentFeatures: [
        "Tạo avatar cá nhân độc đáo",
        "Thử thách ăn uống hàng ngày",
        "Chia sẻ thành tích với bạn bè",
        "Quà tặng khi đạt mục tiêu",
      ],
    },
  },
];

export const ParentFeedbackData: ParentFeedback[] = [
  {
    id: 1,
    rating: 9.9,
    stars: 5,
    text: "EduMeal giúp tôi theo dõi chi tiết các bữa ăn của con tại trường. Tôi đặc biệt yêu thích tính năng xem trước thực đơn và thông tin dinh dưỡng, giúp tôi biết được con mình ăn món gì ngay.",
    author: {
      name: "Chị Nguyễn Thị Hương",
      role: "Phụ huynh học sinh lớp 2A",
      avatar: "N",
    },
    feedback: "Con tôi rất thích món cơm gà rau củ và luôn xin thêm!",
  },
  {
    id: 2,
    rating: 9.9,
    stars: 5,
    text: "Tôi đánh giá cao việc nhà trường cập nhật hình ảnh hoạt động của các con. Thực đơn đa dạng và đầy đủ dinh dưỡng, con tôi đã tăng cân đều đặn từ khi sử dụng dịch vụ bán trú của trường.",
    author: {
      name: "Anh Trần Văn Minh",
      role: "Phụ huynh học sinh lớp 4C",
      avatar: "A",
    },
    feedback: "Con tôi thích nhất bữa phở với các loại trái cây tươi.",
  },
  {
    id: 3,
    rating: 9.9,
    stars: 5,
    text: "EduMeal không chỉ giúp tôi theo dõi bữa ăn mà còn giúp tôi nắm bắt hoạt động của con tại trường. Giao diện dễ sử dụng và thông tin cập nhật liên tục. Tôi đặc biệt thích chức năng đánh giá món ăn.",
    author: {
      name: "Chị Lê Thị Mai",
      role: "Phụ huynh học sinh lớp 1B",
      avatar: "L",
    },
    feedback: "Con tôi đã bớt kén ăn hơn khi ở trường!",
  },
];

export const solutions = [
  {
    icon: "💻",
    title: "Quản lý trực tuyến",
    description:
      "Tất cả thông tin bữa ăn, học sinh, lớp học được quản lý tập trung trên hệ thống web.",
  },
  {
    icon: "🥗",
    title: "Thực đơn minh bạch",
    description:
      "Phụ huynh và giáo viên xem trước thực đơn hàng tuần, kèm thông tin dinh dưỡng.",
  },
  {
    icon: "🏦",
    title: "Thanh toán trực tuyến",
    description:
      "Hỗ trợ tích hợp cổng thanh toán, lưu vết hóa đơn rõ ràng, tiện lợi và minh bạch.",
  },
  {
    icon: "📈",
    title: "Thống kê & báo cáo",
    description:
      "Tự động tổng hợp số suất ăn, chi phí và tình hình sử dụng, giảm lãng phí cho nhà trường.",
  },
];

export const problems = [
  {
    icon: "📋",
    title: "Quản lý thủ công",
    description:
      "Nhà trường và phụ huynh vẫn ghi chép suất ăn bằng giấy tờ, dễ sai sót và khó tổng hợp.",
  },
  {
    icon: "🍲",
    title: "Không nắm rõ thực đơn",
    description:
      "Phụ huynh không biết con mình hôm nay ăn gì, dinh dưỡng có đủ hay không.",
  },
  {
    icon: "💰",
    title: "Thanh toán rườm rà",
    description:
      "Thu tiền trực tiếp gây mất thời gian, dễ thất lạc và khó minh bạch.",
  },
  {
    icon: "♻️",
    title: "Lãng phí suất ăn",
    description:
      "Số lượng bữa ăn không khớp thực tế, dẫn đến thừa hoặc thiếu, gây lãng phí.",
  },
];

export const dashboardStats = {
  totalMeals: 342,
  specialRequests: 18,
  allergies: 24,
  inventory: 86,
};

export const upcomingMeals = [
  {
    time: "11:30 - 12:30",
    type: "Bữa trưa",
    registered: 342,
    prepared: 120,
    special: 18,
    status: "Đang chuẩn bị",
  },
  {
    time: "12:30 - 13:00",
    type: "Tráng miệng",
    registered: 298,
    prepared: 0,
    special: 12,
    status: "Chưa chuẩn bị",
  },
];

export const menuItems = [
  {
    id: 1,
    name: "Cơm gà rau củ",
    category: "Bữa trưa",
    ingredients: ["Gạo lứt", "Thịt gà", "Cà rốt", "Bông cải xanh"],
    allergies: [],
    prepared: 120,
    needed: 342,
  },
  {
    id: 2,
    name: "Sữa chua & hoa quả",
    category: "Tráng miệng",
    ingredients: ["Sữa chua", "Hoa quả tươi"],
    allergies: ["Sữa"],
    prepared: 0,
    needed: 298,
  },
];
export const lowStockItems = [
  {
    name: "Sữa tươi",
    current: 12,
    minimum: 20,
    unit: "lít",
  },
  {
    name: "Trứng gà",
    current: 45,
    minimum: 100,
    unit: "quả",
  },
  {
    name: "Rau xà lách",
    current: 3,
    minimum: 5,
    unit: "kg",
  },
];
export const recentUpdates = [
  {
    time: "08:15",
    message: "Đã hoàn thành chuẩn bị bữa sáng",
    user: "Nguyễn Văn An",
  },
  {
    time: "07:45",
    message: "Cập nhật số lượng bánh mì trứng: 100/118",
    user: "Trần Thị Bình",
  },
  {
    time: "07:30",
    message: "Phụ huynh hủy 3 suất ăn bữa trưa",
    user: "Hệ thống",
  },
];

export const students = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    class: "3A",
    registered: true,
    present: true,
    allergies: ["Sữa"],
    specialRequests: "Không dùng sữa tươi, thay thế bằng sữa đậu nành",
    image: "https://i.imgur.com/6YQ9Z3z.jpg",
  },
  {
    id: 2,
    name: "Trần Hoàng Nam",
    class: "2B",
    registered: true,
    present: true,
    allergies: ["Đậu phộng"],
    specialRequests: "Không sử dụng đậu phộng trong món ăn",
    image: "https://i.imgur.com/wgJDypg.jpg",
  },
  {
    id: 3,
    name: "Lê Thu Hà",
    class: "1A",
    registered: true,
    present: false,
    allergies: [],
    specialRequests: "Ăn kiêng đường",
    image: "https://i.imgur.com/KWaVOLR.jpg",
  },
  {
    id: 4,
    name: "Phạm Tuấn Kiệt",
    class: "3A",
    registered: true,
    present: true,
    allergies: ["Hải sản"],
    specialRequests: "",
    image: "https://i.imgur.com/F8QXfXh.jpg",
  },
  {
    id: 5,
    name: "Ngô Thanh Mai",
    class: "2B",
    registered: true,
    present: true,
    allergies: [],
    specialRequests: "",
    image: "https://i.imgur.com/6YQ9Z3z.jpg",
  },
];
export const classes = [
  {
    name: "1A",
    total: 28,
    present: 25,
  },
  {
    name: "2B",
    total: 26,
    present: 24,
  },
  {
    name: "3A",
    total: 21,
    present: 19,
  },
];
export const mealSchedule = [
  {
    time: "11:30 - 12:00",
    class: "1A",
    students: 25,
  },
  {
    time: "12:00 - 12:30",
    class: "2B",
    students: 24,
  },
  {
    time: "12:30 - 13:00",
    class: "3A",
    students: 19,
  },
];

export const allergyAlerts = [
  {
    id: 1,
    student: "Nguyễn Minh Anh",
    class: "3A",
    allergies: ["Sữa"],
    meal: "Bữa trưa",
    dish: "Sữa chua & hoa quả",
    status: "high",
    date: "24/10/2023",
  },
  {
    id: 2,
    student: "Trần Hoàng Nam",
    class: "2B",
    allergies: ["Đậu phộng"],
    meal: "Bữa trưa",
    dish: "Cơm gà rau củ",
    status: "medium",
    date: "24/10/2023",
  },
  {
    id: 3,
    student: "Phạm Tuấn Kiệt",
    class: "3A",
    allergies: ["Hải sản"],
    meal: "Bữa trưa",
    dish: "Bún riêu cua",
    status: "high",
    date: "27/10/2023",
  },
];
// Mock data for all allergies
export const studentAllergies = [
  {
    id: 1,
    student: "Nguyễn Minh Anh",
    class: "3A",
    allergies: ["Sữa"],
    severity: "Cao",
    notes:
      "Không được dùng sữa bò, sữa chua, phô mai, thay thế bằng sữa đậu nành",
    image: "https://i.imgur.com/6YQ9Z3z.jpg",
  },
  {
    id: 2,
    student: "Trần Hoàng Nam",
    class: "2B",
    allergies: ["Đậu phộng"],
    severity: "Trung bình",
    notes: "Tránh các món có đậu phộng và dầu đậu phộng",
    image: "https://i.imgur.com/wgJDypg.jpg",
  },
  {
    id: 3,
    student: "Phạm Tuấn Kiệt",
    class: "3A",
    allergies: ["Hải sản"],
    severity: "Cao",
    notes: "Dị ứng nặng với tôm, cua, ghẹ và các loại hải sản",
    image: "https://i.imgur.com/F8QXfXh.jpg",
  },
  {
    id: 4,
    student: "Lê Thu Hà",
    class: "1A",
    allergies: ["Gluten"],
    severity: "Trung bình",
    notes: "Không dùng các món có bột mì, bánh mì",
    image: "https://i.imgur.com/KWaVOLR.jpg",
  },
];
// Mock data for dietary restrictions
export const dietaryRestrictions = [
  {
    id: 1,
    student: "Lê Thu Hà",
    class: "1A",
    restriction: "Ăn kiêng đường",
    notes: "Hạn chế đồ ngọt và đường tinh luyện",
    image: "https://i.imgur.com/KWaVOLR.jpg",
  },
  {
    id: 2,
    student: "Vũ Hoàng Long",
    class: "2B",
    restriction: "Ăn chay",
    notes: "Không ăn thịt, cá và các sản phẩm từ động vật",
    image: "https://i.imgur.com/wgJDypg.jpg",
  },
];
// Common allergens
export const commonAllergens = [
  {
    name: "Sữa",
    count: 1,
  },
  {
    name: "Đậu phộng",
    count: 1,
  },
  {
    name: "Hải sản",
    count: 1,
  },
  {
    name: "Gluten",
    count: 1,
  },
  {
    name: "Trứng",
    count: 0,
  },
  {
    name: "Đậu nành",
    count: 0,
  },
];

export const inventoryItems = [
  {
    id: 1,
    name: "Gạo",
    category: "Nguyên liệu chính",
    quantity: 50,
    unit: "kg",
    minimumLevel: 20,
    status: "Đầy đủ",
    lastUpdated: "22/10/2023",
    expiryDate: "15/04/2024",
  },
  {
    id: 2,
    name: "Thịt gà",
    category: "Thịt & Hải sản",
    quantity: 15,
    unit: "kg",
    minimumLevel: 10,
    status: "Đầy đủ",
    lastUpdated: "23/10/2023",
    expiryDate: "27/10/2023",
  },
  {
    id: 3,
    name: "Cà rốt",
    category: "Rau củ",
    quantity: 8,
    unit: "kg",
    minimumLevel: 5,
    status: "Đầy đủ",
    lastUpdated: "23/10/2023",
    expiryDate: "30/10/2023",
  },
  {
    id: 4,
    name: "Sữa tươi",
    category: "Sữa & Trứng",
    quantity: 12,
    unit: "lít",
    minimumLevel: 20,
    status: "Thấp",
    lastUpdated: "21/10/2023",
    expiryDate: "28/10/2023",
  },
  {
    id: 5,
    name: "Trứng gà",
    category: "Sữa & Trứng",
    quantity: 45,
    unit: "quả",
    minimumLevel: 100,
    status: "Thấp",
    lastUpdated: "20/10/2023",
    expiryDate: "05/11/2023",
  },
  {
    id: 6,
    name: "Rau xà lách",
    category: "Rau củ",
    quantity: 3,
    unit: "kg",
    minimumLevel: 5,
    status: "Thấp",
    lastUpdated: "23/10/2023",
    expiryDate: "27/10/2023",
  },
];
export const upcomingOrders = [
  {
    id: 1,
    supplier: "Công ty Thực phẩm Sạch",
    items: ["Thịt gà (10kg)", "Thịt heo (15kg)", "Cá (8kg)"],
    orderDate: "22/10/2023",
    expectedDelivery: "25/10/2023",
    status: "Đang giao hàng",
    total: "2,350,000 VND",
  },
  {
    id: 2,
    supplier: "Nông trại Xanh",
    items: ["Rau xà lách (10kg)", "Cà rốt (8kg)", "Bông cải xanh (5kg)"],
    orderDate: "23/10/2023",
    expectedDelivery: "24/10/2023",
    status: "Đã xác nhận",
    total: "850,000 VND",
  },
];
export const expiryAlerts = [
  {
    id: 1,
    name: "Thịt gà",
    quantity: 5,
    unit: "kg",
    expiryDate: "27/10/2023",
    daysLeft: 3,
  },
  {
    id: 2,
    name: "Rau xà lách",
    quantity: 2,
    unit: "kg",
    expiryDate: "27/10/2023",
    daysLeft: 3,
  },
  {
    id: 3,
    name: "Sữa tươi",
    quantity: 4,
    unit: "lít",
    expiryDate: "28/10/2023",
    daysLeft: 4,
  },
];