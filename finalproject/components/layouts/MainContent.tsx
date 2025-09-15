import React from "react";
import Slider from "@/sections/Slider";
import FoodBento from "@/sections/FoodBento";
import HeroSection from "@/sections/HeroSection";
import WEEKLY_MENU_DATA from "@/data/weeklyMenuData";

const MainContent = () => {
  return (
    <main>
      <div className="pt-24">
        <HeroSection />
      </div>
      <Slider />
      <div className="max-w-7xl mx-auto px-5 py-10">
        <FoodBento />
      </div>
    </main>
  );
};

export default MainContent;
