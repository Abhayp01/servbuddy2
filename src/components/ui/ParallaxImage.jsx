import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * ParallaxImage — Premium scroll-driven parallax image with reveal animation.
 *
 * Props:
 *  - src: image source (import or URL)
 *  - alt: alt text
 *  - className: additional container classes
 *  - parallaxSpeed: how much the image moves on scroll (default 0.15)
 *  - aspectRatio: CSS aspect-ratio string (default "16/10")
 *  - overlay: show gradient overlay (default true)
 *  - glowColor: glow accent color (default "accent-blue")
 *  - rounded: border-radius class (default "rounded-2xl")
 *  - revealDirection: "up" | "left" | "right" (default "up")
 */
const ParallaxImage = ({
  src,
  alt = "",
  className = "",
  parallaxSpeed = 0.15,
  aspectRatio = "16/10",
  overlay = true,
  glowColor = "accent-blue",
  rounded = "rounded-2xl",
  revealDirection = "up",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax vertical offset — image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxSpeed * 100}%`, `${parallaxSpeed * 100}%`]);
  // Subtle scale on scroll for cinematic depth
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  // Reveal animation on viewport entry
  const [revealRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  });

  const revealVariants = {
    up: {
      hidden: { opacity: 0, y: 60, scale: 0.96 },
      visible: { opacity: 1, y: 0, scale: 1 },
    },
    left: {
      hidden: { opacity: 0, x: -60, scale: 0.96 },
      visible: { opacity: 1, x: 0, scale: 1 },
    },
    right: {
      hidden: { opacity: 0, x: 60, scale: 0.96 },
      visible: { opacity: 1, x: 0, scale: 1 },
    },
  };

  const variant = revealVariants[revealDirection] || revealVariants.up;

  return (
    <motion.div
      ref={(el) => {
        containerRef.current = el;
        revealRef(el);
      }}
      className={`relative group w-full ${className}`}
      variants={variant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Ambient glow behind image */}
      <div
        className={`absolute -inset-4 bg-${glowColor}/10 ${rounded} blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`}
      />

      {/* Image container with overflow hidden for parallax */}
      <div
        className={`relative overflow-hidden ${rounded} border border-white/[0.06]`}
        style={{ aspectRatio }}
      >
        {/* Parallax image */}
        <motion.img
          src={src}
          alt={alt}
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          loading="lazy"
        />

        {/* Gradient overlay for text readability */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent pointer-events-none" />
        )}

        {/* Subtle inner border glow on hover */}
        <div className={`absolute inset-0 ${rounded} border border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-500 pointer-events-none`} />

        {/* Corner accent */}
        <div className={`absolute top-0 left-0 w-16 h-16 pointer-events-none`}>
          <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-${glowColor}/40 to-transparent`} />
          <div className={`absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-${glowColor}/40 to-transparent`} />
        </div>
        <div className={`absolute bottom-0 right-0 w-16 h-16 pointer-events-none`}>
          <div className={`absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-${glowColor}/40 to-transparent`} />
          <div className={`absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-${glowColor}/40 to-transparent`} />
        </div>
      </div>
    </motion.div>
  );
};

export default ParallaxImage;
