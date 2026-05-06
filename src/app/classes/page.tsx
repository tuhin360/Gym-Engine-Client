import type { Metadata } from "next";
import { ClassesHero } from "@/components/Classes/classes-hero";
import { FeaturedClasses } from "@/components/Classes/featured-classes";
import { ClassGrid } from "@/components/Classes/class-grid";
import { HowItWorks } from "@/components/Classes/how-it-works";
import { TrainerBrief } from "@/components/Classes/trainer-brief";
import { ClassCta } from "@/components/Classes/class-cta";

export const metadata: Metadata = {
  title: "Fitness Classes",
  description: "Explore our wide range of fitness classes including Bodybuilding, Yoga, Crossfit, and more.",
};

export default function ClassesPage() {
  return (
    <>
      <ClassesHero />
      <FeaturedClasses />
      <HowItWorks />
      <ClassGrid />
      <TrainerBrief />
      <ClassCta />
    </>
  );
}
