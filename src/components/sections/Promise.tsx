import { Pill, MessagesSquare, ClipboardList } from "lucide-react";

const pillars = [
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Thoughtful psychiatric evaluation and prescribing — tailored to your medical history, genetics, and lifestyle.",
  },
  {
    icon: MessagesSquare,
    title: "Therapy",
    desc: "Compassionate, evidence-based therapy delivered one-on-one, with your partner, family, or in a small group.",
  },
  {
    icon: ClipboardList,
    title: "Assessment",
    desc: "Comprehensive evaluations to better understand how you're feeling and inform a clear treatment path.",
  },
];

export function Promise() {
  return (
    <section id="promise" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Promise to You</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Everyone is different. So is every plan we build.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Your care might include medicine to support your mind and body, therapy that fits your life,
            and assessments to better understand what you're experiencing — designed to help you feel
            strong, calm, and like yourself again.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-cream/40 p-8 shadow-soft transition-shadow hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-sage">
                <p.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
