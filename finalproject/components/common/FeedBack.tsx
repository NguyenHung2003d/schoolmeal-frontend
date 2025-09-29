import { ParentFeedbackData } from "@/data/constants";
import { Star } from "lucide-react";

const ParentFeedbackSection = () => {
  const StarRating = ({ stars }: { stars: number }) => (
    <div className="flex gap-1 mb-5">
      {[
        ...Array(5).map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < stars ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            <Star />
          </span>
        )),
      ]}
    </div>
  );
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Phụ huynh nói gì về EduMeal
        </h2>

        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Chia sẻ từ phụ huynh về trải nghiệm sử dụng EduMeal để theo dõi bữa ăn
          và hoạt động của con
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ParentFeedbackData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <div className="absolute -top-4 right-6 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                {testimonial.rating}
              </div>

              <StarRating stars={testimonial.stars} />

              <div className="text-left mb-6 relative">
                <span className="text-3xl text-orange-500 font-bold absolute -top-2 -left-2">
                  "
                </span>
                <p className="text-gray-700 italic leading-relaxed pl-6">
                  {testimonial.text}
                </p>
                <span className="text-3xl text-orange-500 font-bold float-right">
                  "
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.author.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <div className="flex items-center gap-2 text-orange-600 font-medium text-sm mb-2">
                  <span>💡</span>
                  Phản hồi từ bé:
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
            <div className="text-gray-600">Phụ huynh tin tưởng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">99%</div>
            <div className="text-gray-600">Mức độ hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">5★</div>
            <div className="text-gray-600">Đánh giá trung bình</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentFeedbackSection;
