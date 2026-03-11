import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteForm from "@/components/QuoteForm";

const Contact = () => {
  return (
    <>
      <section className="py-2 md:py-6 ">
        <div className="container px-2 sm:px-3">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">Get a Free Quote</h1>
          <p className="text-muted-foreground text-lg">Tell us about your property and we'll respond within 24 hours.</p>
        </div>
      </section>

      <section className="py-6 md:py-2 md:pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-steel/30 border border-border rounded-lg p-6 md:p-8">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6">Request a Quote</h3>
                  <QuoteForm />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-xl text-foreground">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prefer to speak to someone? Call us directly or send an email. We respond to all enquiries within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-semibold">{SITE.phone}</p>
                      </div>
                    </a>

                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">{SITE.email}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 text-foreground">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Service Area</p>
                        <p className="font-semibold">{SITE.region}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-foreground">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Hours</p>
                        <p className="font-semibold">{SITE.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
