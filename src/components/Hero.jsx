import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <section
     className="lg:h-screen bg-cover bg-center transition-colors duration-300 
             dark:bg-[url('/images/background-black-one.jpg')] 
             bg-[url('/images/background-light.jpg')]"

    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col-reverse lg:flex-row lg:h-full items-center justify-between 
                   lg:px-24 px-4 sm:px-6 overflow-hidden"
      >
        {/* Left Section */}
        <div className="w-full max-w-xl text-center lg:text-left mt-10 lg:mt-0 px-2">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-red-400 mb-2 tracking-wide"
          >
            Front-End Engineer / Developer
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold 
                       text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Adaeze Aniekee
          </motion.h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">
            Blend of development expertise and engineering depth — transforming designs into
            seamless, scalable digital experiences. <br />
            Crafting modern, responsive solutions tailored to your needs.
          </p>

          {/* Buttons + Socials */}
          <div className="flex flex-col items-center sm:items-start md:items-center lg:items-start">
            {/* Contact and Resume Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-0">
              <a
                href="#contact"
                className="inline-block bg-transparent hover:bg-red-600 
                           text-red-400 dark:text-red-300 font-semibold py-2 px-6 rounded 
                           transition duration-200 border border-red-400 dark:border-red-300 
                           hover:border-red-600"
              >
                Contact Me
              </a>
              <a
                href="/Adaeze_Anieke_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent hover:bg-red-500 hover:text-white 
                           text-gray-900 dark:text-white font-semibold py-2 px-6 rounded 
                           border border-gray-900 dark:border-white 
                           hover:border-red-500 transition duration-200 sm:ml-4"
              >
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-6">
              <div className="flex space-x-4">
                {/* GitHub */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative group border border-gray-300 dark:border-gray-600 
                             p-2 rounded hover:border-red-400 transition"
                >
                  <a
                    href="https://github.com/adaeze21aniekee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="text-gray-800 dark:text-gray-200 
                                          hover:text-red-400 transition-colors duration-300 text-2xl" />
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                                   px-2 py-1 text-sm text-white bg-red-400 rounded 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    GitHub
                  </span>
                </motion.div>

                {/* Instagram */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative group border border-gray-300 dark:border-gray-600 
                             p-2 rounded hover:border-red-400 transition"
                >
                  <a
                    href="https://www.instagram.com/adaeze_princessx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiInstagram className="text-gray-800 dark:text-gray-200 
                                             hover:text-red-400 transition-colors duration-300 text-2xl" />
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                                   px-2 py-1 text-sm text-white bg-red-400 rounded 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Instagram
                  </span>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="relative group border border-gray-300 dark:border-gray-600 
                             p-2 rounded hover:border-red-400 transition"
                >
                  <a
                    href="http://linkedin.com/in/adaezeaniekee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin className="text-gray-800 dark:text-gray-200 
                                            hover:text-red-400 transition-colors duration-300 text-2xl" />
                  </a>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                                   px-2 py-1 text-sm text-white bg-red-400 rounded 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center items-center mt-16 sm:mt-20 lg:mt-10 w-full"
        >
          <img
            src="/images/black_profile-removebg-preview.png"
            alt="Profile"
            className="w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full 
                       object-cover shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
