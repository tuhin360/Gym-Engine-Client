"use client";

import { motion } from "framer-motion";

export function ClassGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
          {/* Image Placeholder */}
          <div className="h-64 w-full bg-zinc-100" />
          
          <div className="p-8">
            {/* Title Placeholder */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-8 w-3/4 bg-zinc-200 rounded-lg mb-6" 
            />
            
            <div className="flex flex-col gap-4">
              {/* Icon + Text Placeholders */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-zinc-200 rounded-full" />
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="h-5 w-32 bg-zinc-200 rounded-md" 
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-zinc-200 rounded-full" />
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="h-5 w-32 bg-zinc-200 rounded-md" 
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
