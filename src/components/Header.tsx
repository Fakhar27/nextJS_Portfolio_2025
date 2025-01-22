'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
        </div>

        <motion.div
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={logoVariants}
          onClick={scrollToHero}
          className="relative w-11 h-11 md:w-14 md:h-14"
        >
          <Image
            src="/logo/ethLogo2.svg"
            alt="ETH Logo"
            fill
            className="object-contain" 
            priority
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;