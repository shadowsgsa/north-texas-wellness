import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-cream/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl text-balance">
            Get in touch with our team
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl bg-card p-8 shadow-soft">
            <h3 className="font-display text-xl font-semibold text-primary">
              Send a secure inquiry
            </h3>

            {sent ? (
              <p className="mt-6 rounded-xl bg-sage/10 p-4 text-sm text-sage-foreground">
                Thanks — your message has been received. We'll respond within one business day.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                
                <div className="grid gap-4 sm:grid-cols-2">
                  
                  <div className="grid gap-2">
                    <Label htmlFor="cname">Name</Label>
                    <Input
                      id="cname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="cemail">Email</Label>
                    <Input
                      id="cemail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                </div>

                <div className="grid gap-2">
                  <Label htmlFor="cmsg">Message</Label>
                  <Textarea
                    id="cmsg"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="rounded-full">
                  Send Message
                </Button>

              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-primary">Behavioral Health<br/>North Texas Association</h3>
              <p className="mt-1 text-sm text-accent">Dr. Bushra Aziz, MD</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="text-sage shrink-0" size={18} />
                  <a target="_blank" rel="noreferrer" href="https://maps.google.com/?q=5506+Broadway+Blvd+Garland+TX+75043" className="text-foreground hover:text-primary">
                    5506 Broadway Blvd<br/>Garland, TX 75043
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="text-sage shrink-0" size={18} />
                  <a href="tel:+18179843514" className="hover:text-primary">(817) 984‑3514</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="text-sage shrink-0" size={18} />
                  <a href="https://wa.me/18179843514" target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp: (817) 984‑3514</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="text-sage shrink-0" size={18} />
                  <a href="mailto:bushraaziz@behavioralhealthnta.com" className="hover:text-primary">bushraaziz@behavioralhealthnta.com</a>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild variant="outline" className="rounded-full"><a href="tel:+18179843514"><Phone size={16} className="mr-1"/>Call</a></Button>
                <Button asChild className="rounded-full"><a href="https://wa.me/18179843514" target="_blank" rel="noreferrer"><MessageCircle size={16} className="mr-1"/>WhatsApp</a></Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft border border-border">
              <iframe
                title="Clinic location map"
                src="https://www.google.com/maps?q=5506+Broadway+Blvd+Garland+TX+75043&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
              <AlertTriangle size={18} className="shrink-0 mt-0.5" />
              <p><strong>In a crisis?</strong> If you or someone you know is in immediate danger, call 911 or dial 988 for the Suicide & Crisis Lifeline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
