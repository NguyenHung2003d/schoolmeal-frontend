'use client'
import React, { useState } from "react";
import {
  DollarSign,
  Search,
  Filter,
  Calendar,
  Download,
  CreditCard,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  User,
  FileText,
  ArrowUpRight,
  Clock,
  BarChart3,
  PieChart,
  ShoppingCart,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Plus,
  Minus,
  Eye,
  X,
  Info,
  FileSpreadsheet,
  Check,
  Settings,
  FilePlus2,
} from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { bills, shoppingExpenses } from "@/data/constants";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ExpenseMap } from "@/types";
// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export default function ManagerBilling() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("11");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [showChartModal, setShowChartModal] = useState(false);
  const [activeChart, setActiveChart] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState("excel");
  const [exportContent, setExportContent] = useState({
    bills: true,
    expenses: true,
    statistics: true,
  });
  // Calculate income by type
  const incomeByType = {
    tuition: bills
      .filter((bill) => bill.type === "tuition")
      .reduce((sum, bill) => sum + bill.amount, 0),
    meal: bills
      .filter((bill) => bill.type === "meal")
      .reduce((sum, bill) => sum + bill.amount, 0),
    activity: bills
      .filter((bill) => bill.type === "activity")
      .reduce((sum, bill) => sum + bill.amount, 0),
  };
  // Income chart data
  const incomeChartData: ChartData<"bar"> = {
    labels: ["Học phí", "Tiền ăn", "Hoạt động"],
    datasets: [
      {
        label: "Thu nhập (triệu VND)",
        data: [
          incomeByType.tuition / 1000000,
          incomeByType.meal / 1000000,
          incomeByType.activity / 1000000,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // Income chart options
  const incomeChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Thu nhập từ phụ huynh",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(
              2
            )} triệu`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Triệu VND",
        },
      },
    },
  };
  // Group expenses by vendor
  const expensesByVendor = shoppingExpenses.reduce<ExpenseMap>(
    (acc, expense) => {
      acc[expense.vendor] = (acc[expense.vendor] || 0) + expense.amount;
      return acc;
    },
    {}
  );

  // Expenses chart data
  const expensesChartData: ChartData<"pie"> = {
    labels: Object.keys(expensesByVendor),
    datasets: [
      {
        data: Object.values(expensesByVendor).map(
          (value) => Number(value) / 1000000
        ),
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // Expenses chart options
  const expensesChartOptions: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 11,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed;
            const total = context.dataset.data.reduce(
              (a, b) => Number(a) + Number(b),
              0
            );
            const percentage = Math.round((value * 100) / total);
            return `${context.label}: ${value.toFixed(
              2
            )} triệu (${percentage}%)`;
          },
        },
      },
    },
  };
  // Weekly expenses data
  const weeklyExpensesData = [
    {
      week: "Tuần 1",
      amount: 1200000 + 850000,
    },
    {
      week: "Tuần 2",
      amount: 950000,
    },
    {
      week: "Tuần 3",
      amount: 1100000,
    },
    {
      week: "Tuần 4",
      amount: 780000,
    },
  ];
  // Weekly expenses chart data
  const weeklyExpensesChartData: ChartData<"bar"> = {
    labels: weeklyExpensesData.map((item) => item.week),
    datasets: [
      {
        label: "Chi phí (triệu VND)",
        data: weeklyExpensesData.map((item) => item.amount / 1000000),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };
  // Weekly expenses chart options
  const weeklyExpensesChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(
              2
            )} triệu`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Triệu VND",
        },
      },
    },
  };
  // Filter bills based on search query and selected status
  const filteredBills = bills.filter(
    (bill) =>
      (bill.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bill.parent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bill.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedStatus === "all" || bill.status === selectedStatus)
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
  // Get bill type info
  const getBillTypeInfo = (type: any) => {
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
  // Calculate statistics
  const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const paidAmount = bills
    .filter((bill) => bill.status === "paid")
    .reduce((sum, bill) => sum + bill.amount, 0);
  const pendingAmount = bills
    .filter((bill) => bill.status === "pending" || bill.status === "overdue")
    .reduce((sum, bill) => sum + bill.amount, 0);
  // Calculate total shopping expenses
  const totalShoppingExpenses = shoppingExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  // Handle chart modal
  const openChartModal = (chartType: any) => {
    setActiveChart(chartType);
    setShowChartModal(true);
  };
  // Navigate to detailed view
  const navigateToDetailedView = (viewType: any) => {
    setShowChartModal(false);
    if (viewType === "income") {
      router.push("/manager/parent-invoices");
    } else if (viewType === "expenses") {
      router.push("/manager/shopping-expenses");
    }
  };
  // Handle export Excel
  const handleExportClick = () => {
    setShowExportModal(true);
  };
  // Handle export confirmation
  const handleExportConfirm = () => {
    // In a real application, this would trigger the actual Excel export
    setTimeout(() => {
      setShowExportModal(false);
      alert("Xuất file Excel thành công!");
    }, 1000);
  };
  // Toggle export content
  const toggleExportContent = (key: any) => {
    setExportContent({
      ...exportContent,
      [key]: !exportContent[key as keyof typeof exportContent],
    });
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Quản lý hóa đơn & nhân viên
          </h1>
          <p className="text-gray-600">
            Xem và quản lý hóa đơn, chi phí và nhân viên phụ trách
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
          <Button
            variant="outline"
            className="flex items-center"
            onClick={handleExportClick}
          >
            <Download size={16} className="mr-2" />
            Xuất Excel
          </Button>
        </div>
      </div>
      {/* Financial charts section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Income from parents chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <TrendingUp size={20} className="text-green-600" />
              </div>
              <h2 className="text-lg font-bold">Thu nhập từ phụ huynh</h2>
            </div>
            <div className="text-sm text-gray-500">
              Tháng {selectedMonth}/{selectedYear}
            </div>
          </div>
          <div className="h-64 relative flex items-center justify-center border-b border-gray-100 mb-4">
            <div
              className="w-full h-full"
              onClick={() => openChartModal("income")}
            >
              <Bar data={incomeChartData} options={incomeChartOptions} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/5 transition-opacity cursor-pointer rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Eye size={24} className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 bg-blue-50 rounded-lg">
              <h3 className="text-xs font-medium text-gray-600">Học phí</h3>
              <p className="text-lg font-bold text-gray-800">7.5M</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h3 className="text-xs font-medium text-gray-600">Tiền ăn</h3>
              <p className="text-lg font-bold text-gray-800">750K</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <h3 className="text-xs font-medium text-gray-600">Hoạt động</h3>
              <p className="text-lg font-bold text-gray-800">350K</p>
            </div>
          </div>
          <button
            className="mt-4 w-full py-2 text-blue-600 font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
            onClick={() => navigateToDetailedView("income")}
          >
            <span>Xem chi tiết thu nhập</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
        {/* Shopping expenses chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-lg mr-3">
                <ShoppingCart size={20} className="text-red-600" />
              </div>
              <h2 className="text-lg font-bold">Chi phí đi chợ</h2>
            </div>
            <div className="text-sm text-gray-500">
              Tháng {selectedMonth}/{selectedYear}
            </div>
          </div>
          <div className="h-64 relative flex items-center justify-center border-b border-gray-100 mb-4">
            <div
              className="w-full h-full"
              onClick={() => openChartModal("expenses")}
            >
              <Pie data={expensesChartData} options={expensesChartOptions} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/5 transition-opacity cursor-pointer rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Eye size={24} className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-orange-50 rounded-lg">
              <h3 className="text-xs font-medium text-gray-600">Tổng chi</h3>
              <p className="text-lg font-bold text-gray-800">
                {formatCurrency(totalShoppingExpenses)}
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <h3 className="text-xs font-medium text-gray-600">Số lần mua</h3>
              <p className="text-lg font-bold text-gray-800">
                {shoppingExpenses.length}
              </p>
            </div>
          </div>
          <button
            className="mt-4 w-full py-2 text-blue-600 font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
            onClick={() => navigateToDetailedView("expenses")}
          >
            <span>Xem chi tiết chi phí</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <DollarSign size={24} className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Tổng hóa đơn
              </p>
              <h3 className="text-3xl font-bold text-gray-800">
                {formatCurrency(totalAmount)}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
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
              <h3 className="text-3xl font-bold text-gray-800">
                {formatCurrency(paidAmount)}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {Math.round((paidAmount / totalAmount) * 100)}% tổng số
              </p>
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
                Chưa thanh toán
              </p>
              <h3 className="text-3xl font-bold text-gray-800">
                {formatCurrency(pendingAmount)}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {Math.round((pendingAmount / totalAmount) * 100)}% tổng số
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Staff responsible section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-bold mb-4">Nhân viên phụ trách</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <User size={20} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Trần Thị Hoa</h3>
                <p className="text-xs text-gray-500">Nhân viên kế toán</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-sm">
                  <FileText size={14} className="text-gray-400 mr-1" />
                  <span>30 hóa đơn phụ trách</span>
                </div>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <CheckCircle size={14} className="mr-1" />
                  <span>28 đã thanh toán</span>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-600">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <User size={20} className="text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Lê Văn Dũng</h3>
                <p className="text-xs text-gray-500">Nhân viên kế toán</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-sm">
                  <FileText size={14} className="text-gray-400 mr-1" />
                  <span>25 hóa đơn phụ trách</span>
                </div>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <CheckCircle size={14} className="mr-1" />
                  <span>22 đã thanh toán</span>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-600">
                <ChevronRight size={20} />
              </button>
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
      {/* Bills table */}
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
                  Số tiền
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hạn thanh toán
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nhân viên phụ trách
                </th>
                <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chi tiết
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBills.map((bill) => {
                const statusInfo = getStatusInfo(bill.status);
                const typeInfo = getBillTypeInfo(bill.type);
                return (
                  <tr key={bill.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-800">{bill.id}</div>
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
                        {bill.student}
                      </div>
                      <div className="text-xs text-gray-500">
                        Lớp {bill.class}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">
                      {formatCurrency(bill.amount)}
                    </td>
                    <td className="py-3 px-4 text-sm">{bill.dueDate}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.className}`}
                      >
                        {statusInfo.text}
                      </span>
                      {bill.status === "paid" && (
                        <div className="text-xs text-gray-500 mt-1">
                          {bill.paidDate}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium">
                        {bill.responsible}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:text-blue-700">
                        <ArrowUpRight size={18} />
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
          Hiển thị {filteredBills.length} trong tổng số {bills.length} hóa đơn
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
      {/* Chart Detail Modal */}
      {showChartModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  {activeChart === "income"
                    ? "Chi tiết thu nhập từ phụ huynh"
                    : "Chi tiết chi phí đi chợ"}
                </h2>
                <button
                  onClick={() => setShowChartModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-6 flex-grow overflow-y-auto">
              <div className="h-96 flex items-center justify-center border border-gray-200 rounded-lg mb-6">
                {activeChart === "income" ? (
                  <div className="w-full h-full p-4">
                    <Bar
                      data={incomeChartData}
                      options={{
                        ...incomeChartOptions,
                        plugins: {
                          ...incomeChartOptions.plugins,
                          legend: {
                            position: "top",
                            display: true,
                          },
                          title: {
                            display: true,
                            text: "Thu nhập từ phụ huynh theo loại",
                            font: {
                              size: 16,
                            },
                          },
                        },
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full p-4">
                    <Bar
                      data={weeklyExpensesChartData}
                      options={{
                        ...weeklyExpensesChartOptions,
                        plugins: {
                          ...weeklyExpensesChartOptions.plugins,
                          legend: {
                            position: "top",
                            display: true,
                          },
                          title: {
                            display: true,
                            text: "Chi phí đi chợ theo tuần",
                            font: {
                              size: 16,
                            },
                          },
                        },
                      }}
                    />
                  </div>
                )}
              </div>
              {activeChart === "income" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">
                      Học phí
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">7.5M VND</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>5% so với tháng trước</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">
                      Tiền ăn
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">750K VND</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>2% so với tháng trước</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">
                      Hoạt động
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">350K VND</p>
                    <div className="mt-2 flex items-center text-sm text-red-600">
                      <TrendingDown size={14} className="mr-1" />
                      <span>3% so với tháng trước</span>
                    </div>
                  </div>
                </div>
              )}
              {activeChart === "expenses" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">
                      Tuần 1
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">
                      2.05M VND
                    </p>
                    <div className="mt-2 flex items-center text-sm text-red-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>8% so với tháng trước</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">
                      Tuần 2
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">950K VND</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <TrendingDown size={14} className="mr-1" />
                      <span>3% so với tháng trước</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">
                      Tuần 3
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">1.1M VND</p>
                    <div className="mt-2 flex items-center text-sm text-red-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>5% so với tháng trước</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">
                      Tuần 4
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">780K VND</p>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <TrendingDown size={14} className="mr-1" />
                      <span>2% so với tháng trước</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                <Info size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  Nhấn vào nút bên dưới để xem chi tiết lịch sử{" "}
                  {activeChart === "income"
                    ? "hóa đơn từ phụ huynh"
                    : "các khoản chi phí đi chợ"}
                  .
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <Button
                className="flex items-center"
                onClick={() =>
                  navigateToDetailedView(
                    activeChart === "income" ? "income" : "expenses"
                  )
                }
              >
                <span>Xem chi tiết lịch sử</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Export Excel Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center">
                  <FileSpreadsheet size={24} className="text-green-600 mr-2" />
                  Xuất báo cáo Excel
                </h2>
                <button
                  onClick={() => setShowExportModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-6 flex-grow overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">
                      Xem trước báo cáo
                    </h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-2 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-500"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-xs text-gray-500 ml-2">
                            BaoCaoTaiChinh_T{selectedMonth}_{selectedYear}.xlsx
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="border border-gray-200">
                          {/* Excel preview header */}
                          <div className="grid grid-cols-6 bg-gray-100 border-b border-gray-200">
                            {["A", "B", "C", "D", "E", "F"].map((col) => (
                              <div
                                key={col}
                                className="py-1 px-2 text-xs text-center text-gray-600 border-r border-gray-200 last:border-r-0"
                              >
                                {col}
                              </div>
                            ))}
                          </div>
                          {/* Row numbers */}
                          <div className="flex">
                            <div className="w-8 bg-gray-100 border-r border-gray-200">
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <div
                                  key={num}
                                  className="h-8 flex items-center justify-center text-xs text-gray-600 border-b border-gray-200 last:border-b-0"
                                >
                                  {num}
                                </div>
                              ))}
                            </div>
                            {/* Excel content */}
                            <div className="flex-grow">
                              {/* Title Row */}
                              <div className="grid grid-cols-6 border-b border-gray-200 bg-blue-50">
                                <div className="py-2 px-2 col-span-6 text-sm font-bold text-center">
                                  BÁO CÁO TÀI CHÍNH THÁNG {selectedMonth}/
                                  {selectedYear}
                                </div>
                              </div>
                              {/* Header Row */}
                              <div className="grid grid-cols-6 border-b border-gray-200 bg-gray-50">
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200">
                                  Mã
                                </div>
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200">
                                  Loại
                                </div>
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200">
                                  Học sinh
                                </div>
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200">
                                  Số tiền
                                </div>
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200">
                                  Ngày
                                </div>
                                <div className="py-1 px-2 text-xs font-semibold">
                                  Trạng thái
                                </div>
                              </div>
                              {/* Data Rows */}
                              {bills.slice(0, 5).map((bill, index) => (
                                <div
                                  key={index}
                                  className={`grid grid-cols-6 border-b border-gray-200 ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                  }`}
                                >
                                  <div className="py-1 px-2 text-xs border-r border-gray-200">
                                    {bill.id}
                                  </div>
                                  <div className="py-1 px-2 text-xs border-r border-gray-200">
                                    {getBillTypeInfo(bill.type).text}
                                  </div>
                                  <div className="py-1 px-2 text-xs border-r border-gray-200">
                                    {bill.student}
                                  </div>
                                  <div className="py-1 px-2 text-xs border-r border-gray-200">
                                    {bill.amount.toLocaleString()}
                                  </div>
                                  <div className="py-1 px-2 text-xs border-r border-gray-200">
                                    {bill.dueDate}
                                  </div>
                                  <div className="py-1 px-2 text-xs">
                                    {getStatusInfo(bill.status).text}
                                  </div>
                                </div>
                              ))}
                              {/* Summary Row */}
                              <div className="grid grid-cols-6 border-b border-gray-200 bg-blue-50">
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200 col-span-3">
                                  Tổng cộng:
                                </div>
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200">
                                  {totalAmount.toLocaleString()}
                                </div>
                                <div className="py-1 px-2 text-xs font-semibold border-r border-gray-200 col-span-2"></div>
                              </div>
                              {/* More rows indicator */}
                              <div className="grid grid-cols-6 border-b border-gray-200">
                                <div className="py-1 px-2 text-xs text-gray-400 col-span-6 text-center">
                                  ... (còn nhiều dòng khác)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <Info
                        size={18}
                        className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm text-blue-800 mb-1">
                          File Excel sẽ bao gồm các thông tin sau:
                        </p>
                        <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
                          <li>Danh sách hóa đơn và trạng thái thanh toán</li>
                          <li>Thống kê thu nhập theo loại hóa đơn</li>
                          <li>Chi phí đi chợ và mua sắm</li>
                          <li>
                            Báo cáo tổng hợp tài chính tháng {selectedMonth}/
                            {selectedYear}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Settings size={18} className="mr-2 text-gray-600" />
                      Tùy chọn xuất
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Định dạng
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="format-excel"
                              name="format"
                              className="h-4 w-4 text-blue-600"
                              checked={exportFormat === "excel"}
                              onChange={() => setExportFormat("excel")}
                            />
                            <label
                              htmlFor="format-excel"
                              className="ml-2 text-sm text-gray-700 flex items-center"
                            >
                              <FileSpreadsheet
                                size={16}
                                className="mr-1 text-green-600"
                              />
                              Excel (.xlsx)
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="format-csv"
                              name="format"
                              className="h-4 w-4 text-blue-600"
                              checked={exportFormat === "csv"}
                              onChange={() => setExportFormat("csv")}
                            />
                            <label
                              htmlFor="format-csv"
                              className="ml-2 text-sm text-gray-700 flex items-center"
                            >
                              <FileText
                                size={16}
                                className="mr-1 text-gray-600"
                              />
                              CSV (.csv)
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nội dung xuất
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="content-bills"
                              className="h-4 w-4 text-blue-600 rounded"
                              checked={exportContent.bills}
                              onChange={() => toggleExportContent("bills")}
                            />
                            <label
                              htmlFor="content-bills"
                              className="ml-2 text-sm text-gray-700"
                            >
                              Hóa đơn học phí
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="content-expenses"
                              className="h-4 w-4 text-blue-600 rounded"
                              checked={exportContent.expenses}
                              onChange={() => toggleExportContent("expenses")}
                            />
                            <label
                              htmlFor="content-expenses"
                              className="ml-2 text-sm text-gray-700"
                            >
                              Chi phí mua sắm
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="content-statistics"
                              className="h-4 w-4 text-blue-600 rounded"
                              checked={exportContent.statistics}
                              onChange={() => toggleExportContent("statistics")}
                            />
                            <label
                              htmlFor="content-statistics"
                              className="ml-2 text-sm text-gray-700"
                            >
                              Thống kê và biểu đồ
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tên file
                        </label>
                        <input
                          type="text"
                          value={`BaoCaoTaiChinh_T${selectedMonth}_${selectedYear}`}
                          className="w-full p-2 border border-gray-300 rounded text-sm"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      className="w-full flex items-center justify-center"
                      onClick={handleExportConfirm}
                    >
                      <Download size={16} className="mr-2" />
                      Xuất báo cáo
                    </Button>
                    <button
                      className="w-full mt-2 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                      onClick={() => setShowExportModal(false)}
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
