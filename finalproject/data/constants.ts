import { Features, ParentFeedback } from "@/types";

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
      bgColor: "bg-blue-50",
      image: "/api/placeholder/400/300",
      details: {
        title: "Đặt Món Online Thông Minh",
        description: "Hệ thống đặt món hiện đại giúp phụ huynh và học sinh dễ dàng chọn bữa trưa yêu thích chỉ với vài thao tác đơn giản.",
        benefits: [
          "Menu được cập nhật hàng tuần với đa dạng món ăn",
          "Đặt trước để tránh hết suất, không cần xếp hàng",
          "Lưu món yêu thích để đặt lại nhanh chóng",
          "Thông báo tự động khi có món mới hoặc khuyến mãi"
        ],
        mockupFeatures: [
          "Giao diện thân thiện, dễ sử dụng",
          "Tìm kiếm món ăn theo danh mục",
          "Xem trước hình ảnh và mô tả chi tiết",
          "Đặt lịch trước cho cả tuần"
        ]
      }
    },
    {
      id: 2,
      title: "Theo Dõi Dinh Dưỡng",
      subtitle: "Cảnh báo dị ứng, gợi ý món lành mạnh",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      image: "/api/placeholder/400/300",
      details: {
        title: "Theo Dõi Dinh Dưỡng Toàn Diện",
        description: "AI thông minh phân tích thói quen ăn uống và đưa ra những gợi ý dinh dưỡng phù hợp cho từng trẻ.",
        benefits: [
          "Cảnh báo tự động về các thành phần gây dị ứng",
          "Phân tích calo và chất dinh dưỡng hàng ngày",
          "Gợi ý menu cân bằng protein, vitamin, khoáng chất",
          "Báo cáo dinh dưỡng chi tiết gửi về phụ huynh"
        ],
        nutritionFeatures: [
          "Biểu đồ dinh dưỡng trực quan",
          "Cảnh báo thiếu hụt vitamin",
          "Theo dõi lượng nước uống",
          "Tư vấn từ chuyên gia dinh dưỡng"
        ]
      }
    },
    {
      id: 3,
      title: "Thanh Toán An Toàn",
      subtitle: "Nạp tiền dễ dàng, báo cáo chi tiêu cho phụ huynh",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      image: "/api/placeholder/400/300",
      details: {
        title: "Ví Điện Tử An Toàn & Tiện Lợi",
        description: "Hệ thống thanh toán bảo mật cao với nhiều phương thức nạp tiền và theo dõi chi tiêu minh bạch.",
        benefits: [
          "Nạp tiền qua banking, ví điện tử, thẻ cào",
          "Bảo mật 2 lớp, mã hóa thông tin thanh toán",
          "Báo cáo chi tiêu chi tiết theo ngày/tuần/tháng",
          "Cảnh báo khi số dư thấp hoặc chi tiêu bất thường"
        ],
        paymentFeatures: [
          "Hỗ trợ tất cả ngân hàng lớn",
          "Cashback cho giao dịch thường xuyên",
          "Kiểm soát hạn mức chi tiêu",
          "Lịch sử giao dịch minh bạch"
        ]
      }
    },
    {
      id: 4,
      title: "Dành Cho Học Sinh",
      subtitle: "Chọn món yêu thích qua app, nhận badge vui khi ăn đủ",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      image: "/api/placeholder/400/300",
      details: {
        title: "Trải Nghiệm Vui Nhộn Cho Học Sinh",
        description: "Ứng dụng được thiết kế đặc biệt để tạo động lực cho trẻ em có thói quen ăn uống lành mạnh.",
        benefits: [
          "Giao diện game hóa với avatar và level up",
          "Nhận badge khi hoàn thành thử thách dinh dưỡng",
          "Bảng xếp hạng lớp về việc ăn uống lành mạnh",
          "Mini-game giáo dục về dinh dưỡng và sức khỏe"
        ],
        studentFeatures: [
          "Tạo avatar cá nhân độc đáo",
          "Thử thách ăn uống hàng ngày",
          "Chia sẻ thành tích với bạn bè",
          "Quà tặng khi đạt mục tiêu"
        ]
      }
    }
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
