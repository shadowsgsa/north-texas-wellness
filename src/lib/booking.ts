export const BOOKING_EVENT = "open-booking-modal";

export function openBooking() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(BOOKING_EVENT));
}
