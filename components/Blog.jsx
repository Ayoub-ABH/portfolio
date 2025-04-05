'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, Search, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { blogPosts } from '@/data/blogData';

const Blog = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const router = useRouter();

  const filters = ['All', 'Development', 'Design', 'Tutorial', 'Technology'];

  // Handle navigation to individual blog post
  const navigateToBlogPost = (id) => {
    router.push(`/blog/${id}`);
  };

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  // Find featured post
  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];

  return (
    <section className="py-24 bg-[#fcfcfc]" id="blog">
      <div className="max-w-[1400px] mx-auto px-6">
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
              LATEST ARTICLES
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold mb-6">My Blog</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Search */}
          <motion.div 
            className="relative w-full md:w-80"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 pr-10 bg-white border border-neutral-200 focus:outline-none focus:border-neutral-900 transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 mb-20 group cursor-pointer"
            onClick={() => navigateToBlogPost(featuredPost.id)}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-[400px] object-contain"
                    loading="eager"
                  />
                </motion.div>
                <div className="absolute top-4 left-4 px-4 py-2 bg-neutral-900 text-white text-sm">
                  FEATURED POST
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-neutral-100 text-sm text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold group-hover:text-neutral-700 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <div className="flex items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredPost.date}
                  </div>
                </div>
                
                <p className="text-neutral-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <motion.div
                  className="inline-flex items-center gap-2 text-neutral-900 group/link"
                  whileHover={{ x: 10 }}
                >
                  Read Article
                  <ChevronRight className="group-hover/link:translate-x-2 transition-transform" size={18} />
                </motion.div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || post !== featuredPost).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(post.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => navigateToBlogPost(post.id)}
              className="group cursor-pointer bg-white p-6"
            >
              <div className="relative overflow-hidden mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[250px] object-contain"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute top-4 left-4 px-4 py-2 bg-neutral-900 text-white text-sm">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-neutral-100 text-sm text-neutral-600">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-neutral-700 transition-colors">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {post.date}
                </div>
              </div>
              
              <p className="text-neutral-600 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              
              <motion.div
                animate={{
                  x: hoveredId === post.id ? 10 : 0
                }}
                className="inline-flex items-center gap-2 text-neutral-900"
              >
                Read Article
                <ChevronRight size={18} />
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-20 bg-neutral-900 p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Get the latest articles, tutorials, and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-neutral-900 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;