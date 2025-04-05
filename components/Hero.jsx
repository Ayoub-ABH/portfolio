// components/Hero.js
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Code, Sparkles, ChevronRight } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen pt-32 bg-white overflow-hidden relative flex justify-center items-center">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-[#f8f8f8] rounded-full blur-3xl opacity-60"
          style={{
            x: mousePosition.x * 0.05 - 400,
            y: mousePosition.y * 0.05 - 400,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-8 relative">
            {/* Greeting Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#f3f3f3] px-6 py-3 group cursor-default hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-sm font-medium text-neutral-900">
                HELLO I'M OTHMANE BOUCHTA
              </span>
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.div>
            </motion.div>

            {/* Title */}
            <div className="space-y-1">
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <h1 className="text-[52px] md:text-[64px] font-bold leading-tight flex items-center gap-4">
                  CREATIVE
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="text-neutral-400" size={40} />
                  </motion.div>
                </h1>
              </motion.div>

              <motion.div
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <h1 className="text-[52px] md:text-[64px] font-bold leading-tight">
                  DEVELOPER
                </h1>
              </motion.div>

              <motion.p
                className="text-neutral-600 text-lg max-w-lg mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transforming ideas into elegant digital experiences through
                clean code and minimalist design.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              {[
                { number: 3, suffix: "+", label: "Years Experience" },
                { number: 20, suffix: "+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.03)] px-8 py-4 group hover:bg-neutral-900 transition-all duration-500 cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl font-bold group-hover:text-white transition-colors">
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-neutral-600 text-sm group-hover:text-neutral-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <a href="/#projects">
                <motion.button
                  className="w-full relative bg-neutral-900 text-white px-8 py-3.5 group overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * 3 }}
                >
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span>View My Works</span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-neutral-800 transform translate-y-[101%] transition-transform duration-300 group-hover:translate-y-0" />
                </motion.button>
              </a>

              <a href="#contact">
                <motion.button
                  className="relative px-8 py-3.5 group overflow-hidden bg-white border border-neutral-200 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * 3 }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-neutral-100 transform -translate-y-[101%] transition-transform duration-300 group-hover:translate-y-0" />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            className="relative w-full max-w-[500px] justify-self-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image Container */}
            <div className="relative h-[600px] group">
              <motion.div
                className="absolute inset-0 bg-[#f3f3f3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <img
                src="/hero.JPG"
                alt="Othmane BOUCHTA"
                className="relative w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Floating Badges */}
            {[
              { top: -6, right: -6, count: 3, label: "Years Experience" },
              {
                bottom: -6,
                left: -6,
                count: 20,
                suffix: "+",
                label: "Happy Clients",
              },
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                className="absolute bg-white shadow-lg px-6 py-3 cursor-default"
                style={{
                  top: badge.top,
                  right: badge.right,
                  bottom: badge.bottom,
                  left: badge.left,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.p className="text-2xl font-bold">
                  <CountUp
                    end={badge.count}
                    suffix={badge.suffix || ""}
                    duration={2}
                  />
                </motion.p>
                <p className="text-sm text-neutral-600">{badge.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
