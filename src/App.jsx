import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/ui/SmoothScroll";
import ScrollProgress from "./components/ui/ScrollProgress";
import LandingPage from "./pages/LandingPage";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <main className="pt-[72px]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;
