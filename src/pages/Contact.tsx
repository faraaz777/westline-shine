import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Contact"
            title="Get a Free Quote"
            description="Tell us about your property and we'll provide a detailed, no-obligation quote within 24 hours."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
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
                    <a href="tel:[PHONE]" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-semibold">[PHONE]</p>
                      </div>
                    </a>

                    <a href="mailto:[EMAIL]" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">[EMAIL]</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 text-foreground">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Service Area</p>
                        <p className="font-semibold">[CITY/REGION]</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-foreground">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Hours</p>
                        <p className="font-semibold">[HOURS]</p>
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
