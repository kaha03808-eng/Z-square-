import { Utensils, Tv, Coffee } from 'lucide-react';

export default function DiningAndEntertainment() {
  const offerings = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Fine Dining & Food Court",
      desc: "From gourmet restaurants to quick bites, satisfy every craving."
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "INOX Multiplex",
      desc: "Experience the latest blockbusters with state-of-the-art projection."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Fun Zones",
      desc: "Gaming areas and entertainment for kids and families alike."
    }
  ];

  return (
    <section id="dining" className="py-24 bg-navy-deep/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-200 text-sm font-bold tracking-[0.2em] uppercase mb-3">Flavor & Fun</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Dining & Entertainment</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <div key={idx} className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="mb-8 inline-block p-5 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500" style={{ color: 'oklch(0.72 0.14 75)' }}>
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-blue-100/60 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
