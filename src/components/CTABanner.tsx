import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTABanner = () => {
  return (
    <section className="bg-gradient-section py-20 md:py-24">
      <div className="container text-center max-w-2xl">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready To Restore Your Property?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Get a free, no-obligation quote. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold" asChild>
              <Link to="/contact">
                <FileText className="w-5 h-5" />
                Get a Free Quote
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:[PHONE]">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
