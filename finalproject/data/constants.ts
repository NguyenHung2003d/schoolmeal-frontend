import { MissionItem, ParentFeedback, RecentActivities } from "@/types";
import {
  Target,
  Heart,
  Award,
  UserPlus,
  BookOpen,
  Bell,
  Users,
  CheckCircle,
} from "lucide-react";

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

export const issues = [
  {
    id: 1,
    title: "Học sinh bị dị ứng với món ăn",
    description:
      "Học sinh Nguyễn Minh Anh bị dị ứng với món pudding trứng trong bữa phụ chiều nay.",
    category: "food",
    severity: "high",
    student: "Nguyễn Minh Anh",
    date: "23/10/2023",
    time: "14:30",
    status: "pending",
    responses: [],
  },
  {
    id: 2,
    title: "Thiết bị trong lớp học bị hỏng",
    description:
      "Máy chiếu trong lớp học không hoạt động, cần được sửa chữa để phục vụ giảng dạy.",
    category: "facility",
    severity: "medium",
    student: "",
    date: "22/10/2023",
    time: "09:15",
    status: "inProgress",
    responses: [
      {
        id: 1,
        text: "Đã tiếp nhận thông tin, nhân viên kỹ thuật sẽ đến kiểm tra vào ngày mai.",
        date: "22/10/2023",
        time: "10:30",
        user: {
          name: "Nguyễn Văn Quản",
          role: "Quản lý cơ sở vật chất",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Học sinh cần hỗ trợ tâm lý",
    description:
      "Học sinh Lê Thu Hà có dấu hiệu tâm lý không ổn định, cần được tư vấn và hỗ trợ.",
    category: "health",
    severity: "medium",
    student: "Lê Thu Hà",
    date: "20/10/2023",
    time: "15:45",
    status: "resolved",
    responses: [
      {
        id: 1,
        text: "Đã tiếp nhận thông tin và sắp xếp buổi tư vấn với chuyên gia tâm lý vào ngày 21/10.",
        date: "20/10/2023",
        time: "16:30",
        user: {
          name: "Trần Thị Hương",
          role: "Chuyên viên tâm lý",
        },
      },
      {
        id: 2,
        text: "Buổi tư vấn đã diễn ra tốt đẹp, học sinh đã ổn định hơn. Sẽ tiếp tục theo dõi trong tuần tới.",
        date: "21/10/2023",
        time: "14:00",
        user: {
          name: "Trần Thị Hương",
          role: "Chuyên viên tâm lý",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Đề xuất thay đổi hoạt động ngoại khóa",
    description:
      "Đề xuất tổ chức thêm hoạt động trồng cây xanh cho học sinh để tăng cường ý thức bảo vệ môi trường.",
    category: "activity",
    severity: "low",
    student: "",
    date: "18/10/2023",
    time: "11:20",
    status: "resolved",
    responses: [
      {
        id: 1,
        text: "Cảm ơn cô đã đề xuất. Nhà trường sẽ xem xét và đưa vào kế hoạch hoạt động tháng tới.",
        date: "19/10/2023",
        time: "08:45",
        user: {
          name: "Nguyễn Hoàng",
          role: "Quản lý trường",
        },
      },
    ],
  },
];

export const students = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    avatar: "https://i.imgur.com/wgJDypg.jpg",
    present: true,
    gender: "Nữ",
    birthdate: "15/08/2017",
    parent: "Nguyễn Văn A",
    phone: "0912345678",
    note: "Dị ứng với sữa",
    height: 115,
    weight: 20.5,
    bmi: 15.5,
    bmiStatus: "normal",
    lastUpdate: "15/10/2023",
    history: [
      { date: "15/10/2023", height: 115, weight: 20.5, bmi: 15.5 },
      { date: "15/07/2023", height: 113, weight: 19.8, bmi: 15.5 },
      { date: "15/04/2023", height: 111, weight: 19.0, bmi: 15.4 },
      { date: "15/01/2023", height: 109, weight: 18.2, bmi: 15.3 },
    ],
  },
  {
    id: 2,
    name: "Trần Hoàng Nam",
    avatar: "https://i.imgur.com/8RWKYSf.jpg",
    present: true,
    gender: "Nam",
    birthdate: "20/05/2017",
    parent: "Trần Văn B",
    phone: "0923456789",
    note: "Dị ứng với đậu phộng",
  },
  {
    id: 3,
    name: "Lê Thu Hà",
    avatar: "https://i.imgur.com/K8gDgTf.jpg",
    present: false,
    gender: "Nữ",
    birthdate: "10/03/2017",
    parent: "Lê Văn C",
    phone: "0934567890",
    note: "Đang bị ốm",
  },
  {
    id: 4,
    name: "Phạm Minh Đức",
    avatar: "https://i.imgur.com/oPXQN1f.jpg",
    present: true,
    gender: "Nam",
    birthdate: "05/11/2017",
    parent: "Phạm Văn D",
    phone: "0945678901",
    note: "",
  },
  {
    id: 5,
    name: "Vũ Thị Mai",
    avatar: "https://i.imgur.com/5HJfYBQ.jpg",
    present: true,
    gender: "Nữ",
    birthdate: "25/07/2017",
    parent: "Vũ Văn E",
    phone: "0956789012",
    note: "",
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

export const feedbackItems = [
  {
    id: 1,
    title: "Món ăn quá mặn",
    description:
      "Bữa trưa hôm nay có món canh chua quá mặn, nhiều học sinh không ăn được.",
    date: "23/10/2023",
    time: "13:45",
    sender: {
      name: "Nguyễn Thị Hương",
      role: "Giáo viên lớp 2A",
      avatar: "https://i.imgur.com/6YQ9Z3z.jpg",
    },
    status: "pending",
    severity: "high",
    category: "food",
    dish: "Canh chua cá lóc",
    responses: [
      {
        id: 1,
        text: "Cảm ơn cô đã phản hồi. Chúng tôi sẽ điều chỉnh lại lượng muối trong món canh chua.",
        date: "23/10/2023",
        time: "14:30",
        user: {
          name: "Nguyễn Thị Tâm",
          role: "Quản lý bếp",
          avatar: "",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Dị ứng với món tráng miệng",
    description:
      "Học sinh Trần Minh Anh lớp 3B bị dị ứng với món pudding trứng hôm nay. Em có biểu hiện nổi mẩn đỏ.",
    date: "22/10/2023",
    time: "12:15",
    sender: {
      name: "Lê Thị Mai",
      role: "Giáo viên lớp 3B",
      avatar: "https://i.imgur.com/KWaVOLR.jpg",
    },
    status: "inProgress",
    severity: "high",
    category: "allergy",
    dish: "Pudding trứng",
    responses: [],
  },
  {
    id: 3,
    title: "Đề xuất thêm rau xanh",
    description:
      "Phụ huynh đề xuất tăng cường rau xanh trong bữa trưa để cân bằng dinh dưỡng cho học sinh.",
    date: "21/10/2023",
    time: "16:30",
    sender: {
      name: "Phạm Văn Tuấn",
      role: "Phụ huynh học sinh",
      avatar: "https://i.imgur.com/F8QXfXh.jpg",
    },
    status: "resolved",
    severity: "medium",
    category: "suggestion",
    dish: "Chung",
    responses: [
      {
        id: 1,
        text: "Cảm ơn góp ý của phụ huynh. Chúng tôi sẽ điều chỉnh thực đơn để tăng cường rau xanh trong các bữa ăn sắp tới.",
        date: "22/10/2023",
        time: "08:45",
        user: {
          name: "Nguyễn Thị Tâm",
          role: "Quản lý bếp",
          avatar: "",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Khen ngợi món mới",
    description:
      "Món cơm gà rau củ hôm nay rất ngon và được các học sinh yêu thích. Mong nhà trường duy trì món này.",
    date: "20/10/2023",
    time: "13:00",
    sender: {
      name: "Trần Văn Nam",
      role: "Giáo viên lớp 4A",
      avatar: "https://i.imgur.com/wgJDypg.jpg",
    },
    status: "resolved",
    severity: "low",
    category: "compliment",
    dish: "Cơm gà rau củ",
    responses: [
      {
        id: 1,
        text: "Cảm ơn thầy đã phản hồi tích cực. Chúng tôi sẽ tiếp tục duy trì món ăn này trong thực đơn.",
        date: "20/10/2023",
        time: "15:20",
        user: {
          name: "Nguyễn Thị Tâm",
          role: "Quản lý bếp",
          avatar: "",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Thức ăn không đủ nóng",
    description:
      "Bữa trưa hôm nay thức ăn không đủ nóng, đặc biệt là món canh. Mong nhà bếp khắc phục.",
    date: "19/10/2023",
    time: "12:45",
    sender: {
      name: "Nguyễn Thị Lan",
      role: "Giáo viên lớp 1C",
      avatar: "https://i.imgur.com/6YQ9Z3z.jpg",
    },
    status: "resolved",
    severity: "medium",
    category: "food",
    dish: "Canh rau củ",
    responses: [
      {
        id: 1,
        text: "Cảm ơn cô đã phản hồi. Chúng tôi sẽ kiểm tra lại thiết bị giữ nhiệt và đảm bảo thức ăn luôn được phục vụ nóng.",
        date: "19/10/2023",
        time: "14:00",
        user: {
          name: "Nguyễn Thị Tâm",
          role: "Quản lý bếp",
          avatar: "",
        },
      },
    ],
  },
];
export const parentFeedbacks = [
  {
    id: 1,
    parent: {
      name: "Nguyễn Thị Hương",
      avatar: "https://i.imgur.com/6YQ9Z3z.jpg",
      child: "Nguyễn Minh Anh",
      class: "3A",
    },
    rating: 5,
    comment:
      "Con tôi rất thích món cơm gà rau củ và luôn xin thêm. Tôi đánh giá cao việc nhà trường cập nhật thực đơn đa dạng.",
    date: "24/10/2023",
    dish: "Cơm gà rau củ",
    childFeedback: "Con rất thích món cơm gà, ăn hết suất và còn xin thêm!",
  },
  {
    id: 2,
    parent: {
      name: "Trần Văn Minh",
      avatar: "https://i.imgur.com/F8QXfXh.jpg",
      child: "Trần Hoàng Nam",
      class: "2B",
    },
    rating: 4,
    comment:
      "Thực đơn đa dạng và đầy đủ dinh dưỡng, con tôi đã tăng cân đều đặn từ khi sử dụng dịch vụ bán trú của trường.",
    date: "23/10/2023",
    dish: "Bún chả cá",
    childFeedback: "Con thích nhất bữa phụ với các loại trái cây tươi.",
  },
  {
    id: 3,
    parent: {
      name: "Lê Thị Mai",
      avatar: "https://i.imgur.com/KWaVOLR.jpg",
      child: "Lê Thu Hà",
      class: "1A",
    },
    rating: 3,
    comment:
      "Món ăn khá ngon nhưng đôi khi hơi mặn đối với trẻ nhỏ. Mong nhà trường điều chỉnh lượng gia vị phù hợp hơn.",
    date: "22/10/2023",
    dish: "Bún riêu cua",
    childFeedback: "Con đã bớt kén ăn hơn khi ở trường!",
  },
  {
    id: 4,
    parent: {
      name: "Phạm Văn Tuấn",
      avatar: "https://i.imgur.com/wgJDypg.jpg",
      child: "Phạm Tuấn Kiệt",
      class: "3A",
    },
    rating: 5,
    comment:
      "Tôi rất hài lòng với thực đơn và cách chăm sóc của nhà trường. Con tôi luôn hào hứng kể về bữa ăn ở trường.",
    date: "21/10/2023",
    dish: "Cơm sườn kho",
    childFeedback: "Con thích nhất món sườn kho, rất ngon!",
  },
  {
    id: 5,
    parent: {
      name: "Vũ Thị Hồng",
      avatar: "https://i.imgur.com/6YQ9Z3z.jpg",
      child: "Vũ Hoàng Long",
      class: "2B",
    },
    rating: 4,
    comment:
      "Đánh giá cao việc nhà trường quan tâm đến chế độ ăn chay cho con tôi. Mong có thêm nhiều món chay hơn nữa.",
    date: "20/10/2023",
    dish: "Món chay",
    childFeedback: "Con rất thích món đậu phụ sốt cà chua!",
  },
];

export const upcomingMenuItems = [
  {
    id: 1,
    name: "Cơm gà rau củ",
    category: "Bữa trưa",
    date: "24/10/2023",
    day: "Thứ Hai",
    ingredients: ["Gạo lứt", "Thịt gà", "Cà rốt", "Bông cải xanh"],
    allergies: [],
    nutritionalInfo: {
      calories: 450,
      protein: 25,
      carbs: 60,
      fat: 8,
    },
    image: "https://i.imgur.com/wgJDypg.jpg",
  },
  {
    id: 2,
    name: "Bún chả cá",
    category: "Bữa trưa",
    date: "25/10/2023",
    day: "Thứ Ba",
    ingredients: ["Bún", "Chả cá", "Rau sống", "Nước mắm pha"],
    allergies: ["Cá"],
    nutritionalInfo: {
      calories: 420,
      protein: 22,
      carbs: 55,
      fat: 10,
    },
    image: "https://i.imgur.com/QNXAyTp.jpg",
  },
  {
    id: 3,
    name: "Cơm sườn kho",
    category: "Bữa trưa",
    date: "26/10/2023",
    day: "Thứ Tư",
    ingredients: ["Cơm trắng", "Sườn kho", "Canh rau ngót"],
    allergies: [],
    nutritionalInfo: {
      calories: 520,
      protein: 28,
      carbs: 65,
      fat: 15,
    },
    image: "https://i.imgur.com/t9oKhEo.jpg",
  },
  {
    id: 4,
    name: "Bún riêu cua",
    category: "Bữa trưa",
    date: "27/10/2023",
    day: "Thứ Năm",
    ingredients: ["Bún", "Riêu cua", "Đậu hũ", "Rau sống", "Giá đỗ"],
    allergies: ["Hải sản"],
    nutritionalInfo: {
      calories: 450,
      protein: 20,
      carbs: 60,
      fat: 12,
    },
    image: "https://i.imgur.com/Fd7LCKk.jpg",
  },
  {
    id: 5,
    name: "Cơm thịt kho trứng",
    category: "Bữa trưa",
    date: "28/10/2023",
    day: "Thứ Sáu",
    ingredients: ["Cơm trắng", "Thịt heo kho trứng", "Canh chua"],
    allergies: ["Trứng"],
    nutritionalInfo: {
      calories: 550,
      protein: 30,
      carbs: 65,
      fat: 15,
    },
    image: "https://i.imgur.com/JWxqcqR.jpg",
  },
];

export const dessertItems = [
  {
    id: 6,
    name: "Sữa chua & hoa quả",
    category: "Tráng miệng",
    date: "24/10/2023",
    day: "Thứ Hai",
    ingredients: ["Sữa chua không đường", "Hoa quả tươi theo mùa"],
    allergies: ["Sữa"],
    nutritionalInfo: {
      calories: 150,
      protein: 5,
      carbs: 25,
      fat: 3,
    },
    image: "https://i.imgur.com/K8gDgTf.jpg",
  },
  {
    id: 7,
    name: "Bánh flan caramel",
    category: "Tráng miệng",
    date: "25/10/2023",
    day: "Thứ Ba",
    ingredients: ["Trứng", "Sữa", "Đường", "Caramel"],
    allergies: ["Trứng", "Sữa"],
    nutritionalInfo: {
      calories: 180,
      protein: 5,
      carbs: 30,
      fat: 5,
    },
    image: "https://i.imgur.com/wHXtNAl.jpg",
  },
  {
    id: 8,
    name: "Chè đậu xanh",
    category: "Tráng miệng",
    date: "26/10/2023",
    day: "Thứ Tư",
    ingredients: ["Đậu xanh", "Đường", "Nước cốt dừa"],
    allergies: [],
    nutritionalInfo: {
      calories: 200,
      protein: 6,
      carbs: 35,
      fat: 4,
    },
    image: "https://i.imgur.com/oPXQN1f.jpg",
  },
  {
    id: 9,
    name: "Trái cây theo mùa",
    category: "Tráng miệng",
    date: "27/10/2023",
    day: "Thứ Năm",
    ingredients: ["Trái cây tươi theo mùa"],
    allergies: [],
    nutritionalInfo: {
      calories: 120,
      protein: 3,
      carbs: 25,
      fat: 1,
    },
    image: "https://i.imgur.com/5HJfYBQ.jpg",
  },
  {
    id: 10,
    name: "Sữa đậu nành",
    category: "Tráng miệng",
    date: "28/10/2023",
    day: "Thứ Sáu",
    ingredients: ["Đậu nành", "Đường"],
    allergies: ["Đậu nành"],
    nutritionalInfo: {
      calories: 220,
      protein: 8,
      carbs: 30,
      fat: 7,
    },
    image: "https://i.imgur.com/q2Fg0Uw.jpg",
  },
];
export const pastMenuItems = [
  {
    id: 11,
    name: "Phở gà",
    category: "Bữa trưa",
    date: "20/10/2023",
    day: "Thứ Sáu",
    ingredients: ["Bánh phở", "Thịt gà", "Hành ngò", "Nước dùng gà"],
    allergies: [],
    nutritionalInfo: {
      calories: 450,
      protein: 25,
      carbs: 60,
      fat: 8,
    },
    feedback: {
      rating: 4.8,
      comments: 15,
      wastage: "Thấp",
    },
    image: "https://i.imgur.com/8RWKYSf.jpg",
  },
  {
    id: 12,
    name: "Cơm rang dưa bò",
    category: "Bữa trưa",
    date: "19/10/2023",
    day: "Thứ Năm",
    ingredients: ["Cơm", "Thịt bò", "Dưa chua", "Hành tây"],
    allergies: [],
    nutritionalInfo: {
      calories: 480,
      protein: 22,
      carbs: 65,
      fat: 12,
    },
    feedback: {
      rating: 4.5,
      comments: 10,
      wastage: "Trung bình",
    },
    image: "https://i.imgur.com/JWxqcqR.jpg",
  },
];

export const menuLibrary = [
  {
    id: 1,
    name: "Thực đơn tuần 42/2023",
    description: "Thực đơn cân bằng dinh dưỡng với các món ăn phổ biến",
    dishes: 10,
    rating: 4.8,
    lastUsed: "10/10/2023",
  },
  {
    id: 2,
    name: "Thực đơn mùa hè",
    description: "Thực đơn nhẹ nhàng, tươi mát cho mùa hè",
    dishes: 12,
    rating: 4.5,
    lastUsed: "15/07/2023",
  },
  {
    id: 3,
    name: "Thực đơn đặc biệt",
    description: "Thực đơn cho các dịp lễ đặc biệt",
    dishes: 8,
    rating: 4.7,
    lastUsed: "02/09/2023",
  },
];
// Mock data for food library
export const foodLibrary = [
  {
    id: 1,
    name: "Cơm gà rau củ",
    category: "Bữa trưa",
    ingredients: ["Gạo lứt", "Thịt gà", "Cà rốt", "Bông cải xanh"],
    allergies: [],
    nutritionalInfo: {
      calories: 450,
      protein: 25,
      carbs: 60,
      fat: 8,
    },
    image: "https://i.imgur.com/wgJDypg.jpg",
  },
  {
    id: 2,
    name: "Bún chả cá",
    category: "Bữa trưa",
    ingredients: ["Bún", "Chả cá", "Rau sống", "Nước mắm pha"],
    allergies: ["Cá"],
    nutritionalInfo: {
      calories: 420,
      protein: 22,
      carbs: 55,
      fat: 10,
    },
    image: "https://i.imgur.com/QNXAyTp.jpg",
  },
  {
    id: 3,
    name: "Cơm sườn kho",
    category: "Bữa trưa",
    ingredients: ["Cơm trắng", "Sườn kho", "Canh rau ngót"],
    allergies: [],
    nutritionalInfo: {
      calories: 520,
      protein: 28,
      carbs: 65,
      fat: 15,
    },
    image: "https://i.imgur.com/t9oKhEo.jpg",
  },
  {
    id: 4,
    name: "Bún riêu cua",
    category: "Bữa trưa",
    ingredients: ["Bún", "Riêu cua", "Đậu hũ", "Rau sống", "Giá đỗ"],
    allergies: ["Hải sản"],
    nutritionalInfo: {
      calories: 450,
      protein: 20,
      carbs: 60,
      fat: 12,
    },
    image: "https://i.imgur.com/Fd7LCKk.jpg",
  },
  {
    id: 5,
    name: "Sữa chua & hoa quả",
    category: "Tráng miệng",
    ingredients: ["Sữa chua không đường", "Hoa quả tươi theo mùa"],
    allergies: ["Sữa"],
    nutritionalInfo: {
      calories: 150,
      protein: 5,
      carbs: 25,
      fat: 3,
    },
    image: "https://i.imgur.com/K8gDgTf.jpg",
  },
  {
    id: 6,
    name: "Bánh flan caramel",
    category: "Tráng miệng",
    ingredients: ["Trứng", "Sữa", "Đường", "Caramel"],
    allergies: ["Trứng", "Sữa"],
    nutritionalInfo: {
      calories: 180,
      protein: 5,
      carbs: 30,
      fat: 5,
    },
    image: "https://i.imgur.com/wHXtNAl.jpg",
  },
];
// Mock data for AI suggestions
export const aiSuggestions = [
  {
    id: 1,
    title: "Thực đơn cân bằng dinh dưỡng",
    description:
      "Thực đơn cân bằng với đầy đủ dinh dưỡng, phù hợp với học sinh tiểu học",
    dishes: [
      {
        name: "Cơm gà rau củ",
        day: "Thứ Hai",
      },
      {
        name: "Bún chả cá",
        day: "Thứ Ba",
      },
      {
        name: "Cơm sườn kho",
        day: "Thứ Tư",
      },
      {
        name: "Bún riêu cua",
        day: "Thứ Năm",
      },
      {
        name: "Cơm thịt kho trứng",
        day: "Thứ Sáu",
      },
    ],
    desserts: [
      {
        name: "Sữa chua & hoa quả",
        day: "Thứ Hai",
      },
      {
        name: "Bánh flan caramel",
        day: "Thứ Ba",
      },
      {
        name: "Chè đậu xanh",
        day: "Thứ Tư",
      },
      {
        name: "Trái cây theo mùa",
        day: "Thứ Năm",
      },
      {
        name: "Sữa đậu nành",
        day: "Thứ Sáu",
      },
    ],
  },
  {
    id: 2,
    title: "Thực đơn truyền thống Việt Nam",
    description:
      "Thực đơn với các món ăn truyền thống Việt Nam, giàu dinh dưỡng",
    dishes: [
      {
        name: "Phở gà",
        day: "Thứ Hai",
      },
      {
        name: "Cơm tấm sườn",
        day: "Thứ Ba",
      },
      {
        name: "Bún bò Huế",
        day: "Thứ Tư",
      },
      {
        name: "Cơm gà Hải Nam",
        day: "Thứ Năm",
      },
      {
        name: "Bánh cuốn",
        day: "Thứ Sáu",
      },
    ],
    desserts: [
      {
        name: "Chè trôi nước",
        day: "Thứ Hai",
      },
      {
        name: "Bánh chuối hấp",
        day: "Thứ Ba",
      },
      {
        name: "Chè bắp",
        day: "Thứ Tư",
      },
      {
        name: "Sữa chua nếp cẩm",
        day: "Thứ Năm",
      },
      {
        name: "Hoa quả dầm",
        day: "Thứ Sáu",
      },
    ],
  },
  {
    id: 3,
    title: "Thực đơn ít dầu mỡ",
    description:
      "Thực đơn giảm dầu mỡ, tập trung vào các món hấp, luộc và nướng",
    dishes: [
      {
        name: "Cơm gà hấp lá sen",
        day: "Thứ Hai",
      },
      {
        name: "Bún thịt nướng",
        day: "Thứ Ba",
      },
      {
        name: "Cơm cá hồi sốt chanh dây",
        day: "Thứ Tư",
      },
      {
        name: "Miến xào rau củ",
        day: "Thứ Năm",
      },
      {
        name: "Cơm trộn Hàn Quốc",
        day: "Thứ Sáu",
      },
    ],
    desserts: [
      {
        name: "Salad hoa quả",
        day: "Thứ Hai",
      },
      {
        name: "Sữa chua mật ong",
        day: "Thứ Ba",
      },
      {
        name: "Sinh tố bơ",
        day: "Thứ Tư",
      },
      {
        name: "Dưa hấu",
        day: "Thứ Năm",
      },
      {
        name: "Pudding táo",
        day: "Thứ Sáu",
      },
    ],
  },
];

// Mock data for shopping list items
export const shoppingItems = [
  {
    id: 1,
    name: "Thịt gà",
    category: "Thịt & Hải sản",
    quantity: 10,
    unit: "kg",
    status: "pending",
    urgency: "high",
    note: "Chọn thịt gà tươi, không đông lạnh",
    supplier: "Công ty Thực phẩm Sạch",
    estimatedCost: 850000,
  },
  {
    id: 2,
    name: "Cà rốt",
    category: "Rau củ",
    quantity: 8,
    unit: "kg",
    status: "purchased",
    urgency: "medium",
    note: "",
    supplier: "Nông trại Xanh",
    estimatedCost: 120000,
  },
  {
    id: 3,
    name: "Sữa tươi",
    category: "Sữa & Trứng",
    quantity: 20,
    unit: "lít",
    status: "outOfStock",
    urgency: "high",
    note: "Cần tìm nhà cung cấp khác",
    supplier: "Công ty Sữa Vinamilk",
    estimatedCost: 400000,
  },
  {
    id: 4,
    name: "Trứng gà",
    category: "Sữa & Trứng",
    quantity: 100,
    unit: "quả",
    status: "pending",
    urgency: "medium",
    note: "",
    supplier: "Trang trại Đồng Nai",
    estimatedCost: 350000,
  },
  {
    id: 5,
    name: "Gạo",
    category: "Nguyên liệu chính",
    quantity: 50,
    unit: "kg",
    status: "pending",
    urgency: "low",
    note: "Gạo Jasmine hoặc tương tự",
    supplier: "Công ty Gạo Miền Tây",
    estimatedCost: 1250000,
  },
];
// Mock data for previous shopping lists
export const previousLists = [
  {
    id: 1,
    date: "15/10/2023",
    items: 12,
    totalCost: "3,450,000 VND",
    status: "completed",
  },
  {
    id: 2,
    date: "08/10/2023",
    items: 15,
    totalCost: "4,120,000 VND",
    status: "completed",
  },
];
// Mock data for replacement suggestions
export const replacementSuggestions = [
  {
    id: 1,
    name: "Sữa tươi TH True Milk",
    supplier: "TH True Milk",
    estimatedCost: 22000,
    unit: "lít",
    availability: "Có sẵn",
  },
  {
    id: 2,
    name: "Sữa tươi Mộc Châu",
    supplier: "Mộc Châu Milk",
    estimatedCost: 20000,
    unit: "lít",
    availability: "Có sẵn",
  },
  {
    id: 3,
    name: "Sữa tươi Dutch Lady",
    supplier: "Dutch Lady",
    estimatedCost: 21000,
    unit: "lít",
    availability: "1-2 ngày",
  },
];

export const missionData: MissionItem[] = [
  {
    icon: Target,
    title: "Sứ mệnh",
    description:
      "Kết nối phụ huynh với cuộc sống học đường của con, mang đến sự an tâm và minh bạch trong việc chăm sóc dinh dưỡng",
  },
  {
    icon: Heart,
    title: "Giá trị cốt lõi",
    description:
      "Minh bạch, Tin cậy, Tiện lợi - Những giá trị chúng tôi hướng đến trong mỗi tính năng của EduMeal",
  },
  {
    icon: Award,
    title: "Tầm nhìn",
    description:
      "Trở thành nền tảng quản lý bữa ăn học đường hàng đầu, được tin dùng bởi hàng triệu phụ huynh",
  },
];

export const teamMembers = [
  { name: "Nguyễn Văn A", role: "CEO & Founder", avatar: "NVA" },
  { name: "Trần Thị B", role: "CTO", avatar: "TTB" },
  { name: "Lê Văn C", role: "Head of Product", avatar: "LVC" },
  { name: "Phạm Thị D", role: "Head of Design", avatar: "PTD" },
];

export const statsData = [
  { value: 50, label: "Trường học", suffix: "+" },
  { value: 5000, label: "Phụ huynh", suffix: "+" },
  { value: 10000, label: "Bữa ăn/ngày", suffix: "+" },
  { value: 99, label: "Hài lòng", suffix: "%" },
];

export const schools = [
  {
    id: 1,
    name: "Trường Tiểu học A",
    address: "123 Đường Nguyễn Huệ, Quận 1, TP. HCM",
    phone: "0123 456 789",
    email: "tieuhoca@edumeal.vn",
    students: 458,
    status: "active",
  },
  {
    id: 2,
    name: "Trường Tiểu học B",
    address: "456 Đường Lê Lợi, Quận 3, TP. HCM",
    phone: "0123 456 790",
    email: "tieuhocb@edumeal.vn",
    students: 325,
    status: "active",
  },
  {
    id: 3,
    name: "Trường Tiểu học Sunshine",
    address: "789 Đường Phạm Ngũ Lão, Quận 5, TP. HCM",
    phone: "0123 456 791",
    email: "sunshine@edumeal.vn",
    students: 512,
    status: "active",
  },
  {
    id: 4,
    name: "Trường Tiểu học Star Kids",
    address: "101 Đường Hai Bà Trưng, Quận 10, TP. HCM",
    phone: "0123 456 792",
    email: "starkids@edumeal.vn",
    students: 275,
    status: "pending",
  },
  {
    id: 5,
    name: "Trường Tiểu học Bright Future",
    address: "202 Đường 3/2, Quận Bình Thạnh, TP. HCM",
    phone: "0123 456 793",
    email: "brightfuture@edumeal.vn",
    students: 380,
    status: "active",
  },
];

export const stats = {
  teachers: {
    total: 24,
    growth: 2,
  },
  students: {
    total: 450,
    growth: 5,
  },
  classes: {
    total: 15,
    growth: 0,
  },
  attendance: {
    rate: 96,
    growth: 1,
  },
};
export const kitchenPurchases = [
    {
      id: 1,
      date: "15/11/2023",
      supplier: "Công ty Thực phẩm Sạch",
      amount: 5800000,
      status: "completed",
      items: 24,
    },
    {
      id: 2,
      date: "10/11/2023",
      supplier: "Chợ đầu mối Bình Điền",
      amount: 3200000,
      status: "completed",
      items: 18,
    },
    {
      id: 3,
      date: "05/11/2023",
      supplier: "Công ty TNHH Nông sản Việt",
      amount: 4500000,
      status: "pending",
      items: 32,
    },
  ];
export const recentActivities: RecentActivities = [
  {
    icon: UserPlus,
    text: "Giáo viên Nguyễn Thị Lan được thêm vào hệ thống",
    time: "2 phút trước",
    color: "bg-blue-500",
  },
  {
    icon: BookOpen,
    text: "Lớp 3A được tạo và phân công giáo viên",
    time: "1 giờ trước",
    color: "bg-blue-500",
  },
  {
    icon: Bell,
    text: "Thông báo về lịch họp phụ huynh được gửi",
    time: "3 giờ trước",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    text: "5 tài khoản phụ huynh mới được phê duyệt",
    time: "5 giờ trước",
    color: "bg-blue-500",
  },
  {
    icon: CheckCircle,
    text: "Báo cáo bữa ăn tháng 10 đã hoàn thành",
    time: "1 ngày trước",
    color: "bg-blue-500",
  },
];
