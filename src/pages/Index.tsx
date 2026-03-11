import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Shield,
  FileText,
  Eye,
  ThumbsUp,
  ClipboardCheck,
  Search,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Clock,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCards from "@/components/ServiceCards";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import QuoteForm from "@/components/QuoteForm";
import beforeImg from "@/assets/before-driveway.jpg";
import afterImg from "@/assets/after-driveway.jpg";

const trustBadges = [
  { icon: Shield, label: "Fully Insured" },
  { icon: FileText, label: "Free Quotes" },
  { icon: Eye, label: "Before & After Proof" },
  { icon: ThumbsUp, label: "Satisfaction Focused" },
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
            description: "Professional property maintenance and exterior cleaning services in Perth",
            telephone: SITE.phone,
            email: SITE.email,
            address: { "@type": "PostalAddress", addressLocality: "Perth", addressRegion: "WA" },
            openingHours: SITE.hours,
            priceRange: "$$",
          }),
        }}
      />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Trust badges */}
      <section className="border-b border-border">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-3 py-2">
                <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Property Care"
            description="From rooftops to driveways, we deliver meticulous results with methods matched to every surface."
          />
          <ServiceCards />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-section-light">
        <div className="container">
          <SectionHeading
            label="Our Process"
            title="How It Works"
            description="A clear, four-step process designed to protect your property and deliver outstanding results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-primary font-bold text-sm mb-2 block">Step {i + 1}</span>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Westline */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            label="Why Westline"
            title="The Westline Difference"
            description="We don't just clean. We protect, communicate, and deliver results you can see."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex gap-5 bg-card border border-border rounded-xl p-6 card-shadow card-hover">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
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
      <section className="py-20 md:py-24 bg-section-light">
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
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/gallery">View Full Gallery <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Quote Form Section */}
      <section id="quote" className="py-20 md:py-24 bg-section-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">Get Started</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Request a Free Quote
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Fill out the form and we'll get back to you within 24 hours with a detailed quote. No obligation, no pressure.
              </p>
              <div className="space-y-4">
                {[
                  "Free, no-obligation quotes",
                  "Response within 24 hours",
                  "Fully insured and professional",
                  "Surface-safe cleaning methods",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-card border border-border rounded-xl card-shadow">
                <p className="text-foreground font-semibold mb-1">Prefer to call?</p>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-primary text-lg font-bold flex items-center gap-2 hover:underline">
                  <Phone className="w-5 h-5" /> {SITE.phone}
                </a>
              </div>
            </ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 card-shadow-lg">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            label="Where We Work"
            title="Service Areas"
            description="Proudly serving properties across the greater Perth area."
          />
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {areas.map((area) => (
                <span key={area} className="bg-secondary border border-border rounded-full px-5 py-2 text-sm text-foreground font-medium">
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal className="text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/service-areas">View All Areas <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Preview */}
      <FAQSection />

      {/* CTA Banner */}
      <section className="bg-gradient-section py-20 md:py-24">
        <div className="container text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Ready To Restore Your Property?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
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
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
