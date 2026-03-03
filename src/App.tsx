import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Navigation, ArrowRight, Star } from 'lucide-react';

function App() {
  const stats = [
    { label: 'Total Area', value: '5 Acres' },
    { label: 'Built-up Space', value: '9,00,000 sq ft' },
    { label: 'Premium Brands', value: '150+' },
    { label: 'Parking Spots', value: '2,500' }
  ];

  return (
    <div className="min-h-screen bg-[#050b18] text-white font-sans selection:bg-[#d4af37]/30 overflow-x-hidden">
      {/* Premium Animated Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d4af37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4af37]/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-[#050b18]/80 backdrop-blur-xl border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="bg-[#d4af37] text-[#050b18] w-10 h-10 flex items-center justify-center font-black text-xl rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]">Z²</div>
          <div>
            <h1 className="text-[#d4af37] font-serif font-bold text-xl leading-none uppercase tracking-tighter">Z Square Mall</h1>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">Kanpur</p>
          </div>
        </motion.div>
        <Menu className="w-8 h-8 text-[#d4af37] cursor-pointer" />
      </header>

      {/* Hero Section */}
      <main className="relative pt-40 pb-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Kanpur's Most Iconic Landmark</span>
          </div>

          <h2 className="text-7xl md:text-9xl font-serif font-black mb-6 tracking-tighter leading-[0.85]">
            Z <span className="text-[#d4af37] italic">Square</span> <br/> Mall
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            Kanpur's Premier Shopping & Entertainment Destination. Where luxury meets your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-32">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#d4af37] text-[#050b18] px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2"
            >
              Explore Mall <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto border-2 border-[#d4af37]/50 text-[#d4af37] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#d4af37]/5"
            >
              Get Directions
            </motion.button>
          </div>
        </motion.div>

        {/* Animated Stats Grid - Your Design Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#d4af37]/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[#d4af37] text-3xl font-serif font-bold mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer Scroll */}
      <footer className="py-10 text-center opacity-30">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Scroll to Discover</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-16 bg-gradient-to-b from-[#d4af37] to-transparent" 
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
