import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-6xl ${
          isScrolled ? 'top-3' : 'top-4'
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-black/40 backdrop-blur-lg shadow-soft border border-white/10'
              : 'bg-black/30 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="font-serif text-lg sm:text-xl text-white tracking-tight"
          >
            vision<span className="text-coral-dark">.</span>dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm text-white/80 hover:text-white transition-colors relative group"
              >
                <span
                  className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ease-out ${
                    link.label === 'Home'
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`}
                />
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/9818473719"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs inline-flex items-center justify-center gap-2 group"
            >
              Contact Me
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 shadow-soft p-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-white/80 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/9818473719"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs mt-2 w-full inline-flex items-center justify-center gap-2 group"
              >
                Contact Me
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
