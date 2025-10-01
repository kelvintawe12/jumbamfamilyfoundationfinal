import React, { useEffect, useState, useRef, Children, Component } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { SectionTitle } from '../components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon, HeartIcon, UsersIcon, BookIcon, CheckIcon, ChevronRightIcon, MapPinIcon, CalendarIcon, TargetIcon, BarChart3Icon, HandIcon, GlobeIcon } from 'lucide-react';
export const Home: React.FC = () => {
  // Typewriter effect for the hero title
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullTitle = 'Restoring Hope in Cameroon';
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, {
    once: true
  });
  const titleControls = useAnimation();
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
      }, 100);
      return () => clearInterval(interval);
    }
  }, [titleInView, titleControls, fullTitle]);
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
  return <div className="w-full bg-white">
      {/* Hero Section with Parallax and Typewriter Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-accent">
        {/* Background Pattern with Parallax Effect */}
        <div className="absolute inset-0 opacity-10" style={{
        transform: `translateY(${scrollY * 0.2}px)`
      }}>
          <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content with Typewriter */}
            <motion.div className="text-white" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h1 ref={titleRef} className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6" variants={fadeInUp}>
                {displayedTitle}
                <span className="text-primary animate-pulse">|</span>
              </motion.h1>
              <motion.p className="font-body text-xl md:text-2xl mb-8 text-white/90" variants={fadeInUp}>
                Contributing to a prosperous Cameroon and Africa through
                Education, Healthcare, and Women Empowerment.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <Link to="/donate" className="bg-primary hover:bg-primary/90 text-secondary px-8 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 flex items-center justify-center group">
                  Support Our Mission
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 flex items-center justify-center" onClick={() => {
                // Video modal logic would go here
                alert('Video feature coming soon!');
              }}>
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Watch Our Story
                </button>
              </motion.div>
            </motion.div>
            {/* Hero Image with Parallax Effect */}
            <motion.div className="relative" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} style={{
            transform: `translateY(${-scrollY * 0.1}px)`
          }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Jumbam Family Foundation Impact" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Floating badge */}
                <motion.div className="absolute top-4 right-4 bg-primary text-secondary px-4 py-2 rounded-full font-bold text-sm" initial={{
                y: -20,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                delay: 1,
                duration: 0.5
              }}>
                  Restoring Hope
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Scroll indicator */}
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" initial={{
        y: -10,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 1.5,
        duration: 0.5,
        y: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }}>
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div className="w-1.5 h-1.5 bg-white rounded-full mt-2" animate={{
              y: [0, 15, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }} />
            </div>
          </div>
        </motion.div>
      </section>
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
      {/* Impact Stats with Animated Counters */}
      <section ref={statsRef} className="py-20 bg-tertiary">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Impact" subtitle="Making a difference in the lives of those affected by the crisis" centered />
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8" initial="hidden" animate={statsControls} variants={staggerContainer}>
            <StatCard icon={<UsersIcon className="h-8 w-8" />} number="50+" label="Widows Empowered" description="Through our comprehensive support programs" delay={0.1} />
            <StatCard icon={<HeartIcon className="h-8 w-8" />} number="17" label="Businesses Started" description="New enterprises launched in 2023" delay={0.3} />
            <StatCard icon={<TargetIcon className="h-8 w-8" />} number="5.5M" label="FCFA Distributed" description="In capital and support" delay={0.5} />
            <StatCard icon={<BarChart3Icon className="h-8 w-8" />} number="100%" label="Reintegration Rate" description="Success rate in community reintegration" delay={0.7} />
          </motion.div>
          <motion.div className="mt-12 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }} viewport={{
          once: true
        }}>
            <Link to="/impact" className="inline-flex items-center bg-primary hover:bg-primary/90 text-secondary py-3 px-6 rounded-md transition-all hover:scale-105 font-bold">
              See Our Full Impact
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Core Areas Preview with Enhanced Cards */}
      <section ref={areasRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Core Areas" subtitle="Comprehensive support for lasting change" centered />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" animate={areasControls} variants={staggerContainer}>
            <EnhancedCoreAreaCard icon={<HeartIcon className="h-8 w-8" />} title="Health" description="Essential healthcare services and mental health support for crisis-affected communities." image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" features={['Mobile health clinics', 'Mental health support', 'Health education']} link="/core-areas" />
            <EnhancedCoreAreaCard icon={<UsersIcon className="h-8 w-8" />} title="Women Empowerment" description="Psychosocial support, business training, and capital for widows and vulnerable women." image="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" features={['Psychosocial support', 'Business training', 'Startup capital']} link="/core-areas" />
            <EnhancedCoreAreaCard icon={<BookIcon className="h-8 w-8" />} title="Education" description="Scholarships, school supplies, and safe learning spaces for affected children." image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" features={['Scholarships', 'School supplies', 'Safe learning spaces']} link="/core-areas" />
          </motion.div>
        </div>
      </section>
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
    </div>;
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