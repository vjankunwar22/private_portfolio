import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'remotelylearn.com',
    category: 'E-learning Platform',
    tags: ['Web App', 'Education'],
    image: '/remotelylearn.svg',
    description: 'Remote education platform with modern learning workflows.',
    href: 'https://remotelylearn.com',
  },
  {
    id: 2,
    title: 'ebooking.com',
    category: 'Booking Platform',
    tags: ['Web App', 'SaaS'],
    image: '/ebooking.svg',
    description: 'Comprehensive booking management platform.',
    href: 'https://ebooking.com',
  },
  {
    id: 3,
    title: 'jobaxle.com',
    category: 'Job Portal',
    tags: ['Web App', 'Recruitment'],
    image: '/jobaxle.svg',
    description: 'Job portal connecting employers and candidates.',
    href: 'https://jobaxle.com',
  },
  {
    id: 4,
    title: 'hidcl.org.np',
    category: 'Hydropower Investment',
    tags: ['Website', 'Corporate'],
    image: '/hidcl.png',
    description: 'Hydropower Investment and Development Company.',
    href: 'https://hidcl.org.np/',
  },
];

const Portfolio = () => {
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
      id="work"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="reveal opacity-0 text-sm font-medium tracking-wider text-charcoal/60 uppercase mb-4">
            Selected work...
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="reveal opacity-0 group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="card-rounded bg-white overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-cream/60 flex items-center justify-center p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* View Project Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-soft">
                      <ArrowUpRight className="w-5 h-5 text-charcoal" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium tracking-wider text-charcoal/60 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-2 group-hover:text-coral-dark transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal/60">{project.category}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Client Logos / Text */}
        <div className="reveal opacity-0 mt-16 text-center" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-charcoal/60 mb-6">
            I have worked with a wide range of clients and organizations, including:
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-charcoal/40 text-sm font-medium">
            <span>Startups</span>
            <span>•</span>
            <span>Enterprises</span>
            <span>•</span>
            <span>Agencies</span>
            <span>•</span>
            <span>Non-Profits</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
