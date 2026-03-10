import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  hero: string;
  bestFor: string[];
  process: { title: string; desc: string }[];
  pricing: string[];
  safety: string[];
  faqs: FAQItem[];
}

const serviceData: Record<string, ServiceData> = {
  "roof-cleaning": {
    title: "Roof Tile & Colorbond Cleaning",
    metaTitle: "Roof Cleaning Services | Westline Property Maintenance",
    metaDesc: "Professional roof tile and Colorbond roof cleaning in [CITY/REGION]. Safe methods, lasting results. Free quotes.",
    hero: "Restore your roof's original finish with safe, material-appropriate cleaning methods.",
    bestFor: ["Roof tiles with lichen, moss, or algae growth", "Colorbond roofs showing dirt or oxidation", "Pre-sale property presentation", "Strata or rental property maintenance"],
    process: [
      { title: "Roof Inspection", desc: "We assess the roof type, pitch, condition, and any areas of concern before starting." },
      { title: "Surface Protection", desc: "Surrounding areas, gardens, and fixtures are covered and protected." },
      { title: "Treatment Application", desc: "A biodegradable cleaning solution is applied to break down organic growth." },
      { title: "Cleaning", desc: "Low-pressure soft-wash for tiles, or appropriate pressure for Colorbond, ensures a thorough clean without damage." },
      { title: "Final Rinse & Walkthrough", desc: "Everything is rinsed, debris cleared, and we walk you through the results." },
    ],
    pricing: ["Roof size and pitch", "Type of roofing material", "Level of organic growth or staining", "Access requirements", "Whether gutter cleaning is included"],
    safety: ["Soft-wash methods for delicate tile surfaces", "Harness and anchor points for steep pitches", "Biodegradable, surface-safe cleaning solutions", "Full protection of gardens and surroundings", "Post-clean rinse to remove all residue"],
    faqs: [
      { question: "Will pressure washing damage my roof tiles?", answer: "We don't use high pressure on tiles. Our soft-wash method uses low pressure with appropriate cleaning solutions to safely remove growth without damaging the surface." },
      { question: "How long does a roof clean take?", answer: "Most residential roofs take a full day. Larger or heavily soiled roofs may require a second day." },
      { question: "How often should I clean my roof?", answer: "Every 2-3 years for most properties. Properties under heavy tree canopy or in humid areas may benefit from annual cleaning." },
    ],
  },
  "gutter-cleaning": {
    title: "Gutter Cleaning & Gutter Guard Installation",
    metaTitle: "Gutter Cleaning & Guards | Westline Property Maintenance",
    metaDesc: "Professional gutter cleaning and gutter guard installation in [CITY/REGION]. Prevent blockages and water damage. Free quotes.",
    hero: "Clear, flowing gutters that protect your property from water damage and pest entry.",
    bestFor: ["Blocked or overflowing gutters", "Properties near trees with heavy leaf fall", "Pre-winter maintenance", "Gutter guard installation for long-term protection"],
    process: [
      { title: "Assessment", desc: "We inspect gutter condition, downpipes, and identify any problem areas." },
      { title: "Debris Removal", desc: "All leaves, silt, and debris are removed by hand and with specialised tools." },
      { title: "Downpipe Flush", desc: "Downpipes are flushed to ensure clear water flow from roof to stormwater." },
      { title: "Guard Installation", desc: "If requested, quality gutter guards are fitted to prevent future blockages." },
    ],
    pricing: ["Linear metres of guttering", "Number of storeys", "Level of debris buildup", "Gutter guard type and quantity", "Downpipe condition"],
    safety: ["Safe ladder access procedures", "Harness systems for multi-storey properties", "Careful handling around solar panels and aerials", "All debris removed from site"],
    faqs: [
      { question: "Do I need gutter guards?", answer: "If your property is near trees or you're tired of frequent cleanings, guards are a great investment. They significantly reduce buildup and maintenance frequency." },
      { question: "Can you clean gutters on a two-storey house?", answer: "Yes. We use proper ladder safety equipment and harness systems for multi-storey access." },
    ],
  },
  "face-brick-cleaning": {
    title: "Face Brick Cleaning",
    metaTitle: "Face Brick Cleaning | Westline Property Maintenance",
    metaDesc: "Expert face brick cleaning in [CITY/REGION]. Gentle methods that restore brickwork without damage. Free quotes.",
    hero: "Revive the natural beauty of your brickwork with gentle, material-appropriate cleaning.",
    bestFor: ["Mortar smears or efflorescence stains", "Mould and algae on shaded brick walls", "Paint removal from face brick", "Pre-sale curb appeal improvement"],
    process: [
      { title: "Brick Assessment", desc: "We identify the brick type, mortar condition, and nature of the staining." },
      { title: "Test Patch", desc: "A small test area ensures the cleaning method is appropriate for your specific brick." },
      { title: "Chemical Application", desc: "A brick-safe cleaning solution is applied to dissolve stains and organic matter." },
      { title: "Controlled Pressure Clean", desc: "We use controlled pressure appropriate for the brick type to clean without surface damage." },
      { title: "Final Rinse", desc: "A thorough rinse removes all cleaning solution and loosened material." },
    ],
    pricing: ["Area of brickwork", "Type and severity of staining", "Brick type and condition", "Access requirements", "Height of walls"],
    safety: ["Brick-appropriate pressure levels", "pH-neutral or brick-safe cleaning agents", "Test patch before full treatment", "Protection of windows, doors, and landscaping"],
    faqs: [
      { question: "Can you clean painted brick?", answer: "We can clean painted brick surfaces. If you want paint removed from face brick, we can discuss the best approach for your specific situation." },
      { question: "Will brick cleaning damage the mortar?", answer: "Our methods are calibrated for each brick type. We avoid excessive pressure near mortar joints to preserve structural integrity." },
    ],
  },
  "roof-painting": {
    title: "Roof Painting",
    metaTitle: "Roof Painting Services | Westline Property Maintenance",
    metaDesc: "Professional roof painting in [CITY/REGION]. Premium coatings, proper preparation, lasting results. Free quotes.",
    hero: "A professionally painted roof that transforms your property's appearance and extends its lifespan.",
    bestFor: ["Faded or weathered roof tiles", "Colour change for property refresh", "Pre-sale value improvement", "Long-term roof protection"],
    process: [
      { title: "Roof Clean", desc: "The roof is thoroughly cleaned to remove all dirt, moss, and contaminants." },
      { title: "Repairs", desc: "Cracked or broken tiles are replaced. Ridge capping is re-pointed where needed." },
      { title: "Primer Application", desc: "A high-quality primer is applied to ensure maximum coating adhesion." },
      { title: "Paint Application", desc: "Premium roof paint is applied in multiple coats for a durable, even finish." },
      { title: "Final Inspection", desc: "We inspect every section and walk you through the finished result." },
    ],
    pricing: ["Roof size and pitch", "Current condition and repairs needed", "Number of coats required", "Paint colour and type", "Access complexity"],
    safety: ["Full harness and safety anchor systems", "Non-slip footwear and roof ladders", "Weather monitoring for optimal application conditions", "Premium UV-resistant, weatherproof coatings"],
    faqs: [
      { question: "How long does roof paint last?", answer: "With proper preparation and premium coatings, a professional roof paint job can last 10-15 years." },
      { question: "Can I change my roof colour?", answer: "Yes. We can paint your roof in a wide range of colours. We'll help you choose a colour that complements your property." },
    ],
  },
  "pressure-washing": {
    title: "Driveways, Paving & Patios",
    metaTitle: "Pressure Washing Services | Westline Property Maintenance",
    metaDesc: "High pressure washing for driveways, paving and patios in [CITY/REGION]. Streak-free results. Free quotes.",
    hero: "Streak-free, even cleaning that makes your outdoor surfaces look brand new.",
    bestFor: ["Oil-stained or grime-covered driveways", "Moss and algae on brick paving", "Patio and entertaining area refresh", "Pre-sale property presentation"],
    process: [
      { title: "Pre-Treatment", desc: "Stains and organic growth are pre-treated with appropriate cleaning agents." },
      { title: "High-Pressure Cleaning", desc: "Our surface cleaner attachment delivers an even, streak-free clean across the entire area." },
      { title: "Edge Detailing", desc: "Edges, corners, and expansion joints are detailed with precision lances." },
      { title: "Rinse & Inspect", desc: "The area is rinsed and we walk you through the finished result." },
    ],
    pricing: ["Total area (square metres)", "Surface type and condition", "Level of staining or growth", "Access and drainage", "Whether re-sanding is needed (pavers)"],
    safety: ["Surface-appropriate pressure settings", "Pre-treatment of stubborn stains", "Protection of adjacent gardens and surfaces", "Careful handling around drains and service covers"],
    faqs: [
      { question: "Will pressure washing damage my pavers?", answer: "When done correctly, no. We adjust pressure and use appropriate attachments for each surface type. Pavers may need re-sanding after cleaning." },
      { question: "Can you remove oil stains?", answer: "Most oil stains can be significantly reduced or removed with pre-treatment and targeted cleaning. Deep, old stains may lighten rather than fully disappear." },
    ],
  },
  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning",
    metaTitle: "Solar Panel Cleaning | Westline Property Maintenance",
    metaDesc: "Professional solar panel cleaning in [CITY/REGION]. Restore efficiency safely. Free quotes.",
    hero: "Restore your solar panel efficiency with safe, careful cleaning that protects your investment.",
    bestFor: ["Panels covered in dust, bird droppings, or pollen", "Reduced energy output from dirty panels", "Properties near construction sites or dusty roads", "Annual maintenance for optimal performance"],
    process: [
      { title: "Safety Setup", desc: "We establish safe roof access with proper harness and anchor systems." },
      { title: "Inspection", desc: "Panels are inspected for damage, hot spots, or wiring issues." },
      { title: "Deionised Water Clean", desc: "We use purified, deionised water and soft brushes to clean without leaving mineral deposits." },
      { title: "Final Check", desc: "Each panel is inspected and dried for a spotless, streak-free finish." },
    ],
    pricing: ["Number of panels", "Roof pitch and access", "Level of soiling", "Height and safety requirements", "Whether combined with gutter or roof cleaning"],
    safety: ["Deionised water prevents mineral spotting", "Soft brushes only—no abrasive tools", "No chemicals that could damage panel coatings", "Full harness safety for roof access", "Cleaning during optimal temperature conditions"],
    faqs: [
      { question: "How often should I clean my solar panels?", answer: "Annually for most properties. If you're near trees, construction, or dusty roads, twice a year may be beneficial." },
      { question: "Will cleaning void my warranty?", answer: "Our methods are manufacturer-approved. We use deionised water and soft tools—no harsh chemicals or abrasives." },
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams();
  const data = slug ? serviceData[slug] : null;

  if (!data) {
    return (
      <div className="container py-40 text-center">
        <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Service Not Found</h1>
        <Button variant="cta" asChild><Link to="/services">View All Services</Link></Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">Service</span>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">{data.title}</h1>
            <p className="text-foreground/70 text-lg mb-8">{data.hero}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact"><FileText className="w-5 h-5" /> Get a Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:[PHONE]"><Phone className="w-5 h-5" /> Call Now</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Best For */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <SectionHeading label="Best For" title="Is This Service Right For You?" align="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.bestFor.map((item) => (
              <ScrollReveal key={item}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-steel/20">
        <div className="container max-w-3xl">
          <SectionHeading label="Process" title="Our Process" align="left" />
          <div className="space-y-1">
            {data.process.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < data.process.length - 1 && <div className="w-0.5 h-full bg-accent/20 mt-1" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <SectionHeading label="Pricing" title="What Affects Pricing" align="left" />
          <div className="space-y-3">
            {data.pricing.map((item) => (
              <ScrollReveal key={item}>
                <div className="flex items-start gap-3 bg-steel/30 border border-border rounded-lg px-5 py-3">
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 md:py-20 bg-steel/20">
        <div className="container max-w-3xl">
          <SectionHeading label="Safety & Care" title="Surface Protection & Safety" align="left" />
          <div className="space-y-3">
            {data.safety.map((item) => (
              <ScrollReveal key={item}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={data.faqs} />

      <CTABanner />
    </>
  );
};

export default ServicePage;
