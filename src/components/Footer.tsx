import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-heading font-bold text-xl mb-4 block">
              <div className="flex items-center gap-2">
                <img src="/favicon.ico" alt="Westline" className="h-8 w-8 object-contain" />
                WESTLINE
              </div>
            </Link>
            <p className="text-primary-foreground/85 text-sm leading-relaxed mt-4">
              Professional property maintenance and exterior cleaning services. Protecting your investment with care and precision.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Services</h4>
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
                  <Link to={s.href} className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "FAQ", href: "/faq" },
                { label: "Get a Quote", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/85">
                <Phone className="w-4 h-4 text-accent shrink-0" /> <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-primary-foreground transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/85">
                <Mail className="w-4 h-4 text-accent shrink-0" /> <a href={`mailto:${SITE.email}`} className="hover:text-primary-foreground transition-colors">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/85">
                <MapPin className="w-4 h-4 text-accent shrink-0" /> Perth, WA
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/85">
                <Clock className="w-4 h-4 text-accent shrink-0" /> {SITE.hours}
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/85 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/85 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Westline Property Maintenance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
