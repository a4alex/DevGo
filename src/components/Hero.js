// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-2">Premium Websites</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              At India's Lowest Prices
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            DevGo.in creates stunning portfolio websites, personal sites, and static web pages at prices that won't break your budget. We make professional web presence accessible to everyone.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Website
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-purple-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 p-8 shadow-2xl">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="bg-gray-800 h-8 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-500 aspect-video rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Portfolio</span>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-500 aspect-video rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Business</span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-500 aspect-video rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Personal</span>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">Your Perfect Website</h3>
                      <p className="text-gray-400">Starting at ₹4999</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;