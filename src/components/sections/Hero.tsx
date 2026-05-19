import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-sage/10 px-4 py-1.5 text-xs font-medium text-sage-foreground">
            <Sparkles size={14} className="text-sage" /> Accepting new patients in North Texas
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-primary text-balance md:text-5xl lg:text-6xl">
            Compassionate Behavioral Health & Psychiatry Services in North&nbsp;Texas
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Professional psychiatric care, therapy, assessments, and counseling tailored to
            your needs — delivered with warmth, dignity, and clinical excellence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-soft">
              <a href="#book">
                Book Appointment <ArrowRight size={18} className="ml-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-primary/25">
              <a href="#contact">
                <Phone size={16} className="mr-1" /> Contact Us
              </a>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { icon: ShieldCheck, label: "Confidential", sub: "HIPAA‑aligned" },
              { icon: HeartPulse, label: "Patient‑first", sub: "Personalized" },
              { icon: Sparkles, label: "Telehealth", sub: "In‑person too" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-card/80 p-3 shadow-soft backdrop-blur">
                <s.icon size={18} className="text-accent" />
                <dt className="mt-2 text-sm font-semibold text-primary">{s.label}</dt>
                <dd className="text-xs text-muted-foreground">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-sage/30 via-transparent to-peach/30 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={heroImg}
              alt="Calming therapy office with natural light"
              width={1920}
              height={1280}
              className="h-full w-full object-cover aspect-[5/4]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-card md:block">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Led by</p>
            <p className="font-display text-lg font-semibold text-primary">Dr. Bushra Aziz, MD</p>
            <p className="text-xs text-accent">Board‑Certified Psychiatrist</p>
          </div>
        </div>
      </div>
    </section>
  );
}
