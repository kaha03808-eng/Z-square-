import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-navy-deep font-bold text-xl" style={{ background: 'oklch(0.72 0.14 75)' }}>
                Z
              </div>
              <span className="text-white font-display font-bold text-xl">Z Square Mall</span>
            </div>
            <p className="text-blue-100/50 leading-relaxed">
              Kanpur's premier lifestyle and shopping destination. Spreading joy and luxury since 2010.
            </p>
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-white/5 text-blue-100/60 hover:text-white transition-colors"><Instagram size={20} /></button>
              <button className="p-2 rounded-full bg-white/5 text-blue-100/60 hover:text-white transition-colors"><Facebook size={20} /></button>
              <button className="p-2 rounded-full bg-white/5 text-blue-100/60 hover:text-white transition-colors"><Twitter size={20} /></button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-100/50">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#stores" className="hover:text-white transition-colors">Stores</a></li>
              <li><a href="#dining" className="hover:text-white transition-colors">Dining</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="flex items-start gap-3 text-blue-100/50">
              <MapPin size={20} className="mt-1" style={{ color: 'oklch(0.72 0.14 75)' }} />
              <p>16/113, MG Marg, Civil Lines, Kanpur, UP 208001</p>
            </div>
            <div className="flex items-center gap-3 text-blue-100/50">
              <Phone size={20} style={{ color: 'oklch(0.72 0.14 75)' }} />
              <p>+91 512 235 5500</p>
            </div>
            <div className="flex items-center gap-3 text-blue-100/50">
              <Mail size={20} style={{ color: 'oklch(0.72 0.14 75)' }} />
              <p>info@zsquaremall.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-blue-100/50 mb-4 text-sm">Get updates on latest events and offers.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-gold" style={{ borderColor: 'oklch(0.72 0.14 75 / 0.3)' }} />
              <button className="p-2 rounded-lg" style={{ background: 'oklch(0.72 0.14 75)', color: 'oklch(0.12 0.035 255)' }}>Go</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-blue-100/30 text-sm">
            © {new Date().getFullYear()} Z Square Mall. All rights reserved. Designed for Kanpur.
          </p>
        </div>
      </div>
    </footer>
  );
}
