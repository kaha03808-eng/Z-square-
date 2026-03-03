import { Box, Layers, Zap } from 'lucide-react';

export default function ArchitecturalHighlights() {
  const highlights = [
    {
      icon: <Box className="w-8 h-8" />,
      title: "Vast Atriums",
      desc: "Naturally lit corridors and grand open spaces for a premium feel."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Level Shopping",
      desc: "Designed for easy navigation across multiple themed floors."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Infrastructure",
      desc: "Equipped with the latest security and energy-efficient systems."
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-navy-deep/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-200 text-sm font-bold tracking-[0.2em] uppercase mb-3">Engineering Marvel</h2>
          <h3 className="text-4xl font-display font-bold text-white">Architectural Highlights</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5" style={{ color: 'oklch(0.72 0.14 75)' }}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-blue-100/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
