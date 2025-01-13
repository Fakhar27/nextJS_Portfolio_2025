'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

export default function Home() {

  return (
    <>
        <Hero />
    </>
  );
}













// 'use client';

// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Hero from '@/components/sections/Hero';

// export default function Home() {
//   // Space portal animation variants
//   const spacePortalVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//     },
//     animate: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: [0.6, -0.05, 0.01, 0.99], // Custom easing
//       },
//     },
//   };

//   // Staggered stars animation
//   const starsVariants = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const starVariant = {
//     initial: { scale: 0, opacity: 0 },
//     animate: {
//       scale: 1,
//       opacity: [0, 1, 0.8],
//       transition: {
//         duration: 1.5,
//         repeat: Infinity,
//         repeatType: "reverse",
//       },
//     },
//   };

//   return (
//     <>
//       {/* Background stars */}
//       <motion.div
//         variants={starsVariants}
//         initial="initial"
//         animate="animate"
//         className="fixed inset-0 pointer-events-none"
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             variants={starVariant}
//             className="absolute w-1 h-1 bg-white rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Main content with space portal animation */}
//       <motion.main
//         initial="initial"
//         animate="animate"
//         variants={spacePortalVariants}
//         className="relative"
//       >
//         <Hero />
//         {/* Add other sections here */}
//       </motion.main>
//     </>
//   );
// }
