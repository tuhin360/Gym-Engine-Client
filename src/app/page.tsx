import { Banner } from "@/components/Home/banner";
import { OurClasses } from "@/components/Home/our-classes";
import { ChooseProgram } from "@/components/Home/choose-program";
import { Cta } from "@/components/Home/cta";


export default function Home() {
  return (
    <>
      <Banner />
      <ChooseProgram />
      <Cta />
      <OurClasses />

    </>
  );
}
