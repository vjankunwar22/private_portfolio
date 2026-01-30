import { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  'Comprehensive analysis of your current tech stack',
  '30-minute consultation to discuss solutions',
  'Actionable recommendations for improvement',
];

const CTA = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-cream px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="reveal opacity-0 card-rounded bg-white p-6 sm:p-10 lg:p-12 shadow-soft mb-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] items-start">
            <div>
              <p className="text-sm font-medium tracking-wider text-charcoal/60 uppercase mb-3">
                Let&apos;s talk
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-4">
                Start with a{' '}
                <span className="text-coral-dark">free</span> tech audit
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-6">
                Tell me a bit about your project and I&apos;ll follow up within 24 hours.
              </p>
              <div className="mb-6">
                <p className="text-sm font-medium text-charcoal mb-4">What you receive:</p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-coral-light/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-coral-dark" />
                      </div>
                      <span className="text-sm text-charcoal/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-charcoal/60">
                Prefer email? Write me at{' '}
                <a
                  href="mailto:vjankunwar22@gmail.com"
                  className="text-coral-dark hover:underline"
                >
                  vjankunwar22@gmail.com
                </a>
                .
              </p>
            </div>

            <form
              className="bg-cream/60 rounded-2xl p-5 sm:p-6 border border-coral-light/40"
              action="mailto:vjankunwar22@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-coral-light"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-coral-light"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                    Company / Website
                  </label>
                  <input
                    name="company"
                    className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-coral-light"
                    placeholder="Optional"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-coral-light"
                    placeholder="A short summary, timeline, and goals"
                  />
                </div>
                <button className="btn-primary inline-flex items-center justify-center gap-2 group w-full">
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[11px] text-charcoal/50 text-center">
                  By sending this form, your default email client will open with your message.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Main CTA */}
        <div className="reveal opacity-0 text-center py-12" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6">
            Ready to bring your
            <br />
            <span className="italic text-coral-dark">ideas to life?</span>
          </h2>
          <a
            href="https://wa.me/9818473719"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 group text-base px-8 py-4"
          >
            Contact Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
