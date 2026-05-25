import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Promise as PromiseSection } from "@/components/sections/Promise";
import { Services } from "@/components/sections/Services";
import { Conditions } from "@/components/sections/Conditions";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { GetHelp } from "@/components/sections/GetHelp";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Behavioral Health North Texas — Dr. Bushra Aziz, MD | Psychiatry" },
      { name: "description", content: "Compassionate psychiatry, research, and substance abuse treatment in Garland, TX. Book in-person or telehealth visits with Dr. Bushra Aziz, MD." },
      { property: "og:title", content: "Behavioral Health North Texas — Dr. Bushra Aziz, MD" },
      { property: "og:description", content: "Professional psychiatric care, research programs, and substance abuse treatment in North Texas." },
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
    <main>
      <Hero />
      <About />
      <PromiseSection />
      <Services />
      <Conditions />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <GetHelp />
      <Contact />
    </main>
  );
}
