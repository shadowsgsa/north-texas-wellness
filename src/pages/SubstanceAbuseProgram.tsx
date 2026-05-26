import { Helmet } from "react-helmet-async";
import { ShieldPlus } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export default function SubstanceAbuseProgram() {
  return (
    <>
      <Helmet>
        <title>Substance Abuse Program — Behavioral Health North Texas</title>
        <meta name="description" content="Confidential, evidence-based substance use treatment with compassion and dignity in Garland, TX." />
      </Helmet>
      <ServicePage
        icon={ShieldPlus}
        eyebrow="Substance Abuse Program"
        title="A judgment-free path to recovery"
        intro="Recovery is possible — and you don't have to do it alone. Our substance abuse program combines medical psychiatry, medication-assisted treatment, and supportive counseling in a confidential, respectful environment."
        overview={[
          "We treat alcohol use disorder, opioid use disorder, stimulant use, and co-occurring mental health conditions. Our care is grounded in compassion: we meet you where you are and build a plan that fits your life, not the other way around.",
          "Depending on your needs, your plan may include medication-assisted treatment (MAT), individual counseling, relapse-prevention strategies, family support, and coordination with community resources. Every visit is private and HIPAA-protected.",
        ]}
        benefits={[
          { title: "Medication-assisted treatment", desc: "Evidence-based options like Suboxone and naltrexone, prescribed and monitored carefully." },
          { title: "Dual-diagnosis care", desc: "We treat substance use alongside anxiety, depression, trauma, and other conditions." },
          { title: "Confidential & respectful", desc: "Your privacy matters. No judgment, ever — just steady, professional support." },
          { title: "Long-term support", desc: "We're here for the full journey, including relapse prevention and ongoing recovery." },
        ]}
        process={[
          { step: "01", title: "Reach Out", desc: "A simple, private call or online request is the only step needed to start." },
          { step: "02", title: "Assessment", desc: "A thorough, compassionate evaluation to understand your history and goals." },
          { step: "03", title: "Recovery Plan", desc: "A personalized treatment path with regular check-ins and adjustments as you grow." },
        ]}
      />
    </>
  );
}
