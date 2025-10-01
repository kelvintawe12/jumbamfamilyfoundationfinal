import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  PlayIcon, 
  HeartIcon, 
  UsersIcon, 
  BookIcon, 
  CheckIcon, 
  ChevronRightIcon, 
  MapPinIcon, 
  CalendarIcon, 
  TargetIcon, 
  BarChart3Icon, 
  HandIcon, 
  GlobeIcon,
  Star,
  Sparkles,
  Eye,
  Shield,
  Zap
} from 'lucide-react';
export const Home: React.FC = () => {
  // Enhanced state management for complex animations
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particleKey, setParticleKey] = useState(0);
  
  const fullTitle = 'Restoring Hope in Cameroon';
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  
  // Enhanced visibility tracking
  const titleInView = useInView(titleRef, { once: true, amount: 0.1 });
  const titleControls = useAnimation();
  const heroControls = useAnimation();

  // Typewriter effect with enhanced timing
  useEffect(() => {
    if (titleInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullTitle.length) {
          setDisplayedTitle(fullTitle.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          titleControls.start('visible');
          setIsLoaded(true);
        }
      }, 80); // Faster typing for better UX
      return () => clearInterval(interval);
    }
  }, [titleInView, titleControls, fullTitle]);

  // Particle animation trigger
  useEffect(() => {
    if (isLoaded) {
      const particleInterval = setInterval(() => {
        setParticleKey(prev => prev + 1);
      }, 3000);
      return () => clearInterval(particleInterval);
    }
  }, [isLoaded]);

  // Premium animation variants inspired by CheckMe
  const premiumVariants = {
    // Hero section animations
    heroContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
          when: "beforeChildren"
        }
      }
    },
    
    heroContent: {
      hidden: { 
        opacity: 0, 
        y: 80,
        scale: 0.95,
        filter: "blur(10px)"
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1], // Custom CheckMe-style easing
          staggerChildren: 0.1
        }
      }
    },

    // Enhanced card animations
    cardContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.3
        }
      }
    },

    premiumCard: {
      hidden: { 
        opacity: 0, 
        y: 60,
        rotateX: -15,
        scale: 0.9
      },
      visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      },
      hover: {
        y: -12,
        scale: 1.03,
        rotateY: 5,
        boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.25)",
        transition: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    // Floating animations
    float: {
      animate: {
        y: [0, -20, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },

    floatDelayed: {
      animate: {
        y: [0, -15, 0],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }
      }
    },

    // Particle system
    particle: (custom: number) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      y: [0, -100],
      x: [0, custom],
      transition: {
        duration: 3,
        ease: "easeOut"
      }
    }),

    // Icon animations
    iconSpin: {
      animate: {
        rotate: [0, 360],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }
    },

    iconPulse: {
      animate: {
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },

    // Text reveal animations
    textReveal: {
      hidden: {
        opacity: 0,
        y: 20,
        skewY: 10
      },
      visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    // Stagger animations for lists
    staggerFast: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.1
        }
      }
    },

    staggerMedium: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },

    // Morphing animations
    morphButton: {
      rest: {
        scale: 1,
        backgroundColor: "var(--primary)",
        transition: { duration: 0.3 }
      },
      hover: {
        scale: 1.05,
        backgroundColor: "var(--primary-dark)",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 }
      },
      tap: {
        scale: 0.95,
        transition: { duration: 0.1 }
      }
    }
  };

  // Legacy animation variants (keeping for compatibility)
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const scaleIn = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  const slideIn = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  // Parallax effect for hero image
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // References for sections to animate when in view
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, {
    once: true,
    amount: 0.3
  });
  const statsControls = useAnimation();
  const areasRef = useRef(null);
  const areasInView = useInView(areasRef, {
    once: true,
    amount: 0.3
  });
  const areasControls = useAnimation();
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, {
    once: true,
    amount: 0.3
  });
  const impactControls = useAnimation();
  useEffect(() => {
    if (statsInView) {
      statsControls.start('visible');
    }
    if (areasInView) {
      areasControls.start('visible');
    }
    if (impactInView) {
      impactControls.start('visible');
    }
  }, [statsInView, areasInView, impactInView, statsControls, areasControls, impactControls]);
  return (
    <>
      <Helmet>
        <title>Jumbam Family Foundation - Restoring Hope in Cameroon</title>
        <meta name="description" content="Contributing to a prosperous Cameroon and Africa through Education, Healthcare, and Women Empowerment." />
      </Helmet>
      
      <div className="w-full bg-white overflow-hidden">
        {/* Enhanced Hero Section with Premium Animations */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-accent"
          initial="hidden"
          animate="visible"
          variants={premiumVariants.heroContainer}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence>
              {Array.from({ length: 20 }, (_, i) => {
                const randomX = Math.random() * 100 - 50;
                const randomLeft = Math.random() * 100;
                return (
                  <motion.div
                    key={`${particleKey}-${i}`}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                    style={{
                      left: `${randomLeft}%`,
                      top: '100%',
                    }}
                    custom={randomX}
                    variants={{ 
                      hidden: { opacity: 0, scale: 0 }, 
                      visible: premiumVariants.particle 
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* Enhanced Background with Elegant Gradient Mesh */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              y: y,
              opacity: opacity
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/5" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
                backgroundSize: '400px 400px'
              }}
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute top-20 left-10 text-primary opacity-30"
            variants={premiumVariants.float}
            animate="animate"
          >
            <Sparkles size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-20 text-white opacity-20"
            variants={premiumVariants.floatDelayed}
            animate="animate"
          >
            <HeartIcon size={60} />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Enhanced Hero Content */}
              <motion.div 
                className="text-white"
                variants={premiumVariants.heroContent}
              >
                <motion.div
                  className="mb-4"
                  variants={premiumVariants.textReveal}
                >
                  <span className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-semibold text-sm border border-primary/30">
                    <Star className="w-4 h-4 mr-2" />
                    Restoring Hope Since 2020
                  </span>
                </motion.div>

                <motion.h1 
                  ref={titleRef}
                  className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
                  variants={premiumVariants.textReveal}
                >
                  <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    {displayedTitle}
                  </span>
                  {displayedTitle.length < fullTitle.length && (
                    <motion.span 
                      className="text-primary"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.h1>

                <motion.p 
                  className="font-body text-xl md:text-2xl mb-8 text-white/90"
                  variants={premiumVariants.textReveal}
                >
                  Contributing to a prosperous Cameroon and Africa through
                  <span className="text-primary font-semibold"> Education, Healthcare, and Women Empowerment.</span>
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={premiumVariants.staggerFast}
                >
                  <motion.div variants={premiumVariants.textReveal}>
                    <Link 
                      to="/donate"
                      className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-secondary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center">
                        Support Our Mission
                        <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>

                  <motion.div variants={premiumVariants.textReveal}>
                    <motion.button 
                      className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => alert('Video feature coming soon!')}
                    >
                      <motion.div
                        className="mr-2"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <PlayIcon className="h-5 w-5" />
                      </motion.div>
                      Watch Our Story
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="mt-12 grid grid-cols-3 gap-6"
                  variants={premiumVariants.staggerMedium}
                >
                  {[
                    { icon: UsersIcon, label: "5000+", sublabel: "Lives Impacted" },
                    { icon: HeartIcon, label: "98%", sublabel: "Success Rate" },
                    { icon: GlobeIcon, label: "15+", sublabel: "Communities" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      variants={premiumVariants.textReveal}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-2"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <stat.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="text-2xl font-bold text-white">{stat.label}</div>
                      <div className="text-sm text-white/70">{stat.sublabel}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Enhanced Hero Image with 3D Effects */}
              <motion.div 
                className="relative"
                variants={premiumVariants.heroContent}
              >
                <motion.div
                  className="relative z-10"
                  whileHover={{ 
                    rotateY: 5, 
                    rotateX: 5,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/image.png"
                    alt="Jumbam Family Foundation Impact"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Action Cards */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
                    variants={premiumVariants.float}
                    animate="animate"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">Active Impact</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-lg"
                    variants={premiumVariants.floatDelayed}
                    animate="animate"
                  >
                    <div className="flex items-center space-x-2">
                      <HeartIcon className="w-5 h-5" />
                      <span className="text-sm font-semibold">Hope Restored</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"
                  variants={premiumVariants.iconSpin}
                  animate="animate"
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 blur-xl"
                  variants={premiumVariants.iconSpin}
                  animate="animate"
                />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              animate={{ 
                borderColor: ["rgba(255,255,255,0.5)", "rgba(255,255,255,1)", "rgba(255,255,255,0.5)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
      </motion.section>
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle title="Our Mission" subtitle="Transforming tragedy into hope and creating lasting positive change" centered />
            <motion.p className="text-xl mb-10 text-gray-700" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              The Jumbam Family Foundation was born from our attempt to
              transform the painful loss of our father and husband, Mr. Ngek
              Constantine Jumbam, into hope and transformation for Cameroon and
              Africa. Despite the deep pain of this loss, we chose to channel
              our grief into creating positive change for others affected by
              this crisis.
            </motion.p>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" animate="visible" variants={staggerContainer}>
              <MissionCard icon={<HeartIcon className="h-8 w-8" />} title="Restore Hope" description="We work to restore hope to widows, orphans, and communities devastated by the ongoing conflict." />
              <MissionCard icon={<HandIcon className="h-8 w-8" />} title="Empower Lives" description="Through education initiatives, healthcare support, and women's empowerment programs." />
              <MissionCard icon={<GlobeIcon className="h-8 w-8" />} title="Transform Cameroon" description="We are committed to building a brighter, more prosperous future for Cameroon." />
            </motion.div>
            <motion.div className="mt-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <Link to="/story" className="inline-flex items-center text-primary font-bold hover:underline text-lg group">
                Read Our Full Story
                <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
        {/* Enhanced Impact Stats with Premium Animations */}
        <motion.section 
          ref={statsRef} 
          className="py-24 bg-gradient-to-br from-tertiary via-white to-gray-50 relative overflow-hidden"
          initial="hidden"
          animate={statsControls}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-accent/15 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.heroContent}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-semibold text-sm border border-primary/20 mb-6"
                variants={premiumVariants.textReveal}
              >
                <BarChart3Icon className="w-4 h-4 mr-2" />
                Real Impact Numbers
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                variants={premiumVariants.textReveal}
              >
                Transforming Lives Through
                <span className="text-primary"> Measurable Impact</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={premiumVariants.textReveal}
              >
                Every statistic represents a life changed, a family restored, and hope renewed in our communities.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={premiumVariants.cardContainer}
            >
              {[
                { 
                  icon: UsersIcon, 
                  number: "50+", 
                  label: "Widows Empowered", 
                  description: "Through our comprehensive support programs",
                  color: "from-blue-500 to-cyan-500",
                  delay: 0.1 
                },
                { 
                  icon: HeartIcon, 
                  number: "17", 
                  label: "Businesses Started", 
                  description: "New enterprises launched in 2023",
                  color: "from-red-500 to-pink-500",
                  delay: 0.3 
                },
                { 
                  icon: TargetIcon, 
                  number: "5.5M", 
                  label: "FCFA Distributed", 
                  description: "In capital and support",
                  color: "from-green-500 to-emerald-500",
                  delay: 0.5 
                },
                { 
                  icon: BarChart3Icon, 
                  number: "100%", 
                  label: "Reintegration Rate", 
                  description: "Success rate in community reintegration",
                  color: "from-purple-500 to-violet-500",
                  delay: 0.7 
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={premiumVariants.premiumCard}
                  whileHover="hover"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    {/* Icon with Animation */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 relative`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ 
                        scale: { duration: 0.2 },
                        rotate: { duration: 0.6 }
                      }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                      
                      {/* Pulse Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl`}
                        animate={hoveredCard === index ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Animated Number */}
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: stat.delay,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-700 mb-3">
                      {stat.label}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Floating Sparkle */}
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: 1, 
                            opacity: 1,
                            rotate: [0, 180, 360]
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Sparkles className="w-6 h-6 text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/impact"
                className="group inline-flex items-center bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-4 px-8 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-3">See Our Full Impact</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.section>
        {/* Enhanced Core Areas Preview */}
        <motion.section 
          ref={areasRef} 
          className="py-24 bg-white relative overflow-hidden"
          initial="hidden"
          animate={areasControls}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.heroContent}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-semibold text-sm border border-primary/20 mb-6"
                variants={premiumVariants.textReveal}
              >
                <HandIcon className="w-4 h-4 mr-2" />
                Our Core Focus Areas
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                variants={premiumVariants.textReveal}
              >
                Comprehensive Support for
                <span className="text-primary"> Lasting Change</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={premiumVariants.cardContainer}
            >
              <EnhancedCoreAreaCard icon={<HeartIcon className="h-8 w-8" />} title="Health" description="Essential healthcare services and mental health support for crisis-affected communities." image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" features={['Mobile health clinics', 'Mental health support', 'Health education']} link="/core-areas" />
              <EnhancedCoreAreaCard icon={<UsersIcon className="h-8 w-8" />} title="Women Empowerment" description="Psychosocial support, business training, and capital for widows and vulnerable women." image="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" features={['Psychosocial support', 'Business training', 'Startup capital']} link="/core-areas" />
              <EnhancedCoreAreaCard icon={<BookIcon className="h-8 w-8" />} title="Education" description="Scholarships, school supplies, and safe learning spaces for affected children." image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" features={['Scholarships', 'School supplies', 'Safe learning spaces']} link="/core-areas" />
            </motion.div>
          </div>
        </motion.section>
      {/* Crisis Awareness Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="The Anglophone Crisis" subtitle="Understanding the context of our work" centered light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h3 className="font-heading text-2xl font-bold mb-4">
                A Humanitarian Challenge
              </h3>
              <p className="text-white/80 mb-6">
                The Anglophone Crisis in Cameroon is an ongoing conflict in the
                Northwest and Southwest regions, where the country's Anglophone
                minority has been fighting for greater autonomy or independence
                from the majority Francophone government.
              </p>
              <p className="text-white/80 mb-8">
                This crisis has had devastating effects with thousands killed,
                hundreds of thousands displaced, and significant disruptions to
                education, healthcare, and economic activities.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary font-heading text-3xl font-bold">
                    4,000+
                  </div>
                  <div className="text-sm">Lives Lost</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary font-heading text-3xl font-bold">
                    700K+
                  </div>
                  <div className="text-sm">Displaced</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="text-primary font-heading text-3xl font-bold">
                    80%
                  </div>
                  <div className="text-sm">Schools Closed</div>
                </div>
              </div>
              <Link to="/crisis" className="inline-flex items-center bg-primary hover:bg-primary/90 text-secondary py-3 px-6 rounded-md transition-all hover:scale-105 font-bold">
                Learn About the Crisis
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="relative">
              <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Map of Cameroon highlighting the Anglophone regions" className="rounded-lg shadow-lg w-full" />
              <div className="absolute top-1/3 left-1/3 animate-ping">
                <div className="h-4 w-4 bg-primary rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/4 animate-ping animation-delay-300">
                <div className="h-4 w-4 bg-primary rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Latest News Section */}
      <section ref={impactRef} className="py-20 bg-tertiary">
        <div className="container mx-auto px-6">
          <SectionTitle title="Latest News & Stories" subtitle="Updates from our work and impact" centered />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" animate={impactControls} variants={staggerContainer}>
            <NewsCard title="Jumbam Family Foundation Expands Women's Empowerment Program" date="March 15, 2023" image="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" source="AllAfrica" />
            <NewsCard title="New Health Initiative Launched in Crisis-Affected Communities" date="January 22, 2023" image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" source="Cameroon Tribune" />
            <NewsCard title="Jumbam Foundation Founder Recognized by Harvard University" date="November 10, 2022" image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" source="Harvard Gazette" />
          </motion.div>
          <motion.div className="mt-10 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} viewport={{
          once: true
        }}>
            <Link to="/news" className="inline-flex items-center text-primary font-bold hover:underline text-lg group">
              View All News & Stories
              <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Partners Section with Enhanced Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Partners" subtitle="Working together for greater impact" centered />
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{
          once: true,
          amount: 0.3
        }}>
            <PartnerLogo name="Harvard University" />
            <PartnerLogo name="UN Women" />
            <PartnerLogo name="World Bank" />
            <PartnerLogo name="USAID" />
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-secondary" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              Join Us in Restoring Hope
            </motion.h2>
            <motion.p className="text-xl mb-10 text-secondary/80" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              Together, we can transform tragedy into hope and create lasting
              positive change for the people of Cameroon.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} viewport={{
            once: true
          }}>
              <Link to="/donate" className="bg-primary hover:bg-primary/90 text-secondary px-8 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 flex items-center justify-center">
                Donate Now
                <HeartIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 flex items-center justify-center">
                Get Involved
                <UsersIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
// Component for mission cards
interface MissionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const MissionCard: React.FC<MissionCardProps> = ({
  icon,
  title,
  description
}) => {
  return <motion.div className="bg-tertiary p-6 rounded-lg text-center" variants={{
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }}>
      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold mb-3 text-secondary">
        {title}
      </h3>
      <p className="text-secondary/80">{description}</p>
    </motion.div>;
};
// Enhanced version of the StatCard component with animations
interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
  delay?: number;
}
const StatCard: React.FC<StatCardProps> = ({
  icon,
  number,
  label,
  description,
  delay = 0
}) => {
  return <motion.div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" variants={{
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay
      }
    }
  }}>
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full text-primary">
          {icon}
        </div>
      </div>
      <motion.div className="font-heading text-4xl font-bold text-secondary mb-2" initial={{
      scale: 0.5,
      opacity: 0
    }} whileInView={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: delay + 0.3,
      type: 'spring',
      stiffness: 100
    }} viewport={{
      once: true
    }}>
        {number}
      </motion.div>
      <div className="font-heading text-xl font-bold text-secondary mb-2">
        {label}
      </div>
      <div className="font-body text-secondary/70">{description}</div>
    </motion.div>;
};
// Enhanced Core Area Card with features list
interface EnhancedCoreAreaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}
const EnhancedCoreAreaCard: React.FC<EnhancedCoreAreaCardProps> = ({
  icon,
  title,
  description,
  image,
  features,
  link
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative" variants={{
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      <div className="relative overflow-hidden h-48">
        <motion.img src={image} alt={title} className="w-full h-full object-cover" animate={{
        scale: isHovered ? 1.05 : 1
      }} transition={{
        duration: 0.5
      }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4 p-2 bg-primary rounded-full text-secondary">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
        <p className="font-body text-secondary/80 mb-4">{description}</p>
        <div className="mb-4">
          {features.map((feature, index) => <div key={index} className="flex items-center mb-2">
              <CheckIcon className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">{feature}</span>
            </div>)}
        </div>
        <Link to={link} className="text-primary font-medium hover:underline inline-flex items-center group">
          Learn More
          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>;
};
// News Card Component
interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  source: string;
}
const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  image,
  source
}) => {
  return <motion.div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" variants={{
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }}>
      <div className="relative overflow-hidden h-48">
        <motion.img src={image} alt={title} className="w-full h-full object-cover" whileHover={{
        scale: 1.05
      }} transition={{
        duration: 0.5
      }} />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-dark/60 mb-2">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{source}</span>
        </div>
        <h3 className="font-heading text-xl font-bold mb-4">{title}</h3>
        <Link to="/news" className="text-primary font-medium hover:underline inline-flex items-center group">
          Read Full Article
          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>;
};
// Partner Logo Component
interface PartnerLogoProps {
  name: string;
}
const PartnerLogo: React.FC<PartnerLogoProps> = ({
  name
}) => {
  const scaleIn = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  return <motion.div className="flex items-center justify-center p-4" variants={scaleIn} whileHover={{
    scale: 1.05
  }}>
      <div className="bg-white p-4 rounded-lg shadow-md w-full h-20 flex items-center justify-center">
        <span className="font-heading font-bold text-secondary text-lg">
          {name}
        </span>
      </div>
    </motion.div>;
};