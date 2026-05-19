import { Quote } from "lucide-react";

const items = [
  { quote: "Dr. Aziz truly listened. For the first time I felt understood — and the treatment plan has changed my life.", name: "Sarah M.", role: "Patient" },
  { quote: "Warm, professional, and incredibly thorough. The telehealth option made it easy to stay consistent.", name: "James R.", role: "Patient" },
  { quote: "Compassionate care from the first call to follow-up. I’d recommend this practice to anyone in North Texas.", name: "Priya K.", role: "Patient" },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Patient stories</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Real progress, in their words
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="relative flex flex-col rounded-3xl bg-card p-8 shadow-soft">
              <Quote className="text-sage" size={28} />
              <blockquote className="mt-4 text-foreground/85 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
