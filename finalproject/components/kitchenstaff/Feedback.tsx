'use client'
import React, { useState } from "react";
import {
  MessageCircle,
  Search,
  Filter,
  Star,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  ThumbsUp,
  FileText,
  BarChart2,
  AlertCircle,
  Clock,
  User,
  X,
} from "lucide-react";
import { feedbackItems, parentFeedbacks } from "@/data/constants";

export function Feedback() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedSeverity, setSelectedSeverity] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);
  const [sortBy, setSortBy] = useState("newest");
  const [parentFeedbackTab, setParentFeedbackTab] = useState("recent");
  
  // Parent feedback statistics
  const averageRating =
    parentFeedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) /
    parentFeedbacks.length;
  const ratingCounts = [0, 0, 0, 0, 0]; // For 1-5 stars
  parentFeedbacks.forEach((feedback) => {
    ratingCounts[feedback.rating - 1]++;
  });
  // Filter feedback based on active tab and severity
  const filteredFeedback = feedbackItems
    .filter((item) => {
      if (activeTab === "all") return true;
      if (activeTab === "pending") return item.status === "pending";
      if (activeTab === "inProgress") return item.status === "inProgress";
      if (activeTab === "resolved") return item.status === "resolved";
      return true;
    })
    .filter((item) => {
      if (selectedSeverity === "all") return true;
      return item.severity === selectedSeverity;
    });
  // Sort feedback
  const sortedFeedback = [...filteredFeedback].sort((a, b) => {
    if (sortBy === "newest") {
      return (
        new Date(b.date + " " + b.time).getTime() -
        new Date(a.date + " " + a.time).getTime()
      );
    } else if (sortBy === "oldest") {
      return (
        new Date(a.date + " " + a.time).getTime() -
        new Date(b.date + " " + b.time).getTime()
      );
    } else if (sortBy === "highSeverity") {
      const severityOrder = {
        high: 3,
        medium: 2,
        low: 1,
      };
      return (
        severityOrder[b.severity as keyof typeof severityOrder] -
        severityOrder[a.severity as keyof typeof severityOrder]
      );
    }
    return 0;
  });
  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(sortedFeedback.length / itemsPerPage);
  const paginatedFeedback = sortedFeedback.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleViewFeedback = (feedback: any) => {
    setSelectedFeedback(feedback);
    setIsDetailModalOpen(true);
  };
  // Calculate feedback statistics
  const pendingCount = feedbackItems.filter(
    (item) => item.status === "pending"
  ).length;
  const inProgressCount = feedbackItems.filter(
    (item) => item.status === "inProgress"
  ).length;
  const resolvedCount = feedbackItems.filter(
    (item) => item.status === "resolved"
  ).length;
  const highSeverityCount = feedbackItems.filter(
    (item) => item.severity === "high"
  ).length;
  // Filter parent feedback based on tab
  const filteredParentFeedback = parentFeedbacks.filter((feedback) => {
    if (parentFeedbackTab === "recent") return true;
    if (parentFeedbackTab === "positive") return feedback.rating >= 4;
    if (parentFeedbackTab === "negative") return feedback.rating <= 3;
    return true;
  });
  return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Phản hồi & Đánh giá
          </h1>
        </div>
        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Phản hồi mới
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  {pendingCount}
                </h3>
                <p className="mt-2 text-sm text-gray-600">Chưa xử lý</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <MessageCircle size={24} className="text-orange-500" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Đang xử lý
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  {inProgressCount}
                </h3>
                <p className="mt-2 text-sm text-gray-600">Cần hoàn thành</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock size={24} className="text-blue-500" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Đã giải quyết
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  {resolvedCount}
                </h3>
                <p className="mt-2 text-sm text-gray-600">Phản hồi đã xử lý</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle size={24} className="text-green-500" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Mức độ nghiêm trọng cao
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  {highSeverityCount}
                </h3>
                <p className="mt-2 text-sm text-gray-600">Cần ưu tiên xử lý</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertTriangle size={24} className="text-red-500" />
              </div>
            </div>
          </div>
        </div>
        {/* Parent Feedback & Ratings section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium flex items-center">
              <User className="mr-2 text-orange-500" size={20} />
              Đánh giá từ phụ huynh
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Rating summary */}
            <div className="bg-orange-50 rounded-lg p-5 border border-orange-100">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Tổng quan đánh giá
              </h3>
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold text-orange-500 mr-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={
                        star <= Math.round(averageRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({parentFeedbacks.length} đánh giá)
                </span>
              </div>
              {/* Rating breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center">
                    <div className="w-8 text-sm text-gray-600">{star} sao</div>
                    <div className="flex-1 mx-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{
                            width: `${
                              (ratingCounts[star - 1] /
                                parentFeedbacks.length) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 w-8 text-right">
                      {ratingCounts[star - 1]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Đánh giá cao nhất:</span>
                  <span className="font-medium">Cơm gà rau củ</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Đánh giá thấp nhất:</span>
                  <span className="font-medium">Bún riêu cua</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Phản hồi tích cực:</span>
                  <span className="font-medium text-green-600">85%</span>
                </div>
              </div>
            </div>
            {/* Parent feedback list */}
            <div className="lg:col-span-2">
              <div className="flex mb-4 border-b border-gray-200">
                <button
                  onClick={() => setParentFeedbackTab("recent")}
                  className={`px-4 py-2 text-sm font-medium ${
                    parentFeedbackTab === "recent"
                      ? "border-b-2 border-orange-500 text-orange-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Gần đây
                </button>
                <button
                  onClick={() => setParentFeedbackTab("positive")}
                  className={`px-4 py-2 text-sm font-medium ${
                    parentFeedbackTab === "positive"
                      ? "border-b-2 border-orange-500 text-orange-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Tích cực
                </button>
                <button
                  onClick={() => setParentFeedbackTab("negative")}
                  className={`px-4 py-2 text-sm font-medium ${
                    parentFeedbackTab === "negative"
                      ? "border-b-2 border-orange-500 text-orange-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Cần cải thiện
                </button>
              </div>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {filteredParentFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                          <img
                            src={feedback.parent.avatar}
                            alt={feedback.parent.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">
                            {feedback.parent.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            Phụ huynh của {feedback.parent.child} - Lớp{" "}
                            {feedback.parent.class}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className={
                              star <= feedback.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-700 text-sm">
                        {feedback.comment}
                      </p>
                      {feedback.childFeedback && (
                        <div className="mt-2 bg-gray-50 p-3 rounded-lg text-sm">
                          <div className="flex items-center text-gray-600 mb-1">
                            <User size={14} className="mr-1" />
                            <span className="font-medium">Phản hồi từ bé:</span>
                          </div>
                          <p className="text-gray-700">
                            {feedback.childFeedback}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        {feedback.date} • Món: {feedback.dish}
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-xs flex items-center text-green-600 hover:text-green-700">
                          <ThumbsUp size={14} className="mr-1" />
                          Hữu ích
                        </button>
                        <button className="text-xs flex items-center text-blue-600 hover:text-blue-700">
                          <MessageSquare size={14} className="mr-1" />
                          Phản hồi
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Feedback list */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tabs and filters */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "all"
                    ? "border-b-2 border-orange-500 text-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Tất cả phản hồi
              </button>
              <button
                onClick={() => setActiveTab("pending")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "pending"
                    ? "border-b-2 border-orange-500 text-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Chưa xử lý
                {pendingCount > 0 && (
                  <span className="ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                    {pendingCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("inProgress")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "inProgress"
                    ? "border-b-2 border-orange-500 text-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Đang xử lý
              </button>
              <button
                onClick={() => setActiveTab("resolved")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "resolved"
                    ? "border-b-2 border-orange-500 text-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Đã giải quyết
              </button>
            </nav>
          </div>
          {/* Search and filters */}
          <div className="p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Tìm kiếm phản hồi..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <div className="flex items-center space-x-2">
              <select
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
              >
                <option value="all">Tất cả mức độ</option>
                <option value="high">Nghiêm trọng</option>
                <option value="medium">Trung bình</option>
                <option value="low">Thấp</option>
              </select>
              <select
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Mới nhất</option>
                <option value="oldest">Cũ nhất</option>
                <option value="highSeverity">Mức độ nghiêm trọng</option>
              </select>
              <button className="p-2 text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                <Filter size={18} />
              </button>
            </div>
          </div>
          {/* Feedback items */}
          <div className="divide-y divide-gray-200">
            {paginatedFeedback.length > 0 ? (
              paginatedFeedback.map((feedback) => (
                <div
                  key={feedback.id}
                  className={`p-6 hover:bg-gray-50 cursor-pointer ${
                    feedback.severity === "high"
                      ? "border-l-4 border-red-500"
                      : feedback.severity === "medium"
                      ? "border-l-4 border-orange-500"
                      : ""
                  }`}
                  onClick={() => handleViewFeedback(feedback)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                        <img
                          src={
                            feedback.sender.avatar ||
                            "https://via.placeholder.com/40"
                          }
                          alt={feedback.sender.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {feedback.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {feedback.description.length > 100
                            ? feedback.description.substring(0, 100) + "..."
                            : feedback.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-gray-500">
                            {feedback.sender.name} ({feedback.sender.role})
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-xs text-gray-500">
                            {feedback.date} {feedback.time}
                          </span>
                          {feedback.category && (
                            <>
                              <span className="mx-2 text-gray-300">•</span>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full ${
                                  feedback.category === "food"
                                    ? "bg-blue-100 text-blue-800"
                                    : feedback.category === "allergy"
                                    ? "bg-red-100 text-red-800"
                                    : feedback.category === "compliment"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {feedback.category === "food"
                                  ? "Thức ăn"
                                  : feedback.category === "allergy"
                                  ? "Dị ứng"
                                  : feedback.category === "compliment"
                                  ? "Khen ngợi"
                                  : "Đề xuất"}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          feedback.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : feedback.status === "inProgress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {feedback.status === "pending"
                          ? "Chưa xử lý"
                          : feedback.status === "inProgress"
                          ? "Đang xử lý"
                          : "Đã giải quyết"}
                      </span>
                      <span
                        className={`mt-2 flex items-center text-xs ${
                          feedback.severity === "high"
                            ? "text-red-600"
                            : feedback.severity === "medium"
                            ? "text-orange-600"
                            : "text-green-600"
                        }`}
                      >
                        {feedback.severity === "high" ? (
                          <>
                            <AlertTriangle size={14} className="mr-1" />
                            Nghiêm trọng
                          </>
                        ) : feedback.severity === "medium" ? (
                          <>
                            <AlertCircle size={14} className="mr-1" />
                            Trung bình
                          </>
                        ) : (
                          <>
                            <MessageCircle size={14} className="mr-1" />
                            Thấp
                          </>
                        )}
                      </span>
                      {feedback.responses.length > 0 && (
                        <span className="mt-2 text-xs text-gray-500 flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          {feedback.responses.length} phản hồi
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <MessageCircle
                  size={48}
                  className="text-gray-300 mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Không có phản hồi nào
                </h3>
                <p className="text-gray-500">
                  Không tìm thấy phản hồi phù hợp với bộ lọc hiện tại
                </p>
              </div>
            )}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200">
              <div className="text-sm text-gray-500">
                Hiển thị {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, sortedFeedback.length)}{" "}
                trong {sortedFeedback.length} phản hồi
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className={`p-2 rounded-lg border ${
                    currentPage > 1
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage <= 1}
                >
                  <ArrowLeft size={16} />
                </button>
                {Array.from(
                  {
                    length: totalPages,
                  },
                  (_, i) => i + 1
                ).map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded-lg ${
                      currentPage === page
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className={`p-2 rounded-lg border ${
                    currentPage < totalPages
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage >= totalPages}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Feedback detail modal */}
        {isDetailModalOpen && selectedFeedback && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-800">
                        {selectedFeedback.title}
                      </h3>
                      <span
                        className={`ml-3 px-2 py-0.5 text-xs font-medium rounded-full ${
                          selectedFeedback.severity === "high"
                            ? "bg-red-100 text-red-800"
                            : selectedFeedback.severity === "medium"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {selectedFeedback.severity === "high"
                          ? "Nghiêm trọng"
                          : selectedFeedback.severity === "medium"
                          ? "Trung bình"
                          : "Thấp"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedFeedback.date} {selectedFeedback.time} • Món:{" "}
                      {selectedFeedback.dish}
                    </p>
                  </div>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setIsDetailModalOpen(false)}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-6">
                <div className="flex items-start mb-6">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={
                        selectedFeedback.sender.avatar ||
                        "https://via.placeholder.com/40"
                      }
                      alt={selectedFeedback.sender.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900">
                        {selectedFeedback.sender.name}
                      </h4>
                      <span className="ml-2 text-sm text-gray-500">
                        ({selectedFeedback.sender.role})
                      </span>
                    </div>
                    <div className="mt-2 bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-800">
                        {selectedFeedback.description}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span>
                        {selectedFeedback.date} {selectedFeedback.time}
                      </span>
                      <span className="mx-2">•</span>
                      <span
                        className={`px-2 py-0.5 rounded-full ${
                          selectedFeedback.category === "food"
                            ? "bg-blue-100 text-blue-800"
                            : selectedFeedback.category === "allergy"
                            ? "bg-red-100 text-red-800"
                            : selectedFeedback.category === "compliment"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {selectedFeedback.category === "food"
                          ? "Thức ăn"
                          : selectedFeedback.category === "allergy"
                          ? "Dị ứng"
                          : selectedFeedback.category === "compliment"
                          ? "Khen ngợi"
                          : "Đề xuất"}
                      </span>
                    </div>
                  </div>
                </div>
                {selectedFeedback.responses.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">
                      Phản hồi ({selectedFeedback.responses.length})
                    </h4>
                    <div className="space-y-4">
                      {selectedFeedback.responses.map((response: any) => (
                        <div key={response.id} className="flex items-start">
                          <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="font-medium text-orange-600">
                              NT
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h5 className="font-medium text-gray-900">
                                {response.user.name}
                              </h5>
                              <span className="ml-2 text-xs text-gray-500">
                                ({response.user.role})
                              </span>
                            </div>
                            <div className="mt-1 bg-orange-50 rounded-lg p-3">
                              <p className="text-gray-800 text-sm">
                                {response.text}
                              </p>
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              {response.date} {response.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Trả lời phản hồi
                  </h4>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows={3}
                    placeholder="Nhập phản hồi của bạn..."
                  ></textarea>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">
                    Cập nhật trạng thái
                  </h4>
                  <div className="flex space-x-3">
                    <button
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        selectedFeedback.status === "pending"
                          ? "bg-yellow-500 text-white"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      }`}
                    >
                      Chưa xử lý
                    </button>
                    <button
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        selectedFeedback.status === "inProgress"
                          ? "bg-blue-500 text-white"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      }`}
                    >
                      Đang xử lý
                    </button>
                    <button
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        selectedFeedback.status === "resolved"
                          ? "bg-green-500 text-white"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }`}
                    >
                      Đã giải quyết
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-between">
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
                    <FileText size={18} className="mr-2" />
                    Xuất báo cáo
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
                    <BarChart2 size={18} className="mr-2" />
                    Xem thống kê
                  </button>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    Đóng
                  </button>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    Gửi phản hồi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
