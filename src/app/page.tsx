// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';
// import Projects from '@/components/sections/Projects';
// import Education from '@/components/sections/Education';
// import Bio from '@/components/sections/Bio';
// import CustomCursor from '@/components/CustomCursor';
// import Header from '@/components/Header';

// // if (typeof window !== 'undefined') {
// //   gsap.registerPlugin(ScrollTrigger);
// // }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const experienceRef = useRef<HTMLDivElement>(null);
//   const bioContainerRef = useRef<HTMLDivElement>(null);
//   const projectsContainerRef = useRef<HTMLDivElement>(null);
//   const projectsSectionRef = useRef<HTMLDivElement>(null);
//   const educationContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const container = containerRef.current;
//     const experience = experienceRef.current;
//     const bioContainer = bioContainerRef.current;
//     const projectsContainer = projectsContainerRef.current;
//     const projectsSection = projectsSectionRef.current;
//     const educationContainer = educationContainerRef.current;

//     if (container && experience && bioContainer && projectsContainer && projectsSection && educationContainer) {
//       const ctx = gsap.context(() => {
//         gsap.set(experience, {
//           yPercent: 100,
//           position: 'fixed',
//           width: '100%',
//           top: 0,
//           left: 0
//         });

//         ScrollTrigger.create({
//           trigger: container,
//           start: "top top",
//           end: "+=100%",
//           pin: true,
//           pinSpacing: true,
//           animation: gsap.to(experience, {
//             yPercent: 0,
//             ease: "power1.inOut",
//           }),
//           scrub: true,
//           onUpdate: (self) => {
//             const event = new CustomEvent('scrollProgress', { 
//               detail: { progress: self.progress }
//             });
//             window.dispatchEvent(event);
//           }
//         });

//         ScrollTrigger.create({
//           trigger: bioContainer,
//           start: "top top",
//           end: "bottom bottom",
//           pin: false,
//           pinSpacing: true,
//         });

//         ScrollTrigger.create({
//           trigger: projectsContainer,
//           start: "top top",
//           end: () => `+=${projectsSection.scrollWidth - window.innerWidth}`,
//           pin: true,
//           pinSpacing: true,
//           animation: gsap.to(projectsSection, {
//             x: () => -(projectsSection.scrollWidth - window.innerWidth),
//             ease: "none",
//           }),
//           scrub: 1,
//           invalidateOnRefresh: true,
//         });

//         ScrollTrigger.create({
//           trigger: educationContainer,
//           start: "top 80%", 
//           end: "bottom 20%", 
//           onEnter: () => {
//             const event = new CustomEvent('educationVisible', { 
//               detail: { visible: true }
//             });
//             window.dispatchEvent(event);
//           },
//           onLeave: () => {
//             const event = new CustomEvent('educationVisible', { 
//               detail: { visible: false }
//             });
//             window.dispatchEvent(event);
//           },
//           onEnterBack: () => {
//             const event = new CustomEvent('educationVisible', { 
//               detail: { visible: true }
//             });
//             window.dispatchEvent(event);
//           },
//           onLeaveBack: () => {
//             const event = new CustomEvent('educationVisible', { 
//               detail: { visible: false }
//             });
//             window.dispatchEvent(event);
//           }
//         });
//       });

//       return () => {
//         ctx.revert();
//         ScrollTrigger.getAll().forEach(st => st.kill());
//       };
//     }
//   }, []);

