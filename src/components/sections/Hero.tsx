// 'use client';

// import { useEffect, useRef } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { useTypewriter } from 'react-simple-typewriter';
// import { gsap } from 'gsap';
// import { Github, Linkedin, FileDown, LucideIcon } from 'lucide-react';

// interface ShinyButtonProps {
//   onClick: () => void;
//   children: React.ReactNode;
// }

// interface SocialLink {
//   Icon: LucideIcon;
//   href: string;
//   label: string;
// }

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.3, 
//       duration: 0.7
//     }
//   }
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut"
//     }
//   }
// };

// const profileVariants: Variants = {
//   hidden: { opacity: 0, x: 100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       type: "spring",
//       damping: 20
//     }
//   }
// };

// const iconVariants: Variants = {
//   hover: {
//     scale: 1.2,
//     rotate: [0, -10, 10, -10, 0],
//     transition: {
//       duration: 0.4,
//       type: "spring",
//       stiffness: 260,
//       damping: 20
//     }
//   },
//   tap: {
//     scale: 0.8,
//     rotate: 0,
//     transition: {
//       duration: 0.2
//     }
//   }
// };

// const ShinyButton: React.FC<ShinyButtonProps> = ({ onClick, children }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       initial={{ "--x": "100%", scale: 1 } as any}
//       animate={{ "--x": "-100%" } as any}
//       whileTap={{ scale: 0.97 }}
//       transition={{
//         repeat: Infinity,
//         repeatType: "loop",
//         repeatDelay: 1,
//         duration: 2,
//         ease: "linear",
//       }}
//       className="font-hackdaddy relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 px-8 py-3 backdrop-blur-sm hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30"
//     >
//       <div className="absolute inset-0 translate-x-[var(--x)] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform" />
//       <span className="relative flex items-center justify-center gap-2 text-sm md:text-lg text-white">
//         {children}
//         <FileDown className="h-5 w-5" />
//       </span>
//     </motion.button>
//   );
// };

// const Hero: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const imageContainerRef = useRef<HTMLDivElement>(null);
  
//   const [text] = useTypewriter({
//     words: [
//       "Software Engineer",
//       "Cloud Architect",
//       "Application Developer",
//     ],
//     loop: true,
//     delaySpeed: 2000,
//     deleteSpeed: 50,
//     typeSpeed: 80,
//   });

//   useEffect(() => {
//     const element = imageContainerRef.current;
//     if (element) {
//       const animation = gsap.to(element, {
//         y: 12,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut"
//       });

//       return () => {
//         animation.kill(); 
//       };
//     }
//   }, []);

//   const handleDownloadCV = (): void => {
//     try {
//       const cvPath = 'file/Resume.pdf'; 
      
//       const link = document.createElement('a');
//       link.href = cvPath;
//       link.download = 'Fakhar_ul_mursaleen_CV.pdf';
//       link.target = '_blank'; 
//       link.onerror = () => {
//         console.error('Error downloading file');
//         alert('Sorry, the CV file is currently unavailable. Please try again later.');
//       };
      
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Error in download handler:', error);
//       alert('Sorry, there was an error downloading the CV. Please try again later.');
//     }
//   };

//   const socialLinks: SocialLink[] = [
//     { Icon: Github, href: 'https://github.com/Fakhar27', label: 'GitHub' },
//     { Icon: Linkedin, href: 'https://www.linkedin.com/in/fakhar-mursaleen-28aaa4274/', label: 'LinkedIn' },
//   ];

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">
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

//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

//       <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-16">
//         <motion.div 
//           className="w-full max-w-5xl"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between md:gap-8">
//             {/* Text Content */}
//             <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
//               <motion.h1 
//                 variants={itemVariants}
//                 className="font-hackdaddy mb-4 text-4xl text-white md:text-2xl lg:text-3xl"
//               >
//                 Fakhar ul mursaleen
//               </motion.h1>

//               <motion.div 
//                 variants={itemVariants}
//                 className="font-wilson text-xl text-white h-12 md:text-xl lg:text-2xl"
//               >
//                 <span>{text}</span>
//                 <span className="animate-pulse">|</span>
//               </motion.div>

