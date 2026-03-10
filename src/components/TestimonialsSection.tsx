import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    text: "Westline transformed our roof. It looks brand new. The team was professional, on time, and left everything spotless. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Property Manager",
    text: "Managing 12 properties means I need reliable, no-fuss contractors. Westline delivers every time. Their communication is outstanding.",
    rating: 5,
  },
  {
    name: "Michelle T.",
    role: "Homeowner",
    text: "I was worried about my delicate roof tiles. Westline used a gentle soft-wash approach and the results were incredible. They clearly know their materials.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Landlord",
    text: "The before and after on our driveway was night and day. Fast turnaround, fair pricing, and a thorough final walkthrough. Highly recommend.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Trusted By Property Owners
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 card-shadow card-hover">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
