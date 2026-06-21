import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPalette,
  FaCode,
  FaServer,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarAlt,
  FaRobot,
  FaChartLine,
  FaTerminal,
  FaCheck,
  FaShieldAlt,
} from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import OurWork from "../components/OurWork";
import HeroBackground from "../components/ui/HeroBackground";
import CountUp from "../components/ui/CountUp";
import heroArtVideo from "../assets/about/hero_art.mp4";

/* ─── Premium Scroll-reveal wrapper ─── */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 30,
  x = 0,
  scale = 0.95,
  blur = true,
  rotate = 0,
  threshold = 0.1,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold, rootMargin: "0px 0px -50px 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        scale,
        filter: blur ? "blur(8px)" : "blur(0px)",
        rotate,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              rotate: 0,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Hero Video Component ─── */
const HeroVideo = () => (
  <div className="relative w-full max-w-[560px] mx-auto">
    {/* Soft ambient glow behind the mockup */}
    <div className="absolute -inset-2 bg-gradient-to-tr from-teal-400/20 to-violet-500/20 rounded-2xl blur-xl pointer-events-none" />

    <div className="relative bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] border border-slate-200/60 overflow-hidden">
      {/* Browser Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-4 h-6 bg-slate-100 rounded-md flex items-center px-3">
          <span className="text-[11px] text-slate-400 font-mono">servbuddy.in/hero-showcase</span>
        </div>
      </div>

      {/* Video Content */}
      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
        <video
          src={heroArtVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="bg-white text-slate-800">

      {/* ════════════════ HERO ════════════════ */}
      <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
        <HeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="max-w-2xl text-left">
              <Reveal scale={0.93} blur={true} duration={0.9}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight text-slate-900">
                  We Build Software That{" "}
                  <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                    Grows Your Business.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1} scale={0.95} duration={0.9}>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-650 max-w-xl">
                  From strategy and design to development, deployment, and support — we handle the entire product journey.
                </p>
              </Reveal>

              <Reveal delay={0.18} scale={0.95} duration={0.9}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#cta"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white text-[15px] font-semibold hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Book a Free Consultation
                    <FaArrowRight className="text-xs" />
                  </a>
                  <a
                    href="#our-work"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#our-work")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 bg-white text-slate-600 text-[15px] font-semibold hover:border-slate-350 hover:text-slate-800 transition-all duration-200"
                  >
                    View Our Work
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right — Hero Video */}
            <Reveal delay={0.25} scale={0.96} duration={1}>
              <HeroVideo />
            </Reveal>
          </div>
        </div>
      </section>


      {/* ════════════════ OUR WORK (Scroll-Stacking) ════════════════ */}
      <OurWork />


      {/* ════════════════ FEATURE BENTO GRID ════════════════ */}
      <section id="features" className="py-20 lg:py-28 bg-[#f0fdfa]/60 border-t border-teal-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1]/50 border border-teal-200/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-800 mb-4 shadow-sm">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Your Technology Partner, Not Just Developers
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                From concept to launch, we build software that drives measurable business outcomes.
              </p>
            </div>
          </Reveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            
            {/* Card 1: Custom Software Engineering (Double-wide Card) */}
            <Reveal className="md:col-span-2 row-span-2" delay={0.05}>
              <div className="h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-slate-100 flex flex-col justify-between overflow-hidden relative group transition-all duration-300">
                {/* Background decorative blob */}
                <div className="absolute -right-16 -top-16 w-60 h-60 bg-emerald-50 rounded-full blur-2xl opacity-70 group-hover:scale-110 transition-transform duration-500" />
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-violet-55/10 bg-violet-50 flex items-center justify-center mb-6 border border-violet-100">
                    <FaCode className="text-violet-600 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Software Engineering</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg mb-6">
                    Scalable web applications, mobile apps, internal tools, and SaaS platforms built for growth. We combine modern architectures with bulletproof engineering standards.
                  </p>
                </div>

                {/* Sub-features & Statistics Illustration */}
                <div className="grid sm:grid-cols-2 gap-6 mt-4 pt-6 border-t border-slate-100 relative z-10">
                  <div className="flex flex-col justify-center">
                    <div className="text-3xl font-extrabold text-slate-900 flex items-baseline gap-1">
                      <CountUp to="10" suffix="x" />
                      <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Performance Boost</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Faster deployments, optimized codebases, and reduced cloud spend.</p>
                  </div>
                  
                  {/* Miniature animated visual terminal */}
                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-[11px] text-slate-350 shadow-inner border border-slate-900 relative overflow-hidden group-hover:border-slate-800 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2.5 pb-1.5 border-b border-slate-900">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[9px] text-slate-500 ml-auto">production.sh</span>
                    </div>
                    <div className="space-y-1 text-left">
                      <p className="text-teal-400">$ npm run build</p>
                      <p className="text-slate-400">✓ Optimization complete</p>
                      <p className="text-slate-400">✓ Bundle size: 42kB (Gzipped)</p>
                      <p className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Status: Active & Secure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: UX/UI Design */}
            <Reveal className="md:col-span-1" delay={0.12}>
              <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-slate-100 flex flex-col justify-between h-full group transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5 border border-blue-100">
                    <FaPalette className="text-blue-600 text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">UX/UI Design</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Intuitive user experiences designed to increase adoption, engagement, and customer satisfaction.
                  </p>
                </div>
                
                {/* Visual Accent - interactive look */}
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-slate-50">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                  <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white shadow-sm -ml-2.5" />
                  <div className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white shadow-sm -ml-2.5" />
                  <span className="text-xs text-slate-500 font-medium ml-2">Figma System Active</span>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Cloud Infrastructure & Support */}
            <Reveal className="md:col-span-1" delay={0.18}>
              <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-slate-100 flex flex-col justify-between h-full group transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100">
                    <FaServer className="text-emerald-600 text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Cloud Infrastructure</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Secure deployments, performance optimization, monitoring, and ongoing maintenance.
                  </p>
                </div>
                
                {/* Visual Accent - cloud ping nodes */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-slate-500 font-medium">99.99% Ping Success</span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-mono">12ms response</span>
                </div>
              </div>
            </Reveal>

            {/* Card 4: AI & Workflow Automation */}
            <Reveal className="md:col-span-1" delay={0.24}>
              <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-slate-100 flex flex-col justify-between h-full group transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#fef3c7] flex items-center justify-center mb-5 border border-amber-200">
                    <FaRobot className="text-amber-600 text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">AI & Automation</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Deploying custom AI agents and workflow automation that cut manual operational overhead by up to 40%.
                  </p>
                </div>
                
                {/* Visual Accent - automation workflow mock */}
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-slate-50">
                  <div className="text-[10px] bg-slate-50 border border-slate-150 rounded px-2 py-1 flex items-center gap-1">
                    <span>Query</span> <FaArrowRight className="text-[8px] text-slate-400" /> <span className="font-semibold text-indigo-600">AI Agent</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold">✓ Resolved in 2s</span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* ════════════════ HOW WE WORK (Animated Timeline) ════════════════ */}
      <section id="solutions" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1]/50 border border-teal-200/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-800 mb-4">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                A Process Built for Precision
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Structured yet flexible — keeping your team informed, reducing risk, and turning strategy into outcomes.
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connector line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-400/20 via-indigo-400/20 to-teal-400/20 -translate-x-1/2" />

            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We sit down with your team to understand the business goals, user needs, and technical constraints. Together we define the scope, priorities, and success metrics.",
                color: "bg-blue-600",
                lightBg: "bg-blue-50/70",
                borderCol: "border-blue-200/60",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Architecture",
                desc: "Our engineers design a scalable system architecture with clear milestones, tech stack decisions, and infrastructure blueprints — before writing a single line of code.",
                color: "bg-violet-600",
                lightBg: "bg-violet-50/70",
                borderCol: "border-violet-200/60",
                icon: "📐",
              },
              {
                step: "03",
                title: "Development",
                desc: "Agile sprints with weekly demos, code reviews, and CI/CD from day one. You see real progress every week, not just at the end.",
                color: "bg-emerald-600",
                lightBg: "bg-emerald-50/70",
                borderCol: "border-emerald-200/60",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Deployment",
                desc: "We handle production deployment, cloud infrastructure setup, monitoring, and observability — launching with confidence and zero surprises.",
                color: "bg-amber-600",
                lightBg: "bg-amber-50/70",
                borderCol: "border-amber-200/60",
                icon: "🚀",
              },
              {
                step: "05",
                title: "Optimization",
                desc: "Post-launch, we monitor performance, gather user feedback, and continuously optimize. Your product keeps getting better with data-driven improvements.",
                color: "bg-rose-600",
                lightBg: "bg-rose-50/70",
                borderCol: "border-rose-200/60",
                icon: "📈",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08} scale={0.96}>
                <div className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-12 last:mb-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content card */}
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`${item.lightBg} rounded-2xl p-6 shadow-sm border ${item.borderCol} group hover:shadow-md transition-shadow duration-300`}>
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-[13px] font-extrabold text-slate-400 tracking-wider">{item.step}</span>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      
                      {/* Animated Progress Bar indicator */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15 }}
                        className="h-1 bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full mt-4" 
                      />
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                    <div className={`w-14 h-14 rounded-2xl ${item.lightBg} border-2 border-white shadow-card flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════ METRICS BANNER ════════════════ */}
      <section id="metrics" className="py-16 bg-slate-55 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {[
              { to: "99.9", suffix: "%", label: "Uptime Guaranteed" },
              { to: "40", suffix: "%+", label: "Reduction in Manual Overhead" },
              { to: "14", suffix: "-Day", label: "Average Migration Time" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  <CountUp to={m.to} suffix={m.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════ FINAL CTA ════════════════ */}
      <section id="cta" className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-slate-950 text-white rounded-3xl p-10 sm:p-16 border border-slate-900 shadow-2xl relative overflow-hidden text-center group">
              {/* Premium glows inside CTA */}
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white relative z-10 max-w-2xl mx-auto leading-tight">
                Ready to launch your next product?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mx-auto relative z-10">
                Let's build software your customers actually love.
              </p>

              {/* Triple CTA buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 max-w-3xl mx-auto">
                {/* 1. WhatsApp Primary */}
                <a
                  href="https://wa.me/917818881653?text=Hi%2C%2520I'm%2520interested%2520in%2520working%2520with%2520ServBuddy!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 text-white text-[15px] font-semibold hover:bg-emerald-500 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-emerald-950/20"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>

                {/* 2. Schedule Meeting */}
                <a
                  href="mailto:contactus@servbuddy.in?subject=Schedule%20a%20Product%20Call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-slate-950 text-[15px] font-semibold hover:bg-slate-100 hover:scale-[1.02] transition-all duration-200 shadow-md"
                >
                  <FaCalendarAlt className="text-base text-slate-800" />
                  Book Strategy Call
                </a>

                {/* 3. Email Directly */}
                <a
                  href="mailto:contactus@servbuddy.in"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white text-[15px] font-semibold hover:scale-[1.02] transition-all duration-200"
                >
                  <FaEnvelope className="text-base" />
                  Email Us Directly
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default LandingPage;
