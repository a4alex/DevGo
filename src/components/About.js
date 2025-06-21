// components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: "500+", label: "Websites Created" },
    { value: "95%", label: "Satisfied Clients" },
    { value: "₹4999", label: "Starting Price" },
    { value: "48hr", label: "Avg. Delivery" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-purple-500 rounded-xl"></div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  At DevGo.in, we believe every individual and business deserves a professional online presence without breaking the bank. We're on a mission to make high-quality websites accessible to everyone in India.
                </p>
                <p className="text-gray-300">
                  Founded in 2023, we've helped hundreds of clients establish their digital footprint with stunning, responsive websites at the most competitive prices in the market.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">DevGo.in</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're a team of passionate web developers and designers dedicated to creating beautiful, functional websites at affordable prices.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;