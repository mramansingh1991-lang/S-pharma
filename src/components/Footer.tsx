import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-gray-500 pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Logo className="w-10 h-10 mr-3" />
              <h2 className="text-xl font-black text-white uppercase tracking-tighter">
                S-<span className="font-light text-primary">Pharma</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm text-xs leading-relaxed">
              Specialists in the design and manufacturing of high-quality clinical diagnostic machinery.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Machinery", "Clients", "Career"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors font-bold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold mb-6 text-white uppercase tracking-widest">Location & Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mt-0.5 mr-4 shrink-0" />
                <p className="text-gray-400 text-xs leading-relaxed">
                  Plot No. 71, IPWT, Vasai Taluka Industrial Estate,<br />
                  Near Waliv Police Chowki, Gauraipada,<br />
                  Vasai (E) Mumbai - 401 208
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-4 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-gray-400 text-xs">
                  <a href="tel:+918378968731" className="hover:text-white transition-colors">+91 8378968731</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-4 shrink-0" />
                <a href="mailto:balram@gmail.com" className="text-gray-400 text-xs hover:text-white transition-colors">
                  balram@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} BALRAM S-PHARMA. / ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
             <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> SYSTEM_ONLINE: HUB_SOUTH_ASIA</span>
             <span>GSTIN: 27ABICS6285R1Z8</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
