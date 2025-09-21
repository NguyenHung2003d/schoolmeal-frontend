import Slider from "@/sections/Slider";
// import FoodBento from "@/sections/FoodBento";
import HeroSection from "@/sections/HeroSection";
import Features from "@/sections/Features";
import ParentFeedbackSection from "@/sections/FeedBack";
import Contact from "@/sections/Contact";
export default function HomePage() {
  return (
    <main>
      <div className="pt-24">
        <HeroSection />
      </div>
      <Slider />
      <div>
        {/* <FoodBento /> */}
        <Features />
        <ParentFeedbackSection />
        <Contact />
      </div>
    </main>
  );
}
