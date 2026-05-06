import { Button } from "@/components/ui/button";

export function ScheduleCta() {
  return (
    <section className="py-24 bg-orange-500" id="schedule-cta">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
          Don't Miss Your Next Session
        </h2>
        <p className="text-white/90 text-xl font-medium mb-10 max-w-2xl mx-auto">
          Download our mobile app to sync the schedule with your calendar and receive class reminders.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-black text-white hover:bg-zinc-800 font-bold h-16 px-10 text-lg rounded-xl">
            App Store
          </Button>
          <Button size="lg" className="bg-white text-black hover:bg-zinc-100 font-bold h-16 px-10 text-lg rounded-xl">
            Google Play
          </Button>
        </div>
      </div>
    </section>
  );
}
