import logo from "@/assets/logo.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Behavioral Health North Texas" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Compassionate psychiatric care and therapy serving Garland and the greater
            North Texas community. HIPAA‑aligned, in‑person and telehealth.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-sage/10 hover:text-primary">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#book" className="hover:text-primary">Book Appointment</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>5506 Broadway Blvd<br/>Garland, TX 75043</li>
            <li><a href="tel:+18179843514" className="hover:text-primary">(817) 984‑3514</a></li>
            <li><a href="mailto:sbnclinical@gmail.com" className="hover:text-primary">sbnclinical@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Behavioral Health North Texas Association LLC. All rights reserved.
      </div>
    </footer>
  );
}
