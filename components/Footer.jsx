'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Development',
    'Consulting'
  ];

  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.a 
              href="/"
              className="text-2xl font-bold inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Othmane
            </motion.a>
            <p className="text-neutral-400 leading-relaxed">
              Creating exceptional digital experiences through innovative web development and design solutions.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="p-2 bg-neutral-800 hover:bg-white hover:text-neutral-900 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <a 
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {service}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              {[
                { Icon: Mail, text: 'contact@Othmanebouchta.com', href: 'mailto:contact@Othmanebouchta.com' },
                { Icon: Phone, text: '+1 234 567 890', href: 'tel:+1234567890' },
                { Icon: MapPin, text: 'New York, USA', href: '#' }
              ].map(({ Icon, text, href }) => (
                <motion.li key={text} whileHover={{ x: 5 }}>
                  <a 
                    href={href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center gap-3"
                  >
                    <Icon size={16} />
                    {text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-neutral-800 pt-16 pb-8 mb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-semibold">Subscribe to My Newsletter</h3>
            <p className="text-neutral-400">
              Get the latest updates on my projects and articles delivered straight to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-neutral-900 hover:bg-neutral-200 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {currentYear} Othmane BOUCHTA. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;