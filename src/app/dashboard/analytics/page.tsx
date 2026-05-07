"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Dumbbell, 
  Loader2, 
  ArrowUpRight, 
  ArrowDownRight,
  PieChart as PieIcon,
  RefreshCcw,
  Calendar
} from "lucide-react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

interface AnalyticsData {
  totalUsers: number;
  totalClasses: number;
  membershipData: {
    admin: number;
    trainer: number;
    member: number;
    nonMember: number;
  };
  classData: {
    beginner: number;
    intermediate: number;
    advanced: number;
    all: number;
  };
  trends: {
    month: string;
    users: number;
  }[];
}

export default function AnalyticsPage() {
  const { data: session } = useSession();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/analytics`, {
        headers: {
          Authorization: `Bearer ${(session?.user as any)?.accessToken}`
        }
      });
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error: any) {
      toast.error("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session) fetchAnalytics();
  }, [session]);

  if (loading && !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin mb-4" />
        <p className="text-gray-500 font-bold">Aggregating gym data...</p>
      </div>
    );
  }

  if (!data) return null;

  const maxTrendValue = Math.max(...data.trends.map(t => t.users), 1);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight mb-2">
            Data <span className="text-orange-500">Analytics</span>
          </h1>
          <p className="text-gray-500 font-medium">Real-time performance metrics and user insights.</p>
        </div>
        <button 
          onClick={fetchAnalytics}
          className="flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-2xl font-bold hover:text-orange-500 transition-all shadow-sm"
        >
          <RefreshCcw size={18} className={loading ? "animate-spin" : ""} />
          Refresh Stats
        </button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Users", value: data.totalUsers, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", trend: "+12%" },
          { label: "Active Members", value: data.membershipData.member, icon: Calendar, color: "text-green-500", bg: "bg-green-500/10", trend: "+5%" },
          { label: "Expert Trainers", value: data.membershipData.trainer, icon: StarIcon, color: "text-purple-500", bg: "bg-purple-500/10", trend: "Stable" },
          { label: "Total Classes", value: data.totalClasses, icon: Dumbbell, color: "text-orange-500", bg: "bg-orange-500/10", trend: "+2" },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-black text-green-500 bg-green-500/10 px-3 py-1 rounded-full">{stat.trend}</span>
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-[#232d39] dark:text-white">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#232d39] dark:text-white">Signup Trends</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">New registrations</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 text-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
          </div>
          
          <div className="h-48 sm:h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 sm:px-4">
            {data.trends.map((t, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 sm:gap-4">
                <div className="w-full relative group">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(t.users / maxTrendValue) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-full bg-orange-500 rounded-t-lg sm:rounded-t-xl shadow-lg shadow-orange-500/20 group-hover:bg-orange-600 transition-colors relative"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                      {t.users} Users
                    </div>
                  </motion.div>
                </div>
                <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-tighter">{t.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Distribution */}
        <div className="bg-[#232d39] text-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
             <h3 className="text-xl font-bold mb-8">User Roles</h3>
             <div className="space-y-8">
               {[
                 { label: "Members", value: data.membershipData.member, color: "bg-orange-500" },
                 { label: "Trainers", value: data.membershipData.trainer, color: "bg-blue-500" },
                 { label: "Admins", value: data.membershipData.admin, color: "bg-purple-500" },
                 { label: "Guests", value: data.membershipData.nonMember, color: "bg-zinc-500" },
               ].map((role, i) => (
                 <div key={i} className="space-y-2">
                   <div className="flex justify-between text-sm font-bold">
                     <span className="text-zinc-400">{role.label}</span>
                     <span>{Math.round((role.value / data.totalUsers) * 100)}%</span>
                   </div>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${(role.value / data.totalUsers) * 100}%` }}
                       transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                       className={`h-full ${role.color}`}
                     />
                   </div>
                 </div>
               ))}
             </div>
          </div>
          <PieIcon size={180} className="absolute -right-16 -bottom-16 text-white/5 -rotate-12" />
        </div>
      </div>

      {/* Class Level Breakdown */}
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
        <h3 className="text-xl font-bold text-[#232d39] dark:text-white mb-8">Class Level Distribution</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { label: "Beginner", value: data.classData.beginner, info: "Focus on form" },
             { label: "Intermediate", value: data.classData.intermediate, info: "Building strength" },
             { label: "Advanced", value: data.classData.advanced, info: "Pushing limits" },
             { label: "All Levels", value: data.classData.all, info: "Community sessions" },
           ].map((level, i) => (
             <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
               <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 flex flex-col items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                 <span className="text-2xl font-black text-orange-500">{level.value}</span>
               </div>
               <div>
                 <p className="font-bold text-[#232d39] dark:text-white">{level.label}</p>
                 <p className="text-xs text-gray-500 font-medium">{level.info}</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

function StarIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
