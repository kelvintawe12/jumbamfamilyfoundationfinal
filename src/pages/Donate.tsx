import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Shield, 
  GraduationCap,
  CreditCard,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Copy,
  Download,
  Share2,
  Gift,
  Target,
  TrendingUp,
  Clock
} from 'lucide-react';

export const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | string>('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile' | 'bank'>('mobile');
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const donationAmounts = [
    { amount: 5000, description: 'Provides school supplies for 2 children' },
    { amount: 10000, description: 'Feeds a family for one week' },
    { amount: 25000, description: 'Medical care for 5 crisis victims' },
    { amount: 50000, description: 'Business training for 3 women' },
    { amount: 100000, description: 'Emergency shelter for a family' },
    { amount: 250000, description: 'Full scholarship for one child' }
  ];

  const impactAreas = [
    {
      icon: Users,
      title: 'Women Empowerment',
      description: 'Supporting war widows with business training and capital',
      impact: '17 widows supported with 5.5M FCFA',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Getting children back to school in safe regions',
      impact: 'Hundreds of children back in school',
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: Shield,
      title: 'Healthcare Access',
      description: 'Mobile health clinics reaching remote communities',
      impact: '3,000+ patients treated this year',
      color: 'from-yellow-600 to-yellow-700'
    },
    {
      icon: Heart,
      title: 'Crisis Response',
      description: 'Emergency aid for displaced families',
      impact: '700K+ internally displaced assisted',
      color: 'from-slate-700 to-slate-800'
    }
  ];

  type PaymentMethodId = 'mobile' | 'card' | 'bank';

  const paymentMethods: {
    id: PaymentMethodId;
    name: string;
    description: string;
    icon: React.ElementType;
    details: any;
  }[] = [
    {
      id: 'mobile',
      name: 'MTN Mobile Money',
      description: 'Quick and secure payment via MTN MoMo',
      icon: Smartphone,
      details: {
        number: '(+237) 671-196-020',
        name: 'Jumbam Family Foundation',
        steps: [
          'Dial *126# on your MTN line',
          'Select "Transfer Money"',
          'Enter recipient number: (+237) 671-196-020',
          'Enter your donation amount',
          'Confirm transaction with your PIN'
        ]
      }
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'International payments via secure gateway',
      icon: CreditCard,
      details: {
        processor: 'Stripe/PayPal',
        currencies: 'USD, EUR, XAF',
        security: 'SSL encrypted & PCI compliant'
      }
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct transfer to foundation account',
      icon: Globe,
      details: {
        bank: 'Afriland First Bank',
        account: 'JFF-2024-001',
        swift: 'AFRXCMCX'
      }
    }
  ];

  const testimonials = [
    {
      name: 'Marie Ngum',
      location: 'Bamenda, NW Region',
      quote: 'The foundation helped me start my small business after losing my husband. Now I can support my children.',
      image: '/crisisimage.png'
    },
    {
      name: 'Francis Jumbam',
      location: 'Founder',
      quote: 'Every donation brings hope to families affected by the crisis. Together, we are rebuilding lives.',
      image: '/image.png'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handleDonate = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
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
            duration: 8, 
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
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Star size={36} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-1/4 text-yellow-600/20"
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
          <Sparkles size={40} />
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
            Restore Hope, Transform Lives
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your donation directly supports widows, orphans, and families affected by the Anglophone crisis in Cameroon. 
            Every contribution brings healing, education, and sustainable hope to our communities.
          </motion.p>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { number: '3M+', label: 'People Affected' },
              { number: '17', label: 'Widows Supported' },
              { number: '700K+', label: 'Displaced' },
              { number: '5.5M', label: 'FCFA Distributed' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8">
                <h2 className="font-heading text-3xl font-bold text-white mb-2">
                  Make Your Donation
                </h2>
                <p className="text-slate-200">
                  Choose your donation amount and preferred payment method
                </p>
              </div>

              <div className="p-8">
                {/* Donation Type Toggle */}
                <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                      donationType === 'one-time' 
                        ? 'bg-yellow-500 text-slate-800 shadow-md' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    One-time Gift
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                      donationType === 'monthly' 
                        ? 'bg-yellow-500 text-slate-800 shadow-md' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Monthly Support
                  </button>
                </div>

                {/* Donation Amounts */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Amount (FCFA)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {donationAmounts.map((donation, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedAmount(donation.amount)}
                        className={`p-4 border-2 rounded-xl text-left transition-all ${
                          selectedAmount === donation.amount
                            ? 'border-yellow-500 bg-yellow-50 text-slate-800'
                            : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-50/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-bold text-lg mb-1">
                          {donation.amount.toLocaleString()} F
                        </div>
                        <div className="text-sm text-gray-600">
                          {donation.description}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount('custom');
                      }}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                      FCFA
                    </span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <motion.div
                        key={method.id}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? 'border-yellow-500 bg-yellow-50'
                            : 'border-gray-200 hover:border-yellow-300'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                            method.id === 'mobile' ? 'from-yellow-500 to-yellow-600' :
                            method.id === 'card' ? 'from-slate-600 to-slate-700' :
                            'from-yellow-600 to-yellow-700'
                          } flex items-center justify-center`}>
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{method.name}</h4>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 ${
                            paymentMethod === method.id 
                              ? 'border-yellow-500 bg-yellow-500' 
                              : 'border-gray-300'
                          } flex items-center justify-center`}>
                            {paymentMethod === method.id && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>

                        {/* Payment Details */}
                        <AnimatePresence>
                          {paymentMethod === method.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 pt-4 border-t border-gray-200"
                            >
                              {method.id === 'mobile' && (
                                <div className="space-y-4">
                                  <div className="bg-yellow-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="font-semibold">MTN Mobile Money Number:</span>
                                      <button
                                        onClick={() => copyToClipboard('(+237) 671-196-020')}
                                        className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700"
                                      >
                                        <Copy className="w-4 h-4" />
                                        <span className="text-sm">{copiedNumber ? 'Copied!' : 'Copy'}</span>
                                      </button>
                                    </div>
                                    <div className="text-2xl font-bold text-slate-800 mb-1">
                                      (+237) 671-196-020
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      Name: Jumbam Family Foundation
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-semibold mb-2">How to send:</h5>
                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                        {(method.details.steps as string[] ?? []).map((step: string, idx: number) => (
                                        <li key={idx}>{step}</li>
                                        ))}
                                    </ol>
                                  </div>
                                </div>
                              )}
                              
                              {method.id === 'card' && (
                                <div className="text-sm text-gray-700">
                                  <p>Secure payment processing via {method.details.processor}</p>
                                  <p>Accepts: {method.details.currencies}</p>
                                  <p>Security: {method.details.security}</p>
                                </div>
                              )}
                              
                              {method.id === 'bank' && (
                                <div className="text-sm text-gray-700">
                                  <p>Bank: {method.details.bank}</p>
                                  <p>Account: {method.details.account}</p>
                                  <p>SWIFT: {method.details.swift}</p>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <motion.button
                  onClick={handleDonate}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-800 py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart className="w-5 h-5" />
                  <span>
                    {paymentMethod === 'mobile' ? 'Send via MoMo' : 'Donate Now'}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Impact Areas & Testimonials */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {/* Impact Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-6">Your Impact</h3>
              <div className="space-y-4">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">{area.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{area.description}</p>
                      <p className="text-xs font-medium text-yellow-600">{area.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-6">Stories of Hope</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Appeal */}
            <motion.div 
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-6 h-6 text-yellow-500" />
                <h3 className="font-heading text-xl font-bold">Emergency Appeal</h3>
              </div>
              <p className="text-slate-200 text-sm mb-4">
                The crisis continues to affect thousands. Your immediate support can provide emergency aid to displaced families.
              </p>
              <button className="w-full bg-yellow-500 text-slate-800 py-3 px-4 rounded-xl font-semibold hover:bg-yellow-400 transition-colors">
                Support Emergency Relief
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your donation will make a real difference in the lives of families affected by the crisis.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="bg-yellow-500 text-slate-800 py-3 px-6 rounded-xl font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
