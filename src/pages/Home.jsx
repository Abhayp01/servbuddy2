import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaLock,
  FaRobot,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaCog,
  FaQuoteLeft,
} from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import OurWork from "../components/OurWork";
import MotionSection from "../components/ui/MotionSection";
import GlowCard from "../components/ui/GlowCard";
import SectionHeading from "../components/ui/SectionHeading";
import MagneticButton from "../components/ui/MagneticButton";
import ParallaxImage from "../components/ui/ParallaxImage";
import SaasImg from "../assets/navbar/Saas.jpg";
import heroVideo from "../assets/about/video_overlay.mp4";

/* ─── Floating Glass Stat Card ─── */
const FloatingCard = ({ icon: Icon, iconColor, iconBg, label, value, className, delay = 0, duration = 5 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
    transition={{
      opacity: { duration: 1, delay },
      scale: { duration: 1, delay },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay },
    }}
    className={`absolute z-30 glass-card p-4 rounded-xl shadow-2xl ${className}`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
        <Icon className={`${iconColor} text-sm`} />
      </div>
      <div>
        <p className="text-[11px] text-slate-400">{label}</p>
        <p className="text-sm font-heading font-bold text-white">{value}</p>
      </div>
    </div>
  </motion.div>
);

/* ─── Hero Particles ─── */
const HeroParticles = () => (
  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="hero-particle"
        style={{
          left: `${Math.random() * 100}%`,
          bottom: `-${Math.random() * 20}px`,
          animationDuration: `${8 + Math.random() * 12}s`,
          animationDelay: `${Math.random() * 10}s`,
          width: `${1 + Math.random() * 2}px`,
          height: `${1 + Math.random() * 2}px`,
          opacity: 0.3 + Math.random() * 0.5,
        }}
      />
    ))}
  </div>
);

