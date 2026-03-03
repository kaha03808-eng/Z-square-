import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const stats = [
    { label: 'Total Area', value: '5 Acres' },
    { label: 'Built-up Space', value: '9,00,000 sq ft' },
    { label: 'Premium Brands', value: '150+' },
    { label: 'Parking Spots', value: '2,500' }
  ];

  return (
    <div className="min-h-screen bg-[#050b18] text-white font-sans overflow-x-hidden selection:bg-[#d4af37]/30">
      {/* Header - Luxury Look */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-[#050b18]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="bg-[#d4af37] text-[#050b18] w-10 h-10 flex items-center justify-center font-black text-xl rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]">Z²</div>
          <div>
            <h1 className="text-[#d4af37] font-serif font-bold text-xl leading-none uppercase tracking-tighter">Z Square Mall</h1>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">Kanpur</p>
          </div>
        </div>
        <div className="text-[#d4af37] font-bold tracking-widest border border-[#d4af37]/30 px-4 py-2 rounded-lg text-xs">MENU</div>
      </header>

      {/* Hero Section */}
      <main className="relative pt-44 pb-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-[#d4af37]/20 mb-10">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37]">Kanpur's Most Iconic Landmark</span>
          </div>

          <h2 className="text-7xl md:text-[9rem] font-serif font-black mb-8 tracking-tighter leading-[0.8]">
            Z <span className="text-[#d4af37] italic">Square</span> <br/> Mall
          </h2>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-medium opacity-80">
            Kanpur's Premier Shopping & Entertainment Destination. <br/> 
            Where luxury meets your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-40">
            <button className="w-full sm:w-auto bg-[#d4af37] text-[#050b18] px-14 py-5 rounded-full font-bold text-xl shadow-lg shadow-[#d4af37]/20">
              Explore Mall
            </button>
            <button className="w-full sm:w-auto border-2 border-[#d4af37]/40 text-[#d4af37] px-14 py-5 rounded-full font-bold text-xl">
              Get Directions
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + (i * 0.1) }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-[#d4af37]/60 transition-all">
              <div className="text-[#d4af37] text-4xl font-serif font-bold mb-3">{s.value}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-[0.3em] font-black">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

