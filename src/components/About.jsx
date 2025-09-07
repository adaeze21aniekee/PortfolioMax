import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative lg:w-full lg:h-screen mx-auto p-8 rounded-md 
                 bg-gray-100/60 dark:bg-white/5 backdrop-blur-xl 
                 border border-gray-200 dark:border-white/10 overflow-hidden"
    >
      {/* Background Title */}
      <div
        className="absolute -inset-0.5 rounded-2xl 
                   bg-gradient-to-r from-gray-200/40 to-gray-300/20 
                   dark:from-zinc-700/20 dark:to-zinc-900/20 
                   blur-sm -z-10 flex items-center justify-center"
      >
        <h1 className="text-red-400/50 text-8xl md:text-9xl font-extrabold text-center blur-sm select-none">
          About Me
        </h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-10 items-start justify-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 
                         bg-gradient-to-r from-red-400 to-red-600 
                         bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-red-400 mb-6 rounded"></div>

          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
            <Spline
  className="w-full max-w-[500px] mx-auto lg:max-w-3xl xl:left-[-6%] relative"
  scene="https://prod.spline.design/udgQcOGy6opD93gG/scene.splinecode"
/>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="flex-1 space-y-6">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed"
          >
            Hi, I’m{" "}
            <span className="font-bold">ADAEZE ANIEKEE</span> — a{" "}
            <span className="text-red-500 font-semibold">
              Front-End Engineer
            </span>{" "}
            with solid experience building{" "}
            <span className="text-red-500">fast</span>,{" "}
            <span className="text-red-500">scalable</span>, and{" "}
            <span className="text-red-500">user-focused web applications</span>.
            My core stack includes React, Next.js, TypeScript, and TailwindCSS,
            where I craft clean, responsive, and high-performing interfaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed"
          >
            I’ve delivered{" "}
            <span className="text-red-500 font-semibold">10+ international projects</span>{" "}
            (UK, US, Nigeria) ranging from{" "}
            <span className="text-red-500">E-commerce platforms</span> that
            boosted conversions by 40% to{" "}
            <span className="text-red-500">SaaS dashboards</span> that simplified
            onboarding. My strength lies in translating complex business needs
            into simple, elegant, and intuitive digital products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed"
          >
            I’m passionate about{" "}
            <span className="text-red-500">performance</span>,{" "}
            <span className="text-red-500">accessibility</span>, and{" "}
            <span className="text-red-500">design precision</span>. I thrive in
            collaborative environments, working with teams that aim to build
            impactful, scalable solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed"
          >
            Outside coding, I enjoy exploring{" "}
            <span className="text-red-500">UI design trends</span>, mentoring
            junior developers, and staying ahead of new web technologies. I
            believe in lifelong learning and constant iteration to remain sharp
            in this{" "}
            <span className="text-red-500">fast-changing industry</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
