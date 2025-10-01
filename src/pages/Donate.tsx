import React, { useState, Children } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { motion } from 'framer-motion';
import { HeartIcon, CalendarIcon, StarIcon, CreditCardIcon, UsersIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
export const Donate: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
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
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
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
        staggerChildren: 0.15
      }
    }
  };
  return <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        {showThankYou ? <motion.div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-2xl shadow-lg" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5
      }}>
            <motion.div className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-6" initial={{
          scale: 0
        }} animate={{
          scale: 1,
          rotate: 360
        }} transition={{
          duration: 0.7,
          type: 'spring'
        }}>
              <CheckCircleIcon size={40} className="text-primary" />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Thank You for Your Support!
            </h2>
            <p className="text-lg mb-6">
              Your generosity will help us restore hope to those affected by the
              crisis in Cameroon.
            </p>
            <p className="text-md mb-8">
              A confirmation has been sent to your email address.
            </p>
            <Link to="/" className="inline-flex items-center bg-primary hover:bg-primary/90 text-secondary py-3 px-6 rounded-md font-bold transition-all hover:scale-105">
              Return to Homepage
              <ArrowRightIcon size={18} className="ml-2" />
            </Link>
          </motion.div> : <>
            <SectionTitle title="Support Our Mission" subtitle="Your donation helps restore hope to those affected by the crisis in Cameroon" centered />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Donation Form */}
              <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={fadeInUp}>
                <h3 className="font-heading text-2xl font-bold mb-6">
                  Make a Donation
                </h3>
                <form onSubmit={handleDonationSubmit}>
                  <div className="mb-6">
                    <label className="font-bold mb-2 block">
                      Select Donation Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button type="button" onClick={() => setDonationType('one-time')} className={`py-3 px-4 rounded-md flex items-center justify-center transition-all ${donationType === 'one-time' ? 'bg-primary text-secondary font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        <HeartIcon size={18} className="mr-2" />
                        One-Time
                      </button>
                      <button type="button" onClick={() => setDonationType('monthly')} className={`py-3 px-4 rounded-md flex items-center justify-center transition-all ${donationType === 'monthly' ? 'bg-primary text-secondary font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        <CalendarIcon size={18} className="mr-2" />
                        Monthly
                      </button>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="font-bold mb-2 block">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[25, 50, 100, 250, 500, 1000].map(amount => <button key={amount} type="button" onClick={() => setDonationAmount(amount)} className={`py-3 px-4 rounded-md transition-all ${donationAmount === amount ? 'bg-primary text-secondary font-bold' : 'bg-gray-100 hover:bg-gray-200'}`}>
                          ${amount}
                        </button>)}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">
                        $
                      </span>
                      <input type="number" placeholder="Custom Amount" className="w-full pl-8 py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" onChange={e => setDonationAmount(parseFloat(e.target.value))} value={donationAmount || ''} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="firstName" className="font-medium mb-2 block">
                        First Name
                      </label>
                      <input type="text" id="firstName" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="font-medium mb-2 block">
                        Last Name
                      </label>
                      <input type="text" id="lastName" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="font-medium mb-2 block">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                  </div>
                  <div className="mb-8">
                    <div className="flex items-center mb-2">
                      <CreditCardIcon size={20} className="mr-2 text-primary" />
                      <label className="font-medium">Payment Information</label>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md text-center">
                      <p>Secure payment processing would be integrated here</p>
                      <p className="text-sm text-gray-500">
                        (Stripe/PayPal/etc. integration)
                      </p>
                    </div>
                  </div>
                  <button type="submit" disabled={isProcessing || !donationAmount} className={`w-full bg-primary hover:bg-primary/90 text-secondary py-4 px-6 rounded-md font-bold text-lg transition-all flex items-center justify-center ${isProcessing || !donationAmount ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
                    {isProcessing ? <>
                        <span className="animate-spin mr-2">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                        Processing...
                      </> : <>
                        {donationType === 'one-time' ? 'Donate' : 'Subscribe'}{' '}
                        {donationAmount ? `$${donationAmount}` : ''}
                      </>}
                  </button>
                  <p className="text-center text-sm mt-4 text-gray-500">
                    Your donation is tax-deductible to the extent allowed by
                    law.
                  </p>
                </form>
              </motion.div>
              {/* Impact Information */}
              <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} variants={staggerContainer}>
                <motion.div className="bg-white p-8 rounded-xl shadow-lg mb-8" variants={fadeInUp}>
                  <h3 className="font-heading text-2xl font-bold mb-6 flex items-center">
                    <StarIcon size={24} className="text-primary mr-2" />
                    Your Impact
                  </h3>
                  <div className="space-y-5">
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary">$25</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Educational Support</h4>
                        <p className="text-gray-600">
                          Provides school supplies for a child affected by the
                          crisis
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary">$50</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Healthcare Access</h4>
                        <p className="text-gray-600">
                          Provides basic healthcare for a family for one month
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary">$100</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Psychosocial Support</h4>
                        <p className="text-gray-600">
                          Funds trauma counseling sessions for a widow
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary">$250</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Business Startup</h4>
                        <p className="text-gray-600">
                          Provides startup capital for a widow's small business
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="bg-secondary text-white p-8 rounded-xl shadow-lg" variants={fadeInUp}>
                  <h3 className="font-heading text-2xl font-bold mb-6 flex items-center">
                    <UsersIcon size={24} className="text-primary mr-2" />
                    Testimonial
                  </h3>
                  <blockquote className="italic mb-4">
                    "The foundation helped me start my small business after I
                    lost my husband. Now I can support my children and even pay
                    for their education. I am forever grateful to the donors who
                    made this possible."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <div className="font-bold text-primary">Mary N.</div>
                      <div className="text-sm text-gray-300">
                        Widow & Entrepreneur, Bamenda
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            {/* Other Ways to Support */}
            <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} variants={staggerContainer}>
              <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                Other Ways to Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" variants={fadeInUp}>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon size={32} className="text-primary" />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-3">
                    Volunteer
                  </h4>
                  <p className="mb-4">
                    Share your skills and time to support our work in Cameroon
                    or remotely.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn More
                    <ArrowRightIcon size={16} className="ml-1" />
                  </Link>
                </motion.div>
                <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" variants={fadeInUp}>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon size={32} className="text-primary" />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-3">
                    Partner With Us
                  </h4>
                  <p className="mb-4">
                    Organizations can partner with us to expand our impact
                    through collaboration.
                  </p>
                  <Link to="/contact" className="text-primary font-medium hover:underline inline-flex items-center">
                    Contact Us
                    <ArrowRightIcon size={16} className="ml-1" />
                  </Link>
                </motion.div>
                <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" variants={fadeInUp}>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon size={32} className="text-primary" />
                  </div>
                  <h4 className="font-heading text-xl font-bold mb-3">
                    Spread Awareness
                  </h4>
                  <p className="mb-4">
                    Help us raise awareness about the crisis and our work by
                    sharing our story.
                  </p>
                  <Link to="/crisis" className="text-primary font-medium hover:underline inline-flex items-center">
                    Read Our Story
                    <ArrowRightIcon size={16} className="ml-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>}
      </div>
    </section>;
};
// This component is needed for the Link in the Donate page
import { Link } from 'react-router-dom';