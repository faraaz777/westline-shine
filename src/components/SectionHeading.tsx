import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "dark";
}

const SectionHeading = ({ label, title, description, align = "center", variant = "default" }: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = variant === "dark";

  return (
    <ScrollReveal className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      {label && (
        <span className={`font-semibold text-sm uppercase tracking-widest mb-3 block ${isDark ? "text-accent" : "text-primary"}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-4 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${isDark ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeading;
