import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative py-32 md:py-48 bg-slate-900 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ backgroundImage: "url('/assets/slide-01.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/40 to-black z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(220,38,38,0.3),_transparent_70%)] z-10" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-20 opacity-80" />

      <div className="container relative z-20 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight mb-6">
          About <span className="text-orange-500">Our Gym</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium">
          More than just a place to workout. We are a dedicated community focused on transformation, strength, and your personal success journey.
        </p>
      </div>
    </section>
  );
}
