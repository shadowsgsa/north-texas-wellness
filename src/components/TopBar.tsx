import { Phone, Mail, CalendarHeart } from "lucide-react";
import { openBooking } from "@/lib/booking";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href="tel:+18179843514" className="inline-flex items-center gap-1.5 hover:text-peach transition-colors">
            <Phone size={14} /> <span className="font-medium">(817) 984-3514</span>
          </a>
          <a href="mailto:bushraaziz@behavioralhealthnta.com" className="hidden sm:inline-flex items-center gap-1.5 hover:text-peach transition-colors">
            <Mail size={14} /> bushraaziz@behavioralhealthnta.com
          </a>
        </div>
        <button
          onClick={openBooking}
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:px-4"
        >
          <CalendarHeart size={14} /> Schedule Appointment
        </button>
      </div>
    </div>
  );
}
