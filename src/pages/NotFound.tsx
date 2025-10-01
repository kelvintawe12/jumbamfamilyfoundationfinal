import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Heart, HelpCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-4"
    >
      <div className="text-center max-w-md mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100 
          }}
          className="mb-8"
        >
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-4xl mb-4"
          >
            <Heart className="w-16 h-16 text-red-400 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Oops! It seems like you've wandered off the path of hope. 
            The page you're looking for doesn't exist, but our mission 
            to restore hope in Cameroon continues.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/story"
              className="inline-flex items-center px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Our Story
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Get Help
            </Link>
          </div>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link 
              to="/crisis" 
              className="text-primary hover:text-primary/80 underline"
            >
              Crisis Response
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/impact" 
              className="text-primary hover:text-primary/80 underline"
            >
              Our Impact
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/donate" 
              className="text-primary hover:text-primary/80 underline"
            >
              Donate
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/news" 
              className="text-primary hover:text-primary/80 underline"
            >
              Latest News
            </Link>
          </div>
        </motion.div>

        {/* Hope Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20"
        >
          <p className="text-sm text-gray-600 italic">
            "Even when we lose our way, hope guides us back to purpose."
          </p>
          <p className="text-xs text-gray-500 mt-1">
            — Jumbam Family Foundation
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;