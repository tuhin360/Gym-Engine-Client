"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Loader2, 
  X, 
  Calendar,
  Save,
  Clock,
  User
} from "lucide-react";
import { toast } from "react-hot-toast";

interface ISchedule {
  _id: string;
  name: string;
  trainer: string;
  schedules: {
    [key: string]: string;
  };
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ManageSchedulesPage() {
  const { data: session } = useSession();
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<ISchedule | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    trainer: "",
    schedules: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: ""
    }
  });

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/schedules`);
      if (response.data.success) {
        setSchedules(response.data.data);
      }
    } catch (error) {
      toast.error("Failed to fetch schedules");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${(session?.user as any)?.accessToken}` }
      };

      if (editingSchedule) {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/schedules/${editingSchedule._id}`, formData, config);
        toast.success("Schedule updated successfully");
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/schedules`, formData, config);
        toast.success("Schedule created successfully");
      }
      
      setIsModalOpen(false);
      setEditingSchedule(null);
      resetForm();
      fetchSchedules();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this schedule row?")) return;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/schedules/${id}`, {
        headers: { Authorization: `Bearer ${(session?.user as any)?.accessToken}` }
      });
      toast.success("Deleted successfully");
      fetchSchedules();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  const openEditModal = (item: ISchedule) => {
    setEditingSchedule(item);
    setFormData({
      name: item.name,
      trainer: item.trainer,
      schedules: { ...item.schedules }
    });
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      trainer: "",
      schedules: {
        Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: ""
      }
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight mb-2">
            Weekly <span className="text-orange-500">Schedules</span>
          </h1>
          <p className="text-gray-500">Manage the global timetable for all gym activities.</p>
        </div>
        <button 
          onClick={() => { setEditingSchedule(null); resetForm(); setIsModalOpen(true); }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all active:scale-95"
        >
          <Plus size={20} />
          Add Schedule Row
        </button>
      </div>

      {/* Schedule Table */}
      <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-100 dark:border-zinc-800">
                <th className="px-6 py-6 text-xs font-black text-gray-500 uppercase tracking-widest min-w-[200px]">Class & Trainer</th>
                {DAYS.map(day => (
                  <th key={day} className="px-6 py-6 text-xs font-black text-gray-500 uppercase tracking-widest min-w-[160px] text-center">{day}</th>
                ))}
                <th className="px-6 py-6 text-xs font-black text-gray-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
              {loading && schedules.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-20 text-center">
                    <Loader2 className="w-10 h-10 text-orange-500 animate-spin mx-auto" />
                  </td>
                </tr>
              ) : (
                schedules.map((item) => (
                  <tr key={item._id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                    <td className="px-6 py-8">
                      <p className="font-bold text-[#232d39] dark:text-white text-lg mb-1">{item.name}</p>
                      <p className="text-sm text-orange-500 font-bold flex items-center gap-1">
                        <User size={14} /> {item.trainer}
                      </p>
                    </td>
                    {DAYS.map(day => (
                      <td key={day} className="px-6 py-8 text-center">
                        {item.schedules[day] ? (
                          <div className="bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 rounded-xl py-3 px-2">
                             <p className="text-xs font-black text-orange-500">{item.schedules[day]}</p>
                          </div>
                        ) : (
                          <span className="text-gray-300 dark:text-zinc-700 font-bold">—</span>
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-8 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => openEditModal(item)}
                          className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-orange-500 rounded-xl transition-all"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={() => handleDelete(item._id)}
                          className="p-3 bg-red-50 dark:bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white dark:bg-zinc-950 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight">
                  {editingSchedule ? "Edit" : "Add"} <span className="text-orange-500">Schedule</span>
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all">
                  <X size={28} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Class Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-bold"
                      placeholder="e.g. Body Building"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Trainer</label>
                    <input 
                      required
                      value={formData.trainer}
                      onChange={(e) => setFormData({...formData, trainer: e.target.value})}
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-bold"
                      placeholder="e.g. Marcus Chen"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Weekly Timing (e.g. 10:00AM - 11:30AM)</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {DAYS.map(day => (
                      <div key={day} className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-2xl space-y-2 border border-zinc-100 dark:border-zinc-800">
                        <label className="text-[10px] font-black uppercase text-zinc-400">{day}</label>
                        <input 
                          value={formData.schedules[day as keyof typeof formData.schedules]}
                          onChange={(e) => setFormData({
                            ...formData, 
                            schedules: { ...formData.schedules, [day]: e.target.value }
                          })}
                          className="w-full bg-transparent border-none p-0 focus:ring-0 outline-none font-bold text-sm text-[#232d39] dark:text-white placeholder:text-zinc-300"
                          placeholder="Time or leave empty"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-orange-500/30 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Save size={24} />}
                    {editingSchedule ? "Update Timetable" : "Create Timetable Entry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
