'use client'
import React, { useState } from "react";
import {
  Upload,
  Download,
  File,
  X,
  CheckCircle,
  AlertCircle,
  Info,
  User,
  Users,
  FileText,
  Search,
  Filter,
  Plus,
} from "lucide-react";
import { students } from "@/data/constants";
import { Button } from "../ui/button";

export default function ManagerStudents() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  // Filter students based on search query and selected class
  const filteredStudents = students.filter(
    (student) =>
      (student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.parent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.parent.email
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        student.parent.phone
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) &&
      (selectedClass === "all" || student.class === selectedClass)
  );
  const handleFileChange = (e: any) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (!selectedFile) return;
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      // Reset after a few seconds
      setTimeout(() => {
        setUploadSuccess(false);
        setSelectedFile(null);
      }, 3000);
    }, 2000);
  };
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Nhập học sinh</h1>
          <p className="text-gray-600">
            Nhập danh sách học sinh từ file Excel hoặc tạo học sinh mới
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="flex items-center"
            onClick={() => {}}
          >
            <Download size={16} className="mr-2" />
            Tải mẫu Excel
          </Button>
          <Button className="flex items-center">
            <Plus size={16} className="mr-2" />
            Thêm học sinh
          </Button>
        </div>
      </div>
      {/* File upload section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold mb-2">Tải lên danh sách học sinh</h2>
          <p className="text-gray-600">
            Tải lên file Excel chứa danh sách học sinh. Định dạng hỗ trợ: .xlsx,
            .xls
          </p>
        </div>
        {!selectedFile ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-4">
              Kéo thả file vào đây hoặc nhấn để chọn file
            </p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".xlsx,.xls"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <Button variant="outline">Chọn file</Button>
            </label>
          </div>
        ) : (
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <File size={24} className="text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-600 font-medium text-sm"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? "Ẩn xem trước" : "Xem trước"}
                </button>
                <button
                  className="p-1 text-gray-500 hover:bg-blue-100 rounded-full"
                  onClick={handleRemoveFile}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
        {selectedFile && (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleUpload}
              disabled={isUploading}
              className="flex items-center"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Đang tải lên...
                </>
              ) : uploadSuccess ? (
                <>
                  <CheckCircle size={16} className="mr-2" />
                  Tải lên thành công
                </>
              ) : (
                <>
                  <Upload size={16} className="mr-2" />
                  Tải lên
                </>
              )}
            </Button>
          </div>
        )}
        {showPreview && selectedFile && (
          <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-3 border-b border-gray-200 font-medium">
              Xem trước dữ liệu
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Họ tên
                    </th>
                    <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giới tính
                    </th>
                    <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ngày sinh
                    </th>
                    <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lớp
                    </th>
                    <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phụ huynh
                    </th>
                    <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SĐT phụ huynh
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Preview rows */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">Nguyễn Văn A</td>
                    <td className="py-3 px-4 text-sm">Nam</td>
                    <td className="py-3 px-4 text-sm">01/01/2017</td>
                    <td className="py-3 px-4 text-sm">1A</td>
                    <td className="py-3 px-4 text-sm">Nguyễn Văn B</td>
                    <td className="py-3 px-4 text-sm">0912345678</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">Trần Thị C</td>
                    <td className="py-3 px-4 text-sm">Nữ</td>
                    <td className="py-3 px-4 text-sm">15/03/2017</td>
                    <td className="py-3 px-4 text-sm">1A</td>
                    <td className="py-3 px-4 text-sm">Trần Văn D</td>
                    <td className="py-3 px-4 text-sm">0923456789</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-yellow-50 border-t border-gray-200 flex items-start">
              <Info
                size={16}
                className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0"
              />
              <p className="text-sm text-gray-700">
                Đây chỉ là dữ liệu xem trước. Nhấn "Tải lên" để nhập dữ liệu vào
                hệ thống.
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Students list */}
      <div>
        <h2 className="text-lg font-bold mb-4">Danh sách học sinh</h2>
        {/* Filters and search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Tìm kiếm học sinh..."
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
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="all">Tất cả lớp</option>
                <option value="1A">Lớp 1A</option>
                <option value="2B">Lớp 2B</option>
                <option value="3A">Lớp 3A</option>
                <option value="4C">Lớp 4C</option>
              </select>
              <button className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                <Download size={16} className="mr-1" />
                Xuất danh sách
              </button>
            </div>
          </div>
        </div>
        {/* Students table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Học sinh
                  </th>
                  <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lớp
                  </th>
                  <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày sinh
                  </th>
                  <th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phụ huynh
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
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <User size={16} className="text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {student.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {student.gender}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Lớp {student.class}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {student.birthdate}
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm text-gray-700 font-medium">
                          {student.parent.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {student.parent.email}
                        </p>
                        <p className="text-xs text-gray-500">
                          {student.parent.phone}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {student.status === "active" ? (
                        <span className="flex items-center text-green-600 text-sm">
                          <CheckCircle size={14} className="mr-1" />
                          Đang học
                        </span>
                      ) : (
                        <span className="flex items-center text-red-600 text-sm">
                          <AlertCircle size={14} className="mr-1" />
                          Nghỉ học
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Hiển thị {filteredStudents.length} trong tổng số {students.length}{" "}
            học sinh
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
      </div>
    </div>
  );
}
