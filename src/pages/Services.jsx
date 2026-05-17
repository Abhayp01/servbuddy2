import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine, FaCheckCircle, FaCloud, FaCode, FaRobot, FaShieldAlt } from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import MotionSection from "../components/ui/MotionSection";
import GlowCard from "../components/ui/GlowCard";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedGrid from "../components/ui/AnimatedGrid";
import ParallaxImage from "../components/ui/ParallaxImage";
import MaintenanceImg from "../assets/navbar/Maintenance2.jpg";

const Services = () => {
  const serviceCards = [
    { title: "AI & Automation", path: "/ai-automation", icon: FaRobot, desc: "Intelligent workflows, decision systems, and production-grade ML pipelines that transform operations." },
    { title: "Cloud & DevOps", path: "/cloud-devops", icon: FaCloud, desc: "Cloud-native architectures, CI/CD excellence, and infrastructure automation at scale." },
    { title: "Product Engineering", path: "/web-mobile", icon: FaCode, desc: "Full-stack web and mobile products built for speed, conversion, and enterprise-grade reliability." },
    { title: "Cybersecurity", path: "/cybersecurity", icon: FaShieldAlt, desc: "Zero-trust security frameworks, compliance engineering, and advanced threat detection systems." },
    { title: "Data & Analytics", path: "/data-analytics", icon: FaChartLine, desc: "Data pipeline engineering, real-time analytics dashboards, and predictive intelligence platforms." },
    { title: "Quality Engineering", path: "/quality-engineering", icon: FaCheckCircle, desc: "Automated testing frameworks, performance engineering, and release confidence systems." },
  ];

  return (
    <div className="bg-dark-950 text-slate-300">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <AnimatedGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <MotionSection>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
                  Our Services
                </span>
              </MotionSection>
              <MotionSection delay={0.1}>
                <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
                  Everything You Need to Build<br />
                  <span className="gradient-text">and Scale Digital Success</span>
                </h1>
              </MotionSection>
              <MotionSection delay={0.2}>
                <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
                  From strategy and product development to cloud reliability and security —
                  complete digital transformation services with measurable outcomes.
                </p>
              </MotionSection>
            </div>

            {/* Right: Parallax Image */}
            <MotionSection delay={0.2} direction="right" className="hidden lg:block">
              <ParallaxImage
                src={MaintenanceImg}
                alt="Software engineering and maintenance services"
                aspectRatio="4/3"
                parallaxSpeed={0.12}
                revealDirection="right"
                glowColor="accent-cyan"
              />
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service, i) => (
              <MotionSection key={service.title} delay={i * 0.06}>
                <Link to={service.path}>
                  <GlowCard className="p-6 h-full group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors duration-300">
                      <service.icon className="text-accent-blue" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore details <FaArrowRight className="text-xs" />
                    </div>
                  </GlowCard>
                </Link>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Delivery"
            title="Our Delivery Approach"
            subtitle="A structured, transparent process that turns strategy into measurable business outcomes."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "Discover", text: "We clarify your goals, users, technical landscape, and priorities." },
              { step: "02", title: "Build", text: "Cross-functional teams execute with speed, quality, and transparency." },
              { step: "03", title: "Scale", text: "We optimize performance, security, and operations for long-term growth." },
            ].map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.08}>
                <GlowCard className="p-6 text-center h-full">
                  <span className="text-xs font-heading font-bold text-accent-blue/50 tracking-wider">{item.step}</span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engagement"
            title="Flexible Engagement Models"
            subtitle="Choose the model that fits your project scope, team structure, and growth stage."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { title: "Fixed Scope Project", text: "Perfect for clearly defined initiatives with strict timelines and deliverables." },
              { title: "Dedicated Team", text: "An embedded team model for companies needing continuous execution support." },
              { title: "Managed Delivery", text: "End-to-end ownership from planning to optimization with SLA-backed outcomes." },
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
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Tell us about your challenge and we'll design a technology roadmap tailored to your goals.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <Link
              to="/contact"
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md"
            >
              Start a Conversation
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Services;
