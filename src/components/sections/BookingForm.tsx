import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarCheck2, CheckCircle2, Video, MapPin } from "lucide-react";

const slots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

export function BookingForm() {
  const today = useMemo(() => new Date(), []);
  const days = useMemo(() => Array.from({ length: 14 }, (_, i) => addDays(today, i + 1)), [today]);

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [mode, setMode] = useState("in-person");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative py-24 bg-gradient-hero scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Book a visit</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Schedule Your Appointment Today
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose a date and time that works for you. We typically confirm requests within one business day.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          {submitted ? (
            <div className="flex flex-col items-center justify-center p-16 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/15 text-sage">
                <CheckCircle2 size={32} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-primary">Request received</h3>
              <p className="mt-2 max-w-md text-muted-foreground">
                Thank you. Our team will reach out shortly to confirm your appointment
                {date ? ` on ${date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}` : ""}
                {time ? ` at ${time}` : ""}.
              </p>
              <Button className="mt-8 rounded-full" onClick={() => { setSubmitted(false); setDate(null); setTime(null); }}>
                Book another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
              {/* Left: calendar + slots */}
              <div className="border-b border-border bg-cream/40 p-8 lg:border-b-0 lg:border-r">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
                  <CalendarCheck2 size={18} className="text-accent" /> Pick a date
                </h3>
                <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {days.map((d) => {
                    const active = date?.toDateString() === d.toDateString();
                    return (
                      <button
                        type="button"
                        key={d.toISOString()}
                        onClick={() => setDate(d)}
                        className={`flex flex-col items-center rounded-xl border px-2 py-3 text-xs transition-all ${
                          active
                            ? "border-primary bg-primary text-primary-foreground shadow-soft"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        <span className="opacity-70">{d.toLocaleDateString(undefined, { weekday: "short" })}</span>
                        <span className="mt-1 text-base font-semibold">{d.getDate()}</span>
                      </button>
                    );
                  })}
                </div>

                <h3 className="mt-8 font-display text-lg font-semibold text-primary">Choose a time</h3>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {slots.map((s) => {
                    const active = time === s;
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setTime(s)}
                        disabled={!date}
                        className={`rounded-xl border px-3 py-2.5 text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                          active
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border bg-card hover:border-accent/50"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>

                <h3 className="mt-8 font-display text-lg font-semibold text-primary">Visit type</h3>
                <RadioGroup value={mode} onValueChange={setMode} className="mt-3 grid gap-2 sm:grid-cols-2">
                  <Label htmlFor="m-inperson" className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 ${mode==="in-person" ? "border-primary bg-primary/5" : "border-border"}`}>
                    <RadioGroupItem id="m-inperson" value="in-person" />
                    <MapPin size={18} className="text-sage" />
                    <span className="text-sm font-medium">In‑person</span>
                  </Label>
                  <Label htmlFor="m-virtual" className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 ${mode==="virtual" ? "border-primary bg-primary/5" : "border-border"}`}>
                    <RadioGroupItem id="m-virtual" value="virtual" />
                    <Video size={18} className="text-accent" />
                    <span className="text-sm font-medium">Virtual (Telehealth)</span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Right: patient info */}
              <div className="p-8">
                <h3 className="font-display text-lg font-semibold text-primary">Your information</h3>
                <div className="mt-4 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="you@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required placeholder="(817) 555‑0100" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reason">Reason for visit (optional)</Label>
                    <Textarea id="reason" rows={4} placeholder="Briefly share what brings you in…" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    By submitting you agree to be contacted about your appointment. Information shared
                    here is kept confidential.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2 rounded-full"
                    disabled={!date || !time}
                  >
                    Request Appointment
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
