import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "bg-gradient-to-br from-[#161E2E] to-[#1A2333] rounded-2xl border border-cyan-500/20 p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
