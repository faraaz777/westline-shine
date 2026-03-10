import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";

const services = [
  "Roof Cleaning",
  "Gutter Cleaning",
  "Face Brick Cleaning",
  "Roof Painting",
  "High Pressure Washing",
  "Solar Panel Cleaning",
  "Other",
];

const propertyTypes = ["House", "Townhouse", "Unit/Apartment", "Commercial", "Other"];

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Quote request sent! We'll respond within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClasses =
    "w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200 font-body text-sm";

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">Name *</label>
            <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">Phone *</label>
            <input id="phone" name="phone" type="tel" required placeholder="Your phone number" className={inputClasses} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" className={inputClasses} />
        </div>

        <div>
          <label htmlFor="suburb" className="block text-sm font-semibold text-foreground mb-1.5">Suburb / Area *</label>
          <input id="suburb" name="suburb" type="text" required placeholder="Your suburb" className={inputClasses} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-1.5">Service *</label>
            <select id="service" name="service" required className={inputClasses}>
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="property" className="block text-sm font-semibold text-foreground mb-1.5">Property Type</label>
            <select id="property" name="property" className={inputClasses}>
              <option value="">Select type</option>
              {propertyTypes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-foreground mb-1.5">Notes</label>
          <textarea id="notes" name="notes" rows={3} placeholder="Tell us about the job..." className={inputClasses} />
        </div>

        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request a Free Quote"}
        </Button>

        <p className="text-muted-foreground text-xs text-center">
          We respond within 24 hours. No spam, ever.
        </p>
      </form>
    </ScrollReveal>
  );
};

export default QuoteForm;
