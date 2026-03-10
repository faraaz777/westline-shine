import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const areas = [
  "Perth Metro", "Joondalup", "Wanneroo", "Stirling", "Scarborough",
  "Fremantle", "Cockburn", "Rockingham", "Mandurah", "Baldivis",
  "Armadale", "Mundijong", "Midland", "Ellenbrook", "Butler",
  "Clarkson", "Two Rocks", "Yanchep", "Bibra Lake", "Canning Vale",
];

const ServiceAreas = () => {
  return (
    <>
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Coverage"
            title="Where We Work"
            description="Proudly serving properties across [CITY/REGION] and surrounding areas."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
            {areas.map((area, i) => (
              <ScrollReveal key={area} delay={i * 0.03}>
                <div className="flex items-center gap-2 bg-steel/30 border border-border rounded-lg px-4 py-3">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{area}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-steel/30 border border-border rounded-lg overflow-hidden">
              <div className="aspect-[16/9] bg-steel/50 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  [Map embed placeholder — replace with Google Maps iframe for your service area]
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-8">
            <p className="text-center text-muted-foreground">
              Don't see your area listed? <a href="tel:[PHONE]" className="text-accent hover:text-foreground transition-colors">Give us a call</a> — we may still be able to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ServiceAreas;
