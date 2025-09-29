import React from "react";
import { recentUpdates } from "@/data/constants";

const RecentUpdates = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-lg font-bold">Cập nhật gần đây</h2>
    </div>
    <div className="p-4">
      {recentUpdates.map((update, i) => (
        <div
          key={i}
          className={`p-3 ${
            i !== recentUpdates.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <p className="font-medium">{update.message}</p>
            <span className="text-sm text-gray-500">{update.time}</span>
          </div>
          <p className="text-sm text-gray-500">{update.user}</p>
        </div>
      ))}
    </div>
  </div>
);

export default RecentUpdates;
