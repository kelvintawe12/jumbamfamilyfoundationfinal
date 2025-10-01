import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Users, 
  Award, 
  Globe, 
  Heart,
  BookOpen,
  GraduationCap,
  Target,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Handshake,
  Building,
  MapPin
} from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'university' | 'ngo' | 'corporate' | 'government';
  description: string;
  partnership: string;
  location: string;
  website: string;
  impact: {
    metric: string;
    description: string;
  };
  programs: string[];
  keyContact?: string;
  yearStarted: string;
}

export const Partners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<string>('notre-dame');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const partners: Partner[] = [
    {
      id: 'notre-dame',
      name: 'University of Notre Dame',
      logo: '/partners/partners1.png',
      type: 'university',
      description: 'International Development in Practice is a course at the University of Notre Dame in Notre Dame, USA, in which teams of students work long-distance with various non-profits as student consultants to provide recommendations for issues faced by non-profits around the world.',
      partnership: 'Academic Partnership & Student Consulting',
      location: 'Notre Dame, Indiana, USA',
      website: 'https://www.nd.edu',
      impact: {
        metric: '50+ Students',
        description: 'Student consultants engaged'
      },
      programs: [
        'International Development in Practice Course',
        'Student Consulting Teams',
        'Research and Recommendations',
        'Capacity Building Support'
      ],
      keyContact: 'Prof. Steve Reinfenberg',
      yearStarted: '2023'
    },
    {
      id: 'open-dreams',
      name: 'Open Dreams',
      logo: '/partners/partner2-opendreams.png',
      type: 'ngo',
      description: 'Open Dreams is a non-governmental organization that aims to empower high-achieving, low-income scholars around the world by bridging the global gap between talent and opportunity at the university education level.',
      partnership: 'Scholar Mentoring & Career Guidance',
      location: 'Global Organization',
      website: 'https://www.opendreams.org',
      impact: {
        metric: '20+ Scholars',
        description: 'Ngek C. Jumbam Scholars mentored'
      },
      programs: [
        'Ngek C. Jumbam Scholar Mentoring',
        'Career Guidance Programs',
        'University Application Support',
        'Scholarship Facilitation'
      ],
      yearStarted: '2022'
    }
  ];

  const partnershipTypes = [
    {
      type: 'university',
      title: 'Academic Partnerships',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      description: 'Collaborating with universities for research and student engagement'
    },
    {
      type: 'ngo',
      title: 'NGO Collaborations',
      icon: Heart,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Working with like-minded organizations to amplify impact'
    },
    {
      type: 'corporate',
      title: 'Corporate Partners',
      icon: Building,
      color: 'from-slate-600 to-slate-700',
      description: 'Engaging businesses for sustainable development'
    },
    {
      type: 'government',
      title: 'Government Relations',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      description: 'Working with government agencies for policy impact'
    }
  ];

  const selectedPartnerData = partners.find(p => p.id === selectedPartner);

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
          <Handshake size={48} />
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
          <Users size={36} />
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
          <Globe size={40} />
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
            Our Strategic Partners
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our partners are invaluable to our cause and it's because of them that we are able to accomplish our goals. 
            We truly value our partners and welcome other partnerships with mutual interests in improving the conditions 
            of war victims in Cameroon and elsewhere.
          </motion.p>

          {/* Partnership Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: '2+', label: 'Strategic Partners' },
              { number: '70+', label: 'Students Engaged' },
              { number: '20+', label: 'Scholars Mentored' },
              { number: '3', label: 'Years Partnership' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Partnership Types */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.type}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mx-auto mb-4`}>
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-800 mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {type.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Selection */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {partners.map((partner, index) => (
            <motion.button
              key={partner.id}
              onClick={() => setSelectedPartner(partner.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                selectedPartner === partner.id
                  ? 'border-yellow-500 bg-yellow-50 text-slate-800 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/50 text-gray-700'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold">{partner.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Partner Detail */}
        <AnimatePresence mode="wait">
          {selectedPartnerData && (
            <motion.div
              key={selectedPartner}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Partner Header */}
              <div className={`bg-gradient-to-r ${
                selectedPartnerData.type === 'university' ? 'from-blue-500 to-blue-600' :
                selectedPartnerData.type === 'ngo' ? 'from-yellow-500 to-yellow-600' :
                'from-slate-600 to-slate-700'
              } p-8`}>
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
                    <img 
                      src={selectedPartnerData.logo} 
                      alt={selectedPartnerData.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-3xl font-bold text-white mb-2">
                      {selectedPartnerData.name}
                    </h2>
                    <p className="text-white/90 text-lg mb-2">
                      {selectedPartnerData.partnership}
                    </p>
                    <div className="flex items-center space-x-4 text-white/80">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{selectedPartnerData.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span className="text-sm">Since {selectedPartnerData.yearStarted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">{selectedPartnerData.impact.metric}</div>
                    <div className="text-white/90 text-sm">{selectedPartnerData.impact.description}</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Description & Programs */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">About Our Partnership</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {selectedPartnerData.description}
                      </p>
                      
                      {selectedPartnerData.keyContact && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-1">
                            <Users className="w-4 h-4 text-yellow-600" />
                            <span className="font-semibold text-slate-800">Key Contact</span>
                          </div>
                          <p className="text-gray-700">{selectedPartnerData.keyContact}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Programs & Actions */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">Joint Programs</h3>
                      <div className="space-y-3">
                        {selectedPartnerData.programs.map((program, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3 bg-gray-50 rounded-lg p-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{program}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Visit Partner */}
                    <motion.a
                      href={selectedPartnerData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${
                        selectedPartnerData.type === 'university' ? 'from-blue-500 to-blue-600' :
                        selectedPartnerData.type === 'ngo' ? 'from-yellow-500 to-yellow-600' :
                        'from-slate-600 to-slate-700'
                      } text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Visit {selectedPartnerData.name}</span>
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Partnership Opportunities */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Handshake className="w-8 h-8 text-yellow-500" />
            <h2 className="font-heading text-3xl font-bold">Become Our Partner</h2>
          </div>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            We welcome partnerships with organizations that share our vision of restoring hope and transforming lives. 
            Together, we can create greater impact for communities affected by crisis.
          </p>
          
          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Globe, title: 'Global Impact', description: 'Make a difference in international development' },
              { icon: Award, title: 'Recognition', description: 'Be recognized for your social responsibility' },
              { icon: Target, title: 'Focused Mission', description: 'Direct impact on crisis-affected communities' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-slate-800" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="bg-yellow-500 text-slate-800 py-4 px-8 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Handshake className="w-5 h-5" />
              <span>Partner With Us</span>
            </motion.a>
            <motion.a
              href="/contact"
              className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Learn More</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};