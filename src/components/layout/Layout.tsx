import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { HopeMeter } from './HopeMeter';
import { HopeGuide } from '../common/HopeGuide';

export const Layout: React.FC<{
  children?: React.ReactNode;
}> = ({
  children
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <div className="flex flex-col min-h-screen bg-white">     <Header scrolled={scrolled} />   <main className="flex-grow pt-24 relative z-10">\n        {/* Use Outlet for nested routing or children for direct component passing */}\n        {children || <Outlet />}\n      </main>
      <HopeMeter />
      <HopeGuide />
      <Footer />
    </div>
  );
};