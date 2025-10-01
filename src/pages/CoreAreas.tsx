import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Users, 
  GraduationCap,
  Stethoscope,
  BookOpen,
  UserPlus,
  Shield,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  Handshake,
  MapPin,
  Calendar,
  ChevronRight,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Plus,
  Clock,
  Globe
} from 'lucide-react';

interface CoreArea {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  details: {
    overview: string;
    approach: string[];
    impact: {
      number: string;
      description: string;
    };
    programs: {
      name: string;
      description: string;
      beneficiaries: string;
    }[];
    testimonial: {
      quote: string;
      author: string;
      location: string;
    };
  };
}

export const CoreAreas: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>('health');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const coreAreas: CoreArea[] = [
    {
      id: 'health',
      title: 'Healthcare & Wellness',
      description: 'Providing essential healthcare services and mental health support to communities affected by the Anglophone crisis.',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      details: {
        overview: 'Our healthcare initiatives focus on addressing both physical and mental health needs of crisis-affected communities through mobile clinics, mental health support, and preventive care programs.',
        approach: [
          'Mobile health clinics reaching remote communities',
          'Mental health counseling for trauma survivors',
          'Preventive healthcare education programs',
          'Maternal and child health services',
          'Emergency medical assistance',
          'Health worker training and capacity building'
        ],
        impact: {
          number: '3,000+',
          description: 'Patients treated this year'
        },
        programs: [
          {
            name: 'Mobile Health Clinics',
            description: 'Bringing healthcare directly to affected communities',
            beneficiaries: '2,500+ patients monthly'
          },
          {
            name: 'Mental Health Support',
            description: 'Trauma counseling and psychosocial support',
            beneficiaries: '800+ individuals supported'
          },
          {
            name: 'Maternal Care',
            description: 'Pre and postnatal care for mothers',
            beneficiaries: '200+ mothers assisted'
          }
        ],
        testimonial: {
          quote: 'The mobile clinic saved my daughter\'s life when she had malaria. Without JFF, we would have lost her.',
          author: 'Grace Mbah',
          location: 'Kumba, SW Region'
        }
      }
    },
    {
      id: 'women',
      title: 'Women Empowerment',
      description: 'Empowering widows and women through business training, psychosocial support, and startup capital for sustainable livelihoods.',
      icon: Users,
      color: 'from-yellow-500 to-yellow-600',
      details: {
        overview: 'We believe empowering women creates a ripple effect that transforms entire communities. Our programs focus on economic empowerment, skills development, and psychosocial support for war widows and vulnerable women.',
        approach: [
          'Business skills training and entrepreneurship',
          'Startup capital and microfinance',
          'Psychosocial support and counseling',
          'Vocational skills development',
          'Women\'s cooperatives and groups',
          'Leadership development programs'
        ],
        impact: {
          number: '17',
          description: 'Widows supported with 5.5M FCFA'
        },
        programs: [
          {
            name: 'Widow Support Program',
            description: 'Comprehensive support for war widows',
            beneficiaries: '17 widows directly supported'
          },
          {
            name: 'Business Training',
            description: 'Entrepreneurship and financial literacy',
            beneficiaries: '50+ women trained'
          },
          {
            name: 'Microfinance Initiative',
            description: 'Small loans for business development',
            beneficiaries: '25+ businesses funded'
          }
        ],
        testimonial: {
          quote: 'With JFF\'s support, I started my small business. Now I can feed my children and send them to school.',
          author: 'Marie Ngum',
          location: 'Bamenda, NW Region'
        }
      }
    },
    {
      id: 'education',
      title: 'Education & Child Protection',
      description: 'Ensuring children affected by the crisis can continue learning through scholarships, school supplies, and safe learning environments.',
      icon: GraduationCap,
      color: 'from-slate-600 to-slate-700',
      details: {
        overview: 'Education is the foundation of hope. We work to ensure that despite the crisis, children can continue their education in safe environments with proper support and resources.',
        approach: [
          'Scholarships for orphans and vulnerable children',
          'School supplies and learning materials',
          'Safe learning spaces in affected areas',
          'Teacher training and support',
          'Educational technology integration',
          'Child protection and welfare programs'
        ],
        impact: {
          number: '500+',
          description: 'Children back in school'
        },
        programs: [
          {
            name: 'Scholarship Program',
            description: 'Full and partial scholarships for vulnerable children',
            beneficiaries: '120+ children supported'
          },
          {
            name: 'School Supplies Drive',
            description: 'Books, uniforms, and learning materials',
            beneficiaries: '400+ students equipped'
          },
          {
            name: 'Safe Schools Initiative',
            description: 'Creating protective learning environments',
            beneficiaries: '8 schools improved'
          }
        ],
        testimonial: {
          quote: 'Thanks to JFF, my son can go to school again. Education gives us hope for a better future.',
          author: 'Paul Tebo',
          location: 'Buea, SW Region'
        }
      }
    }
  ];

  const involvementOptions = [
    {
      title: 'Make a Donation',
      description: 'Support our programs financially to expand our reach and impact in affected communities.',
      icon: Heart,
      color: 'from-yellow-500 to-yellow-600',
      buttonText: 'Donate Now',
      buttonLink: '/donate',
      features: ['One-time or monthly giving', 'MTN Mobile Money accepted', 'Full transparency on fund usage']
    },
    {
      title: 'Volunteer with Us',
      description: 'Share your skills, time, and expertise to support our mission in Cameroon or remotely.',
      icon: UserPlus,
      color: 'from-slate-600 to-slate-700',
      buttonText: 'Join Our Team',
      buttonLink: '/contact',
      features: ['On-site opportunities', 'Remote volunteering', 'Professional skill sharing']
    },
    {
      title: 'Partner Organizations',
      description: 'Collaborate with us to amplify impact through strategic partnerships and joint initiatives.',
      icon: Handshake,
      color: 'from-yellow-600 to-yellow-700',
      buttonText: 'Become a Partner',
      buttonLink: '/contact',
      features: ['Corporate partnerships', 'NGO collaborations', 'Government partnerships']
    }
  ];

  const currentArea = coreAreas.find(area => area.id === activeArea);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-yellow-50 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-16 text-yellow-500/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart size={48} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-slate-600/20"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <GraduationCap size={36} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-1/4 text-yellow-600/20"
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          <Users size={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Core Areas of Impact
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Through focused initiatives in healthcare, women empowerment, and education, we address the root causes 
            of suffering and build sustainable foundations for community resilience and hope.
          </motion.p>

          {/* Impact Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: '3,000+', label: 'Lives Touched' },
              { number: '17', label: 'Widows Empowered' },
              { number: '500+', label: 'Children in School' },
              { number: '5.5M', label: 'FCFA Invested' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Core Areas Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {coreAreas.map((area, index) => (
            <motion.button
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                activeArea === area.id
                  ? 'border-yellow-500 bg-yellow-50 text-slate-800 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/50 text-gray-700'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center`}>
                <area.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">{area.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Area Detail */}
        <AnimatePresence mode="wait">
          {currentArea && (
            <motion.div
              key={activeArea}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentArea.color} p-8`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <currentArea.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-white mb-2">
                      {currentArea.title}
                    </h2>
                    <p className="text-white/90 text-lg">
                      {currentArea.description}
                    </p>
                  </div>
                </div>
                
                {/* Impact Number */}
                <div className="bg-white/20 rounded-xl p-4 inline-block">
                  <div className="text-3xl font-bold text-white">{currentArea.details.impact.number}</div>
                  <div className="text-white/90 text-sm">{currentArea.details.impact.description}</div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Overview & Approach */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">Our Approach</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {currentArea.details.overview}
                      </p>
                      
                      <div className="space-y-3">
                        {currentArea.details.approach.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Programs & Testimonial */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">Key Programs</h3>
                      <div className="space-y-4">
                        {currentArea.details.programs.map((program, index) => (
                          <motion.div
                            key={index}
                            className="bg-gray-50 rounded-xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <h4 className="font-semibold text-slate-800 mb-2">{program.name}</h4>
                            <p className="text-gray-600 text-sm mb-2">{program.description}</p>
                            <div className="text-yellow-600 font-medium text-sm">{program.beneficiaries}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 text-white">
                      <div className="flex items-center space-x-2 mb-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <h4 className="font-semibold">Success Story</h4>
                      </div>
                      <p className="italic mb-4">"{currentArea.details.testimonial.quote}"</p>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-slate-800 font-bold text-sm">
                            {currentArea.details.testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold">{currentArea.details.testimonial.author}</div>
                          <div className="text-slate-300 text-sm">{currentArea.details.testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Get Involved Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways to support our work and make a lasting impact on the lives of those affected by the crisis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredCard(option.title)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${option.color} p-6`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {option.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={option.buttonLink}
                    className={`w-full bg-gradient-to-r ${option.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{option.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="w-8 h-8 text-yellow-500" />
            <h2 className="font-heading text-3xl font-bold">Ready to Make a Difference?</h2>
          </div>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Every action, whether big or small, contributes to rebuilding lives and restoring hope. 
            Join us in creating sustainable change for communities affected by the Anglophone crisis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/donate"
              className="bg-yellow-500 text-slate-800 py-4 px-8 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Start Donating</span>
            </motion.a>
            <motion.a
              href="/contact"
              className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserPlus className="w-5 h-5" />
              <span>Get Involved</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
