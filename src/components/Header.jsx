import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // Adjust path as needed
import { toast } from "react-hot-toast";
  import emailjs from "emailjs-com";

const Header = () => {
  // toggle the menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Contact form modal state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // Detect current theme (dark / light) and re-animate header on change
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR safety
    const root = document.documentElement;

    const update = () => setIsDark(root.classList.contains("dark"));
    update();

    // Observe class changes on <html> (ThemeToggle likely toggles 'dark' here)
    const obs = new MutationObserver(update);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => obs.disconnect();
  }, []);

  // Smooth scroll handler that accounts for the header height
const scrollToId = (e, id) => {
  if (e && e.preventDefault) e.preventDefault();
  if (typeof window === "undefined") return;

  const scroll = () => {
    const el = document.getElementById(id);
    if (!el) {
      window.location.hash = `#${id}`;
      return;
    }

    const headerEl = document.querySelector("header");
    const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 0;

    const GAP = 12;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - GAP;

    window.scrollTo({ top, behavior: "smooth" });
  };

  // If mobile menu is open, close it first then scroll after a short delay
  if (isOpen) {
    setIsOpen(false);
    setTimeout(scroll, 400); // Wait for menu to collapse
  } else {
    scroll();
  }
};


const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10); // scroll threshold
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nvw5x4b", "template_nhm2k2h", e.target, "uM6PdHGP6xWhZja2u")
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message ❌");
        }
      );
  };



  const navItems = ["About", "Services", "Contact"];

  return (
     <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
    ${isScrolled ? 'h-14 md:h-16 bg-white/70 dark:bg-zinc-900/70 shadow-md' : 'h-20 md:h-24'}
  `}>

      {/* Re-animate the header when theme changes */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, y: -8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 8, filter: "blur(2px)" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">

            {/* Logo or Brand Name */}
              <motion.button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className={`flex items-center transition-all duration-300 ease-in-out 
    ${isScrolled ? 'scale-75' : 'scale-100'} hover:scale-105 rounded-lg cursor-pointer 
    hover:shadow-lg hover:shadow-red-400/50 dark:hover:shadow-red-300/40`}
  style={{ originX: 0 }}
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 25,
    duration: 1.2,
    delay: 0.3,
  }}
>
  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-300 to-gray-100 dark:from-zinc-600 dark:to-zinc-800 flex items-center justify-center text-red-500 font-bold text-xl mr-3">
    A
  </div>
  <span className="font-bold text-2xl bg-gradient-to-r from-red-400 to-red-200 dark:from-red-300 dark:to-red-500 bg-clip-text text-transparent">
    Adaeze<span className=" text-red-500 dark:text-red-400">.</span>Dev
  </span>
</motion.button>


            {/* Navigation Links (Desktop) */}
            <nav className="md:flex hidden space-x-8 items-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + index * 0.2,
                  }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToId(e, item.toLowerCase())}
                  className="relative text-gray-900 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 dark:bg-red-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </motion.a>
              ))}

              {/* Theme Toggle (Desktop) */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile menu button + Theme Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.7 }}
                onClick={toggleMenu}
                className="text-2xl text-gray-800 dark:text-gray-200 focus:outline-none hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden overflow-hidden bg-white dark:bg-zinc-900 px-4 py-4 absolute top-16 left-0 w-full shadow-lg z-40 flex flex-col space-y-4"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToId(e, item.toLowerCase())}
                  className="text-gray-900 dark:text-gray-100 font-medium py-2 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}

              <a
  href="/Adaeze_Aniekee_Resume.pdf"
  download // ← This tells the browser to download instead of open
  className="inline-block bg-transparent hover:bg-red-500 hover:text-white 
             text-gray-900 dark:text-white font-semibold py-2 px-6 rounded 
             border border-gray-900 dark:border-white 
             hover:border-red-500 transition duration-200 sm:ml-4 text-center"
>
  Download Resume
</a>


              {/* Socials */}
              <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
                <div className="flex space-x-4">
                  {/* GitHub */}
                  <div className="relative group">
                    <a
                      href="https://github.com/adaeze21aniekee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 text-2xl" />
                    </a>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-red-500 dark:bg-red-400 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      GitHub
                    </span>
                  </div>

                  {/* Instagram */}
                  <div className="relative group">
                    <a
                      href="https://www.instagram.com/adaeze_princessx?igsh=d3FjZjczaWF4N2Vs&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiInstagram className="text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 text-2xl" />
                    </a>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-red-500 dark:bg-red-400 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Instagram
                    </span>
                  </div>

                  {/* LinkedIn */}
                  <div className="relative group">
                    <a
                      href="http://linkedin.com/in/adaezeaniekee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLinkedin className="text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 text-2xl" />
                    </a>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-red-500 dark:bg-red-400 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LinkedIn
                    </span>
                  </div>
                </div>

                
              </div>

              {/* Connect Button */}
              <div>
                <button
                  onClick={() => {
                    openContact();
                    toggleMenu();
                  }}
                  className="mt-4 w-full bg-gradient-to-r from-red-400 to-red-600 dark:from-red-300 dark:to-red-500 font-bold text-white py-2 px-4 rounded-lg hover:from-red-500 hover:to-red-700 dark:hover:from-red-400 dark:hover:to-red-600 transition-colors duration-300"
                >
                  Connect
                </button>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Modal */}
          <AnimatePresence>
            {isContactOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=" inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={closeContact}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 30 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30, duration: 0.8 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 w-full max-w-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Contact Me</h2>
                    <button onClick={closeContact}>
                      <FiX className="text-gray-800 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 text-2xl cursor-pointer font-extrabold" />
                    </button>
                  </div>

                  <form 
                  onSubmit={sendEmail}
                  className="space-y-4">

                    <div>
                      <label
                        className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-3 py-2 border border-red-300 dark:border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-red-500 bg-transparent text-gray-900 dark:text-gray-100"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-3 py-2 border border-red-300 dark:border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-red-500 bg-transparent text-gray-900 dark:text-gray-100"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-red-300 dark:border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-red-500 bg-transparent text-gray-900 dark:text-gray-100"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-400 to-red-600 dark:from-red-300 dark:to-red-500 font-bold text-white py-2 px-4 rounded-lg hover:from-red-500 hover:to-red-700 dark:hover:from-red-400 dark:hover:to-red-600 transition-colors duration-300 shadow-md hover:shadow-lg hover:shadow-red-400/50"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </header>
  );
};

export default Header;
