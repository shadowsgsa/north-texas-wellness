import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { BookingForm } from "@/components/sections/BookingForm";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingBook } from "@/components/FloatingBook";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Behavioral Health North Texas — Dr. Bushra Aziz, MD | Psychiatry & Therapy" },
      { name: "description", content: "Compassionate psychiatry, therapy, and counseling in Garland, TX. Book in-person or telehealth visits with Dr. Bushra Aziz, MD." },
      { property: "og:title", content: "Behavioral Health North Texas — Dr. Bushra Aziz, MD" },
      { property: "og:description", content: "Professional psychiatric care, therapy, assessments and counseling in North Texas." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingForm />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingBook />
    </div>
  );
}
