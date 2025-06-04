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
    <div className="w-full max-w-7xl mx-auto p-6 bg-background">
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
    href: "https://your-goal-tracker.com",
    icon: Target,
  },
  {
    title: "Project Management",
    description: "Organize and manage your projects efficiently",
    href: "https://your-project-manager.com",
    icon: FolderKanban,
  },
  {
    title: "Job Tracker",
    description: "Keep track of job applications and opportunities",
    href: "https://your-job-tracker.com",
    icon: Briefcase,
  },
  {
    title: "Meeting Notes",
    description: "Capture and organize your meeting notes",
    href: "https://your-meeting-notes.com",
    icon: MessageSquare,
  },
  {
    title: "To Do",
    description: "Manage your daily tasks and to-do lists",
    href: "https://your-todo-app.com",
    icon: CheckSquare,
  },
];

export default AppGrid;
