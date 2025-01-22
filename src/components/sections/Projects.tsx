'use client'
import React, { useEffect, useRef } from 'react';
import { projects } from "@/lib/data/projectsData";
import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const animations = () => {
      gsap.set(titleRef.current, { opacity: 1 }); 
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        }
      });

      gsap.set(descRef.current, { opacity: 1 }); 
      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
          // markers: true // Enable for debugging
        }
      });
    };

    const timer = setTimeout(animations, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
//     <div ref={titleRef} className="relative mb-6 text-center lg:text-left opacity-0">
// <div ref={descRef} className="opacity-0"></div>
    <section className='relative flex flex-col w-full min-h-screen bg-slate-950'>
      <div className='lg:sticky lg:top-0 p-6 lg:p-8 w-full'>
        <div ref={titleRef} className="relative mb-6 text-center lg:text-left opacity-0">
          <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Projects
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>
        <div ref={descRef} className='opacity-0'>
          <p className='font-wilson text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl'>
            Full-stack applications with automation and AI integration
          </p>
        </div>
      </div>
      <div className='flex-1 p-4 lg:p-6'>
        <div className='flex gap-4 lg:gap-6 snap-x snap-mandatory w-full'>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="w-[85vw] sm:w-[70vw] md:w-[450px] lg:w-[400px] shrink-0 snap-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectBentoBox project={project} />
            </motion.div>
          ))}
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950" />
      </div>
    </section>
  );
}