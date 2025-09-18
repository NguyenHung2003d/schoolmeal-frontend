import React from "react";
import Slider from "@/sections/Slider";
import FoodBento from "@/sections/FoodBento";
import HeroSection from "@/sections/HeroSection";
import Features from "@/sections/Features";
import ParentFeedbackSection from "@/sections/FeedBack";

const MainContent = () => {
  return (
    <main>
      <div className="pt-24">
        <HeroSection />
      </div>
      <Slider />
      <div className="py-12">
        <FoodBento />
        <Features />
        <ParentFeedbackSection />
      </div>
    </main>
  );
};

export default MainContent;
