import React from 'react';
import { Menu, MapPin, Navigation } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050b18] text-white font-sans selection:bg-gold/30">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-[#050b18]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="bg-[#d4af37] text-[#050b18] w-10 h-10 flex items-center justify-center font-black text-xl rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Z²
          </div>
          <div>
            <h1 className="text-[#d4af37] font-serif font-bold text-xl leading-none uppercase tracking-tighter">Z Square Mall</h1>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">Kanpur</p>
          </div>
        </div>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <Menu className="w-8 h-8 text-[#d4af37]" />
        </button>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center relative overflow-hidden">
        {/* Glow effect in background */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#d4af37]/10 blur-[120px] rounded-full -z-10" />
        
        <h2 className="text-7xl md:text-8xl font-serif font-black mb-6 tracking-tighter leading-[0.9]">
          Z <span className="text-[#d4af37]">Square</span> <br/> Mall
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Kanpur's Premier Shopping & Entertainment Destination. Experience the pinnacle of luxury.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
          <button className="w-full sm:w-auto bg-[#d4af37] text-[#050b18] px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-[#d4af37]/20">
            Explore Mall
          </button>
          <button className="w-full sm:w-auto border-2 border-[#d4af37] text-[#d4af37] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#d4af37]/5 transition-colors">
            Get Directions
          </button>
        </div>

        {/* Stats Grid - Exactly like your draft */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Area', value: '5 Acres' },
            { label: 'Built-up Space', value: '9,00,000 sq ft' },
            { label: 'Premium Brands', value: '150+' },
            { label: 'Parking Spots', value: '2,500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:border-[#d4af37]/50 transition-all">
              <div className="text-[#d4af37] text-2xl font-serif font-bold mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </div>
    </div>
  );
}

export default App;
