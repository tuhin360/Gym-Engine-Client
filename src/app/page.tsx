import type { Metadata } from "next";
import { Banner } from "@/components/Home/banner";
import { OurClasses } from "@/components/Home/our-classes";
import { Schedule } from "@/components/Home/schedule";
import { ChooseProgram } from "@/components/Home/choose-program";
import { ExpertTrainers } from "@/components/Home/expert-trainers";
import { Testimonials } from "@/components/Home/testimonials";
import { Cta } from "@/components/Home/cta";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to GYM ENGINE, the most modern gym in Dhaka. Start your fitness journey with us today.",
};


export default function Home() {
  return (
    <>
      <Banner />
      <ChooseProgram />
      <OurClasses />
      <Schedule />
      <ExpertTrainers />
      <Cta />
      <Testimonials />
    </>
  );
}
