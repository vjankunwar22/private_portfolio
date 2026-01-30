import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5, CSS3, Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'tRPC',
      'PostgreSQL',
      'Prisma ORM',
      'Node.js',
      'RESTful APIs',
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      'Git',
      'Docker',
      'Agile Methodologies',
      'CI/CD',
      'Database Design',
    ],
  },
];

const clients = [
  'Student Information Systems',
  'CRM Platforms',
  'Booking Systems',
  'Job Portals',
  'E-learning Platforms',
  'Responsive Web Apps',
];

const Skills = () => {
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
        {/* Focus Areas */}
        <div className="mb-20">
          <h3 className="reveal opacity-0 font-serif text-2xl sm:text-3xl text-charcoal mb-8 text-center">
            Focus Areas
          </h3>
          <div className="reveal opacity-0 flex flex-wrap justify-center gap-3 sm:gap-4" style={{ animationDelay: '0.1s' }}>
            {clients.map((client) => (
              <span
                key={client}
                className="px-5 py-2.5 rounded-full bg-white shadow-soft text-sm text-charcoal/80"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Skills & Services */}
        <div>
          <p className="reveal opacity-0 text-sm font-medium tracking-wider text-charcoal/60 uppercase mb-4">
            Technical skills
          </p>
          <h2 className="reveal opacity-0 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-12" style={{ animationDelay: '0.1s' }}>
            What I build with{' '}
            <span className="italic text-coral-dark">every day</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="reveal opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="h-full p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-black/5">
                  <h4 className="font-serif text-lg text-charcoal mb-4 pb-3 border-b border-black/10">
                    {category.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-charcoal/70 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-coral-dark" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
