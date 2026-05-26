import { Link } from "react-router-dom";
import { Brain, FlaskConical, ShieldPlus, ArrowUpRight } from "lucide-react";

export const serviceList = [
  {
    to: "/services/psychiatric-consultation",
    icon: Brain,
    title: "Psychiatric Consultation",
    desc: "Comprehensive psychiatric evaluation, diagnosis, and personalized medication management led by Dr. Bushra Aziz, MD.",
  },
  {
    to: "/services/research-program",
    icon: FlaskConical,
    title: "Research Program",
    desc: "Participate in ethically-conducted clinical research advancing mental health treatment for our community.",
  },
  {
    to: "/services/substance-abuse-program",
    icon: ShieldPlus,
    title: "Substance Abuse Program",
    desc: "Confidential, evidence-based treatment supporting recovery from substance use with compassion and dignity.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="py-24 bg-cream/60 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Services</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Specialized care, focused on you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three focused programs designed to meet you wherever you are on your mental health journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {serviceList.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage/30 to-peach/25 text-primary">
                <s.icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Learn more <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
