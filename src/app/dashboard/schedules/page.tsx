"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Plus, Edit2, Trash2, Loader2, X, Save, User } from "lucide-react";
import { toast } from "react-hot-toast";

interface ISchedule {
  _id: string;
  name: string;
  trainer: string;
  schedules: Record<string, string>;
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ManageSchedulesPage() {
  const { data: session } = useSession();
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<ISchedule | null>(null);

  const emptySchedule = DAYS.reduce((acc, day) => {
    acc[day] = "";
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState({
    name: "",
    trainer: "",
    schedules: emptySchedule
  });

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/schedules`);
      if (response.data.success) {
        setSchedules(response.data.data);
      }
    } catch {
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
        headers: {
          Authorization: `Bearer ${(session?.user as any)?.accessToken}`
        }
      };

      if (editingSchedule) {
        await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/schedules/${editingSchedule._id}`,
          formData,
          config
        );
        toast.success("Schedule updated successfully");
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/schedules`,
          formData,
          config
        );
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
    if (!confirm("Delete this schedule row?")) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/schedules/${id}`,
        {
          headers: {
            Authorization: `Bearer ${(session?.user as any)?.accessToken}`
          }
        }
      );

      toast.success("Deleted successfully");
      fetchSchedules();
    } catch {
      toast.error("Failed to delete");
    }
  };

  const openEditModal = (item: ISchedule) => {
    setEditingSchedule(item);

    setFormData({
      name: item.name,
      trainer: item.trainer,
      schedules: { ...emptySchedule, ...item.schedules }
    });

    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      trainer: "",
      schedules: emptySchedule
    });
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Weekly Schedules</h1>

        <button
          onClick={() => {
            setEditingSchedule(null);
            resetForm();
            setIsModalOpen(true);
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          <Plus size={18} /> Add
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr>
              <th>Class</th>
              {DAYS.map(d => <th key={d}>{d}</th>)}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} className="text-center p-5">
                  <Loader2 className="animate-spin" />
                </td>
              </tr>
            ) : (
              schedules.map(item => (
                <tr key={item._id}>
                  <td>
                    <p>{item.name}</p>
                    <small>
                      <User size={12} /> {item.trainer}
                    </small>
                  </td>

                  {DAYS.map(day => (
                    <td key={day}>
                      {item.schedules?.[day] || "—"}
                    </td>
                  ))}

                  <td>
                    <button onClick={() => openEditModal(item)}>
                      <Edit2 size={16} />
                    </button>

                    <button onClick={() => handleDelete(item._id)}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-[600px]">
            <div className="flex justify-between">
              <h2>{editingSchedule ? "Edit" : "Add"} Schedule</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Class Name"
                className="border p-2 w-full"
              />

              <input
                value={formData.trainer}
                onChange={e =>
                  setFormData({ ...formData, trainer: e.target.value })
                }
                placeholder="Trainer"
                className="border p-2 w-full mt-2"
              />

              {DAYS.map(day => (
                <input
                  key={day}
                  value={formData.schedules[day]}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      schedules: {
                        ...formData.schedules,
                        [day]: e.target.value
                      }
                    })
                  }
                  placeholder={day}
                  className="border p-2 w-full mt-2"
                />
              ))}

              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 mt-4"
              >
                <Save size={16} /> Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}