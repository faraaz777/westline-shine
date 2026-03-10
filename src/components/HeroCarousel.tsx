import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    headline: "Your Property, Restored To Its Best",
    sub: "Professional exterior cleaning and property maintenance across Perth. Local, insured, and committed to results that last.",
  },
  {
    image: hero2,
    headline: "Driveways, Patios & Paving Made New",
    sub: "High-pressure cleaning that removes years of grime. See the difference from the first pass.",
  },
  {
    image: hero3,
    headline: "Roof Cleaning You Can Trust",
    sub: "Tile and Colorbond roof cleaning with surface-safe methods. No damage, no shortcuts.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[85vh] min-h-[560px] max-h-[800px] overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? {} : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-primary-foreground mb-6">
                {slide.headline}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 leading-relaxed">
                {slide.sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/contact">
                    <FileText className="w-5 h-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
