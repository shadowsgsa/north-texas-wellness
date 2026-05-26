import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, Phone, CalendarHeart } from "lucide-react";
import { useState, type ComponentType } from "react";
import { openBooking } from "@/lib/booking";

export interface ServicePageProps {
  icon: ComponentType<{ size?: number; className?: string }>;
  eyebrow: string;
  title: string;
  intro: string;
  overview: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
}

export function ServicePage({ icon: Icon, eyebrow, title, intro, overview, benefits, process }: ServicePageProps) {
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-sage/20 blur-3xl" aria-hidden />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-peach/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <Link to="/" className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-primary">
            ← Back to Home
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-accent shadow-soft">
              <Icon size={26} />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-primary text-balance md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={openBooking} size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft">
              <CalendarHeart size={18} className="mr-1" /> Book Appointment
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="tel:+18179843514"><Phone size={16} className="mr-1" /> (817) 984-3514</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Service Overview</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">What to expect</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            {overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Benefits</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">Why patients choose us</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage">
                  <CheckCircle2 size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Approach</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">A simple, supportive process</h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="relative rounded-3xl border border-border/60 bg-gradient-to-b from-card to-cream/40 p-7 shadow-soft">
                <span className="font-display text-5xl font-semibold text-accent/40">{p.step}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA + Booking form */}
      <section className="py-20 bg-cream/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_1fr]">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/85 p-10 text-primary-foreground shadow-card md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peach">Ready to begin?</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl text-balance">
              Take the first step today.
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/85 leading-relaxed">
              Booking takes less than a minute. We'll follow up within one business day to confirm
              your visit — in person or via telehealth.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button onClick={openBooking} size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                Book Appointment <ArrowRight size={18} className="ml-1" />
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="tel:+18179843514"><Phone size={16} className="mr-1" /> (817) 984-3514</a>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-primary">Request a callback</h3>
            <p className="mt-1 text-sm text-muted-foreground">We'll reach out within one business day.</p>
            {sent ? (
              <p className="mt-6 rounded-xl bg-sage/10 p-4 text-sm text-sage-foreground">
                Thanks — your message has been received.
              </p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="sp-name">Full name</Label>
                  <Input id="sp-name" required maxLength={120} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="sp-phone">Phone</Label>
                    <Input id="sp-phone" type="tel" required maxLength={20} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="sp-email">Email</Label>
                    <Input id="sp-email" type="email" required maxLength={255} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sp-date">Preferred date</Label>
                  <Input id="sp-date" type="date" min={today} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sp-msg">Message</Label>
                  <Textarea id="sp-msg" rows={3} maxLength={1000} />
                </div>
                <Button type="submit" size="lg" className="rounded-full">Send Request</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
