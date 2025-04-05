import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, Bot, Globe, Figma } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Layout, 
      level: 95,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind']
    },
    { 
      name: 'Backend Development', 
      icon: Server, 
      level: 30,
      technologies: ['Node.js', 'Express', 'PHP']
    },
    { 
      name: 'Database Management', 
      icon: Database, 
      level: 30,
      technologies: ['MongoDB', 'MySQL', 'Firebase', 'SQLite']
    },
    { 
      name: 'UI/UX Design', 
      icon: Figma, 
      level: 70,
      technologies: ['Figma', 'Adobe Illustrator', 'Webflow']
    }
  ];

  return (
    <section className="py-24 min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] relative overflow-hidden" id="about">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#f3f3f3] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#f3f3f3] rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-sm font-medium text-neutral-400">ABOUT ME</span>
            <div className="h-[1px] w-20 bg-neutral-200" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Crafting Digital Excellence</h2>
          <p className="text-neutral-600 text-lg max-w-2xl">
            Transforming complex challenges into elegant solutions through clean code and intuitive design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Skills */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#f3f3f3] group-hover:bg-neutral-900 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                    <p className="text-neutral-500 text-sm">{skill.level}% Proficiency</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-[#f3f3f3] w-full mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-neutral-900"
                  />
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-[#f3f3f3] text-sm text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <p className="text-neutral-600 leading-relaxed">
                With over a decade of experience in web development, I've cultivated a deep understanding 
                of both front-end and back-end technologies. My approach combines technical expertise 
                with creative problem-solving to deliver exceptional digital experiences.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                I specialize in building scalable web applications that not only meet technical requirements 
                but also provide intuitive user experiences. Every project is an opportunity to push boundaries 
                and create something remarkable.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "100+", label: "Projects Completed" },
                { number: "325+", label: "Happy Clients" },
                { number: "15+", label: "Awards Received" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-default"
                >
                  <div className="text-4xl font-bold mb-2 group-hover:text-neutral-900 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-neutral-500 text-sm group-hover:text-neutral-700 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-300 inline-block"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;