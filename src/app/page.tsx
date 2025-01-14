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

// // page.tsx
// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const sections = gsap.utils.toArray<HTMLElement>('.panel');
    
//     gsap.set(".panel", {
//       zIndex: (i, target, targets) => targets.length - i
//     });

//     gsap.to(".panel:not(:last-child)", {
//       yPercent: -100,
//       ease: "none",
//       stagger: 0.5,
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=200%",
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1
//       }
//     });

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <main 
//       ref={containerRef}
//       className="w-full h-full absolute top-0 left-0 overflow-hidden"
//     >
//       <section className="panel relative w-full h-screen">
//         <Hero />
//       </section>
      
//       <section className="panel relative w-full h-screen bg-black">
//         <Experience />
//       </section>
//     </main>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, useReducedMotion } from 'framer-motion';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';

// export default function Home() {

//   return (
//     <>
//         <Hero />
//         <Experience />
//     </>
//   );
// }