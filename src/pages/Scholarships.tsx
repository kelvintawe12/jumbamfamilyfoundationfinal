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
  FileText,
  Mail,
  Phone,
  Clock,
  Target,
  Shield,
  Globe,
  Download,
  Send
} from 'lucide-react';

export const Scholarships: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'eligibility' | 'apply'>('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const scholarshipBenefits = [
    {
      icon: GraduationCap,
      title: 'Full Tuition & Accommodation',
      description: 'Complete coverage of tuition, fees, books, and full boarding for up to 2 years at MESHS',
      details: 'Partnership with Montessori English Secondary and High School (MESHS) in Santchou, Western Region',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'One-on-one mentorship with regular meetings for academic and career guidance',
      details: 'Includes university application support and scholarship guidance through trusted partners',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Heart,
      title: 'Mental Health Support',
      description: 'Trauma counseling and mental health support for crisis-affected students',
      details: 'Professional counseling to help students overcome trauma and fully engage in studies',
      color: 'from-slate-600 to-slate-700'
    }
  ];

  const eligibilityCriteria = [
    {
      title: 'High School Students',
      description: 'Lower-sixth students in general education',
      icon: BookOpen
    },
    {
      title: 'Crisis Impact',
      description: 'Significantly affected by the Anglophone crisis (displacement, loss, study interruption)',
      icon: Shield
    },
    {
      title: 'Financial Need',
      description: 'Demonstrate inability to pursue education without financial support',
      icon: Target
    },
    {
      title: 'Academic Potential',
      description: 'Strong academic performance through report cards and GCE results',
      icon: Award
    }
  ];

  const applicationRequirements = [
    {
      title: 'Personal Essay',
      description: 'One-page essay (preferably typed) explaining crisis impact and financial need',
      icon: FileText
    },
    {
      title: 'Academic Records',
      description: 'Copy of report cards showing academic performance',
      icon: BookOpen
    },
    {
      title: 'GCE Results',
      description: 'Copy of General Certificate of Education (GCE) ordinary-level results slip',
      icon: Award
    },
    {
      title: 'Identity Document',
      description: 'Evidence of filiation (e.g., birth certificate)',
      icon: FileText
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'benefits', label: 'Benefits', icon: Star },
    { id: 'eligibility', label: 'Eligibility', icon: CheckCircle },
    { id: 'apply', label: 'Apply', icon: Send }
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
          <Award size={40} />
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
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <img 
              src="/constantine.png" 
              alt="Ngek Constantine Jumbam"
              className="w-28 h-28 rounded-xl object-cover"
            />
          </motion.div>

          <motion.h1 
            className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ngek Constantine Jumbam
          </motion.h1>
          
          <motion.h2 
            className="font-heading text-2xl md:text-3xl font-bold text-slate-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Scholarship Fund
          </motion.h2>

          {/* Crisis Impact Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { number: '700K+', label: 'Students Out of School' },
              { number: '2/3', label: 'Schools Closed' },
              { number: '8+', label: 'Years of Crisis' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'border-yellow-500 bg-yellow-50 text-slate-800 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/50 text-gray-700'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-semibold text-sm">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-4">Scholarship Overview</h3>
                <p className="text-slate-200 text-lg">
                  Educational opportunities for students affected by the Anglophone crisis
                </p>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    One of the most devastating consequences of the Anglophone crisis has been its impact on the education 
                    of the youth in the North West and South West Regions. According to UNICEF, two out of three schools 
                    have been closed in the NW and SW regions of Cameroon. As a result, close to 700,000 students have 
                    been shut out of school, many since the crisis began in 2016.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    It has also been observed that children that have been affected by the anglophone crisis face a 
                    significant likelihood of being recruited into the war, facing gender-based violence, child abuse 
                    and child labor.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="font-heading text-xl font-bold text-slate-800 mb-3 flex items-center">
                      <Award className="w-6 h-6 text-yellow-600 mr-2" />
                      Named After Ngek Constantine Jumbam
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      This scholarship fund has been created by the Jumbam Family Foundation to offer educational 
                      opportunities for students in the NW and SW that have been affected by the Anglophone crisis.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'benefits' && (
            <motion.div
              key="benefits"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-3xl font-bold text-center text-slate-800 mb-8">
                What the Scholarship Offers
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {scholarshipBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`bg-gradient-to-r ${benefit.color} p-6`}>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-heading text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h4>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-600">
                          {benefit.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'eligibility' && (
            <motion.div
              key="eligibility"
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-8">
                <h3 className="font-heading text-3xl font-bold text-slate-800 mb-4">Eligibility Criteria</h3>
                <p className="text-slate-700 text-lg">
                  All applicants must meet the following requirements
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eligibilityCriteria.map((criteria, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <criteria.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">{criteria.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{criteria.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'apply' && (
            <motion.div
              key="apply"
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-4">How to Apply</h3>
                <p className="text-slate-200 text-lg">
                  Submit your application with the required documents
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Requirements */}
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-slate-800 mb-6">Required Documents</h4>
                    <div className="space-y-4">
                      {applicationRequirements.map((req, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <req.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-800 mb-1">{req.title}</h5>
                            <p className="text-gray-600 text-sm">{req.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Application Process */}
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-slate-800 mb-6">Application Process</h4>
                    
                    {/* Contact Methods */}
                    <div className="space-y-4 mb-6">
                      <motion.a
                        href="mailto:jumbamfamilyfoundation@gmail.com"
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-800 rounded-xl hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Mail className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">Email Application</div>
                          <div className="text-sm opacity-80">jumbamfamilyfoundation@gmail.com</div>
                        </div>
                      </motion.a>

                      <motion.a
                        href="https://wa.me/237691513245"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-5 h-5" />
                        <div>
                          <div className="font-semibold">WhatsApp</div>
                          <div className="text-sm opacity-80">(+237) 691-51-32-45</div>
                        </div>
                      </motion.a>
                    </div>

                    {/* Application Timeline */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Clock className="w-5 h-5 text-yellow-600" />
                        <h5 className="font-semibold text-slate-800">Application Process</h5>
                      </div>
                      <ol className="text-sm text-gray-700 space-y-2">
                        <li>1. Submit documents by deadline</li>
                        <li>2. Brief interview with selected applicants</li>
                        <li>3. Final selection and notification</li>
                        <li>4. Enrollment at MESHS</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 md:p-12 text-center text-white mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="w-8 h-8 text-yellow-500" />
            <h2 className="font-heading text-3xl font-bold">Transform Lives Through Education</h2>
          </div>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Your support can help us provide more scholarships to crisis-affected students. 
            Every donation brings hope and educational opportunities to those who need it most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/donate"
              className="bg-yellow-500 text-slate-800 py-4 px-8 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Support Scholarships</span>
            </motion.a>
            <motion.a
              href="/contact"
              className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Get More Info</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};