import React from 'react';
import { motion } from 'framer-motion';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  light = false
}) => {
  return <motion.div className={`mb-12 ${centered ? 'text-center' : ''}`} initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} viewport={{
    once: true,
    amount: 0.3
  }}>
      <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      {subtitle && <p className={`font-body text-lg ${light ? 'text-white/80' : 'text-secondary/80'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>}
      <motion.div className={`h-1 w-20 ${centered ? 'mx-auto' : ''} mt-6 bg-primary rounded-full`} initial={{
      width: 0
    }} whileInView={{
      width: centered ? 80 : 80
    }} transition={{
      delay: 0.3,
      duration: 0.6
    }} viewport={{
      once: true
    }}></motion.div>
    </motion.div>;
};