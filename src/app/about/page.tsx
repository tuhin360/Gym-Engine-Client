import { AboutHero } from "@/components/About/about-hero";
import { OurStory } from "@/components/About/our-story";
import { WhyChooseUs } from "@/components/About/why-choose-us";
import { OurFacility } from "@/components/About/our-facility";
import { OurValues } from "@/components/About/our-values";

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
