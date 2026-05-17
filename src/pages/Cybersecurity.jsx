import React from "react";
import { FaShieldAlt, FaUserShield, FaKey, FaBug, FaFileContract, FaNetworkWired } from "react-icons/fa";
import ServiceDetailPage from "../components/ServiceDetailPage";

const Cybersecurity = () => {
  return (
    <ServiceDetailPage
      badge="Cybersecurity & Compliance"
      title="Security That Enables Growth, Not Friction"
      subtitle="We secure your product, infrastructure, and operations with modern controls that reduce risk while keeping your teams fast, productive, and audit-ready."
      heroGradient="bg-gradient-to-br from-rose-100 via-red-50 to-slate-100"
      capabilities={[
        { icon: FaUserShield, title: "Identity & Access Security", desc: "Implement least privilege, MFA, and strong authentication for every critical system." },
        { icon: FaKey, title: "Data Protection", desc: "Encrypt sensitive data in transit and at rest with secure key and secret management." },
        { icon: FaBug, title: "Application Security", desc: "Embed scanning and vulnerability management directly into your build and release workflow." },
        { icon: FaNetworkWired, title: "Network Hardening", desc: "Segment networks, apply policy controls, and reduce attack surface across environments." },
        { icon: FaFileContract, title: "Compliance Enablement", desc: "Prepare for SOC 2, ISO, and regulatory requirements with evidence-ready processes." },
        { icon: FaShieldAlt, title: "Incident Readiness", desc: "Define response playbooks and monitoring workflows to reduce impact during security events." },
      ]}
      outcomes={[
        "Reduced security risk through proactive control implementation.",
        "Faster compliance readiness with documented governance and evidence trails.",
        "Better stakeholder trust with visible and measurable security standards.",
        "Improved response time and resilience during incidents.",
      ]}
      processSteps={[
        { title: "Security Posture Assessment", desc: "We identify current vulnerabilities, policy gaps, and operational risks." },
        { title: "Control Architecture & Roadmap", desc: "A practical plan for identity, data, network, and application security improvements." },
        { title: "Implementation & Validation", desc: "Execute controls, automate checks, and validate readiness with internal assessments." },
      ]}
    />
  );
};

export default Cybersecurity;
