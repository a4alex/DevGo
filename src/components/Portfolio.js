// components/Portfolio.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'portfolio', name: 'Portfolio Sites' },
    { id: 'personal', name: 'Personal Sites' },
    { id: 'business', name: 'Business Sites' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Photographer Portfolio",
      category: "portfolio",
      description: "Elegant portfolio for a professional photographer showcasing his best work."
    },
    {
      id: 2,
      title: "Artist Showcase",
      category: "portfolio",
      description: "Vibrant website for a digital artist featuring galleries and shop integration."
    },
    {
      id: 3,
      title: "Personal Blog",
      category: "personal",
      description: "Minimalist personal blog with clean typography and responsive design."
    },
    {
      id: 4,
      title: "Freelancer Portfolio",
      category: "personal",
      description: "Professional portfolio for a freelance designer highlighting services and projects."
    },
    {
      id: 5,
      title: "Local Restaurant",
      category: "business",
      description: "Menu-focused website for a family restaurant with online reservation system."
    },
    {
      id: 6,
      title: "Fitness Trainer",
      category: "business",
      description: "Dynamic website for a personal trainer with booking functionality."
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Creative Work</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse through our portfolio of satisfied customers and see the quality we deliver.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 h-48 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 capitalize">{project.category}</span>
                  <motion.button 
                    className="text-sm bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded-full transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;