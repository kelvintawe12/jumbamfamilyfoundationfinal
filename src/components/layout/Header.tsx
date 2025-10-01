import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Heart, Sparkles, Star } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  
  // Enhanced scroll animations
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -5]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0.95, 1]);

  useEffect(() => {
    // Close mobile menu when changing routes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Body scroll lock effect
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Premium animation variants
  const headerVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const logoVariants = {
    hidden: { 
      x: -50, 
      opacity: 0,
      rotate: -10
    },
    visible: { 
      x: 0, 
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const navItemVariants = {
    hidden: { 
      y: -20, 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const donateButtonVariants = {
    hidden: { 
      scale: 0, 
      opacity: 0,
      rotate: -90
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.8
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)",
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    tap: { scale: 0.95 }
  };

  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/story', label: 'Story' },
    { path: '/model', label: 'Model' },
    { path: '/impact', label: 'Impact' },
    { path: '/crisis', label: 'Crisis' },
    { path: '/core-areas', label: 'Core Areas' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      style={{ y: headerY, opacity: headerOpacity }}
      className="fixed top-0 w-full z-[10000] bg-secondary/95 backdrop-blur-sm shadow-xl border-b border-primary/20"
    >
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M30 30v30h30v-30H30zm15 15l7.5 7.5v7.5h-7.5v-7.5l-7.5-7.5zm0 0V15l7.5-7.5h7.5v7.5l-7.5 7.5z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Sparkles */}
      <motion.div 
        className="absolute top-2 left-20 text-primary/30"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Sparkles size={16} />
      </motion.div>
      
      <motion.div 
        className="absolute top-3 right-32 text-primary/20"
        animate={{ 
          y: [0, -8, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Star size={12} />
      </motion.div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative overflow-hidden rounded-xl"
              variants={logoVariants}
              whileHover="hover"
            >
              <motion.img 
                src="/image.png" 
                alt="JFF Logo" 
                className="h-12 w-auto transition-all duration-300 hover:brightness-110"
              />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
            
            <motion.div
              variants={logoVariants}
              className="space-y-1"
            >
              <motion.span 
                className="text-white font-heading font-bold text-xl tracking-wider block"
                whileHover={{ color: "#FFD700" }}
                transition={{ duration: 0.3 }}
                style={{ 
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility'
                }}
              >
                Jumbam Family Foundation
              </motion.span>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center space-x-8"
            variants={navVariants}
            style={{ 
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.path}
                variants={navItemVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredNav(item.path)}
                onHoverEnd={() => setHoveredNav(null)}
              >
                <Link 
                  to={item.path} 
                  className={`relative font-heading font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-white hover:text-primary hover:bg-primary/5'
                  }`}
                  style={{ 
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility',
                    transform: 'translateZ(0)' // Force hardware acceleration without blur
                  }}
                >
                  {item.label}
                  
                  {/* Active Indicator */}
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <AnimatePresence>
                    {hoveredNav === item.path && !isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}

            {/* Enhanced Donate Button */}
            <motion.div
              variants={donateButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                to="/donate" 
                className="bg-primary hover:bg-primary/90 text-secondary py-3 px-6 rounded-xl font-heading font-bold flex items-center shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <Heart size={18} className="mr-2 relative z-10" />
                <span className="relative z-10">Support Now</span>
                
                {/* Floating Heart */}
                <motion.div
                  className="absolute top-1 right-1 text-secondary/30"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart size={12} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.nav>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              transform: 'translateZ(0)'
            }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Dark Blue Modal Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
             className="lg:hidden fixed inset-0 bg-black/70 z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'fixed' }}
            />
            
            {/* Modal Dropdown */}
            <motion.div
              className="lg:hidden fixed top-20 left-4 right-4 shadow-2xl border border-yellow-400/40 rounded-2xl z-[9999] max-h-[80vh] overflow-y-auto backdrop-blur-sm"
              style={{ 
              position: 'fixed', 
              zIndex: 9999,
              background: 'linear-gradient(135deg, #23272e 0%, #FFD700 200%)'
              }}
              initial={{ 
              scale: 0.9,
              opacity: 0,
              y: -20
              }}
              animate={{ 
              scale: 1,
              opacity: 1,
              y: 0
              }}
              exit={{ 
              scale: 0.9,
              opacity: 0,
              y: -20
              }}
              transition={{ 
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-yellow-400/30">
              <motion.h3 
                className="text-yellow-300 font-heading font-bold text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ 
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility'
                }}
              >
                Navigation
              </motion.h3>
              <motion.button
                className="text-yellow-200 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-yellow-400/10"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
              >
                <X size={20} />
              </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
              {/* Navigation Grid */}
              <div 
                className="grid grid-cols-2 gap-3 mb-6"
                style={{ 
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility'
                }}
              >
                {navigation.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ 
                  x: index % 2 === 0 ? -30 : 30, 
                  opacity: 0,
                  scale: 0.8
                  }}
                  animate={{ 
                  x: 0, 
                  opacity: 1,
                  scale: 1
                  }}
                  exit={{ 
                  x: index % 2 === 0 ? -30 : 30, 
                  opacity: 0,
                  scale: 0.8
                  }}
                  transition={{ 
                  duration: 0.5,
                  delay: 0.1 + (index * 0.05),
                  ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ 
                  scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                  to={item.path}
                  className={`block w-full py-4 px-4 rounded-xl font-heading font-semibold text-center transition-all duration-300 relative overflow-hidden group ${
                    isActive(item.path)
                    ? 'bg-yellow-400 text-gray-900 shadow-lg border border-yellow-400'
                    : 'bg-yellow-400/10 text-yellow-100 hover:bg-yellow-400/20 hover:text-yellow-300 border border-yellow-400/20 hover:border-yellow-400/60'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility',
                    transform: 'translateZ(0)'
                  }}
                  >
                  {/* Background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {isActive(item.path) && (
                    <motion.div
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-yellow-300 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    />
                  )}
                  </Link>
                </motion.div>
                ))}
              </div>

              {/* Donate Button */}
              <motion.div
                initial={{ 
                y: 30, 
                opacity: 0,
                scale: 0.9
                }}
                animate={{ 
                y: 0, 
                opacity: 1,
                scale: 1
                }}
                exit={{ 
                y: 30, 
                opacity: 0,
                scale: 0.9
                }}
                transition={{ 
                duration: 0.5,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                to="/donate"
                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-size-200 hover:bg-pos-100 text-gray-900 py-5 px-6 rounded-xl font-heading font-bold text-lg flex items-center justify-center shadow-xl transition-all duration-500 relative overflow-hidden group"
                onClick={() => setMobileMenuOpen(false)}
                >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3
                  }}
                />
                
                <motion.div
                  className="relative z-10 flex items-center"
                  animate={{ 
                  scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                  }}
                >
                  <Heart size={22} className="mr-3 text-yellow-700" />
                  <span>Support Our Mission</span>
                </motion.div>
                </Link>
              </motion.div>

              {/* Decorative Footer */}
              <motion.div 
                className="flex justify-center items-center mt-6 pt-4 border-t border-yellow-400/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                  key={index}
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  />
                ))}
                </div>
                <motion.div
                className="ml-4 text-yellow-300/80"
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                >
                <Sparkles size={16} />
                </motion.div>
              </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};