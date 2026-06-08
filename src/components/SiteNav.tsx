import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { openBooking } from "@/lib/booking";

const services = [
  { to: "/services/psychiatric-consultation", label: "Psychiatric Consultation" },
  { to: "/services/research-program", label: "Research Program" },
  { to: "/services/substance-abuse-program", label: "Substance Abuse Program" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background/70 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Behavioral Health North Texas logo"
            className="h-16 w-auto md:h-20"
            width={200}
            height={130}
          />
        </Link>
        <ul className="hidden items-center gap-7 lg:flex">
          <li><Link to="/" className="text-sm font-medium text-foreground/75 hover:text-primary">Home</Link></li>
          <li><Link to="/about" className="text-sm font-medium text-foreground/75 hover:text-primary">About</Link></li>
          <li
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 hover:text-primary">
              Services <ChevronDown size={14} />
            </button>
            {svcOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-64 rounded-2xl border border-border bg-card p-2 shadow-card">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-cream hover:text-primary"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li><a href="/#why" className="text-sm font-medium text-foreground/75 hover:text-primary">Why Us</a></li>
          <li><a href="/#faq" className="text-sm font-medium text-foreground/75 hover:text-primary">FAQ</a></li>
          <li><a href="/#contact" className="text-sm font-medium text-foreground/75 hover:text-primary">Contact</a></li>
        </ul>
        <div className="hidden lg:block">
          <Button onClick={openBooking} size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft">
            Book Appointment
          </Button>
        </div>
        <button
          aria-label="Open menu"
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="flex flex-col gap-1 p-4">
            <li><Link to="/" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">About</Link></li>
            <li className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</li>
            {services.map((s) => (
              <li key={s.to}>
                <Link to={s.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-muted">
                  {s.label}
                </Link>
              </li>
            ))}
            <li><a href="/#why" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Why Us</a></li>
            <li><a href="/#contact" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Contact</a></li>
            <li className="pt-2">
              <Button onClick={() => { setOpen(false); openBooking(); }} className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                Book Appointment
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
