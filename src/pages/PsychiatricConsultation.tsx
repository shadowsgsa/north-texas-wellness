import { Helmet } from "react-helmet-async";
import { Brain } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export default function PsychiatricConsultation() {
  return (
    <>
      <Helmet>
        <title>Psychiatric Consultation — Behavioral Health North Texas</title>
        <meta name="description" content="Comprehensive psychiatric evaluation, diagnosis, and medication management with Dr. Bushra Aziz, MD in Garland, TX." />
      </Helmet>
      <ServicePage
        icon={Brain}
        eyebrow="Psychiatric Consultation"
        title="Thoughtful psychiatric care, tailored to you"
        intro="Whether you're seeking clarity on a diagnosis, exploring medication options, or simply need a trusted clinician to listen — Dr. Bushra Aziz provides comprehensive psychiatric consultations grounded in evidence and empathy."
        overview={[
          "A psychiatric consultation is a focused, in-depth visit designed to understand what you're experiencing — physically, emotionally, and contextually. We take time to hear your story, review your history, and explore the options that might help you feel like yourself again.",
          "We treat a wide range of concerns including anxiety, depression, ADHD, bipolar disorder, trauma, sleep disturbances, and life transitions. Care plans may include medication management, therapy referrals, lifestyle guidance, or a combination tailored to your needs.",
        ]}
        benefits={[
          { title: "Board-certified expertise", desc: "Care delivered by Dr. Bushra Aziz, MD with years of psychiatric experience." },
          { title: "Personalized treatment plan", desc: "No two patients are alike — your plan is built around your history, goals, and lifestyle." },
          { title: "In-person or telehealth", desc: "Choose the format that fits your schedule and comfort. Same quality of care, either way." },
          { title: "Coordinated care", desc: "We collaborate with your primary care provider and therapists when helpful." },
        ]}
        process={[
          { step: "01", title: "Schedule", desc: "Book online in under a minute. We'll confirm within one business day." },
          { step: "02", title: "Initial Evaluation", desc: "A thorough 60-minute consultation to understand your history and concerns." },
          { step: "03", title: "Care Plan", desc: "A clear, collaborative plan with follow-up visits to adjust as you progress." },
        ]}
      />
    </>
  );
}
