import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Front-End Engineer",
    company: "TechRecruiter AI",
    period: "Feb 2025 - Present",
    description:
      "Leading the front-end development of an AI-powered recruitment management system. Building reusable React components, optimizing UI performance, and integrating LLM-powered features for smarter candidate screening.",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Material UI",
      "Redis",
      "LLMs & AI",
      "JavaScript",
    ],
  },
  {
    role: "React Native Front-End Engineer (Contract)",
    company: "iPingmoney",
    period: "Dec 2023 - May 2024",
    description:
      "Improved mobile user dashboards and developed a responsive KYC verification interface with API integration, enhancing usability and client onboarding.",
    tech: ["React Native", "React", "Expo", "TypeScript"],
  },
  {
    role: "Front-End Engineer (Contract)",
    company: "Plant&foodbytes",
    period: "Mar 2023 - Apr 2023",
    description:
      "Built a responsive dashboard and enhanced front-end performance for financial onboarding systems, ensuring seamless cross-device functionality.",
    tech: ["React", "TypeScript", "TailwindCSS", "AWS"],
  },
  {
    role: "Front-End Developer",
    company: "medsafrica",
    period: "Jun 2022 - Jan 2025",
    description:
      "Contributed to a scalable pharmaceutical platform, implementing secure authentication for users, real-time drug inventory tracking, and responsive interfaces for pharmacists and healthcare providers",
    tech: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Node.js",
      "Microsoft Azure",
      "WebSocket",
    ],
  },
  {
    role: "Front-End Intern (Networking & Systems Exposure)",
    company: "University of Nigeria, Nsukka - Computer Center",
    period: "Nov 2021 - Mar 2022",
    description:
      "Assisted in building internal dashboards for monitoring network infrastructure while gaining exposure to campus-wide IT systems.",
    tech: ["HTML5", "CSS3", "JavaScript", "Networking Basics"],
  },
  {
    role: "Junior Mobile Front-End Developer (Internship)",
    company: "Kings Technologies Ltd.",
    period: "Aug 2021 - Sep 2021",
    description:
      "Designed and implemented UI screens for an Android app that monitored real-time data transmission, focusing on responsive layouts and clean code.",
    tech: ["Java", "XML", "Android Studio"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-10 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-500"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A journey of building scalable products, refining user experiences,
          and growing with every project.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-400 via-red-600 to-transparent dark:opacity-40"></div>

        {/* Experience Cards */}
        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-sm shadow-md transition-all duration-300 ${
                index % 2 === 0
                  ? "md:ml-0 md:mr-auto md:w-[45%]"
                  : "md:ml-auto md:mr-0 md:w-[45%]"
              }`}
            >
              {/* Icon marker */}
  <div className="flex items-start gap-4 bg-zinc-950 p-6 rounded-lg border border-slate-700 hover:border-red-400 transition">
    <div className="flex-shrink-0 mt-1">
      <Briefcase className="text-red-400" size={22} />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">{exp.role}</h3>
      <p className="text-sm text-gray-400">{exp.company}</p>
      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
      <p className="text-gray-300 mb-3">{exp.description}</p>
      <div className="flex flex-wrap gap-2">
        {exp.tech.map((tag, i) => (
          <span
            key={i}
            className="bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-300 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
