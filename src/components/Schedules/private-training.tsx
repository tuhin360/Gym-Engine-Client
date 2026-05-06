import { Calendar, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrivateTraining() {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden relative" id="private-training">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500 skew-x-12 translate-x-1/2 opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Looking for <span className="text-orange-500">Private Sessions?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              If our group classes don't fit your schedule, we offer customized private training sessions. Work 1-on-1 with our expert coaches at a time that works best for you.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Custom Scheduling</h4>
                  <p className="text-zinc-500 text-sm">Choose any available slot between 5 AM and 11 PM.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">1-on-1 Attention</h4>
                  <p className="text-zinc-500 text-sm">Dedicated focus on your form, nutrition, and goals.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 px-10 text-lg rounded-xl">
              Inquire About Private Training
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-64 md:h-80 bg-zinc-800 rounded-3xl overflow-hidden relative">
              <img src="/assets/training-image-01.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="h-64 md:h-80 bg-zinc-800 rounded-3xl overflow-hidden relative mt-12">
              <img src="/assets/training-image-02.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
