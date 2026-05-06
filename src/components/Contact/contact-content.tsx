import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactContent() {
  return (
    <section className="py-24 bg-white" id="contact-content">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-3/5 bg-zinc-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-zinc-100">
            <h2 className="text-3xl font-extrabold text-[#232d39] uppercase tracking-tight mb-8">
              Send Us a <span className="text-orange-500">Message</span>
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#232d39] uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full h-14 px-6 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#232d39] uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full h-14 px-6 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#232d39] uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  placeholder="Membership Inquiry" 
                  className="w-full h-14 px-6 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#232d39] uppercase tracking-wider">Your Message</label>
                <textarea 
                  placeholder="How can we help you?" 
                  rows={6}
                  className="w-full p-6 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>
              <Button className="w-full md:w-auto h-16 px-12 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20">
                Send Message Now
              </Button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-[#232d39] uppercase tracking-tight mb-8">
              Contact <span className="text-orange-500">Details</span>
            </h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#232d39] mb-1 uppercase tracking-wide">Our Location</h4>
                  <p className="text-gray-500">Shewrapara, Mirpur, Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#232d39] mb-1 uppercase tracking-wide">Phone Number</h4>
                  <p className="text-gray-500">+1 (234) 567-890</p>
                  <p className="text-gray-500">+1 (234) 987-654</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#232d39] mb-1 uppercase tracking-wide">Email Address</h4>
                  <p className="text-gray-500">info@gymengine.com</p>
                  <p className="text-gray-500">support@gymengine.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#232d39] mb-1 uppercase tracking-wide">Working Hours</h4>
                  <p className="text-gray-500">Mon - Fri: 5:00 AM - 11:00 PM</p>
                  <p className="text-gray-500">Sat - Sun: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
