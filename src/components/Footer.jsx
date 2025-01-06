import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-25" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-25" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                CV. Suralaya Teknik
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Leading MEP solutions provider with a commitment to excellence and innovation.
              </p>
            </div>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                'Mechanical Systems',
                'Electrical Systems',
                'Plumbing Systems',
                'Building Automation',
                'Energy Management'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { Icon: MapPin, text: 'Padang, Indonesia' },
                { Icon: Phone, text: '+62 21 1234 5678' },
                { Icon: Mail, text: 'info@suralayateknik.com' }
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 rounded-full bg-gray-50">
                    <item.Icon size={18} className="text-primary" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 CV Suralaya Teknik. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;