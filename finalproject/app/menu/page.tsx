"use client";
import { FoodItem } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FOOD_ITEMS } from "@/data/constants";
import { useMemo, useState } from "react";
import { Filter, Search, X } from "lucide-react";

const Menu = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const category = useMemo(() => {
    const uniqueCategories = [
      ...new Set(FOOD_ITEMS.map((item) => item.category)),
    ];
    return uniqueCategories;
  }, []);

  // Lọc và logic search
  const filteredItems = useMemo(() => {
    let filtered = FOOD_ITEMS;
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    if (priceFilter !== "all") {
      filtered = filtered.filter((item) => {
        const price = item.price || 0;
        switch (priceFilter) {
          case "low":
            return price < 50000;
          case "medium":
            return price >= 50000 && price <= 100000;
          case "high":
            return price > 100000;
          default:
            return true;
        }
      });
    }
    return filtered;
  }, [searchQuery, selectedCategory, priceFilter]);

  // FIX: Sử dụng filteredItems thay vì FOOD_ITEMS
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 4);

  const hasActiveFilters =
    searchQuery || selectedCategory !== "all" || priceFilter !== "all";

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceFilter("all");
  };

  return (
    <section className="mt-[150px] mb-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Thực đơn ngày hôm nay:
      </h2>

      <div className="mb-8 space-y-4">
        {/* Search bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Tìm kiếm món ăn ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-full focus:border-orange-400 focus:outline-none transition-colors duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-orange-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none bg-white"
            >
              <option value="all">Tất cả danh mục</option>
              {category.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Lọc giá */}
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-3 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none bg-white"
          >
            <option value="all">Tất cả mức giá</option>
            <option value="low">Dưới 50,000đ</option>
            <option value="medium">50,000 - 100,000đ</option>
            <option value="high">Trên 100,000đ</option>
          </select>

          {/* Xoá bộ lọc */}
          {hasActiveFilters && (
            <Button
              onClick={clearAllFilters}
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              <X className="w-4 h-4 mr-2" />
              Xoá bộ lọc
            </Button>
          )}
        </div>

        {/* Trả kết quả */}
        <div className="text-center text-gray-600">
          {hasActiveFilters && (
            <p className="text-sm">
              Tìm thấy {filteredItems.length} món ăn
              {searchQuery && ` cho "${searchQuery}"`}
            </p>
          )}
        </div>
      </div>

      {/* FIX: Sửa conditional rendering */}
      {itemsToShow.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {itemsToShow.map((item: FoodItem, index: number) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden shadow-lg border-4 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 
              ${index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
              ${index % 7 === 0 ? "lg:col-span-2" : ""}
            `}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <h4 className="text-2xl font-bold text-white drop-shadow-md">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-200 mb-2">{item.description}</p>
                {item.price && (
                  <p className="text-lg font-bold text-orange-300 mb-3">
                    {item.price.toLocaleString("vi-VN")}đ
                  </p>
                )}
                <Button
                  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold hover:scale-105 transition-transform duration-300"
                  type="button"
                >
                  Xem thực đơn
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Không có kết quả */
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Không tìm thấy món ăn nào
          </h3>
          <p className="text-gray-500 mb-4">
            Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
          </p>
          <Button
            onClick={clearAllFilters}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white"
          >
            Xem tất cả món ăn
          </Button>
        </div>
      )}

      {/* Show More Button */}
      {filteredItems.length > 4 &&
        itemsToShow.length < filteredItems.length && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              type="button"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {showAll ? "Thu gọn" : `Xem thêm ${filteredItems.length - 4} món`}
            </Button>
          </div>
        )}

      {filteredItems.length > 4 && showAll && (
        <div className="text-center mt-4">
          <Button
            onClick={() => setShowAll(false)}
            variant="outline"
            className="border-orange-300 text-orange-600 hover:bg-orange-50"
          >
            Thu gọn
          </Button>
        </div>
      )}
    </section>
  );
};

export default Menu;
