import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/common/SectionTitle';
import { 
  HeartIcon, 
  UsersIcon, 
  CalendarIcon, 
  MapPinIcon, 
  ShieldIcon,
  Star,
  Sparkles,
  ArrowRightIcon,
  CheckIcon,
  Globe,
  Home,
  Users,
  BookOpen,
  TrendingUp
} from 'lucide-react';

export const Story: React.FC = () => {
  // Enhanced state management for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
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
  
  // Visibility tracking
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    setIsLoaded(true);
    heroControls.start('visible');
  }, [heroControls]);
  
  useEffect(() => {
    if (timelineInView) {
      timelineControls.start('visible');
    }
  }, [timelineInView, timelineControls]);

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

    timelineItem: {
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
      }
    },

    testimonialCard: {
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
        scale: 1.02,
        boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.25)",
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
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Story - Jumbam Family Foundation</title>
        <meta name="description" content="Learn about our journey from tragedy to hope, and how we're transforming the Anglophone crisis in Cameroon into positive change." />
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
            <Star size={40} />
          </motion.div>
          
          <motion.div 
            className="absolute top-40 right-20 text-white opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <HeartIcon size={60} />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                className="mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-heading font-semibold text-sm border border-primary/30">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  From Tragedy to Hope
                </span>
              </motion.div>

              <motion.h1 
                className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
                variants={premiumVariants.heroContent}
              >
                <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  Our Story
                </span>
              </motion.h1>

              <motion.p 
                className="font-heading text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
                variants={premiumVariants.heroContent}
              >
                The journey of transforming unimaginable loss into a beacon of hope for thousands of Cameroonians affected by crisis.
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
                  Read Our Journey
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Memorial Section for Mr. Constantine */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full text-yellow-600 font-heading font-semibold text-sm border border-yellow-200 mb-8"
                variants={premiumVariants.fadeInUp}
              >
                <Star className="w-4 h-4 mr-2" />
                In Loving Memory
              </motion.div>
              
              <motion.div
                className="flex flex-col lg:flex-row items-center gap-12 mb-12"
                variants={premiumVariants.staggerContainer}
              >
                <motion.div
                  className="flex-shrink-0"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <img
                      src="/constantine.png"
                      alt="Mr. Ngek Constantine Jumbam"
                      className="w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl"
                    />
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <HeartIcon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex-1 text-left lg:text-left"
                  variants={premiumVariants.staggerContainer}
                >
                  <motion.h2 
                    className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                    variants={premiumVariants.fadeInUp}
                  >
                    Mr. Ngek Constantine Jumbam
                  </motion.h2>
                  
                  <motion.p 
                    className="font-heading text-xl text-gray-600 mb-6"
                    variants={premiumVariants.fadeInUp}
                  >
                    A dedicated public servant, loving father, and devoted husband whose life was tragically cut short while serving his community.
                  </motion.p>
                  
                  <motion.p 
                    className="font-heading text-lg text-gray-600 mb-8"
                    variants={premiumVariants.fadeInUp}
                  >
                    He believed in the power of democracy and community service. His legacy lives on through every life we touch, every widow we empower, and every child we educate.
                  </motion.p>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    variants={premiumVariants.staggerContainer}
                  >
                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-md"
                      variants={premiumVariants.fadeInUp}
                    >
                      <div className="font-heading text-lg font-bold text-gray-800 mb-1">Devoted Father</div>
                      <div className="font-heading text-sm text-gray-600">Raised children with love and values</div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-md"
                      variants={premiumVariants.fadeInUp}
                    >
                      <div className="font-heading text-lg font-bold text-gray-800 mb-1">Community Leader</div>
                      <div className="font-heading text-sm text-gray-600">Served his people with dedication</div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.blockquote 
                className="text-2xl font-heading italic text-gray-700 border-l-4 border-primary pl-6 bg-white/80 p-6 rounded-lg shadow-md"
                variants={premiumVariants.fadeInUp}
              >
                "His death was not in vain. Through our foundation, his spirit of service continues to transform lives across Cameroon."
              </motion.blockquote>
            </motion.div>
          </div>
        </section>

        {/* Crisis Context Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-600 font-heading font-semibold text-sm border border-red-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <ShieldIcon className="w-4 h-4 mr-2" />
                The Crisis Context
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Since 2016: A Nation in Crisis
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-gray-600 mb-8"
                variants={premiumVariants.fadeInUp}
              >
                Since 2016, Cameroon, our beloved home country, has descended into civil strife over the marginalization of the minority Anglophone population in the North West and South West regions.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                variants={premiumVariants.staggerContainer}
              >
                <motion.div
                  className="bg-red-50 p-6 rounded-xl text-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-heading font-bold text-red-600 mb-2">3,000+</div>
                  <div className="font-heading text-gray-700">Lives Lost</div>
                </motion.div>
                
                <motion.div
                  className="bg-orange-50 p-6 rounded-xl text-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-heading font-bold text-orange-600 mb-2">100K+</div>
                  <div className="font-heading text-gray-700">Children Out of School</div>
                </motion.div>
                
                <motion.div
                  className="bg-blue-50 p-6 rounded-xl text-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-heading font-bold text-blue-600 mb-2">100K+</div>
                  <div className="font-heading text-gray-700">Internally Displaced</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Tragedy Timeline */}
        <motion.section 
          ref={timelineRef}
          className="py-24 bg-gray-50"
          initial="hidden"
          animate={timelineControls}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              variants={premiumVariants.staggerContainer}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 font-heading font-semibold text-sm border border-gray-200 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                Our Personal Journey
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                March 28, 2020: The Day That Changed Everything
              </motion.h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="space-y-12"
                variants={premiumVariants.staggerContainer}
              >
                <TimelineItem
                  date="March 28, 2020"
                  title="The Tragic News"
                  description="We found out that our father, Mr. Ngek Constantine Jumbam, had been brutally killed by Ambazonia fighters. He was part of a group of local councilors tasked with organizing local legislative elections in Oku, in the Northwest region."
                  icon={<ShieldIcon className="w-6 h-6" />}
                  color="red"
                />
                
                <TimelineItem
                  date="The Ambush"
                  title="Eight Lives Lost"
                  description="On their way back from Oku, the group was ambushed by Ambazonia fighters. Eight people were killed on the spot and five were taken as hostages. Our father was among those killed and brutally beheaded."
                  icon={<MapPinIcon className="w-6 h-6" />}
                  color="orange"
                />
                
                <TimelineItem
                  date="Three Days Later"
                  title="A Funeral Without Closure"
                  description="We buried him three days later without his head. Our mother did not get to see the face of her husband one last time. Desmond, his son, could not travel from Ghana to attend the funeral because of COVID-19 travel restrictions. He mourned him alone."
                  icon={<HeartIcon className="w-6 h-6" />}
                  color="purple"
                />
                
                <TimelineItem
                  date="Three Months Later"
                  title="Choosing Hope Over Despair"
                  description="Moved by compassion and recognizing that many other Cameroonians share similar stories of suffering, we set up a MightyCause fundraiser to raise funds to support widows who have also been tragically affected by the crisis."
                  icon={<Star className="w-6 h-6" />}
                  color="green"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Foundation Birth Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={premiumVariants.staggerContainer}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-heading font-semibold text-sm border border-primary/20 mb-6"
                  variants={premiumVariants.fadeInUp}
                >
                  <HeartIcon className="w-4 h-4 mr-2" />
                  From Grief to Action
                </motion.div>
                
                <motion.h2 
                  className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                  variants={premiumVariants.fadeInUp}
                >
                  The Birth of Our Foundation
                </motion.h2>
                
                <motion.p 
                  className="font-heading text-xl text-gray-600 mb-6"
                  variants={premiumVariants.fadeInUp}
                >
                  Thanks to the generosity of over 150 friends around the world, we raised over $18,000 to support widows who had lost their husbands in the crisis.
                </motion.p>
                
                <motion.p 
                  className="font-heading text-lg text-gray-600 mb-8"
                  variants={premiumVariants.fadeInUp}
                >
                  In August 2020, we held our Widow's Empowerment Initiative in which 20 widows from the NW and SW regions were invited. Psychosocial support was provided to these women who had experienced such horrific and heartbreaking loss and trauma.
                </motion.p>

                <motion.div 
                  className="grid grid-cols-2 gap-4 mb-8"
                  variants={premiumVariants.staggerContainer}
                >
                  <motion.div
                    className="bg-primary/5 p-4 rounded-lg"
                    variants={premiumVariants.fadeInUp}
                  >
                    <div className="font-heading text-2xl font-bold text-primary mb-1">150+</div>
                    <div className="font-heading text-sm text-gray-600">Global Supporters</div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-secondary/5 p-4 rounded-lg"
                    variants={premiumVariants.fadeInUp}
                  >
                    <div className="font-heading text-2xl font-bold text-secondary mb-1">$18K+</div>
                    <div className="font-heading text-sm text-gray-600">Funds Raised</div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-green-50 p-4 rounded-lg"
                    variants={premiumVariants.fadeInUp}
                  >
                    <div className="font-heading text-2xl font-bold text-green-600 mb-1">20</div>
                    <div className="font-heading text-sm text-gray-600">Widows Supported</div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-blue-50 p-4 rounded-lg"
                    variants={premiumVariants.fadeInUp}
                  >
                    <div className="font-heading text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="font-heading text-sm text-gray-600">Success Rate</div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                variants={premiumVariants.heroContent}
                viewport={{ once: true }}
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
                    src="/constantine.png"
                    alt="Mr. Ngek Constantine Jumbam - Founder's Father"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center space-x-2">
                      <HeartIcon className="w-5 h-5 text-primary" />
                      <span className="font-heading text-sm font-semibold text-gray-700">In Loving Memory</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Testimonials */}
        <section className="py-24 bg-tertiary">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-secondary font-heading font-semibold text-sm border border-secondary/20 mb-6"
                variants={premiumVariants.fadeInUp}
              >
                <UsersIcon className="w-4 h-4 mr-2" />
                Voices of Hope
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6"
                variants={premiumVariants.fadeInUp}
              >
                Stories of Transformation
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl text-secondary/80 max-w-3xl mx-auto"
                variants={premiumVariants.fadeInUp}
              >
                Hear from the women whose lives have been forever changed through our programs.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={premiumVariants.staggerContainer}
              viewport={{ once: true }}
            >
              <PremiumTestimonial
                quote="The foundation helped me start my small business after I lost my husband. Now I can support my children and even employ two other women."
                name="Mary N."
                location="Bamenda"
                image="https://images.unsplash.com/photo-1494790108755-2616b612b790?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                index={0}
                hoveredIndex={hoveredTestimonial}
                onHover={setHoveredTestimonial}
              />
              
              <PremiumTestimonial
                quote="The psychosocial support helped me process my grief. I found hope again through their programs and now mentor other widows."
                name="Elizabeth T."
                location="Buea"
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                index={1}
                hoveredIndex={hoveredTestimonial}
                onHover={setHoveredTestimonial}
              />
              
              <PremiumTestimonial
                quote="My children can continue their education thanks to the scholarship program. It changed our lives completely - we have hope for the future."
                name="Sarah M."
                location="Kumba"
                image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                index={2}
                hoveredIndex={hoveredTestimonial}
                onHover={setHoveredTestimonial}
              />
            </motion.div>
          </div>
        </section>

        {/* Foundation Legacy */}
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
                Our Legacy
              </motion.div>
              
              <motion.h2 
                className="font-heading text-4xl md:text-5xl font-bold mb-6"
                variants={premiumVariants.fadeInUp}
              >
                In Honor of Mr. Ngek Constantine Jumbam
              </motion.h2>
              
              <motion.p 
                className="font-heading text-xl mb-8 text-white/90"
                variants={premiumVariants.fadeInUp}
              >
                The Jumbam Family Foundation is an apolitical Non-governmental organization that aims to support communities that have been adversely affected by the ongoing Anglophone crisis through women empowerment, education and health.
              </motion.p>
              
              <motion.p 
                className="font-heading text-lg mb-12 text-white/80"
                variants={premiumVariants.fadeInUp}
              >
                We have created this foundation to honor his legacy and ensure that his death was not in vain. Through our work, we transform tragedy into hope, one life at a time.
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
                  Join Our Mission
                  <HeartIcon className="ml-2 h-5 w-5" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center justify-center"
                  variants={premiumVariants.fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
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

// Timeline Item Component
interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'red' | 'orange' | 'purple' | 'green';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, icon, color }) => {
  const colorClasses = {
    red: 'bg-red-50 text-red-600 border-red-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    green: 'bg-green-50 text-green-600 border-green-200'
  };

  return (
    <motion.div 
      className="flex items-start space-x-6"
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
      }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className={`flex items-center justify-center w-16 h-16 rounded-full border-2 ${colorClasses[color]}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      
      <div className="flex-1">
        <motion.div 
          className="font-heading text-sm font-semibold text-gray-500 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {date}
        </motion.div>
        
        <motion.h3 
          className="font-heading text-2xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="font-heading text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Premium Testimonial Component
interface PremiumTestimonialProps {
  quote: string;
  name: string;
  location: string;
  image: string;
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

const PremiumTestimonial: React.FC<PremiumTestimonialProps> = ({ 
  quote, name, location, image, index, hoveredIndex, onHover 
}) => {
  return (
    <motion.div 
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 30, rotateX: -10 },
        visible: { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
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
        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 h-full"
        variants={{
          hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3 }
          }
        }}
      >
        <motion.div 
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          <motion.img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
            whileHover={{ scale: 1.1 }}
          />
          <div>
            <div className="font-heading font-bold text-secondary">{name}</div>
            <div className="font-heading text-sm text-gray-600">{location}</div>
          </div>
        </motion.div>
        
        <motion.p 
          className="font-heading text-gray-700 italic leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          "{quote}"
        </motion.p>

        <motion.div 
          className="flex space-x-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              animate={hoveredIndex === index ? {
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              } : {}}
              transition={{ duration: 0.3, delay: star * 0.1 }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

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