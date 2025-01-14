'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const experience = experienceRef.current;

    if (container && experience) {
      // Setup GSAP context
      const ctx = gsap.context(() => {
        // Initial setup
        gsap.set(experience, {
          yPercent: 100,
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0
        });

        // Create scroll trigger for main overlay animation
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          animation: gsap.to(experience, {
            yPercent: 0,
            ease: "none",
          }),
          scrub: true,
          onUpdate: (self) => {
            // Dispatch scroll progress to Experience component
            const event = new CustomEvent('scrollProgress', { 
              detail: { progress: self.progress }
            });
            window.dispatchEvent(event);
          }
        });
      }, container);

      // Cleanup
      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      <div className="relative" ref={containerRef}>
        <div className="relative z-0 min-h-screen">
          <Hero />
        </div>
        <div 
          ref={experienceRef} 
          className="z-10 min-h-screen bg-black"
        >
          <Experience />
        </div>
      </div>
    </>
  );
}