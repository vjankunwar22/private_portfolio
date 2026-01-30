import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I primarily work with React, Next.js, TypeScript, and Node.js for web development. For mobile, I use React Native and Flutter. I also have extensive experience with cloud platforms like AWS and Google Cloud, and databases including PostgreSQL and MongoDB.',
  },
  {
    question: 'Do you accept project-based or hourly work?',
    answer:
      'I offer both options depending on the project scope. For well-defined projects, I prefer fixed-price contracts. For ongoing work or projects with evolving requirements, hourly rates work best. We can discuss what makes sense for your specific needs.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary based on project complexity. A simple website might take 2-3 weeks, while a full-featured web application could take 2-3 months. I always provide detailed timelines during our initial consultation and keep you updated throughout the development process.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Absolutely! I offer maintenance and support packages to ensure your application continues to run smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements as your business grows.',
  },
  {
    question: 'How do we get started?',
    answer:
      "Simply book a free discovery call through the button below. We'll discuss your project requirements, goals, and timeline. After understanding your needs, I'll provide a detailed proposal with scope, timeline, and pricing.",
  },
];

const FAQs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="reveal opacity-0 text-sm font-medium tracking-wider text-charcoal/60 uppercase mb-4">
            FAQs
          </p>
          <h2 className="reveal opacity-0 font-serif text-3xl sm:text-4xl text-charcoal" style={{ animationDelay: '0.1s' }}>
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="reveal opacity-0" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-none shadow-soft"
              >
                <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
