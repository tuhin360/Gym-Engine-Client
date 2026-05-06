import Image from "next/image";

const images = [
  "/assets/training-image-01.jpg",
  "/assets/training-image-02.jpg",
  "/assets/training-image-03.jpg",
  "/assets/training-image-04.jpg",
];

export function OurFacility() {
  return (
    <section className="py-24 bg-white" id="facility">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-4">
            Our <span className="text-orange-500">Facility</span>
          </h2>
          <div className="flex justify-center mb-6">
            <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" />
          </div>
          <p className="text-gray-500 text-lg">
            A state-of-the-art environment designed for focus, energy, and results. Explore the spaces where your transformation happens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "lg:col-span-2 lg:row-span-2 h-[300px] lg:h-[616px]" : "h-[300px]"
              }`}
            >
              <Image
                src={img}
                alt={`Facility ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest border-b-2 border-orange-500 pb-1">
                  View Detail
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
