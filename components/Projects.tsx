import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web App", "Mobile App", "UI/UX", "Other"];

  const projects = [
    {
      title: "Electrodays Website",
      description:
        "A modern and responsive website for the Electrodays event, showcasing details, schedule, and speakers.",
      media: {
        type: "video",
        src: "/projects/electrodays.mp4",
      },
      category: "Event Website",
      technologies: ["Next.js", "Tailwind CSS"],
      liveLink: "https://electrodays.vercel.app/",
      githubLink: "#",
    },
    {
      title: "My Para Cosmetics Store",
      description:
        "A sophisticated e-commerce platform for cosmetics featuring a modern design, seamless checkout process, and comprehensive product management system.",
      media: {
        type: "video",
        src: "/projects/mypara.mp4",
      },
      category: "Web App",
      technologies: ["React", "Node.js", "Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      liveLink: "https://mypara.store/",
      githubLink: "#",
    },
    {
      title: "Kick Space Store",
      description:
        "A sleek and modern e-commerce platform for sneakers, featuring an intuitive interface and seamless user experience.",
      media: {
        type: "image",
        src: "/projects/kickspace.png",
      },
      category: "Web App",
      technologies: ["Figma", "HTML", "CSS3", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "2 Bac Concours",
      description:
        "An educational platform helping Moroccan students prepare for baccalaureate exams with interactive learning materials and practice tests.",
      media: {
        type: "image",
        src: "/projects/2baconcours.png",
      },
      category: "Web App",
      technologies: ["Figma", "Next.js", "Tailwind CSS", "Sqlite", "Node.js"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Sculpt Fit Landing Page",
      description:
        "A dynamic landing page for a fitness brand with engaging animations and responsive design focused on user engagement.",
      media: {
        type: "image",
        src: "/projects/sculptfit.png",
      },
      category: "Web App",
      technologies: ["Figma", "HTML", "CSS3", "JavaScript"],
      liveLink: "https://sculptfit.netlify.app/",
      githubLink: "#",
    },
    {
      title: "Domicilia Mobile App",
      description:
        "A mobile app for booking house cleaning services, featuring a user-friendly interface, real-time tracking, and secure payment gateway.",
      media: {
        type: "video",
        src: "/projects/domicilia.mp4",
      },
      category: "Mobile App",
      technologies: ["Figma", "React Native", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
    
            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-neutral-900 text-white'
                      : 'bg-[#f3f3f3] text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
    
            {/* Projects Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Project Media (Image or Video) */}
                  <div className="relative overflow-hidden bg-neutral-100">
                    {project.media.type === "image" ? (
                      <div className="relative w-full h-[300px]">
                        <Image
                          src={project.media.src}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <video
                        src={project.media.src}
                        className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                        autoPlay
                        loop
                        muted
                      />
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <a 
                          href={project.liveLink}
                          className="p-2 bg-white text-neutral-900 hover:bg-neutral-200 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a 
                          href={project.githubLink}
                          className="p-2 bg-white text-neutral-900 hover:bg-neutral-200 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
    
                  {/* Project Info */}
                  <div className="mt-6 space-y-4">
                    <h3 className="text-2xl font-semibold group-hover:text-neutral-900">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#f3f3f3] text-sm text-neutral-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
    
                    {/* View Project Link */}
                    <motion.a
                      href={project.liveLink}
                      className="inline-flex items-center gap-2 text-neutral-900 hover:gap-4 transition-all group/link"
                    >
                      View Project
                      <ArrowRight className="group-hover/link:translate-x-2 transition-transform" size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      );
};

export default Projects;
