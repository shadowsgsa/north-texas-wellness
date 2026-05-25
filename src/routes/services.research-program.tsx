import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/research-program")({
  head: () => ({
    meta: [
      { title: "Research Program — Behavioral Health North Texas" },
      { name: "description", content: "Join ethically-conducted clinical research advancing mental health treatment in North Texas." },
      { property: "og:title", content: "Research Program — Behavioral Health North Texas" },
      { property: "og:description", content: "Participate in clinical research that shapes the future of psychiatric care." },
    ],
  }),
  component: () => (
    <ServicePage
      icon={FlaskConical}
      eyebrow="Research Program"
      title="Advancing mental health, together"
      intro="Our research program offers eligible patients the opportunity to participate in ethically-conducted clinical studies that explore new approaches to psychiatric care — contributing to discoveries that benefit patients everywhere."
      overview={[
        "We partner with leading sponsors and academic institutions to run studies focused on conditions like depression, anxiety, ADHD, and substance use disorders. Every study follows strict IRB oversight, informed consent, and patient-safety protocols.",
        "Participation is always voluntary. Our research coordinators walk you through eligibility, expectations, and any potential benefits or risks before you decide. Many participants receive study-related care and compensation at no cost.",
      ]}
      benefits={[
        { title: "Access to emerging treatments", desc: "Explore therapies and protocols not yet broadly available." },
        { title: "No-cost study care", desc: "Study visits, assessments, and medications are typically provided at no cost." },
        { title: "Contribute to science", desc: "Help us discover better ways to support mental health for future patients." },
        { title: "Rigorous safety standards", desc: "All studies follow IRB approval, informed consent, and close clinical monitoring." },
      ]}
      process={[
        { step: "01", title: "Inquire", desc: "Tell us you're interested. We'll share active studies that may fit." },
        { step: "02", title: "Screening", desc: "A confidential screening visit to review eligibility and answer your questions." },
        { step: "03", title: "Participate", desc: "If you enroll, our team supports you through every visit with care and clarity." },
      ]}
    />
  ),
});
