import type { Metadata } from "next";
import { AboutHero } from "@/components/About/about-hero";
import { OurStory } from "@/components/About/our-story";
import { WhyChooseUs } from "@/components/About/why-choose-us";
import { OurFacility } from "@/components/About/our-facility";
import { OurValues } from "@/components/About/our-values";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about GYM ENGINE's story, our values, and our world-class facility in Dhaka.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <OurFacility />
      <OurValues />
    </>
  );
}
