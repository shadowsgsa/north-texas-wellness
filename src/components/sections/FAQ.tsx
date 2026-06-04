import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you offer virtual appointments?", a: "Yes. We provide secure telehealth visits for established and new patients across Texas, alongside in-person care at our Garland office." },
  { q: "What insurance do you accept?", a: "We work with most major commercial insurance plans. Please contact our office and we will verify your specific coverage and benefits prior to your visit." },
  { q: "How do I book an appointment?", a: "Use the Schedule Your Appointment section above, call (817) 984‑3514, or message us on WhatsApp at (817) 984‑3514. We typically confirm within one business day." },
  { q: "What therapy services do you provide?", a: "Individual, couples and group therapy in addition to psychiatric assessment, medication management, intervention and consultation services." },
  { q: "Is counseling confidential?", a: "Absolutely. Your privacy is protected under HIPAA. Information shared in sessions remains confidential within the limits required by law." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-20 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Frequently asked</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Questions, answered
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
