"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <span className="text-[12rem] md:text-[15rem] font-black text-zinc-100 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Dumbbell size={100} className="text-orange-500 drop-shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-black text-[#232d39] uppercase tracking-tighter mb-6"
        >
          You Seem <span className="text-orange-500">Lost</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-lg md:text-xl mb-10 max-w-md mx-auto leading-relaxed"
        >
          This page is having its rest day. Let's get you back to the workout floor where the real action happens.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button className="w-full sm:w-auto h-14 px-10 bg-[#232d39] hover:bg-black text-white font-bold rounded-xl text-lg transition-all shadow-xl shadow-zinc-200">
              Back to Home
            </Button>
          </Link>
          <Link href="/classes">
            <Button variant="outline" className="w-full sm:w-auto h-14 px-10 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold rounded-xl text-lg">
              View Classes
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
