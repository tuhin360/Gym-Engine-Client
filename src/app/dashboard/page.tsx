"use client";

import { useSession } from "next-auth/react";
import { 
  Users, 
  Dumbbell, 
  Calendar, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const role = (session?.user as any)?.role || 'non-member';

  const renderAdminView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight mb-2">
          Admin <span className="text-orange-500">Dashboard</span>
        </h1>
        <p className="text-gray-500">Welcome back! Here's what's happening in your gym today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Members", value: "1,284", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Active Classes", value: "24", icon: Dumbbell, color: "text-orange-500", bg: "bg-orange-500/10" },
          { label: "Bookings Today", value: "156", icon: Calendar, color: "text-green-500", bg: "bg-green-500/10" },
          { label: "Monthly Revenue", value: "$42,500", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className={stat.color} size={24} />
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-[#232d39] dark:text-white">{stat.value}</h3>
          </div>
        ))}
      </div>
      
      {/* Recent Activity Placeholder */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 p-8">
        <h3 className="text-xl font-bold mb-6">Recent User Activity</h3>
        <div className="space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between border-b border-zinc-50 dark:border-zinc-800 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800" />
                <div>
                  <p className="font-bold">User {i+1} joined the Gym</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-green-500/10 text-green-500 px-3 py-1 rounded-full uppercase">Success</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTrainerView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight mb-2">
          Trainer <span className="text-orange-500">Zone</span>
        </h1>
        <p className="text-gray-500">You have 4 classes scheduled for today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#232d39] text-white p-8 rounded-3xl col-span-1 md:col-span-2 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Next Session: HIIT</h3>
            <p className="text-zinc-400 mb-6 flex items-center gap-2">
              <Clock size={18} /> 10:00 AM - 11:30 AM
            </p>
            <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-all">
              View Student List
            </button>
          </div>
          <Dumbbell size={120} className="absolute -right-8 -bottom-8 text-white/5 rotate-12" />
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Total Students</p>
            <h3 className="text-4xl font-black text-[#232d39] dark:text-white">124</h3>
          </div>
          <div className="mt-6 flex gap-2">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800" />)}
             </div>
             <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 text-xs font-bold">
               +120
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMemberView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight mb-2">
            My <span className="text-orange-500">Fitness</span>
          </h1>
          <p className="text-gray-500">You're on track! 3 sessions completed this week.</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 px-6 py-3 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <CheckCircle size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase">Status</p>
            <p className="font-bold text-green-500">Active Pro</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 overflow-hidden group">
          <div className="p-8">
             <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
                 <Calendar size={24} />
               </div>
               <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full uppercase">Upcoming</span>
             </div>
             <h3 className="text-xl font-bold mb-2">Yoga Flow</h3>
             <p className="text-gray-500 mb-6">Tomorrow at 9:00 AM</p>
             <button className="w-full py-4 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl font-bold hover:border-orange-500 hover:text-orange-500 transition-all">
               Manage Booking
             </button>
          </div>
        </div>

        <div className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 p-8">
          <h3 className="text-xl font-bold mb-6">Weekly Progress</h3>
          <div className="h-48 flex items-end gap-4">
             {[40, 60, 35, 90, 50, 70, 85].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col items-center gap-2">
                 <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-xl relative overflow-hidden h-40">
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-orange-500 transition-all duration-1000" 
                      style={{ height: `${h}%` }} 
                    />
                 </div>
                 <span className="text-xs font-bold text-gray-400">D{i+1}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNonMemberView = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-orange-500 p-10 rounded-[2.5rem] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h1 className="text-4xl font-black mb-4 uppercase leading-tight">
            Level Up Your <span className="text-zinc-900">Fitness Journey</span>
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Join the community today and get access to all classes, expert trainers, and personalized training plans.
          </p>
          <button className="bg-zinc-900 text-white font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-all">
            View Membership Plans
          </button>
        </div>
        <Dumbbell size={200} className="absolute -right-20 -top-20 text-white/10 -rotate-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex items-start gap-6">
           <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
             <AlertCircle size={28} />
           </div>
           <div>
             <h3 className="text-xl font-bold mb-2 text-[#232d39] dark:text-white">Profile Incomplete</h3>
             <p className="text-gray-500 mb-4">Complete your profile to get personalized class recommendations.</p>
             <button className="text-orange-500 font-bold text-sm uppercase tracking-widest hover:underline">Complete Now →</button>
           </div>
         </div>
         
         <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex items-start gap-6">
           <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
             <Clock size={28} />
           </div>
           <div>
             <h3 className="text-xl font-bold mb-2 text-[#232d39] dark:text-white">Free Trial</h3>
             <p className="text-gray-500 mb-4">You have 1 free trial session available this month.</p>
             <button className="text-orange-500 font-bold text-sm uppercase tracking-widest hover:underline">Book Trial →</button>
           </div>
         </div>
      </div>
    </div>
  );

  return (
    <div>
      {role === 'admin' && renderAdminView()}
      {role === 'trainer' && renderTrainerView()}
      {role === 'member' && renderMemberView()}
      {role === 'non-member' && renderNonMemberView()}
    </div>
  );
}
