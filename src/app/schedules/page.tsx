import type { Metadata } from "next";
import { ScheduleHero } from "@/components/Schedules/schedule-hero";
import { FullSchedule } from "@/components/Schedules/full-schedule";
import { PrivateTraining } from "@/components/Schedules/private-training";
import { ScheduleInfo } from "@/components/Schedules/schedule-info";
import { ScheduleCta } from "@/components/Schedules/schedule-cta";

export const metadata: Metadata = {
  title: "Class Schedules",
  description: "Check out our weekly training timetable and book your favorite fitness sessions.",
};

export default function SchedulesPage() {
  return (
    <>
      <ScheduleHero />
      <FullSchedule />
      <PrivateTraining />
      <ScheduleInfo />
      <ScheduleCta />
    </>
  );
}
