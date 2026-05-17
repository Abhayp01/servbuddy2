import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SiteFooter from "../components/SiteFooter";
import MotionSection from "../components/ui/MotionSection";
import GlowCard from "../components/ui/GlowCard";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedGrid from "../components/ui/AnimatedGrid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const serviceId = "service_v9eneqa";
    const templateId = "template_u2l8exd";
    const publicKey = "Nx_Rq60iHspggdUT0";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll be in touch within 12 hours.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us directly at contactus@servbuddy.in.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-950 text-slate-300">
      {/* Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <AnimatedGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-glow-pulse" />
              Contact Us
            </span>
          </MotionSection>
          <MotionSection delay={0.1}>
            <h1 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
              Let's Build Something{" "}
              <span className="gradient-text">Exceptional Together</span>
            </h1>
          </MotionSection>
          <MotionSection delay={0.2}>
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              Tell us about your product vision, current bottleneck, or transformation goal.
              We'll share a clear plan with next steps, timeline, and effort.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative py-16 border-t border-white/[0.03]">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left: Contact Info */}
            <MotionSection className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-6">Reach Us Directly</h2>
                  <div className="space-y-4">
                    <a
                      href="mailto:contactus@servbuddy.in"
                      className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-accent-blue text-xs" />
                      </div>
                      contactus@servbuddy.in
                    </a>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-accent-blue text-xs" />
                      </div>
                      Noida, India
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-600 mb-3">Connect</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/servbuddy-in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-blue/30 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={14} />
                    </a>
                    <a
                      href="https://wa.me/917818881653"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-green-500/30 transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp size={14} />
                    </a>
                  </div>
                </div>

                <GlowCard className="p-4">
                  <p className="text-xs text-slate-500">
                    ⚡ Typical response time: <span className="text-white font-semibold">within 12 working hours</span>
                  </p>
                </GlowCard>

                <a
                  href="https://wa.me/917818881653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-green-500/10 border border-green-500/20 px-5 py-3.5 text-sm font-semibold text-green-400 hover:bg-green-500/15 transition-all duration-300"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </MotionSection>

            {/* Right: Form */}
            <MotionSection delay={0.1} className="lg:col-span-3">
              <GlowCard className="p-6 sm:p-8">
                <h2 className="font-heading text-xl font-bold text-white mb-1">Project Inquiry</h2>
                <p className="text-sm text-slate-500 mb-6">
                  Share your requirements and we'll get back with a custom proposal.
                </p>

                {status?.type === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-green-400 text-xl" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white">Message Sent!</h3>
                    <p className="mt-2 text-sm text-slate-400 max-w-sm mx-auto">{status.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="premium-input"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">
                          Phone <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your phone number"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="premium-input"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="premium-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows="5"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        className="premium-input resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent-blue py-3.5 text-sm font-heading font-semibold text-white transition-all duration-300 ${
                        isSubmitting
                          ? "opacity-60 cursor-not-allowed"
                          : "hover:bg-blue-500 hover:shadow-glow-sm"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    {status?.type === "error" && (
                      <p className="text-sm text-red-400 mt-2">{status.message}</p>
                    )}
                  </form>
                )}
              </GlowCard>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="relative py-24 border-t border-white/[0.03] mesh-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Next Steps"
            title="What Happens After You Contact Us?"
            subtitle="A clear, structured path from inquiry to execution."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "Discovery Call", text: "We understand your business goals, current challenges, and expected outcomes." },
              { step: "02", title: "Solution Roadmap", text: "You receive a practical execution plan with scope, timeline, and recommended approach." },
              { step: "03", title: "Kickoff & Delivery", text: "Once aligned, our team starts execution with transparent communication and milestones." },
            ].map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.08}>
                <GlowCard className="p-6 h-full">
                  <span className="text-xs font-heading font-bold text-accent-blue/50 tracking-wider">{item.step}</span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.text}</p>
                </GlowCard>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Consultation CTA */}
      <section className="relative py-24 border-t border-white/[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionSection>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Need a Quick <span className="gradient-text">Consultation</span>?
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
              Share your requirement and we'll guide you on the best starting point,
              even before a full project scope.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <a
              href="mailto:contactus@servbuddy.in"
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-4 text-sm font-heading font-semibold text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-glow-md"
            >
              Email Us Directly
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>
          </MotionSection>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
