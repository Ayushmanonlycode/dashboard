import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AppButtonProps {
  title: string;
  description?: string;
  icon?: React.ElementType;
  href: string;
  color?: "default" | "primary" | "secondary" | "destructive" | "outline";
  className?: string;
}

const AppButton = ({
  title = "Application",
  description = "Click to open application",
  icon: Icon,
  href = "#",
  color = "default",
  className,
}: AppButtonProps) => {
  const colorVariants = {
    default:
      "bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 border border-gray-200 shadow-lg hover:shadow-xl",
    primary:
      "bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 shadow-lg hover:shadow-xl",
    destructive:
      "bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl",
    outline:
      "bg-gradient-to-br from-transparent to-gray-50 border-2 border-gray-300 hover:border-gray-400 hover:from-gray-50 hover:to-gray-100 shadow-lg hover:shadow-xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      className="w-full h-full"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <Button
          variant="ghost"
          className={cn(
            "w-full h-full flex flex-col items-center justify-center p-8 gap-4 rounded-2xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden group",
            colorVariants[color],
            className,
          )}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

          {/* Icon with animation */}
          {Icon && (
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Icon className="h-14 w-14 mb-2 relative z-10" />
            </motion.div>
          )}

          {/* Content */}
          <div className="text-center relative z-10">
            <motion.h3
              className="text-xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {title}
            </motion.h3>
            {description && (
              <motion.p
                className="text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </Button>
      </a>
    </motion.div>
  );
};

export default AppButton;
