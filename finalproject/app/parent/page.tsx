'use client'
import React, { useState } from 'react';
import { User, Calendar, Activity, FileText, MessageSquare, Receipt, FileEdit, Menu, X, ChevronRight, Bell } from 'lucide-react';

const ParentDashboard = () => {
  const [selectedChild, setSelectedChild] = useState(null);
  const [activeTab, setActiveTab] = useState('register');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data
  const children = [
    { id: 1, name: 'Nguyễn Minh An', class: '3A', avatar: '👦', allergies: ['Đậu phộng', 'Hải sản'] },
    { id: 2, name: 'Nguyễn Thu Hà', class: '1B', avatar: '👧', allergies: ['Sữa'] }
  ];

  const menuItems = [
    { id: 'register', icon: Calendar, label: 'Đăng ký suất ăn', color: 'text-blue-600' },
    { id: 'profile', icon: User, label: 'Cập nhật hồ sơ', color: 'text-green-600' },
    { id: 'health', icon: Activity, label: 'Theo dõi sức khỏe', color: 'text-red-600' },
    { id: 'menu', icon: FileText, label: 'Xem thực đơn', color: 'text-orange-600' },
    { id: 'feedback', icon: MessageSquare, label: 'Góp ý & Phản hồi', color: 'text-purple-600' },
    { id: 'invoice', icon: Receipt, label: 'Xem hóa đơn', color: 'text-yellow-600' },
    { id: 'leave', icon: FileEdit, label: 'Đơn xin nghỉ', color: 'text-pink-600' }
  ];

  // Register Meal Component
  const RegisterMeal = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Đăng ký suất ăn</h2>
      {!selectedChild ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">Vui lòng chọn học sinh từ danh sách bên trái</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Học sinh: {selectedChild.name}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Chọn tháng đăng ký</label>
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Tháng 10/2025</option>
                  <option>Tháng 11/2025</option>
                  <option>Tháng 12/2025</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Gói đăng ký</label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="package" className="mr-3" />
                    <div className="flex-1">
                      <p className="font-semibold">Gói đầy đủ - 1,200,000 VNĐ/tháng</p>
                      <p className="text-sm text-gray-600">Bao gồm: Sáng, Trưa, Chiều (20 ngày)</p>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="package" className="mr-3" />
                    <div className="flex-1">
                      <p className="font-semibold">Gói trưa - 800,000 VNĐ/tháng</p>
                      <p className="text-sm text-gray-600">Chỉ bao gồm: Trưa (20 ngày)</p>
                    </div>
                  </label>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Xác nhận và thanh toán
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Update Profile Component
  const UpdateProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Cập nhật hồ sơ</h2>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="font-semibold text-lg">Thông tin phụ huynh</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Họ và tên</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Nguyễn Văn A" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Số điện thoại</label>
            <input type="tel" className="w-full border rounded-lg px-4 py-2" placeholder="0901234567" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full border rounded-lg px-4 py-2" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Địa chỉ</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="123 Đường ABC" />
          </div>
        </div>
      </div>

      {selectedChild && (
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <h3 className="font-semibold text-lg">Thông tin con: {selectedChild.name}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Avatar</label>
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{selectedChild.avatar}</div>
                <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Thay đổi</button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Các món ăn dị ứng</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedChild.allergies.map((allergy, idx) => (
                  <span key={idx} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    {allergy} <button className="ml-2 font-bold">×</button>
                  </span>
                ))}
              </div>
              <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Thêm món ăn dị ứng" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Sở thích món ăn</label>
              <textarea className="w-full border rounded-lg px-4 py-2" rows="3" placeholder="Ghi chú sở thích..."></textarea>
            </div>
          </div>
        </div>
      )}

      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
        Lưu thay đổi
      </button>
    </div>
  );

  // Track BMI Component
  const TrackBMI = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [calculatedBMI, setCalculatedBMI] = useState(null);

    const calculateBMI = () => {
      if (height && weight) {
        const heightInMeters = parseFloat(height) / 100;
        const bmi = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1);
        setCalculatedBMI(bmi);
      }
    };

    const getBMIStatus = (bmi) => {
      if (bmi < 18.5) return { text: 'Thiếu cân', color: 'text-yellow-600' };
      if (bmi < 25) return { text: 'Bình thường', color: 'text-green-600' };
      if (bmi < 30) return { text: 'Thừa cân', color: 'text-orange-600' };
      return { text: 'Béo phì', color: 'text-red-600' };
    };

    // Mock health data
    const healthData = [
      { month: 'T6', height: 120, weight: 20, bmi: 13.9 },
      { month: 'T7', height: 122, weight: 21, bmi: 14.1 },
      { month: 'T8', height: 123, weight: 21.5, bmi: 14.2 },
      { month: 'T9', height: 125, weight: 22, bmi: 14.1 }
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Theo dõi sức khỏe</h2>
        {!selectedChild ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">Vui lòng chọn học sinh từ danh sách bên trái</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Chỉ số hiện tại - {selectedChild.name}</h3>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Chiều cao</p>
                    <p className="text-3xl font-bold text-blue-600">125 cm</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Cân nặng</p>
                    <p className="text-3xl font-bold text-green-600">22 kg</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">BMI</p>
                    <p className="text-3xl font-bold text-purple-600">14.1</p>
                    <p className="text-xs text-green-600 font-semibold mt-1">Bình thường</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-4 mb-4">
                <h4 className="font-semibold mb-3">Biểu đồ tăng trưởng 4 tháng gần nhất</h4>
                <div className="space-y-3">
                  {healthData.map((data, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-semibold text-gray-600">{data.month}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="w-20">H: {data.height}cm</span>
                          <span className="w-20">W: {data.weight}kg</span>
                          <span className="w-24">BMI: {data.bmi}</span>
                        </div>
                        <div className="mt-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full transition-all"
                            style={{ width: `${(data.height / 150) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Tính toán BMI</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Chiều cao (cm)</label>
                    <input 
                      type="number" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full border rounded-lg px-4 py-2" 
                      placeholder="125" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cân nặng (kg)</label>
                    <input 
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full border rounded-lg px-4 py-2" 
                      placeholder="22" 
                    />
                  </div>
                </div>
                
                {calculatedBMI && (
                  <div className="mt-4 bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Chỉ số BMI</p>
                    <p className="text-4xl font-bold text-blue-600">{calculatedBMI}</p>
                    <p className={`text-lg font-semibold mt-2 ${getBMIStatus(parseFloat(calculatedBMI)).color}`}>
                      {getBMIStatus(parseFloat(calculatedBMI)).text}
                    </p>
                  </div>
                )}

                <div className="mt-4 bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-600">Công thức BMI:</strong> BMI = Cân nặng (kg) ÷ [Chiều cao (m)]²
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Ví dụ: Cân nặng 22kg, chiều cao 1.25m → BMI = 22 ÷ (1.25)² = 14.1
                  </p>
                </div>

                <button 
                  onClick={calculateBMI}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Tính BMI
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // View Menu Component
  const ViewMenu = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Xem thực đơn</h2>
      {!selectedChild ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">Vui lòng chọn học sinh từ danh sách bên trái</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <label className="block text-sm font-medium mb-2">Chọn tuần</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Tuần 1 - 30/09 đến 04/10/2025</option>
              <option>Tuần 2 - 07/10 đến 11/10/2025</option>
            </select>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="font-semibold">Thực đơn tuần 1 - {selectedChild.name}</h3>
            </div>
            <div className="divide-y">
              {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6'].map((day, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">{day} - {30 + idx}/09/2025</p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Sáng:</strong> Bánh mì trứng, Sữa tươi<br/>
                        <strong>Trưa:</strong> Cơm, Thịt kho tàu, Canh rau<br/>
                        <strong>Chiều:</strong> Xôi đậu xanh, Nước ép trái cây
                      </p>
                      {selectedChild.allergies.length > 0 && (
                        <p className="text-xs text-red-600 mt-2">
                          ⚠️ Lưu ý: Con có dị ứng với {selectedChild.allergies.join(', ')}
                        </p>
                      )}
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Send Feedback Component
  const SendFeedback = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Góp ý & Phản hồi</h2>
      {!selectedChild ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">Vui lòng chọn học sinh từ danh sách bên trái</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <h3 className="font-semibold">Gửi phản hồi cho {selectedChild.name}</h3>
          <div>
            <label className="block text-sm font-medium mb-2">Chọn ngày</label>
            <input type="date" className="w-full border rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Loại phản hồi</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Chất lượng món ăn</option>
              <option>Thái độ phục vụ</option>
              <option>Sức khỏe học sinh</option>
              <option>Vệ sinh an toàn thực phẩm</option>
              <option>Khác</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Nội dung góp ý</label>
            <textarea className="w-full border rounded-lg px-4 py-2" rows="5" placeholder="Nhập nội dung phản hồi..."></textarea>
          </div>
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
            Gửi phản hồi
          </button>
        </div>
      )}
    </div>
  );

  // View Invoice Component
  const ViewInvoice = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Xem hóa đơn</h2>
      {!selectedChild ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">Vui lòng chọn học sinh từ danh sách bên trái</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <label className="block text-sm font-medium mb-2">Chọn tháng</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Tháng 9/2025</option>
              <option>Tháng 8/2025</option>
              <option>Tháng 7/2025</option>
            </select>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-yellow-600 text-white p-4">
              <h3 className="font-semibold">Hóa đơn tháng 9/2025</h3>
              <p className="text-sm opacity-90">Học sinh: {selectedChild.name}</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Gói đăng ký</span>
                <span className="font-semibold">Gói đầy đủ</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Số ngày ăn</span>
                <span className="font-semibold">18/20 ngày</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Đơn giá/ngày</span>
                <span className="font-semibold">60,000 VNĐ</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Số tiền ghi có (nghỉ phép)</span>
                <span className="font-semibold text-green-600">-120,000 VNĐ</span>
              </div>
              <div className="flex justify-between py-3 bg-gray-50 px-4 rounded-lg">
                <span className="font-bold text-lg">Tổng cộng</span>
                <span className="font-bold text-lg text-blue-600">1,080,000 VNĐ</span>
              </div>
              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Đã thanh toán
                </span>
              </div>
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">
                Tải hóa đơn PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Leave Application Component
  const LeaveApplication = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Đơn xin nghỉ</h2>
      {!selectedChild ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">Vui lòng chọn học sinh từ danh sách bên trái</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="font-semibold">Tạo đơn xin nghỉ cho {selectedChild.name}</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Ngày bắt đầu nghỉ</label>
              <input type="date" className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Ngày kết thúc nghỉ</label>
              <input type="date" className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Lý do nghỉ (tùy chọn)</label>
              <textarea className="w-full border rounded-lg px-4 py-2" rows="3" placeholder="Nhập lý do..."></textarea>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Lưu ý:</strong> Số tiền hoàn trả sẽ được ghi có vào hóa đơn tháng kế tiếp. 
                Đơn xin nghỉ phải được gửi trước thời gian quy định (cutoff time).
              </p>
            </div>
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700">
              Gửi đơn xin nghỉ
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Lịch sử đơn xin nghỉ</h3>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">15/09/2025 - 16/09/2025</p>
                    <p className="text-sm text-gray-600">Lý do: Ốm</p>
                    <p className="text-sm text-green-600 mt-1">Số tiền hoàn: 120,000 VNĐ</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Đã duyệt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'register': return <RegisterMeal />;
      case 'profile': return <UpdateProfile />;
      case 'health': return <TrackBMI />;
      case 'menu': return <ViewMenu />;
      case 'feedback': return <SendFeedback />;
      case 'invoice': return <ViewInvoice />;
      case 'leave': return <LeaveApplication />;
      default: return <RegisterMeal />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Children List */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white shadow-lg transition-all duration-300 overflow-hidden`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Danh sách con</h2>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-3">
            {children.map(child => (
              <div
                key={child.id}
                onClick={() => setSelectedChild(child)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedChild?.id === child.id 
                    ? 'bg-blue-50 border-2 border-blue-500' 
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{child.avatar}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{child.name}</p>
                    <p className="text-sm text-gray-600">Lớp {child.class}</p>
                    {child.allergies.length > 0 && (
                      <p className="text-xs text-red-600 mt-1">
                        Dị ứng: {child.allergies.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Parent Dashboard</h1>
                <p className="text-sm text-gray-600">Quản lý bữa ăn học đường</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  PH
                </div>
                <div>
                  <p className="font-semibold text-sm">Phụ huynh</p>
                  <p className="text-xs text-gray-600">parent@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b overflow-x-auto">
          <div className="flex space-x-1 px-6 py-2">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? item.color : ''}`} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;