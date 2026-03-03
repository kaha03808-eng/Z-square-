import { Car, Wifi, Landmark, ShieldCheck } from 'lucide-react';

export default function VisitorServices() {
  const services = [
    { icon: <Car />, title: "Ample Parking", desc: "Space for over 3000 vehicles with valet service." },
    { icon: <Wifi />, title: "Free WiFi", desc: "High-speed internet access throughout the mall." },
    { icon: <Landmark />, title: "ATMs & Banking", desc: "Multiple bank counters and ATM machines." },
    { icon: <ShieldCheck />, title: "24/7 Security", desc: "Advanced surveillance and safety personnel." }
  ];

  return (
    <section className="py-20 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5">
              <div className="mb-4 p-3 rounded-full bg-white/5" style={{ color: 'oklch(0.72 0.14 75)' }}>
                {service.icon}
              </div>
              <h4 className="text-white font-bold mb-2">{service.title}</h4>
              <p className="text-sm text-blue-100/50">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
