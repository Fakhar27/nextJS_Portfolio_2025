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
