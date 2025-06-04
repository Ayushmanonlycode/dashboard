import React from "react";
import AppGrid from "./AppGrid";
import { LucideGithub } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  // Sample application data - replace with your actual applications
  const applications = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "View real-time analytics and reports",
      icon: "BarChart",
      url: "https://example.com/analytics",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: 2,
      title: "Content Management",
      description: "Manage your website content",
      icon: "FileText",
      url: "https://example.com/cms",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: 3,
      title: "User Portal",
      description: "Access user management tools",
      icon: "Users",
      url: "https://example.com/users",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      id: 4,
      title: "File Storage",
      description: "Access your cloud storage",
      icon: "HardDrive",
      url: "https://example.com/storage",
      color: "bg-amber-500 hover:bg-amber-600",
    },
    {
      id: 5,
      title: "Settings",
      description: "Configure system settings",
      icon: "Settings",
      url: "https://example.com/settings",
      color: "bg-rose-500 hover:bg-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 flex flex-col">
      {/* Header */}
      <motion.header
        className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Application Dashboard
          </motion.h1>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-sm text-gray-600 font-medium">
              Welcome to your dashboard
            </span>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Quick Access
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-10 text-center max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Click on any application below to access it directly - no login
            required.
          </motion.p>

          {/* Application Grid */}
          <AppGrid applications={applications} />
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-white/80 backdrop-blur-md py-8 border-t border-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0 font-medium">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <LucideGithub size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
