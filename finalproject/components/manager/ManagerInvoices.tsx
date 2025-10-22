"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Calendar,
  ArrowUpRight,
  ChevronDown,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  FileText,
  Printer,
  Mail,
  X,
} from "lucide-react";
import { invoices } from "@/data/constants";
import { Button } from "../ui/button";
import { Invoice } from "@/types";

export default function ManagerInvoices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("11");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // Filter invoices based on search query and selected filters
  const filteredInvoices = invoices.filter(
    (invoice) =>
      (invoice.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.parent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedStatus === "all" || invoice.status === selectedStatus) &&
      (selectedType === "all" || invoice.type === selectedType)
  );
  // Get status text and style
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "paid":
        return {
          text: "Đã thanh toán",
          className: "bg-green-100 text-green-800",
        };
      case "pending":
        return {
          text: "Chờ thanh toán",
          className: "bg-yellow-100 text-yellow-800",
        };
      case "overdue":
        return {
          text: "Quá hạn",
          className: "bg-red-100 text-red-800",
        };
      default:
        return {
          text: status,
          className: "bg-gray-100 text-gray-800",
        };
    }
  };
  // Get invoice type info
  const getInvoiceTypeInfo = (type: any) => {
    switch (type) {
      case "tuition":
        return {
          text: "Học phí",
          className: "bg-blue-100 text-blue-800",
        };
      case "meal":
        return {
          text: "Tiền ăn",
          className: "bg-green-100 text-green-800",
        };
      case "activity":
        return {
          text: "Hoạt động",
          className: "bg-purple-100 text-purple-800",
        };
      default:
        return {
          text: type,
          className: "bg-gray-100 text-gray-800",
        };
    }
  };
  // Format currency
  const formatCurrency = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
  };
  // View invoice details
  const handleViewInvoice = (invoice: any) => {
    setSelectedInvoice(invoice);
    setShowInvoiceModal(true);
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Báo cáo hóa đơn</h1>
          <p className="text-gray-600">
            Xem và xuất báo cáo hóa đơn theo thời gian
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-white border border-gray-300 rounded-lg px-3 py-2">
            <Calendar size={16} className="text-gray-500" />
            <select
              className="bg-transparent text-sm text-gray-700 focus:outline-none"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="1">Tháng 1</option>
              <option value="2">Tháng 2</option>
              <option value="3">Tháng 3</option>
              <option value="4">Tháng 4</option>
              <option value="5">Tháng 5</option>
              <option value="6">Tháng 6</option>
              <option value="7">Tháng 7</option>
              <option value="8">Tháng 8</option>
              <option value="9">Tháng 9</option>
              <option value="10">Tháng 10</option>
              <option value="11">Tháng 11</option>
              <option value="12">Tháng 12</option>
            </select>
            <select
              className="bg-transparent text-sm text-gray-700 focus:outline-none"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <Button className="flex items-center" onClick={() => {}}>
            <Download size={16} className="mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <div className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Tổng hóa đơn
              </p>
              <h3 className="text-2xl font-bold text-gray-800">5</h3>
              <p className="mt-1 text-xs text-gray-500">
                Tháng {selectedMonth}/{selectedYear}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <CheckCircle size={24} className="text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Đã thanh toán
              </p>
              <h3 className="text-2xl font-bold text-gray-800">3</h3>
              <p className="mt-1 text-xs text-gray-500">60% tổng số</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
              <Clock size={24} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Chờ thanh toán
              </p>
              <h3 className="text-2xl font-bold text-gray-800">1</h3>
              <p className="mt-1 text-xs text-gray-500">20% tổng số</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <AlertCircle size={24} className="text-red-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Quá hạn</p>
              <h3 className="text-2xl font-bold text-gray-800">1</h3>
              <p className="mt-1 text-xs text-gray-500">20% tổng số</p>
            </div>
          </div>
        </div>
      </div>
      {/* Filters and search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Tìm kiếm hóa đơn, học sinh..."
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
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">Tất cả loại</option>
              <option value="tuition">Học phí</option>
              <option value="meal">Tiền ăn</option>
              <option value="activity">Hoạt động</option>
            </select>
            <select
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="paid">Đã thanh toán</option>
              <option value="pending">Chờ thanh toán</option>
              <option value="overdue">Quá hạn</option>
            </select>
          </div>
        </div>
      </div>
      {/* Invoices table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mã hóa đơn
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loại
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Học sinh
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phụ huynh
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số tiền
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hạn thanh toán
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInvoices.map((invoice) => {
                const statusInfo = getStatusInfo(invoice.status);
                const typeInfo = getInvoiceTypeInfo(invoice.type);
                return (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-800">
                        {invoice.id}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${typeInfo.className}`}
                      >
                        {typeInfo.text}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-800">
                        {invoice.student}
                      </div>
                      <div className="text-xs text-gray-500">
                        Lớp {invoice.class}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm">{invoice.parent}</div>
                    </td>
                    <td className="py-3 px-4 font-medium">
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className="py-3 px-4 text-sm">{invoice.dueDate}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.className}`}
                      >
                        {statusInfo.text}
                      </span>
                      {invoice.status === "paid" && (
                        <div className="text-xs text-gray-500 mt-1">
                          {invoice.paidDate}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className="p-1 text-blue-500 hover:bg-blue-50 rounded"
                        onClick={() => handleViewInvoice(invoice)}
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Hiển thị {filteredInvoices.length} trong tổng số {invoices.length} hóa
          đơn
        </p>
        <div className="flex items-center space-x-1">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            Trước
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            Sau
          </button>
        </div>
      </div>
      {/* Invoice Detail Modal */}
      {showInvoiceModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Chi tiết hóa đơn</h2>
                <button
                  onClick={() => setShowInvoiceModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {selectedInvoice.id}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Ngày tạo: {selectedInvoice.dueDate}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getStatusInfo(selectedInvoice.status).className
                    }`}
                  >
                    {getStatusInfo(selectedInvoice.status).text}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Học sinh
                  </h4>
                  <p className="font-medium">{selectedInvoice.student}</p>
                  <p className="text-sm text-gray-600">
                    Lớp {selectedInvoice.class}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Phụ huynh
                  </h4>
                  <p className="font-medium">{selectedInvoice.parent}</p>
                  <p className="text-sm text-gray-600">
                    {selectedInvoice.parentEmail}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Chi tiết hóa đơn
                </h4>
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500">
                      <th className="pb-2">Mô tả</th>
                      <th className="pb-2 text-right">Số tiền</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {selectedInvoice.items.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2">{item.description}</td>
                        <td className="py-2 text-right">
                          {formatCurrency(item.amount)}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-bold">
                      <td className="pt-4">Tổng cộng</td>
                      <td className="pt-4 text-right">
                        {formatCurrency(selectedInvoice.amount)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {selectedInvoice.status === "paid" && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-medium text-green-800 mb-1 flex items-center">
                    <CheckCircle size={16} className="mr-1" />
                    Thông tin thanh toán
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Ngày thanh toán:</p>
                      <p className="font-medium">{selectedInvoice.paidDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Phương thức:</p>
                      <p className="font-medium">
                        {selectedInvoice.paidMethod === "bank"
                          ? "Chuyển khoản ngân hàng"
                          : "Tiền mặt"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-end space-x-2 mt-6">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
                  <Printer size={16} className="mr-2" />
                  In hóa đơn
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
                  <Mail size={16} className="mr-2" />
                  Gửi email
                </button>
                <Button>
                  <Download size={16} className="mr-2" />
                  Tải xuống PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
