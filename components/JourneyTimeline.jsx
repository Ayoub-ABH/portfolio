'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { journeyItems } from '@/data/journeyData';

const JourneyTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter items based on active filter
  const filteredItems = activeFilter === 'All' 
    ? journeyItems 
    : journeyItems.filter(item => item.type === activeFilter.toLowerCase());

  // Handle navigation to journey detail page
  const navigateToDetail = (id) => {
    router.push(`/journey/${id}`);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f8f8f8]" id="journey">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-neutral-900 to-neutral-500 text-transparent bg-clip-text">
              MY JOURNEY
            </span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Professional Path</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A chronology of my education and professional experiences that have shaped my career.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          {['All', 'Education', 'Work'].map(filter => (
            <motion.button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 ${
                activeFilter === filter 
                  ? 'bg-neutral-900 text-white' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline Journey */}
        <div className="relative">
          {/* Central Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300"
          ></motion.div>

          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white border-2 border-neutral-900 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.type === 'education' ? 
                  <GraduationCap size={16} className="text-neutral-900" /> : 
                  <Briefcase size={16} className="text-neutral-900" />
                }
              </motion.div>

              {/* Content - Zigzag between left and right sides */}
              <div className={`flex ${isMobile ? 'ml-12' : ''}`}>
                {/* For left-side content on desktop (even indices) */}
                {!isMobile && index % 2 === 0 && (
                  <motion.div 
                    className="w-1/2 pr-12 text-right"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.div 
                      className="bg-white p-5 shadow-sm inline-block"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <div className="mb-2">
                        <span className="text-sm px-2 py-1 bg-neutral-100 inline-block mr-2">
                          {item.type === 'education' ? 'Education' : 'Work'}
                        </span>
                        <span className="text-sm text-neutral-500">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center justify-end gap-2 text-neutral-500 mb-3">
                        <span>{item.organization}</span>
                        <MapPin size={16} />
                      </div>
                      <p className="text-neutral-600 mb-4">{item.description}</p>
                      <motion.button 
                        onClick={() => navigateToDetail(item.id)}
                        className="inline-flex items-center gap-1 text-neutral-900 group"
                        onHoverStart={() => setHoveredId(item.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        animate={{
                          x: hoveredId === item.id ? -5 : 0
                        }}
                      >
                        Read More
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}

                {/* Empty div for even indices on desktop (right side) */}
                {!isMobile && index % 2 === 0 && <div className="w-1/2"></div>}

                {/* Empty div for odd indices on desktop (left side) */}
                {!isMobile && index % 2 !== 0 && <div className="w-1/2"></div>}

                {/* For right-side content on desktop (odd indices) or all content on mobile */}
                {(isMobile || index % 2 !== 0) && (
                  <motion.div 
                    className={isMobile ? 'w-full' : 'w-1/2 pl-12'}
                    initial={{ x: isMobile ? 20 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.div 
                      className="bg-white p-5 shadow-sm"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <div className="mb-2">
                        <span className="text-sm px-2 py-1 bg-neutral-100 inline-block mr-2">
                          {item.type === 'education' ? 'Education' : 'Work'}
                        </span>
                        <span className="text-sm text-neutral-500">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-neutral-500 mb-3">
                        <MapPin size={16} />
                        <span>{item.organization}</span>
                      </div>
                      <p className="text-neutral-600 mb-4">{item.description}</p>
                      <motion.button 
                        onClick={() => navigateToDetail(item.id)}
                        className="inline-flex items-center gap-1 text-neutral-900 group"
                        onHoverStart={() => setHoveredId(item.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        animate={{
                          x: hoveredId === item.id ? 5 : 0
                        }}
                      >
                        Read More
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;