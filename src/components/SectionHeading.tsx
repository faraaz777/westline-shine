import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollReveal className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      {label && (
        <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeading;
