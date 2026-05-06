import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-24 bg-white" id="our-story">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/training-image-01.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-6">
              Our <span className="text-orange-500">Story</span>
            </h2>
            <div className="mb-6">
              <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2015, GYM ENGINE started with a simple vision: to create a space where everyone, regardless of their fitness level, feels empowered to push their limits and achieve their greatness.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We've grown from a small studio into a premier fitness destination, but our core mission remains the same. We provide the latest equipment, expert coaching, and a supportive atmosphere that inspires transformation.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-orange-500 mb-1">10+</h4>
                <p className="text-sm font-semibold text-[#232d39] uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-orange-500 mb-1">5000+</h4>
                <p className="text-sm font-semibold text-[#232d39] uppercase tracking-wider">Happy Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
