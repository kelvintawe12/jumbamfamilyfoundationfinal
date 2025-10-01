import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/common/SectionTitle';
import { 
  HeartIcon,
  UsersIcon,
  TrendingUpIcon,
  StarIcon,
  SparklesIcon,
  AwardIcon,
  ShieldIcon,
  BookOpenIcon,
  GraduationCapIcon,
  StethoscopeIcon,
  BrainIcon,
  HandHelpingIcon,
  Target,
  Activity,
  BarChart3Icon,
  ArrowRightIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  MapPinIcon,
  CalendarIcon,
  Clock,
  Eye,
  Zap,
  Globe,
  AlertTriangleIcon,
  TrendingDownIcon
} from 'lucide-react';

export const Impact: React.FC = () => {
  // Enhanced state management for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeImpactArea, setActiveImpactArea] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({
    widows: 0,
    businesses: 0,
    amount: 0,
    rate: 0
  });
  
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  
  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);
  
  // Animation controls
  const heroControls = useAnimation();
  const statsControls = useAnimation();
  const areasControls = useAnimation();
  const storiesControls = useAnimation();
  
  // Visibility tracking
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const areasInView = useInView(areasRef, { once: true, amount: 0.3 });
  const storiesInView = useInView(storiesRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    setIsLoaded(true);
    heroControls.start('visible');
  }, [heroControls]);
  
  useEffect(() => {
    if (statsInView) {
      statsControls.start('visible');
      // Animate statistics counters
      const targets = { widows: 50, businesses: 17, amount: 5.5, rate: 100 };
      Object.entries(targets).forEach(([key, target]) => {
        let count = 0;
        const increment = target / 60; // 60 frames for 1 second
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({ ...prev, [key]: count }));
        }, 16);
      });
    }
  }, [statsInView, statsControls]);
  
  useEffect(() => {
    if (areasInView) {
      areasControls.start('visible');
    }
  }, [areasInView, areasControls]);
  
  useEffect(() => {
    if (storiesInView) {
      storiesControls.start('visible');
    }
  }, [storiesInView, storiesControls]);

  // Premium animation variants
  const premiumVariants = {
    heroContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2
        }
      }
    },
    
    heroContent: {
      hidden: { 
        opacity: 0, 
        y: 60,
        scale: 0.95
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    statsContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.3
        }
      }
    },

    statCard: {
      hidden: { 
        opacity: 0, 
        y: 40,
        rotateX: -10
      },
      visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      },
      hover: {
        y: -8,
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    impactArea: {
      hidden: { 
        opacity: 0, 
        x: -60,
        scale: 0.9
      },
      visible: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      },
      hover: {
        scale: 1.02,
        y: -5,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },

    fadeInUp: {
      hidden: {
        opacity: 0,
        y: 30
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    slideInLeft: {
      hidden: {
        opacity: 0,
        x: -50
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    slideInRight: {
      hidden: {
        opacity: 0,
        x: 50
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    }
  };

  // Impact areas data
  const impactAreas = [
    {
      icon: <StethoscopeIcon className="w-8 h-8" />,
      title: "Health",
      description: "Comprehensive healthcare and education services",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      points: [
        "Help victims of the Anglophone crisis in need of healthcare services receive the care that they need",
        "Provide health and sexual education for young boys and girls from communities afflicted by the ongoing crisis"
      ]
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Women Empowerment",
      description: "Supporting women's reintegration and economic independence",
      color: "purple",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      points: [
        "Facilitate reintegration into communities by providing psychosocial support for women affected by the crisis",
        "Help women gain sustainable sources of livelihoods through business training, capital, mentorship and apprenticeship"
      ]
    },
    {
      icon: <GraduationCapIcon className="w-8 h-8" />,
      title: "Education",
      description: "Ensuring children's access to quality education and mental health",
      color: "green",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      points: [
        "Help children get into and remain in formal schools in non-conflict regions around the country",
        "Work with communities to provide psychosocial and mental health support to children for reintegration"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Impact - Jumbam Family Foundation</title>
        <meta name="description" content="From supporting 5 widows to empowering over 50 women - see how the Jumbam Family Foundation is transforming lives across Cameroon's crisis-affected regions." />
      </Helmet>
      
      <div className="w-full bg-white overflow-hidden">
        {/* Enhanced Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"
          initial="hidden"
          animate="visible"
          variants={premiumVariants.heroContainer}
        >
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple/5" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30v30h30v-30H30zm15 15l7.5 7.5v7.5h-7.5v-7.5l-7.5-7.5zm0 0V15l7.5-7.5h7.5v7.5l-7.5 7.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </motion.div>

          {/* Floating Success Elements */}
          <motion.div 
            className="absolute top-20 left-10 text-yellow-400 opacity-30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <AwardIcon size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-20 text-white opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <TrendingUpIcon size={60} />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                className="mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 font-heading font-semibold text-sm border border-blue-400/30">
                  <TrendingUpIcon className="w-4 h-4 mr-2" />
                  Measuring Our Impact
                </span>
              </motion.div>

              <motion.h1 
                className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                  Transforming Lives
                </span>
              </motion.h1>

              <motion.p 
                className="font-heading text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
                variants={premiumVariants.heroContent}
              >
                What began as a modest effort to support 5 women whose husbands were killed alongside our father has grown significantly. To date, the JFF has provided trauma healing and small business support to over 50 widows from the Anglophone regions of Cameroon.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={premiumVariants.staggerContainer}
              >
                <motion.button 
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Our Impact
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>

              {/* Growth Journey */}
              <motion.div 
                className="mt-16 flex items-center justify-center space-x-8"
                variants={premiumVariants.staggerContainer}
              >
                <motion.div 
                  className="text-center"
                  variants={premiumVariants.fadeInUp}
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-blue-300 mb-2">5</div>
                  <div className="text-sm font-heading text-white/70">Started With</div>
                </motion.div>
                
                <motion.div 
                  className="text-yellow-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRightIcon className="w-8 h-8" />
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  variants={premiumVariants.fadeInUp}
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-yellow-300 mb-2">50+</div>
                  <div className="text-sm font-heading text-white/70">Lives Transformed</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Impact Statistics */}
        <motion.section 
          ref={statsRef}
          className="py-24 bg-white"
          initial="hidden"
          animate={statsControls}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.staggerContainer}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-heading font-semibold text-sm border border-blue-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <BarChart3Icon className="w-4 h-4 mr-2" />
                Impact by Numbers
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Measurable Change
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                variants={premiumVariants.fadeInUp}
              >
                Every number represents a life transformed, a family reunited, and hope restored in our communities.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={premiumVariants.statsContainer}
            >
              {[
                {
                  icon: <UsersIcon className="w-8 h-8" />,
                  number: Math.floor(animatedStats.widows),
                  label: "Widows Empowered",
                  description: "Women receiving support",
                  color: "blue",
                  bgColor: "bg-blue-50",
                  textColor: "text-blue-600",
                  suffix: "+"
                },
                {
                  icon: <TrendingUpIcon className="w-8 h-8" />,
                  number: Math.floor(animatedStats.businesses),
                  label: "Businesses Started",
                  description: "New enterprises in 2023",
                  color: "green",
                  bgColor: "bg-green-50",
                  textColor: "text-green-600",
                  suffix: ""
                },
                {
                  icon: <HandHelpingIcon className="w-8 h-8" />,
                  number: animatedStats.amount.toFixed(1),
                  label: "Million FCFA",
                  description: "Financial support distributed",
                  color: "purple",
                  bgColor: "bg-purple-50",
                  textColor: "text-purple-600",
                  suffix: "M"
                },
                {
                  icon: <CheckCircleIcon className="w-8 h-8" />,
                  number: Math.floor(animatedStats.rate),
                  label: "Reintegration Rate",
                  description: "Successful community return",
                  color: "orange",
                  bgColor: "bg-orange-50",
                  textColor: "text-orange-600",
                  suffix: "%"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={premiumVariants.statCard}
                  whileHover="hover"
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                >
                  <div className={`${stat.bgColor} p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full`}>
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-6 ${stat.textColor} relative`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ 
                        scale: { duration: 0.2 },
                        rotate: { duration: 0.6 }
                      }}
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Number */}
                    <div className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-2">
                      {stat.number}{stat.suffix}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-gray-700 mb-3">
                      {stat.label}
                    </h3>
                    
                    <p className="font-heading text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Floating Sparkle */}
                    <AnimatePresence>
                      {hoveredStat === index && (
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
                          <SparklesIcon className="w-6 h-6 text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        {/* Core Impact Areas */}
        <motion.section 
          ref={areasRef}
          className="py-24 bg-gradient-to-br from-gray-50 to-white"
          initial="hidden"
          animate={areasControls}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.staggerContainer}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 font-heading font-semibold text-sm border border-purple-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <Target className="w-4 h-4 mr-2" />
                Our Focus Areas
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Three Pillars of Impact
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                variants={premiumVariants.fadeInUp}
              >
                Our comprehensive approach addresses the immediate needs and long-term development of crisis-affected communities.
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-12"
              variants={premiumVariants.staggerContainer}
            >
              {impactAreas.map((area, index) => (
                <PremiumImpactArea
                  key={index}
                  {...area}
                  index={index}
                  activeArea={activeImpactArea}
                  onActivate={setActiveImpactArea}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Transformation Stories */}
        <motion.section 
          ref={storiesRef}
          className="py-24 bg-white"
          initial="hidden"
          animate={storiesControls}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.staggerContainer}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 font-heading font-semibold text-sm border border-green-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <StarIcon className="w-4 h-4 mr-2" />
                Success Stories
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Transformation Stories
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                variants={premiumVariants.fadeInUp}
              >
                Real stories of hope, resilience, and transformation from the women and families we serve.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200/50"
              variants={premiumVariants.fadeInUp}
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Before */}
                <motion.div 
                  className="space-y-6"
                  variants={premiumVariants.slideInLeft}
                >
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1594708767771-a5e9d3c6b344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Before: Woman in difficult circumstances" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="inline-flex items-center px-3 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-sm font-heading font-semibold">
                        <AlertTriangleIcon className="w-4 h-4 mr-1" />
                        Before
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-heading text-2xl font-bold text-gray-800">Crisis & Struggle</h4>
                    <p className="font-heading text-lg leading-relaxed text-gray-600">
                      After losing her husband to the crisis, Mary struggled to feed her three children. Without a source of income and dealing with trauma, she faced an uncertain future with limited hope for recovery.
                    </p>
                    <div className="flex items-center space-x-2 text-red-600">
                      <TrendingDownIcon className="w-5 h-5" />
                      <span className="font-heading font-semibold">Challenges: No income, trauma, uncertain future</span>
                    </div>
                  </div>
                </motion.div>

                {/* After */}
                <motion.div 
                  className="space-y-6"
                  variants={premiumVariants.slideInRight}
                >
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1544717684-1243da23b545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                      alt="After: Woman running her own business" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-sm font-heading font-semibold">
                        <CheckCircleIcon className="w-4 h-4 mr-1" />
                        After
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-heading text-2xl font-bold text-gray-800">Success & Growth</h4>
                    <p className="font-heading text-lg leading-relaxed text-gray-600">
                      Today, Mary runs a successful small food business. She can provide for her children, pay school fees, and has even hired another widow to help with her growing business, creating a cycle of empowerment.
                    </p>
                    <div className="flex items-center space-x-2 text-green-600">
                      <TrendingUpIcon className="w-5 h-5" />
                      <span className="font-heading font-semibold">Success: Sustainable income, community impact</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div 
                className="mt-12 text-center"
                variants={premiumVariants.fadeInUp}
              >
                <motion.button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Support Our Work
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Final Call to Action */}
        <section className="py-24 bg-secondary text-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-heading font-semibold text-sm border border-primary/30 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <HeartIcon className="w-4 h-4 mr-2" />
                Join Our Mission
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Be Part of the Solution
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl mb-12 text-white/90"
                variants={premiumVariants.fadeInUp}
              >
                Every donation, every partnership, every act of support helps us reach more families and transform more lives. Together, we can expand our impact from 50 to 500 and beyond.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={premiumVariants.staggerContainer}
              >
                <motion.button 
                  className="bg-primary hover:bg-primary/90 text-secondary px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                  <HeartIcon className="ml-2 h-5 w-5" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

// Premium Impact Area Component
interface PremiumImpactAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  points: string[];
  index: number;
  activeArea: number | null;
  onActivate: (index: number | null) => void;
}

const PremiumImpactArea: React.FC<PremiumImpactAreaProps> = ({ 
  icon, title, description, bgColor, textColor, borderColor, points, index, activeArea, onActivate 
}) => {
  return (
    <motion.div 
      className="relative"
      variants={{
        hidden: { opacity: 0, x: -60 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.2
          }
        }
      }}
      whileHover="hover"
      onHoverStart={() => onActivate(index)}
      onHoverEnd={() => onActivate(null)}
    >
      <motion.div
        className={`${bgColor} p-8 md:p-12 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
        variants={{
          hover: {
            scale: 1.02,
            y: -5,
            transition: { duration: 0.3 }
          }
        }}
      >
        {/* Background Effect */}
        <motion.div
          className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Icon & Title */}
          <div className="space-y-4">
            <motion.div
              className={`inline-flex items-center justify-center w-20 h-20 ${bgColor} rounded-2xl ${textColor} relative`}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -10, 10, 0],
              }}
              transition={{ 
                scale: { duration: 0.2 },
                rotate: { duration: 0.6 }
              }}
            >
              {icon}
              
              {/* Pulse Effect */}
              <motion.div
                className={`absolute inset-0 ${bgColor} rounded-2xl`}
                animate={activeArea === index ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            <div>
              <h3 className="font-heading text-3xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="font-heading text-lg text-gray-600">{description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            {points.map((point, pointIndex) => (
              <motion.div
                key={pointIndex}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: pointIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex-shrink-0 w-6 h-6 ${textColor} mt-1`}>
                  <CheckCircleIcon className="w-full h-full" />
                </div>
                <p className="font-heading text-lg leading-relaxed text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Sparkle */}
        <AnimatePresence>
          {activeArea === index && (
            <motion.div
              className="absolute top-6 right-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: [0, 180, 360]
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SparklesIcon className="w-8 h-8 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};