import { Features, FoodItem, ParentFeedback } from "@/types";

export const images = [
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
    image: "/anh_banner5.png",
  },
];

export const slides = [
  {
    image: "/slides_1.jpg",
  },
  {
    image: "/slides_2.jpg",
  },
  {
    image: "/slides_3.jpg",
  },
  {
    image: "/slides_4.jpg",
  },
];

export const features: Features[] = [
  {
    title: "Quản lý thực đơn linh hoạt",
    desc: "Nhà trường dễ dàng xây dựng và cập nhật thực đơn theo ngày, tuần hoặc tháng, phụ huynh có thể theo dõi mọi lúc.",
    image: "/features_1.jpg",
    badge: "Tiện lợi",
    features: [
      "Xây dựng thực đơn theo tuần/tháng",
      "Điều chỉnh món ăn nhanh chóng",
      "Tích hợp dị ứng/thói quen ăn uống",
      "Thông báo thay đổi tức thì",
    ],
  },
  {
    title: "Thông tin dinh dưỡng rõ ràng",
    desc: "Mỗi món ăn đều hiển thị chi tiết thành phần, năng lượng và giá trị dinh dưỡng, giúp phụ huynh yên tâm hơn.",
    image: "/hoc_ba.jpg",
    badge: "Theo dõi sức khỏe",
    features: [
      "Chi tiết thành phần dinh dưỡng",
      "Tính toán calo và dưỡng chất",
      "Đề xuất khẩu phần hợp lý",
      "Bảng so sánh dinh dưỡng trực quan",
    ],
  },
  {
    title: "Kết nối phụ huynh - nhà trường",
    desc: "Phụ huynh nhận thông báo, hình ảnh hoạt động và cập nhật trực tiếp từ nhà trường trong môi trường an toàn.",
    image: "/thu_vien_anh.jpg",
    badge: "An toàn & Bảo mật",
    features: [
      "Thông báo nhanh chóng từ giáo viên",
      "Thư viện ảnh hoạt động của học sinh",
      "Tin nhắn/bình luận bảo mật",
      "Chia sẻ riêng tư với gia đình",
    ],
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

export type { Features, FoodItem };
