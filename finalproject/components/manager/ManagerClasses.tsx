import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash,
  Users,
  BookOpen,
  UserPlus,
  Download,
  Upload,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  FileText,
  CheckCircle,
  AlertCircle,
  X,
  Mail,
  Phone,
  User,
  Lock,
  Eye,
  EyeOff,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { classes, studentsData, teachers } from "@/data/constants";
import { ClassItem, ClassStudent, Student } from "@/types";

export default function ManagerClassesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2023-2024");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [showStudentsModal, setShowStudentsModal] = useState(false);
  const [currentClassStudents, setCurrentClassStudents] = useState<{
    class: ClassItem;
    students: ClassStudent[];
  } | null>(null);
  const [showPasswords, setShowPasswords] = useState<Record<number, boolean>>(
    {}
  );

  // Filter classes based on search query and selected filters
  const filteredClasses = classes.filter(
    (cls) =>
      cls.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedGrade === "all" || cls.grade === parseInt(selectedGrade)) &&
      cls.academicYear === selectedYear
  );
  // Handle assign teacher to class
  const handleAssignTeacher = (classItem: ClassItem) => {
    setSelectedClass(classItem);
    setShowAssignModal(true);
  };
  // Handle view students list
  const handleViewStudents = (classItem: ClassItem) => {
    setCurrentClassStudents({
      class: classItem,
      students: studentsData[classItem.name] || [],
    });
    setShowStudentsModal(true);
  };
  // Handle create all accounts
  const handleCreateAllAccounts = () => {
    // In a real application, this would call an API to create accounts
    alert("Đang tạo tài khoản cho tất cả học sinh...");
    // Close modal after a short delay to simulate processing
    setTimeout(() => {
      setShowStudentsModal(false);
    }, 1500);
  };
  // Toggle password visibility
  const togglePasswordVisibility = (studentId: number) => {
    setShowPasswords((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }));
  };
  // Handle create parent account
  const handleCreateParentAccount = (studentId: number, parentName: string) => {
    alert(`Đang tạo tài khoản cho phụ huynh ${parentName}...`);
    // In a real application, this would call an API to create an account
  };
  // Handle link parent account
  const handleLinkParentAccount = (studentId: number, parentName: string) => {
    alert(
      `Đang liên kết tài khoản của phụ huynh ${parentName} với học sinh này...`
    );
    // In a real application, this would call an API to link the account
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Quản lý lớp học</h1>
          <p className="text-gray-600">
            Tạo lớp học và phân công giáo viên chủ nhiệm
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="flex items-center"
            onClick={() => {}}
          >
            <Upload size={16} className="mr-2" />
            Nhập Excel
          </Button>
          <Button
            onClick={() => setShowAddModal(true)}
            className="flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Tạo lớp học
          </Button>
        </div>
      </div>
      {/* Academic year selector */}
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-medium">Năm học:</h2>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2023-2024">2023 - 2024</option>
            <option value="2022-2023">2022 - 2023</option>
            <option value="2021-2022">2021 - 2022</option>
          </select>
        </div>
      </div>
      {/* Filters and search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Tìm kiếm lớp học..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center cursor-pointer hover:bg-gray-50">
              <Filter size={16} className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-700">Lọc</span>
            </div>
            <select
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="all">Tất cả khối</option>
              <option value="1">Khối 1</option>
              <option value="2">Khối 2</option>
              <option value="3">Khối 3</option>
              <option value="4">Khối 4</option>
              <option value="5">Khối 5</option>
            </select>
            <button className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
              <Download size={16} className="mr-1" />
              Xuất Excel
            </button>
          </div>
        </div>
      </div>
      {/* Classes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Create new album card */}
        <div
          className="bg-white rounded-lg shadow-sm border border-dashed border-gray-300 flex flex-col items-center justify-center p-6 h-64 hover:border-orange-400 transition-colors cursor-pointer"
          onClick={() => setShowAddModal(true)}
        >
          <div className="bg-orange-100 rounded-full p-4 mb-3">
            <Plus size={24} className="text-orange-500" />
          </div>
          <p className="font-medium text-gray-800">Tạo lớp học mới</p>
          <p className="text-sm text-gray-500 mt-1">Thêm lớp học và học sinh</p>
        </div>
        {/* Class cards */}
        {filteredClasses.map((cls) => (
          <div
            key={cls.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Lớp {cls.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Chủ nhiệm: {cls.teacher}
                  </p>
                </div>
                <div
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cls.grade === 1
                      ? "bg-blue-100 text-blue-800"
                      : cls.grade === 2
                      ? "bg-green-100 text-green-800"
                      : cls.grade === 3
                      ? "bg-purple-100 text-purple-800"
                      : cls.grade === 4
                      ? "bg-orange-100 text-orange-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  Khối {cls.grade}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-2">
                      <Users size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Tổng số học sinh</p>
                      <p className="font-bold">{cls.students}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-2">
                      <BookOpen size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phòng học</p>
                      <p className="font-bold">{cls.room}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                    >
                      {i < 3 ? (
                        <img
                          src={`https://i.imgur.com/wgJDypg${
                            i === 0 ? "" : i === 1 ? ".jpg" : ".jpg"
                          }`}
                          alt="Student avatar"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-xs font-medium text-gray-600">
                          +{cls.students - 3}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-1">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                    <Trash size={16} />
                  </button>
                </div>
              </div>
              <button
                className="w-full py-2 mt-4 text-blue-500 hover:text-blue-600 font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                onClick={() => handleViewStudents(cls)}
              >
                <Users size={16} className="mr-2" />
                Xem danh sách học sinh
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {filteredClasses.length > 0 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-500 text-white">
              1
            </button>
            <button className="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
      {filteredClasses.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-1">
            Không tìm thấy lớp học
          </h3>
          <p className="text-gray-500 mb-4">
            Không có lớp học nào phù hợp với bộ lọc hiện tại
          </p>
          <Button onClick={() => setShowAddModal(true)}>Tạo lớp học mới</Button>
        </div>
      )}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Tạo lớp học mới</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên lớp
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 1A, 2B, 3C..."
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Khối
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn khối</option>
                    <option value="1">Khối 1</option>
                    <option value="2">Khối 2</option>
                    <option value="3">Khối 3</option>
                    <option value="4">Khối 4</option>
                    <option value="5">Khối 5</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Năm học
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="2023-2024">2023 - 2024</option>
                    <option value="2022-2023">2022 - 2023</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phòng học
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 101, 102..."
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Giáo viên chủ nhiệm
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn giáo viên</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end space-x-2 mt-6">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowAddModal(false)}
                  >
                    Hủy
                  </button>
                  <Button type="submit">Tạo lớp học</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showAssignModal && selectedClass && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  Phân công giáo viên cho lớp {selectedClass.name}
                </h2>
                <button
                  onClick={() => setShowAssignModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chọn giáo viên chủ nhiệm
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">-- Chọn giáo viên --</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} - {teacher.subject}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Danh sách giáo viên
                </h3>
                <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-lg">
                  {teachers.map((teacher) => (
                    <div
                      key={teacher.id}
                      className="p-3 border-b border-gray-200 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 overflow-hidden flex-shrink-0 mr-3">
                          {teacher.avatar ? (
                            <img
                              src={teacher.avatar}
                              alt={teacher.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-500 font-medium">
                              {teacher.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {teacher.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {teacher.subject} - {teacher.experience}
                          </p>
                        </div>
                      </div>
                      <button className="p-1 text-blue-500 hover:bg-blue-50 rounded-full">
                        <UserPlus size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowAssignModal(false)}
                >
                  Hủy
                </button>
                <Button onClick={() => setShowAssignModal(false)}>
                  Phân công
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Students List Modal */}
      {showStudentsModal && currentClassStudents && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Danh sách học sinh lớp {currentClassStudents.class.name}
              </h2>
              <button
                onClick={() => setShowStudentsModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 p-6">
              {currentClassStudents.students.length > 0 ? (
                <div className="space-y-6">
                  {currentClassStudents.students.map((student) => (
                    <div
                      key={student.id}
                      className={`border rounded-lg overflow-hidden ${
                        student.parent.hasAccount
                          ? student.parent.hasAccount &&
                            !student.parent.passwordChanged
                            ? "border-yellow-200"
                            : "border-green-200"
                          : "border-gray-200"
                      }`}
                    >
                      {/* Student header */}
                      <div
                        className={`p-4 ${
                          student.parent.hasAccount
                            ? student.parent.hasAccount &&
                              !student.parent.passwordChanged
                              ? "bg-yellow-50"
                              : "bg-green-50"
                            : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden flex-shrink-0 mr-3">
                              <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-500 font-medium">
                                {student.name.charAt(0)}
                              </div>
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 text-lg">
                                {student.name}
                              </p>
                              <div className="text-sm text-gray-600">
                                {student.gender} | {student.dob}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                student.parent.hasAccount
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {student.parent.hasAccount
                                ? "Đã có tài khoản phụ huynh"
                                : "Chưa có tài khoản phụ huynh"}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Parent information */}
                      <div className="p-4">
                        <h3 className="font-medium text-gray-700 mb-3">
                          Thông tin phụ huynh
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="mb-3">
                              <label className="block text-xs text-gray-500 mb-1">
                                Họ và tên
                              </label>
                              <p className="font-medium">
                                {student.parent.name}
                              </p>
                            </div>
                            <div className="mb-3">
                              <label className="block text-xs text-gray-500 mb-1">
                                Số điện thoại
                              </label>
                              <div className="flex items-center">
                                <Phone
                                  size={14}
                                  className="text-gray-400 mr-1"
                                />
                                <p>{student.parent.phone}</p>
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs text-gray-500 mb-1">
                                Email
                              </label>
                              <div className="flex items-center">
                                <Mail
                                  size={14}
                                  className="text-gray-400 mr-1"
                                />
                                <p>{student.parent.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                              <User size={16} className="mr-1" />
                              Thông tin tài khoản
                            </h4>
                            {student.parent.hasAccount ? (
                              <div>
                                {/* Account already exists */}
                                <div className="mb-3">
                                  <label className="block text-xs text-gray-500 mb-1">
                                    Tên đăng nhập
                                  </label>
                                  <p className="font-medium">
                                    {student.parent.username}
                                  </p>
                                </div>
                                <div className="mb-3">
                                  <label className="block text-xs text-gray-500 mb-1">
                                    Mật khẩu
                                  </label>
                                  <div className="flex items-center">
                                    <div className="relative flex-1">
                                      <input
                                        type={
                                          showPasswords[student.id]
                                            ? "text"
                                            : "password"
                                        }
                                        value={student.parent.password}
                                        readOnly
                                        className="pr-10 py-1 px-2 border border-gray-300 rounded w-full text-sm"
                                      />
                                      <button
                                        type="button"
                                        onClick={() =>
                                          togglePasswordVisibility(student.id)
                                        }
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                      >
                                        {showPasswords[student.id] ? (
                                          <EyeOff size={14} />
                                        ) : (
                                          <Eye size={14} />
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  {student.parent.passwordChanged ? (
                                    <div className="flex items-center text-green-600 text-sm">
                                      <CheckCircle size={14} className="mr-1" />
                                      <span>Đã thay đổi mật khẩu mặc định</span>
                                    </div>
                                  ) : (
                                    <div className="flex items-center text-yellow-600 text-sm">
                                      <AlertCircle size={14} className="mr-1" />
                                      <span>
                                        Chưa thay đổi mật khẩu mặc định
                                      </span>
                                    </div>
                                  )}
                                </div>
                                {/* Check if parent account is linked to this student */}
                                {!student.parent.linkedStudents?.includes(
                                  student.id
                                ) && (
                                  <Button
                                    className="mt-3 w-full flex items-center justify-center"
                                    variant="outline"
                                    onClick={() =>
                                      handleLinkParentAccount(
                                        student.id,
                                        student.parent.name
                                      )
                                    }
                                  >
                                    <LinkIcon size={14} className="mr-1" />
                                    Liên kết tài khoản
                                  </Button>
                                )}
                              </div>
                            ) : (
                              <div>
                                {/* No account exists yet */}
                                <p className="text-sm text-gray-600 mb-3">
                                  Phụ huynh này chưa có tài khoản trong hệ
                                  thống.
                                </p>
                                <Button
                                  className="w-full flex items-center justify-center"
                                  onClick={() =>
                                    handleCreateParentAccount(
                                      student.id,
                                      student.parent.name
                                    )
                                  }
                                >
                                  <UserPlus size={14} className="mr-1" />
                                  Tạo tài khoản
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <User size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">
                    Không có học sinh nào trong lớp này
                  </p>
                </div>
              )}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Tổng số: {currentClassStudents.students.length} học sinh
              </div>
              <div className="flex space-x-2">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowStudentsModal(false)}
                >
                  Đóng
                </button>
                <Button
                  onClick={handleCreateAllAccounts}
                  className="flex items-center"
                >
                  <UserPlus size={16} className="mr-2" />
                  Tạo tất cả tài khoản phụ huynh
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
