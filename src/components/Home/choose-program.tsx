import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Basic Fitness",
    subtitle: "A great starting point for beginners to build a solid foundation.",
    icon: "/assets/features-first-icon.png",
  },
  {
    title: "Advanced Muscle Course",
    subtitle: "Take your physique to the next level with advanced hypertrophy.",
    icon: "/assets/features-first-icon.png",
  },
  {
    title: "New Gym Training",
    subtitle: "Experience modern training methods and new gym equipment.",
    icon: "/assets/features-first-icon.png",
  },
  {
    title: "Yoga Training",
    subtitle: "Improve flexibility, balance, and mental clarity with yoga.",
    icon: "/assets/features-first-icon.png",
  },
  {
    title: "Basic Muscle Course",
    subtitle: "Focus on core muscle groups and functional strength.",
    icon: "/assets/features-first-icon.png",
  },
  {
    title: "Body Building Course",
    subtitle: "Intense bodybuilding routines to maximize muscle growth.",
    icon: "/assets/features-first-icon.png",
  },
];

export function ChooseProgram() {
  return (
    <section className="py-24 bg-black text-white" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">
            Choose <span className="text-orange-500">Program</span>
          </h2>
          <div className="flex justify-center mb-6">
            <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" />
          </div>
          <p className="text-zinc-400 text-lg">
            Our gym offers a variety of programs tailored to your specific fitness goals. Whether you are a beginner or a seasoned athlete, we have the right program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white/5 rounded-full group-hover:bg-orange-500/10 transition-colors duration-300">
                <Image 
                  src={program.icon} 
                  width={48} 
                  height={48} 
                  alt={program.title}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col pt-2">
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">{program.subtitle}</p>
                <Link 
                  href="#" 
                  className="text-orange-500 font-semibold text-sm uppercase tracking-wider hover:text-orange-400 transition-colors inline-flex items-center"
                >
                  Discover More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
