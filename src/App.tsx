import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { TopBar } from "@/components/TopBar";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/sections/Footer";
import { FloatingBook } from "@/components/FloatingBook";
import { BookingModal } from "@/components/BookingModal";
import Index from "@/pages/Index";
import PsychiatricConsultation from "@/pages/PsychiatricConsultation";
import ResearchProgram from "@/pages/ResearchProgram";
import SubstanceAbuseProgram from "@/pages/SubstanceAbuseProgram";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-dvh bg-background">
      <ScrollToTop />
      <TopBar />
      <SiteNav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/psychiatric-consultation" element={<PsychiatricConsultation />} />
        <Route path="/services/research-program" element={<ResearchProgram />} />
        <Route path="/services/substance-abuse-program" element={<SubstanceAbuseProgram />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingBook />
      <BookingModal />
    </div>
  );
}
