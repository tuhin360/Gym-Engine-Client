"use client";

import { motion } from "framer-motion";

export function FeaturedClassSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {[1, 2].map((n) => (
        <div key={n} className="relative overflow-hidden rounded-3xl bg-zinc-100 h-[450px]">
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <div className="flex gap-4 mb-4">
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-6 w-20 bg-zinc-300 rounded-full" 
              />
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="h-6 w-20 bg-zinc-300 rounded-full" 
              />
            </div>
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="h-10 w-2/3 bg-zinc-300 rounded-lg mb-4" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              className="h-5 w-full bg-zinc-300 rounded-md mb-2" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
              className="h-12 w-32 bg-zinc-300 rounded-lg mt-4" 
            />
          </div>
        </div>
      ))}
    </div>
  );
}
