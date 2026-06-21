import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Inside the Lab 🧪", href: "https://portfolio.servbuddy.in/", isExternal: true },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav"
          : "bg-white"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 h-[72px]">
          {/* Logo */}
          <Link to="/" aria-label="ServBuddy Home" className="relative z-10 flex items-center">
            <img
              src="/servbuddy-logo.png"
              alt="ServBuddy"
              className="h-[28px] sm:h-[32px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ name, href, isExternal }) => {
              if (isExternal) {
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-4 py-2 rounded-lg inline-flex items-center justify-center ml-2 group overflow-hidden bg-[#ccfbf1]/20 hover:bg-[#ccfbf1]/35 transition-all duration-200"
                  >
                    {/* Content */}
                    <span className="relative z-10 text-slate-800 group-hover:text-slate-950 font-semibold text-[14px] flex items-center">
                      {name}
                    </span>

                    {/* SVG border drawing highlight */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none animated-border-svg" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="desktop-border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#5eead4" />
                          <stop offset="100%" stopColor="#0d9488" />
                        </linearGradient>
                      </defs>
                      <rect
                        rx="7"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                      />
                      <rect
                        rx="7"
                        fill="none"
                        stroke="url(#desktop-border-glow)"
                        strokeWidth="1.5"
                        pathLength="100"
                        className="animate-border-glow"
                      />
                    </svg>

                    {/* Corner pulsing dot */}
                    <span className="absolute -top-1 -right-1 flex h-2 w-2 z-20">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                  </a>
                );
              }
              return (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => handleAnchorClick(e, href)}
                  className="px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                >
                  {name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#cta"
              onClick={(e) => handleAnchorClick(e, "#cta")}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-slate-900 text-white text-[14px] font-semibold hover:bg-slate-800 transition-all duration-200 shadow-sm"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[110] flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-slate-800 rounded-full"
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-slate-800 rounded-full"
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-slate-800 rounded-full"
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-white flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-2 w-full max-w-[280px] px-6">
              {navLinks.map(({ name, href, isExternal }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="w-full text-center"
                >
                  {isExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="relative py-3.5 px-6 rounded-xl inline-flex items-center justify-center w-full mt-2 group overflow-hidden bg-[#ccfbf1]/20 hover:bg-[#ccfbf1]/35 transition-all duration-200"
                    >
                      {/* Content */}
                      <span className="relative z-10 text-2xl font-bold text-slate-800 group-hover:text-slate-955 text-center w-full transition-all duration-200">
                        {name}
                      </span>

                      {/* SVG border drawing highlight */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none animated-border-svg" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="mobile-border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5eead4" />
                            <stop offset="100%" stopColor="#0d9488" />
                          </linearGradient>
                        </defs>
                        <rect
                          rx="11"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="1.5"
                        />
                        <rect
                          rx="11"
                          fill="none"
                          stroke="url(#mobile-border-glow)"
                          strokeWidth="1.5"
                          pathLength="100"
                          className="animate-border-glow"
                        />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={href}
                      onClick={(e) => handleAnchorClick(e, href)}
                      className="block text-2xl font-bold py-3 px-6 rounded-xl transition-all duration-200 text-slate-800 hover:text-slate-950"
                    >
                      {name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-6 flex flex-col gap-3 items-center w-full"
              >
                <a
                  href="#cta"
                  onClick={(e) => handleAnchorClick(e, "#cta")}
                  className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-slate-900 text-white text-[16px] font-bold shadow-sm hover:bg-slate-800 transition-all duration-200"
                >
                  Book a Demo
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
