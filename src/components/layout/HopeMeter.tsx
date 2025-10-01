import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Home, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Users, 
  Newspaper, 
  MessageCircle,
  Sparkles,
  Star
} from 'lucide-react';

interface RouteInfo {
  path: string;
  icon: React.ComponentType<any>;
  label: string;
  description: string;
}

export const HopeMeter: React.FC = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const routes: RouteInfo[] = [
    { path: '/', icon: Home, label: 'Home', description: 'Welcome to our mission' },
    { path: '/story', icon: BookOpen, label: 'Our Story', description: 'Learn about our journey' },
    { path: '/model', icon: Target, label: 'Our Model', description: 'How we create change' },
    { path: '/impact', icon: TrendingUp, label: 'Impact', description: 'See our results' },
    { path: '/crisis', icon: Heart, label: 'Crisis Info', description: 'Understanding the situation' },
    { path: '/core-areas', icon: Users, label: 'Core Areas', description: 'Our focus areas' },
    { path: '/news', icon: Newspaper, label: 'News', description: 'Latest updates' },
    { path: '/contact', icon: MessageCircle, label: 'Contact', description: 'Get in touch' }
  ];

  // Update progress based on current page
  useEffect(() => {
    const currentIndex = routes.findIndex(route => route.path === location.pathname);
    if (currentIndex >= 0) {
      setCurrentRouteIndex(currentIndex);
      setProgress(((currentIndex + 1) / routes.length) * 100);
    }
  }, [location]);

  // Auto-hide on scroll (optional enhancement)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(true), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const currentRoute = routes[currentRouteIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Current Page Indicator */}
          <motion.div 
            className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 mb-4 border border-gray-100"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                <currentRoute.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-slate-800 font-semibold text-sm">
                {currentRoute.label}
              </div>
            </div>
            <div className="text-xs text-gray-600 pl-11 max-w-32">
              {currentRoute.description}
            </div>
            
            {/* Progress indicator */}
            <div className="flex items-center space-x-2 mt-3 pl-11">
              <div className="text-xs text-gray-500">
                {currentRouteIndex + 1}/{routes.length}
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentRouteIndex + 1) / routes.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Main Progress Bar */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Background bar */}
            <div className="h-64 w-3 bg-white/30 backdrop-blur-sm rounded-full relative overflow-hidden shadow-lg border border-white/20">
              {/* Animated progress fill */}
              <AnimatePresence>
                <motion.div
                  key={progress}
                  className="absolute bottom-0 w-full bg-gradient-to-t from-yellow-500 via-yellow-500 to-yellow-400 rounded-full relative overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: `${progress}%`, 
                    opacity: 1 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1],
                    opacity: { duration: 0.3 }
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                  />
                  
                  {/* Sparkle effect at the top */}
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Route markers */}
              {routes.map((route, index) => {
                const position = ((index + 1) / routes.length) * 100;
                const isActive = index <= currentRouteIndex;
                const isCurrent = index === currentRouteIndex;
                
                return (
                  <motion.div
                    key={route.path}
                    className={`absolute w-6 h-6 transform -translate-x-1/2 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-white border-yellow-500 shadow-lg' 
                        : 'bg-white/50 border-gray-300'
                    }`}
                    style={{ 
                      bottom: `${position}%`,
                      left: '50%',
                      marginBottom: '-12px'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isCurrent ? 1.3 : 1, 
                      opacity: 1 
                    }}
                    transition={{ 
                      delay: index * 0.1 + 0.7,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.4 }}
                  >
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${
                      isActive ? 'text-yellow-600' : 'text-gray-400'
                    }`}>
                      <route.icon className="w-3 h-3" />
                    </div>
                    
                    {/* Pulse effect for current route */}
                    {isCurrent && (
                      <motion.div
                        className="absolute inset-0 rounded-full border border-yellow-500"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
                  animate={{
                    y: [-20, -80],
                    x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeOut"
                  }}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    bottom: `${progress - 10}%`
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Hope Quote */}
          <motion.div 
            className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-3 rounded-xl mt-4 shadow-lg max-w-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: -2 }}
          >
            <div className="flex items-center space-x-2 mb-1">
              <Star className="w-3 h-3 text-yellow-500" />
              <span className="text-xs font-semibold">Hope Meter</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              "Every step brings us closer to restored hope"
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
