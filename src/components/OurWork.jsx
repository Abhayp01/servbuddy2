import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import clothingImg from "../assets/works/clothing.jpg";
import digitalProductsImg from "../assets/works/digitalproducts.png";
import monte2Img from "../assets/works/monte2academy.png";
import photoMemoryImg from "../assets/works/photomemory.png";

const projects = [
  {
    id: "mont2",
    industry: "SaaS & Platforms",
    icon: "☁️",
    name: "MONT2 Academy",
    image: monte2Img,
    url: "mont2academy.com",
    desc: "A modern ed-tech SaaS platform offering interactive data science curriculums, built with a resilient cloud-native architecture.",
  },
  {
    id: "retail",
    industry: "Retail & E-commerce",
    icon: "🛒",
    name: "Fashion Commerce",
    image: clothingImg,
    url: "fashioncommerce.co",
    desc: "A highly conversion-optimized e-commerce platform built for scale, featuring real-time inventory management and a seamless checkout experience.",
  },
  {
    id: "photomemory",
    industry: "SaaS & Platforms",
    icon: "🏥",
    name: "PhotoMemory",
    image: photoMemoryImg,
    url: "photomemory.app",
    desc: "A secure patient memory archiving system utilizing advanced data encryption and an intuitive clinical interface.",
  },
  {
    id: "fintech",
    industry: "FinTech & BFSI",
    icon: "🏦",
    name: "Digital Products",
    image: digitalProductsImg,
    url: "digitalproducts.io",
    desc: "A robust financial technology platform enabling secure, low-latency transactions and comprehensive portfolio analytics.",
  },
];

const displayItems = [...projects, { isCta: true, id: "cta" }];

/* ─── Desktop Scroll-Stacking Card ─── */
const DesktopCard = ({ item, index, progress, total }) => {
  const P = 2 * total - 1;
  const inStart = (2 * index - 1) / P;
  const inEnd = (2 * index) / P;
  const outStart = (2 * index + 1) / P;
  const outEnd = (2 * index + 2) / P;

  let domain, xRange, opRange, scaleRange;

  if (index === 0) {
    domain = [0, outStart, outEnd];
    xRange = ["0vw", "0vw", "-40vw"];
    opRange = [1, 1, 0];
    scaleRange = [1, 1, 0.9];
  } else if (index === total - 1) {
    domain = [inStart, inEnd, 1];
    xRange = ["80vw", "0vw", "0vw"];
    opRange = [0, 1, 1];
    scaleRange = [0.9, 1, 1];
  } else {
    domain = [inStart, inEnd, outStart, outEnd];
    xRange = ["80vw", "0vw", "0vw", "-40vw"];
    opRange = [0, 1, 1, 0];
    scaleRange = [0.9, 1, 1, 0.9];
  }

  const x = useTransform(progress, domain, xRange);
  const opacity = useTransform(progress, domain, opRange);
  const scale = useTransform(progress, domain, scaleRange);

  /* CTA slide */
  if (item.isCta) {
    return (
      <motion.div
        style={{ x, opacity, scale }}
        className="absolute inset-0 flex items-center justify-center p-8 will-change-transform"
      >
        <div className="text-center max-w-2xl">
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Want to see more of our{" "}
            <span className="underline decoration-[#5eead4] decoration-[3px] underline-offset-[6px]">work?</span>
          </h3>
          <p className="text-base text-slate-600 mb-8 max-w-md mx-auto">
            Explore the projects we've built, deployed, and scaled for clients across industries.
          </p>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-4 text-[15px] font-semibold text-white hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            Get in Touch
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    );
  }

  /* Project slide */
  return (
    <motion.div
      style={{ x, opacity, scale }}
      className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 will-change-transform"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-3/5">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] border border-slate-200/60 bg-slate-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 border border-slate-200">
              <span className="text-xl leading-none">{item.icon}</span>
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
              {item.industry}
            </span>
          </div>

          <h3 className="mb-4 text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            {item.name}
          </h3>

          <p className="mb-8 text-base leading-relaxed text-slate-600">
            {item.desc}
          </p>

          <div>
            <a
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:text-slate-900 hover:shadow-card"
            >
              View Live Project
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Mobile Layout (stacked cards) ─── */
const MobileLayout = () => (
  <section id="our-work" className="py-20 border-t border-slate-100">
    <div className="px-5 sm:px-6 max-w-2xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1]/40 border border-teal-200/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-800">
          Our Work
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Trusted by modern businesses
        </h2>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-5">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-card">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">{project.icon}</span>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                  {project.industry}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-5">{project.desc}</p>
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-800 underline decoration-[#5eead4] decoration-2 underline-offset-4 transition-all"
              >
                View Live Project
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}

        <div className="pt-8 text-center border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-5">Ready to see more?</h3>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            Get in Touch
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Main OurWork Component ─── */
const OurWork = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  if (isMobile) {
    return <MobileLayout />;
  }

  /* Desktop Scroll-Stacking Presentation */
  return (
    <section
      ref={targetRef}
      id="our-work"
      className="relative bg-white border-t border-slate-100"
      style={{ height: `${displayItems.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white pointer-events-none" />

        {/* Section badge at top */}
        <div className="absolute top-0 left-0 right-0 pt-24 px-8 z-10 pointer-events-none flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1]/40 border border-teal-200/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-800">
            Our Work
          </span>
        </div>

        {/* Cards Deck */}
        <div className="relative w-full h-full max-w-7xl mx-auto">
          {displayItems.map((item, i) => (
            <DesktopCard
              key={item.id}
              item={item}
              index={i}
              progress={scrollYProgress}
              total={displayItems.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
