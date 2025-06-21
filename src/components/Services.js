// components/Services.js
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Portfolio Websites",
      description: "Showcase your work professionally with our custom portfolio designs that highlight your skills and projects.",
      icon: "🎨",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Personal Websites",
      description: "Create your personal brand online with a website that reflects your personality and professional identity.",
      icon: "👤",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Static Websites",
      description: "Fast, secure, and affordable static websites perfect for small businesses and personal projects.",
      icon: "⚡",
      color: "from-green-600 to-teal-500"
    },
    {
      title: "Business Landing Pages",
      description: "Convert visitors into customers with high-converting landing pages designed for your business goals.",
      icon: "🏢",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Website Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a range of website services tailored to your needs, all at India's most affordable prices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-6 hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;