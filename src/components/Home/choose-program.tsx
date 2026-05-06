import { Dumbbell, Zap, Activity, Heart, Flame, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Basic Fitness",
    subtitle: "A great starting point for beginners to build a solid foundation.",
    icon: Dumbbell,
  },
  {
    title: "Advanced Muscle Course",
    subtitle: "Take your physique to the next level with advanced hypertrophy.",
    icon: Zap,
  },
  {
    title: "New Gym Training",
    subtitle: "Experience modern training methods and new gym equipment.",
    icon: Activity,
  },
  {
    title: "Yoga Training",
    subtitle: "Improve flexibility, balance, and mental clarity with yoga.",
    icon: Heart,
  },
  {
    title: "Basic Muscle Course",
    subtitle: "Focus on core muscle groups and functional strength.",
    icon: Flame,
  },
  {
    title: "Body Building Course",
    subtitle: "Intense bodybuilding routines to maximize muscle growth.",
    icon: Trophy,
  },
];

export function ChooseProgram() {
  return (
    <section className="py-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">
            Choose <span className="text-orange-500">Program</span>
          </h2>
          <div className="flex justify-center mb-6">
            <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" />
          </div>
          <p className="text-gray-500 dark:text-zinc-400 text-lg">
            Our gym offers a variety of programs tailored to your specific fitness goals. Whether you are a beginner or a seasoned athlete, we have the right program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 items-center sm:items-start group cursor-pointer">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 rounded-2xl group-hover:bg-orange-500 transition-all duration-300 group-hover:-translate-y-1 shadow-sm group-hover:shadow-orange-500/20 group-hover:text-white text-orange-500">
                <program.icon size={44} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col text-center sm:text-left pt-2">
                <h3 className="text-2xl font-black mb-3 text-[#232d39] dark:text-white uppercase tracking-tight">{program.title}</h3>
                <p className="text-gray-500 dark:text-zinc-400 mb-4 leading-relaxed font-medium">{program.subtitle}</p>
                <Link 
                  href="#" 
                  className="text-orange-500 font-black text-sm uppercase tracking-widest hover:text-orange-400 dark:hover:text-orange-400 transition-colors inline-flex items-center"
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
