"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const classesData = [
  {
    title: "First Training Class",
    image: "/assets/training-image-01.jpg",
    description: "Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.",
  },
  {
    title: "Second Training Class",
    image: "/assets/training-image-02.jpg",
    description: "Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, nec rutrum mauris diam eu magna. Quisque in tempor libero. Proin vitae est eget ligula congue condimentum. Suspendisse eu diam sed elit eleifend scelerisque id id nisl.",
  },
  {
    title: "Third Training Class",
    image: "/assets/training-image-03.jpg",
    description: "Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque facilisis eget. Fusce in dolor elementum, tincidunt arcu sit amet, gravida velit. Nulla facilisi. Sed non mi est. In varius diam eu facilisis venenatis.",
  },
  {
    title: "Fourth Training Class",
    image: "/assets/training-image-04.jpg",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum est, nec interdum mauris imperdiet in. Ut fermentum fermentum sem, vel rhoncus magna porta sed.",
  },
];

export function OurClasses() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white" id="our-classes">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 text-[#232d39]">
            Our <span className="text-[#ed563b]">Classes</span>
          </h2>
          <div className="flex justify-center mb-6">
            <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" />
          </div>
          <p className="text-gray-500 text-lg">
            Experience variety in your fitness journey. From high-intensity training to soul-soothing yoga, we offer a wide range of classes to keep you motivated and moving.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Column: Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {classesData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-4 p-6 rounded-md shadow-md transition-all duration-300 text-left bg-white ${activeTab === index
                      ? "text-[#ed563b] shadow-lg"
                      : "text-[#232d39] hover:text-[#ed563b]"
                    }`}
                >
                  <Image
                    src="/assets/tabs-first-icon.png"
                    width={32}
                    height={32}
                    alt="Class Icon"
                    className="object-contain"
                  />
                  <span className="text-xl font-bold tracking-wide">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <Button className="w-full h-16 text-lg font-bold uppercase tracking-wider bg-[#ed563b] hover:bg-[#d5482e] text-white shadow-md rounded-md mt-2">
              View All Schedules
            </Button>
          </div>

          {/* Right Column: Tab Content */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col animate-in fade-in zoom-in-95 duration-300">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-md overflow-hidden mb-8">
                <Image
                  src={classesData[activeTab].image}
                  alt={classesData[activeTab].title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#232d39] mb-4">
                {classesData[activeTab].title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-base md:text-lg">
                {classesData[activeTab].description}
              </p>
              <div>
                <Button className="h-12 px-8 bg-[#ed563b] hover:bg-[#d5482e] text-white uppercase tracking-wider font-semibold text-sm">
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
