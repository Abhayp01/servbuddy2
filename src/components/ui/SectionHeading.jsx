import React from "react";
import MotionSection from "./MotionSection";

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  delay = 0,
}) => {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`${alignment} max-w-4xl ${align === "center" ? "mx-auto" : ""}`}>
      {badge && (
        <MotionSection delay={delay}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
            {badge}
          </span>
        </MotionSection>
      )}
      <MotionSection delay={delay + 0.1}>
        <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </MotionSection>
      {subtitle && (
        <MotionSection delay={delay + 0.2}>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            {subtitle}
          </p>
        </MotionSection>
      )}
    </div>
  );
};

export default SectionHeading;
