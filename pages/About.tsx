import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8 leading-tight">
                We believe that clarity is the ultimate competitive advantage.
              </h1>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Stratos & Co. was founded on a simple premise: complexity paralyzes, but clarity empowers. In an age of data overload and rapid disruption, leaders don't need more information—they need better perspective.
                </p>
                <p>
                  Our team is composed of former C-suite executives, data scientists, and industry veterans who share a passion for problem-solving. We don't just deliver slide decks; we work shoulder-to-shoulder with your team to drive tangible results.
                </p>
                <p>
                  We value integrity above all. If we don't believe we can add significant value to your organization, we will tell you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/600/800" alt="Office architecture" className="w-full h-80 object-cover grayscale" />
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/600/600" alt="Team meeting" className="w-full h-64 object-cover grayscale" />
                <div className="bg-neutral-100 p-6 h-full flex items-center justify-center text-center">
                  <div>
                    <span className="block text-4xl font-serif text-primary-900 font-bold mb-2">15+</span>
                    <span className="text-sm text-neutral-600 uppercase tracking-widest">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl text-neutral-900 mb-4">Our Core Values</h2>
            <p className="text-neutral-600">The principles that guide every engagement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Intellectual Honesty', desc: 'We tell you the truth, even when it is uncomfortable. Real progress requires facing reality.' },
              { title: 'Rigorous Analysis', desc: 'Opinions are interesting; data is persuasive. We dig deep to validate every hypothesis.' },
              { title: 'Long-term Impact', desc: 'We prioritize sustainable growth over quick fixes. We build for the next decade, not just the next quarter.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 border-t-4 border-primary-900 shadow-sm">
                <h3 className="font-serif text-xl text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;