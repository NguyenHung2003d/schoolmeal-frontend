"use client";
import { useState } from "react";
import {
  Users,
  Search,
  Filter,
  Ban,
  CheckCircle,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

export default function AccountManagement() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@edu.vn",
      phone: "0912345678",
      role: "manager",
      school: "THCS Nguyễn Du",
      status: "active",
      lastLogin: "02/10/2024 10:30",
      createdDate: "15/09/2024",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@edu.vn",
      phone: "0923456789",
      role: "teacher",
      school: "THCS Nguyễn Du",
      status: "active",
      lastLogin: "02/10/2024 09:15",
      createdDate: "20/09/2024",
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "levanc@gmail.com",
      phone: "0934567890",
      role: "parent",
      school: "THCS Nguyễn Du",
      status: "locked",
      lastLogin: "25/09/2024 14:20",
      createdDate: "10/08/2024",
    },
    {
      id: 4,
      name: "Phạm Thị D",
      email: "phamthid@edu.vn",
      phone: "0945678901",
      role: "teacher",
      school: "THPT Lê Quý Đôn",
      status: "active",
      lastLogin: "01/10/2024 16:45",
      createdDate: "05/09/2024",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedAccount, setSelectedAccount] = useState<any>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [actionHistory, setActionHistory] = useState<any[]>([]);

  // Hàm toggle trạng thái
  const toggleStatus = (account: any) => {
    setSelectedAccount(account);
    setShowConfirmModal(true);
  };

  // Xác nhận thay đổi trạng thái
  const confirmToggleStatus = () => {
    const newStatus = selectedAccount.status === "active" ? "locked" : "active";
    setAccounts(
      accounts.map((acc) =>
        acc.id === selectedAccount.id ? { ...acc, status: newStatus } : acc
      )
    );

    const historyEntry = {
      accountName: selectedAccount.name,
      action: newStatus === "locked" ? "Khóa tài khoản" : "Mở khóa tài khoản",
      time: new Date().toLocaleString("vi-VN"),
      admin: "Admin LC",
    };
    setActionHistory([historyEntry, ...actionHistory]);

    alert(
      `Đã ${newStatus === "locked" ? "khóa" : "mở khóa"} tài khoản ${
        selectedAccount.email
      }. Email thông báo đã được gửi.`
    );
    setShowConfirmModal(false);
    setSelectedAccount(null);
  };

  // Lọc dữ liệu
  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.school.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || account.role === filterRole;
    const matchesStatus =
      filterStatus === "all" || account.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Gán tên vai trò
  const getRoleName = (role: string) => {
    const roles: any = {
      manager: "Quản lý trường",
      teacher: "Giáo viên",
      parent: "Phụ huynh",
    };
    return roles[role] || role;
  };

  // Gán màu theo vai trò
  const getRoleColor = (role: string) => {
    const colors: any = {
      manager: "bg-purple-100 text-purple-700",
      teacher: "bg-blue-100 text-blue-700",
      parent: "bg-green-100 text-green-700",
    };
    return colors[role] || "bg-gray-100 text-gray-700";
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Tài khoản</h1>
        <div className="text-sm text-gray-600">
          Tổng:{" "}
          <span className="font-bold text-orange-500">{accounts.length}</span>{" "}
          tài khoản
        </div>
      </div>

      {/* Bộ lọc */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên, email, trường..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Lọc vai trò */}
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-gray-400" />
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">Tất cả vai trò</option>
              <option value="manager">Quản lý trường</option>
              <option value="teacher">Giáo viên</option>
              <option value="parent">Phụ huynh</option>
            </select>
          </div>

          {/* Lọc trạng thái */}
          <div className="flex items-center space-x-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Đang hoạt động</option>
              <option value="locked">Đã khóa</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bảng tài khoản */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Họ và tên</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">SĐT</th>
              <th className="px-4 py-3 text-left">Vai trò</th>
              <th className="px-4 py-3 text-left">Trường</th>
              <th className="px-4 py-3 text-left">Trạng thái</th>
              <th className="px-4 py-3 text-left">Đăng nhập cuối</th>
              <th className="px-4 py-3 text-left">Ngày tạo</th>
              <th className="px-4 py-3 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredAccounts.map((acc) => (
              <tr key={acc.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{acc.name}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <Mail size={16} className="text-gray-400" /> {acc.email}
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <Phone size={16} className="text-gray-400" /> {acc.phone}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getRoleColor(
                      acc.role
                    )}`}
                  >
                    {getRoleName(acc.role)}
                  </span>
                </td>
                <td className="px-4 py-3">{acc.school}</td>
                <td className="px-4 py-3">
                  {acc.status === "active" ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle size={16} className="mr-1" /> Hoạt động
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <Ban size={16} className="mr-1" /> Đã khóa
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 flex items-center gap-1 text-gray-600">
                  <Clock size={14} /> {acc.lastLogin}
                </td>
                <td className="px-4 py-3">{acc.createdDate}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => toggleStatus(acc)}
                    className={`px-3 py-1 rounded text-white text-xs font-medium ${
                      acc.status === "active"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {acc.status === "active" ? "Khóa" : "Mở khóa"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal xác nhận */}
      {showConfirmModal && selectedAccount && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">Xác nhận hành động</h2>
            <p className="mb-4">
              Bạn có chắc chắn muốn{" "}
              <span className="font-bold text-red-500">
                {selectedAccount.status === "active" ? "khóa" : "mở khóa"}
              </span>{" "}
              tài khoản{" "}
              <span className="font-medium">{selectedAccount.email}</span>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={confirmToggleStatus}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
