"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-red-100"
        >
          <AlertCircle size={48} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-5xl font-black text-[#232d39] uppercase tracking-tighter mb-4"
        >
          Something Went <span className="text-red-500">Wrong</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed font-medium"
        >
          Don't sweat it. Even the strongest athletes have bad days. Our team is already looking into this technical glitch.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            onClick={() => reset()}
            className="w-full sm:w-auto h-14 px-10 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg flex items-center gap-2 shadow-xl shadow-orange-200"
          >
            <RefreshCcw size={20} />
            Try Again
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto h-14 px-10 border-2 border-[#232d39] text-[#232d39] hover:bg-zinc-50 font-bold rounded-xl text-lg"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
