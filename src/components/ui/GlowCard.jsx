import React, { useRef, useState } from "react";

const GlowCard = ({ children, className = "", glowColor = "blue" }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  const colors = {
    blue: "rgba(59,130,246,0.12)",
    cyan: "rgba(6,182,212,0.12)",
    purple: "rgba(139,92,246,0.12)",
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card spotlight-card relative group ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        "--mouse-x": mousePos.x,
        "--mouse-y": mousePos.y,
        "--glow-color": colors[glowColor] || colors.blue,
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;
