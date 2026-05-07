import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Shared/navbar";
import { Footer } from "@/components/Shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/components/Providers/auth-provider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GYM ENGINE",
    default: "GYM ENGINE - Your Ultimate Fitness Destination",
  },
  description: "Join GYM ENGINE today and transform your body, mind, and soul with our expert trainers and modern equipment.",
  keywords: ["Gym", "Fitness", "Training", "Bodybuilding", "Yoga", "Schedules", "Expert Trainers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
