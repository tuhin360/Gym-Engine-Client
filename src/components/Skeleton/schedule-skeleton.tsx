"use client";

import { motion } from "framer-motion";

export function ScheduleSkeleton() {
  const rows = [1, 2, 3, 4, 5];

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-zinc-200/50 bg-white">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[#232d39] text-white">
            <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider">Class Name</th>
            <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider">Time Slot</th>
            <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider">Trainer</th>
            <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row} className="border-b border-gray-50">
              <td className="py-8 px-8">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-7 w-48 bg-zinc-100 rounded-lg"
                />
              </td>
              <td className="py-8 px-8">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                  className="h-6 w-40 bg-zinc-100 rounded-lg"
                />
              </td>
              <td className="py-8 px-8">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="h-6 w-32 bg-zinc-100 rounded-lg"
                />
              </td>
              <td className="py-8 px-8 text-right">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  className="h-10 w-28 bg-zinc-100 rounded-lg ml-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
