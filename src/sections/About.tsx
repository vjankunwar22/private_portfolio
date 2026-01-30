import { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal opacity-0 relative">
            <div className="card-rounded overflow-hidden shadow-soft aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="/potrait.png"
                alt="Vision Kunwar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-coral-light/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="reveal opacity-0 text-sm font-medium tracking-wider text-charcoal/60 uppercase mb-4">
              Meet the developer
            </p>
            <h2 className="reveal opacity-0 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6" style={{ animationDelay: '0.1s' }}>
              Inspired by creation,{' '}
              <span className="italic text-coral-dark">
                dedicated to code.
              </span>
            </h2>
            <div className="reveal opacity-0 space-y-4 text-charcoal/70 leading-relaxed" style={{ animationDelay: '0.2s' }}>
              <p>
                Passionate full stack developer with expertise in modern web
                technologies including tRPC, PostgreSQL, and Prisma ORM. I deliver
                high-quality software solutions across frontend and backend
                development with a focus on clean architecture and scalable systems.
              </p>
              <p>
                I build reliable systems like student information platforms and CRMs while
                applying best practices in code quality, testing, and deployment.
              </p>
              <p>
                I hold a Bachelor of Science in Computer Science from Leeds Beckett
                University, with a strong foundation in software engineering and
                modern web development practices.
              </p>
            </div>

            <div className="reveal opacity-0 mt-6" style={{ animationDelay: '0.25s' }}>
              <h3 className="text-sm font-semibold tracking-wider text-charcoal/60 uppercase mb-3">
                Education
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>
                  BSc in Computer Science, Leeds Beckett University
                </li>
                <li>
                  High School, Little Angels&apos; College 
                </li>
                <li>
                  Secondary School, Daffodil Boarding School
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="reveal opacity-0 flex gap-4 mt-8" style={{ animationDelay: '0.3s' }}>
              <a
                href="mailto:vjankunwar22@gmail.com"
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-coral-light/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-charcoal" />
              </a>
              <a
                href="https://www.linkedin.com/in/vision-kunwar-94b498232"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-coral-light/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-charcoal" />
              </a>
              <a
                href="https://github.com/vjankunwar22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-coral-light/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-charcoal" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