//   return (
//     <>
//       <CustomCursor />
//       <Header />
//       <main className="relative overflow-x-hidden">
//         <div className="relative" ref={containerRef}>
//           <div className="relative z-0 min-h-screen">
//             <Hero />
//           </div>
//           <div 
//             ref={experienceRef} 
//             className="z-10 min-h-screen bg-slate-950"
//           >
//             <Experience />
//           </div>
//         </div>
//         <div ref={bioContainerRef} className="relative bg-slate-950">
//           <Bio />
//         </div>
//         <div ref={projectsContainerRef} className="relative bg-slate-950">
//           <div 
//             ref={projectsSectionRef}
//             className="flex items-start bg-slate-950"
//           >
//             <Projects />
//           </div>
//         </div>
//         <div ref={educationContainerRef}>
//           <div className="min-h-screen bg-slate-950">
//             <Education />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';
// import Projects from '@/components/sections/Projects';
// import Education from '@/components/sections/Education';
// import Bio from '@/components/sections/Bio';
// import CustomCursor from '@/components/CustomCursor';
// import Header from '@/components/Header';

// export default function Home() {
//   // Add state to track client-side mounting
//   const [isMounted, setIsMounted] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const experienceRef = useRef<HTMLDivElement>(null);
//   const bioContainerRef = useRef<HTMLDivElement>(null);
//   const projectsContainerRef = useRef<HTMLDivElement>(null);
//   const projectsSectionRef = useRef<HTMLDivElement>(null);
//   const educationContainerRef = useRef<HTMLDivElement>(null);

//   // Handle mounting state
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Separate GSAP initialization and animations
//   useEffect(() => {
//     if (!isMounted) return;

//     // Register GSAP plugins
//     gsap.registerPlugin(ScrollTrigger);
    
//     const container = containerRef.current;
//     const experience = experienceRef.current;
//     const bioContainer = bioContainerRef.current;
//     const projectsContainer = projectsContainerRef.current;
//     const projectsSection = projectsSectionRef.current;
//     const educationContainer = educationContainerRef.current;

//     if (container && experience && bioContainer && projectsContainer && projectsSection && educationContainer) {
//       const ctx = gsap.context(() => {
//         // Safe window event dispatcher
//         const dispatchCustomEvent = (name: string, detail: any) => {
//           if (typeof window !== 'undefined') {
//             window.dispatchEvent(new CustomEvent(name, { detail }));
//           }
//         };

//         gsap.set(experience, {
//           yPercent: 100,
//           position: 'fixed',
//           width: '100%',
//           top: 0,
//           left: 0
//         });

//         ScrollTrigger.create({
//           trigger: container,
//           start: "top top",
//           end: "+=100%",
//           pin: true,
//           pinSpacing: true,
//           animation: gsap.to(experience, {
//             yPercent: 0,
//             ease: "power1.inOut",
//           }),
//           scrub: true,
//           onUpdate: (self) => {
//             dispatchCustomEvent('scrollProgress', { progress: self.progress });
//           }
//         });

//         ScrollTrigger.create({
//           trigger: bioContainer,
//           start: "top top",
//           end: "bottom bottom",
//           pin: false,
//           pinSpacing: true,
//         });

//         ScrollTrigger.create({
//           trigger: projectsContainer,
//           start: "top top",
//           end: () => `+=${projectsSection.scrollWidth - window.innerWidth}`,
//           pin: true,
//           pinSpacing: true,
//           animation: gsap.to(projectsSection, {
//             x: () => -(projectsSection.scrollWidth - window.innerWidth),
//             ease: "none",
//           }),
//           scrub: 1,
//           invalidateOnRefresh: true,
//         });

//         ScrollTrigger.create({
//           trigger: educationContainer,
//           start: "top 80%",
//           end: "bottom 20%",
//           onEnter: () => dispatchCustomEvent('educationVisible', { visible: true }),
//           onLeave: () => dispatchCustomEvent('educationVisible', { visible: false }),
//           onEnterBack: () => dispatchCustomEvent('educationVisible', { visible: true }),
//           onLeaveBack: () => dispatchCustomEvent('educationVisible', { visible: false })
//         });
//       });

//       return () => {
//         ctx.revert();
//         ScrollTrigger.getAll().forEach(st => st.kill());
//       };
//     }
//   }, [isMounted]); // Only run after mounting

