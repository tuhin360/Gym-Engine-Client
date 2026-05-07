"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Loader2 } from "lucide-react";

import { ScheduleSkeleton } from "@/components/Skeleton/schedule-skeleton";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function FullSchedule() {
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
    <section className="py-24 bg-white" id="full-schedule">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-4">
            Full Weekly <span className="text-orange-500">Timetable</span>
          </h2>
          <div className="flex justify-center mb-6">
            <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" style={{ height: "auto" }} />
          </div>
          <p className="text-gray-500 text-lg">
            Find the perfect session for your level. We offer a variety of times to ensure you can stay consistent with your training goals.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-zinc-100 rounded-2xl md:rounded-full w-fit mx-auto shadow-inner">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-widest transition-all duration-300 uppercase ${
                activeDay === day 
                  ? "bg-orange-500 text-white shadow-lg" 
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        {loading ? (
          <ScheduleSkeleton />
        ) : (
          <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-zinc-200/50">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#232d39] text-white">
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider">Class Name</th>
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider">Time Slot</th>
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider">Trainer</th>
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {scheduleData.map((row, index) => {
                  const time = row.schedules[activeDay];
                  return (
                    <tr key={index} className={`border-b border-gray-50 transition-colors hover:bg-zinc-50/50 ${!time && "opacity-40"}`}>
                      <td className="py-8 px-8">
                        <span className="text-xl font-bold text-[#232d39]">{row.name}</span>
                      </td>
                      <td className="py-8 px-8">
                        <span className={`text-base font-semibold ${time ? "text-orange-500" : "text-gray-300"}`}>
                          {time || "No Class Scheduled"}
                        </span>
                      </td>
                      <td className="py-8 px-8">
                        <span className="text-base font-medium text-gray-500">{row.trainer}</span>
                      </td>
                      <td className="py-8 px-8 text-right">
                        {time ? (
                          <button className="bg-[#232d39] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-orange-500 transition-colors">
                            Book Now
                          </button>
                        ) : (
                          <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">N/A</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
