import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarHeart, CheckCircle2 } from "lucide-react";
import { BOOKING_EVENT } from "@/lib/booking";

export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = () => {
      setSent(false);
      setOpen(true);
    };
    window.addEventListener(BOOKING_EVENT, handler);
    return () => window.removeEventListener(BOOKING_EVENT, handler);
  }, []);

  const today = new Date().toISOString().split("T")[0];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
            <CalendarHeart size={20} />
          </div>
          <DialogTitle className="font-display text-2xl text-primary">
            Schedule Your Appointment
          </DialogTitle>
          <DialogDescription>
            Tell us a bit about you and your preferred date — our team will confirm within one business day.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage">
              <CheckCircle2 size={28} />
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">Request received</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Thank you. A member of our team will reach out shortly to confirm your appointment.
            </p>
            <Button className="mt-6 rounded-full" onClick={() => setOpen(false)}>Close</Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-2 grid gap-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="bm-name">Full name</Label>
              <Input id="bm-name" required maxLength={120} placeholder="Jane Doe" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="bm-phone">Phone</Label>
                <Input id="bm-phone" type="tel" required maxLength={20} placeholder="(817) 555-0100" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bm-email">Email</Label>
                <Input id="bm-email" type="email" required maxLength={255} placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bm-date">Preferred date</Label>
              <Input id="bm-date" type="date" required min={today} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bm-notes">Message / notes (optional)</Label>
              <Textarea id="bm-notes" rows={3} maxLength={1000} placeholder="Briefly share what brings you in…" />
            </div>
            <p className="text-xs text-muted-foreground">
              Your information is kept confidential and used only to schedule your visit.
            </p>
            <Button type="submit" size="lg" className="mt-1 rounded-full">
              Request Appointment
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
