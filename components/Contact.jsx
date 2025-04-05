import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@Othmanebouchta.com',
      link: 'mailto:contact@Othmanebouchta.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 234 567 890',
      link: 'tel:+1234567890'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, USA'
    }
  ];

  return (
    <section className="py-24 bg-[#fcfcfc] relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-neutral-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-neutral-900 to-neutral-500 text-transparent bg-clip-text">
              GET IN TOUCH
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6">Let's Talk</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something exceptional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-neutral-600">
                Feel free to reach out through any of the following channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-500">{info.title}</h4>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, link: '#', label: 'LinkedIn' },
                  { Icon: Github, link: '#', label: 'GitHub' },
                  { Icon: Twitter, link: '#', label: 'Twitter' }
                ].map(({ Icon, link, label }) => (
                  <motion.a
                    key={label}
                    href={link}
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 bg-white flex items-center justify-center hover:bg-neutral-900 group transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;