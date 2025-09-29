"use client";
import Slider from "@/components/common/ProblemSolution";
// import FoodBento from "@/sections/FoodBento";
import HeroSection from "@/components/common/HeroSection";
import Features from "@/components/common/Features";
import ParentFeedbackSection from "@/components/common/FeedBack";
import Contact from "@/components/common/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const slideRef = useRef(null);
  const featureRef = useRef(null);
  const feedbackRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      slideRef.current,
      {
        opacity: 0,
        x: -100,
        rotateY: -15,
      },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: slideRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      featureRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      feedbackRef.current,
      {
        opacity: 0,
        x: 100,
        rotation: 5,
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feedbackRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      contactRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <main className="overflow-hidden">
      <div >
        <HeroSection />
      </div>
      <div ref={slideRef}>
        <Slider />
      </div>
      <div>
        {/* <FoodBento /> */}
        <div ref={featureRef}>
          <Features />
        </div>
        <div ref={feedbackRef}>
          <ParentFeedbackSection />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </main>
  );
}
