import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/common/SectionTitle';
import { 
  BrainIcon, 
  BriefcaseIcon, 
  UsersIcon, 
  ClipboardCheckIcon,
  HeartIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  CheckIcon,
  TrendingUpIcon,
  Shield,
  Star,
  Sparkles,
  Target,
  Users,
  Globe,
  Lightbulb,
  RefreshCw
} from 'lucide-react';

export const Model: React.FC = () => {
  // Enhanced state management for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredFlowStep, setHoveredFlowStep] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const flowchartRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  
  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);
  
  // Animation controls
  const heroControls = useAnimation();
  const flowchartControls = useAnimation();
  const stepsControls = useAnimation();
  
  // Visibility tracking
  const flowchartInView = useInView(flowchartRef, { once: true, amount: 0.3 });
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    setIsLoaded(true);
    heroControls.start('visible');
  }, [heroControls]);
  
  useEffect(() => {
    if (flowchartInView) {
      flowchartControls.start('visible');
    }
  }, [flowchartInView, flowchartControls]);
  
  useEffect(() => {
    if (stepsInView) {
      stepsControls.start('visible');
    }
  }, [stepsInView, stepsControls]);

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

    flowchartContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3
        }
      }
    },

    flowStep: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        y: 30
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      },
      hover: {
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    modelStep: {
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

    arrowAnimation: {
      animate: {
        y: [0, 10, 0],
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
        <title>Our Model - Jumbam Family Foundation</title>
        <meta name="description" content="Discover our comprehensive approach to healing and empowerment through psychosocial support, business training, and community reintegration." />
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
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/5" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute top-20 left-10 text-primary opacity-30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lightbulb size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-20 text-white opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Target size={60} />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                className="mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-heading font-semibold text-sm border border-primary/30">
                  <Target className="w-4 h-4 mr-2" />
                  Comprehensive Approach
                </span>
              </motion.div>

              <motion.h1 
                className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  Our Model
                </span>
              </motion.h1>

              <motion.p 
                className="font-heading text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
                variants={premiumVariants.heroContent}
              >
                A comprehensive approach to restoring hope and dignity through healing, empowerment, and sustainable transformation.
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
                  Explore Our Process
                  <ArrowDownIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Model Introduction */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-heading font-semibold text-sm border border-blue-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <HeartIcon className="w-4 h-4 mr-2" />
                Healing Through Action
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-8"
                variants={premiumVariants.fadeInUp}
              >
                Understanding Our Approach
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 mb-8 leading-relaxed"
                variants={premiumVariants.fadeInUp}
              >
                People who have been affected by warfare often face significant mental trauma as a result. Our model begins by providing psychosocial and mental health support to victims of the crisis.
              </motion.p>
              
              <motion.p 
                className="font-heading text-lg text-gray-600 mb-12 leading-relaxed"
                variants={premiumVariants.fadeInUp}
              >
                For widows, we provide business training and capital to return to their communities and start sustainable small business ventures. We provide follow-up support through peer-to-peer group support, mentorship, and apprenticeship. This combination ensures beneficiaries regain sustainable livelihoods and fully reintegrate into their communities.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={premiumVariants.staggerContainer}
              >
                <motion.div
                  className="bg-primary/5 p-6 rounded-xl text-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <BrainIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="font-heading text-xl font-bold text-gray-800 mb-2">Mental Health First</div>
                  <div className="font-heading text-gray-600">Healing trauma before building futures</div>
                </motion.div>
                
                <motion.div
                  className="bg-green-50 p-6 rounded-xl text-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <TrendingUpIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <div className="font-heading text-xl font-bold text-gray-800 mb-2">Sustainable Growth</div>
                  <div className="font-heading text-gray-600">Long-term economic empowerment</div>
                </motion.div>
                
                <motion.div
                  className="bg-blue-50 p-6 rounded-xl text-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="font-heading text-xl font-bold text-gray-800 mb-2">Community Integration</div>
                  <div className="font-heading text-gray-600">Full reintegration and support</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Flowchart Section */}
        <motion.section 
          ref={flowchartRef}
          className="py-24 bg-gradient-to-br from-gray-50 to-white"
          initial="hidden"
          animate={flowchartControls}
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
                <RefreshCw className="w-4 h-4 mr-2" />
                Our Process Flow
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Step-by-Step Transformation
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                variants={premiumVariants.fadeInUp}
              >
                Follow the journey from trauma to sustainable livelihood through our proven methodology.
              </motion.p>
            </motion.div>

            <motion.div 
              className="max-w-6xl mx-auto"
              variants={premiumVariants.flowchartContainer}
            >
              {/* Flowchart Layout */}
              <div className="relative">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <FlowchartStep
                    title="Psychosocial Support"
                    description="Mental health support and trauma healing for crisis victims"
                    icon={<BrainIcon className="w-8 h-8" />}
                    color="purple"
                    index={0}
                    hoveredIndex={hoveredFlowStep}
                    onHover={setHoveredFlowStep}
                    position="top-left"
                  />
                  
                  <FlowchartStep
                    title="Business Training and Capital"
                    description="Comprehensive business skills and startup funding"
                    icon={<BriefcaseIcon className="w-8 h-8" />}
                    color="blue"
                    index={1}
                    hoveredIndex={hoveredFlowStep}
                    onHover={setHoveredFlowStep}
                    position="top-right"
                  />
                </div>

                {/* Connecting Arrows */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    variants={premiumVariants.arrowAnimation}
                    animate="animate"
                  >
                    <ArrowDownIcon className="w-8 h-8 text-orange-500" />
                  </motion.div>
                </div>

                {/* Center Step */}
                <div className="flex justify-center mb-12">
                  <FlowchartStep
                    title="Business Venture"
                    description="Launch sustainable small business enterprises"
                    icon={<TrendingUpIcon className="w-8 h-8" />}
                    color="green"
                    index={2}
                    hoveredIndex={hoveredFlowStep}
                    onHover={setHoveredFlowStep}
                    position="center"
                    isCenter={true}
                  />
                </div>

                {/* Connecting Arrow */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    variants={premiumVariants.arrowAnimation}
                    animate="animate"
                  >
                    <ArrowDownIcon className="w-8 h-8 text-orange-500" />
                  </motion.div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <FlowchartStep
                    title="Group Support"
                    description="Peer-to-peer support networks and community building"
                    icon={<UsersIcon className="w-8 h-8" />}
                    color="indigo"
                    index={3}
                    hoveredIndex={hoveredFlowStep}
                    onHover={setHoveredFlowStep}
                    position="bottom-left"
                  />
                  
                  <FlowchartStep
                    title="Mentorship/Apprenticeship"
                    description="Ongoing guidance and skill development programs"
                    icon={<ClipboardCheckIcon className="w-8 h-8" />}
                    color="teal"
                    index={4}
                    hoveredIndex={hoveredFlowStep}
                    onHover={setHoveredFlowStep}
                    position="bottom-right"
                  />
                </div>

                {/* Final Arrow */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    variants={premiumVariants.arrowAnimation}
                    animate="animate"
                  >
                    <ArrowDownIcon className="w-8 h-8 text-orange-500" />
                  </motion.div>
                </div>

                {/* Final Outcome */}
                <div className="flex justify-center">
                  <FlowchartStep
                    title="Sustainable Livelihoods and Reintegration"
                    description="Complete community reintegration with sustainable income sources"
                    icon={<Globe className="w-8 h-8" />}
                    color="emerald"
                    index={5}
                    hoveredIndex={hoveredFlowStep}
                    onHover={setHoveredFlowStep}
                    position="final"
                    isFinal={true}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Detailed Steps Section */}
        <motion.section 
          ref={stepsRef}
          className="py-24 bg-white"
          initial="hidden"
          animate={stepsControls}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.staggerContainer}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-heading font-semibold text-sm border border-primary/20 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <CheckIcon className="w-4 h-4 mr-2" />
                Detailed Process
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                How We Transform Lives
              </motion.h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-16">
              <PremiumModelStep
                number={1}
                title="Psychosocial Support & Mental Health"
                description="We begin with comprehensive psychosocial support to help widows and families process grief and trauma from the crisis. Our trained counselors provide individual and group therapy sessions, creating a safe space for healing and emotional recovery. This foundation of mental wellness is essential before any other interventions can be effective."
                icon={<BrainIcon className="h-12 w-12" />}
                color="purple"
                features={["Individual counseling sessions", "Group therapy programs", "Trauma-informed care", "Mental health assessment"]}
                index={0}
                activeStep={activeStep}
                onActivate={setActiveStep}
              />
              
              <PremiumModelStep
                number={2}
                title="Business Training & Capital Provision"
                description="Participants receive comprehensive business training covering financial literacy, market analysis, product development, and business management. Upon successful completion, they receive startup capital ranging from $200-$500 to establish their chosen business venture. Our training ensures they have the skills needed for sustainable success."
                icon={<BriefcaseIcon className="h-12 w-12" />}
                color="blue"
                features={["Financial literacy training", "Business plan development", "Market research skills", "Startup capital provision"]}
                index={1}
                activeStep={activeStep}
                onActivate={setActiveStep}
                reverse
              />
              
              <PremiumModelStep
                number={3}
                title="Mentorship & Apprenticeship Programs"
                description="Ongoing mentorship pairs each participant with successful local entrepreneurs who provide guidance, advice, and support. Our apprenticeship programs offer hands-on learning opportunities in various trades and business sectors, ensuring participants develop practical skills alongside their business ventures."
                icon={<UsersIcon className="h-12 w-12" />}
                color="green"
                features={["One-on-one mentorship", "Skill-based apprenticeships", "Peer learning networks", "Industry connections"]}
                index={2}
                activeStep={activeStep}
                onActivate={setActiveStep}
              />
              
              <PremiumModelStep
                number={4}
                title="Follow-up & Community Building"
                description="Regular follow-up visits and community-building activities help sustain progress and create networks of mutual support. We conduct quarterly assessments, organize peer support groups, and facilitate community events that strengthen social bonds and business networks among participants."
                icon={<ClipboardCheckIcon className="h-12 w-12" />}
                color="indigo"
                features={["Quarterly progress assessments", "Peer support groups", "Community networking events", "Ongoing technical assistance"]}
                index={3}
                activeStep={activeStep}
                onActivate={setActiveStep}
                reverse
              />
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
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
                <Star className="w-4 h-4 mr-2" />
                Proven Results
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Our Model Works
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl mb-12 text-white/90"
                variants={premiumVariants.fadeInUp}
              >
                This comprehensive approach has helped transform the lives of over 50 widows and their families, creating sustainable livelihoods and restoring dignity to entire communities.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
                variants={premiumVariants.staggerContainer}
              >
                <motion.div
                  className="text-center"
                  variants={premiumVariants.fadeInUp}
                >
                  <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
                  <div className="font-heading text-white/80">Widows Empowered</div>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  variants={premiumVariants.fadeInUp}
                >
                  <div className="text-4xl font-heading font-bold text-primary mb-2">17</div>
                  <div className="font-heading text-white/80">Businesses Started</div>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  variants={premiumVariants.fadeInUp}
                >
                  <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                  <div className="font-heading text-white/80">Reintegration Rate</div>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  variants={premiumVariants.fadeInUp}
                >
                  <div className="text-4xl font-heading font-bold text-primary mb-2">200+</div>
                  <div className="font-heading text-white/80">Lives Impacted</div>
                </motion.div>
              </motion.div>

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
                  See Our Impact
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Involved
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

// Flowchart Step Component
interface FlowchartStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'purple' | 'blue' | 'green' | 'indigo' | 'teal' | 'emerald';
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  position: string;
  isCenter?: boolean;
  isFinal?: boolean;
}

const FlowchartStep: React.FC<FlowchartStepProps> = ({ 
  title, description, icon, color, index, hoveredIndex, onHover, position, isCenter, isFinal 
}) => {
  const colorClasses = {
    purple: 'bg-purple-500 border-purple-200',
    blue: 'bg-blue-500 border-blue-200',
    green: 'bg-green-500 border-green-200',
    indigo: 'bg-indigo-500 border-indigo-200',
    teal: 'bg-teal-500 border-teal-200',
    emerald: 'bg-emerald-500 border-emerald-200'
  };

  const bgClasses = {
    purple: 'bg-purple-50',
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    indigo: 'bg-indigo-50',
    teal: 'bg-teal-50',
    emerald: 'bg-emerald-50'
  };

  return (
    <motion.div
      className={`relative ${isCenter ? 'max-w-md mx-auto' : isFinal ? 'max-w-lg mx-auto' : 'max-w-sm'}`}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.1
          }
        }
      }}
      whileHover="hover"
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
    >
      <motion.div
        className={`${bgClasses[color]} p-6 rounded-2xl border-2 border-gray-200/50 shadow-lg relative overflow-hidden`}
        variants={{
          hover: {
            scale: 1.05,
            y: -5,
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3 }
          }
        }}
      >
        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses[color]} rounded-2xl mb-4 text-white`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
          {title}
        </h3>
        
        <p className="font-heading text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Floating Sparkle */}
        <AnimatePresence>
          {hoveredIndex === index && (
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
      </motion.div>
    </motion.div>
  );
};

// Premium Model Step Component
interface PremiumModelStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'purple' | 'blue' | 'green' | 'indigo';
  features: string[];
  index: number;
  activeStep: number | null;
  onActivate: (index: number | null) => void;
  reverse?: boolean;
}

const PremiumModelStep: React.FC<PremiumModelStepProps> = ({ 
  number, title, description, icon, color, features, index, activeStep, onActivate, reverse = false 
}) => {
  const colorClasses = {
    purple: 'bg-purple-500 border-purple-200 text-purple-600',
    blue: 'bg-blue-500 border-blue-200 text-blue-600',
    green: 'bg-green-500 border-green-200 text-green-600',
    indigo: 'bg-indigo-500 border-indigo-200 text-indigo-600'
  };

  const bgClasses = {
    purple: 'bg-purple-50',
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    indigo: 'bg-indigo-50'
  };

  return (
    <motion.div 
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
      variants={{
        hidden: { opacity: 0, x: reverse ? 60 : -60 },
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
      {/* Icon Section */}
      <motion.div 
        className="flex-shrink-0"
        variants={{
          hover: {
            scale: 1.1,
            rotate: 5,
            transition: { type: "spring", stiffness: 300 }
          }
        }}
      >
        <div className={`${bgClasses[color]} p-8 rounded-3xl border-4 border-white shadow-xl relative`}>
          <motion.div
            className={`inline-flex items-center justify-center w-20 h-20 ${colorClasses[color].split(' ')[0]} rounded-2xl text-white`}
            animate={activeStep === index ? {
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            } : {}}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          
          <motion.div
            className={`absolute -top-2 -right-2 w-10 h-10 ${colorClasses[color].split(' ')[0]} rounded-full flex items-center justify-center text-white font-heading font-bold text-lg`}
            animate={activeStep === index ? {
              scale: [1, 1.2, 1]
            } : {}}
            transition={{ duration: 0.5 }}
          >
            {number}
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className={`flex-1 ${reverse ? 'text-right lg:text-right' : 'text-left lg:text-left'}`}
        variants={{
          hover: {
            x: reverse ? -10 : 10,
            transition: { duration: 0.3 }
          }
        }}
      >
        <motion.h3 
          className="font-heading text-3xl font-bold text-gray-800 mb-4"
          animate={activeStep === index ? {
            scale: [1, 1.05, 1]
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="font-heading text-lg text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0.8 }}
          animate={activeStep === index ? { opacity: 1 } : { opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div 
          className={`grid grid-cols-1 sm:grid-cols-2 gap-3`}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={activeStep === index ? "visible" : "hidden"}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-center space-x-2"
              variants={{
                hidden: { opacity: 0, x: reverse ? 20 : -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <CheckIcon className={`w-5 h-5 ${colorClasses[color].split(' ')[2]}`} />
              <span className="font-heading text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};