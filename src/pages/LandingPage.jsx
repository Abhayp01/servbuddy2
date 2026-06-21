import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPalette,
  FaCode,
  FaServer,
} from "react-icons/fa";
import SiteFooter from "../components/SiteFooter";
import OurWork from "../components/OurWork";
import heroArtVideo from "../assets/about/hero_art.mp4";

/* ─── Scroll-reveal wrapper — used selectively ─── */
const Reveal = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Hero Video Component ─── */
const HeroVideo = () => (
  <div className="relative w-full max-w-[560px] mx-auto">
    {/* Soft ambient glow behind the mockup */}
    <div className="absolute -inset-2 bg-gradient-to-tr from-primary/10 to-violet-500/10 rounded-2xl blur-xl pointer-events-none" />
    
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
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white text-slate-800">

      {/* ════════════════ HERO ════════════════ */}
      <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/4 translate-x-1/4" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="max-w-xl">
              <Reveal>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                  We Build Software That{" "}
                  <span className="text-slate-900">Grows Your Business.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 max-w-lg">
                  From strategy and design to development, deployment, and support — we handle the entire product journey.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#cta"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white text-[15px] font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm"
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-600 text-[15px] font-semibold hover:border-slate-300 hover:text-slate-800 transition-all duration-200"
                  >
                    View Our Work
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right — Hero Video */}
            <Reveal delay={0.2}>
              <HeroVideo />
            </Reveal>
          </div>
        </div>
      </section>


      {/* ════════════════ FEATURE GRID ════════════════ */}
      <section id="features" className="py-20 lg:py-28 bg-[#f0fdfa]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1]/40 border border-teal-200/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-800 mb-4 shadow-sm">
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FaPalette,
                title: "UX/UI Design",
                desc: "Intuitive user experiences designed to increase adoption, engagement, and customer satisfaction.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: FaCode,
                title: "Custom Software Engineering",
                desc: "Scalable web applications, mobile apps, internal tools, and SaaS platforms built for growth.",
                color: "text-violet-600",
                bg: "bg-violet-50",
              },
              {
                icon: FaServer,
                title: "Cloud Infrastructure & Support",
                desc: "Secure deployments, performance optimization, monitoring, and ongoing maintenance.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.08}>
                <div className="bg-white rounded-card p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full border border-slate-100">
                  <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-5`}>
                    <feature.icon className={`${feature.color} text-lg`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════ OUR WORK (Scroll-Stacking) ════════════════ */}
      <OurWork />


      {/* ════════════════ HOW WE WORK ════════════════ */}
      <section id="solutions" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1]/40 border border-teal-200/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-800 mb-4">
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
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/10 via-primary/20 to-primary/10 -translate-x-1/2" />

            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We sit down with your team to understand the business goals, user needs, and technical constraints. Together we define the scope, priorities, and success metrics.",
                color: "bg-blue-600",
                lightBg: "bg-blue-50",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Architecture",
                desc: "Our engineers design a scalable system architecture with clear milestones, tech stack decisions, and infrastructure blueprints — before writing a single line of code.",
                color: "bg-violet-600",
                lightBg: "bg-violet-50",
                icon: "📐",
              },
              {
                step: "03",
                title: "Development",
                desc: "Agile sprints with weekly demos, code reviews, and CI/CD from day one. You see real progress every week, not just at the end.",
                color: "bg-emerald-600",
                lightBg: "bg-emerald-50",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Deployment",
                desc: "We handle production deployment, cloud infrastructure setup, monitoring, and observability — launching with confidence and zero surprises.",
                color: "bg-amber-600",
                lightBg: "bg-amber-50",
                icon: "🚀",
              },
              {
                step: "05",
                title: "Optimization",
                desc: "Post-launch, we monitor performance, gather user feedback, and continuously optimize. Your product keeps getting better with data-driven improvements.",
                color: "bg-rose-600",
                lightBg: "bg-rose-50",
                icon: "📈",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-12 last:mb-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content card */}
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="bg-[#f0fdfa] rounded-xl p-6 shadow-sm border border-[#ccfbf1]">
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-[13px] font-extrabold text-slate-400 tracking-wider">{item.step}</span>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                    <div className={`w-14 h-14 rounded-2xl ${item.lightBg} border-2 border-white shadow-card flex items-center justify-center text-2xl`}>
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
      <section id="metrics" className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {[
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "40%+", label: "Reduction in Manual Overhead" },
              { value: "14-Day", label: "Average Migration Time" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {m.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════ FINAL CTA ════════════════ */}
      <section id="cta" className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-teal-50 via-slate-50 to-teal-50/50 rounded-2xl p-8 sm:p-12 text-center border border-teal-100/50">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Ready to transition your operations?
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
                Join hundreds of forward-thinking enterprises scaling their business with modern digital infrastructure.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thanks! We'll reach out to ${email} shortly.`);
                  setEmail("");
                }}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm whitespace-nowrap"
                >
                  Get Started Today
                  <FaArrowRight className="text-xs" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>


      <SiteFooter />
    </div>
  );
};

export default LandingPage;