//   // Initial render with refs but no GSAP
//   return (
//     <>
//       <CustomCursor />
//       <Header />
//       <main className="relative overflow-x-hidden">
//         <div className="relative" ref={containerRef}>
//           <div className="relative z-0 min-h-screen">
//             <Hero />
//           </div>
//           <div 
//             ref={experienceRef} 
//             className="z-10 min-h-screen bg-slate-950"
//           >
//             <Experience />
//           </div>
//         </div>
//         <div ref={bioContainerRef} className="relative bg-slate-950">
//           <Bio />
//         </div>
//         <div ref={projectsContainerRef} className="relative bg-slate-950">
//           <div 
//             ref={projectsSectionRef}
//             className="flex items-start bg-slate-950"
//           >
//             <Projects />
//           </div>
//         </div>
//         <div ref={educationContainerRef}>
//           <div className="min-h-screen bg-slate-950">
//             <Education />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }



'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Bio from '@/components/sections/Bio';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';

// Define interfaces for different event types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ScrollProgressEvent extends CustomEvent {
  detail: {
    progress: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface EducationVisibilityEvent extends CustomEvent {
  detail: {
    visible: boolean;
  };
}

// Create a union type for all possible detail types
type CustomEventDetail = {
  progress: number;
} | {
  visible: boolean;
};

export default function Home() {
  // Add state to track client-side mounting
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const bioContainerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const educationContainerRef = useRef<HTMLDivElement>(null);

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Separate GSAP initialization and animations
  useEffect(() => {
    if (!isMounted) return;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    const experience = experienceRef.current;
    const bioContainer = bioContainerRef.current;
    const projectsContainer = projectsContainerRef.current;
    const projectsSection = projectsSectionRef.current;
    const educationContainer = educationContainerRef.current;

    if (container && experience && bioContainer && projectsContainer && projectsSection && educationContainer) {
      const ctx = gsap.context(() => {
        // Updated event dispatcher to handle different event types
        const dispatchCustomEvent = <T extends CustomEventDetail>(
          name: string,
          detail: T
        ) => {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent(name, { detail }));
          }
        };

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
          scrub: true,
          onUpdate: (self) => {
            dispatchCustomEvent('scrollProgress', { progress: self.progress });
          }
        });

        ScrollTrigger.create({
          trigger: bioContainer,
          start: "top top",
          end: "bottom bottom",
          pin: false,
          pinSpacing: true,
        });

        ScrollTrigger.create({
          trigger: projectsContainer,
          start: "top top",
          end: () => `+=${projectsSection.scrollWidth - window.innerWidth}`,
          pin: true,
          pinSpacing: true,
          animation: gsap.to(projectsSection, {
            x: () => -(projectsSection.scrollWidth - window.innerWidth),
            ease: "none",
          }),
          scrub: 1,
          invalidateOnRefresh: true,
        });

        ScrollTrigger.create({
          trigger: educationContainer,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => dispatchCustomEvent('educationVisible', { visible: true }),
          onLeave: () => dispatchCustomEvent('educationVisible', { visible: false }),
          onEnterBack: () => dispatchCustomEvent('educationVisible', { visible: true }),
          onLeaveBack: () => dispatchCustomEvent('educationVisible', { visible: false })
        });
      });

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    }
  }, [isMounted]); // Only run after mounting

  // Initial render with refs but no GSAP
  return (
    <>
      <CustomCursor />
      <Header />
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
        <div ref={bioContainerRef} className="relative bg-slate-950">
          <Bio />
        </div>
        <div ref={projectsContainerRef} className="relative bg-slate-950">
          <div 
            ref={projectsSectionRef}
            className="flex items-start bg-slate-950"
          >
            <Projects />
          </div>
        </div>
        <div ref={educationContainerRef}>
          <div className="min-h-screen bg-slate-950">
            <Education />
          </div>
        </div>
      </main>
    </>
  );
}