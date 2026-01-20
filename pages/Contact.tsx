import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. In a real deployment, this would connect to a form handler.");
  };

  return (
    <div className="animate-fade-in bg-white">
      <section className="bg-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Let's start the conversation.</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Ready to tackle your most pressing challenges? Reach out to schedule a preliminary consultation with our leadership team.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl text-neutral-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center text-primary-900 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-neutral-900">Email</h3>
                  <p className="text-neutral-600 mt-1">General Inquiries: hello@stratos.co</p>
                  <p className="text-neutral-600">Careers: careers@stratos.co</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center text-primary-900 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-neutral-900">Phone</h3>
                  <p className="text-neutral-600 mt-1">+1 (212) 555-0198</p>
                  <p className="text-neutral-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center text-primary-900 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-neutral-900">Office</h3>
                  <p className="text-neutral-600 mt-1 leading-relaxed">
                    1200 Financial District Blvd<br/>
                    Suite 400<br/>
                    New York, NY 10005
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3 px-4 bg-white"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Work Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3 px-4 bg-white"
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3 px-4 bg-white"
                  placeholder="Acme Inc."
                  value={formState.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">How can we help?</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3 px-4 bg-white"
                  placeholder="Tell us about your project or challenge..."
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full">
                  SendMessage
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;