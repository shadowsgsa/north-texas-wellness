import { Brain } from "lucide-react";

const conditions = [
  "Depression",
  "Anxiety",
  "Bipolar Disorder",
  "PTSD & Trauma",
  "OCD",
  "ADHD",
  "Mood Disorders",
  "Life Transitions",
];

export function Conditions() {
  return (
    <section id="conditions" className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Conditions We Treat</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
              Our team specializes in supporting…
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From everyday stress to complex mental health challenges, we provide focused,
              evidence-based care for adults and families across North Texas.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {conditions.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-5 py-4 shadow-soft backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-peach/20 text-accent">
                  <Brain size={16} />
                </span>
                <span className="text-sm font-medium text-primary">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
