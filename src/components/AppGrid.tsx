import React from "react";
import AppButton from "./AppButton";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Home,
  Settings,
  FileText,
  BarChart3,
  Target,
  FolderKanban,
  Briefcase,
  MessageSquare,
  CheckSquare,
} from "lucide-react";

interface AppGridProps {
  apps?: {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }[];
}

const AppGrid = ({ apps = defaultApps }: AppGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {apps.map((app, index) => (
          <motion.div key={index} variants={itemVariants} className="h-48">
            <AppButton
              title={app.title}
              description={app.description}
              href={app.href}
              icon={app.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const defaultApps = [
  {
    title: "Goal Tracker",
    description: "Track and manage your personal and professional goals",
    href: "https://goal-tracker-lime.vercel.app/",
    icon: Target,
  },
  {
    title: "Project Management",
    description: "Organize and manage your projects efficiently",
    href: "https://project-management-woad-eta.vercel.app/",
    icon: FolderKanban,
  },
  {
    title: "Job Tracker",
    description: "Keep track of job applications and opportunities",
    href: "https://job-trackr-one.vercel.app/",
    icon: Briefcase,
  },
  {
    title: "Meeting Notes",
    description: "Capture and organize your meeting notes",
    href: "https://meeting-notes-plum.vercel.app/",
    icon: MessageSquare,
  },
  {
    title: "To Do",
    description: "Manage your daily tasks and to-do lists",
    href: "https://todo-app-rouge-five-42.vercel.app/",
    icon: CheckSquare,
  },
];

export default AppGrid;
