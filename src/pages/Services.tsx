import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import roofCleaning from "@/assets/service-roof-cleaning.jpg";
import gutterCleaning from "@/assets/service-gutter-cleaning.jpg";
import brickCleaning from "@/assets/service-brick-cleaning.jpg";
import roofPainting from "@/assets/service-roof-painting.jpg";
import pressureWashing from "@/assets/service-pressure-washing.jpg";
import solarCleaning from "@/assets/service-solar-cleaning.jpg";

const services = [
  {
    image: roofCleaning,
    title: "Roof Tile & Colorbond Cleaning",
    desc: "Safe, thorough cleaning that removes lichen, moss, and built-up grime from tile and Colorbond roofs—restoring their original finish and extending their lifespan.",
    href: "/services/roof-cleaning",
  },
  {
    image: gutterCleaning,
    title: "Gutter Cleaning & Gutter Guards",
    desc: "Complete gutter clearing to prevent blockages, water damage, and pest entry. Optional gutter guard installation for lasting protection.",
    href: "/services/gutter-cleaning",
  },
  {
    image: brickCleaning,
    title: "Face Brick Cleaning",
    desc: "Gentle, material-appropriate techniques that revive the natural beauty of face brick without causing surface damage or discolouration.",
    href: "/services/face-brick-cleaning",
  },
  {
    image: roofPainting,
    title: "Roof Painting",
    desc: "Professional roof painting with premium, weatherproof coatings. We prepare, prime, and paint for a result that lasts for years.",
    href: "/services/roof-painting",
  },
  {
    image: pressureWashing,
    title: "Driveways, Paving & Patios",
    desc: "High-pressure washing with surface cleaner attachments for a streak-free, even finish on concrete, brick paving, and natural stone.",
    href: "/services/pressure-washing",
  },
  {
    image: solarCleaning,
    title: "Solar Panel Cleaning",
    desc: "Careful, deionised water cleaning that restores panel efficiency. We work safely on rooftops without voiding your warranty.",
    href: "/services/solar-panel-cleaning",
  },
];

const trustBadges = [
  { icon: Shield, label: "Fully Insured" },
  { icon: FileText, label: "Free Quotes" },
  { icon: CheckCircle2, label: "Satisfaction Guaranteed" },
];

const Services = () => {
  return (
    <>
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container">
          <SectionHeading
            variant="dark"
            label="What We Do"
            title="Our Services"
            description="Every surface has its own needs. We match the right method to the right material—every time."
          />
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 text-primary-foreground/90"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">{badge.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-0">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <Link
                  to={service.href}
                  className={`group flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl border border-border bg-card card-shadow-lg card-hover mb-8 last:mb-0 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 overflow-hidden">
                    <div className="aspect-[16/10] md:aspect-auto md:h-full min-h-[280px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <span className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-steel/20">
        <div className="container max-w-3xl">
          <SectionHeading
            label="Equipment"
            title="Professional-Grade Tools, Expertly Applied"
            description="Our results come from matching the right equipment to every surface and situation."
          />
          <div className="space-y-6">
            {[
              { title: "Surface Cleaners for Flatwork", desc: "Our rotary surface cleaners provide a perfectly even, streak-free finish on driveways, paths, and patios—faster and more consistent than a standard lance." },
              { title: "Telescopic Reach Systems", desc: "Telescopic poles and lances allow us to clean gutters, fascias, and upper storeys safely from ground level, reducing the need for scaffolding." },
              { title: "Soft-Wash Chemical Application", desc: "For delicate surfaces like roof tiles and painted render, we use low-pressure chemical sprayers that break down organic growth without force." },
              { title: "Safe Roof Access", desc: "When roof access is required, we follow strict ladder and harness safety procedures. Your safety and ours is non-negotiable." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 card-shadow hover:border-primary/20 transition-colors">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-border">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Not sure which service you need?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Get a free, no-obligation quote. We'll assess your property and recommend the right approach.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                <FileText className="w-5 h-5" />
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Services;
