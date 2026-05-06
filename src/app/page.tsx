import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 overflow-hidden mt-[-80px] pt-[80px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/assets/gym-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 uppercase drop-shadow-lg">
          Unleash Your <span className="text-orange-500">Potential</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-10 drop-shadow-md font-medium">
          Join GYM ENGINE today and transform your body, mind, and soul. We offer the best equipment, expert trainers, and a community that pushes you to be your best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 h-14 w-full sm:w-auto shadow-lg shadow-orange-500/30">
            Start Your Journey
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white/80 bg-transparent hover:bg-white hover:text-black text-white font-semibold text-lg px-8 h-14 w-full sm:w-auto backdrop-blur-sm transition-all duration-300">
            View Classes
          </Button>
        </div>
      </div>
    </div>
  );
}
