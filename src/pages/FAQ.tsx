import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

const allFaqs = [
  { question: "How long does a typical roof cleaning take?", answer: "Most residential roofs can be completed in a single day. Larger or more complex properties may take up to two days. We'll provide a clear timeline in your quote." },
  { question: "Do you use high-pressure on all surfaces?", answer: "No. We match our method to the surface material. Delicate surfaces like roof tiles receive a gentle soft-wash with appropriate cleaning solutions, while concrete driveways can handle high-pressure treatment." },
  { question: "Are your cleaning products safe for gardens and pets?", answer: "Yes. We use biodegradable, environmentally responsible cleaning solutions. We also pre-wet and protect surrounding landscaping before treatment." },
  { question: "Do I need to be home during the service?", answer: "Not necessarily. As long as we have access to the areas that need cleaning and a water supply, we can complete the work. We'll walk you through the results before we leave." },
  { question: "How often should I have my roof cleaned?", answer: "We recommend every 2–3 years for most properties, depending on the environment. Properties near trees or in humid areas may benefit from annual cleaning." },
  { question: "What happens if it rains on the scheduled day?", answer: "We'll reschedule at no cost. Some light rain doesn't affect our work, but we'll communicate with you and make the call together based on conditions." },
  { question: "Are you insured?", answer: "Yes. We carry comprehensive public liability insurance. We're happy to provide a certificate of currency on request." },
  { question: "Do you provide written quotes?", answer: "Yes. Every quote is detailed and provided in writing. There are no hidden fees or surprise charges." },
  { question: "Can you clean multi-storey buildings?", answer: "Yes. We have the equipment and safety procedures for multi-storey residential and commercial properties." },
  { question: "Do you offer regular maintenance packages?", answer: "Yes. We can set up regular cleaning schedules for property managers and landlords. Contact us to discuss a maintenance plan." },
];

const FAQ = () => {
  return (
    <>
      <section className="bg-gradient-hero noise-texture py-20 md:py-28">
        <div className="container">
          <SectionHeading
            variant="dark"
            label="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our services, methods, and process."
          />
        </div>
      </section>

      <FAQSection faqs={allFaqs} showHeading={false} />

      <CTABanner />
    </>
  );
};

export default FAQ;
