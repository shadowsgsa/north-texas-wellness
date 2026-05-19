import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const pillars = [
  { word: "Peace", desc: "A calm, judgment‑free space to be heard." },
  { word: "Hope", desc: "Evidence‑based care that moves you forward." },
  { word: "Clarity", desc: "A plan tailored to your life and goals." },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Calming therapy room with sage plants and soft natural light"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-card/70 px-4 py-1.5 text-xs font-medium text-sage-foreground backdrop-blur">
            <Sparkles size={14} className="text-sage" /> Accepting new patients across North Texas
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-primary text-balance md:text-6xl lg:text-7xl">
            Your Well‑Being
            <span className="block text-accent">is Our Purpose.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Compassionate behavioral health and therapy in North Texas — walking beside you with
            peace, hope, and clarity, every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-soft">
              <a href="#book">
                Book Appointment <ArrowRight size={18} className="ml-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-primary/25 bg-card/70 backdrop-blur">
              <a href="#contact">
                <Phone size={16} className="mr-1" /> Contact Us
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {pillars.map((p) => (
              <div key={p.word} className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-soft backdrop-blur">
                <dt className="font-display text-xl font-semibold text-primary">{p.word}</dt>
                <dd className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
