import { Brain, ClipboardList, LifeBuoy, MessagesSquare, User, Users, UsersRound, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Brain, title: "Psychiatry Corporation", desc: "Comprehensive psychiatric evaluation, diagnosis and medication management." },
  { icon: ClipboardList, title: "Assessment", desc: "Thorough mental health assessments to guide a clear treatment plan." },
  { icon: LifeBuoy, title: "Intervention", desc: "Timely, structured interventions for individuals and families in crisis." },
  { icon: MessagesSquare, title: "Consultation", desc: "Second-opinion and provider consultations for complex cases." },
  { icon: User, title: "Individual Therapy", desc: "One-on-one therapy for anxiety, depression, trauma and life change." },
  { icon: Users, title: "Couples Therapy", desc: "Rebuild connection, communication and trust together." },
  { icon: UsersRound, title: "Group Therapy", desc: "Supportive group settings to grow and heal alongside others." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Services</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Care for every stage of your wellness journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            From first conversations to ongoing therapy, we offer a full spectrum of
            behavioral health services personalized for you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sage/25 to-peach/25 text-primary">
                <s.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a
                href="#book"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-primary"
              >
                Learn more <ArrowUpRight size={16} />
              </a>
              <span className="pointer-events-none absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
