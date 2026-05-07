"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Clock, User } from "lucide-react";

import { ClassGridSkeleton } from "@/components/Skeleton/class-grid-skeleton";

export function ClassGrid() {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/classes`);
        if (response.data.success) {
          setClasses(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-zinc-50" id="class-grid">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-4">
              Discover <span className="text-orange-500">More Classes</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Explore our diverse range of fitness programs tailored for every goal, from strength and power to flexibility and endurance.
            </p>
          </div>
          <ClassGridSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-zinc-50" id="class-grid">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#232d39] uppercase tracking-tight mb-4">
            Discover <span className="text-orange-500">More Classes</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Explore our diverse range of fitness programs tailored for every goal, from strength and power to flexibility and endurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#232d39] mb-6 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-gray-500 font-medium">
                    <User className="w-5 h-5 text-orange-500" />
                    <span>{item.trainer}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 font-medium">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
