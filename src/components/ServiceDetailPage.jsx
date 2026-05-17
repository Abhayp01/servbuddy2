import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import SiteFooter from "./SiteFooter";
import MotionSection from "./ui/MotionSection";
import GlowCard from "./ui/GlowCard";
import SectionHeading from "./ui/SectionHeading";
import AnimatedGrid from "./ui/AnimatedGrid";

const ServiceDetailPage = ({
  badge,
  title,
  subtitle,
  capabilities,
  outcomes,
  processSteps,
}) => {
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
              {badge}
            </span>
          </MotionSection>

          <MotionSection delay={0.1}>
            <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
              {title}
            </h1>
          </MotionSection>

          <MotionSection delay={0.2}>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </MotionSection>

          <MotionSection delay={0.3}>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-7 py-3.5 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md"
            >
              Start Your Project
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="What We Deliver"
            align="left"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.06}>
                <GlowCard className="p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4">
                    <item.icon className="text-accent-blue" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Process */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2">
          {/* Outcomes */}
          <div>
            <MotionSection>
              <SectionHeading
                badge="Outcomes"
                title="Business Impact"
                align="left"
              />
            </MotionSection>
            <ul className="mt-8 space-y-4">
              {outcomes.map((outcome, i) => (
                <MotionSection key={outcome} delay={i * 0.06}>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 text-accent-blue text-sm flex-shrink-0" />
                    <span className="text-sm text-slate-400 leading-relaxed">{outcome}</span>
                  </li>
                </MotionSection>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <MotionSection>
              <SectionHeading
                badge="Execution"
                title="How We Execute"
                align="left"
              />
            </MotionSection>
            <div className="mt-8 space-y-4">
              {processSteps.map((step, idx) => (
                <MotionSection key={step.title} delay={idx * 0.08}>
                  <GlowCard className="p-5">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-accent-blue/60">
                      Step {idx + 1}
                    </span>
                    <h4 className="mt-1 font-heading text-base font-semibold text-white">{step.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{step.desc}</p>
                  </GlowCard>
                </MotionSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engagement"
            title="Flexible Engagement Models"
            subtitle="Choose the model that best fits your project scope, timeline, and team structure."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { title: "Project-Based Delivery", text: "Best for clearly scoped initiatives with defined timelines, milestones, and outcomes." },
              { title: "Dedicated Team Model", text: "A cross-functional team fully aligned with your roadmap, sprint cadence, and priorities." },
              { title: "Managed Service Retainer", text: "Continuous optimization, support, and proactive improvements for long-term growth." },
            ].map((model, i) => (
              <MotionSection key={model.title} delay={i * 0.08}>
                <GlowCard className="p-6 h-full">
                  <h3 className="font-heading text-base font-semibold text-white">{model.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{model.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
          />
          <div className="mt-10 space-y-3">
            {[
              "How fast can this service be implemented for our team?",
              "Can you collaborate with our in-house engineering and product teams?",
              "How do you ensure quality, security, and reliability throughout delivery?",
            ].map((question, i) => (
              <MotionSection key={question} delay={i * 0.06}>
                <GlowCard className="p-5">
                  <p className="font-heading text-sm font-semibold text-white">{question}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Yes. We tailor delivery velocity, team setup, and governance to your business context and existing systems.
                  </p>
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
              Ready to Build Something <span className="gradient-text">Exceptional</span>?
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Talk to our experts and get a clear execution plan tailored to your goals, timeline, and budget.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <Link
              to="/contact"
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md"
            >
              Book a Strategy Call
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ServiceDetailPage;
