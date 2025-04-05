// components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter, Code } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/80 backdrop-blur-sm border-b border-neutral-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="relative group">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Logo Mark */}
              <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-lg mr-3 overflow-hidden group-hover:bg-neutral-800 transition-colors">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: scrolled ? 0 : 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Code size={20} className="text-white" />
                </motion.div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-neutral-900 tracking-tight">Othmane</span>
                <span className="text-xs text-neutral-500 tracking-widest uppercase -mt-1">Developer</span>
              </div>
              
              {/* Animated Underline */}
              <motion.div 
                className="absolute -bottom-2 left-0 h-0.5 bg-neutral-900 w-0 group-hover:w-full" 
                transition={{ duration: 0.3 }}
                layoutId="navbarUnderline"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[{
              name: "Home",
              link: "/",
            }, {
              name: "About",
              link: "/#about",
            }, {
              name: "Projects",
              link: "/#projects",
            }, 
            {
              name: "Journey",
              link: "/#journey",
            },{
              name: "Blog",
              link: "/#blog",
            }, {
              name: "Contact",
              link: "/#contact",
            }].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="relative group py-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <motion.a
                href="https://github.com/0thmanee/"
                target="_blank"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/othmane-bouchta-6b5a07255/"
                target="_blank"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
            <motion.a 
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-neutral-900 text-white px-6 py-2 hover:bg-neutral-800 transition-colors duration-300">
                Let's Talk
              </button>
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 text-neutral-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {[{
              name: "Home",
              link: "/",
            }, {
              name: "About",
              link: "/#about",
            }, {
              name: "Projects",
              link: "/#projects",
            }, 
            {
              name: "Journey",
              link: "/#journey",
            },{
              name: "Blog",
              link: "/#blog",
            }, {
              name: "Contact",
              link: "/#contact",
            }].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-xl text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://github.com/0thmanee/"
                target="_blank"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/othmane-bouchta-6b5a07255/"
                target="_blank"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;