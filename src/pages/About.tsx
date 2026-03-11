import { Shield, Eye, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const values = [
  { icon: Shield, title: "Safety First", desc: "Every job starts with a risk assessment. We use harnesses, anchor points, and proper safety gear on every elevated job." },
  { icon: Eye, title: "Attention to Detail", desc: "We mask, protect, and pre-treat. When we leave, the only thing that's changed is the surface we cleaned." },
  { icon: Clock, title: "Reliable & On Time", desc: "We schedule precisely and communicate immediately if conditions change. Your time is respected." },
  { icon: MessageSquare, title: "Clear Communication", desc: "You'll know what we're doing, how long it will take, and what to expect. No jargon, no surprises." },
];

const About = () => {
  return (
    <>
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">About</span>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Built On Trust, Driven By Results
            </h1>
            <p className="text-primary-foreground/85 text-lg">
              Westline Property Maintenance was founded on a simple principle: treat every property as if it were our own. We combine professional-grade equipment with material-specific methods to deliver results that last.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="max-w-none">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                We're a locally owned and operated team serving Perth and surrounding areas. With years of hands-on experience across residential, rental, and commercial properties, we understand that no two surfaces are the same.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                That's why we don't take a one-size-fits-all approach. Every job begins with an assessment. We identify the surface material, the type of staining or growth, and any surrounding areas that need protection. Then we select the right method—whether that's a gentle soft-wash, controlled pressure, or chemical treatment.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                We're fully insured, safety-conscious, and committed to leaving your property better than we found it. Our final walkthrough with you isn't just courtesy—it's accountability.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-steel/20">
        <div className="container">
          <SectionHeading label="Our Values" title="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="flex gap-5 bg-steel/30 border border-border rounded-lg p-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <v.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default About;
