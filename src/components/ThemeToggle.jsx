
// components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false); 
  const [firstLoad, setFirstLoad] = useState(true); // 🔥 detect first page load

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || "dark";
    setTheme(initialTheme);

    const root = window.document.documentElement;
    if (initialTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Prevent hydration issues
  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ scale: 0.8, opacity: 0 }} // 🔥 entrance effect
      animate={{
        scale: firstLoad ? [0.8, 1.3, 1] : [1, 1.1, 1],
        opacity: 1,
        boxShadow:
          theme === "dark"
            ? "0px 0px 20px rgba(255, 40, 40, 0.95)" // glowing red
            : "0px 0px 20px rgba(255, 220, 0, 0.95)" // glowing gold
      }}
      transition={{
        duration: firstLoad ? 1 : 1.5,
        repeat: firstLoad ? 0 : Infinity, // 🔥 bounce once on load, glow infinitely after
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      onAnimationComplete={() => setFirstLoad(false)} // stop "bounce" after first run
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
