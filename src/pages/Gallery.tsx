import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTABanner from "@/components/CTABanner";
import beforeImg from "@/assets/before-driveway.jpg";
import afterImg from "@/assets/after-driveway.jpg";

const filters = ["All", "Roofs", "Gutters", "Driveways", "Brick", "Solar"];

const galleryItems = [
  { category: "Driveways", before: beforeImg, after: afterImg, label: "Driveway Pressure Wash" },
  { category: "Roofs", before: beforeImg, after: afterImg, label: "Tile Roof Clean" },
  { category: "Gutters", before: beforeImg, after: afterImg, label: "Gutter Clear & Guard" },
  { category: "Brick", before: beforeImg, after: afterImg, label: "Face Brick Restoration" },
  { category: "Solar", before: beforeImg, after: afterImg, label: "Solar Panel Clean" },
  { category: "Driveways", before: beforeImg, after: afterImg, label: "Patio Wash" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container">
          <SectionHeading
            variant="dark"
            label="Our Work"
            title="Before & After Gallery"
            description="Real results from real properties. Drag the slider to see the transformation."
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-gradient-cta text-primary-foreground glow-blue"
                    : "bg-steel/30 text-muted-foreground border border-border hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${item.label}-${i}`} delay={i * 0.1}>
                <div>
                  <BeforeAfterSlider beforeSrc={item.before} afterSrc={item.after} />
                  <p className="text-center text-foreground font-heading font-semibold mt-3">{item.label}</p>
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

export default Gallery;
