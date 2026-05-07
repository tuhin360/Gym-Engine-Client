"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SocialButton } from "./social-button";
import { Mail, Lock, User, ShieldCheck, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

export function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started!");
    if (!validateForm()) return;

    setLoading(true);
    console.log("Submitting to:", `${process.env.NEXT_PUBLIC_API_URL}/auth/register`);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, formData, {
        withCredentials: true
      });
      
      if (response.data.success) {
        toast.success("Account Created! Logging you in...");
        
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result?.error) {
          toast.error("Auto-login failed, please login manually");
          router.push("/login");
        } else {
          router.push("/");
          router.refresh();
        }
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200 dark:shadow-none border border-zinc-100 dark:border-zinc-800"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tighter mb-2">
          Sign<span className="text-orange-500">UP</span>
        </h2>
        <p className="text-gray-500 dark:text-zinc-400 font-medium">
          Create an account to join the elite community
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <SocialButton 
          icon="https://www.svgrepo.com/show/475656/google-color.svg" 
          text="Sign up with Google" 
          onClick={() => signIn("google", { callbackUrl: "/" })}
        />
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-zinc-900 px-4 text-gray-400 font-bold">Or register with email</span>
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-[#232d39] dark:text-white ml-1">Full Name</label>
          <div className="relative group">
            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.name ? 'text-red-500' : 'text-gray-400 group-focus-within:text-orange-500'}`} />
            <input 
              type="text" 
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              className={`w-full h-14 pl-12 pr-6 rounded-2xl border ${errors.name ? 'border-red-500 bg-red-50/10' : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800'} focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 transition-all dark:text-white`}
            />
          </div>
          {errors.name && (
            <p className="flex items-center gap-1 text-xs font-bold text-red-500 ml-2 animate-in fade-in slide-in-from-top-1">
              <AlertCircle size={14} /> {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-[#232d39] dark:text-white ml-1">Email Address</label>
          <div className="relative group">
            <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.email ? 'text-red-500' : 'text-gray-400 group-focus-within:text-orange-500'}`} />
            <input 
              type="email" 
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              className={`w-full h-14 pl-12 pr-6 rounded-2xl border ${errors.email ? 'border-red-500 bg-red-50/10' : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800'} focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 transition-all dark:text-white`}
            />
          </div>
          {errors.email && (
            <p className="flex items-center gap-1 text-xs font-bold text-red-500 ml-2 animate-in fade-in slide-in-from-top-1">
              <AlertCircle size={14} /> {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-[#232d39] dark:text-white ml-1">Password</label>
          <div className="relative group">
            <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.password ? 'text-red-500' : 'text-gray-400 group-focus-within:text-orange-500'}`} />
            <input 
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                if (errors.password) setErrors({ ...errors, password: "" });
              }}
              className={`w-full h-14 pl-12 pr-6 rounded-2xl border ${errors.password ? 'border-red-500 bg-red-50/10' : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800'} focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 transition-all dark:text-white`}
            />
          </div>
          {errors.password && (
            <p className="flex items-center gap-1 text-xs font-bold text-red-500 ml-2 animate-in fade-in slide-in-from-top-1">
              <AlertCircle size={14} /> {errors.password}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 ml-1 mb-2">
          <div className="w-5 h-5 rounded border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
            <ShieldCheck className="w-3 h-3 text-orange-500" />
          </div>
          <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">
            I agree to the <Link href="#" className="text-orange-500 font-bold hover:underline">Terms & Privacy Policy</Link>
          </p>
        </div>

        <Button 
          type="submit"
          disabled={loading}
          className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 disabled:opacity-70"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Creating Account...</span>
            </div>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>

      <p className="text-center mt-8 text-gray-500 dark:text-zinc-400 font-medium">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold hover:underline">
          Login Here
        </Link>
      </p>
    </motion.div>
  );
}
