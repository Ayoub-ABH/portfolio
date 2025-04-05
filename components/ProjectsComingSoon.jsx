import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Construction, ArrowRight } from 'lucide-react';

const ProjectsComingSoon = () => {
  return (
    <section className="py-24 bg-white relative" id="projects">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-sm font-medium text-neutral-400">MY WORK</span>
            <div className="h-[1px] w-20 bg-neutral-200" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-neutral-600 text-lg max-w-2xl">
            A collection of projects that showcase my skills and experience in creating innovative digital solutions.
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div 
          className="flex flex-col items-center justify-center py-32 bg-neutral-50 border border-dashed border-neutral-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Construction size={64} className="text-neutral-400 mb-6" />
          
          <h3 className="text-3xl font-bold mb-3 text-neutral-800">Coming Soon</h3>
          <p className="text-neutral-600 text-center max-w-md mb-8">
            Our projects section is currently under development. We're working hard to showcase our best work here soon.
          </p>
          
          <div className="flex items-center gap-2 text-neutral-500">
            <Clock size={18} />
            <span>Check back in a few days</span>
          </div>

          {/* Optional Newsletter Signup */}
          <div className="mt-12 p-6 bg-white border border-neutral-200 w-full max-w-xl">
            <h4 className="text-lg font-semibold mb-4">Get notified when we launch</h4>
            <div className="flex flex-col md:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
              <button className="bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition-colors flex items-center justify-between gap-2">
                <span>Notify Me</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsComingSoon;