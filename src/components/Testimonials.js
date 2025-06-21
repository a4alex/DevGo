// components/Testimonials.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Photographer",
      content: "DevGo.in created my photography portfolio at an unbelievable price. The website is beautiful and has helped me get more clients. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Freelance Designer",
      content: "I needed a personal website to showcase my design work. DevGo.in delivered beyond my expectations. The site is modern, fast, and perfectly represents my brand.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Restaurant Owner",
      content: "Our restaurant website made by DevGo.in has significantly increased our online orders. The team was professional and delivered exactly what we wanted at a fraction of what others quoted.",
      rating: 4
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Satisfied <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Customers</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Hear what our customers have to say about our services.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                <span className="text-4xl">👤</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.p 
              className="text-xl text-gray-300 text-center italic"
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              "{testimonials[activeIndex].content}"
            </motion.p>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button 
              className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;