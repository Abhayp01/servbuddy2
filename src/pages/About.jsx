import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBullseye,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import MotionSection from "../components/ui/MotionSection";
import GlowCard from "../components/ui/GlowCard";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedGrid from "../components/ui/AnimatedGrid";
import ParallaxImage from "../components/ui/ParallaxImage";
import WomenImg from "../assets/about/Women.jpg";

const About = () => {
  return (
    <div className="bg-dark-950 text-slate-300">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <AnimatedGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <MotionSection>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
                  About ServBuddy
                </span>
              </MotionSection>
              <MotionSection delay={0.1}>
                <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
                  We Build Technology That<br />
                  <span className="gradient-text">Moves Businesses Forward</span>
                </h1>
              </MotionSection>
              <MotionSection delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
                  A strategic technology company helping organizations transform with product engineering,
                  cloud excellence, AI-driven automation, and quality-first execution.
                </p>
              </MotionSection>
            </div>

            {/* Right: Leadership Parallax Image */}
            <MotionSection delay={0.2} direction="right" className="hidden lg:block">
              <div className="relative">
                <ParallaxImage
                  src={WomenImg}
                  alt="ServBuddy leadership and professional team"
                  aspectRatio="4/5"
                  parallaxSpeed={0.1}
                  revealDirection="right"
                  glowColor="accent-purple"
                />
                {/* Floating stat overlay */}
                <div className="absolute -bottom-4 -left-4 z-20 glass-card p-4 rounded-xl shadow-2xl">
                  <p className="text-xs text-slate-400">Team Excellence</p>
                  <p className="font-heading text-lg font-bold text-white">4.9<span className="text-accent-blue">/5</span> Rating</p>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: FaBullseye, title: "Mission", text: "Deliver measurable business impact through innovative, secure, and scalable digital solutions." },
              { icon: FaLightbulb, title: "Vision", text: "Become the most trusted growth partner for ambitious businesses in the digital economy." },
              { icon: FaHandshake, title: "Values", text: "Transparency, ownership, speed, and long-term partnerships built on trust and excellence." },
            ].map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.08}>
                <GlowCard className="p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4">
                    <item.icon className="text-accent-blue" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Differentiators"
            title="What Makes Us Different"
            subtitle="We combine deep engineering expertise with genuine business understanding to deliver outcomes that matter."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {[
              { icon: FaUsers, title: "Cross-Functional Product Teams", text: "Strategists, designers, engineers, QA, and cloud specialists aligned to one business goal." },
              { icon: FaRocket, title: "Execution with Speed & Quality", text: "Agile delivery combined with engineering rigor to move fast without sacrificing quality." },
              { icon: FaShieldAlt, title: "Security & Reliability First", text: "Every solution designed with security, compliance, and operational resilience in mind." },
              { icon: FaHandshake, title: "Long-Term Client Partnership", text: "We don't just ship projects — we build outcomes and stay through growth stages." },
            ].map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.06}>
                <GlowCard className="p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                    <item.icon className="text-accent-blue text-sm" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">{item.title}</h3>
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
              Let's Build Your Next{" "}
              <span className="gradient-text">Competitive Advantage</span>
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Tell us your business challenge and we'll design a practical, high-impact technology roadmap.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <Link
              to="/contact"
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md"
            >
              Speak with Our Team
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
