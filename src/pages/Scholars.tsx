import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Heart,
  BookOpen,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Quote,
  Mail,
  Target,
  Globe,
  UserCheck,
  Lightbulb,
  ExternalLink
} from 'lucide-react';

interface Scholar {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
  aspirations: string;
}

interface Mentor {
  id: string;
  name: string;
  image: string;
  role: string;
}

export const Scholars: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2022');
  const [hoveredScholar, setHoveredScholar] = useState<string | null>(null);

  const scholars2022: Scholar[] = [
    {
      id: 'fadimatou',
      name: 'Fadimatou Idrissou',
      location: 'Santa, North West',
      image: '/scholars/PHOTO-2022-10-26-09-07-50_edited.jpg',
      quote: 'Being a Jumbam scholar means a new breath of fresh air, a ray of light during darkness, a worthy reason to succeed, and a bunch of hope to me and my mom.',
      aspirations: 'I want to study medicine to help my community.'
    },
    {
      id: 'augustin',
      name: 'Augustin Ateh Mandeh',
      location: 'Awing-Santa, North West',
      image: '/scholars/PHOTO-2022-10-26-09-07-52_edited.jpg',
      quote: 'Being a Jumbam scholar means working hard in order to give hope and joy to the less fortunate and helping others archive their dreams.',
      aspirations: 'I want to study computer engineering at university.'
    },
    {
      id: 'godwill',
      name: 'Godwill Mbunwe',
      location: 'Ntumbaw, North West',
      image: '/scholars/PHOTO-2022-10-26-09-07-48_edited.jpg',
      quote: 'Being a Jumbam scholar has brought much joy to me and my mother who thought she had failed to educate me. I have a strong desire to influence people\'s lives positively, especially those in very devastating conditions.',
      aspirations: 'I want to study medicine.'
    },
    {
      id: 'christabel',
      name: 'Christabel Ngwan',
      location: 'Mbipgo, North West',
      image: '/scholars/PHOTO-2022-10-26-09-07-51_edited.jpg',
      quote: 'Being a Jumbam scholar is one of the best things that has ever happened in my life. I was drowning with no hope for the future until JFF came. It has given me all the reasons to not lose hope but rather strive towards the goal of studying medicine in university.',
      aspirations: 'I want to study medicine at university.'
    },
    {
      id: 'ngum',
      name: 'Ngum Diom Meg',
      location: 'Oku, North West',
      image: '/scholars/PHOTO-2022-10-26-09-07-45_edited.jpg',
      quote: 'Being a Jumbam scholar means working extremely hard to help others, especially those who are financially down. It also gives me hope to study hard and achieve my dreams.',
      aspirations: 'I want to study computer engineering at University.'
    }
  ];

  const mentors: Mentor[] = [
    {
      id: 'desmond',
      name: 'Desmond Jumbam',
      image: '/team/Desmond Profile pic_edited.png',
      role: 'Lead Mentor'
    },
    {
      id: 'merline',
      name: 'Nfor Merline',
      image: '/team/Merline_edited.png',
      role: 'Academic Advisor'
    },
    {
      id: 'ulrick',
      name: 'Ulrick Sidney',
      image: '/team/Ulrick_edited.png',
      role: 'Career Guidance'
    },
    {
      id: 'beverly',
      name: 'Beverly Ndifoin',
      image: '/team/Bev profil pic_edited.png',
      role: 'Communications Mentor'
    },
    {
      id: 'emmanuel',
      name: 'Ngolefac Emmanuel',
      image: '/mentors/Ngolefac Emmanuel_edited.png',
      role: 'Academic Support'
    },
    {
      id: 'edwin',
      name: 'Ndi Edwin',
      image: '/mentors/309749515_185300223988494_9132270876829965474_n_edited.png',
      role: 'Life Skills Mentor'
    },
    {
      id: 'kelvin',
      name: 'Tawe Kelvin',
      image: '/mentors/WhatsApp Image 2024-08-04 at 15.12.34.jpeg',
      role: 'Technical Mentor'
    }
  ];

  const yearOptions = [
    { year: '2022', label: '2022 Intake', count: 5, status: 'Current' },
    { year: '2023', label: '2023 Intake', count: 0, status: 'Coming Soon' },
    { year: '2024', label: '2024 Intake', count: 0, status: 'Planning' }
  ];

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
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GraduationCap size={48} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-slate-600/20"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <BookOpen size={36} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-1/4 text-yellow-600/20"
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        >
          <Star size={40} />
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
            Ngek Constantine Jumbam Scholars
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Meet the bright minds whose lives have been transformed through education. 
            These remarkable students represent hope, resilience, and the power of opportunity.
          </motion.p>

          {/* Scholar Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: '5', label: '2022 Scholars' },
              { number: '7', label: 'Mentors' },
              { number: '100%', label: 'Success Rate' },
              { number: '2', label: 'Years Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Year Selection */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {yearOptions.map((option, index) => (
            <motion.button
              key={option.year}
              onClick={() => setSelectedYear(option.year)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                selectedYear === option.year
                  ? 'border-yellow-500 bg-yellow-50 text-slate-800 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/50 text-gray-700'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">{option.label}</div>
                <div className="text-xs opacity-75">{option.count} scholars • {option.status}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Scholars Grid */}
        <AnimatePresence mode="wait">
          {selectedYear === '2022' && (
            <motion.div
              key="2022-scholars"
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-center text-slate-800 mb-8">
                2022 Ngek Constantine Jumbam Scholars
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {scholars2022.map((scholar, index) => (
                  <motion.div
                    key={scholar.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onMouseEnter={() => setHoveredScholar(scholar.id)}
                    onMouseLeave={() => setHoveredScholar(null)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Scholar Photo */}
                    <div className="relative overflow-hidden">
                      <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-2xl">
                              {scholar.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-gray-600 font-medium px-4">{scholar.name}</p>
                        </div>
                      </div>
                      
                      {/* Location Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-600" />
                        <span className="text-xs font-medium text-gray-700">{scholar.location}</span>
                      </div>
                    </div>

                    {/* Scholar Info */}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-slate-800 mb-3">
                        {scholar.name}
                      </h3>
                      
                      {/* Quote */}
                      <div className="mb-4">
                        <Quote className="w-5 h-5 text-yellow-500 mb-2" />
                        <p className="text-gray-600 text-sm leading-relaxed italic">
                          "{scholar.quote}"
                        </p>
                      </div>

                      {/* Aspirations */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Target className="w-4 h-4 text-yellow-600" />
                          <span className="font-semibold text-slate-800 text-sm">Future Goals</span>
                        </div>
                        <p className="text-gray-700 text-sm">{scholar.aspirations}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedYear !== '2022' && (
            <motion.div
              key="coming-soon"
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 max-w-2xl mx-auto">
                <GraduationCap className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">
                  {selectedYear} Scholars Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  We're preparing for the next cohort of Ngek Constantine Jumbam Scholars. 
                  Stay tuned for updates on our upcoming scholarship recipients.
                </p>
                <motion.a
                  href="/scholarships"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-800 py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn About Scholarships</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nelson Mandela Quote */}
        {selectedYear === '2022' && (
          <motion.div
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/quotes/Mandela.jpeg" 
                alt="Nelson Mandela"
                className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500"
              />
            </div>
            <Quote className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 italic">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <cite className="text-yellow-400 font-semibold text-lg">— Nelson Mandela</cite>
          </motion.div>
        )}

        {/* Mentors Section */}
        {selectedYear === '2022' && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl font-bold text-center text-slate-800 mb-8">
              Our Dedicated Mentors
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <span className="text-slate-700 font-bold text-lg">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">{mentor.name}</h4>
                  <p className="text-xs text-gray-600">{mentor.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Partners Section */}
        {selectedYear === '2022' && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-6">Our Partners</h3>
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/partners/partner2-opendreams.png" 
                  alt="Open Dreams"
                  className="h-16 object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4">
                In partnership with Open Dreams, we provide comprehensive mentorship and career guidance to all our scholars.
              </p>
              <motion.a
                href="/partners"
                className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-semibold"
                whileHover={{ x: 5 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-yellow-500" />
            <h2 className="font-heading text-3xl font-bold">Support Our Scholars</h2>
          </div>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Contact us if you are interested in learning more or supporting our scholarship program. 
            We would love to speak with you about how you can help transform more lives through education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <motion.a
              href="mailto:jumbamfamilyfoundation@gmail.com"
              className="bg-yellow-500 text-slate-800 py-4 px-8 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </motion.a>
            <motion.a
              href="/donate"
              className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Donate</span>
            </motion.a>
          </div>
          
          <p className="text-slate-300 text-sm">
            Email: <span className="text-yellow-400 font-medium">jumbamfamilyfoundation@gmail.com</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};