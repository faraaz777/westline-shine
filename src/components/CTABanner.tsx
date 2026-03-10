import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTABanner = () => {
  return (
    <section className="bg-gradient-section noise-texture py-20 md:py-28">
      <div className="container relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Ready To Restore Your Property?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get a free, no-obligation quote. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                <FileText className="w-5 h-5" />
                Get a Free Quote
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
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
