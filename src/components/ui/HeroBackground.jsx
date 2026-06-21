import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax translation for particles/blobs based on scroll
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);
  const yGrid = useTransform(scrollY, [0, 800], [0, 80]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 40;
      const y = (clientY - window.innerHeight / 2) / 40;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Blobs */}
      <motion.div
        style={{
          x: mousePosition.x * 0.5,
          y: yBg,
        }}
        className="absolute inset-0"
      >
        {/* Blob 1: Teal Glow */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal-300/20 to-emerald-300/10 blur-[80px]"
        />

        {/* Blob 2: Violet Glow */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-300/20 to-blue-300/10 blur-[90px]"
        />

        {/* Blob 3: Pink Glow */}
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 30, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-[50%] left-[30%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-300/10 to-indigo-300/10 blur-[70px]"
        />
      </motion.div>

      {/* Subtle Animated SVG Grid */}
      <motion.div
        style={{ y: yGrid }}
        className="absolute inset-0 opacity-[0.25]"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(148, 163, 184, 0.15)"
                strokeWidth="1"
              />
              <circle cx="0" cy="0" r="1.5" fill="rgba(148, 163, 184, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </motion.div>

      {/* Moving Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => {
          // Semi-random initial positions
          const top = `${15 + (i * 73) % 70}%`;
          const left = `${10 + (i * 127) % 80}%`;
          const size = 3 + (i % 3); // 3px to 5px
          const delay = i * 0.7;
          const duration = 12 + (i % 5) * 4;

          return (
            <motion.div
              key={i}
              style={{
                top,
                left,
                width: size,
                height: size,
                x: mousePosition.x * (0.2 + (i % 3) * 0.15),
                y: mousePosition.y * (0.2 + (i % 3) * 0.15),
              }}
              animate={{
                y: [0, -30, 20, 0],
                opacity: [0.15, 0.6, 0.3, 0.15],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-slate-400"
            />
          );
        })}
      </div>

      {/* Vignette fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
    </div>
  );
};

export default HeroBackground;
