import { useEffect, useRef } from 'react';
import { Code2, Cloud, Smartphone, Database, Globe, Layers } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Full-stack web applications using modern frameworks like React, Next.js, and Node.js. From landing pages to complex platforms.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Cross-platform mobile applications using React Native and Flutter. Native-like performance with a single codebase.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure on AWS, Google Cloud, and Azure. Serverless architectures and DevOps automation.',
  },
  {
    icon: Database,
    title: 'Backend Systems',
    description:
      'Robust APIs and database design. RESTful and GraphQL APIs with PostgreSQL, MongoDB, and Redis.',
  },
  {
    icon: Globe,
    title: 'E-Commerce',
    description:
      'Online stores with Shopify, WooCommerce, or custom solutions. Payment integration and inventory management.',
  },
  {
    icon: Layers,
    title: 'UI/UX Integration',
    description:
      'Pixel-perfect implementation of designs. Responsive, accessible, and performant user interfaces.',
  },
];

const Services = () => {
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
        <div className="mb-16">
          <h2 className="reveal opacity-0 font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            How I
            <br />
            can <span className="italic text-coral-dark">help you...</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal opacity-0 group"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:shadow-soft transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-5 group-hover:bg-coral-light/40 transition-colors">
                  <service.icon
                    className="w-5 h-5 text-coral-dark"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
