'use client';

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import type { Experience } from '@/lib/data/experiencesData';
import { experiences } from '@/lib/data/experiencesData';

// Subtle ShinyLink
const ShinyLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative font-hackdaddy inline-block text-2xl md:text-3xl font-bold text-white 
                   transition-colors duration-300 hover:text-blue-400"
        // Subtle scale on hover/tap
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  };
  
// const ShinyLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
//   return (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="relative inline-block font-hackdaddy text-2xl md:text-3xl font-bold text-white 
//                  transition-colors duration-300 hover:text-blue-400"
//       // Subtle scale on hover/tap
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {/* The visible text */}
//       {children}

//       {/* Narrow shimmer strip; "w-1/2" keeps it from covering the entire link width */}
//       <motion.span
//         className="pointer-events-none absolute left-0 top-0 h-full w-1/2 
//                    bg-gradient-to-r from-transparent via-white/20 to-transparent"
//         initial={{ x: '-100%' }}
//         animate={{ x: '200%' }}
//         transition={{
//           repeat: Infinity,
//           repeatType: 'loop',
//           duration: 2,
//           ease: 'linear',
//           repeatDelay: 1
//         }}
//         style={{ mixBlendMode: 'screen' }}
//       />
//     </motion.a>
//   );
// };

const Experience = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const title = titleRef.current;
    const timeline = timelineRef.current;
    const content = contentRef.current;
    if (!title || !timeline || !content) return;

    // Setup initial states
    gsap.set(title, { opacity: 0, x: -100 });
    gsap.set(timeline, { scaleY: 0, opacity: 0, transformOrigin: 'top' });
    gsap.set(content, { opacity: 1 });

    experienceRefs.current.forEach((ref, index) => {
      gsap.set(ref, {
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
        y: 20
      });
    });

    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });

    // Title from t=0.2..0.5
    tl.fromTo(
      title,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3 },
      0.2
    );

    // Timeline from t=0.6..0.7
    tl.fromTo(
      timeline,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 0.1 },
      0.6
    );

    // Experiences from t=0.7 onward
    experiences.forEach((_, index) => {
      tl.fromTo(
        experienceRefs.current[index],
        { opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 20 },
        { opacity: 1, x: 0, y: 0, duration: 0.3 },
        0.7 + 0.1 * index
      );
    });

    const handleScrollProgress = (e: CustomEvent) => {
      const progress = Math.max(0, Math.min(1, e.detail.progress));
      tl.progress(progress);
    };

    window.addEventListener('scrollProgress', handleScrollProgress as EventListener);

    return () => {
      window.removeEventListener('scrollProgress', handleScrollProgress as EventListener);
      tl.kill();
    };
  }, []);

  return (
    <section className="pt-20 pb-10 text-white px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Title with layered glow */}
        <div className="relative mb-16 text-center">
          <h2 
            ref={titleRef}
            className="relative inline-block font-hackdaddy text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Experience
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
              Experience
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[4px] opacity-30 animate-pulse bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div
            ref={timelineRef}
            className="timeline-line absolute left-4 md:left-1/2 w-0.5 h-full 
                       bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-pink-500/40"
          />

          <div ref={contentRef} className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  experienceRefs.current[index] = el;
                }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-2.5 md:left-1/2 md:ml-[-6px] w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse blur-sm" />
                  <div className="relative w-full h-full rounded-full bg-blue-500" />
                </div>
                
                <div className={`flex-1 ml-10 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  <ShinyLink href={exp.companyUrl}>
                    {exp.company}
                  </ShinyLink>
                  <p className="font-wilson text-lg text-gray-400 mb-2 mt-2">{exp.location}</p>
                  <p className="font-wilson text-xl mb-1 text-blue-300">{exp.role}</p>
                  <p className="font-wilson text-gray-400 mb-3">{exp.duration}</p>
                  <span className="inline-block px-4 py-1.5 text-sm rounded-full 
                                   bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                                   text-white backdrop-blur-sm"
                  >
                    {exp.type}
                  </span>
                </div>
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;






// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { motion, Variants } from 'framer-motion';
// import gsap from 'gsap';
// import type { Experience } from '@/lib/data/experiencesData';
// import { experiences } from '@/lib/data/experiencesData';

// const companyVariants: Variants = {
//   hover: {
//     scale: 1.05,
//     color: '#60A5FA',
//     transition: {
//       duration: 0.3,
//       type: 'spring',
//       stiffness: 300
//     }
//   },
//   tap: {
//     scale: 0.95
//   }
// };

// const Experience = () => {
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const title = titleRef.current;
//     const timeline = timelineRef.current;
//     const content = contentRef.current;
//     if (!title || !timeline || !content) return;

//     // Setup initial states
//     gsap.set(title, { opacity: 0, x: -100 });
//     gsap.set(timeline, { scaleY: 0, opacity: 0, transformOrigin: 'top' });
//     gsap.set(content, { opacity: 1 });

//     experienceRefs.current.forEach((ref) => {
//       gsap.set(ref, {
//         opacity: 0,
//         y: 20
//       });
//     });

//     const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });

//     tl.fromTo(
//       title,
//       { x: -100, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.3 },
//       0.2
//     );

//     tl.fromTo(
//       timeline,
//       { scaleY: 0, opacity: 0 },
//       { scaleY: 1, opacity: 1, duration: 0.1 },
//       0.6
//     );

//     experiences.forEach((_, index) => {
//       tl.fromTo(
//         experienceRefs.current[index],
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.1 },
//         0.7 + 0.1 * index
//       );
//     });

//     const handleScrollProgress = (e: CustomEvent) => {
//       const progress = Math.max(0, Math.min(1, e.detail.progress));
//       tl.progress(progress);
//     };

//     window.addEventListener('scrollProgress', handleScrollProgress as EventListener);

//     return () => {
//       window.removeEventListener('scrollProgress', handleScrollProgress as EventListener);
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section className="pt-20 pb-10 text-white px-4 md:px-8 lg:px-16">
//       <div className="container mx-auto">
//         <h2 
//           ref={titleRef}
//           className="font-hackdaddy text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
//         >
//           Experience
//         </h2>
        
//         <div className="relative max-w-5xl mx-auto">
//           <div
//             ref={timelineRef}
//             className="timeline-line absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-pink-500/40"
//           />

//           <div ref={contentRef} className="space-y-16 md:space-y-24">
//             {experiences.map((exp, index) => (
//               <div
//                 key={exp.id}
//                 ref={(el) => {
//                   experienceRefs.current[index] = el;
//                 }}
//                 className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
//                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 {/* Timeline dot with animated glow */}
//                 <div className="absolute left-2.5 md:left-1/2 md:ml-[-6px] w-3 h-3 rounded-full bg-blue-500">
//                   <div className="absolute inset-0 rounded-full bg-blue-500/50 animate-pulse"></div>
//                 </div>
                
//                 <div className={`flex-1 ml-10 md:ml-0 ${
//                   index % 2 === 0 ? 'md:text-right' : ''
//                 }`}>
//                   <motion.a
//                     href={exp.companyUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block font-hackdaddy text-2xl md:text-3xl font-bold mb-2 text-white hover:text-blue-400"
//                     variants={companyVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     {exp.company}
//                   </motion.a>
//                   <p className="font-wilson text-lg text-gray-400 mb-2">{exp.location}</p>
//                   <p className="font-wilson text-xl mb-1 text-blue-300">{exp.role}</p>
//                   <p className="font-wilson text-gray-400 mb-3">{exp.duration}</p>
//                   <span className="inline-block px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white backdrop-blur-sm">
//                     {exp.type}
//                   </span>
//                 </div>
                
//                 <div className="flex-1" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;





// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { motion, Variants } from 'framer-motion';
// import gsap from 'gsap';
// import type { Experience } from '@/lib/data/experiencesData';
// import { experiences } from '@/lib/data/experiencesData';

// const companyVariants: Variants = {
//   hover: {
//     scale: 1.05,
//     color: '#60A5FA',
//     transition: {
//       duration: 0.3,
//       type: 'spring',
//       stiffness: 300
//     }
//   },
//   tap: {
//     scale: 0.95
//   }
// };

// const Experience = () => {
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const title = titleRef.current;
//     const timeline = timelineRef.current;
//     const content = contentRef.current;
//     if (!title || !timeline || !content) return;

//     // Setup initial states
//     gsap.set(title, { opacity: 0, x: -100 });
//     gsap.set(timeline, { scaleY: 0, opacity: 0, transformOrigin: 'top' });
//     gsap.set(content, { opacity: 1 }); // We'll animate child items, so content can remain visible

//     experienceRefs.current.forEach((ref) => {
//       gsap.set(ref, {
//         opacity: 0,
//         y: 20
//       });
//     });

//     // Create a single master timeline (duration = 1 second for the entire scroll range [0..1])
//     const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });

//     // 1) Title: animate from t=0.2 to t=0.5  (0.3s duration)
//     tl.fromTo(
//       title,
//       { x: -100, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.3 },
//       0.2 // the time at which this animation starts in the timeline
//     );

//     // 2) Timeline: animate from t=0.6 to t=0.7 (0.1s duration)
//     tl.fromTo(
//       timeline,
//       { scaleY: 0, opacity: 0 },
//       { scaleY: 1, opacity: 1, duration: 0.1 },
//       0.6
//     );

//     // 3) Experience items (3 of them) from t=0.7 onward
//     //    item #1 from 0.7..0.8
//     //    item #2 from 0.8..0.9
//     //    item #3 from 0.9..1.0
//     experiences.forEach((_, index) => {
//       tl.fromTo(
//         experienceRefs.current[index],
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.1 },
//         0.7 + 0.1 * index
//       );
//     });

//     // Listen to custom scrollProgress event
//     const handleScrollProgress = (e: CustomEvent) => {
//       // clamp progress between 0 and 1
//       const progress = Math.max(0, Math.min(1, e.detail.progress));
//       tl.progress(progress); // scrub timeline based on scroll progress
//     };

//     window.addEventListener('scrollProgress', handleScrollProgress as EventListener);

//     return () => {
//       window.removeEventListener('scrollProgress', handleScrollProgress as EventListener);
//       tl.kill(); // clean up timeline
//     };
//   }, []);

//   return (
//     <section className="pt-20 text-white">
//       <div className="container mx-auto px-4">
//         <h2 ref={titleRef} className="text-4xl font-bold mb-16 text-center">
//           Experience
//         </h2>
//         <div className="relative max-w-4xl mx-auto">
//           <div
//             ref={timelineRef}
//             className="timeline-line absolute left-0 md:left-1/2 w-1 h-full bg-blue-500/20"
//           />
//           <div ref={contentRef}>
//             {experiences.map((exp, index) => (
//               <div
//                 key={exp.id}
//                 ref={(el) => {
//                   experienceRefs.current[index] = el;
//                 }}
//                 className={`flex flex-col md:flex-row gap-4 mb-16 relative ${
//                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 <div className="absolute left-[-8px] md:left-1/2 md:ml-[-8px] w-4 h-4 bg-blue-500 rounded-full" />
//                 <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
//                   <motion.a
//                     href={exp.companyUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block text-2xl font-bold mb-2 hover:text-blue-400"
//                     variants={companyVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     {exp.company}
//                   </motion.a>
//                   <p className="text-gray-400 mb-2">{exp.location}</p>
//                   <p className="text-xl mb-1">{exp.role}</p>
//                   <p className="text-gray-400">{exp.duration}</p>
//                   <span className="inline-block px-3 py-1 mt-2 text-sm bg-blue-500/20 rounded-full">
//                     {exp.type}
//                   </span>
//                 </div>
//                 <div className="flex-1" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;






// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { motion, Variants } from 'framer-motion';
// import gsap from 'gsap';
// import type { Experience } from '@/lib/data/experiencesData';
// import { experiences } from '@/lib/data/experiencesData';

// const companyVariants: Variants = {
//   hover: {
//     scale: 1.05,
//     color: '#60A5FA',
//     transition: {
//       duration: 0.3,
//       type: "spring",
//       stiffness: 300,
//     }
//   },
//   tap: {
//     scale: 0.95
//   }
// };

// const Experience = () => {
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const title = titleRef.current;
//     const content = contentRef.current;
//     const timeline = timelineRef.current;

//     if (title && content && timeline) {
//       // Initial setup - hide everything
//       gsap.set(title, { 
//         opacity: 0,
//         x: -100  // Start title from left
//       });
//       gsap.set(content, { opacity: 0 });
//       gsap.set(timeline, { scaleY: 0 });
//       gsap.set(experienceRefs.current, { 
//         opacity: 0,
//         y: 20  // Start slightly below their final position
//       });

//       const handleScrollProgress = (event: CustomEvent) => {
//         const progress = event.detail.progress;

//         // Title animation (0.2 - 0.5)
//         if (progress >= 0.2 && progress <= 0.5) {
//           const titleProgress = gsap.utils.mapRange(0.2, 0.5, 0, 1)(progress);
//           gsap.to(title, {
//             opacity: titleProgress,
//             x: -100 + (titleProgress * 100),  // Move from -100 to 0
//             duration: 0.3,
//             ease: "power2.out"
//           });
//         }

//         // Timeline animation (0.6 - 0.7)
//         if (progress >= 0.6 && progress <= 0.7) {
//           const timelineProgress = gsap.utils.mapRange(0.6, 0.7, 0, 1)(progress);
//           gsap.to(timeline, {
//             scaleY: timelineProgress,
//             opacity: 1,
//             duration: 0.3
//           });
//         }

//         // Content animations (0.7 onwards)
//         if (progress >= 0.7) {
//           experienceRefs.current.forEach((ref, index) => {
//             if (ref) {
//               const startProgress = 0.7 + (index * 0.1);  // Stagger start times
//               const endProgress = startProgress + 0.1;    // Animation duration for each item
              
//               if (progress >= startProgress && progress <= endProgress) {
//                 const itemProgress = gsap.utils.mapRange(startProgress, endProgress, 0, 1)(progress);
//                 gsap.to(ref, {
//                   opacity: itemProgress,
//                   y: 20 - (itemProgress * 20),  // Move up to final position
//                   duration: 0.3,
//                   ease: "power2.out"
//                 });
//               }
//             }
//           });
//         }

//         // Reset animations if scrolling back up
//         if (progress < 0.2) {
//           gsap.to(title, { opacity: 0, x: -100, duration: 0.3 });
//         }
//         if (progress < 0.6) {
//           gsap.to(timeline, { scaleY: 0, opacity: 0, duration: 0.3 });
//         }
//         if (progress < 0.7) {
//           experienceRefs.current.forEach(ref => {
//             if (ref) {
//               gsap.to(ref, { opacity: 0, y: 20, duration: 0.3 });
//             }
//           });
//         }
//       };

//       window.addEventListener('scrollProgress', handleScrollProgress as EventListener);

//       return () => {
//         window.removeEventListener('scrollProgress', handleScrollProgress as EventListener);
//       };
//     }
//   }, []);

//   return (
//     <section className="pt-20 text-white">
//       <div className="container mx-auto px-4">
//         <h2 
//           ref={titleRef}
//           className="text-4xl font-bold mb-16 text-center"
//         >
//           Experience
//         </h2>
        
//         <div className="relative max-w-4xl mx-auto">
//           <div 
//             ref={timelineRef}
//             className="timeline-line absolute left-0 md:left-1/2 w-1 h-full bg-blue-500/20"
//             style={{ transformOrigin: "top" }}
//           />

//           <div ref={contentRef}>
//             {experiences.map((exp, index) => (
//               <div
//                 key={exp.id}
//                 ref={el => { experienceRefs.current[index] = el; }}
//                 className={`flex flex-col md:flex-row gap-4 mb-16 relative ${
//                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 <div className="absolute left-[-8px] md:left-1/2 md:ml-[-8px] w-4 h-4 bg-blue-500 rounded-full" />
                
//                 <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
//                   <motion.a
//                     href={exp.companyUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block text-2xl font-bold mb-2 hover:text-blue-400"
//                     variants={companyVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     {exp.company}
//                   </motion.a>
//                   <p className="text-gray-400 mb-2">{exp.location}</p>
//                   <p className="text-xl mb-1">{exp.role}</p>
//                   <p className="text-gray-400">{exp.duration}</p>
//                   <span className="inline-block px-3 py-1 mt-2 text-sm bg-blue-500/20 rounded-full">
//                     {exp.type}
//                   </span>
//                 </div>
                
//                 <div className="flex-1" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { motion, Variants } from 'framer-motion';
// import gsap from 'gsap';
// import type { Experience } from '@/lib/data/experiencesData';
// import { experiences } from '@/lib/data/experiencesData';

// const companyVariants: Variants = {
//   hover: {
//     scale: 1.05,
//     color: '#60A5FA',
//     transition: {
//       duration: 0.3,
//       type: "spring",
//       stiffness: 300,
//     }
//   },
//   tap: {
//     scale: 0.95
//   }
// };

// const Experience = () => {
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const title = titleRef.current;
//     const content = contentRef.current;
//     const timeline = timelineRef.current;

//     if (title && content && timeline) {
//       // Initially hide content except title
//       gsap.set(content, { opacity: 0 });
//       gsap.set(timeline, { scaleY: 0 });

//       // Listen for scroll progress from parent
//       const handleScrollProgress = (event: CustomEvent) => {
//         const progress = event.detail.progress;

//         if (progress < 0.9) {
//           // First half of the scroll: Only title visible
//           gsap.to(content, {
//             opacity: 0,
//             duration: 0.3
//           });
//           gsap.to(timeline, {
//             scaleY: 0,
//             duration: 0.3
//           });
//         } else {
//           // Second half of the scroll: Fade in content and timeline
//           gsap.to(content, {
//             opacity: 1,
//             duration: 0.5,
//             stagger: 0.5
//           });
//           gsap.to(timeline, {
//             scaleY: 1,
//             duration: 0.5
//           });
//         }
//       };

//       window.addEventListener('scrollProgress', handleScrollProgress as EventListener);

//       return () => {
//         window.removeEventListener('scrollProgress', handleScrollProgress as EventListener);
//       };
//     }
//   }, []);

//   return (
//     <section className="pt-20 text-white">
//       <div className="container mx-auto px-4">
//         <h2 
//           ref={titleRef}
//           className="text-4xl font-bold mb-16 text-center"
//         >
//           Experience
//         </h2>
        
//         <div className="relative max-w-4xl mx-auto">
//           <div 
//             ref={timelineRef}
//             className="timeline-line absolute left-0 md:left-1/2 w-1 h-full bg-blue-500/20"
//             style={{ transformOrigin: "top" }}
//           />

//           <div ref={contentRef}>
//             {experiences.map((exp, index) => (
//               <div
//                 key={exp.id}
//                 className={`flex flex-col md:flex-row gap-4 mb-16 relative ${
//                   index % 2 === 0 ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 <div className="absolute left-[-8px] md:left-1/2 md:ml-[-8px] w-4 h-4 bg-blue-500 rounded-full" />
                
//                 <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
//                   <motion.a
//                     href={exp.companyUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block text-2xl font-bold mb-2 hover:text-blue-400"
//                     variants={companyVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                   >
//                     {exp.company}
//                   </motion.a>
//                   <p className="text-gray-400 mb-2">{exp.location}</p>
//                   <p className="text-xl mb-1">{exp.role}</p>
//                   <p className="text-gray-400">{exp.duration}</p>
//                   <span className="inline-block px-3 py-1 mt-2 text-sm bg-blue-500/20 rounded-full">
//                     {exp.type}
//                   </span>
//                 </div>
                
//                 <div className="flex-1" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;





// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { motion, Variants } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import type { Experience } from '@/lib/data/experiencesData';
// import { experiences } from '@/lib/data/experiencesData';


// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const companyVariants: Variants = {
//   hover: {
//     scale: 1.05,
//     color: '#60A5FA', 
//     transition: {
//       duration: 0.3,
//       type: "spring",
//       stiffness: 300,
//     }
//   },
//   tap: {
//     scale: 0.95
//   }
// };

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3
//     }
//   }
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   }
// };

