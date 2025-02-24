'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import type { Experience } from '@/lib/data/experiencesData';
import { experiences } from '@/lib/data/experiencesData';

const ShinyLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative font-hackdaddy inline-block text-lg md:text-xl font-bold text-white 
                 transition-colors duration-300 hover:text-blue-400"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

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
    gsap.set(title, { opacity: 0, y: -20 });
    gsap.set(timeline, { scaleY: 0, opacity: 0, transformOrigin: 'top' });
    gsap.set(content, { opacity: 1 });

    experienceRefs.current.forEach((ref, index) => {
      gsap.set(ref, {
        opacity: 0,
        x: index % 2 === 0 ? 30 : -30,
        y: 10
      });
    });

    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });

    tl.fromTo(
      title,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 },
      0.1
    );

    tl.fromTo(
      timeline,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 0.2 },
      0.3
    );

    experiences.forEach((_, index) => {
      tl.fromTo(
        experienceRefs.current[index],
        { opacity: 0, x: index % 2 === 0 ? 30 : -30, y: 10 },
        { opacity: 1, x: 0, y: 0, duration: 0.25 },
        0.4 + 0.1 * index
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
    <section className="pt-8  text-white px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative mb-6 text-center">
          <h2 
            ref={titleRef}
            className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Experience
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div
            ref={timelineRef}
            className="timeline-line absolute left-4 md:left-1/2 w-0.5 h-full 
                       bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-pink-500/40"
          />

          <div ref={contentRef} className="space-y-1 md:space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  experienceRefs.current[index] = el;
                }}
                className={`relative flex flex-col md:flex-row gap-3 md:gap-7 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-2.5 md:left-1/2 md:ml-[-4px] w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse blur-sm" />
                  <div className="relative w-full h-full rounded-full bg-blue-500" />
                </div>
                
                <div className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  <ShinyLink href={exp.companyUrl}>
                    {exp.company}
                  </ShinyLink>
                  <p className="font-wilson text-base text-gray-400 mb-1 mt-1">{exp.location}</p>
                  <p className="font-wilson text-lg mb-1 text-blue-300">{exp.role}</p>
                  <p className="font-wilson text-sm text-gray-400 mb-2">{exp.duration}</p>
                  <span className="inline-block px-3 py-1 text-xs rounded-full 
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