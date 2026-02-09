import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen bg-cream pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="card-rounded bg-cream-light overflow-hidden shadow-soft min-h-[80vh] flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Gradient Background */}
            <div className="absolute inset-0 hero-gradient opacity-60" />
            
            <div className="relative z-10">
              {/* Tag */}
              <div className="reveal opacity-0 mb-6">
                <span className="tag-pill bg-black/30 backdrop-blur-sm text-white/90 border-gold/40">
                  SOFTWARE DEVELOPER
                </span>
              </div>

              {/* Main Heading */}
              <div className="reveal opacity-0 mb-8" style={{ animationDelay: '0.1s' }}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1]">
                  Vision{' '}
                  <span className="italic text-coral-dark">Kunwar</span>
                </h1>
                <p className="mt-3 text-sm sm:text-base text-white/70">
                  Software Developer | Full Stack Developer
                </p>
               
              </div>

              {/* Service Tags */}
              <div className="reveal opacity-0 mb-8" style={{ animationDelay: '0.2s' }}>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <span className="text-xs sm:text-sm font-medium tracking-wider text-white/70 uppercase">
                    FULL STACK
                  </span>
                  <span className="hidden sm:block w-px h-4 bg-white/20" />
                  <span className="text-xs sm:text-sm font-medium tracking-wider text-white/70 uppercase">
                    FRONTEND
                  </span>
                  <span className="hidden sm:block w-px h-4 bg-white/20" />
                  <span className="text-xs sm:text-sm font-medium tracking-wider text-white/70 uppercase">
                    BACKEND
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="reveal opacity-0 max-w-md" style={{ animationDelay: '0.3s' }}>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                   I'm Vision, a passionate software developer with over 2 years of
                experience building digital products that make a difference. If you
                ask me what drives me, it's the thrill of turning ideas into reality
                through elegant code.
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-auto">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-cream-light/20 z-10" />
            <img
              src="/potrait.png"
              alt="Vision Kunwar - Software Developer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
