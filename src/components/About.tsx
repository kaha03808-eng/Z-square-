import { Info, MapPin, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Location",
      description: "Situated in the heart of Civil Lines, Kanpur, easily accessible from all parts of the city."
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "World-Class Design",
      description: "Spreading over 5 acres with state-of-the-art architecture and international standards."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      description: "One of Northern India's largest and most recognized premium shopping destinations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1567401285270-f1636565d3e0?auto=format&fit=crop&q=80" 
                alt="Z Square Mall Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div 
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl -z-10 opacity-20"
              style={{ background: 'oklch(0.72 0.14 75)' }}
            />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-200 text-sm font-bold tracking-[0.2em] uppercase mb-3">About Z Square</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Experience the Best of <br />
                <span style={{ color: 'oklch(0.72 0.14 75)' }}>Kanpur's Pride</span>
              </h3>
            </div>

            <p className="text-lg text-blue-100/70 font-body leading-relaxed">
              Z Square Mall is not just a shopping destination; it's a lifestyle experience. Sprawling across an area of 900,000 sq. ft., we house over 150 national and international brands under one roof.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex-shrink-0" style={{ color: 'oklch(0.72 0.14 75)' }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-blue-100/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