//               <motion.div 
//                 variants={itemVariants}
//                 className="mt-1 flex flex-col items-center space-y-6 md:items-start"
//               >
//                 <motion.div 
//                   variants={itemVariants}
//                   className="flex space-x-6"
//                 >
//                   {socialLinks.map(({ Icon, href, label }) => (
//                     <motion.a
//                       key={href}
//                       href={href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center p-2"
//                       whileHover="hover"
//                       whileTap="tap"
//                       variants={iconVariants}
//                     >
//                       <Icon className="h-8 w-8 text-white transition-colors hover:text-blue-400" />
//                       <span className="sr-only">{label}</span>
//                     </motion.a>
//                   ))}
//                 </motion.div>

//                 <motion.div variants={itemVariants}>
//                   <ShinyButton onClick={handleDownloadCV}>
//                     Download CV
//                   </ShinyButton>
//                 </motion.div>
//               </motion.div>
//             </div>

//             {/* Profile Image */}
//             <motion.div 
//               variants={itemVariants}
//               className="relative md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
//             >
//               <div
//                 ref={imageContainerRef}
//                 className="relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80"
//               >
//                 <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md" />
                
//                 <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/20 bg-black/50">
//                   <img
//                     src="/photos/1693995100925.jpg"
//                     alt="Profile"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
                
//                 <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" 
//                      style={{ transform: 'rotate(30deg)' }} />
//                 <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" 
//                      style={{ transform: 'rotate(-30deg)', animationDirection: 'reverse' }} />
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
'use client';

import { useState,useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Github, Linkedin, FileDown, LucideIcon } from 'lucide-react';

// Types remain the same
interface ShinyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

// Animation variants remain the same
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.7
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const iconVariants: Variants = {
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  tap: {
    scale: 0.8,
    rotate: 0,
    transition: {
      duration: 0.2
    }
  }
};

// Updated ShinyButton component
const ShinyButton: React.FC<ShinyButtonProps> = ({ onClick, children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const buttonClass = "font-hackdaddy relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 px-8 py-3 backdrop-blur-sm hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30";
  const shineClass = "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent";

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={buttonClass}
    >
      {isClient && (
        <motion.div
          className={shineClass}
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            duration: 2,
            ease: "linear",
          }}
        />
      )}
      <span className="relative flex items-center justify-center gap-2 text-sm md:text-lg text-white">
        {children}
        <FileDown className="h-5 w-5" />
      </span>
    </motion.button>
  );
};

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Cloud Architect",
      "Application Developer",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 80,
  });

  useEffect(() => {
    setIsClient(true);
    const element = imageContainerRef.current;
    if (element) {
      const animation = gsap.to(element, {
        y: 12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  const handleDownloadCV = async (): Promise<void> => {
    try {
      const cvPath = 'file/Resume.pdf';
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'Fakhar_ul_mursaleen_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error in download handler:', error);
      alert('Sorry, there was an error downloading the CV. Please try again later.');
    }
  };

  const socialLinks: SocialLink[] = [
    { Icon: Github, href: 'https://github.com/Fakhar27', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/fakhar-mursaleen-28aaa4274/', label: 'LinkedIn' },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-16">
        <motion.div 
          className="w-full max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between md:gap-8">
            {/* Text Content */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
              <motion.h1 
                variants={itemVariants}
                className="font-hackdaddy mb-4 text-4xl text-white md:text-2xl lg:text-3xl"
              >
                Fakhar ul mursaleen
              </motion.h1>

              {isClient && (
                <motion.div 
                  variants={itemVariants}
                  className="font-wilson text-xl text-white h-12 md:text-xl lg:text-2xl"
                >
                  <span>{text}</span>
                  <span className="animate-pulse">|</span>
                </motion.div>
              )}

              <motion.div 
                variants={itemVariants}
                className="mt-1 flex flex-col items-center space-y-6 md:items-start"
              >
                <motion.div 
                  variants={itemVariants}
                  className="flex space-x-6"
                >
                  {socialLinks.map(({ Icon, href, label }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2"
                      whileHover="hover"
                      whileTap="tap"
                      variants={iconVariants}
                    >
                      <Icon className="h-8 w-8 text-white transition-colors hover:text-blue-400" />
                      <span className="sr-only">{label}</span>
                    </motion.a>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <ShinyButton onClick={handleDownloadCV}>
                    Download CV
                  </ShinyButton>
                </motion.div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="relative md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
            >
              <div
                ref={imageContainerRef}
                className="relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80"
              >
                <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md" />
                
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/20 bg-black/50">
                <Image
  src="/photos/1693995100925.jpg"
  alt="Profile"
  fill
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;