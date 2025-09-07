import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

  import emailjs from "emailjs-com";


const Contact = () => {

  
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

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-cover bg-center 
      bg-[url('/images/background-light.jpg')] 
      dark:bg-[url('/images/background-black-one.jpg')] 
      transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 60,
              damping: 12,
            }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold 
                       bg-gradient-to-r from-red-500 via-red-400 to-red-600 
                       bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/70 dark:bg-zinc-900/70 
                       rounded-xl shadow-md p-8 border border-gray-200 
                       dark:border-gray-700"
          >
            <h2 className="text-3xl font-semibold mb-6 
                           bg-gradient-to-r from-red-400 to-red-600 
                           bg-clip-text text-transparent">
              Let's Talk
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm open to discussing new projects, creative ideas, or
              opportunities. Reach me directly through the details below:
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center space-x-4"
              >
                <Mail className="text-red-500 dark:text-red-400" size={28} />
                <p className="text-gray-800 dark:text-gray-200">
                  adaezeaniekee21@gmail.com
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center space-x-4"
              >
                <Phone className="text-red-500 dark:text-red-400" size={28} />
                <p className="text-gray-800 dark:text-gray-200">
                  ‪+234-903-716-5995‬
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center space-x-4"
              >
                <MapPin className="text-red-500 dark:text-red-400" size={28} />
                <p className="text-gray-800 dark:text-gray-200">
                  Lagos, Nigeria
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}

            onSubmit={sendEmail}


            className="backdrop-blur-sm bg-white/70 dark:bg-zinc-900/70 
                       rounded-xl shadow-md p-8 border border-gray-200 
                       dark:border-gray-700 space-y-6"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full mt-1 p-3 rounded-lg border 
                           border-gray-300 dark:border-gray-600 
                           dark:bg-zinc-800 dark:text-white 
                           focus:ring-2 focus:ring-red-400 
                           focus:border-red-400 outline-none 
                           transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full mt-1 p-3 rounded-lg border 
                           border-gray-300 dark:border-gray-600 
                           dark:bg-zinc-800 dark:text-white 
                           focus:ring-2 focus:ring-red-400 
                           focus:border-red-400 outline-none 
                           transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium">
                Write your message here
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                className="w-full mt-1 p-3 rounded-lg border 
                           border-gray-300 dark:border-gray-600 
                           dark:bg-zinc-800 dark:text-white 
                           focus:ring-2 focus:ring-red-400 
                           focus:border-red-400 outline-none 
                           transition-all duration-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 
                           text-white py-3 px-6 rounded-lg font-semibold 
                           border border-red-500 
                           dark:bg-transparent dark:border-red-400 
                           dark:hover:bg-red-500 dark:hover:text-white 
                           transition-all duration-300"
              >
                Submit Now
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
