import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

// Lucide React Icons
import { Code, CheckCheck, Database, Braces, CodeXml, Computer } from 'lucide-react';

const skills = [
  {
    name: 'JavaScript',
    percentage: 90,
    colors: 'from-red-500 to-pink-300',
    Icon: Code,
  },
  {
    name: 'React.js',
    percentage: 95,
    colors: 'from-blue-400 to-blue-600',
    Icon: CodeXml,
  },
  {
    name: 'HTML5 & CSS3',
    percentage: 98,
    colors: 'from-purple-400 to-pink-500',
    Icon: Braces,
  },
  {
    name: 'Next.js',
    percentage: 75,
    colors: 'from-yellow-300 to-gray-600',
    Icon: CheckCheck,
  },
  {
    name: 'Tailwind CSS',
    percentage: 90,
    colors: 'from-red-500 to-indigo-500', // ✅ fixed typo
    Icon: Database,
  },
  {
    name: 'TypeScript',
    percentage: 80,
    colors: 'from-green-300 to-green-500',
    Icon: Computer,
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
    animateVisibleBars();

    window.addEventListener('scroll', animateVisibleBars);
    window.addEventListener('load', animateVisibleBars);

    return () => {
      window.removeEventListener('scroll', animateVisibleBars);
      window.removeEventListener('load', animateVisibleBars);
    };
  }, []);

  const animateVisibleBars = () => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible && !bar.classList.contains('animated')) {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
        bar.classList.add('animated');
      }
    });
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-zinc-900/50 
                 text-gray-900 dark:text-white 
                 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Skills &amp; Proficiency
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => {
            const IconComponent = skill.Icon;
            return (
              <div
                key={skill.name}
                className="skill-card 
                           bg-white dark:bg-zinc-900 
                           p-6 rounded-xl 
                           border border-gray-200 dark:border-gray-700 
                           hover:border-blue-500/50 dark:hover:border-red-400
                           transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 100}
              >
                {/* Icon + Title */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.colors} mr-4`}>
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className={`progress-bar h-3 rounded-full bg-gradient-to-r ${skill.colors}`}
                    data-percentage={skill.percentage}
                    style={{ width: '0%', transition: 'width 1.5s ease' }}
                  ></div>
                </div>

                {/* Percentage */}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.percentage}% Proficiency
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
