"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SocialButton } from "./social-button";
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

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
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Login Successful!");
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      toast.error("An unexpected error occurred");
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
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-[#232d39] dark:text-white uppercase tracking-tighter mb-2">
          Login <span className="text-orange-500"> Now</span>
        </h2>
        <p className="text-gray-500 dark:text-zinc-400 font-medium">
          Enter your details to access your account
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <SocialButton
          icon="https://www.svgrepo.com/show/475656/google-color.svg"
          text="Continue with Google"
          onClick={() => signIn("google", { callbackUrl: "/" })}
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

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Email */}
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

        {/* Password */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-xs font-black uppercase tracking-widest text-[#232d39] dark:text-white">Password</label>
            <Link href="#" className="text-xs font-bold text-orange-500 hover:underline">Forgot Password?</Link>
          </div>
          <div className="relative group">
            <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.password ? 'text-red-500' : 'text-gray-400 group-focus-within:text-orange-500'}`} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                if (errors.password) setErrors({ ...errors, password: "" });
              }}
              className={`w-full h-14 pl-12 pr-12 rounded-2xl border ${errors.password ? 'border-red-500 bg-red-50/10' : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800'} focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 transition-all dark:text-white`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="flex items-center gap-1 text-xs font-bold text-red-500 ml-2 animate-in fade-in slide-in-from-top-1">
              <AlertCircle size={14} /> {errors.password}
            </p>
          )}
        </div>

        <Button 
          type="submit"
          disabled={loading}
          className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 disabled:opacity-70"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Logging in...</span>
            </div>
          ) : (
            "Login Now"
          )}
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
