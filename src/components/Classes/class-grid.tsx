import Image from "next/image";
import { Clock, User } from "lucide-react";

const allIconClasses = [
  { title: "Yoga Flow", trainer: "Sarah Jenkins", time: "Mon, Wed", image: "/assets/training-image-03.jpg" },
  { title: "Crossfit", trainer: "Alex Thompson", time: "Tue, Thu", image: "/assets/training-image-04.jpg" },
  { title: "Powerlifting", trainer: "Marcus Chen", time: "Sat, Sun", image: "/assets/training-image-01.jpg" },
  { title: "Boxing", trainer: "Alex Thompson", time: "Mon, Fri", image: "/assets/training-image-02.jpg" },
  { title: "Pilates", trainer: "Sarah Jenkins", time: "Wed, Fri", image: "/assets/training-image-03.jpg" },
  { title: "Zumba", trainer: "Marcus Chen", time: "Tue, Sat", image: "/assets/training-image-04.jpg" },
];

export function ClassGrid() {
  return (
    <section className="py-24 bg-zinc-50" id="class-grid">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-4">
            Discover <span className="text-orange-500">More Classes</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Explore our diverse range of fitness programs tailored for every goal, from strength and power to flexibility and endurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allIconClasses.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#232d39] mb-6 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-gray-500 font-medium">
                    <User className="w-5 h-5 text-orange-500" />
                    <span>{item.trainer}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 font-medium">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
