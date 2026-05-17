import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Process", path: "/process" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link to="/" aria-label="ServBuddy Home" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/servbuddy-logo-dark.png"
                alt="ServBuddy"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden xl:flex items-center gap-1"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map(({ name, path }) => {
              const isActive = location.pathname === path;
              const isHovered = hoveredPath === path;
              const shouldShowOutline = hoveredPath ? isHovered : isActive;

              return (
                <Link
                  key={name}
                  to={path}
                  onMouseEnter={() => setHoveredPath(path)}
                  className="relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300"
                >
                  <span className={`relative z-10 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}>
                    {name}
                  </span>
                  {shouldShowOutline && (
                    <motion.div
                      layoutId="nav-outline"
                      className={`absolute inset-0 rounded-full border ${isActive ? 'border-accent-blue/80 bg-accent-blue/[0.04]' : 'border-white/[0.12] bg-white/[0.04]'}`}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <MagneticButton
              as="a"
              href="/contact"
              className="rounded-full bg-accent-blue px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              <span className="relative z-10">Start a Project</span>
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative z-[110] flex flex-col justify-center items-center w-10 h-10"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="block w-6 h-[1.5px] bg-white absolute"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-white absolute"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              className="block w-6 h-[1.5px] bg-white absolute"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99] bg-dark-950/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-2">
              {navLinks.map(({ name, path }, i) => {
                const isActive = location.pathname === path;
                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-3xl sm:text-4xl font-heading font-bold tracking-tight py-2 transition-colors ${isActive ? "text-white" : "text-slate-500 hover:text-white"
                        }`}
                    >
                      {name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-blue px-8 py-3 text-sm font-semibold text-white"
                >
                  Start a Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
