import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/SectionTitle';
import { 
  HeartIcon,
  CalendarIcon,
  StarIcon,
  CreditCardIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DollarSignIcon,
  GiftIcon,
  HandHelpingIcon,
  ShieldIcon,
  TrendingUpIcon,
  SparklesIcon,
  GraduationCapIcon,
  StethoscopeIcon,
  HomeIcon,
  Target,
  Activity,
  Eye,
  Zap,
  Globe,
  AlertCircleIcon,
  PlusCircleIcon
} from 'lucide-react';

export const Donate: React.FC = () => {
  // Enhanced state management for animations and form
  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredImpact, setHoveredImpact] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4]);

  // Animation controls
  const heroControls = useAnimation();
  const formControls = useAnimation();
  const impactControls = useAnimation();
  const testimonialsControls = useAnimation();

  // Visibility tracking
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const impactInView = useInView(impactRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    setIsLoaded(true);
    heroControls.start('visible');
  }, [heroControls]);

  useEffect(() => {
    if (formInView) formControls.start('visible');
  }, [formInView, formControls]);

  useEffect(() => {
    if (impactInView) impactControls.start('visible');
  }, [impactInView, impactControls]);

  useEffect(() => {
    if (testimonialsInView) testimonialsControls.start('visible');
  }, [testimonialsInView, testimonialsControls]);

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate donation processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowThankYou(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 1500);
  };

  // Premium animation variants using brand colors
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

    impactCard: {
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
        boxShadow: "0 25px 50px -12px rgba(255, 215, 0, 0.25)",
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    },

    donationButton: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { 
        scale: 1, 
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      },
      hover: {
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)",
        transition: { duration: 0.2 }
      },
      tap: { scale: 0.95 }
    }
  };

  // Impact levels data using brand colors
  const impactLevels = [
    {
      amount: 25,
      title: "Educational Support",
      description: "Provides school supplies for a child affected by the crisis",
      icon: <GraduationCapIcon className="w-6 h-6" />,
      color: "primary",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
      borderColor: "border-primary/30"
    },
    {
      amount: 50,
      title: "Health & Wellness",
      description: "Covers basic healthcare services for a widow or orphan",
      icon: <StethoscopeIcon className="w-6 h-6" />,
      color: "accent",
      bgColor: "bg-accent/10",
      textColor: "text-accent",
      borderColor: "border-accent/30"
    },
    {
      amount: 100,
      title: "Small Business Kit",
      description: "Startup materials for a widow's small business venture",
      icon: <TrendingUpIcon className="w-6 h-6" />,
      color: "secondary",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary",
      borderColor: "border-secondary/30"
    },
    {
      amount: 200,
      title: "Housing Support",
      description: "Emergency shelter assistance for displaced families",
      icon: <HomeIcon className="w-6 h-6" />,
      color: "primary",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
      borderColor: "border-primary/30"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Mary N.",
      location: "Widow & Entrepreneur, Bamenda",
      quote: "The foundation didn't just give me money - they gave me hope. Now I run my own business and support other women in my community.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Grace T.",
      location: "Mother of 3, Buea",
      quote: "After losing my husband, I thought my children would never go to school again. Thanks to JFF, all three are now in university.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
    },
    {
      name: "Sarah K.",
      location: "Small Business Owner, Kumbo",
      quote: "The trauma healing sessions helped me rebuild not just my business, but my confidence. I'm now training other widows.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Donate - Jumba Family Foundation</title>
        <meta name="description" content="Support widows and orphans affected by the Anglophone crisis in Cameroon. Your donation restores hope and provides essential support." />
      </Helmet>

      {/* Testimonials Section */}
      {/* The testimonials section and all following JSX should be inside the main return's fragment or parent element.
          Remove any duplicate or misplaced code after the main return. */}
            <motion.section 
              ref={heroRef}
              className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-accent to-secondary"
              initial="hidden"
              animate="visible"
              variants={premiumVariants.heroContainer}
            >
              {/* Animated Background */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                style={{ y, opacity }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.05'%3E%3Cpath d='M30 30v30h30v-30H30zm15 15l7.5 7.5v7.5h-7.5v-7.5l-7.5-7.5zm0 0V15l7.5-7.5h7.5v7.5l-7.5 7.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                  }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute top-20 left-10 text-primary opacity-30"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <HeartIcon size={40} />
              </motion.div>
              
              <motion.div 
                className="absolute top-40 right-20 text-primary opacity-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <GiftIcon size={60} />
              </motion.div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <motion.div
                    className="mb-6"
                    variants={premiumVariants.heroContent}
                  >
                    <span className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-heading font-semibold text-sm border border-primary/30">
                      <HandHelpingIcon className="w-4 h-4 mr-2" />
                      Support Our Mission
                    </span>
                  </motion.div>

                  <motion.h1 
                    className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
                    variants={premiumVariants.heroContent}
                  >
                    <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                      Restore Hope
                    </span>
                  </motion.h1>

                  <motion.p 
                    className="font-heading text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto"
                    variants={premiumVariants.heroContent}
                  >
                    Your donation helps restore hope to those affected by the Anglophone crisis in Cameroon. Every contribution directly supports widows, orphans, and displaced families.
                  </motion.p>

                  {/* Quick Impact Stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-6 mb-12"
                    variants={premiumVariants.staggerContainer}
                  >
                    {[
                      { number: "$25", label: "School Supplies" },
                      { number: "$50", label: "Healthcare" },
                      { number: "$100", label: "Business Kit" }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="text-center"
                        variants={premiumVariants.fadeInUp}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">{stat.number}</div>
                        <div className="text-sm font-heading text-white/70">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={premiumVariants.staggerContainer}
                  >
                    <motion.button 
                      className="bg-primary hover:bg-primary/90 text-secondary px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg"
                      variants={premiumVariants.donationButton}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Donate Now
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.section>
            {/* Enhanced Donation Form Section */}
            <motion.section 
              ref={formRef}
              className="py-24 bg-tertiary"
              initial="hidden"
              animate={formControls}
            >
              <div className="container mx-auto px-6">
                <motion.div
                  className="text-center mb-16"
                  variants={premiumVariants.staggerContainer}
                >
                  <motion.div
                    className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-heading font-semibold text-sm border border-primary/30 mb-6"
                    variants={premiumVariants.fadeInUp}
                  >
                    <DollarSignIcon className="w-4 h-4 mr-2" />
                    Make Your Donation
                  </motion.div>
                  
                  <motion.h2 
                    className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6"
                    variants={premiumVariants.fadeInUp}
                  >
                    Choose Your Impact
                  </motion.h2>
                  
                  <motion.p 
                    className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                    variants={premiumVariants.fadeInUp}
                  >
                    Every dollar you donate goes directly to supporting those in need. Choose an amount that feels right for you.
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Enhanced Donation Form */}
                  <motion.div 
                    id="donation-form"
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200/50"
                    variants={premiumVariants.fadeInUp}
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-heading text-3xl font-bold mb-8 text-secondary flex items-center">
                      <GiftIcon className="w-8 h-8 text-primary mr-3" />
                      Make a Donation
                    </h3>
                    
                    <form onSubmit={handleDonationSubmit} className="space-y-8">
                      {/* Donation Type */}
                      <div>
                        <label className="font-heading font-bold mb-4 block text-secondary">
                          Select Donation Type
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { value: 'one-time', label: 'One-time', icon: <GiftIcon className="w-5 h-5" /> },
                            { value: 'monthly', label: 'Monthly', icon: <CalendarIcon className="w-5 h-5" /> }
                          ].map((type) => (
                            <motion.button
                              key={type.value}
                              type="button"
                              onClick={() => setDonationType(type.value as 'one-time' | 'monthly')}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 font-heading font-semibold flex items-center justify-center space-x-2 ${
                                donationType === type.value
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-gray-200 hover:border-primary/50 text-gray-600'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {type.icon}
                              <span>{type.label}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Donation Amount */}
                      <div>
                        <label className="font-heading font-bold mb-4 block text-secondary">
                          Choose Amount (USD)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                          {[25, 50, 100, 200].map((amount) => (
                            <motion.button
                              key={amount}
                              type="button"
                              onClick={() => setDonationAmount(amount)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 font-heading font-bold ${
                                donationAmount === amount
                                  ? 'border-primary bg-primary text-secondary'
                                  : 'border-gray-200 hover:border-primary/50 text-gray-600'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              ${amount}
                            </motion.button>
                          ))}
                        </div>
                        <div className="relative">
                          <DollarSignIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="number"
                            placeholder="Custom amount"
                            value={donationAmount || ''}
                            onChange={(e) => setDonationAmount(e.target.value ? parseInt(e.target.value) : null)}
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-heading"
                          />
                        </div>
                      </div>

                      {/* Payment Information */}
                      <div>
                        <label className="font-heading font-bold mb-4 block text-secondary flex items-center">
                          <CreditCardIcon className="w-5 h-5 mr-2 text-primary" />
                          Payment Information
                        </label>
                        <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl text-center border border-primary/20">
                          <ShieldIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                          <p className="font-heading font-semibold text-secondary mb-2">Secure Payment Processing</p>
                          <p className="font-heading text-sm text-gray-600">
                            Stripe/PayPal integration would be implemented here
                          </p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button 
                        type="submit" 
                        disabled={isProcessing || !donationAmount}
                        className={`w-full py-4 px-6 rounded-xl font-heading font-bold text-lg transition-all flex items-center justify-center shadow-lg ${
                          isProcessing || !donationAmount 
                            ? 'opacity-70 cursor-not-allowed bg-gray-300 text-gray-500' 
                            : 'bg-primary hover:bg-primary/90 text-secondary'
                        }`}
                        variants={premiumVariants.donationButton}
                        whileHover={!isProcessing && donationAmount ? "hover" : {}}
                        whileTap={!isProcessing && donationAmount ? "tap" : {}}
                      >
                        {isProcessing ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full mr-3"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Processing...
                          </>
                        ) : (
                          <>
                            {donationType === 'one-time' ? 'Donate' : 'Subscribe'}{' '}
                            {donationAmount ? `$${donationAmount}` : ''}
                            <HeartIcon className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center font-heading text-sm text-gray-500">
                        Your donation is tax-deductible to the extent allowed by law.
                      </p>
                    </form>
                  </motion.div>

                  {/* Impact Information */}
                  <motion.div 
                    className="space-y-8"
                    variants={premiumVariants.staggerContainer}
                  >
                    <motion.div 
                      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/50"
                      variants={premiumVariants.fadeInUp}
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                    >
                      <h3 className="font-heading text-2xl font-bold mb-6 flex items-center text-secondary">
                        <StarIcon className="w-6 h-6 text-primary mr-3" />
                        Your Impact
                      </h3>
                      <div className="space-y-6">
                        {impactLevels.map((impact, index) => (
                          <motion.div
                            key={index}
                            className={`flex items-start p-4 rounded-xl border transition-all duration-300 ${impact.borderColor} ${impact.bgColor}`}
                            whileHover={{ scale: 1.02, y: -2 }}
                            onHoverStart={() => setHoveredImpact(index)}
                            onHoverEnd={() => setHoveredImpact(null)}
                          >
                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${impact.bgColor} flex items-center justify-center mr-4 ${impact.textColor}`}>
                              {impact.icon}
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-heading font-bold text-secondary">{impact.title}</h4>
                                <span className={`font-heading font-bold ${impact.textColor}`}>${impact.amount}</span>
                              </div>
                              <p className="font-heading text-gray-600 text-sm">{impact.description}</p>
                            </div>
                            
                            {/* Hover Effect */}
                            <AnimatePresence>
                              {hoveredImpact === index && (
                                <motion.div
                                  className="absolute -top-1 -right-1"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1, rotate: 360 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  transition={{ duration: 0.4 }}
                                >
                                  <SparklesIcon className="w-5 h-5 text-primary" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div 
                      className="bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-2xl border border-secondary/20"
                      variants={premiumVariants.fadeInUp}
                    >
                      <h4 className="font-heading text-lg font-bold text-secondary mb-4 flex items-center">
                        <ShieldIcon className="w-5 h-5 text-primary mr-2" />
                        Why Donate With Us?
                      </h4>
                      <div className="space-y-3">
                        {[
                          "100% of donations go directly to beneficiaries",
                          "Transparent reporting on fund usage",
                          "Direct impact in Anglophone regions",
                          "Tax-deductible receipts provided"
                        ].map((point, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            <span className="font-heading text-sm text-gray-700">{point}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
              ref={testimonialsRef}
              className="py-24 bg-white"
              initial="hidden"
              animate={testimonialsControls}
            >
              <div className="container mx-auto px-6">
                <motion.div
                  className="text-center mb-16"
                  variants={premiumVariants.staggerContainer}
                >
                  <motion.div
                    className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-heading font-semibold text-sm border border-primary/30 mb-6"
                    variants={premiumVariants.fadeInUp}
                  >
                    <UsersIcon className="w-4 h-4 mr-2" />
                    Stories of Hope
                  </motion.div>

                  <motion.h2
                    className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6"
                    variants={premiumVariants.fadeInUp}
                  >
                    Real Impact, Real Lives
                  </motion.h2>

                  <motion.p
                    className="font-heading text-xl text-gray-600 max-w-3xl mx-auto"
                    variants={premiumVariants.fadeInUp}
                  >
                    Hear from the widows and families whose lives have been transformed by your generosity.
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/50 relative overflow-hidden"
                      variants={premiumVariants.fadeInUp}
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-heading font-bold text-secondary">{testimonial.name}</h4>
                          <p className="font-heading text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>

                      <blockquote className="font-heading text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Thank You Modal */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircleIcon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="font-heading text-2xl font-bold text-secondary mb-4">
                      Thank You for Your Generosity!
                    </h3>

                    <p className="font-heading text-gray-600 mb-6">
                      Your donation will directly support widows and orphans affected by the Anglophone crisis. Together, we're restoring hope.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.button
                        onClick={() => setShowThankYou(false)}
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-heading font-semibold transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Continue
                      </motion.button>

                      <Link to="/impact">
                        <motion.button
                          className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          See Our Impact
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
    </>
  );
};
