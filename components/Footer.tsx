import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white text-neutral-900 flex items-center justify-center font-serif font-bold text-xl">
                S
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight">
                Stratos & Co.
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Empowering organizations to navigate complexity with clarity, strategy, and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Strategic Planning</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Organizational Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Market Analysis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">Get in Touch</h4>
            <div className="space-y-4 text-sm text-neutral-300">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-neutral-500" />
                <span>1200 Financial District Blvd<br />Suite 400<br />New York, NY 10005</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-neutral-500" />
                <a href="mailto:hello@stratos.co" className="hover:text-white transition-colors">hello@stratos.co</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Stratos & Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;