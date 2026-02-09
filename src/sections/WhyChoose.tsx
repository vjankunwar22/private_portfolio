import { useEffect, useRef } from 'react';
import { Zap, Palette, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Performance First',
    description:
      'High-performance applications that load fast and run smoothly, ensuring the best user experience.',
  },
  {
    icon: Palette,
    title: 'Clean Architecture',
    description:
      'Well-structured, maintainable code that scales with your business needs and is easy to extend.',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description:
      'Technology solutions designed to drive results, increase efficiency, and help your business thrive.',
  },
];

const WhyChoose = () => {
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 text-sm font-medium tracking-wider text-white/60 uppercase mb-4">
            Why choose vision.dev
          </p>
          <h2 className="reveal opacity-0 font-serif text-3xl sm:text-4xl lg:text-5xl text-white" style={{ animationDelay: '0.1s' }}>
            Results driven,{' '}
            <span className="italic text-coral-dark">tech smart</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal opacity-0 text-center"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 shadow-soft mb-6 border border-white/20">
                <feature.icon className="w-6 h-6 text-coral-dark" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
