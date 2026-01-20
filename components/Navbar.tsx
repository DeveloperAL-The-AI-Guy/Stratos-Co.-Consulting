import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-neutral-200 shadow-sm py-3' : 'bg-white border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary-900 text-white flex items-center justify-center font-serif font-bold text-xl group-hover:bg-primary-800 transition-colors">
              S
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight text-neutral-900">
              Stratos & Co.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-500 hover:text-neutral-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-neutral-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-3 text-base font-medium border-l-2 transition-colors ${
                isActive(link.path)
                  ? 'border-primary-900 text-primary-900 bg-primary-50'
                  : 'border-transparent text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
             <Link
              to="/contact"
              className="flex w-full items-center justify-center px-4 py-3 border border-transparent text-base font-medium text-white bg-primary-900 hover:bg-primary-800 shadow-sm"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;