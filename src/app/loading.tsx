"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#232d39] text-white">
      <div className="relative flex items-center justify-center mb-8">
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 border-4 border-zinc-700 border-t-orange-500 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute w-24 h-24 border-4 border-zinc-700 border-b-orange-500 rounded-full"
        />
        
        {/* Logo Text */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl font-black tracking-tighter"
        >
          GYM <span className="text-orange-500">ENGINE</span>
        </motion.div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-zinc-400 font-bold uppercase tracking-widest text-sm"
      >
        Loading your transformation...
      </motion.p>
    </div>
  );
}
