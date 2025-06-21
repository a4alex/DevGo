// components/LoadingScreen.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <motion.div 
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
        <div className="relative w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">DG</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-8 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        DevGo.in
      </motion.div>
      
      <motion.div 
        className="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '12rem' }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;