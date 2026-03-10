import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  showHeading?: boolean;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How long does a typical roof cleaning take?",
    answer: "Most residential roofs can be completed in a single day. Larger or more complex properties may take up to two days. We'll provide a clear timeline in your quote.",
  },
  {
    question: "Do you use high-pressure on all surfaces?",
    answer: "No. We match our method to the surface material. Delicate surfaces like roof tiles receive a gentle soft-wash with appropriate cleaning solutions, while concrete driveways can handle high-pressure treatment.",
  },
  {
    question: "Are your cleaning products safe for gardens and pets?",
    answer: "Yes. We use biodegradable, environmentally responsible cleaning solutions. We also pre-wet and protect surrounding landscaping before treatment.",
  },
  {
    question: "Do I need to be home during the service?",
    answer: "Not necessarily. As long as we have access to the areas that need cleaning and a water supply, we can complete the work. We'll walk you through the results before we leave.",
  },
  {
    question: "How often should I have my roof cleaned?",
    answer: "We recommend every 2–3 years for most properties, depending on the environment. Properties near trees or in humid areas may benefit from annual cleaning.",
  },
  {
    question: "What happens if it rains on the scheduled day?",
    answer: "We'll reschedule at no cost. Some light rain doesn't affect our work, but we'll communicate with you and make the call together based on conditions.",
  },
];

const FAQSection = ({ faqs = defaultFaqs, showHeading = true }: FAQSectionProps) => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        {showHeading && (
          <ScrollReveal className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-steel/30 border border-border rounded-lg px-6 data-[state=open]:glow-border"
              >
                <AccordionTrigger className="text-foreground font-heading font-semibold text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
export type { FAQItem };
