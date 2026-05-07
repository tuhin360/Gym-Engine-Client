"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Loader2, 
  X, 
  Dumbbell, 
  Clock, 
  User, 
  Star,
  Image as ImageIcon
} from "lucide-react";
import { toast } from "react-hot-toast";

interface GymClass {
  _id: string;
  title: string;
  time: string;
  level: string;
  image: string;
  description: string;
  featured: boolean;
  trainer: string;
}

export default function ManageClassesPage() {
  const { data: session } = useSession();
  const [classes, setClasses] = useState<GymClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<GymClass | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    level: "All Levels",
    image: "/assets/training-image-01.jpg",
    description: "",
    featured: false,
    trainer: ""
  });

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/classes`);
      if (response.data.success) {
        setClasses(response.data.data);
      }
    } catch (error: any) {
      toast.error("Failed to fetch classes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${(session?.user as any)?.accessToken}` }
      };

      if (editingClass) {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/classes/${editingClass._id}`, formData, config);
        toast.success("Class updated successfully");
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/classes`, formData, config);
        toast.success("Class created successfully");
      }
      
      setIsModalOpen(false);
      setEditingClass(null);
      resetForm();
      fetchClasses();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this class?")) return;
    
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/classes/${id}`, {
        headers: { Authorization: `Bearer ${(session?.user as any)?.accessToken}` }
      });
      toast.success("Class deleted successfully");
      fetchClasses();
    } catch (error: any) {
      toast.error("Failed to delete class");
    }
  };

  const openEditModal = (item: GymClass) => {
    setEditingClass(item);
    setFormData({
      title: item.title,
      time: item.time,
      level: item.level,
      image: item.image,
      description: item.description,
      featured: item.featured,
      trainer: item.trainer
    });
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      time: "",
      level: "All Levels",
      image: "/assets/training-image-01.jpg",
      description: "",
      featured: false,
      trainer: ""
    });
  };

  const filteredClasses = classes.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.trainer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight mb-2">
            Manage <span className="text-orange-500">Classes</span>
          </h1>
          <p className="text-gray-500">Create and organize gym sessions and programs.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search classes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm transition-all"
            />
          </div>
          <button 
            onClick={() => { setEditingClass(null); resetForm(); setIsModalOpen(true); }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all active:scale-95"
          >
            <Plus size={20} />
            Add New Class
          </button>
        </div>
      </div>

      {/* Classes Grid */}
      {loading && classes.length === 0 ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredClasses.map((item) => (
            <div key={item._id} className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-56 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.featured && (
                    <div className="bg-orange-500 text-white p-2 rounded-xl shadow-lg">
                      <Star size={16} fill="white" />
                    </div>
                  )}
                  <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-lg">
                    {item.level}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#232d39] dark:text-white mb-4 line-clamp-1">{item.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <User size={16} className="text-orange-500" />
                    <span>{item.trainer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <Clock size={16} className="text-orange-500" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-zinc-50 dark:border-zinc-800">
                  <button 
                    onClick={() => openEditModal(item)}
                    className="flex-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-500 hover:text-white text-[#232d39] dark:text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(item._id)}
                    className="p-3 bg-red-50 dark:bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white dark:bg-zinc-950 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tight">
                  {editingClass ? "Edit" : "Add"} <span className="text-orange-500">Class</span>
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all">
                  <X size={28} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Class Title</label>
                    <input 
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-bold"
                      placeholder="e.g. Power Yoga"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Trainer Name</label>
                    <input 
                      required
                      value={formData.trainer}
                      onChange={(e) => setFormData({...formData, trainer: e.target.value})}
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-bold"
                      placeholder="e.g. Marcus Chen"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Time Duration</label>
                    <input 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-bold"
                      placeholder="e.g. 60 Mins"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Intensity Level</label>
                    <select 
                      value={formData.level}
                      onChange={(e) => setFormData({...formData, level: e.target.value})}
                      className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-bold appearance-none cursor-pointer"
                    >
                      <option>All Levels</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest px-2">Description</label>
                  <textarea 
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-900 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-medium h-32 resize-none"
                    placeholder="Describe the class..."
                  />
                </div>

                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                      className="w-6 h-6 rounded-lg accent-orange-500 cursor-pointer"
                    />
                    <span className="font-bold text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors">Feature this class</span>
                  </label>
                </div>

                <div className="pt-6">
                  <button 
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-[1.5rem] shadow-xl shadow-orange-500/30 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Dumbbell size={24} />}
                    {editingClass ? "Save Changes" : "Create Class"}
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
