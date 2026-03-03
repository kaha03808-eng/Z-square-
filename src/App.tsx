
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight, Star, MousePointer2 } from 'lucide-react';

function App() {
  const stats = [
    { label: 'Total Area', value: '5 Acres' },
    { label: 'Built-up Space', value: '9,00,000 sq ft' },
    { label: 'Premium Brands', value: '150+' },
    { label: 'Parking Spots', value: '2,500' }
  ];

  return (
    <div className="min-h-screen bg-[#050b18] text-white font-sans selection:bg-[#d4af37]/30 overflow-x-hidden">
      {/* Dynamic Background Glows - Same as Video */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full" />
      </div>

      {/* Luxury Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center p-6 bg-[#050b18]/80 backdrop-blur-xl border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="bg-[#d4af37] text-[#050b18] w-10 h-10 flex items-center justify-center font-black text-xl rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.4)]">Z²</div>
          <div>
            <h1 className="text-[#d4af37] font-serif font-bold text-xl leading-none uppercase tracking-tighter">Z Square Mall</h1>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">Kanpur</p>
          </div>
        </motion.div>
        <Menu className="w-8 h-8 text-[#d4af37] cursor-pointer hover:scale-110 transition-transform" />
      </header>

      {/* Main Content */}
      <main className="relative pt-44 pb-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-[#d4af37]/20 mb-10 backdrop-blur-sm">
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300">Kanpur's Most Iconic Landmark</span>
          </div>

          {/* Hero Title - Same Font as Video */}
          <h2 className="text-7xl md:text-[10rem] font-serif font-black mb-8 tracking-tighter leading-[0.8] drop-shadow-2xl">
            Z <span className="text-[#d4af37] italic">Square</span> <br/> Mall
          </h2>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-medium leading-relaxed opacity-80">
            Kanpur's Premier Shopping & Entertainment Destination. <br/> 
            <span className="text-white/60">Where luxury meets your lifestyle.</span>
          </p>

          {/* Buttons - Premium Feel */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-40">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#d4af37] text-[#050b18] px-14 py-5 rounded-full font-bold text-xl transition-all flex items-center justify-center gap-3 group"
            >
              Explore Mall <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212,175,55,0.1)" }}
              className="w-full sm:w-auto border-2 border-[#d4af37]/40 text-[#d4af37] px-14 py-5 rounded-full font-bold text-xl transition-all"
            >
              Get Directions
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid - Pixel Perfect from Video */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.15), duration: 0.6 }}
              className="relative group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-[#d4af37]/60 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[#d4af37] text-4xl font-serif font-bold mb-3 group-hover:translate-y-[-5px] transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-[11px] text-gray-500 uppercase tracking-[0.3em] font-black group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Floating Scroll UI */}
      <footer className="py-16 text-center">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-[10px] tracking-[0.6em] uppercase font-black text-[#d4af37]">Scroll</span>
          <div className="w-px h-24 bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent" />
        </motion.div>
      </footer>
    </div>
  );
}

export default App; 
