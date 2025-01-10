import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Building2, Wind, Wrench } from 'lucide-react';

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
                Mitra terpercaya dalam solusi teknik mekanikal, elektrikal, dan plumbing sejak 2012.
              </p>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Menu Utama</h4>
            <ul className="space-y-4">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Tentang Kami', path: '/about' },
                { name: 'Layanan', path: '/services' },
                { name: 'Proyek', path: '/projects' },
                { name: 'Kontak', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Layanan Kami</h4>
            <ul className="space-y-4">
              {[
                'Supply HVAC',
                'AC Komersial',
                'AC Domestik',
                'Instalasi & Perbaikan',
                'Pemeliharaan Berkala'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
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
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              {[
                { 
                  Icon: MapPin, 
                  text: 'Jl. By Pass Ketaping No. 16B, RT. 05/RW. 06, Kelurahan Pasar Ambacang Kecamatan Kuranji, Kota Padang' 
                },
                { 
                  Icon: Phone, 
                  text: '(0751) 463793' 
                },
                { 
                  Icon: Mail, 
                  text: 'cv.suralayateknik@yahoo.co.id' 
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-600">
                  <div className="p-2 rounded-full bg-gray-50 flex-shrink-0">
                    <item.Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} CV Suralaya Teknik. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;