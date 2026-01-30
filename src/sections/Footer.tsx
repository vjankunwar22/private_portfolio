import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 sm:py-16 bg-cream px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="font-serif text-2xl text-charcoal tracking-tight inline-block mb-4"
            >
              vision<span className="text-coral-dark">.</span>dev
            </a>
            <p className="text-sm text-charcoal/60 max-w-sm leading-relaxed">
              Full stack software developer based in Kathmandu, Nepal, focused on
              building reliable, scalable web applications.
            </p>
            <div className="mt-4 text-sm text-charcoal/60 space-y-1">
              <p>Phone: +977-9818473719</p>
              <p>Email: vjankunwar22@gmail.com</p>
              <p>LinkedIn: vision-kunwar-94b498232</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Work', href: '#work' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-charcoal mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="mailto:vjankunwar22@gmail.com"
                className="w-9 h-9 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-coral-light/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-charcoal" />
              </a>
              <a
                href="https://www.linkedin.com/in/vision-kunwar-94b498232"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-coral-light/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-charcoal" />
              </a>
              <a
                href="https://github.com/vjankunwar22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-coral-light/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-charcoal" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal/50">
            © {currentYear} Vision Kunwar. All rights reserved.
          </p>
          <p className="text-xs text-charcoal/50">
            Designed & developed with{' '}
            <span className="text-coral-dark">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
