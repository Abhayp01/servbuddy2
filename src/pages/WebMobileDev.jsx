import React from "react";
import { FaCode, FaMobileAlt, FaDesktop, FaBolt, FaAccessibleIcon, FaRocket } from "react-icons/fa";
import ServiceDetailPage from "../components/ServiceDetailPage";

const WebMobileDev = () => {
  return (
    <ServiceDetailPage
      badge="Web & Mobile"
      title="Digital Products Customers Love Using"
      subtitle="We design and engineer high-performing web and mobile products that combine excellent UX, robust architecture, and measurable business outcomes."
      heroGradient="bg-gradient-to-br from-orange-100 via-rose-50 to-pink-100"
      capabilities={[
        { icon: FaCode, title: "Full-Stack Engineering", desc: "Modern frontend and backend development for scalable, secure, and fast digital products." },
        { icon: FaMobileAlt, title: "Mobile App Development", desc: "Native-feel mobile experiences with smooth performance and conversion-focused UX." },
        { icon: FaDesktop, title: "Design Systems", desc: "Reusable UI frameworks that improve consistency, speed, and maintainability." },
        { icon: FaBolt, title: "Performance Optimization", desc: "Fast load times, efficient bundles, and smooth interactions across devices." },
        { icon: FaAccessibleIcon, title: "Accessibility by Default", desc: "Inclusive interfaces with proper semantics, keyboard support, and contrast standards." },
        { icon: FaRocket, title: "Growth-Focused Delivery", desc: "Feature delivery guided by user analytics, experimentation, and product strategy." },
      ]}
      outcomes={[
        "Higher user retention with cleaner UX and faster load performance.",
        "Shorter time-to-market through reusable components and sprint-based delivery.",
        "Improved business conversion with product-led journey optimization.",
        "Scalable architecture that supports future growth without full rewrites.",
      ]}
      processSteps={[
        { title: "Product Discovery", desc: "We define goals, users, core flows, and success metrics before writing code." },
        { title: "Experience & Engineering", desc: "Design and development run in sync to deliver polished, production-grade features." },
        { title: "Launch & Iteration", desc: "We release with confidence and continuously improve based on real user feedback." },
      ]}
    />
  );
};

export default WebMobileDev;
