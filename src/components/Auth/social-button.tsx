import { motion } from "framer-motion";
import Image from "next/image";

interface SocialButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

export function SocialButton({ icon, text, onClick }: SocialButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 h-14 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl font-bold text-[#232d39] dark:text-white transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-700 shadow-sm"
    >
      <div className="relative w-6 h-6">
        <img src={icon} alt={text} className="w-full h-full object-contain" />
      </div>
      <span>{text}</span>
    </motion.button>
  );
}
