"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialButton } from "./social-button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200 dark:shadow-none border border-zinc-100 dark:border-zinc-800"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tighter mb-2">
          Welcome <span className="text-orange-500">Back</span>
        </h2>
        <p className="text-gray-500 dark:text-zinc-400 font-medium">
          Enter your details to access your account
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <SocialButton 
          icon="https://www.svgrepo.com/show/475656/google-color.svg" 
          text="Continue with Google" 
        />
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-zinc-900 px-4 text-gray-400 font-bold">Or login with email</span>
        </div>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-[#232d39] dark:text-white ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full h-14 pl-12 pr-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 transition-all dark:text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-xs font-black uppercase tracking-widest text-[#232d39] dark:text-white">Password</label>
            <Link href="#" className="text-xs font-bold text-orange-500 hover:underline">Forgot Password?</Link>
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full h-14 pl-12 pr-12 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 transition-all dark:text-white"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <Button className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1">
          Login Now
        </Button>
      </form>

      <p className="text-center mt-8 text-gray-500 dark:text-zinc-400 font-medium">
        Don't have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold hover:underline">
          Create Account
        </Link>
      </p>
    </motion.div>
  );
}