const Home = () => {
  const services = [
    { name: "AI & Automation", icon: FaRobot, path: "/ai-automation", desc: "Intelligent workflows, decision systems, and production-grade ML pipelines." },
    { name: "Cloud & DevOps", icon: FaCloud, path: "/cloud-devops", desc: "Scalable infrastructure, CI/CD excellence, and cloud-native architectures." },
    { name: "Product Engineering", icon: FaCode, path: "/web-mobile", desc: "Full-stack web and mobile products built for speed, scale, and conversion." },
    { name: "Cybersecurity", icon: FaShieldAlt, path: "/cybersecurity", desc: "Zero-trust security, compliance engineering, and threat detection systems." },
    { name: "Data & Analytics", icon: FaChartLine, path: "/data-analytics", desc: "Data pipelines, real-time dashboards, and predictive intelligence platforms." },
    { name: "Quality Engineering", icon: FaCheckCircle, path: "/quality-engineering", desc: "Automated testing, performance engineering, and release confidence systems." },
  ];

  const metrics = [
    { value: "120+", label: "Projects Delivered" },
    { value: "95%", label: "Client Retention" },
    { value: "2.4x", label: "Faster Delivery" },
    { value: "4.9/5", label: "Client Rating" },
  ];

  const caseStudies = [
    {
      title: "SaaS Platform Modernization",
      outcome: "32% infrastructure cost reduction",
      tags: ["Cloud", "DevOps", "Microservices"],
      text: "Re-architected legacy monolith into cloud-native services with CI/CD and observability.",
    },
    {
      title: "E-commerce Conversion Engine",
      outcome: "27% conversion rate increase",
      tags: ["React", "Analytics", "UX"],
      text: "Redesigned checkout flow with performance optimization and experimentation framework.",
    },
    {
      title: "AI Support Automation",
      outcome: "48% ticket automation rate",
      tags: ["AI/ML", "NLP", "Integration"],
      text: "Built intelligent workflow integrated with helpdesk and knowledge management systems.",
    },
  ];

  const testimonials = [
    {
      quote: "ServBuddy transformed our product roadmap into a scalable platform faster than we expected. Their execution quality is exceptional.",
      name: "Founder",
      company: "B2B SaaS Startup",
    },
    {
      quote: "Their cloud and DevOps team improved our reliability metrics and helped us deploy with enterprise-grade confidence.",
      name: "CTO",
      company: "FinTech Company",
    },
    {
      quote: "Outstanding ownership, proactive communication, and genuinely business-focused execution. A true strategic partner.",
      name: "Director",
      company: "Digital Commerce Brand",
    },
    {
      quote: "The AI automation system they built reduced our manual workload by 60% and paid for itself within the first quarter.",
      name: "VP of Operations",
      company: "Healthcare Platform",
    },
    {
      quote: "ServBuddy doesn't just ship code — they build outcomes. Their architecture decisions saved us months of rework.",
      name: "Head of Engineering",
      company: "Enterprise SaaS",
    },
    {
      quote: "We've worked with agencies before, but ServBuddy's combination of speed, quality, and business thinking is unmatched.",
      name: "CEO",
      company: "Growth-Stage Startup",
    },
  ];

  const industries = [
    { icon: "🛒", name: "Retail & E-commerce" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "🏦", name: "FinTech & BFSI" },
    { icon: "☁️", name: "SaaS & Platforms" },
    { icon: "🏭", name: "Manufacturing" },
  ];

  return (
    <div className="bg-dark-950 text-slate-300">
      {/* ════════════════ IMMERSIVE CINEMATIC HERO ════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layer 1 — Cinematic Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.55) saturate(1.15)" }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Dark overlays for readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark-950/80 via-dark-950/40 to-dark-950" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-dark-950/90 via-transparent to-dark-950/60" />

        {/* Layer 2 — Atmospheric Effects */}
        <div className="hero-vignette" />
        <div className="hero-fog" />
        <div className="hero-volumetric" />
        <HeroParticles />

        {/* Noise texture */}
        <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />

        {/* Ambient glow accents */}
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-accent-blue/[0.04] rounded-full blur-[120px] z-[2] pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] bg-accent-purple/[0.03] rounded-full blur-[100px] z-[2] pointer-events-none" />

        {/* Floating glassmorphism stat cards */}
        <div className="hidden lg:block">
          <FloatingCard icon={FaCloud} iconColor="text-accent-blue" iconBg="bg-accent-blue/20"
            label="Cloud Uptime" value="99.97%" className="top-[18%] right-[8%]" delay={1.2} duration={5} />
          <FloatingCard icon={FaBrain} iconColor="text-accent-cyan" iconBg="bg-accent-cyan/20"
            label="AI Systems" value="Production Ready" className="top-[42%] right-[4%]" delay={1.6} duration={7} />
          <FloatingCard icon={FaRocket} iconColor="text-green-400" iconBg="bg-green-500/20"
            label="Delivery Speed" value="2.4x Faster" className="bottom-[22%] right-[12%]" delay={2.0} duration={6} />
          <FloatingCard icon={FaShieldAlt} iconColor="text-accent-purple" iconBg="bg-accent-purple/20"
            label="Security" value="Zero-Trust" className="bottom-[18%] left-[4%]" delay={1.8} duration={8} />
        </div>

        {/* Layer 3 — Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="max-w-3xl">
            <MotionSection>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
                Strategic Technology Partner
              </span>
            </MotionSection>

            <MotionSection delay={0.15}>
              <h1 className="mt-8 font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-white">
                Engineering{" "}
                <br className="hidden sm:block" />
                <span className="gradient-text">Digital Systems</span>
                <br />
                That Scale.
              </h1>
            </MotionSection>

            <MotionSection delay={0.3}>
              <p className="mt-7 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300/80 max-w-xl">
                We partner with startups, scale-ups, and enterprises to architect and deliver
                AI platforms, cloud infrastructure, and product engineering systems that drive real business growth.
              </p>
            </MotionSection>

            <MotionSection delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md">
                  Book Strategy Call
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 backdrop-blur-md bg-white/[0.03] px-8 py-4 text-sm font-heading font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
                  Explore Services
                </Link>
              </div>
            </MotionSection>

            <MotionSection delay={0.55}>
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.06] pt-8">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-heading text-2xl lg:text-3xl font-bold text-white">{m.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </MotionSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-accent-blue"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ════════════════ TRUSTED BY ════════════════ */}
      <section className="relative py-16 border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-600 mb-8">
              Trusted by modern businesses across industries
            </p>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              {industries.map((ind) => (
                <div key={ind.name} className="flex items-center gap-2 text-slate-500">
                  <span className="text-lg">{ind.icon}</span>
                  <span className="text-sm font-medium">{ind.name}</span>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ════════════════ OUR WORK (Scroll-Stacking) ════════════════ */}
      <OurWork />

      {/* ════════════════ CORE CAPABILITIES ════════════════ */}
      <section className="relative py-24 mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Build"
            title="Full-Spectrum Technology Capabilities"
            subtitle="End-to-end engineering services designed for performance, reliability, and competitive advantage."
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <MotionSection key={service.name} delay={i * 0.08}>
                <Link to={service.path}>
                  <GlowCard className="p-6 h-full group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors duration-300">
                      <service.icon className="text-accent-blue" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {service.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <FaArrowRight className="text-[10px]" />
                    </div>
                  </GlowCard>
                </Link>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ WHY SERVBUDDY ════════════════ */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why ServBuddy"
            title="Built for Outcomes, Not Just Output"
            subtitle="Every engagement is designed around measurable business impact, engineering excellence, and long-term partnership."
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FaRocket, title: "Speed to Market", text: "Accelerated delivery with agile squads and proven execution frameworks." },
              { icon: FaUsers, title: "Business-First", text: "Every solution is mapped to clear business outcomes and ROI metrics." },
              { icon: FaLock, title: "Secure by Design", text: "Security and compliance integrated from architecture to deployment." },
              { icon: FaBrain, title: "Innovation + Rigor", text: "Modern tech with real-world execution that teams can sustain." },
            ].map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.08}>
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

      {/* ════════════════ CASE STUDIES ════════════════ */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Results"
            title="Real Outcomes from Real Engagements"
            subtitle="A snapshot of how we help companies improve efficiency, product quality, and business growth."
          />

          {/* SaaS Showcase Image */}
          <MotionSection delay={0.1} className="mt-12 mb-16">
            <ParallaxImage
              src={SaasImg}
              alt="SaaS cloud architecture and platform engineering"
              aspectRatio="21/9"
              parallaxSpeed={0.1}
              overlay={true}
              revealDirection="up"
            />
            <div className="absolute bottom-8 left-8 z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-dark-950/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-glow-pulse" />
                Platform Engineering
              </span>
            </div>
          </MotionSection>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, i) => (
              <MotionSection key={study.title} delay={i * 0.1}>
                <GlowCard className="p-6 h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">{study.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent-blue">{study.outcome}</p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{study.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>

          <MotionSection delay={0.3} className="mt-10 text-center">
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-blue-400 transition-colors"
            >
              View All Case Studies
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      {/* ════════════════ PROCESS ════════════════ */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How We Work"
            title="A Process Built for Precision"
            subtitle="Structured yet flexible — keeping your team informed, reducing risk, and turning strategy into outcomes."
          />

          <div className="mt-16 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent -translate-y-1/2" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { step: "01", title: "Discovery", desc: "Align on goals, users, and priorities." },
                { step: "02", title: "Architecture", desc: "Design scalable systems and milestones." },
                { step: "03", title: "Development", desc: "Build with agile sprints and quality." },
                { step: "04", title: "Deployment", desc: "Launch with confidence and observability." },
                { step: "05", title: "Optimization", desc: "Improve continuously with data." },
              ].map((item, i) => (
                <MotionSection key={item.step} delay={i * 0.08}>
                  <GlowCard className="p-5 text-center relative">
                    <span className="text-xs font-heading font-bold text-accent-blue/50 tracking-wider">
                      {item.step}
                    </span>
                    <h4 className="mt-2 font-heading text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500">{item.desc}</p>
                  </GlowCard>
                </MotionSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS (MARQUEE) ════════════════ */}
      <section className="relative py-24 border-t border-white/[0.03] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionHeading
            badge="Client Voices"
            title="Trusted by Engineering Leaders"
          />
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10" />

          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl mx-3 min-w-[320px] max-w-[360px] flex-shrink-0"
              >
                <FaQuoteLeft className="text-accent-blue/20 mb-3" />
                <p className="text-sm leading-relaxed text-slate-400">{item.quote}</p>
                <div className="mt-4 pt-3 border-t border-white/[0.04]">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ METRICS ════════════════ */}
      <section className="relative py-20 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <MotionSection key={m.label} delay={i * 0.1} className="text-center">
                <p className="font-heading text-4xl sm:text-5xl font-bold gradient-text">{m.value}</p>
                <p className="mt-2 text-sm text-slate-500">{m.label}</p>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ════════════════ */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionSection>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Build Something{" "}
              <span className="gradient-text">Exceptional</span>?
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto">
              Whether you need a full product team, cloud modernization, or AI transformation —
              we're ready to engineer your next competitive advantage.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md"
              >
                Start Your Project
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:contactus@servbuddy.in"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-heading font-semibold text-slate-300 hover:text-white hover:border-white/20 transition-all duration-300"
              >
                Email Us Directly
              </a>
            </div>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Home;
