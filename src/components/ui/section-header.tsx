import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-4 border border-cyan-500/30">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-[#C7D2E0]",
          align === "center" && "max-w-2xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
