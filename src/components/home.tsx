import React from "react";
import AppGrid from "./AppGrid";
import { LucideGithub, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <motion.header
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800 py-6 sticky top-0 z-50 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            Application Dashboard
          </motion.h1>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.span 
              className="text-sm text-gray-700 dark:text-gray-200 font-medium bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Welcome to your dashboard
            </motion.span>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
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
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            Quick Access
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl mx-auto text-lg transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Click on any application below to access it directly - no login
            required.
          </motion.p>

          {/* Application Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <AppGrid />
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0 font-medium transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              © {new Date().getFullYear()} Ayushman. All rights reserved.
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/Ayushmanonlycode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
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
