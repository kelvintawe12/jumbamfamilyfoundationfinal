import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/common/SectionTitle';
import { 
  AlertTriangleIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  HomeIcon,
  SchoolIcon,
  HeartIcon,
  ShieldIcon,
  TrendingDownIcon,
  BookOpenIcon,
  Star,
  Sparkles,
  Globe,
  ArrowRightIcon,
  AlertCircleIcon,
  BarChart3Icon,
  Activity,
  Target,
  Clock,
  Eye,
  Zap
} from 'lucide-react';

export const Crisis: React.FC = () => {
  // Enhanced state management for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTimelineEvent, setActiveTimelineEvent] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);
  
  // Animation controls
  const heroControls = useAnimation();
  const timelineControls = useAnimation();
  const statsControls = useAnimation();
  
  // Visibility tracking
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    setIsLoaded(true);
    heroControls.start('visible');
  }, [heroControls]);
  
  useEffect(() => {
    if (timelineInView) {
      timelineControls.start('visible');
    }
  }, [timelineInView, timelineControls]);
  
  useEffect(() => {
    if (statsInView) {
      statsControls.start('visible');
    }
  }, [statsInView, statsControls]);

  // Timeline data with enhanced information
  const timelineEvents = [
    {
      year: 1961,
      title: 'Unification of Cameroon',
      description: 'British Southern Cameroons joined French Cameroon to form the Federal Republic of Cameroon, creating a bilingual nation with distinct cultural regions.',
      icon: <Globe className="w-6 h-6" />,
      color: 'blue'
    },
    {
      year: 1972,
      title: 'Constitutional Changes',
      description: 'The federal system was abolished, replaced by a unitary state, beginning the marginalization of Anglophone regions.',
      icon: <BookOpenIcon className="w-6 h-6" />,
      color: 'orange'
    },
    {
      year: 2016,
      title: 'Beginning of the Crisis',
      description: 'Peaceful protests by lawyers and teachers in the Anglophone regions evolved into a broader conflict over marginalization and language rights.',
      icon: <UsersIcon className="w-6 h-6" />,
      color: 'yellow'
    },
    {
      year: 2017,
      title: 'Declaration of Independence',
      description: 'Separatist groups declared independence of "Ambazonia," leading to armed confrontation between government forces and separatist fighters.',
      icon: <ShieldIcon className="w-6 h-6" />,
      color: 'red'
    },
    {
      year: 2019,
      title: 'Humanitarian Crisis Peak',
      description: 'Over 3,000 people killed and 500,000 displaced according to UN reports. International attention increased but conflict continued.',
      icon: <AlertTriangleIcon className="w-6 h-6" />,
      color: 'purple'
    },
    {
      year: 2023,
      title: 'Current Situation',
      description: 'The crisis continues with over 4,000 people killed and 700,000 displaced, severely affecting education, healthcare, and economic activities.',
      icon: <TrendingDownIcon className="w-6 h-6" />,
      color: 'gray'
    }
  ];

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

    timelineContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3
        }
      }
    },

    timelineEvent: {
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
        x: 5,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
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

    pulseAnimation: {
      animate: {
        scale: [1, 1.05, 1],
        opacity: [0.7, 1, 0.7],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>The Anglophone Crisis - Jumbam Family Foundation</title>
        <meta name="description" content="Understanding the ongoing Anglophone crisis in Cameroon - its origins, impact, and why our work is urgently needed." />
      </Helmet>
      
      <div className="w-full bg-white overflow-hidden">
        {/* Enhanced Hero Section */}
        <motion.section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900"
          initial="hidden"
          animate="visible"
          variants={premiumVariants.heroContainer}
        >
          {/* Animated Background with Crisis Theme */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-yellow/5" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20v20h20v-20H20zm10 10l5 5v5h-5v-5l-5-5zm0 0V10l5-5h5v5l-5 5z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}
            />
          </motion.div>

          {/* Floating Warning Elements */}
          <motion.div 
            className="absolute top-20 left-10 text-yellow-400 opacity-30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <AlertTriangleIcon size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-20 text-white opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <MapPinIcon size={60} />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                className="mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="inline-flex items-center px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full text-red-300 font-heading font-semibold text-sm border border-red-400/30">
                  <AlertCircleIcon className="w-4 h-4 mr-2" />
                  Ongoing Humanitarian Crisis
                </span>
              </motion.div>

              <motion.h1 
                className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                  The Anglophone Crisis
                </span>
              </motion.h1>

              <motion.p 
                className="font-heading text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
                variants={premiumVariants.heroContent}
              >
                Understanding the ongoing conflict that has displaced over 700,000 people and why our humanitarian work is urgently needed.
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
                  Learn the Facts
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>

              {/* Quick Stats Bar */}
              <motion.div 
                className="mt-12 grid grid-cols-3 gap-6"
                variants={premiumVariants.staggerContainer}
              >
                {[
                  { number: "7+", label: "Years of Crisis" },
                  { number: "4K+", label: "Lives Lost" },
                  { number: "700K+", label: "Displaced" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    variants={premiumVariants.fadeInUp}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-heading font-bold text-yellow-300 mb-1">{stat.number}</div>
                    <div className="text-sm font-heading text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Crisis Overview Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center mb-16"
                variants={premiumVariants.staggerContainer}
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-600 font-heading font-semibold text-sm border border-red-200 mb-6"
                  variants={premiumVariants.fadeInUp}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Crisis Context
                </motion.div>
                
                <motion.h2 
                  className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                  variants={premiumVariants.fadeInUp}
                >
                  Understanding the Conflict
                </motion.h2>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200/50 mb-16"
                variants={premiumVariants.fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="font-heading text-xl leading-relaxed mb-6 text-gray-700"
                  variants={premiumVariants.fadeInUp}
                >
                  The Anglophone Crisis in Cameroon is an ongoing conflict in the Northwest and Southwest regions of Cameroon, where the country's Anglophone minority (about 20% of the population) has been fighting for greater autonomy or independence from the majority Francophone government.
                </motion.p>
                
                <motion.p 
                  className="font-heading text-lg leading-relaxed text-gray-600"
                  variants={premiumVariants.fadeInUp}
                >
                  The crisis has had devastating effects on the local population, with thousands killed, hundreds of thousands displaced, and significant disruptions to education, healthcare, and economic activities. The Jumbam Family Foundation works directly with those affected by this crisis, particularly widows and orphans who have lost family members to the violence.
                </motion.p>
              </motion.div>

              {/* Regional Impact */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={premiumVariants.staggerContainer}
              >
                <motion.div
                  className="bg-blue-50 p-6 rounded-xl border border-blue-200"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <MapPinIcon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">Northwest Region</h3>
                  <p className="font-heading text-gray-600">Bamenda, Kumbo, and surrounding areas severely affected. Major displacement and economic disruption.</p>
                </motion.div>
                
                <motion.div
                  className="bg-green-50 p-6 rounded-xl border border-green-200"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <MapPinIcon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">Southwest Region</h3>
                  <p className="font-heading text-gray-600">Buea, Limbe, and coastal areas experiencing violence, displacement, and economic collapse.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <motion.section 
          ref={timelineRef}
          className="py-24 bg-gradient-to-br from-gray-50 to-white"
          initial="hidden"
          animate={timelineControls}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.staggerContainer}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full text-orange-600 font-heading font-semibold text-sm border border-orange-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <Clock className="w-4 h-4 mr-2" />
                Historical Timeline
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                From Unity to Crisis
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                variants={premiumVariants.fadeInUp}
              >
                Trace the key events that led from Cameroon's unification to the current humanitarian crisis.
              </motion.p>
            </motion.div>

            <motion.div 
              className="max-w-6xl mx-auto relative"
              variants={premiumVariants.timelineContainer}
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-red-500 opacity-30"></div>
              
              {/* Timeline Events */}
              <div className="space-y-16">
                {timelineEvents.map((event, index) => (
                  <PremiumTimelineEvent
                    key={index}
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    icon={event.icon}
                    color={event.color}
                    position={index % 2 === 0 ? 'left' : 'right'}
                    index={index}
                    activeEvent={activeTimelineEvent}
                    onActivate={setActiveTimelineEvent}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Crisis Impact Statistics */}
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
                className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-600 font-heading font-semibold text-sm border border-red-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <BarChart3Icon className="w-4 h-4 mr-2" />
                Human Impact
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                The Human Cost of Crisis
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                variants={premiumVariants.fadeInUp}
              >
                Real numbers behind the humanitarian catastrophe affecting millions of Cameroonians.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={premiumVariants.staggerContainer}
            >
              {[
                {
                  icon: <AlertTriangleIcon className="w-8 h-8" />,
                  number: "4,000+",
                  label: "Lives Lost",
                  description: "Civilians killed since 2016",
                  color: "red",
                  bgColor: "bg-red-50",
                  textColor: "text-red-600"
                },
                {
                  icon: <UsersIcon className="w-8 h-8" />,
                  number: "700K+",
                  label: "People Displaced",
                  description: "Internally displaced persons",
                  color: "orange",
                  bgColor: "bg-orange-50",
                  textColor: "text-orange-600"
                },
                {
                  icon: <SchoolIcon className="w-8 h-8" />,
                  number: "80%",
                  label: "Schools Closed",
                  description: "Educational institutions affected",
                  color: "blue",
                  bgColor: "bg-blue-50",
                  textColor: "text-blue-600"
                },
                {
                  icon: <HomeIcon className="w-8 h-8" />,
                  number: "200K+",
                  label: "Children Affected",
                  description: "Out of school due to crisis",
                  color: "purple",
                  bgColor: "bg-purple-50",
                  textColor: "text-purple-600"
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
                    {/* Background Effect */}
                    <motion.div
                      className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                    
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
                      
                      {/* Pulse Effect */}
                      <motion.div
                        className={`absolute inset-0 ${stat.bgColor} rounded-2xl`}
                        animate={hoveredStat === index ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Number */}
                    <motion.div 
                      className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-2"
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
                          <Sparkles className="w-6 h-6 text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
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
                Our Response
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold mb-6"
                variants={premiumVariants.fadeInUp}
              >
                We Cannot Stand Idle
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl mb-12 text-white/90"
                variants={premiumVariants.fadeInUp}
              >
                While the crisis continues, we work tirelessly to support the victims—the widows, orphans, and displaced families who need hope restored in their lives.
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
                  See Our Response
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Support Our Work
                  <HeartIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

// Premium Timeline Event Component
interface PremiumTimelineEventProps {
  year: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  position: 'left' | 'right';
  index: number;
  activeEvent: number | null;
  onActivate: (index: number | null) => void;
}

const PremiumTimelineEvent: React.FC<PremiumTimelineEventProps> = ({ 
  year, title, description, icon, color, position, index, activeEvent, onActivate 
}) => {
  const colorClasses: { [key: string]: string } = {
    blue: 'bg-blue-500 border-blue-200',
    orange: 'bg-orange-500 border-orange-200',
    yellow: 'bg-yellow-500 border-yellow-200',
    red: 'bg-red-500 border-red-200',
    purple: 'bg-purple-500 border-purple-200',
    gray: 'bg-gray-500 border-gray-200'
  };

  const bgClasses: { [key: string]: string } = {
    blue: 'bg-blue-50',
    orange: 'bg-orange-50',
    yellow: 'bg-yellow-50',
    red: 'bg-red-50',
    purple: 'bg-purple-50',
    gray: 'bg-gray-50'
  };

  return (
    <motion.div 
      className={`flex items-center ${position === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
      variants={{
        hidden: { opacity: 0, x: position === 'left' ? 60 : -60 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.1
          }
        }
      }}
      whileHover="hover"
      onHoverStart={() => onActivate(index)}
      onHoverEnd={() => onActivate(null)}
    >
      {/* Content */}
      <motion.div 
        className={`w-5/12 px-6 ${position === 'left' ? 'text-left' : 'text-right'}`}
        variants={{
          hover: {
            x: position === 'left' ? -10 : 10,
            transition: { duration: 0.3 }
          }
        }}
      >
        <motion.div
          className={`${bgClasses[color]} p-6 rounded-xl border border-gray-200/50 shadow-lg`}
          animate={activeEvent === index ? {
            scale: [1, 1.02, 1],
            boxShadow: ["0 4px 20px rgba(0,0,0,0.1)", "0 8px 30px rgba(0,0,0,0.15)", "0 4px 20px rgba(0,0,0,0.1)"]
          } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="font-heading text-2xl font-bold text-primary mb-2"
            animate={activeEvent === index ? {
              scale: [1, 1.05, 1]
            } : {}}
            transition={{ duration: 0.5 }}
          >
            {year}
          </motion.div>
          
          <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">{title}</h3>
          
          <p className="font-heading text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <div className="relative flex items-center justify-center w-2/12">
        <motion.div 
          className={`w-16 h-16 ${colorClasses[color]} rounded-full flex items-center justify-center text-white z-10 shadow-lg`}
          whileHover={{ 
            scale: 1.2, 
            rotate: 10,
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
          }}
          animate={activeEvent === index ? {
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          } : {}}
          transition={{ 
            hover: { type: "spring", stiffness: 300 },
            animate: { duration: 0.5 }
          }}
        >
          {icon}
        </motion.div>
        
        {/* Glow Effect */}
        <AnimatePresence>
          {activeEvent === index && (
            <motion.div
              className={`absolute inset-0 w-16 h-16 ${colorClasses[color]} rounded-full opacity-20`}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0]
              }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Empty Space */}
      <div className="w-5/12"></div>
    </motion.div>
  );
};