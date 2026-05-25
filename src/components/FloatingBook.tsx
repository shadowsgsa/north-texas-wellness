import { CalendarHeart } from "lucide-react";
import { openBooking } from "@/lib/booking";

export function FloatingBook() {
  return (
    <button
      onClick={openBooking}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5 lg:bottom-8 lg:right-8"
    >
      <CalendarHeart size={18} />
      Book Appointment
    </button>
  );
}
