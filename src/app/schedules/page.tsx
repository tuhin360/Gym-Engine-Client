import { ScheduleHero } from "@/components/Schedules/schedule-hero";
import { FullSchedule } from "@/components/Schedules/full-schedule";
import { PrivateTraining } from "@/components/Schedules/private-training";
import { ScheduleInfo } from "@/components/Schedules/schedule-info";
import { ScheduleCta } from "@/components/Schedules/schedule-cta";

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
