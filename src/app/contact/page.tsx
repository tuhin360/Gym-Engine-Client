import type { Metadata } from "next";
import { ContactHero } from "@/components/Contact/contact-hero";
import { ContactContent } from "@/components/Contact/contact-content";
import { ContactMap } from "@/components/Contact/contact-map";
import { Cta } from "@/components/Home/cta";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GYM ENGINE in Shewrapara, Mirpur. We're here to help you start your fitness journey.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
      <ContactMap />
      <div className="bg-white py-12">
        {/* Simple spacer to transition from map to CTA */}
      </div>
      <Cta />
    </>
  );
}
