import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock } from "lucide-react";
import { openBooking } from "@/lib/booking";

export function GetHelp() {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-primary/85 p-10 text-primary-foreground shadow-card md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-peach/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-sage/25 blur-3xl" aria-hidden />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peach">Get Help</p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-balance md:text-5xl">
                You don't have to walk this journey alone.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85 leading-relaxed">
                We're here to walk beside you toward hope, peace, and clarity. Reach out today —
                a kind, qualified clinician will be in touch within one business day.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button onClick={openBooking} size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Book Appointment <ArrowRight size={18} className="ml-1" />
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href="tel:+18179843514">
                    <Phone size={16} className="mr-1" /> (817) 984‑3514
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-peach">
                <Clock size={18} />
                <p className="text-sm font-semibold uppercase tracking-wider">Office Hours</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
                <li className="flex justify-between"><span>Mon – Thu</span><span>8 am – 5 pm</span></li>
                <li className="flex justify-between"><span>Friday</span><span>8 am – 12 pm</span></li>
                <li className="flex justify-between"><span>Sat – Sun</span><span>Closed</span></li>
              </ul>
              <p className="mt-5 text-xs text-primary-foreground/70 leading-relaxed">
                If you are experiencing a mental health emergency, please call <strong>988</strong>
                or dial <strong>911</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
