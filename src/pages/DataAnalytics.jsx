import React from "react";
import { FaChartLine, FaDatabase, FaProjectDiagram, FaSearch, FaBrain, FaTable } from "react-icons/fa";
import ServiceDetailPage from "../components/ServiceDetailPage";

const DataAnalytics = () => {
  return (
    <ServiceDetailPage
      badge="Data Engineering & Analytics"
      title="Data Platforms That Power Better Decisions"
      subtitle="We transform fragmented data into a trusted decision engine through robust pipelines, governed models, and actionable analytics experiences."
      heroGradient="bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100"
      capabilities={[
        { icon: FaDatabase, title: "Data Platform Foundations", desc: "Design data lakes and warehouses with reliable governance and long-term scalability." },
        { icon: FaProjectDiagram, title: "Pipeline Engineering", desc: "Build resilient ETL/ELT and streaming flows with validation and monitoring." },
        { icon: FaTable, title: "Business-Centric Modeling", desc: "Create semantic layers and metrics that map directly to business KPIs." },
        { icon: FaChartLine, title: "Executive Dashboards", desc: "Deliver clear, role-specific dashboards that improve visibility and accountability." },
        { icon: FaSearch, title: "Data Discovery", desc: "Enable teams to find and trust data with catalogs, definitions, and lineage tracking." },
        { icon: FaBrain, title: "Predictive Analytics", desc: "Apply forecasting and ML models to improve strategic planning and operational outcomes." },
      ]}
      outcomes={[
        "Single source of truth across departments for reporting and decisions.",
        "Reduced reporting time with automated, monitored data pipelines.",
        "Improved decision quality through trusted KPI and trend visibility.",
        "Scalable analytics foundation ready for advanced AI and forecasting.",
      ]}
      processSteps={[
        { title: "Data Maturity Assessment", desc: "Review current data sources, quality issues, and reporting gaps." },
        { title: "Architecture & Model Strategy", desc: "Define a data architecture and KPI model aligned with business priorities." },
        { title: "Build, Rollout & Adoption", desc: "Implement pipelines and dashboards, then train teams for effective usage." },
      ]}
    />
  );
};

export default DataAnalytics;
