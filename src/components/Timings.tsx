import { Clock } from 'lucide-react';

export default function Timings() {
  const schedule = [
    { day: "Monday - Friday", time: "11:00 AM - 10:00 PM" },
    { day: "Saturday - Sunday", time: "10:30 AM - 11:00 PM" },
    { day: "Food Court", time: "11:00 AM - 11:00 PM" },
    { day: "Cinema (INOX)", time: "Based on show timings" }
  ];

  return (
    <section id="timings" className="py-24 bg-navy-deep/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-4 rounded-2xl bg-white/5 mb-6" style={{ color: 'oklch(0.72 0.14 75)' }}>
          <Clock className="w-8 h-8" />
        </div>
        <h2 className="text-4xl font-display font-bold text-white mb-12">Opening Hours</h2>
        
        <div className="grid gap-4">
          {schedule.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-blue-100 font-medium text-lg">{item.day}</span>
              <span className="font-bold" style={{ color: 'oklch(0.72 0.14 75)' }}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
