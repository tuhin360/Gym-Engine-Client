import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TrainerBrief() {
  return (
    <section className="py-24 bg-white" id="trainer-brief">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-zinc-900 rounded-[2rem] p-10 md:p-20 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-orange-500/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -ml-20 -mb-20 group-hover:bg-orange-500/15 transition-all duration-500" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-8 leading-tight">
              Taught by World Class <span className="text-orange-500">Expert Trainers</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
              Our instructors aren't just teachers; they are professionals who are passionate about your success. Get elite-level coaching in every single class.
            </p>
            <Link href="/about#trainers">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-16 px-10 text-lg rounded-full shadow-lg shadow-orange-500/20">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
