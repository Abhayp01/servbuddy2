import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({
  children,
  className = "",
  onClick,
  href,
  as = "button",
  target,
  rel,
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = as === "a" ? motion.a : motion.button;

  return (
    <Tag
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`glow-button relative inline-flex items-center justify-center gap-2 font-heading font-semibold transition-colors ${className}`}
    >
      {children}
    </Tag>
  );
};

export default MagneticButton;
