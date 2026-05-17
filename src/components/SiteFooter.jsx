import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import MotionSection from "./ui/MotionSection";

const SiteFooter = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Process", path: "/process" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "AI & Automation", path: "/ai-automation" },
    { name: "Cloud & DevOps", path: "/cloud-devops" },
    { name: "Web & Mobile", path: "/web-mobile" },
    { name: "Cybersecurity", path: "/cybersecurity" },
    { name: "Data Analytics", path: "/data-analytics" },
    { name: "Quality Engineering", path: "/quality-engineering" },
  ];

  return (
    <footer className="relative border-t border-white/[0.04] bg-dark-950">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-accent-blue/5 blur-[60px] pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <MotionSection className="lg:col-span-1">
            <img
              src="/servbuddy-logo-dark.png"
              alt="ServBuddy"
              className="h-10 w-auto object-contain mb-5"
            />
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              We engineer AI-powered platforms, resilient cloud architectures,
              and high-performance digital products that help ambitious companies scale.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/servbuddy-in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-blue/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="https://wa.me/917818881653"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-green-500/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
              <a
                href="mailto:contactus@servbuddy.in"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-accent-blue/30 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </MotionSection>

          {/* Quick Links */}
          <MotionSection delay={0.1}>
            <h4 className="text-sm font-heading font-semibold text-white mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionSection>

          {/* Services */}
          <MotionSection delay={0.2}>
            <h4 className="text-sm font-heading font-semibold text-white mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionSection>

          {/* Contact */}
          <MotionSection delay={0.3}>
            <h4 className="text-sm font-heading font-semibold text-white mb-5 tracking-wide">Get in Touch</h4>
            <div className="space-y-3 text-sm text-slate-500">
              <a
                href="mailto:contactus@servbuddy.in"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-accent-blue/60" size={13} />
                contactus@servbuddy.in
              </a>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent-blue/60" size={13} />
                Noida, India
              </p>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-blue-400 transition-colors"
              >
                Start a Project
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </MotionSection>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} ServBuddy. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Engineered for growth, speed, and trust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
