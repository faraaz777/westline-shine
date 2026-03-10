import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import roofCleaning from "@/assets/service-roof-cleaning.jpg";
import gutterCleaning from "@/assets/service-gutter-cleaning.jpg";
import brickCleaning from "@/assets/service-brick-cleaning.jpg";
import roofPainting from "@/assets/service-roof-painting.jpg";
import pressureWashing from "@/assets/service-pressure-washing.jpg";
import solarCleaning from "@/assets/service-solar-cleaning.jpg";

const services = [
  { image: roofCleaning, title: "Roof Cleaning", desc: "Tile and Colorbond roof cleaning that restores your roof's original finish safely.", href: "/services/roof-cleaning" },
  { image: gutterCleaning, title: "Gutter Cleaning", desc: "Complete gutter clearing and optional gutter guard installation for lasting protection.", href: "/services/gutter-cleaning" },
  { image: brickCleaning, title: "Face Brick Cleaning", desc: "Gentle, material-appropriate cleaning that revives brickwork without damage.", href: "/services/face-brick-cleaning" },
  { image: roofPainting, title: "Roof Painting", desc: "Professional roof painting with premium coatings for a long-lasting, weatherproof finish.", href: "/services/roof-painting" },
  { image: pressureWashing, title: "Pressure Washing", desc: "High-pressure cleaning for driveways, patios, and paving. Streak-free results guaranteed.", href: "/services/pressure-washing" },
  { image: solarCleaning, title: "Solar Panel Cleaning", desc: "Safe, careful cleaning that restores panel efficiency without voiding warranties.", href: "/services/solar-panel-cleaning" },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <ScrollReveal key={service.title} delay={i * 0.08}>
          <Link
            to={service.href}
            className="group block bg-card border border-border rounded-xl overflow-hidden card-shadow card-hover h-full"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.desc}</p>
              <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ServiceCards;
