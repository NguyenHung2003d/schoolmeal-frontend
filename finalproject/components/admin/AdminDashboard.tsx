import {
  BarChart3,
  School,
  Users,
  Utensils,
  DollarSign,
  FileText,
  User,
} from "lucide-react";

// ===== Stats Cards =====
function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <div className="bg-orange-50 rounded-lg p-5 border-t-4 border-orange-500">
        <p className="text-xs text-gray-500 uppercase mb-1">Tổng trường học</p>
        <h3 className="text-3xl font-bold">40</h3>
        <p className="mt-2 text-xs text-green-600">+12% so với tháng trước</p>
        <div className="bg-orange-500 p-2 rounded-md inline-block mt-3">
          <School size={20} className="text-white" />
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-5 border-t-4 border-orange-500">
        <p className="text-xs text-gray-500 uppercase mb-1">Tổng học sinh</p>
        <h3 className="text-3xl font-bold">9,050</h3>
        <p className="mt-2 text-xs text-green-600">+8% so với tháng trước</p>
        <div className="bg-orange-500 p-2 rounded-md inline-block mt-3">
          <Users size={20} className="text-white" />
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-5 border-t-4 border-orange-500">
        <p className="text-xs text-gray-500 uppercase mb-1">
          Suất ăn tháng này
        </p>
        <h3 className="text-3xl font-bold">178,500</h3>
        <p className="mt-2 text-xs text-green-600">+15% so với tháng trước</p>
        <div className="bg-orange-500 p-2 rounded-md inline-block mt-3">
          <Utensils size={20} className="text-white" />
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-5 border-t-4 border-orange-500">
        <p className="text-xs text-gray-500 uppercase mb-1">Doanh thu</p>
        <h3 className="text-3xl font-bold">0.0B VND</h3>
        <p className="mt-2 text-xs text-green-600">+22% so với tháng trước</p>
        <div className="bg-orange-500 p-2 rounded-md inline-block mt-3">
          <DollarSign size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
}

// ===== Chart Placeholder =====
function DashboardChart() {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold">Biểu đồ suất ăn</h2>
        <button className="text-xs bg-orange-500 text-white px-3 py-1 rounded-md">
          Xuất báo cáo
        </button>
      </div>
      <div className="p-6 flex items-center justify-center bg-orange-50/50 h-64">
        <div className="text-center text-gray-500 flex flex-col items-center">
          <BarChart3 size={48} className="mb-2 opacity-30" />
          <p>Biểu đồ thống kê suất ăn theo thời gian</p>
        </div>
      </div>
    </div>
  );
}

// ===== Recent Activities =====
function RecentActivities() {
  const activities = [
    {
      icon: <School size={16} />,
      text: "Trường THCS Nguyễn Du được tạo",
      time: "2 phút trước",
    },
    {
      icon: <Utensils size={16} />,
      text: "Thông báo thực đơn tuần của giới",
      time: "1 giờ trước",
    },
    {
      icon: <FileText size={16} />,
      text: "Báo cáo tháng 9 đã được tạo",
      time: "3 giờ trước",
    },
    {
      icon: <User size={16} />,
      text: "Cập nhật thông báo mới",
      time: "5 ngày trước",
    },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-bold">Hoạt động gần đây</h2>
      </div>
      <div className="p-4 space-y-4">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start space-x-3">
            <div className="bg-orange-500 p-1.5 rounded-md text-white flex-shrink-0">
              {a.icon}
            </div>
            <div>
              <p className="text-sm font-medium">{a.text}</p>
              <p className="text-xs text-gray-500">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== Main Dashboard =====
export function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
          + Thêm mới
        </button>
      </div>

      {/* Stats cards */}
      <DashboardStats />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DashboardChart />
        </div>
        <div>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}
