'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { gsap } from 'gsap';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Cloud Architect",
      "Application Developer",
      "abc"
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 80,
  });

  // Floating animation for profile image
  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { Icon: ExternalLink, href: 'https://yourportfolio.com', label: 'Portfolio' }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="/videos/2611250-uhd_3840_2160_30fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay with space-themed gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4">
        <div className="w-full max-w-6xl">
          {/* Mobile and Default Layout */}
          <div className="flex flex-col items-center space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-8">
            {/* Profile Image with Animations */}
            <motion.div
              ref={imageContainerRef}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative h-48 w-48 md:h-64 md:w-64">
                {/* Glowing effect */}
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md" />
                
                {/* Image container */}
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/20 bg-black/50">
                  <img
                    src="/api/placeholder/256/256"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" 
                     style={{ transform: 'rotate(30deg)' }} />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" 
                     style={{ transform: 'rotate(-30deg)', animationDirection: 'reverse' }} />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <motion.h1 
                className="font-hackdaddy text-4xl md:text-5xl lg:text-6xl text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Fakhar ul mursaleen
              </motion.h1>

              <div className="font-wilson text-xl md:text-2xl lg:text-3xl text-white h-20">
                <span>{text}</span>
                <span className="animate-pulse">|</span>
              </div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: {
                        duration: 0.5,
                        rotate: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 0.5
                        }
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-white/10 blur-sm transition-all group-hover:bg-white/20" />
                    <Icon className="relative h-8 w-8 text-white transition-all group-hover:text-blue-400" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { gsap, Linear } from 'gsap';
// import { Github, Linkedin } from 'lucide-react';

// const typewriterWords = [
//   "Software Engineer",
//   "Cloud Architect",
//   "Application Developer"
// ];

// export default function Hero() {
//   const [currentWord, setCurrentWord] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const followerRef = useRef<HTMLDivElement>(null);

//   // Typewriter Effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % typewriterWords.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Custom Cursor
//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const follower = followerRef.current;

//     if (!cursor || !follower) return;

//     const moveCircle = (e: MouseEvent) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.1,
//         ease: Linear.easeNone,
//       });
//       gsap.to(follower, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.3,
//         ease: Linear.easeNone,
//       });
//     };

//     const onHover = () => {
//       gsap.to(cursor, { scale: 0.5, duration: 0.3 });
//       gsap.to(follower, { scale: 3, duration: 0.3 });
//     };

//     const onUnhover = () => {
//       gsap.to(cursor, { scale: 1, duration: 0.3 });
//       gsap.to(follower, { scale: 1, duration: 0.3 });
//     };

//     cursor.classList.remove('hidden');
//     follower.classList.remove('hidden');
    
//     document.addEventListener('mousemove', moveCircle);
//     document.querySelectorAll('.link').forEach((el) => {
//       el.addEventListener('mouseenter', onHover);
//       el.addEventListener('mouseleave', onUnhover);
//     });

//     return () => {
//       document.removeEventListener('mousemove', moveCircle);
//       document.querySelectorAll('.link').forEach((el) => {
//         el.removeEventListener('mouseenter', onHover);
//         el.removeEventListener('mouseleave', onUnhover);
//       });
//     };
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute left-0 top-0 h-full w-full object-cover"
//       >
//         <source src="/videos/2611250-uhd_3840_2160_30fps.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Custom Cursor */}
//       <div ref={cursorRef} className="fixed hidden h-4 w-4 rounded-full bg-white pointer-events-none z-50" />
//       <div ref={followerRef} className="fixed hidden h-8 w-8 rounded-full border-2 border-white pointer-events-none z-50" />

//       {/* Content Grid */}
//       <div className="relative z-10 h-full w-full">
//         <div className="mx-auto h-full max-w-7xl px-4">
//           {/* Desktop Layout */}
//           <div className="hidden lg:grid lg:h-full lg:grid-cols-3 lg:items-center lg:gap-8">
//             {/* Left Column - Name & Title */}
//             <div className="space-y-4">
//               <motion.h1 
//                 className="font-hackdaddy text-5xl text-white"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 Fakhar ul mursaleen
//               </motion.h1>
//               <motion.div
//                 className="font-wilson text-2xl text-white"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 {typewriterWords[currentWord]}
//               </motion.div>
//             </div>

//             {/* Middle Column - Profile Picture */}
//             <motion.div 
//               className="flex justify-center"
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white">
//                 <img
//                   src="photos/1693995100925.jpg"
//                   alt="Profile"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Right Column - Social Icons */}
//             <div className="flex justify-center space-x-8">
//               {[
//                 { Icon: Github, href: 'https://github.com/yourusername' },
//                 { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
//               ].map(({ Icon, href }) => (
//                 <motion.a
//                   key={href}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="link text-white"
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9, rotate: 3 }}
//                 >
//                   <Icon size={32} />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Layout */}
//           <div className="grid h-full grid-rows-2 items-center gap-8 lg:hidden">
//             {/* Top Row - Profile Picture */}
//             <div className="flex justify-center">
//               <motion.div 
//                 className="h-48 w-48 overflow-hidden rounded-full border-4 border-white"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <img
//                   src="/api/placeholder/192/192"
//                   alt="Profile"
//                   className="h-full w-full object-cover"
//                 />
//               </motion.div>
//             </div>

//             {/* Bottom Row - Two Columns */}
//             <div className="grid grid-cols-2 gap-4">
//               {/* Left Column - Name & Title */}
//               <div className="space-y-4">
//                 <motion.h1 
//                   className="font-hackdaddy text-3xl text-white"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   Fakhar ul mursaleen
//                 </motion.h1>
//                 <motion.div className="font-wilson text-xl text-white">
//                   {typewriterWords[currentWord]}
//                 </motion.div>
//               </div>

//               {/* Right Column - Social Icons */}
//               <div className="flex items-center justify-center space-x-6">
//                 {[
//                   { Icon: Github, href: 'https://github.com/yourusername' },
//                   { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
//                 ].map(({ Icon, href }) => (
//                   <motion.a
//                     key={href}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="link text-white"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9, rotate: 3 }}
//                   >
//                     <Icon size={24} />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }