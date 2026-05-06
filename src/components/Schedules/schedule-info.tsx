import { Info, Clock, AlertTriangle } from "lucide-react";

export function ScheduleInfo() {
  return (
    <section className="py-24 bg-white" id="schedule-info">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
            <Clock className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-[#232d39] mb-4">Arrive Early</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We recommend arriving at least 10-15 minutes before your class starts to get changed and warmed up.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
            <Info className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-[#232d39] mb-4">Booking Policy</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Class bookings open 48 hours in advance. Please cancel at least 4 hours before if you can't make it.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
            <AlertTriangle className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-[#232d39] mb-4">Health & Safety</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Please inform the instructor of any injuries before the class begins so they can provide modifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
