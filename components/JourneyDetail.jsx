'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { journeyItems } from '@/data/journeyData';

const JourneyDetail = ({ item }) => {
  const router = useRouter();
  const [nextItem, setNextItem] = useState(null);
  const [prevItem, setPrevItem] = useState(null);
  
  React.useEffect(() => {
    if (!item) return;
    
    // Find next and previous items for navigation
    const currentIndex = journeyItems.findIndex(journey => journey.id === item.id);
    if (currentIndex > 0) {
      setPrevItem(journeyItems[currentIndex - 1]);
    }
    if (currentIndex < journeyItems.length - 1) {
      setNextItem(journeyItems[currentIndex + 1]);
    }
  }, [item]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
        <p className="text-xl text-neutral-600">Journey item not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen pt-24 pb-16">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Journey</span>
        </motion.button>

        {/* Content Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-8 mb-8 shadow-sm"
        >
          <div className="mb-4">
            <span className="px-3 py-1 bg-neutral-100 text-sm font-medium rounded">
              {item.type === 'education' ? 'EDUCATION' : 'WORK EXPERIENCE'}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>

          <div className="flex flex-wrap gap-6 text-neutral-600 mb-6">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{item.organization}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{item.period}</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {item.tags.map((tag, index) => (
              <motion.span 
                key={tag} 
                className="px-3 py-1 bg-neutral-100 text-sm text-neutral-600 rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Image - No scaling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 bg-white p-4 shadow-sm"
        >
          <img
            src={item.image || "/placeholder-image.jpg"}
            alt={item.title}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 shadow-sm"
        >
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10"
          >
            <p className="text-lg leading-relaxed text-neutral-700 border-l-4 border-neutral-900 pl-4 italic">
              {item.content.introduction}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {item.content.sections.map((section, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-200">{section.title}</h2>
                <div className="text-neutral-700 space-y-4">
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <motion.p 
                      key={i} 
                      className="leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-neutral-100 p-6 rounded"
          >
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-neutral-700 leading-relaxed">{item.content.conclusion}</p>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {/* Previous button */}
          <div className="col-span-1">
            {prevItem && (
              <motion.button
                onClick={() => router.push(`/journey/${prevItem.id}`)}
                className="group flex flex-col items-start text-left"
                whileHover={{ x: -5 }}
              >
                <span className="flex items-center gap-1 text-sm text-neutral-500 mb-1">
                  <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Previous
                </span>
                <span className="font-medium text-neutral-900">{prevItem.title}</span>
              </motion.button>
            )}
          </div>
          
          {/* Center button */}
          <div className="col-span-1 flex justify-center items-center">
            <motion.button
              onClick={() => router.push('/journey')}
              className="bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              All Experiences
            </motion.button>
          </div>
          
          {/* Next button */}
          <div className="col-span-1 flex justify-end">
            {nextItem && (
              <motion.button
                onClick={() => router.push(`/journey/${nextItem.id}`)}
                className="group flex flex-col items-end text-right"
                whileHover={{ x: 5 }}
              >
                <span className="flex items-center gap-1 text-sm text-neutral-500 mb-1">
                  Next
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-medium text-neutral-900">{nextItem.title}</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;