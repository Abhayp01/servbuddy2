import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import MotionSection from "../components/ui/MotionSection";
import GlowCard from "../components/ui/GlowCard";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedGrid from "../components/ui/AnimatedGrid";

const Process = () => {
  const steps = [
    { step: "01", title: "Discovery & Strategy", text: "We align on business goals, user needs, technical constraints, and project priorities." },
    { step: "02", title: "Architecture & Planning", text: "Define scalable architecture, delivery milestones, and execution ownership across teams." },
    { step: "03", title: "Design & Development", text: "Build polished product experiences and robust backend systems using agile sprints." },
    { step: "04", title: "Quality & Security", text: "Run automated tests, quality checks, and security validation before release readiness." },
    { step: "05", title: "Launch & Optimization", text: "Deploy with confidence, monitor KPIs, and improve continuously with feedback." },
  ];

  return (
    <div className="bg-dark-950 text-slate-300">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <AnimatedGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 z-[1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
              Our Process
            </span>
          </MotionSection>
          <MotionSection delay={0.1}>
            <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
              A Clear Delivery Process<br />
              <span className="gradient-text">Built for Results</span>
            </h1>
          </MotionSection>
          <MotionSection delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              Structured, flexible, and transparent — keeping your team informed,
              reducing risk, and turning strategy into measurable outcomes.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Steps */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vertical connector line */}
          <div className="absolute left-1/2 top-24 bottom-24 w-[1px] bg-gradient-to-b from-accent-blue/20 via-accent-blue/10 to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <MotionSection key={step.step} delay={i * 0.1}>
                <GlowCard className="p-6 relative">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                      <span className="font-heading text-sm font-bold text-accent-blue">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Process Works */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Results"
            title="Why This Process Works"
            subtitle="Built from hundreds of engagements, refined for predictable, high-quality outcomes."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { title: "Clear Accountability", text: "Defined milestones and ownership remove confusion and speed up progress." },
              { title: "Risk Control", text: "Continuous validation catches issues early and protects budget and timeline." },
              { title: "Outcome Orientation", text: "Execution remains focused on business impact, not just feature delivery." },
            ].map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.08}>
                <GlowCard className="p-6 h-full">
                  <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionSection>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Want This Process <span className="gradient-text">Applied to Your Project</span>?
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Share your objective and we'll map a tailored implementation plan.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <Link to="/contact" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md">
              Start Project Planning <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Process;
