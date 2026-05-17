import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import MotionSection from "../components/ui/MotionSection";
import GlowCard from "../components/ui/GlowCard";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedGrid from "../components/ui/AnimatedGrid";

const CaseStudies = () => {
  const studies = [
    {
      title: "SaaS Platform Modernization",
      outcome: "32% infrastructure cost reduction · 2.1x faster releases",
      tags: ["Cloud", "DevOps", "Microservices"],
      text: "Re-architected legacy backend into cloud-native services with CI/CD and full observability.",
    },
    {
      title: "E-commerce Conversion Engine",
      outcome: "27% conversion increase · 18% bounce rate reduction",
      tags: ["React", "Analytics", "Performance"],
      text: "Redesigned checkout flow, performance-optimized frontend, and implemented experimentation framework.",
    },
    {
      title: "AI-Powered Support Automation",
      outcome: "48% ticket automation · 60% faster response",
      tags: ["AI/ML", "NLP", "Integration"],
      text: "Built AI workflow integrated with helpdesk and internal knowledge management systems.",
    },
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
              Case Studies
            </span>
          </MotionSection>
          <MotionSection delay={0.1}>
            <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
              Real Outcomes from<br />
              <span className="gradient-text">Real Engagements</span>
            </h1>
          </MotionSection>
          <MotionSection delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              A snapshot of how we help companies improve efficiency, product quality, and business growth.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {studies.map((study, i) => (
              <MotionSection key={study.title} delay={i * 0.08}>
                <GlowCard className="p-6 h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">{study.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-accent-blue">{study.outcome}</p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{study.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Patterns */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Patterns"
            title="Common Success Patterns"
            subtitle="Recurring themes across our most impactful engagements."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { title: "Modernized Architecture", text: "Upgrading core systems unlocked faster releases and long-term scalability." },
              { title: "User-Centric Optimization", text: "Performance and UX improvements directly increased retention and conversion." },
              { title: "Automation at Scale", text: "Workflow automation reduced manual load and improved operational efficiency." },
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
              Your Success Story <span className="gradient-text">Could Be Next</span>
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Tell us your goal and we'll show you the fastest path to measurable results.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <Link to="/contact" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md">
              Build My Success Plan <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default CaseStudies;
