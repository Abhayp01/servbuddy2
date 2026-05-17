import React from "react";
import { FaCheckCircle, FaRobot, FaTachometerAlt, FaClipboardCheck, FaBug, FaFlask } from "react-icons/fa";
import ServiceDetailPage from "../components/ServiceDetailPage";

const QualityEngineering = () => {
  return (
    <ServiceDetailPage
      badge="Quality Engineering"
      title="Ship Faster With Confidence and Stability"
      subtitle="We build comprehensive quality systems that reduce defects, improve release reliability, and help your product teams scale without compromising user trust."
      heroGradient="bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100"
      capabilities={[
        { icon: FaRobot, title: "Automation Engineering", desc: "Develop scalable automated test suites across UI, API, integration, and regression layers." },
        { icon: FaTachometerAlt, title: "Performance Testing", desc: "Validate speed, stability, and resilience under peak traffic and real-world usage patterns." },
        { icon: FaBug, title: "Shift-Left QA", desc: "Embed testing early in the lifecycle to detect risks before they become production issues." },
        { icon: FaClipboardCheck, title: "Release Validation", desc: "Use pre-release quality gates and smoke checks to improve launch confidence." },
        { icon: FaCheckCircle, title: "Quality Analytics", desc: "Track defect trends, flaky tests, and release health with actionable quality metrics." },
        { icon: FaFlask, title: "Exploratory Testing", desc: "Uncover edge-case usability and behavior gaps through expert exploratory testing practices." },
      ]}
      outcomes={[
        "Lower production defects and fewer customer-impacting incidents.",
        "Predictable release cycles with quality benchmarks and readiness checks.",
        "Improved developer velocity by reducing manual QA effort.",
        "Higher customer trust through consistent product reliability.",
      ]}
      processSteps={[
        { title: "Quality Baseline Assessment", desc: "Analyze existing test coverage, tooling maturity, and release quality risks." },
        { title: "Automation & Process Design", desc: "Define a right-sized quality framework aligned to your engineering workflow." },
        { title: "Execution & Continuous Improvement", desc: "Implement, measure, and optimize continuously to keep quality aligned with growth." },
      ]}
    />
  );
};

export default QualityEngineering;
