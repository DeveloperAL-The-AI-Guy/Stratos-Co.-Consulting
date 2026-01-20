import React from 'react';
import Button from '../components/Button';
import { Layers, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layers size={32} />,
      title: "Strategic Planning",
      description: "We help you define your vision and chart the path to get there. From market entry to portfolio optimization, we ensure your resources are aligned with your highest-value opportunities.",
      features: ["Market Assessment", "Competitive Analysis", "Scenario Planning", "Growth Strategy"]
    },
    {
      icon: <Zap size={32} />,
      title: "Digital Transformation",
      description: "Technology should enable your strategy, not dictate it. We bridge the gap between legacy systems and modern innovation to unlock speed and agility.",
      features: ["IT Infrastructure Review", "Cloud Migration Strategy", "Digital Product Development", "Process Automation"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Operational Excellence",
      description: "Efficiency is the engine of profitability. We analyze your workflows to identify bottlenecks and implement lean methodologies that scale.",
      features: ["Supply Chain Optimization", "Cost Reduction", "Workflow Analysis", "Performance Metrics"]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Risk & Compliance",
      description: "Navigating regulatory landscapes requires foresight. We build resilient frameworks that protect your reputation while enabling responsible growth.",
      features: ["Regulatory Audits", "Risk Management Frameworks", "Cybersecurity Governance", "Policy Development"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-neutral-50 py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">Our Expertise</h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We deliver tailored solutions that address your specific challenges. No templates, no cookie-cutter advice—just rigorous, actionable strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col h-full p-8 border border-neutral-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="mb-6 text-primary-900 p-4 bg-primary-50 inline-block w-max">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl text-neutral-900 mb-4 group-hover:text-primary-900 transition-colors">{service.title}</h3>
                <p className="text-neutral-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 pt-6 border-t border-neutral-100">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm font-medium text-neutral-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-white mb-8">Unsure where to start?</h2>
          <p className="text-neutral-400 mb-10 text-lg">
            Complex problems often require a multidisciplinary approach. Let's diagnose your needs together.
          </p>
          <Button to="/contact" variant="primary" className="bg-white text-neutral-900 hover:bg-neutral-100 border-white">
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;