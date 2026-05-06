import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative py-28 bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/cta-bg.jpg')" }}
      />
      
      {/* Dark Overlay matching the image tint */}
      <div className="absolute inset-0 z-10 bg-[#232d39]/80"></div>
      
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight mb-6">
          Push your <span className="text-orange-500">limits</span>, achieve <span className="text-orange-500">greatness</span>
        </h2>
        
        <p className="text-lg md:text-xl text-zinc-200 max-w-4xl mb-10 leading-relaxed font-medium">
          Stop waiting for the perfect moment and start building the body you deserve. Get access to world-class equipment, elite trainers, and a supportive community that will push you to your absolute best.
        </p>
        
        <Button size="lg" className="bg-[#ed563b] hover:bg-[#d5482e] text-white font-semibold text-sm px-8 h-12 uppercase tracking-wider">
          Become a member
        </Button>
      </div>
    </section>
  );
}
