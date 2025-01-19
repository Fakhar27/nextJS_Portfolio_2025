// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';
// import Projects from '@/components/sections/Projects';
// import Chatbot from '@/components/sections/Chatbot';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const experienceRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const experience = experienceRef.current;

//     if (container && experience) {
//       // Setup GSAP context
//       const ctx = gsap.context(() => {
//         // Initial setup - position the experience section
//         gsap.set(experience, {
//           yPercent: 100,
//           position: 'fixed',
//           width: '100%',
//           top: 0,
//           left: 0
//         });

//         // Create scroll trigger animation
//         ScrollTrigger.create({
//           trigger: container,
//           start: "top top", // Start at the top of the container
//           end: "+=100%", // End after scrolling 75% of container height
//           pin: true,
//           pinSpacing: true,
//           animation: gsap.to(experience, {
//             yPercent: 0,
//             ease: "power1.inOut", // Smoother easing
//           }),
//           scrub: 0.5, // Smooth scrubbing effect
//           onUpdate: (self) => {
//             // Dispatch scroll progress for children animations
//             const event = new CustomEvent('scrollProgress', { 
//               detail: { progress: self.progress }
//             });
//             window.dispatchEvent(event);
//           }
//         });
//       }, container);

//       // Cleanup function
//       return () => ctx.revert();
//     }
//   }, []);

//   return (
//     <main className="relative">
//       <div className="relative" ref={containerRef}>
//         <div className="relative z-0 min-h-screen">
//           <Hero />
//         </div>
//         <div 
//           ref={experienceRef} 
//           className="z-10 min-h-screen bg-slate-950"
//         >
//           <Experience />
//         </div>
//       </div>
//       <div>
//         <div className='min-h-screen bg-slate-600'>
//           <Projects />
//         </div>
//       </div>
//       <div>
//         <div className='min-h-screen bg-slate-200'>
//           <Chatbot />
//         </div>
//       </div>
//     </main>
//   );
// }


'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Chatbot from '@/components/sections/Chatbot';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const experience = experienceRef.current;
    const projectsContainer = projectsContainerRef.current;
    const projectsSection = projectsSectionRef.current;

    if (container && experience && projectsContainer && projectsSection) {
      // Setup GSAP context
      const ctx = gsap.context(() => {
        // Experience section animation
        gsap.set(experience, {
          yPercent: 100,
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0
        });

        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          animation: gsap.to(experience, {
            yPercent: 0,
            ease: "power1.inOut",
          }),
          // scrub: 0.5,
          scrub: true,
          onUpdate: (self) => {
            const event = new CustomEvent('scrollProgress', { 
              detail: { progress: self.progress }
            });
            window.dispatchEvent(event);
          }
        });

        // Projects section horizontal scroll
        const totalWidth = projectsSection.scrollWidth;
        
        ScrollTrigger.create({
          trigger: projectsContainer,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          pin: true,
          pinSpacing: true,
          animation: gsap.to(projectsSection, {
            x: () => -(totalWidth - window.innerWidth),
            ease: "none",
          }),
          // scrub: 0.5,
          scrub: true,
          invalidateOnRefresh: true,
        });
      });

      // Cleanup function
      return () => ctx.revert();
    }
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <div className="relative" ref={containerRef}>
        <div className="relative z-0 min-h-screen">
          <Hero />
        </div>
        <div 
          ref={experienceRef} 
          className="z-10 min-h-screen bg-slate-950"
        >
          <Experience />
        </div>
      </div>
      <div ref={projectsContainerRef} className="bg-slate-600">
  <div 
    ref={projectsSectionRef}
    className="min-h-screen flex items-center bg-slate-600"
  >
    <Projects />
  </div>
</div>
      <div>
        <div className="min-h-screen bg-slate-200">
          <Chatbot />
        </div>
      </div>
    </main>
  );
}