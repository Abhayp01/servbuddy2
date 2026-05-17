import React from "react";
import { FaBrain, FaChartLine, FaCloud, FaCogs, FaNetworkWired, FaRobot } from "react-icons/fa";
import ServiceDetailPage from "../components/ServiceDetailPage";

const AiAutomation = () => {
  return (
    <ServiceDetailPage
      badge="AI & Automation"
      title="AI Systems That Deliver Real Business Impact"
      subtitle="From intelligent assistants to full workflow automation, we design AI solutions that reduce operational load, increase speed, and unlock smarter decision-making at scale."
      heroGradient="bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100"
      capabilities={[
        { icon: FaRobot, title: "Intelligent Process Automation", desc: "Automate repetitive work across sales, support, HR, and operations with reliable AI-powered flows." },
        { icon: FaBrain, title: "Decision Intelligence", desc: "Use predictive models and AI recommendations to improve planning, forecasting, and prioritization." },
        { icon: FaCogs, title: "AI Workflow Design", desc: "We map business logic, integrations, and approvals into smart, auditable automation pipelines." },
        { icon: FaChartLine, title: "Analytics & Monitoring", desc: "Track model quality, system performance, and ROI with executive-ready dashboards." },
        { icon: FaCloud, title: "Scalable Deployment", desc: "Deploy and scale your AI workloads across cloud infrastructure with performance and cost control." },
        { icon: FaNetworkWired, title: "Enterprise Integrations", desc: "Connect AI to CRM, ERP, ticketing, and internal tools to create one seamless system." },
      ]}
      outcomes={[
        "Reduce manual workload and process cycle time by automating repetitive tasks.",
        "Improve forecasting accuracy with data-driven machine learning pipelines.",
        "Increase team productivity and focus by removing low-value operational work.",
        "Gain measurable ROI with clear automation performance benchmarks.",
      ]}
      processSteps={[
        { title: "Discovery & Opportunity Mapping", desc: "We identify high-impact automation opportunities based on your current workflow and bottlenecks." },
        { title: "AI Solution Architecture", desc: "Our team designs secure, scalable AI workflows that fit your systems and governance model." },
        { title: "Deployment, Training & Optimization", desc: "We launch fast, train your team, and continuously improve models and automations." },
      ]}
    />
  );
};

export default AiAutomation;
