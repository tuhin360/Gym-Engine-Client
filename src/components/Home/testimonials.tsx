import Image from "next/image";

const testimonials = [
  {
    name: "Emily Rodriguez",
    role: "Member since 2023",
    content: "Joined GYM ENGINE 6 months ago and it's been a life-changer. The trainers are incredibly supportive and the community vibe keeps me coming back every single day. I've never felt stronger!",
    avatar: "https://i.pravatar.cc/150?u=emily",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Member since 2022",
    content: "The equipment here is top-notch and the 'Classes Schedule' makes it so easy to plan my workouts. I've lost 15kg and gained so much confidence. Best gym in the city, hands down.",
    avatar: "https://i.pravatar.cc/150?u=james",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "Member since 2024",
    content: "I love the Yoga and Pilates classes! The environment is so welcoming for beginners but also challenging enough for advanced members. It's my daily escape from a stressful work life.",
    avatar: "https://i.pravatar.cc/150?u=sophia",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 text-[#232d39]">
            Member <span className="text-[#ed563b]">Success Stories</span>
          </h2>
          <div className="flex justify-center mb-6">
            <Image src="/assets/line-dec.png" width={45} height={10} alt="Line decoration" />
          </div>
          <p className="text-gray-500 text-lg">
            Don't just take our word for it. Hear from our members who have transformed their lives and reached their fitness goals at GYM ENGINE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col relative transition-all duration-300 hover:shadow-md"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-orange-500 fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#232d39]">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 font-medium">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Quote Icon Overlay */}
              <div className="absolute top-6 right-8 opacity-5">
                <svg className="w-12 h-12 text-[#232d39]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21V10H21.017V21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C9.12154 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12154 23 8.01697 23H5.01697C3.9124 23 3.01697 22.1046 3.01697 21ZM3.01697 21V10H10.017V21H3.01697ZM14.017 7V3H21.017V7H14.017ZM3.01697 7V3H10.017V7H3.01697Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
