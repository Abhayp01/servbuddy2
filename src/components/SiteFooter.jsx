import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SiteFooter = () => {
  const columns = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#cta" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Workflow Automation", href: "#features" },
        { name: "Legacy Migration", href: "#features" },
        { name: "Cloud Infrastructure", href: "#features" },
        { name: "Custom Development", href: "#features" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "API Reference", href: "#" },
        { name: "Status Page", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "SLA", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top: Brand + Columns */}
        <div className="grid gap-10 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img
                src="/servbuddy-logo-dark.png"
                alt="ServBuddy"
                className="h-[34px] sm:h-[40px] w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              We build, deploy, and test modern applications for businesses ready to scale. From concept to production, we've got you covered.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <a
                href="https://www.linkedin.com/company/servbuddy-in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="https://wa.me/917818881653"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-700 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
              <a
                href="mailto:contactus@servbuddy.in"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 ServBuddy. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Build. Deploy. Scale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
