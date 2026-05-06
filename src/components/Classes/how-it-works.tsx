const steps = [
  { step: "01", title: "Choose Class", desc: "Select from our wide range of fitness programs that match your goal." },
  { step: "02", title: "Book a Spot", desc: "Quickly book your spot online or through our mobile app to secure your place." },
  { step: "03", title: "Train Hard", desc: "Show up and give it your all with our expert coaches guiding every move." },
  { step: "04", title: "Get Results", desc: "Consistent training leads to incredible transformations. Track your progress." },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#232d39] text-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Getting started with our classes is simple. Follow these four steps to begin your transformation journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-zinc-700 z-0" />
          
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-20 h-20 bg-zinc-800 border-2 border-zinc-700 rounded-full flex items-center justify-center text-2xl font-black text-orange-500 mb-8 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400 group-hover:scale-110">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
