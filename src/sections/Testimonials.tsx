import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'Vision was proactive, clear in communication, and delivered our booking platform with excellent performance and usability. The product shipped on time and exceeded expectations.',
    author: 'eBooking',
    role: 'Product Owner',
  },
  {
    id: 2,
    quote:
      'Our job portal became faster and more reliable after Vision’s work. He brought strong full‑stack skills and thoughtful solutions to every requirement.',
    author: 'Job Axle',
    role: 'Operations Lead',
  },
  {
    id: 3,
    quote:
      'We appreciated Vision’s attention to detail and clean architecture. He delivered a polished, scalable web application and was a pleasure to collaborate with.',
    author: 'HIDCL',
    role: 'Project Manager',
  },
  {
    id: 4,
    quote:
      'Vision consistently turned complex requirements into simple, user‑friendly experiences. The end result was a modern platform our users love.',
    author: 'RemotelyLearn',
    role: 'Founder',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="reveal opacity-0 text-sm font-medium tracking-wider text-white/60 uppercase">
            Experience highlights
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="reveal opacity-0 relative" style={{ animationDelay: '0.1s' }}>
          <div className="card-rounded bg-white/10 p-8 sm:p-12 lg:p-16 shadow-soft border border-white/20">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 sm:left-12">
            <div className="w-10 h-10 rounded-full bg-coral-dark/20 flex items-center justify-center">
              <Quote className="w-5 h-5 text-coral-dark" />
              </div>
            </div>

            {/* Content */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="font-medium text-white">
                  —{testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-white/60 mt-1">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/10 shadow-soft flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-charcoal' : 'bg-charcoal/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-cream transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-charcoal" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-charcoal/60">
              {currentIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
