"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { 
  Users, 
  Search, 
  UserPlus, 
  Mail,
  Calendar,
  Loader2,
  RefreshCcw,
  Filter,
  ArrowUpDown,
  XCircle,
  ChevronDown
} from "lucide-react";
import { toast } from "react-hot-toast";

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'trainer' | 'member' | 'non-member';
  createdAt: string;
}

export default function ManageUsersPage() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  
  // Filter & Sort States
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "name_asc" | "name_desc">("newest");
  const [showFilters, setShowFilters] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${(session?.user as any)?.accessToken}`
        }
      });
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session) fetchUsers();
  }, [session]);

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      setUpdatingId(userId);
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/role`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${(session?.user as any)?.accessToken}`
          }
        }
      );

      if (response.data.success) {
        toast.success("Role updated successfully");
        setUsers(users.map(u => u._id === userId ? { ...u, role: newRole as any } : u));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update role");
    } finally {
      setUpdatingId(null);
    }
  };

  // Advanced Filtering & Sorting Logic
  const processedUsers = users
    .filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest": return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "oldest": return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "name_asc": return a.name.localeCompare(b.name);
        case "name_desc": return b.name.localeCompare(a.name);
        default: return 0;
      }
    });

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin': return "bg-red-500/10 text-red-500 border-red-500/20";
      case 'trainer': return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case 'member': return "bg-green-500/10 text-green-500 border-green-500/20";
      default: return "bg-zinc-500/10 text-zinc-500 border-zinc-500/20";
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setRoleFilter("all");
    setSortBy("newest");
  };

  if (loading && users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin mb-4" />
        <p className="text-gray-500 font-bold">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight mb-2">
            Manage <span className="text-orange-500">Users</span>
          </h1>
          <p className="text-gray-500">Total {users.length} registered accounts</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={fetchUsers}
            className="p-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:text-orange-500 transition-all shadow-sm active:scale-95"
            title="Refresh Data"
          >
            <RefreshCcw size={20} className={loading ? "animate-spin" : ""} />
          </button>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold transition-all shadow-sm active:scale-95 border ${
              showFilters || roleFilter !== "all" || sortBy !== "newest" || searchQuery !== ""
                ? "bg-orange-500 text-white border-orange-500 shadow-orange-500/20" 
                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
            }`}
          >
            <Filter size={18} />
            Filters
            {(roleFilter !== "all" || sortBy !== "newest" || searchQuery !== "") && (
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            )}
          </button>
        </div>
      </div>

      {/* Advanced Filter Bar */}
      {(showFilters || roleFilter !== "all" || sortBy !== "newest" || searchQuery !== "") && (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-sm animate-in slide-in-from-top-4 duration-300 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Search User</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text"
                placeholder="Name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-xl focus:ring-2 focus:ring-orange-500/20 outline-none font-medium text-sm transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Filter by Role</label>
            <select 
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-xl focus:ring-2 focus:ring-orange-500/20 outline-none font-bold text-sm appearance-none cursor-pointer"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admins</option>
              <option value="trainer">Trainers</option>
              <option value="member">Members</option>
              <option value="non-member">Non-Members</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Sort Results</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-xl focus:ring-2 focus:ring-orange-500/20 outline-none font-bold text-sm appearance-none cursor-pointer"
            >
              <option value="newest">Join Date: Newest</option>
              <option value="oldest">Join Date: Oldest</option>
              <option value="name_asc">Name: A to Z</option>
              <option value="name_desc">Name: Z to A</option>
            </select>
          </div>

          <div className="flex items-end">
            <button 
              onClick={resetFilters}
              className="w-full py-3.5 text-zinc-400 hover:text-red-500 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <XCircle size={18} />
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden relative">
        {/* Mobile Swipe Hint */}
        <div className="lg:hidden flex items-center justify-center gap-2 py-2 bg-zinc-50 dark:bg-zinc-800 text-[10px] font-black uppercase text-gray-400 tracking-widest border-b border-zinc-100 dark:border-zinc-700">
          <span>Swipe horizontally to view more</span>
          <div className="flex gap-1 animate-pulse">
            <span className="w-1 h-1 bg-orange-500 rounded-full" />
            <span className="w-1 h-1 bg-orange-500 rounded-full" />
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[800px] lg:min-w-full">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-100 dark:border-zinc-800">
                <th className="px-8 py-6 text-xs font-black text-gray-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    User Details <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="px-8 py-6 text-xs font-black text-gray-500 uppercase tracking-widest">Role</th>
                <th className="px-8 py-6 text-xs font-black text-gray-500 uppercase tracking-widest">Joined Date</th>
                <th className="px-8 py-6 text-xs font-black text-gray-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
              {processedUsers.map((user) => (
                <tr key={user._id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 font-black text-lg">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-[#232d39] dark:text-white text-lg">{user.name}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1 font-medium">
                          <Mail size={14} className="text-orange-500" /> {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase border ${getRoleBadge(user.role)} shadow-sm`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-8">
                    <div className="text-gray-500 text-sm flex items-center gap-2 font-bold">
                      <Calendar size={16} className="text-orange-500" />
                      {new Date(user.createdAt).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </div>
                  </td>
                  <td className="px-8 py-8 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {updatingId === user._id ? (
                        <Loader2 size={20} className="text-orange-500 animate-spin" />
                      ) : (
                        (session?.user as any)?.role === 'admin' ? (
                          <div className="relative group/select">
                            <select 
                              value={user.role}
                              onChange={(e) => handleRoleChange(user._id, e.target.value)}
                              className="bg-zinc-100 dark:bg-zinc-800 border-none text-xs font-black px-5 py-2.5 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all cursor-pointer outline-none appearance-none pr-10"
                            >
                              <option value="non-member">Non-Member</option>
                              <option value="member">Member</option>
                              <option value="trainer">Trainer</option>
                              <option value="admin">Admin</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within/select:rotate-180 transition-transform" />
                          </div>
                        ) : (
                          <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase border ${getRoleBadge(user.role)}`}>
                            {user.role}
                          </span>
                        )
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {processedUsers.length === 0 && (
            <div className="p-32 text-center">
              <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce duration-[2000ms]">
                <Users size={48} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-black text-[#232d39] dark:text-white mb-3">No matches found</h3>
              <p className="text-gray-500 max-w-sm mx-auto font-medium">We couldn't find any users matching your current filters. Try resetting them to see more.</p>
              <button 
                onClick={resetFilters}
                className="mt-8 bg-orange-500 text-white font-black px-10 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-orange-500/20"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
