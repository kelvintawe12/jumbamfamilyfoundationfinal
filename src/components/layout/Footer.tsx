import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export const Footer: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '60px 60px'
      }}></div>
      </div>
      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.1
      }}>
          {/* Logo and Description */}
          <motion.div className="md:col-span-4" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <img src="/image.png" alt="JFF Logo" className="h-14 w-auto mr-3" />
              <div>
                <h3 className="font-heading text-xl font-bold">
                  Jumbam Family Foundation
                </h3>
                <p className="text-primary text-sm">Restoring Hope</p>
              </div>
            </div>
            <p className="font-body text-gray-300 mb-6">
              Contributing to a prosperous Cameroon and Africa through
              Education, Healthcare, and Women Empowerment. Our mission is to
              transform tragedy into hope and create lasting positive change.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-heading text-lg font-bold mb-6 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/story" label="Our Story" />
              <FooterLink to="/model" label="Our Model" />
              <FooterLink to="/impact" label="Our Impact" />
            </ul>
          </motion.div>
          {/* Learn More */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-heading text-lg font-bold mb-6 text-primary">
              Learn More
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/crisis" label="About the Crisis" />
              <FooterLink to="/core-areas" label="Core Areas" />
              <FooterLink to="/news" label="News & Stories" />
              <FooterLink to="/contact" label="Contact Us" />
            </ul>
          </motion.div>
          {/* Contact */}
          <motion.div className="md:col-span-4" variants={itemVariants}>
            <h4 className="font-heading text-lg font-bold mb-6 text-primary">
              Contact Us
            </h4>
            <div className="space-y-4 font-body text-gray-300">
              <div className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-primary" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a href="mailto:info@jumbamfamilyfoundation.org" className="hover:text-primary transition-colors">
                    info@jumbamfamilyfoundation.org
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-primary" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <a href="tel:+237123456789" className="hover:text-primary transition-colors">
                    +237 123 456 789
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary" />
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div>Bamenda, North West Region, Cameroon</div>
                </div>
              </div>
            </div>
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-heading font-bold mb-3 text-white">
                Subscribe to Our Newsletter
              </h5>
              <div className="flex">
                <input type="email" placeholder="Your email address" className="flex-1 bg-white/10 text-white border border-white/20 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary" />
                <button className="bg-primary text-secondary px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Bottom Bar */}
        <motion.div className="border-t border-white/10 mt-12 pt-8 text-center font-body text-sm text-gray-400" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} viewport={{
        once: true
      }}>
          <p>
            &copy; {new Date().getFullYear()} Jumbam Family Foundation. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
};
interface FooterLinkProps {
  to: string;
  label: string;
}
const FooterLink: React.FC<FooterLinkProps> = ({
  to,
  label
}) => <li>
    <Link to={to} className="font-body text-gray-300 hover:text-primary transition-colors flex items-center">
      <ArrowRight size={14} className="mr-2 text-primary" />
      {label}
    </Link>
  </li>;
interface SocialIconProps {
  icon: React.ReactNode;
}
const SocialIcon: React.FC<SocialIconProps> = ({
  icon
}) => <motion.a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-secondary transition-all" whileHover={{
  scale: 1.1
}} whileTap={{
  scale: 0.95
}}>
    {icon}
  </motion.a>;