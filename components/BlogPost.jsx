'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, MessageCircle, Heart, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useRouter } from "next/navigation";

const BlogPost = ({ post }) => {
  const router = useRouter();
  
  // Dummy content for demonstration
  const dummyContent = {
    introduction: "In this article, we'll explore the exciting developments in web development that are shaping the industry in 2024 and beyond. From new frameworks to emerging technologies, there's a lot to keep up with in this rapidly evolving field.",
    
    sections: [
      {
        title: "The Rise of AI-Driven Development",
        content: "Artificial intelligence is revolutionizing how we approach web development. From code generation to automated testing, AI tools are becoming indispensable parts of the modern developer's toolkit.\n\nFrameworks like Next.js are incorporating AI features to help developers write cleaner, more efficient code. These tools can analyze your codebase, suggest improvements, and even automatically fix certain types of bugs.\n\nAs AI continues to advance, we can expect to see even more intelligent assistance in our development workflows. This doesn't mean developers will be replaced—rather, their roles will evolve to focus more on creativity and problem-solving while AI handles the more repetitive aspects of coding."
      },
      {
        title: "Web Performance Optimization",
        content: "Performance has always been important, but in 2024 it's becoming a critical differentiator. With Core Web Vitals influencing search rankings and user expectations rising, optimizing your web applications for speed is no longer optional.\n\nModern frameworks are focusing heavily on this aspect, with tools like Next.js and Remix prioritizing server-side rendering and intelligent code splitting. Meanwhile, new image formats and lazy-loading techniques are helping to further reduce page load times.\n\nBrowsers are also evolving to provide better performance metrics and debugging tools, making it easier for developers to identify and fix bottlenecks in their applications."
      },
      {
        title: "The Evolution of Component-Based Architecture",
        content: "Component-based architecture has been around for a while, but it's continuously evolving. The latest trend is the development of more specialized, reusable components that can be shared across projects and teams.\n\nComponent libraries like Shadcn UI are gaining popularity for their flexibility and customization options. These libraries provide a solid foundation while allowing developers to tailor components to their specific needs.\n\nWe're also seeing more focus on accessibility in component design, ensuring that web applications can be used by everyone regardless of their abilities or disabilities."
      }
    ],
    
    conclusion: "The future of web development is exciting and full of possibilities. By staying informed about emerging trends and technologies, developers can position themselves at the forefront of innovation. Whether you're a seasoned professional or just starting your journey, there's never been a better time to be in web development."
  };
  
  // If post is not provided, use a default structure
  const blogPost = post || {
    id: 1,
    title: "The Future of Web Development: 2024 and Beyond",
    image: "/blogs/1.png",
    category: "Development",
    date: "Feb 20, 2024",
    readTime: "5 min read",
    author: "Othmane BOUCHTA",
    authorImage: "/blogs/othmane.png",
    tags: ['Next.js', 'React', 'Web3'],
    content: dummyContent
  };
  
  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => router.push('/blog')}
          className="flex items-center gap-2 mb-12 text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </motion.button>
        
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {blogPost.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-neutral-100 text-sm text-neutral-600">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-8">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {blogPost.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {blogPost.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              {blogPost.author}
            </div>
          </div>
        </motion.div>
        
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 overflow-hidden"
        >
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover"
            loading="eager"
          />
        </motion.div>
        
        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p className="text-lg leading-relaxed mb-8">{blogPost.content.introduction}</p>
          
          {blogPost.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">{paragraph}</p>
              ))}
            </div>
          ))}
          
          <p className="text-lg leading-relaxed mt-8">{blogPost.content.conclusion}</p>
        </motion.div>
        
        {/* Social Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-b border-neutral-200 mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-neutral-600">Share this article:</span>
            <div className="flex gap-2">
              <button className="p-2 bg-neutral-100 hover:bg-neutral-200 transition-colors">
                <Facebook size={18} />
              </button>
              <button className="p-2 bg-neutral-100 hover:bg-neutral-200 transition-colors">
                <Twitter size={18} />
              </button>
              <button className="p-2 bg-neutral-100 hover:bg-neutral-200 transition-colors">
                <Linkedin size={18} />
              </button>
              <button className="p-2 bg-neutral-100 hover:bg-neutral-200 transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
              <Heart size={18} />
              <span>124</span>
            </button>
            <button className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
              <MessageCircle size={18} />
              <span>23 Comments</span>
            </button>
            <button className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
              <Bookmark size={18} />
              <span>Save</span>
            </button>
          </div>
        </motion.div>
        
        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 mb-16 flex flex-col md:flex-row items-center gap-8"
        >
          <img
            src={blogPost.authorImage}
            alt={blogPost.author}
            className="w-24 h-24 rounded-full object-cover"
          />
          
          <div>
            <h3 className="text-xl font-bold mb-2">About {blogPost.author}</h3>
            <p className="text-neutral-600 mb-4">
              Web developer and designer specializing in modern JavaScript frameworks and UI/UX design. Passionate about creating intuitive, accessible, and performant web experiences.
            </p>
            <button className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
              View All Posts
            </button>
          </div>
        </motion.div>
        
        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">You might also like</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: 2,
                title: "Mastering Modern UI/UX Design Principles",
                excerpt: "Essential principles and practices for creating outstanding user experiences...",
                image: "/blogs/2.png",
                date: "Feb 15, 2024",
              },
              {
                id: 3,
                title: "Building Scalable Applications with Next.js",
                excerpt: "A comprehensive guide to creating performant applications using Next.js...",
                image: "/blogs/3.png",
                date: "Feb 10, 2024",
              }
            ].map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="group cursor-pointer bg-white p-6"
                onClick={() => router.push(`/blog/${relatedPost.id}`)}
              >
                <div className="relative overflow-hidden mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-[200px] object-cover"
                    />
                  </motion.div>
                </div>
                
                <h4 className="text-lg font-bold mb-2 group-hover:text-neutral-700 transition-colors">
                  {relatedPost.title}
                </h4>
                
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                  <Calendar size={14} />
                  {relatedPost.date}
                </div>
                
                <p className="text-neutral-600 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;