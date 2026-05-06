import type { Metadata } from "next";
import { LoginForm } from "@/components/Auth/login-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your GYM ENGINE account to access your personalized training dashboard.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-50 dark:bg-black relative overflow-hidden py-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -ml-48 -mb-48" />
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <Link 
          href="/" 
          className="mb-8 flex items-center gap-2 text-[#232d39] dark:text-white font-bold hover:text-orange-500 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
        
        <LoginForm />
      </div>
    </div>
  );
}
