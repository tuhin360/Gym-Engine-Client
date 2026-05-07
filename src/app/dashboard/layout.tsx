"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );
  }

  if (!session) {
    redirect("/login");
  }

  const role = (session?.user as any)?.role || 'non-member';

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-20">
      <div className="container mx-auto flex">
        <Sidebar role={role} />
        <main className="flex-1 p-6 lg:p-10">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
