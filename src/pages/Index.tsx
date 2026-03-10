import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  FileText,
  Eye,
  ThumbsUp,
  Phone,
  Droplets,
  Home,
  Paintbrush,
  Wrench,
  Sun,
  Layers,
  ClipboardCheck,
  Search,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import heroBg from "@/assets/hero-bg.jpg";
import beforeImg from "@/assets/before-driveway.jpg";
import afterImg from "@/assets/after-driveway.jpg";

const trustBadges = [
  { icon: Shield, label: "Fully Insured" },
  { icon: FileText, label: "Free Quotes" },
  { icon: Eye, label: "Before & After Proof" },
  { icon: ThumbsUp, label: "Satisfaction Focused" },
];

const services = [
  { icon: Home, title: "Roof Cleaning", desc: "Tile and Colorbond roof cleaning that restores your roof's original finish safely.", href: "/services/roof-cleaning" },
  { icon: Droplets, title: "Gutter Cleaning", desc: "Complete gutter clearing and optional gutter guard installation for lasting protection.", href: "/services/gutter-cleaning" },
  { icon: Layers, title: "Face Brick Cleaning", desc: "Gentle, material-appropriate cleaning that revives brickwork without damage.", href: "/services/face-brick-cleaning" },
  { icon: Paintbrush, title: "Roof Painting", desc: "Professional roof painting with premium coatings for a long-lasting, weatherproof finish.", href: "/services/roof-painting" },
  { icon: Wrench, title: "Pressure Washing", desc: "High-pressure cleaning for driveways, patios, and paving. Streak-free results guaranteed.", href: "/services/pressure-washing" },
  { icon: Sun, title: "Solar Panel Cleaning", desc: "Safe, careful cleaning that restores panel efficiency without voiding warranties.", href: "/services/solar-panel-cleaning" },
];

const steps = [
  { icon: ClipboardCheck, title: "Request a Quote", desc: "Tell us about your property and the service you need." },
  { icon: Search, title: "Site Assessment", desc: "We inspect the area to plan the safest, most effective approach." },
  { icon: ShieldCheck, title: "Protect Surfaces", desc: "We mask, cover, and pre-treat surrounding areas before work begins." },
  { icon: Sparkles, title: "Clean & Walkthrough", desc: "We complete the job and walk you through the results before we leave." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Materials-Safe Methods", desc: "We match our technique to your surface, from gentle soft-wash to precision high-pressure." },
  { icon: Eye, title: "Attention to Detail", desc: "Every job includes masking, protection of surroundings, and a thorough rinse." },
  { icon: Clock, title: "Reliable Scheduling", desc: "We show up when we say we will. Weather changes? We communicate immediately." },
  { icon: MessageSquare, title: "Clear Communication", desc: "You'll know exactly what we're doing, why, and when. No surprises." },
];

const areas = ["Perth Metro", "Joondalup", "Wanneroo", "Stirling", "Fremantle", "Cockburn", "Rockingham", "Mandurah"];

const Index = () => {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Westline Property Maintenance",
            description: "Professional property maintenance and exterior cleaning services",
            telephone: "[PHONE]",
            email: "[EMAIL]",
            address: { "@type": "PostalAddress", addressLocality: "[CITY/REGION]" },
            openingHours: "[HOURS]",
            image: heroBg,
            priceRange: "$$",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero noise-texture overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                Westline Property Maintenance
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
                Your Property, Restored To Its Best
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-8 leading-relaxed">
                Professional exterior cleaning and property maintenance. Local, insured, and committed to results that last.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    <FileText className="w-5 h-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/services">
                    View Services
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Trust badges */}
          <ScrollReveal delay={0.4} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 bg-steel/30 border border-border rounded-lg px-4 py-3">
                  <badge.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Property Care"
            description="From rooftops to driveways, we deliver meticulous results with methods matched to every surface."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <Link
                  to={service.href}
                  className="group block bg-steel/30 border border-border rounded-lg p-6 card-hover glow-border h-full"
                >
                  <service.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-steel/20">
        <div className="container">
          <SectionHeading
            label="Our Process"
            title="How It Works"
            description="A clear, four-step process designed to protect your property and deliver outstanding results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center mx-auto mb-5 glow-blue">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-accent font-bold text-sm mb-2 block">Step {i + 1}</span>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Westline */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Why Westline"
            title="The Westline Difference"
            description="We don't just clean. We protect, communicate, and deliver results you can see."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex gap-5 bg-steel/20 border border-border rounded-lg p-6 card-hover">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 md:py-28 bg-steel/20">
        <div className="container max-w-4xl">
          <SectionHeading
            label="Results"
            title="See The Difference"
            description="Drag the slider to reveal the transformation. Real results from real properties."
          />
          <ScrollReveal>
            <BeforeAfterSlider beforeSrc={beforeImg} afterSrc={afterImg} />
          </ScrollReveal>
          <ScrollReveal className="text-center mt-8">
            <Button variant="ctaOutline" asChild>
              <Link to="/gallery">View Full Gallery <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Service Areas Preview */}
      <section className="py-20 md:py-28 bg-steel/20">
        <div className="container">
          <SectionHeading
            label="Where We Work"
            title="Service Areas"
            description="Proudly serving properties across the greater [CITY/REGION] area."
          />
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {areas.map((area) => (
                <span key={area} className="bg-steel/50 border border-border rounded-full px-5 py-2 text-sm text-foreground font-medium">
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <Button variant="ctaOutline" asChild>
              <Link to="/service-areas">View All Areas <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Preview */}
      <FAQSection />

      {/* CTA */}
      <CTABanner />
    </>
  );
};

export default Index;
