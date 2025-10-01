import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Mail, 
  MapPin,
  Award,
  Briefcase,
  Heart,
  Star,
  Sparkles,
  ArrowRight,
  ExternalLink,
  UserPlus,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  category: 'leadership' | 'operations' | 'specialists';
}

export const Team: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'leadership' | 'operations' | 'specialists'>('all');
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 'desmond',
      name: 'Desmond Jumbam',
      position: 'Co-Founder & President',
      image: '/team/Desmond Profile pic_edited.png',
      bio: 'Desmond T. Jumbam is the son of the late Ngek Constantine Jumbam and the Co-Founder of JFF. Desmond currently works as a health policy Advisor for Operation Smile, a cleft NGO in over 30 countries. Before that, he was a health policy Analyst at Harvard Medical School. He has a Master\'s degree in Global Health from the University of Notre Dame and a Bachelor\'s degree in biology from Taylor University.',
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      },
      category: 'leadership'
    },
    {
      id: 'rebecca',
      name: 'Seh Rebecca',
      position: 'Co-Founder & Vice President',
      image: '/team/Rebecca pic_edited.png',
      bio: 'Seh Rebecca is the widow of the late Ngek Constantine Jumbam and Co-Founder of JFF. Rebecca has worked as a cook for SIL Cameroon for over thirty years. She has decades of experience as an entrepreneur and small business owner. She is passionate about improving the lives of the disadvantaged and vulnerable people in Cameroon including orphans, widows, and the poor.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      },
      category: 'leadership'
    },
    {
      id: 'therese',
      name: 'Therese Nsakwa',
      position: 'Financial Treasurer',
      image: '/team/Therese profile pic_edited.png',
      bio: 'Nsakwa Theresia Mbong is the current treasurer of the foundation. She holds a first degree in English and is a teacher by profession. She has worked with adolescents and children for more than twenty years. She is currently heading the elementary section of a renowned International School in Cameroon, where she has been working for ten years.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      },
      category: 'operations'
    },
    {
      id: 'beverly',
      name: 'Beverly Ndifoin',
      position: 'Public Relations Officer',
      image: '/team/Bev profil pic_edited.png',
      bio: 'Beverly Ndifoin is a multi-faceted journalist/communication professional and currently serves as CEO of AXON COMMS. She is a YALI RLC fellow who has previously served as weather news anchor on Cameroon\'s Radio Television (CRTV), coupled with quality experience from working to shape the communication strategies of different organizations. She holds a BSc. in Journalism & Mass Communication and currently completing an MA in Applied Linguistics from the University of Buea.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      },
      category: 'operations'
    },
    {
      id: 'heline',
      name: 'Heline Kimbung',
      position: 'Financial Secretary',
      image: '/team/Heline_edited.png',
      bio: 'Bio coming soon.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      },
      category: 'operations'
    },
    {
      id: 'merline',
      name: 'Nfor Merline',
      position: 'Secretary General',
      image: '/team/Merline_edited.png',
      bio: 'Bio coming soon.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      },
      category: 'operations'
    },
    {
      id: 'damaris',
      name: 'Damaris Beyala',
      position: 'QA Specialist',
      image: '/team/Damaris_edited.png',
      bio: 'Bio coming soon.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      },
      category: 'specialists'
    },
    {
      id: 'ulrick',
      name: 'Ulrick Sidney Kanmounye',
      position: 'Data Strategist',
      image: '/team/Ulrick_edited.png',
      bio: 'Ulrick Sidney Kanmounye, MD is a Global Surgery Fellow at Operation Smile. Before joining Operation Smile, he was a research associate at the Program in Global Surgery and Social Change (PGSSC) - Harvard Medical School. Ulrick also serves on the Secretariat Team of the World Federation of Neurosurgical Societies\' Global Neurosurgery Committee. Notably, he is the founding President of the Association of Future African Neurosurgeons, an interest group for aspiring African neurosurgeons, and he served as \'19-\'20 research subteam lead of the International Student Surgical Network (InciSioN). He is an Associate Editor of the Journal of Global Neurosurgery and a Social Media Editor of the Journal of Neurological Surgery Part B: Skull Base. He hopes to train as a neurosurgeon once he completes his fellowship.',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      },
      category: 'specialists'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Team', icon: Users, color: 'from-slate-600 to-slate-700' },
    { id: 'leadership', label: 'Leadership', icon: Award, color: 'from-yellow-500 to-yellow-600' },
    { id: 'operations', label: 'Operations', icon: Briefcase, color: 'from-blue-500 to-blue-600' },
    { id: 'specialists', label: 'Specialists', icon: Star, color: 'from-green-500 to-green-600' }
  ];

  const filteredMembers = selectedCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedCategory);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return Twitter;
      case 'linkedin': return Linkedin;
      case 'facebook': return Facebook;
      case 'instagram': return Instagram;
      default: return ExternalLink;
    }
  };

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
          <Users size={48} />
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
          <Heart size={36} />
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
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Dedicated individuals working together to restore hope and transform lives in communities affected by the Anglophone crisis. 
            Our diverse team brings together expertise in healthcare, education, business, and community development.
          </motion.p>

          {/* Team Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: '8', label: 'Team Members' },
              { number: '4', label: 'Departments' },
              { number: '15+', label: 'Years Experience' },
              { number: '3', label: 'Countries' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'border-yellow-500 bg-yellow-50 text-slate-800 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/50 text-gray-700'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                whileHover={{ y: -5 }}
              >
                {/* Member Photo */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-2xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium">{member.name}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        {Object.entries(member.social).map(([platform, url]) => {
                          const Icon = getSocialIcon(platform);
                          return (
                            <motion.a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-yellow-500 hover:text-slate-800 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Icon className="w-4 h-4" />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  
                  {/* Bio Preview */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Read More Button */}
                  {member.bio !== 'Bio coming soon.' && (
                    <motion.button
                      className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  )}

                  {/* Category Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                      member.category === 'leadership' ? 'from-yellow-500 to-yellow-600 text-slate-800' :
                      member.category === 'operations' ? 'from-blue-500 to-blue-600 text-white' :
                      'from-green-500 to-green-600 text-white'
                    }`}>
                      {member.category.charAt(0).toUpperCase() + member.category.slice(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Join Team Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <UserPlus className="w-8 h-8 text-yellow-500" />
            <h2 className="font-heading text-3xl font-bold">Join Our Team</h2>
          </div>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Are you passionate about making a difference in the lives of crisis-affected communities? 
            We're always looking for dedicated individuals to join our mission of restoring hope and transforming lives.
          </p>
          
          {/* Skills We Need */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { skill: 'Healthcare', icon: Heart },
              { skill: 'Education', icon: Award },
              { skill: 'Communications', icon: Globe },
              { skill: 'Finance', icon: Briefcase }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-6 h-6 text-slate-800" />
                </div>
                <div className="text-sm font-medium">{item.skill}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:jumbamfamilyfoundation@gmail.com"
              className="bg-yellow-500 text-slate-800 py-4 px-8 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Send Application</span>
            </motion.a>
            <motion.a
              href="/contact"
              className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              <span>Learn More</span>
            </motion.a>
          </div>

          {/* Contact Email */}
          <div className="mt-6 text-slate-300">
            <p className="text-sm">
              Email us at <span className="text-yellow-400 font-medium">jumbamfamilyfoundation@gmail.com</span> with your resume and cover letter
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};