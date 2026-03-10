import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home, Droplets, Layers, Paintbrush, Wrench, Sun, ArrowRight, Phone, FileText,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: Home,
    title: "Roof Tile & Colorbond Cleaning",
    desc: "Safe, thorough cleaning that removes lichen, moss, and built-up grime from tile and Colorbond roofs—restoring their original finish and extending their lifespan.",
    href: "/services/roof-cleaning",
  },
  {
    icon: Droplets,
    title: "Gutter Cleaning & Gutter Guards",
    desc: "Complete gutter clearing to prevent blockages, water damage, and pest entry. Optional gutter guard installation for lasting protection.",
    href: "/services/gutter-cleaning",
  },
  {
    icon: Layers,
    title: "Face Brick Cleaning",
    desc: "Gentle, material-appropriate techniques that revive the natural beauty of face brick without causing surface damage or discolouration.",
    href: "/services/face-brick-cleaning",
  },
  {
    icon: Paintbrush,
    title: "Roof Painting",
    desc: "Professional roof painting with premium, weatherproof coatings. We prepare, prime, and paint for a result that lasts for years.",
    href: "/services/roof-painting",
  },
  {
    icon: Wrench,
    title: "Driveways, Paving & Patios",
    desc: "High-pressure washing with surface cleaner attachments for a streak-free, even finish on concrete, brick paving, and natural stone.",
    href: "/services/pressure-washing",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    desc: "Careful, deionised water cleaning that restores panel efficiency. We work safely on rooftops without voiding your warranty.",
    href: "/services/solar-panel-cleaning",
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="Every surface has its own needs. We match the right method to the right material—every time."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <Link
                  to={service.href}
                  className="group flex gap-5 bg-steel/30 border border-border rounded-lg p-6 md:p-8 card-hover glow-border h-full"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-cta flex items-center justify-center glow-blue group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                    <span className="text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment section */}
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
                <div className="bg-steel/30 border border-border rounded-lg p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
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

export default Services;
