"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Edit,
  Trash,
  UserPlus,
  Upload,
  X,
  Info,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { ClassItem, Student } from "@/types";
import { classes, parents, students } from "@/data/constants";

export default function ManagerParents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [showClassStudentsModal, setShowClassStudentsModal] = useState(false);
  const [currentClass, setCurrentClass] = useState<ClassItem | null>(null);

  // Lọc phụ huynh
  const filteredParents = parents.filter(
    (parent) =>
      (parent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        parent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        parent.children.some((child: any) =>
          child.name.toLowerCase().includes(searchQuery.toLowerCase())
        )) &&
      (selectedStatus === "all" || parent.status === selectedStatus)
  );

  // Style trạng thái
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "active":
        return { text: "Hoạt động", className: "bg-green-100 text-green-800" };
      case "pending":
        return {
          text: "Chờ xác nhận",
          className: "bg-yellow-100 text-yellow-800",
        };
      case "inactive":
        return {
          text: "Không hoạt động",
          className: "bg-red-100 text-red-800",
        };
      default:
        return { text: status, className: "bg-gray-100 text-gray-800" };
    }
  };

  // Thêm học sinh
  const handleAddStudent = () => {
    const select = document.getElementById(
      "student-select"
    ) as HTMLSelectElement;
    if (select?.value) {
      const studentId = parseInt(select.value);
      const student = (students as Student[]).find((s) => s.id === studentId);
      if (student && !selectedStudents.some((s) => s.id === studentId)) {
        setSelectedStudents([...selectedStudents, student]);
      }
    }
  };

  // Xóa học sinh
  const handleRemoveStudent = (studentId: number) => {
    setSelectedStudents(selectedStudents.filter((s) => s.id !== studentId));
  };

  // Tạo tài khoản phụ huynh
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Tài khoản phụ huynh đã được tạo thành công!");
    setShowAddModal(false);
    setSelectedStudents([]);
  };

  // Mở danh sách học sinh theo lớp
  const handleOpenClassStudents = (classItem: ClassItem) => {
    setCurrentClass(classItem);
    setShowClassStudentsModal(true);
  };

  // Tạo tài khoản cho tất cả phụ huynh trong lớp
  const handleCreateAllAccounts = () => {
    if (!currentClass) return;
    alert(
      `Đang tạo tài khoản cho tất cả phụ huynh của lớp ${currentClass.name}...`
    );
    setTimeout(() => setShowClassStudentsModal(false), 1500);
  };

  // Lấy học sinh theo lớp
  const getClassStudents = (className: string): Student[] => {
    return students.filter((student: Student) => student.class === className);
  };

  // Đếm phụ huynh chưa có tài khoản
  const countParentsWithoutAccounts = (className: string) => {
    const classStudents = getClassStudents(className);
    return classStudents.filter((s) => !s.parent.hasAccount).length;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Quản lý tài khoản phụ huynh
          </h1>
          <p className="text-gray-600">
            Tạo và quản lý tài khoản cho phụ huynh học sinh
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center">
            <Upload size={16} className="mr-2" />
            Nhập Excel
          </Button>
          <Button
            onClick={() => setShowAddModal(true)}
            className="flex items-center"
          >
            <UserPlus size={16} className="mr-2" />
            Tạo tài khoản phụ huynh
          </Button>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
        <Info size={20} className="text-blue-500 mr-3 mt-0.5" />
        <div>
          <h3 className="font-medium text-blue-800 mb-1">
            Về tài khoản phụ huynh
          </h3>
          <p className="text-sm text-blue-700">
            Tài khoản phụ huynh cho phép theo dõi thông tin học tập, bữa ăn và
            hoạt động của con em. Mỗi tài khoản có thể quản lý nhiều học sinh và
            nhận email khi được tạo.
          </p>
        </div>
      </div>

      {/* Tạo theo lớp */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Tạo tài khoản theo lớp</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {classes.map((classItem: ClassItem) => {
            const pending = countParentsWithoutAccounts(classItem.name);
            return (
              <div
                key={classItem.id}
                className={`border rounded-lg p-4 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all ${
                  pending > 0 ? "bg-red-50" : "bg-white"
                }`}
                onClick={() => handleOpenClassStudents(classItem)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">
                      Lớp {classItem.name}
                    </h3>
                  </div>
                  <div className="p-2 rounded-full bg-blue-50">
                    <ChevronRight size={16} className="text-blue-500" />
                  </div>
                </div>
                {pending > 0 && (
                  <div className="mt-3 flex items-center text-red-500 text-sm">
                    <AlertCircle size={14} className="mr-1" />
                    <span>{pending} phụ huynh chưa có tài khoản</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bộ lọc + bảng */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Tìm kiếm phụ huynh hoặc học sinh..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter size={16} className="text-gray-500" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Hoạt động</option>
              <option value="pending">Chờ xác nhận</option>
              <option value="inactive">Không hoạt động</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bảng phụ huynh */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Phụ huynh
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Liên hệ
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Học sinh
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Ngày tham gia
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Trạng thái
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredParents.map((parent: any) => {
                const statusStyle = getStatusStyle(parent.status);
                return (
                  <tr key={parent.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-medium">
                          {parent.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-800">
                            {parent.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-gray-600">
                        {parent.email}
                      </div>
                      <div className="text-sm text-gray-600">
                        {parent.phone}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {parent.children.map((c: any, i: number) => (
                        <div key={i} className="text-sm text-gray-600">
                          {c.name} - Lớp {c.class}
                        </div>
                      ))}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {parent.joinDate}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyle.className}`}
                      >
                        {statusStyle.text}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                          <Edit size={18} />
                        </button>
                        <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal lớp */}
      {showClassStudentsModal && currentClass && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Danh sách học sinh lớp {currentClass.name}
              </h2>
              <button
                onClick={() => setShowClassStudentsModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nội dung */}
            <div className="overflow-y-auto flex-1 p-6">
              {(() => {
                const classStudents = getClassStudents(currentClass.name);
                return classStudents.length > 0 ? (
                  <div>
                    {classStudents.map((student) => (
                      <div
                        key={student.id}
                        className={`border rounded-lg p-4 mb-3 flex justify-between ${
                          student.parent.hasAccount
                            ? "bg-green-50 border-green-100"
                            : "bg-red-50 border-red-100"
                        }`}
                      >
                        <div>
                          <p className="font-medium text-gray-800">
                            {student.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {student.gender} | {student.dob}
                          </p>
                        </div>
                        <div className="text-right text-sm text-gray-700">
                          <p>{student.parent.name}</p>
                          <p>{student.parent.email}</p>
                          <p>{student.parent.phone}</p>
                          {!student.parent.hasAccount && (
                            <button
                              className="mt-2 px-2 py-1 bg-blue-100 rounded text-blue-600 text-xs"
                              onClick={() =>
                                alert(
                                  `Tạo tài khoản cho ${student.parent.name}`
                                )
                              }
                            >
                              <UserPlus size={12} className="inline mr-1" />
                              Tạo tài khoản
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-6">
                    Không có học sinh trong lớp này
                  </p>
                );
              })()}
            </div>

            {/* Footer */}
            <div className="p-6 border-t flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Tổng số: {getClassStudents(currentClass.name).length} học sinh |{" "}
                {countParentsWithoutAccounts(currentClass.name)} phụ huynh chưa
                có tài khoản
              </p>
              <Button
                onClick={handleCreateAllAccounts}
                disabled={countParentsWithoutAccounts(currentClass.name) === 0}
                className="flex items-center"
              >
                <UserPlus size={16} className="mr-2" />
                Tạo tất cả tài khoản
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
