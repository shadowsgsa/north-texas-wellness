import { Helmet } from "react-helmet-async";
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

export default function Index() {
  return (
    <main>
      <Helmet>
        <title>Behavioral Health North Texas — Dr. Bushra Aziz, MD | Psychiatry</title>
        <meta name="description" content="Compassionate psychiatry, research, and substance abuse treatment in Garland, TX. Book in-person or telehealth visits with Dr. Bushra Aziz, MD." />
      </Helmet>
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
