import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Globe,
  Server,
  Layout,
  Square,
  MonitorSmartphone,
  Database,
  Repeat,
} from "lucide-react";

const services = [
  {
    title: "Custom Web Application Development",
    description:
      "Building scalable, high-performance web apps with React, Next.js, and TypeScript tailored to business needs.",
    icon: Globe,
  },
  {
    title: "Responsive UI/UX Implementation",
    description:
      "Turning designs (Figma/Adobe XD) into pixel-perfect, mobile-first, and accessible interfaces.",
    icon: ArrowRightLeft,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving load times, SEO, and Lighthouse scores with code splitting, lazy loading, and caching strategies.",
    icon: Server,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Writing and maintaining unit, integration, and end-to-end tests with Jest, Cypress, and React Testing Library.",
    icon: Layout,
  },
  {
    title: "E-Commerce Development",
    description:
      "Creating modern online stores with secure payment gateways (Stripe/Paystack), shopping carts, and CMS-driven product management.",
    icon: Square,
  },
  {
    title: "API Integration & Data Handling",
    description:
      "Seamless integration of REST/GraphQL APIs, third-party services (Stripe, Firebase, Google Maps, Auth, etc.).",
    icon: MonitorSmartphone,
  },
  {
    title: "WordPress & Headless CMS Development",
    description:
      "Developing custom WordPress sites or headless CMS integrations (Sanity, Contentful) for dynamic content.",
    icon: Repeat,
  },
  {
    title: "Front-End Consulting & Code Review",
    description:
      "Helping teams refactor, review, and improve front-end architecture, ensuring maintainability and scalability.",
    icon: Database,
  },
];

const Service = () => {
  return (
    <section
      id="services"
      className="py-20 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Professional Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-3xl mx-auto"
        >
          Delivering top-notch web development solutions to elevate your digital
          presence and drive business growth.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3 + index * 0.15,
              }}
              className="bg-white dark:bg-zinc-900 
             border border-gray-200 dark:border-gray-700 
             hover:border-red-500 dark:hover:border-red-400 
             transition-all duration-300 p-6 rounded-xl 
             text-left shadow-sm hover:shadow-md"

            >
              <div className="flex items-center mb-4 text-red-500 dark:text-red-400">
                <Icon size={28} strokeWidth={1.5} />
                <h3 className="text-xl font-semibold ml-4 text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
