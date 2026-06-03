import { Award, Lock, ClipboardCheck, HeartHandshake, CalendarClock, Stethoscope } from "lucide-react";

const items = [
  { icon: Award, title: "Experienced psychiatric care", desc: "Board-certified expertise across the full diagnostic spectrum." },
  { icon: Lock, title: "Confidential treatment", desc: "Private, HIPAA-aligned practices to protect your story." },
  { icon: ClipboardCheck, title: "Personalized therapy plans", desc: "Plans tailored to your goals, history and preferences." },
  { icon: HeartHandshake, title: "Supportive environment", desc: "Warm, non-judgmental space — every visit, every time." },
  { icon: CalendarClock, title: "Flexible appointments", desc: "Evening and virtual slots for busy schedules." },
  { icon: Stethoscope, title: "Professional services", desc: "Modern behavioral health backed by evidence." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-14 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why choose us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            A practice built around trust
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-peach/15 text-accent">
                <it.icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
