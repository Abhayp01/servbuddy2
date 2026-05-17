import React from "react";
import { FaCloud, FaServer, FaCogs, FaSyncAlt, FaLock, FaStream } from "react-icons/fa";
import ServiceDetailPage from "../components/ServiceDetailPage";

const CloudDevOps = () => {
  return (
    <ServiceDetailPage
      badge="Cloud & DevOps"
      title="Resilient Cloud Platforms. Faster Releases."
      subtitle="We modernize infrastructure, automate delivery pipelines, and improve platform reliability so your team can ship confidently and scale without friction."
      heroGradient="bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100"
      capabilities={[
        { icon: FaCloud, title: "Cloud Architecture", desc: "Design secure, high-availability cloud environments aligned to growth and compliance needs." },
        { icon: FaCogs, title: "Infrastructure as Code", desc: "Create reusable, versioned infrastructure with Terraform and automation best practices." },
        { icon: FaSyncAlt, title: "CI/CD Engineering", desc: "Build reliable pipelines with quality gates, rollback strategy, and rapid release cycles." },
        { icon: FaServer, title: "Kubernetes Operations", desc: "Run containerized apps with performance tuning, autoscaling, and robust deployment patterns." },
        { icon: FaLock, title: "DevSecOps Controls", desc: "Embed security scanning, secrets management, and policy checks in every deployment flow." },
        { icon: FaStream, title: "Observability Stack", desc: "Implement metrics, logs, and traces that accelerate incident response and system confidence." },
      ]}
      outcomes={[
        "Shorter deployment cycles with fewer release failures and faster recovery.",
        "Improved platform uptime and performance during traffic spikes.",
        "Better cost governance with right-sized cloud usage and visibility.",
        "Stronger security posture through automated controls in delivery pipelines.",
      ]}
      processSteps={[
        { title: "Current State Audit", desc: "We evaluate architecture, tooling, reliability risks, and release bottlenecks." },
        { title: "Platform Blueprint", desc: "A practical roadmap covering IaC, pipeline strategy, runtime operations, and guardrails." },
        { title: "Implementation & Enablement", desc: "Hands-on delivery with documentation, team training, and ongoing optimization." },
      ]}
    />
  );
};

export default CloudDevOps;
