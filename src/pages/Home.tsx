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
  Zap,
  GraduationCapIcon,
  TrendingUpIcon,
  PhoneIcon,
  MailIcon,
  Quote,
  CreditCardIcon,
  SmartphoneIcon,
  BuildingIcon,
  AlertTriangleIcon
} from 'lucide-react';

// Scholar Card Component
interface Scholar {
  name: string;
  location: string;
  quote: string;
  aspiration: string;
}

const ScholarCard: React.FC<{ scholar: Scholar; index: number }> = ({ scholar }) => (
  <motion.div
    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
    variants={{
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
      }
    }}
    whileHover={{
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
  >
    {/* Gradient Header */}
    <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600" />
    
    <div className="p-6">
      {/* Quote Section */}
      <div className="mb-6">
        <div className="flex items-start mb-4">
          <Quote className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
          <blockquote className="text-gray-700 font-medium italic leading-relaxed">
            "{scholar.quote}"
          </blockquote>
        </div>
      </div>

      {/* Scholar Info */}
      <div className="border-t border-gray-100 pt-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{scholar.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPinIcon className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm">{scholar.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <TargetIcon className="w-4 h-4 mr-2 text-green-500" />
            <span className="text-sm font-medium">Aspiring {scholar.aspiration}</span>
          </div>
          
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Home: React.FC = () => {
  // Enhanced state management for complex animations
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
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
        }
      }, 60);
      return () => clearInterval(interval);
    }
  }, [titleInView, titleControls, fullTitle]);

  // Premium animation variants
  const premiumVariants = {
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
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: 0.1
        }
      }
    },

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
    }
  };

  return (
    <>
      <Helmet>
        <title>Jumbam Family Foundation - Restoring Hope in Cameroon</title>
        <meta name="description" content="Contributing to a prosperous Cameroon and Africa through Education, Healthcare, and Women Empowerment." />
      </Helmet>
      
      <div className="w-full bg-white overflow-hidden">
        {/* Enhanced Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-accent"
          initial="hidden"
          animate="visible"
          variants={premiumVariants.heroContainer}
        >
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ y: y, opacity: opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/5" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
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
                  <span className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-heading font-semibold text-sm border border-primary/30">
                    <Star className="w-4 h-4 mr-2" />
                    Restoring Hope Since 2020
                  </span>
                </motion.div>

                <motion.h1 
                  ref={titleRef}
                  className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
                  variants={premiumVariants.textReveal}
                >
                  <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                    {displayedTitle}
                  </span>
                  {displayedTitle.length < fullTitle.length && (
                    <motion.span 
                      className="text-cyan-300"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      |_
                    </motion.span>
                  )}
                </motion.h1>

                <motion.p 
                  className="font-heading text-xl md:text-2xl mb-8 text-white/90"
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
                    </Link>
                  </motion.div>

                  <motion.div variants={premiumVariants.textReveal}>
                    <Link 
                      to="/story"
                      className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                    >
                      <PlayIcon className="h-5 w-5 mr-2" />
                      Our Story
                    </Link>
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
                      <div className="font-heading text-sm text-white/70">{stat.sublabel}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Hero Image */}
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
                      <span className="font-heading text-sm font-semibold text-gray-700">Active Impact</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-lg"
                    variants={premiumVariants.floatDelayed}
                    animate="animate"
                  >
                    <div className="flex items-center space-x-2">
                      <HeartIcon className="w-5 h-5" />
                      <span className="font-heading text-sm font-semibold">Hope Restored</span>
                    </div>
                  </motion.div>
                </motion.div>
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

        {/* About Us Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-heading font-semibold text-sm">
                    <BookIcon className="w-4 h-4 mr-2" />
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  From Tragedy to <span className="text-primary">Hope</span>
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  The Jumbam Family Foundation was born from our attempt to transform the painful loss of our father and husband, Mr. Ngek Constantine Jumbam, into hope and transformation for Cameroon and Africa.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Eye, text: "Vision: A prosperous Cameroon and Africa" },
                    { icon: Shield, text: "Mission: Restoring hope through action" },
                    { icon: Zap, text: "Impact: Transforming communities daily" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <Link 
                  to="/story"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Read Our Full Story
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/constantine.png"
                  alt="Mr. Ngek Constantine Jumbam"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-sm text-gray-600 italic">"Transforming tragedy into hope"</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">- Jumbam Family</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Areas Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Our Core Areas" 
              subtitle="Comprehensive support for lasting change" 
              centered 
            />
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.cardContainer}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: HeartIcon,
                  title: "Healthcare & Wellness",
                  description: "Mobile clinics, mental health support, and health education for crisis-affected communities.",
                  features: ["Mobile Health Clinics", "Mental Health Support", "Health Education Programs"],
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: UsersIcon,
                  title: "Women Empowerment",
                  description: "Psychosocial support, business training, and capital for widows and vulnerable women.",
                  features: ["Psychosocial Support", "Business Training", "Startup Capital"],
                  image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  color: "from-purple-500 to-violet-500"
                },
                {
                  icon: BookIcon,
                  title: "Education & Child Protection",
                  description: "Scholarships, school supplies, and safe learning spaces for affected children.",
                  features: ["Scholarship Programs", "School Supplies", "Safe Learning Spaces"],
                  image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  color: "from-blue-500 to-cyan-500"
                }
              ].map((area, index) => (
                <CoreAreaCard key={index} {...area} />
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/core-areas"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                Explore All Core Areas
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Scholarship Program & Scholars Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            {/* Scholarship Program Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-heading font-semibold text-sm">
                    <GraduationCapIcon className="w-4 h-4 mr-2" />
                    Education Program
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ngek Constantine Jumbam <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-blue-700 bg-clip-text text-transparent">Scholarship Fund</span>
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Providing full scholarships including tuition, accommodation, mentorship, and mental health support for students affected by the Anglophone crisis.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">Full Coverage</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
                <div className="space-x-4">
                  <Link 
                    to="/scholarships"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
                  </Link>
                  <Link 
                    to="/scholars"
                    className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Meet Our Scholars
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Students studying"
                    className="rounded-lg shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Graduation ceremony"
                    className="rounded-lg shadow-lg mt-8"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-sm">2022 Scholars</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Meet Our Scholars Section */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Meet Our <span className="text-blue-600">2022 Scholars</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Inspiring stories of resilience, hope, and academic excellence from our first cohort of scholarship recipients.
              </p>
            </motion.div>

            {/* Scholars Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.cardContainer}
              viewport={{ once: true }}
            >
              {[
                {
                  name: 'Fadimatou Idrissou',
                  location: 'Santa, North West',
                  quote: 'Being a Jumbam scholar means a new breath of fresh air, a ray of light during darkness.',
                  aspiration: 'Medicine'
                },
                {
                  name: 'Augustin Ateh Mandeh',
                  location: 'Awing-Santa, North West',
                  quote: 'Being a Jumbam scholar means working hard to give hope and joy to the less fortunate.',
                  aspiration: 'Computer Engineering'
                },
                {
                  name: 'Godwill Mbunwe',
                  location: 'Ntumbaw, North West',
                  quote: 'Being a Jumbam scholar has brought much joy to me and my mother.',
                  aspiration: 'Medicine'
                }
              ].map((scholar, index) => (
                <ScholarCard key={index} scholar={scholar} index={index} />
              ))}
            </motion.div>

            {/* Nelson Mandela Quote Section */}
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-2xl text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Quote className="w-8 h-8 text-blue-300" />
              </motion.div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 italic">
                "Education is the most powerful weapon which you can use to change the world."
              </blockquote>
              
              <cite className="text-lg text-blue-300 font-semibold">
                - Nelson Mandela
              </cite>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/scholars"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                Meet All Our Scholars
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Team & Community Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Our Community" 
              subtitle="Meet the people making a difference" 
              centered 
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Team Preview */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <UsersIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
                    <p className="text-gray-600">Dedicated professionals driving change</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      name: 'Desmond Jumbam',
                      position: 'Co-Founder & President',
                      image: '/team/Desmond Profile pic_edited.png',
                      initials: 'DJ'
                    },
                    {
                      name: 'Seh Rebecca',
                      position: 'Co-Founder & Vice President',
                      image: '/team/Rebecca pic_edited.png',
                      initials: 'SR'
                    },
                    {
                      name: 'Therese Nsakwa',
                      position: 'Financial Treasurer',
                      image: '/team/Therese profile pic_edited.png',
                      initials: 'TN'
                    }
                  ].map((member, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative mb-3 mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) {
                                target.style.display = 'none';
                                fallback.style.display = 'flex';
                              }
                            }}
                          />
                          <span className="text-white font-bold text-lg hidden">
                            {member.initials}
                          </span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.position}</div>
                    </motion.div>
                  ))}
                </div>
                <Link 
                  to="/team"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Meet Our Full Team
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              {/* Partners Preview */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <BuildingIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Partners</h3>
                    <p className="text-gray-600">Strategic alliances for greater impact</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  {[
                    { 
                      name: "University of Notre Dame", 
                      type: "Academic Partner",
                      image: "/partners/partners1.png",
                      description: "Leading academic institution supporting our scholarship program and research initiatives."
                    },
                    { 
                      name: "Open Dreams", 
                      type: "Strategic Partner",
                      image: "/partners/partner2-opendreams.png",
                      description: "Collaborative partner in youth empowerment and educational opportunities across Africa."
                    }
                  ].map((partner, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm overflow-hidden">
                        <img 
                          src={partner.image} 
                          alt={partner.name}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) {
                              target.style.display = 'none';
                              fallback.style.display = 'block';
                            }
                          }}
                        />
                        <div className="w-8 h-8 bg-primary/20 rounded hidden items-center justify-center">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                            {partner.name}
                          </h4>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                            {partner.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{partner.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Link 
                  to="/partners"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  View All Partners
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-slate-400 rounded-full blur-xl"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 font-heading font-semibold text-sm border border-blue-400/30 mb-6"
              >
                <BarChart3Icon className="w-4 h-4 mr-2" />
                Real Impact Numbers
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Transforming Lives Through
                <span className="text-blue-300"> Measurable Impact</span>
              </h2>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Every statistic represents a life changed, a family restored, and hope renewed in our communities.
              </p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.cardContainer}
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: UsersIcon, 
                  number: "50+", 
                  label: "Widows Empowered", 
                  description: "Women receiving support",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: TrendingUpIcon, 
                  number: "17", 
                  label: "Businesses Started", 
                  description: "New enterprises in 2023",
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  icon: HandIcon, 
                  number: "5.5M", 
                  label: "FCFA Distributed", 
                  description: "In capital and support",
                  color: "from-purple-500 to-violet-500"
                },
                { 
                  icon: TargetIcon, 
                  number: "100%", 
                  label: "Success Rate", 
                  description: "Community reintegration",
                  color: "from-orange-500 to-red-500"
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
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
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
                    </motion.div>

                    {/* Animated Number */}
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-white mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>

                    <h3 className="text-xl font-bold text-white/90 mb-3">
                      {stat.label}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed">
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
                          <Sparkles className="w-6 h-6 text-blue-300" />
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
                className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white py-4 px-8 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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
        </section>

        {/* Crisis Context Section */}
        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-300 font-heading font-semibold text-sm">
                    <AlertTriangleIcon className="w-4 h-4 mr-2" />
                    Crisis Context
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Understanding the <span className="text-primary">Anglophone Crisis</span>
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  The ongoing conflict in Cameroon's Northwest and Southwest regions has devastated communities, displaced families, and disrupted essential services.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">4,000+</div>
                    <div className="text-sm text-white/80">Lives Lost</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">700K+</div>
                    <div className="text-sm text-white/80">Displaced</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">80%</div>
                    <div className="text-sm text-white/80">Schools Closed</div>
                  </div>
                </div>
                <Link 
                  to="/crisis"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn About the Crisis
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Cameroon map"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-ping animation-delay-300"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionTitle 
              title="Latest News & Updates" 
              subtitle="Stay informed about our latest developments" 
              centered 
            />
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.cardContainer}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Women's Empowerment Program Expansion",
                  date: "March 15, 2024",
                  image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  excerpt: "Our women's empowerment program reaches 50 new beneficiaries..."
                },
                {
                  title: "New Partnership with Notre Dame",
                  date: "February 28, 2024",
                  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  excerpt: "Strategic partnership opens new opportunities for scholarships..."
                },
                {
                  title: "Mobile Health Clinic Launch",
                  date: "January 20, 2024",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                  excerpt: "First mobile health clinic begins serving remote communities..."
                }
              ].map((article, index) => (
                <NewsCard key={index} {...article} />
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/news"
                className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                Read All News & Stories
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-heading font-semibold text-sm">
                    <HeartIcon className="w-4 h-4 mr-2" />
                    Make a Difference
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Support Our <span className="text-primary">Mission</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Your donation directly impacts lives. Every contribution helps us restore hope and build a better future for Cameroon.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: CreditCardIcon, title: "Online Donation", description: "Secure credit card payments" },
                    { icon: SmartphoneIcon, title: "Mobile Money", description: "MTN MoMo: +237 671-196-020" },
                    { icon: PhoneIcon, title: "Direct Contact", description: "Personal assistance available" }
                  ].map((method, index) => (
                    <motion.div
                      key={index}
                      className="p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <method.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-800 mb-2">{method.title}</h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-x-4">
                  <Link 
                    to="/donate"
                    className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
                  >
                    Donate Now
                    <HeartIcon className="ml-2 w-5 h-5" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    Get Involved
                    <UsersIcon className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Preview Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Make a <span className="text-secondary">Difference?</span>
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join us in our mission to restore hope and transform lives in Cameroon. Every action counts, every donation matters.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: MailIcon, text: "jumbamfamilyfoundation@gmail.com" },
                    { icon: PhoneIcon, text: "(+237) 691-51-32-45" },
                    { icon: MapPinIcon, text: "North West Region, Cameroon" }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <contact.icon className="w-5 h-5 text-white/80" />
                      <span className="text-white/90">{contact.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white resize-none"
                  />
                  <Link
                    to="/contact"
                    className="w-full bg-secondary text-primary py-3 rounded-lg font-bold text-center block hover:bg-secondary/90 transition-colors"
                  >
                    Send Message
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Component Definitions
interface CoreAreaCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

const CoreAreaCard: React.FC<CoreAreaCardProps> = ({ icon: Icon, title, description, features, image, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div
          className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center`}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        <Link
          to="/core-areas"
          className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
        >
          Learn More
          <ChevronRightIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, image, excerpt }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CalendarIcon className="w-4 h-4 mr-1" />
          {date}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{excerpt}</p>
        
        <Link
          to="/news"
          className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
        >
          Read Full Article
          <ChevronRightIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
