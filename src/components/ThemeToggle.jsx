
// components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.8 }}
      className="ml-4 p-2 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-red-300 dark:hover:bg-red-500 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400 text-xl" />
      ) : (
        <FiMoon className="text-gray-800 text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
