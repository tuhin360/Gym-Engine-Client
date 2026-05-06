import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Modern Equipment",
    description: "Train with the latest industry-leading machines and free weights designed for safety and performance.",
  },
  {
    title: "Expert Coaches",
    description: "Our certified trainers provide personalized guidance to ensure you reach your goals faster and safer.",
  },
  {
    title: "24/7 Access",
    description: "Your fitness shouldn't wait. Enjoy round-the-clock access to our facility to fit your busy schedule.",
  },
  {
    title: "Community Spirit",
    description: "Join a supportive network of like-minded individuals who motivate and inspire each other daily.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-zinc-50" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-4">
          Why <span className="text-orange-500">Choose Us?</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          We provide a comprehensive fitness experience that goes beyond just lifting weights. Discover the GYM ENGINE difference.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-zinc-100 flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#232d39] mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
