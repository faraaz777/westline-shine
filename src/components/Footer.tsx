import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-steel border-t border-border">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-heading font-bold text-xl text-foreground mb-4 block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-cta rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">W</span>
                </div>
                WESTLINE
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Professional property maintenance and exterior cleaning services. Protecting your investment with care and precision.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Roof Cleaning", href: "/services/roof-cleaning" },
                { label: "Gutter Cleaning", href: "/services/gutter-cleaning" },
                { label: "Face Brick Cleaning", href: "/services/face-brick-cleaning" },
                { label: "Roof Painting", href: "/services/roof-painting" },
                { label: "High Pressure Washing", href: "/services/pressure-washing" },
                { label: "Solar Panel Cleaning", href: "/services/solar-panel-cleaning" },
              ].map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "FAQ", href: "/faq" },
                { label: "Get a Quote", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" /> <a href="tel:[PHONE]" className="hover:text-foreground transition-colors">[PHONE]</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" /> <a href="mailto:[EMAIL]" className="hover:text-foreground transition-colors">[EMAIL]</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" /> [CITY/REGION]
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" /> [HOURS]
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="[FACEBOOK]" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="[INSTAGRAM]" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Westline Property Maintenance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
