// components/Pricing.js
import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹4,999",
      description: "Perfect for personal websites or simple portfolios",
      features: ["1-3 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Revision"],
      popular: false,
      color: "from-blue-600 to-cyan-500"
    },
    {
      name: "Professional",
      price: "₹8,999",
      description: "Ideal for freelancers and small businesses",
      features: ["Up to 5 Pages", "Custom Design", "Advanced SEO", "Contact Form + Social Links", "3 Revisions", "Basic CMS"],
      popular: true,
      color: "from-purple-600 to-indigo-600"
    },
    {
      name: "Premium",
      price: "₹14,999",
      description: "For businesses needing advanced features",
      features: ["Up to 10 Pages", "Premium Design", "Advanced SEO + Analytics", "Custom Features", "5 Revisions", "Full CMS", "1 Month Support"],
      popular: false,
      color: "from-pink-600 to-purple-600"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Affordable <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            High-quality websites at prices that beat the competition. No hidden fees.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-gray-800/50 backdrop-blur-md rounded-xl border ${
                plan.popular ? 'border-purple-500 relative' : 'border-gray-700'
              } overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${
                    plan.popular ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500' : 'text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;