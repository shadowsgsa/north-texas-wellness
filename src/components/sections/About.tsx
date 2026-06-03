import aboutImg from "@/assets/about.jpg";
import { Heart, Lock, Stethoscope, Leaf } from "lucide-react";

const points = [
  { icon: Heart, title: "Patient‑centered care", desc: "Compassionate, judgment-free conversations at the pace that suits you." },
  { icon: Leaf, title: "Mental wellness focus", desc: "Holistic plans that nurture mind, body and daily functioning." },
  { icon: Stethoscope, title: "Professional psychiatry", desc: "Evidence-based diagnosis, therapy and medication management." },
  { icon: Lock, title: "Safe & confidential", desc: "A private, HIPAA-aligned environment where you can speak freely." },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-sage/15 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-card bg-cream">
            <img src={aboutImg} alt="Dr. Bushra Aziz, MD" width={1200} height={1400} loading="lazy" className="w-full object-cover aspect-[4/5]" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About the Clinic</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Modern psychiatry led by Dr. Bushra Aziz, MD
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At Behavioral Health North Texas Association, we believe healing begins
            with being truly heard. Dr. Bushra Aziz brings years of psychiatric expertise
            and a warm, collaborative style to every visit — caring for adults across
            anxiety, depression, ADHD, trauma, mood disorders and life transitions.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage">
                  <p.icon size={18} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-primary">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
