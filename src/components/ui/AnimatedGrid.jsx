import React from "react";

const AnimatedGrid = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Animated gradient blobs */}
      <div className="blob w-[500px] h-[500px] bg-accent-blue/10 top-[10%] left-[20%] animate-float" />
      <div className="blob w-[400px] h-[400px] bg-accent-purple/8 bottom-[20%] right-[15%] animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="blob w-[300px] h-[300px] bg-accent-cyan/6 top-[50%] left-[60%] animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default AnimatedGrid;
