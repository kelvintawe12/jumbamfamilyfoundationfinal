import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
export const HopeMeter: React.FC = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  // Update progress based on current page
  useEffect(() => {
    const routes = ['/', '/story', '/model', '/impact', '/crisis', '/core-areas', '/news', '/contact'];
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex >= 0) {
      setProgress((currentIndex + 1) / routes.length * 100);
    }
  }, [location]);
  return <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <motion.div className="bg-white shadow-lg rounded-full p-3 mb-3 flex items-center justify-center" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} initial={{
      opacity: 0,
      x: 20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      delay: 1
    }}>
        <div className="h-5 w-5 text-primary" />
      </motion.div>
      <motion.div className="h-60 w-2 bg-white/30 rounded-full relative overflow-hidden shadow-lg backdrop-blur-sm" initial={{
      height: 0,
      opacity: 0
    }} animate={{
      height: 240,
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 0.5
    }}>
        <AnimatePresence initial={false}>
          <motion.div key={progress} initial={{
          height: 0
        }} animate={{
          height: `${progress}%`
        }} className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-secondary rounded-full" transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }} />
        </AnimatePresence>
      </motion.div>
    </div>;
};