import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBuilding, FaHeartbeat, FaIndustry, FaShoppingCart, FaUniversity } from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import MotionSection from "../components/ui/MotionSection";
import GlowCard from "../components/ui/GlowCard";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedGrid from "../components/ui/AnimatedGrid";

const Industries = () => {
  const industries = [
    { icon: FaShoppingCart, title: "Retail & E-commerce", text: "Omnichannel experiences, personalization engines, checkout optimization, and analytics-driven growth." },
    { icon: FaHeartbeat, title: "Healthcare & Wellness", text: "Secure, compliant patient and provider platforms with reliable data workflows and quality assurance." },
    { icon: FaUniversity, title: "FinTech & BFSI", text: "High-availability digital products with strong security controls, risk monitoring, and compliance readiness." },
    { icon: FaBuilding, title: "SaaS & B2B Platforms", text: "Product engineering, cloud scalability, and customer lifecycle tooling that improves retention and revenue." },
    { icon: FaIndustry, title: "Manufacturing & Logistics", text: "Operational dashboards, automation systems, and integration-heavy platforms for supply chain visibility." },
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
              Industries
            </span>
          </MotionSection>
          <MotionSection delay={0.1}>
            <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
              Tailored Technology for<br />
              <span className="gradient-text">Industry-Specific Growth</span>
            </h1>
          </MotionSection>
          <MotionSection delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              Every industry has different operational realities. We bring domain-aware teams and
              architecture decisions aligned with your market, customer behavior, and compliance needs.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.06}>
                <GlowCard className="p-6 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                    <item.icon className="text-accent-blue" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Adapt */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Approach"
            title="How We Adapt by Industry"
            subtitle="Domain expertise meets engineering excellence."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { title: "Regulatory Alignment", text: "Security, privacy, and compliance controls mapped to industry requirements." },
              { title: "Customer Journey Focus", text: "Experience design tailored to your audience behavior and market expectations." },
              { title: "Operational Fit", text: "Architecture and delivery approaches aligned with internal processes and systems." },
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
              Need an <span className="gradient-text">Industry-Specific Solution</span>?
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Let us design a roadmap for your domain, customer segment, and business model.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <Link to="/contact" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md">
              Discuss Your Use Case <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Industries;
