import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-deep">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Star className="w-4 h-4 text-gold" style={{ color: 'oklch(0.72 0.14 75)' }} />
          <span className="text-blue-100 text-sm font-medium tracking-wide">Kanpur's Most Iconic Landmark</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Where Luxury <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, oklch(0.72 0.14 75), oklch(0.82 0.12 80))' }}>
            Meets Lifestyle
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/70 mb-10 font-body leading-relaxed">
          Experience the ultimate shopping, dining, and entertainment destination in the heart of Kanpur.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className="group px-8 py-4 rounded-full font-body font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{ 
              background: 'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))',
              color: 'oklch(0.12 0.035 255)' 
            }}
          >
            Explore Stores
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full font-body font-semibold text-lg text-white border border-white/20 hover:bg-white/5 transition-all">
            View Map
          </button>
        </div>
      </div>
    </section>
  );
}
