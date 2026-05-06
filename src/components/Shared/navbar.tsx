"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Schedules", href: "/schedules" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu} className="text-2xl font-bold text-[#232d39] dark:text-white tracking-wider z-50">
          GYM <span className="text-orange-500">ENGINE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm lg:text-base font-bold transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-[#232d39] dark:text-white hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none font-bold px-6 h-11 rounded-lg shadow-lg shadow-orange-500/20">
            Sign Up
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden z-50">
          <ThemeToggle />
          <button 
            className="text-[#232d39] dark:text-white hover:text-orange-500 transition-colors p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white/98 dark:bg-zinc-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-2xl font-black transition-colors ${
                isActive
                  ? "text-orange-500"
                  : "text-[#232d39] dark:text-white hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <Button onClick={closeMobileMenu} className="bg-orange-500 hover:bg-orange-600 text-white border-none w-3/4 max-w-sm mt-8 text-xl py-8 font-black rounded-2xl shadow-xl shadow-orange-500/20">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
