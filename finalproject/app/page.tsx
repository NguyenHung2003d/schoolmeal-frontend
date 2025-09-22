"use client";
import Slider from "@/sections/Slider";
// import FoodBento from "@/sections/FoodBento";
import HeroSection from "@/sections/HeroSection";
import Features from "@/sections/Features";
import ParentFeedbackSection from "@/sections/FeedBack";
import Contact from "@/sections/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const slideRef = useRef(null);
  const featureRef = useRef(null);
  const feedbackRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
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
    gsap.to(heroRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <main className="overflow-hidden">
      <div ref={heroRef} className="pt-24">
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
