import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Users,
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Drop us a line anytime',
      content: 'info@jumbamfamilyfoundation.org',
      href: 'mailto:info@jumbamfamilyfoundation.org',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Mon-Fri from 8am to 5pm',
      content: '+237 123 456 789',
      href: 'tel:+237123456789',
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      subtitle: 'Come say hello',
      content: 'Bamenda, North West Region, Cameroon',
      href: '#',
      color: 'from-yellow-600 to-yellow-700'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-slate-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-yellow-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-slate-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-yellow-700' }
  ];

  const stats = [
    { number: '17', label: 'Widows Supported', icon: Users },
    { number: '3K+', label: 'Lives Impacted', icon: Heart },
    { number: '5+', label: 'Years of Service', icon: Clock },
    { number: '2', label: 'Regions Served', icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-yellow-50 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-primary/10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles size={40} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-primary/10"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Star size={32} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-1/4 text-primary/10"
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, -180, -360]
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
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
            Let's Create Impact Together
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect with us to learn more about our mission, explore partnership opportunities, 
            or discover how you can help restore hope to communities affected by the Anglophone crisis.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl font-bold text-secondary mb-8">
              Get In Touch
            </h2>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">{method.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{method.subtitle}</p>
                      <p className="text-primary font-medium hover:text-primary/80 transition-colors">
                        {method.content}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Media */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <h3 className="font-semibold text-gray-800 text-lg mb-4">Follow Our Journey</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8">
                <h2 className="font-heading text-3xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-blue-100">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="p-8">
                <AnimatePresence>
                  {isSuccess ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Full Name</label>
                          <motion.input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                            placeholder="Your full name"
                            required
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Email Address</label>
                          <motion.input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                            placeholder="your@email.com"
                            required
                            whileFocus={{ scale: 1.02 }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Subject</label>
                        <motion.select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                          required
                          whileFocus={{ scale: 1.02 }}
                        >
                          <option value="">Choose a subject</option>
                          <option value="Donation">💝 Donation Inquiry</option>
                          <option value="Volunteer">🤝 Volunteer Opportunities</option>
                          <option value="Partnership">🤝 Partnership Proposal</option>
                          <option value="Media">📺 Media & Press</option>
                          <option value="General">💬 General Inquiry</option>
                        </motion.select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Message</label>
                        <motion.textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                          placeholder="Tell us about your inquiry, ideas, or how you'd like to get involved..."
                          required
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-800 py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.h3 
            className="font-heading text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Ready to Make a Difference?
          </motion.h3>
          <motion.p 
            className="text-xl opacity-90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            Your support helps us restore hope to widows, orphans, and communities 
            affected by the Anglophone crisis in Cameroon.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
          >
            <motion.button 
              className="bg-yellow-500 text-slate-800 py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-yellow-400"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Donate Now</span>
            </motion.button>
            <motion.button 
              className="border-2 border-yellow-500 text-yellow-500 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-yellow-500 hover:text-slate-800 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              <span>Get Involved</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};