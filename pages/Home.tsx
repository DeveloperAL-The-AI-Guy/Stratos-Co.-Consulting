import React from 'react';
import { ArrowRight, BarChart3, Users, Globe2, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-neutral-50 pt-16 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-900 leading-tight mb-8">
              Clarity in a <br/>
              <span className="text-primary-900">complex world.</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-2xl">
              We partner with forward-thinking leaders to solve their most critical business challenges and capture their greatest opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button to="/services" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-neutral-200 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="group p-6 border border-transparent hover:border-neutral-100 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-primary-50 text-primary-900 flex items-center justify-center mb-6">
                <BarChart3 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">Data-Driven Strategy</h3>
              <p className="text-neutral-600 leading-relaxed">
                We move beyond intuition. Our recommendations are grounded in rigorous analysis and market intelligence.
              </p>
            </div>
            <div className="group p-6 border border-transparent hover:border-neutral-100 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-primary-50 text-primary-900 flex items-center justify-center mb-6">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">Human-Centric Change</h3>
              <p className="text-neutral-600 leading-relaxed">
                Strategies only work if people adopt them. We integrate organizational psychology into every plan.
              </p>
            </div>
            <div className="group p-6 border border-transparent hover:border-neutral-100 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="w-12 h-12 bg-primary-50 text-primary-900 flex items-center justify-center mb-6">
                <Globe2 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-4">Global Perspective</h3>
              <p className="text-neutral-600 leading-relaxed">
                In an interconnected economy, we bring world-class insights tailored to your specific market context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Split */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl text-neutral-900 mb-6">Built for high-stakes decisions.</h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Whether you are navigating a merger, entering a new market, or reimagining your digital infrastructure, our team provides the blueprint for execution.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Corporate Strategy & Planning',
                  'Operational Efficiency Audit',
                  'Digital Ecosystem Architecture',
                  'Executive Leadership Coaching'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-700">
                    <ChevronRight size={18} className="text-primary-900 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button to="/services" variant="secondary">View All Services</Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-neutral-200 overflow-hidden relative shadow-xl">
                 <img src="https://picsum.photos/800/600" alt="Consulting meeting" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-lg max-w-xs hidden md:block border border-neutral-100">
                <p className="font-serif text-2xl text-primary-900 mb-2">94%</p>
                <p className="text-sm text-neutral-600">Client retention rate over the last 5 years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl mb-12 opacity-90">Trusted by industry leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale">
            {/* Logos would go here, simulated with text for now */}
            <div className="flex items-center justify-center h-12 border border-white/30 font-bold tracking-widest text-xl">APEX</div>
            <div className="flex items-center justify-center h-12 border border-white/30 font-bold tracking-widest text-xl">NOVA</div>
            <div className="flex items-center justify-center h-12 border border-white/30 font-bold tracking-widest text-xl">VENTUS</div>
            <div className="flex items-center justify-center h-12 border border-white/30 font-bold tracking-widest text-xl">STRATA</div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-neutral-900 mb-6">Ready to elevate your trajectory?</h2>
          <p className="text-xl text-neutral-600 mb-10">
            Let's discuss how we can help your organization reach its full potential.
          </p>
          <Button to="/contact">Start the Conversation</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;