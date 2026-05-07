"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { ScheduleDarkSkeleton } from "@/components/Skeleton/schedule-dark-skeleton";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function Schedule() {
  const [activeDay, setActiveDay] = useState("Monday");
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/schedules`);
        if (response.data.success) {
          setScheduleData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <section className="relative py-28 bg-slate-900 overflow-hidden" id="schedule">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/schedule-bg.jpg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-[#232d39]/80"></div>
      
      <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 text-white">
            Classes <span className="text-[#ed563b]">Schedule</span>
          </h2>
          <div className="flex justify-center mb-6">
            <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" style={{ height: "auto" }} />
          </div>
          <p className="text-zinc-300 text-lg">
            Find the perfect time to crush your goals. Our schedule is designed to fit your busy lifestyle with sessions throughout the day.
          </p>
        </div>

        {/* Days Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-white/5 backdrop-blur-sm rounded-3xl md:rounded-full w-fit mx-auto border border-white/10 shadow-lg">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold tracking-wide transition-all duration-300 ${
                activeDay === day 
                  ? "bg-[#ed563b] text-white shadow-lg shadow-[#ed563b]/40 scale-105" 
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="w-full max-w-5xl overflow-x-auto">
          {loading ? (
            <ScheduleDarkSkeleton />
          ) : (
            <table className="w-full text-white border-collapse border border-white/20 text-center min-w-[700px] animate-in fade-in duration-500">
              <tbody>
                {scheduleData.map((row, index) => {
                  const time = row.schedules[activeDay] || "";
                  const isAm = time.includes("AM");
                  const isPm = time.includes("PM");

                  return (
                    <tr key={index} className="border border-white/20">
                      <td className="py-6 px-4 border border-white/20 w-1/4 text-sm md:text-base font-semibold">{row.name}</td>
                      <td className="py-6 px-4 border border-white/20 w-1/4 text-sm md:text-base font-medium">
                        {isAm ? time : ""}
                      </td>
                      <td className="py-6 px-4 border border-white/20 w-1/4 text-sm md:text-base font-medium">
                        {isPm ? time : ""}
                      </td>
                      <td className="py-6 px-4 border border-white/20 w-1/4 text-sm md:text-base font-semibold">{row.trainer}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}
