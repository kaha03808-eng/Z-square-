import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

const brands = [
  { name: "Lifestyle", category: "Department Store" },
  { name: "H&M", category: "Fashion" },
  { name: "Pantaloons", category: "Fashion" },
  { name: "Max", category: "Value Fashion" },
  { name: "Adidas", category: "Sports" },
  { name: "Samsung", category: "Electronics" }
];

export default function StoresAndBrands() {
  return (
    <section id="stores" className="py-24 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-200 text-sm font-bold tracking-[0.2em] uppercase mb-3">Shop Your Favorites</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">World-Class Brands</h3>
            <p className="text-blue-100/60 text-lg">From luxury fashion to daily essentials, discover over 150 premium brands all under one roof.</p>
          </div>
          <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all" style={{ color: 'oklch(0.72 0.14 75)' }}>
            View All Stores <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6" style={{ color: 'oklch(0.72 0.14 75)' }} />
              </div>
              <h4 className="text-white font-bold mb-1">{brand.name}</h4>
              <p className="text-xs text-blue-100/40 uppercase tracking-widest">{brand.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