// const Experience = () => {
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const experiencesRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (timelineRef.current && experiencesRef.current) {
//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: experiencesRef.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: 1
//         }
//       });

//       timeline.fromTo(
//         ".timeline-line",
//         { scaleY: 0 },
//         { scaleY: 1, duration: 1, ease: "none" }
//       );
//     }
//   }, []);

//   return (
//     <section className="min-h-screen bg-black pt-20 text-white" ref={experiencesRef}>
//       <motion.div
//         className="container mx-auto px-4"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
        
//         <div className="relative max-w-4xl mx-auto">
//           <div 
//             className="timeline-line absolute left-0 md:left-1/2 w-1 h-full bg-blue-500/20"
//             style={{ transformOrigin: "top" }}
//             ref={timelineRef}
//           />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={exp.id}
//               variants={itemVariants}
//               className={`flex flex-col md:flex-row gap-4 mb-16 relative ${
//                 index % 2 === 0 ? 'md:flex-row-reverse' : ''
//               }`}
//             >
//               <div className="absolute left-[-8px] md:left-1/2 md:ml-[-8px] w-4 h-4 bg-blue-500 rounded-full" />
              
//               <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
//                 <motion.a
//                   href={exp.companyUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-2xl font-bold mb-2 hover:text-blue-400"
//                   variants={companyVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                 >
//                   {exp.company}
//                 </motion.a>
//                 <p className="text-gray-400 mb-2">{exp.location}</p>
//                 <p className="text-xl mb-1">{exp.role}</p>
//                 <p className="text-gray-400">{exp.duration}</p>
//                 <span className="inline-block px-3 py-1 mt-2 text-sm bg-blue-500/20 rounded-full">
//                   {exp.type}
//                 </span>
//               </div>
              
//               <div className="flex-1" />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Experience;