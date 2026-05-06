import { Button } from "@/components/ui/button";

export function ClassCta() {
  return (
    <section className="relative py-24 bg-orange-500 overflow-hidden" id="class-cta">
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full -ml-24 -mb-24 blur-xl" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              Ready to start your first session?
            </h2>
            <p className="text-white/90 text-xl font-medium">
              Join any class today for free. No commitment required, just show up and sweat!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-zinc-100 font-black h-16 px-12 text-xl rounded-xl uppercase tracking-tighter shadow-xl">
              Book Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-bold h-16 px-10 text-lg rounded-xl">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
