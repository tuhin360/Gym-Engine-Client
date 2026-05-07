"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Dumbbell, 
  Settings, 
  User, 
  CreditCard, 
  BarChart, 
  Clock,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  role: 'admin' | 'trainer' | 'member' | 'non-member';
}

const roleLinks = {
  admin: [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Manage Users", href: "/dashboard/users", icon: Users },
    { name: "Manage Classes", href: "/dashboard/classes", icon: Dumbbell },
    { name: "Schedules", href: "/dashboard/schedules", icon: Calendar },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
  ],
  trainer: [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Classes", href: "/dashboard/my-classes", icon: Dumbbell },
    { name: "Student List", href: "/dashboard/students", icon: Users },
    { name: "My Schedule", href: "/dashboard/my-schedule", icon: Clock },
  ],
  member: [
    { name: "My Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Progress Tracker", href: "/dashboard/progress", icon: BarChart },
    { name: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  ],
  "non-member": [
    { name: "Profile", href: "/dashboard", icon: User },
    { name: "Membership Plans", href: "/dashboard/plans", icon: CreditCard },
    { name: "Trial Sessions", href: "/dashboard/trials", icon: Clock },
  ],
};

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const links = roleLinks[role] || roleLinks["non-member"];

  return (
    <aside className="w-72 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 min-h-[calc(100vh-80px)] hidden lg:flex flex-col p-6 sticky top-20">
      <div className="space-y-2 flex-1">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 mb-4">
          {role} Menu
        </p>
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 group ${
                isActive 
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                  : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-orange-500"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className={isActive ? "text-white" : "group-hover:text-orange-500"} />
                {link.name}
              </div>
              <ChevronRight size={16} className={`opacity-0 -translate-x-2 transition-all ${isActive ? "opacity-100 translate-x-0" : ""}`} />
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-orange-500 transition-all"
        >
          <Settings size={20} />
          Settings
        </Link>
      </div>
    </aside>
  );
}
