import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin, Youtube, ArrowRight, Heart, GraduationCap, Users, Handshake } from 'lucide-react';
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
          
          {/* About Us */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-heading text-lg font-bold mb-6 text-primary flex items-center">
              <Heart size={18} className="mr-2" />
              About Us
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/story" label="Our Story" />
              <FooterLink to="/model" label="Our Model" />
              <FooterLink to="/impact" label="Our Impact" />
              <FooterLink to="/crisis" label="Crisis Info" />
            </ul>
          </motion.div>
          
          {/* Programs */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-heading text-lg font-bold mb-6 text-primary flex items-center">
              <GraduationCap size={18} className="mr-2" />
              Programs
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/core-areas" label="Core Areas" />
              <FooterLink to="/scholarships" label="Scholarships" />
              <FooterLink to="/scholars" label="Our Scholars" />
              <FooterLink to="/news" label="News & Stories" />
            </ul>
          </motion.div>
          
          {/* Community */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-heading text-lg font-bold mb-6 text-primary flex items-center">
              <Users size={18} className="mr-2" />
              Community
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/team" label="Our Team" />
              <FooterLink to="/partners" label="Partners" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="/donate" label="Donate" />
            </ul>
          </motion.div>
          {/* Contact */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-heading text-lg font-bold mb-6 text-primary">
              Contact Us
            </h4>
            <div className="space-y-4 font-body text-gray-300">
              <div className="flex items-start">
                <Mail size={16} className="mr-3 mt-1 text-primary" />
                <div>
                  <div className="font-medium text-white text-sm">Email</div>
                  <a href="mailto:jumbamfamilyfoundation@gmail.com" className="hover:text-primary transition-colors text-sm">
                    jumbamfamilyfoundation@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={16} className="mr-3 mt-1 text-primary" />
                <div>
                  <div className="font-medium text-white text-sm">Phone</div>
                  <a href="tel:+237691513245" className="hover:text-primary transition-colors text-sm">
                    (+237) 691-51-32-45
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-primary" />
                <div>
                  <div className="font-medium text-white text-sm">Location</div>
                  <div className="text-sm">North West Region, Cameroon</div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <Link 
                to="/donate" 
                className="w-full bg-gradient-to-r from-primary to-yellow-500 text-secondary px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Heart size={16} className="mr-2" />
                Donate Now
              </Link>
              <Link 
                to="/contact" 
                className="w-full border border-primary text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary hover:text-secondary transition-all duration-300 flex items-center justify-center"
              >
                <Mail size={16} className="mr-2" />
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Section with Additional Links */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Additional Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Get Involved</h5>
              <ul className="space-y-2">
                <li><Link to="/donate" className="text-gray-400 hover:text-primary transition-colors text-sm">Make a Donation</Link></li>
                <li><Link to="/scholarships" className="text-gray-400 hover:text-primary transition-colors text-sm">Apply for Scholarship</Link></li>
                <li><Link to="/team" className="text-gray-400 hover:text-primary transition-colors text-sm">Join Our Team</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Resources</h5>
              <ul className="space-y-2">
                <li><Link to="/news" className="text-gray-400 hover:text-primary transition-colors text-sm">Latest News</Link></li>
                <li><Link to="/scholars" className="text-gray-400 hover:text-primary transition-colors text-sm">Success Stories</Link></li>
                <li><Link to="/impact" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Impact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Learn More</h5>
              <ul className="space-y-2">
                <li><Link to="/crisis" className="text-gray-400 hover:text-primary transition-colors text-sm">Anglophone Crisis</Link></li>
                <li><Link to="/core-areas" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Work Areas</Link></li>
                <li><Link to="/partners" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Partners</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Connect</h5>
              <ul className="space-y-2">
                <li><a href="mailto:jumbamfamilyfoundation@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm">Email Us</a></li>
                <li><a href="https://wa.me/237691513245" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">WhatsApp</a></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Form</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center font-body text-sm text-gray-400 border-t border-white/10 pt-6">
            <p>
              &copy; {new Date().getFullYear()} Jumbam Family Foundation. All rights reserved. | Restoring Hope Through Education, Healthcare & Women Empowerment
            </p>
          </div>
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