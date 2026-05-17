import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/ui/SmoothScroll";
import ScrollProgress from "./components/ui/ScrollProgress";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AiAutomation from "./pages/AiAutomation";
import CloudDevOps from "./pages/CloudDevOps";
import WebMobileDev from "./pages/WebMobileDev";
import Cybersecurity from "./pages/Cybersecurity";
import DataAnalytics from "./pages/DataAnalytics";
import QualityEngineering from "./pages/QualityEngineering";
import Industries from "./pages/Industries";
import Process from "./pages/Process";
import CaseStudies from "./pages/CaseStudies";
import FaqPage from "./pages/FaqPage";

// Scroll to top on every route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return null;
};

// Animated page wrapper
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(6px)" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
        <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FaqPage /></PageTransition>} />
        <Route path="/ai-automation" element={<PageTransition><AiAutomation /></PageTransition>} />
        <Route path="/cloud-devops" element={<PageTransition><CloudDevOps /></PageTransition>} />
        <Route path="/web-mobile" element={<PageTransition><WebMobileDev /></PageTransition>} />
        <Route path="/cybersecurity" element={<PageTransition><Cybersecurity /></PageTransition>} />
        <Route path="/data-analytics" element={<PageTransition><DataAnalytics /></PageTransition>} />
        <Route path="/quality-engineering" element={<PageTransition><QualityEngineering /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <ScrollProgress />

        {/* Noise grain overlay */}
        <div className="noise-overlay" />

        <Navbar />
        <main className="pt-[72px]">
          <AnimatedRoutes />
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;
