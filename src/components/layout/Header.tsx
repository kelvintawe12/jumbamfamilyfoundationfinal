import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Heart, Sparkles, Star, ChevronDown, Users, GraduationCap, Building, BookOpen, HeartHandshake, Phone } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

interface SubNavItem {
  path: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  path?: string;
  label: string;
  subItems?: SubNavItem[];
  icon?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Enhanced scroll animations
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -5]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0.95, 1]);

  useEffect(() => {
    // Close mobile menu when changing routes
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Body scroll lock effect
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isActiveGroup = (subItems: SubNavItem[]) => {
    return subItems.some(item => location.pathname === item.path);
  };

  // Organized navigation structure
  const navigation: NavItem[] = [
    { 
      path: '/', 
      label: 'Home',
      icon: <BookOpen size={16} />
    },
    {
      label: 'About Us',
      icon: <Users size={16} />,
      subItems: [
        { 
          path: '/story', 
          label: 'Our Story', 
          description: 'Learn about our mission and history',
          icon: <BookOpen size={14} />
        },
        { 
          path: '/model', 
          label: 'Our Model', 
          description: 'How we create lasting impact',
          icon: <Building size={14} />
        },
        { 
          path: '/impact', 
          label: 'Our Impact', 
          description: 'Measurable results we\'ve achieved',
          icon: <Star size={14} />
        },
        { 
          path: '/crisis', 
          label: 'Crisis Response', 
          description: 'Our emergency support initiatives',
          icon: <HeartHandshake size={14} />
        }
      ]
    },
    {
      label: 'Programs',
      icon: <GraduationCap size={16} />,
      subItems: [
        { 
          path: '/core-areas', 
          label: 'Core Areas', 
          description: 'Our main focus areas of work',
          icon: <Building size={14} />
        },
        { 
          path: '/scholarships', 
          label: 'Scholarships', 
          description: 'Educational support programs',
          icon: <GraduationCap size={14} />
        },
        { 
          path: '/scholars', 
          label: 'Our Scholars', 
          description: 'Meet our scholarship recipients',
          icon: <Users size={14} />
        }
      ]
    },
    {
      label: 'Community',
      icon: <Users size={16} />,
      subItems: [
        { 
          path: '/team', 
          label: 'Our Team', 
          description: 'Meet the people behind our mission',
          icon: <Users size={14} />
        },
        { 
          path: '/partners', 
          label: 'Partners', 
          description: 'Organizations working with us',
          icon: <Building size={14} />
        },
        { 
          path: '/news', 
          label: 'News & Updates', 
          description: 'Latest news and announcements',
          icon: <BookOpen size={14} />
        }
      ]
    },
    { 
      path: '/contact', 
      label: 'Contact',
      icon: <Phone size={16} />
    }
  ];

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

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
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

          {/* Enhanced Desktop Navigation with Dropdowns */}
          <motion.nav 
            className="hidden lg:flex items-center space-x-1"
            variants={navVariants}
            style={{ 
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.label}
                variants={navItemVariants}
                className="relative"
                onMouseEnter={() => {
                  setHoveredNav(item.label);
                  if (item.subItems) {
                    setActiveDropdown(item.label);
                  }
                }}
                onMouseLeave={() => {
                  setHoveredNav(null);
                  setActiveDropdown(null);
                }}
              >
                {item.path ? (
                  // Direct link items
                  <Link 
                    to={item.path} 
                    className={`relative font-heading font-medium transition-all duration-300 px-6 py-3 rounded-lg flex items-center justify-center space-x-2 min-w-[120px] ${
                      isActive(item.path) 
                        ? 'text-primary bg-primary/10' 
                        : 'text-white hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    
                    {/* Active Indicator */}
                    {isActive(item.path) && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </Link>
                ) : (
                  // Dropdown items
                  <div className="relative">
                    <button 
                      className={`font-heading font-medium transition-all duration-300 px-6 py-3 rounded-lg flex items-center justify-center space-x-2 min-w-[120px] ${
                        item.subItems && isActiveGroup(item.subItems)
                          ? 'text-primary bg-primary/10' 
                          : 'text-white hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                      
                      {/* Active Group Indicator */}
                      {item.subItems && isActiveGroup(item.subItems) && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && item.subItems && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden min-w-[280px] z-50"
                          style={{ 
                            backdropFilter: 'blur(20px)',
                            background: 'rgba(255, 255, 255, 0.98)'
                          }}
                        >
                          <div className="p-2">
                            {item.subItems.map((subItem) => (
                              <motion.div
                                key={subItem.path}
                                variants={dropdownItemVariants}
                              >
                                <Link
                                  to={subItem.path}
                                  className={`block px-4 py-3 rounded-lg transition-all duration-200 group ${
                                    isActive(subItem.path)
                                      ? 'bg-primary text-secondary shadow-sm'
                                      : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                                  }`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`p-2 rounded-lg ${
                                      isActive(subItem.path)
                                        ? 'bg-secondary/20'
                                        : 'bg-gray-100 group-hover:bg-primary/20'
                                    }`}>
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-heading font-semibold text-sm">
                                        {subItem.label}
                                      </div>
                                      {subItem.description && (
                                        <div className={`text-xs mt-1 ${
                                          isActive(subItem.path)
                                            ? 'text-secondary/80'
                                            : 'text-gray-500 group-hover:text-primary/80'
                                        }`}>
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Enhanced Donate Button */}
            <motion.div
              variants={donateButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className="ml-4"
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

      {/* Mobile Menu - Enhanced */}
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
            />
            
            {/* Modal Dropdown */}
            <motion.div
              className="lg:hidden fixed top-20 left-4 right-4 shadow-2xl border border-yellow-400/40 rounded-2xl z-[9999] max-h-[80vh] overflow-y-auto backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, #23272e 0%, #FFD700 200%)'
              }}
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-yellow-400/30">
                <motion.h3 
                  className="text-yellow-300 font-heading font-bold text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
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

              {/* Mobile Navigation */}
              <div className="p-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + (index * 0.05), duration: 0.5 }}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? 'bg-yellow-400 text-gray-900'
                            : 'bg-yellow-400/10 text-yellow-100 hover:bg-yellow-400/20'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.icon}
                        <span className="font-heading font-semibold">{item.label}</span>
                      </Link>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 px-4 py-3 text-yellow-200 font-heading font-bold text-sm">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive(subItem.path)
                                  ? 'bg-yellow-400 text-gray-900'
                                  : 'bg-yellow-400/5 text-yellow-100 hover:bg-yellow-400/15'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.icon}
                              <span className="text-sm">{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Donate Button */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="pt-4 border-t border-yellow-400/30"
                >
                  <Link
                    to="/donate"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 px-6 rounded-xl font-heading font-bold text-lg flex items-center justify-center shadow-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart size={20} className="mr-3" />
                    Support Our Mission
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
