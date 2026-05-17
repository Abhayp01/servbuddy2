import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SiteFooter from "../components/SiteFooter";
import MotionSection from "../components/ui/MotionSection";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedGrid from "../components/ui/AnimatedGrid";

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className="glass-card rounded-xl overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center justify-between p-5">
      <h3 className="font-heading text-sm font-semibold text-white pr-4">{question}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        <FaChevronDown className="text-accent-blue text-xs" />
      </motion.div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="px-5 pb-5 border-t border-white/[0.04] pt-4">
            <p className="text-sm text-slate-400 leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of companies do you work with?",
      answer: "We work with startups, scale-ups, and enterprise organizations across industries including SaaS, FinTech, Healthcare, Retail, and Manufacturing. Our engagement models are flexible and adapt to your size and stage.",
    },
    {
      question: "How quickly can you start a new project?",
      answer: "Depending on the engagement model, we can mobilize a team within 1-2 weeks. For urgent projects, we offer accelerated onboarding to begin discovery and architecture planning immediately.",
    },
    {
      question: "Can you work alongside our existing engineering team?",
      answer: "Absolutely. We specialize in embedded team models where our engineers integrate seamlessly into your workflows, tools, and sprint cadence. We adapt to your processes, not the other way around.",
    },
    {
      question: "How do you handle security and compliance?",
      answer: "Security is integrated into every phase of our delivery. We follow secure-by-design principles, implement zero-trust architectures, and ensure compliance readiness for standards like SOC 2, HIPAA, GDPR, and PCI DSS.",
    },
    {
      question: "What is your typical project delivery timeline?",
      answer: "Timelines vary based on scope and complexity. MVPs typically take 6-10 weeks, platform modernizations 3-6 months, and enterprise solutions 6-12 months. We provide detailed timelines during the discovery phase.",
    },
    {
      question: "How do you ensure quality throughout delivery?",
      answer: "We use automated testing, continuous integration, code reviews, performance benchmarking, and security scanning at every sprint. Quality gates are enforced before any release to production.",
    },
    {
      question: "What happens after the project is delivered?",
      answer: "We offer managed service retainers for ongoing optimization, monitoring, support, and continuous improvement. Many of our clients transition from project-based to long-term partnership models.",
    },
    {
      question: "How do you price your services?",
      answer: "We offer fixed-scope pricing for well-defined projects and time-and-materials pricing for ongoing engagements. During discovery, we provide transparent cost estimates with clear deliverables and milestones.",
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
              FAQ
            </span>
          </MotionSection>
          <MotionSection delay={0.1}>
            <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
          </MotionSection>
          <MotionSection delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              Everything you need to know about working with ServBuddy.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="relative py-16 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <MotionSection key={i} delay={i * 0.04}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
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
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Still Have <span className="gradient-text">Questions</span>?
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Reach out directly and we'll answer any questions about our services, process, or engagement models.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <Link to="/contact" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md">
              Contact Us <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default FaqPage;
