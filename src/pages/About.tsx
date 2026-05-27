import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about.jpg";
import {
  Award,
  BookOpen,
  CalendarHeart,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { openBooking } from "@/lib/booking";

const stats = [
  { value: "15+", label: "Years in psychiatry" },
  { value: "5k+", label: "Patients supported" },
  { value: "20+", label: "Clinical trials led" },
  { value: "4.9★", label: "Average patient rating" },
];

const expertise = [
  { icon: Users, title: "Child & Adolescent", desc: "Developmental, behavioral and emotional care for young patients and families." },
  { icon: Stethoscope, title: "Adult Psychiatry", desc: "Anxiety, depression, ADHD, trauma, mood and life-transition support." },
  { icon: HeartHandshake, title: "Geriatric Care", desc: "Memory, mood and medication management tailored for older adults." },
  { icon: Microscope, title: "Clinical Research", desc: "Principal Investigator on innovative trials advancing modern treatments." },
];

const values = [
  { icon: ShieldCheck, title: "Patient safety first", desc: "Rigorous standards in every visit, every trial, every prescription." },
  { icon: HeartHandshake, title: "Compassion always", desc: "We listen without judgment and meet you where you are." },
  { icon: BookOpen, title: "Evidence-based care", desc: "Plans grounded in the latest psychiatric research and best practice." },
  { icon: Award, title: "Excellence by habit", desc: "Reliable results through careful follow-up and continuous learning." },
];

const credentials = [
  "Doctor of Medicine (MD), Psychiatry",
  "Principal Investigator — Epic Medical Research",
  "15+ years across child, adolescent, adult and geriatric psychiatry",
  "Led and contributed to numerous clinical trials",
  "Active member of major U.S. psychiatric associations",
];

export default function About() {
  return (
    <main className="bg-background">
      <Helmet>
        <title>About Dr. Bushra Aziz, MD | Behavioral Health North Texas</title>
        <meta
          name="description"
          content="Meet Dr. Bushra Aziz, MD — Principal Investigator and psychiatrist with 15+ years of experience in child, adolescent, adult and geriatric care."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-sage/20 blur-3xl" aria-hidden />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-peach/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
            >
              ← Back to Home
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Our Practice
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-primary text-balance md:text-6xl">
              Compassionate, evidence-based psychiatry led by Dr. Bushra Aziz, MD
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              For more than fifteen years, Dr. Aziz has helped children, adolescents, adults and
              older patients in North Texas find clarity, stability and hope through modern
              psychiatric care and clinical research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                onClick={openBooking}
                size="lg"
                className="rounded-full bg-accent text-accent-foreground shadow-soft hover:bg-accent/90"
              >
                <CalendarHeart size={18} className="mr-1" /> Book Appointment
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="tel:+18179843514">
                  <Phone size={16} className="mr-1" /> (817) 984-3514
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.25rem] bg-sage/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-card shadow-card ring-1 ring-border/60">
              <img
                src={aboutImg}
                alt="Dr. Bushra Aziz, MD — Psychiatrist and Principal Investigator"
                width={1200}
                height={1500}
                className="w-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card px-5 py-4 shadow-card ring-1 ring-border/60 sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Principal Investigator
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-primary">
                Epic Medical Research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-cream/40 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Biography */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Meet the Doctor
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl text-balance">
              Bushra Aziz, MD
            </h2>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Psychiatrist · Principal Investigator
            </p>
            <ul className="mt-8 space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sage" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/15 text-sage">
                <GraduationCap size={18} />
              </span>
              <p className="text-sm text-muted-foreground">
                Trained across child, adolescent, adult and geriatric psychiatry — bringing one
                continuous standard of care to every age group.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Dr. Bushra Aziz is a Principal Investigator at Epic Medical Research, where she plays
              a key role in advancing clinical research and developing innovative treatments. With
              over fifteen years of experience in psychiatry — including child, adolescent, adult
              and geriatric care — Dr. Aziz brings extensive expertise to every study she oversees.
            </p>
            <p>
              She has led and contributed to numerous clinical trials, ensuring rigorous standards,
              patient safety and reliable results. Her dedication to improving patient outcomes and
              advancing medical knowledge makes her an invaluable part of the Epic Medical Research
              team.
            </p>
            <p>
              In her clinical practice, Dr. Aziz pairs evidence-based medicine with a warm,
              collaborative bedside manner. She believes healing begins with being truly heard — so
              every visit is paced to your comfort, with clear explanations and a plan you help
              build.
            </p>
            <blockquote className="rounded-2xl border-l-4 border-accent bg-cream/60 p-5 text-base font-medium text-primary">
              “Great psychiatric care is equal parts science and humanity. My goal is to deliver
              both — every visit, every patient.”
              <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                — Dr. Bushra Aziz, MD
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-cream/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Areas of Expertise
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
              Comprehensive psychiatric care across every stage of life
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage/15 text-sage">
                  <e.icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Our Values
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl text-balance">
                A practice built around trust, safety and real outcomes.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Everything we do — from your first phone call to long-term follow-up — is shaped by
                four simple commitments.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <v.icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/85 p-10 text-primary-foreground shadow-card md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peach">
                  Ready when you are
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl text-balance">
                  Begin care with a doctor who listens.
                </h2>
                <p className="mt-4 max-w-xl text-primary-foreground/85 leading-relaxed">
                  Schedule an in-person or telehealth visit with Dr. Bushra Aziz. We'll follow up
                  within one business day to confirm your appointment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button
                  onClick={openBooking}
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <CalendarHeart size={18} className="mr-1" /> Book Appointment
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="tel:+18179843514">
                    <Phone size={16} className="mr-1" /> Call now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
