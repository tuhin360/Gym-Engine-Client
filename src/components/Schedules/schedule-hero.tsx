import Image from "next/image";

export function ScheduleHero() {
  return (
    <section className="relative py-32 md:py-48 bg-slate-900 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ backgroundImage: "url('/assets/cta-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#232d39] z-10" />
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight mb-6">
          Training <span className="text-orange-500">Schedules</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium">
          Plan your week for success. Explore our full range of morning, afternoon, and evening sessions designed to fit your busy life.
        </p>
      </div>
    </section>
  );
}
