import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
interface HeaderProps {
  scrolled: boolean;
}
export const Header: React.FC<HeaderProps> = ({
  scrolled
}) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    setAnimateHeader(true);
    // Close mobile menu when changing routes
    setMobileMenuOpen(false);
  }, [location.pathname]);
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <motion.header initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5,
    type: 'spring',
    stiffness: 100,
    damping: 15
  }} className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-md">
              <motion.img src="/image.png" alt="JFF Logo" className="h-12 w-auto" whileHover={{
              scale: 1.05
            }} transition={{
              type: 'spring',
              stiffness: 300
            }} />
            </div>
            <motion.span initial={{
            x: -20,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="text-white font-heading font-bold text-xl tracking-wider">
              Jumbam Family Foundation
            </motion.span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[{
            path: '/',
            label: 'Home'
          }, {
            path: '/story',
            label: 'Story'
          }, {
            path: '/model',
            label: 'Model'
          }, {
            path: '/impact',
            label: 'Impact'
          }, {
            path: '/crisis',
            label: 'Crisis'
          }, {
            path: '/core-areas',
            label: 'Core Areas'
          }, {
            path: '/news',
            label: 'News'
          }, {
            path: '/contact',
            label: 'Contact'
          }, {
            path: '/donate',
            label: 'Donate'
          }].map((item, index) => <NavLink key={item.path} to={item.path} label={item.label} active={isActive(item.path)} delay={0.1 * (index + 1)} />)}
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            delay: 0.9,
            duration: 0.5
          }}>
              <Link to="/donate" className="bg-primary hover:bg-primary/90 text-secondary py-2 px-5 rounded-md font-bold flex items-center transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                <Heart size={18} className="mr-2" />
                Support Now
              </Link>
            </motion.div>
          </nav>
          {/* Mobile Menu Button */}
          <motion.button initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5
        }} className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="lg:hidden bg-secondary border-t border-primary/20 overflow-hidden">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {[{
            path: '/',
            label: 'Home'
          }, {
            path: '/story',
            label: 'Story'
          }, {
            path: '/model',
            label: 'Model'
          }, {
            path: '/impact',
            label: 'Impact'
          }, {
            path: '/crisis',
            label: 'Crisis'
          }, {
            path: '/core-areas',
            label: 'Core Areas'
          }, {
            path: '/news',
            label: 'News'
          }, {
            path: '/contact',
            label: 'Contact'
          }, {
            path: '/donate',
            label: 'Donate'
          }].map((item, index) => <motion.div key={item.path} initial={{
            x: -20,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: 0.05 * index
          }}>
                  <Link to={item.path} className={`block py-2 px-4 rounded-md transition-colors ${isActive(item.path) ? 'bg-primary/20 text-primary' : 'text-white hover:bg-primary/10 hover:text-primary'}`} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>)}
              <motion.div initial={{
            x: -20,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: 0.4
          }} className="pt-2">
                <Link to="/donate" className="w-full bg-primary hover:bg-primary/90 text-secondary py-3 px-5 rounded-md font-bold flex items-center justify-center transition-transform hover:scale-105">
                  <Heart size={18} className="mr-2" />
                  Support Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};
interface NavLinkProps {
  to: string;
  label: string;
  active: boolean;
  delay?: number;
}
const NavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  active,
  delay = 0
}) => <motion.div initial={{
  y: -20,
  opacity: 0
}} animate={{
  y: 0,
  opacity: 1
}} transition={{
  delay,
  duration: 0.5,
  type: 'spring',
  stiffness: 100
}}>
    <Link to={to} className={`relative font-body font-medium transition-colors hover:text-primary ${active ? 'text-primary' : 'text-white'}`}>
      {label}
      {active && <motion.span layoutId="activeNavIndicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" initial={{
      width: 0
    }} animate={{
      width: '100%'
    }} transition={{
      duration: 0.3,
      type: 'spring',
      stiffness: 200
    }} />}
    </Link>
  </motion.div>;