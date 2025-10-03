'use client'
import { useState } from "react";
import {
  School,
  Mail,
  User,
  Lock,
  Search,
  Filter,
  Ban,
  CheckCircle,
} from "lucide-react";

export default function SchoolManagement() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    email: "",
  });

  const [schools, setSchools] = useState([
    {
      id: 1,
      schoolName: "Trường THCS Nguyễn Du",
      email: "nguyendu@edu.vn",
      manager: "Nguyễn Văn A",
      students: 450,
      status: "active",
      createdDate: "15/09/2024",
    },
    {
      id: 2,
      schoolName: "Trường THPT Lê Quý Đôn",
      email: "lequydon@edu.vn",
      manager: "Trần Thị B",
      students: 680,
      status: "active",
      createdDate: "20/08/2024",
    },
    {
      id: 3,
      schoolName: "Trường Tiểu học Trần Phú",
      email: "tranphu@edu.vn",
      manager: "Lê Văn C",
      students: 320,
      status: "locked",
      createdDate: "10/07/2024",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newSchool = {
      id: schools.length + 1,
      schoolName: formData.schoolName,
      email: formData.email,
      manager: "Chưa kích hoạt",
      students: 0,
      status: "pending",
      createdDate: new Date().toLocaleDateString("vi-VN"),
    };
    setSchools([...schools, newSchool]);
    setFormData({ schoolName: "", email: "" });
    setShowCreateForm(false);
    alert("Đã gửi email kích hoạt tài khoản đến " + formData.email);
  };

  const toggleStatus = (id: number) => {
    setSchools(
      schools.map((school) =>
        school.id === id
          ? {
              ...school,
              status: school.status === "active" ? "locked" : "active",
            }
          : school
      )
    );
  };

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || school.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Trường học</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <School size={18} />
          <span>Tạo tài khoản quản lý mới</span>
        </button>
      </div>

      {/* Create Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Tạo tài khoản quản lý trường học
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tên trường *
                </label>
                <input
                  type="text"
                  required
                  value={formData.schoolName}
                  onChange={(e) =>
                    setFormData({ ...formData, schoolName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
                  placeholder="VD: Trường THCS Nguyễn Du"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email chính thức của trường *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
                  placeholder="example@edu.vn"
                />
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700">
                <p>
                  📧 Hệ thống sẽ tự động tạo tài khoản và gửi email kích hoạt
                  đến địa chỉ trên.
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
                >
                  Tạo tài khoản
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm flex flex-wrap gap-4">
        <div className="flex-1 min-w-64">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên trường hoặc email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Đang hoạt động</option>
            <option value="locked">Đã khóa</option>
            <option value="pending">Chờ kích hoạt</option>
          </select>
        </div>
      </div>

      {/* Schools Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Tên trường
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Quản lý
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Học sinh
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Ngày tạo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredSchools.map((school) => (
              <tr key={school.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <School size={18} className="text-orange-500 mr-2" />
                    <span className="font-medium">{school.schoolName}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {school.email}
                </td>
                <td className="px-6 py-4 text-sm">{school.manager}</td>
                <td className="px-6 py-4 text-sm">{school.students}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      school.status === "active"
                        ? "bg-green-100 text-green-700"
                        : school.status === "locked"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {school.status === "active"
                      ? "Hoạt động"
                      : school.status === "locked"
                      ? "Đã khóa"
                      : "Chờ kích hoạt"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {school.createdDate}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(school.id)}
                    disabled={school.status === "pending"}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      school.status === "active"
                        ? "bg-red-100 text-red-700 hover:bg-red-200"
                        : school.status === "locked"
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {school.status === "active" ? "Khóa" : "Mở khóa"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
