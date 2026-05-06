import Image from "next/image";
import { Button } from "@/components/ui/button";

const featured = [
  {
    title: "Elite Bodybuilding",
    time: "60 Mins",
    level: "Advanced",
    image: "/assets/training-image-01.jpg",
    description: "Focus on maximum muscle growth with elite-level hypertrophy techniques and heavy lifting sessions.",
  },
  {
    title: "HIIT Transformation",
    time: "45 Mins",
    level: "Intermediate",
    image: "/assets/training-image-02.jpg",
    description: "High-intensity interval training designed to burn maximum fat and improve your athletic endurance.",
  },
];

export function FeaturedClasses() {
  return (
    <section className="py-24 bg-white" id="featured-classes">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-4">
              Featured <span className="text-orange-500">Classes</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Our most popular sessions designed by experts to give you the most efficient workout experience possible.
            </p>
          </div>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 font-bold px-8">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featured.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="flex gap-4 mb-4">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.level}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.time}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-300 mb-6 max-w-md line-clamp-2">
                  {item.description}
                </p>
                <Button className="w-fit bg-white text-black hover:bg-orange-500 hover:text-white font-bold px-8 h-12 transition-all">
                  Join Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
