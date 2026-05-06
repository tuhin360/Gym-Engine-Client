import { Heart, ShieldCheck, Target, Users } from "lucide-react";

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Focus & Discipline",
    text: "We believe that consistency and focus are the keys to long-term physical and mental health.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Inclusive Community",
    text: "A welcoming environment for all fitness levels, where everyone supports each other's journey.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Integrity & Safety",
    text: "We prioritize your safety with expert guidance and high-quality, well-maintained equipment.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion for Health",
    text: "Everything we do is driven by a deep passion for helping you live a healthier, more vibrant life.",
  },
];

export function OurValues() {
  return (
    <section className="py-24 bg-[#232d39] text-white" id="values">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">
            Core <span className="text-orange-500">Values</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            At GYM ENGINE, we are guided by principles that ensure every member has the best possible experience on their path to wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 mb-6 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:rotate-12">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed italic">
                "{v.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
