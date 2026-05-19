import { User, Users, Home, UsersRound, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Individual Therapy",
    desc: "One-on-one sessions for anxiety, depression, trauma, ADHD, and life transitions — at a pace that honors your story.",
  },
  {
    icon: Home,
    title: "Family Therapy",
    desc: "Strengthen communication and heal patterns together with a clinician who understands family dynamics.",
  },
  {
    icon: Users,
    title: "Couples Therapy",
    desc: "Rebuild trust, deepen connection, and learn tools for healthier conversations as partners.",
  },
  {
    icon: UsersRound,
    title: "Group Therapy",
    desc: "Heal alongside others in a confidential, supportive small group guided by an experienced therapist.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Services</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Therapy designed around you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're seeking support on your own, with your partner, or alongside the people you love —
            we offer a warm, evidence-based path forward.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage/30 to-peach/25 text-primary">
                <s.icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a
                href="#book"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-primary"
              >
                Book a session <ArrowUpRight size={16} />
              </a>
              <span className="pointer-events-none absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
