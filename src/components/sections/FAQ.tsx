"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How are the number of video minutes calculated?",
    answer: "Video minutes are based on the final output length of your videos. For example, a 3-minute video uses 3 minutes from your plan's allocation."
  },
  {
    question: "What is a Video Project?",
    answer: "A Video Project in Pictory refers to a single video creation session, where you can input text, select media, add voiceovers, and export a finished video."
  },
  {
    question: "How do I get support?",
    answer: "We offer multiple support channels: comprehensive documentation, email support for all users, and priority support for Teams and Enterprise plans."
  },
  {
    question: "What happens to my videos if I cancel?",
    answer: "If you cancel, you'll maintain access until the end of your billing period. We recommend downloading your videos before your subscription ends."
  },
  {
    question: "Will videos show a Pictory watermark?",
    answer: "No, all paid plans include watermark-free videos. The free trial does include a small Pictory watermark on exported videos."
  },
  {
    question: "Is your platform system secure?",
    answer: "Yes, Pictory prioritizes security with enterprise-grade protection. We use bank-level encryption for all data and maintain SOC 2 compliance."
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Have more questions? Check our{" "}
            <a
              href="https://kb.pictory.ai/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              knowledge base
            </a>{" "}
            or{" "}
            <a
              href="https://calendly.com/d/cq7g-7c7-ryz"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact our team
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
