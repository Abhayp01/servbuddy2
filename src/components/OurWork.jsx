import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";

import clothingImg from "../assets/works/clothing.jpg";
import digitalProductsImg from "../assets/works/digitalproducts.png";
import monte2Img from "../assets/works/monte2academy.png";
import photoMemoryImg from "../assets/works/photomemory.png";

const projects = [
  {
    id: "saas",
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
    id: "healthcare",
    industry: "Healthcare",
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
  }
];

const displayItems = [
  ...projects,
  { isCta: true, id: "cta" }
];

const DesktopCard = ({ item, index, progress, total }) => {
  const P = 2 * total - 1;
  const inStart = (2 * index - 1) / P;
  const inEnd = (2 * index) / P;
  const outStart = (2 * index + 1) / P;
  const outEnd = (2 * index + 2) / P;

  let domain = [];
  let xRange = [];
  let opRange = [];
  let scaleRange = [];

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

  if (item.isCta) {
    return (
      <motion.div
        style={{ x, opacity, scale }}
        className="absolute inset-0 flex items-center justify-center p-8 will-change-transform"
      >
        <div className="text-center max-w-2xl">
          <h3 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
            Ready to see more of our <span className="gradient-text">engineering excellence?</span>
          </h3>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-blue px-10 py-5 text-base font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md"
          >
            Explore All Case Studies
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ x, opacity, scale }}
      className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 will-change-transform"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Image Side */}
        <div className="w-full lg:w-3/5">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl bg-white/[0.02]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 rounded-2xl border border-white/[0.04]" />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <span className="text-2xl leading-none">{item.icon}</span>
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase text-accent-blue">
              {item.industry}
            </span>
          </div>

          <h3 className="mb-6 text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            {item.name}
          </h3>

          <p className="mb-10 text-lg leading-relaxed text-slate-400">
            {item.desc}
          </p>

          <div>
            <a
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-heading font-semibold text-white transition-all hover:bg-white/[0.08] hover:border-white/20"
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

const MobileLayout = () => (
  <section id="our-work" className="py-24 border-t border-white/[0.03] mesh-bg">
    <div className="px-4 sm:px-6">
      <SectionHeading
        badge="Our Work"
        title="Trusted by modern businesses"
        subtitle="across industries"
      />

      <div className="mt-16 space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 border border-white/[0.04] rounded-2xl pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{project.icon}</span>
                <span className="text-xs font-semibold tracking-wider uppercase text-accent-blue">
                  {project.industry}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                {project.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 mb-6">
                {project.desc}
              </p>
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-heading font-semibold text-white hover:text-accent-blue transition-colors"
              >
                View Live Project
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}

        <div className="pt-8 text-center border-t border-white/[0.03]">
          <h3 className="text-2xl font-heading font-bold text-white mb-6">Ready to see more?</h3>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 shadow-glow-md"
          >
            All Case Studies
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

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
    offset: ["start start", "end end"]
  });

  if (isMobile) {
    return <MobileLayout />;
  }

  // Desktop Stepped Presentation
  return (
    <section ref={targetRef} id="our-work" className="relative bg-dark-950 border-t border-white/[0.03]" style={{ height: `${displayItems.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none mesh-bg opacity-50" />

        {/* Global Heading */}
        <div className="absolute top-0 left-0 right-0 pt-20 px-8 z-10 pointer-events-none flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
            Our Work
          </div>
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
