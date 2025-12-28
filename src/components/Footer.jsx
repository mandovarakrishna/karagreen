import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-700 p-2 rounded-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-xs text-gray-400">Waste to Energy</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/biomass-pellets" className="hover:text-emerald-400 transition-colors">
                  Biomass Pellets
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-emerald-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/applications" className="hover:text-emerald-400 transition-colors">
                  Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/why-karagreen" className="hover:text-emerald-400 transition-colors">
                  Why Karagreen
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-emerald-400 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/buyers" className="hover:text-emerald-400 transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-emerald-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-emerald-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {companyInfo.name}. Committed to sustainable industrial energy solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;