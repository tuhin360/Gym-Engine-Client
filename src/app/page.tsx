import { Banner } from "@/components/Home/banner";
import { OurClasses } from "@/components/Home/our-classes";
import { Schedule } from "@/components/Home/schedule";
import { ChooseProgram } from "@/components/Home/choose-program";
import { ExpertTrainers } from "@/components/Home/expert-trainers";
import { Testimonials } from "@/components/Home/testimonials";
import { Cta } from "@/components/Home/cta";


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
