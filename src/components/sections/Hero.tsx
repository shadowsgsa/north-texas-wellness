import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import heroSide from "@/assets/hero-side.jpg";
import { openBooking } from "@/lib/booking";

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

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
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
              <Button onClick={openBooking} size="lg" className="rounded-full px-7 shadow-soft bg-accent text-accent-foreground hover:bg-accent/90">
                Book Appointment <ArrowRight size={18} className="ml-1" />
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-primary/25 bg-card/70 backdrop-blur">
                <a href="tel:+18179843514">
                  <Phone size={16} className="mr-1" /> (817) 984-3514
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

          <div className="relative hidden lg:block animate-fade-up">
            <div className="absolute -inset-6 rounded-[2.25rem] bg-sage/25 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-card shadow-card ring-1 ring-border/60 aspect-square">
              <img
                src={heroSide}
                alt="Compassionate therapist meeting with a client in a calming office"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-card px-5 py-3 shadow-card ring-1 ring-border/60">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Trusted Care
              </p>
              <p className="mt-0.5 font-display text-sm font-semibold text-primary">
                In‑person & telehealth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
