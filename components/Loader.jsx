import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const name = "AYOUB AIT BABA HAMOU".split("");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%",
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const circleVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative px-4 w-full max-w-lg">
        {/* Animated Name */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center mb-8 relative z-10"
        >
          {name.map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold inline-block ${
                char === " " ? "mx-1 sm:mx-2" : "mx-0.5 sm:mx-1"
              }`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-neutral-100 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-neutral-900"
            variants={progressVariants}
            initial="initial"
            animate="animate"
          />
        </div>

        {/* Animated Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border border-neutral-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={circleVariants}
            animate="animate"
          />
          
          <motion.div
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border border-neutral-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={pulseVariants}
            animate="animate"
          />
        </div>
      </div>

      {/* Loading Text */}
      <motion.p
        className="text-neutral-400 mt-8 text-sm tracking-widest"
        animate={{
          opacity: [0.4, 1, 0.4],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
};

export default Loader;