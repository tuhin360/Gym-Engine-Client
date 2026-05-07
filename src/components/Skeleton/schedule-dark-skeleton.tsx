"use client";

import { motion } from "framer-motion";

export function ScheduleDarkSkeleton() {
  const rows = [1, 2, 3, 4, 5];

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
      <table className="w-full border-collapse text-center min-w-[700px]">
        <tbody>
          {rows.map((row) => (
            <tr key={row} className="border border-white/10">
              <td className="py-8 px-4 border border-white/10 w-1/4">
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-6 w-32 bg-white/10 rounded-lg mx-auto"
                />
              </td>
              <td className="py-8 px-4 border border-white/10 w-1/4">
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                  className="h-5 w-24 bg-white/10 rounded-lg mx-auto"
                />
              </td>
              <td className="py-8 px-4 border border-white/10 w-1/4">
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="h-5 w-24 bg-white/10 rounded-lg mx-auto"
                />
              </td>
              <td className="py-8 px-4 border border-white/10 w-1/4 text-right">
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  className="h-6 w-28 bg-white/10 rounded-lg mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
