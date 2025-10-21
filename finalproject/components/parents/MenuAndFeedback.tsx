"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useSelectedChild } from "@/context/SelectedChildContext";
import { menuDataWeeks } from "@/data/constants"; // Mỗi tuần chứa 5 ngày
import { MessageSquare } from "lucide-react";

export default function MenuAndFeedback() {
  const { selectedChild } = useSelectedChild();
  const [activeWeek, setActiveWeek] = useState("week1");
  const [selectedDay, setSelectedDay] = useState<any | null>(null);
  const [feedbackType, setFeedbackType] = useState("");
  const [feedbackContent, setFeedbackContent] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleDayClick = (day: any) => {
    setSelectedDay(day);
    setOpenModal(true);
  };

  const handleSubmitFeedback = () => {
    alert(
      `Gửi phản hồi thành công cho ${selectedDay.day} - ${selectedDay.date}:\n${feedbackContent}`
    );
    setFeedbackContent("");
    setFeedbackType("");
    setOpenModal(false);
  };

  if (!selectedChild) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
        Vui lòng chọn học sinh từ danh sách bên trái.
      </div>
    );
  }

  const currentWeekData = menuDataWeeks[activeWeek];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Thực đơn & Phản hồi</h2>

      {/* Tabs chọn tuần */}
      <Tabs defaultValue="week1" onValueChange={setActiveWeek}>
        <TabsList className="bg-orange-50">
          <TabsTrigger
            value="week1"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Tuần 1
          </TabsTrigger>
          <TabsTrigger
            value="week2"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Tuần 2
          </TabsTrigger>
        </TabsList>

        {/* Lịch 5 cột */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
          {currentWeekData.map((day: any, index: number) => (
            <div
              key={index}
              onClick={() => handleDayClick(day)}
              className="bg-white rounded-lg shadow cursor-pointer p-4 border hover:border-orange-500 transition-all"
            >
              <h4 className="text-lg font-semibold text-orange-600">
                {day.day}
                <span className="block text-gray-500 text-sm">{day.date}</span>
              </h4>
              <div className="mt-3 space-y-1 text-sm">
                <p>
                  🌅 <strong>Bữa sáng:</strong> {day.details.morning[0]}
                </p>
                <p>
                  ☀️ <strong>Bữa trưa:</strong> {day.details.lunch[0]}
                </p>
                <p>
                  🌙 <strong>Bữa chiều:</strong> {day.details.afternoon[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal ShadCN */}
        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-orange-600">
                {selectedDay?.day} - {selectedDay?.date}
              </DialogTitle>
              <p className="text-sm text-gray-500">
                Học sinh: {selectedChild.name}
              </p>
            </DialogHeader>

            <Tabs defaultValue="details">
              <TabsList className="mb-4 bg-orange-50">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Chi tiết thực đơn
                </TabsTrigger>
                <TabsTrigger
                  value="feedback"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white flex items-center gap-1"
                >
                  <MessageSquare size={16} /> Phản hồi
                </TabsTrigger>
              </TabsList>

              {/* Tab Chi tiết */}
              <TabsContent value="details">
                {selectedDay ? (
                  <div className="space-y-6">
                    {["morning", "lunch", "afternoon"].map((meal, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-orange-600 mb-2">
                          {meal === "morning"
                            ? "🌅 Bữa sáng"
                            : meal === "lunch"
                            ? "☀️ Bữa trưa"
                            : "🌙 Bữa chiều"}
                        </h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {selectedDay.details?.[meal]?.map(
                            (item: string, i: number) => (
                              <li key={i}>{item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    ))}

                    {selectedDay.details?.nutrition && (
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-700 mb-2">
                          Thông tin dinh dưỡng
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          {Object.entries(selectedDay.details.nutrition).map(
                            ([key, value]) => (
                              <div key={key}>
                                <p className="text-xl font-bold text-orange-600">
                                  {value}
                                </p>
                                <p className="text-sm capitalize text-gray-600">
                                  {key}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-center text-gray-500">Không có dữ liệu!</p>
                )}
              </TabsContent>

              {/* Tab Feedback */}
              <TabsContent value="feedback">
                <div className="space-y-4">
                  <label className="block font-medium">
                    Chọn loại phản hồi
                  </label>
                  <select
                    className="border p-2 rounded-lg w-full"
                    value={feedbackType}
                    onChange={(e) => setFeedbackType(e.target.value)}
                  >
                    <option value="">-- Chọn --</option>
                    <option value="quality">Chất lượng món ăn</option>
                    <option value="service">Thái độ phục vụ</option>
                    <option value="nutrition">Khẩu phần & dinh dưỡng</option>
                  </select>

                  <textarea
                    className="w-full border rounded-lg p-2"
                    rows={4}
                    placeholder="Nhập nội dung phản hồi..."
                    value={feedbackContent}
                    onChange={(e) => setFeedbackContent(e.target.value)}
                  />

                  <Button
                    disabled={!feedbackType || !feedbackContent}
                    onClick={handleSubmitFeedback}
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                  >
                    Gửi phản hồi
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </Tabs>
    </div>
  );
}
