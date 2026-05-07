"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { 
  Users, 
  Search, 
  MoreVertical, 
  UserCheck, 
  UserPlus, 
  Shield, 
  Mail,
  Calendar,
  Loader2,
  RefreshCcw
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
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

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
            Authorization: `Bearer ${(session as any)?.accessToken}`
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

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin': return "bg-red-500/10 text-red-500 border-red-500/20";
      case 'trainer': return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case 'member': return "bg-green-500/10 text-green-500 border-green-500/20";
      default: return "bg-zinc-500/10 text-zinc-500 border-zinc-500/20";
    }
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
          <p className="text-gray-500">View and manage all registered members and staff.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={fetchUsers}
            className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:text-orange-500 transition-all shadow-sm"
          >
            <RefreshCcw size={20} className={loading ? "animate-spin" : ""} />
          </button>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-100 dark:border-zinc-800">
                <th className="px-8 py-5 text-xs font-black text-gray-500 uppercase tracking-widest">User Details</th>
                <th className="px-8 py-5 text-xs font-black text-gray-500 uppercase tracking-widest">Role</th>
                <th className="px-8 py-5 text-xs font-black text-gray-500 uppercase tracking-widest">Joined Date</th>
                <th className="px-8 py-5 text-xs font-black text-gray-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
              {filteredUsers.map((user) => (
                <tr key={user._id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                        <UserPlus size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-[#232d39] dark:text-white text-lg">{user.name}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Mail size={14} /> {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase border ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                      <Calendar size={16} className="text-orange-500" />
                      {new Date(user.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {updatingId === user._id ? (
                        <Loader2 size={20} className="text-orange-500 animate-spin" />
                      ) : (
                        <select 
                          value={user.role}
                          onChange={(e) => handleRoleChange(user._id, e.target.value)}
                          className="bg-zinc-100 dark:bg-zinc-800 border-none text-xs font-bold px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all cursor-pointer outline-none"
                        >
                          <option value="non-member">Non-Member</option>
                          <option value="member">Member</option>
                          <option value="trainer">Trainer</option>
                          <option value="admin">Admin</option>
                        </select>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredUsers.length === 0 && (
            <div className="p-20 text-center">
              <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No users found</h3>
              <p className="text-gray-500">Try adjusting your search or refresh the page.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
