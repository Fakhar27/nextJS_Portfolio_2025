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
//   const projectsContainerRef = useRef<HTMLDivElement>(null);
//   const projectsSectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const experience = experienceRef.current;
//     const projectsContainer = projectsContainerRef.current;
//     const projectsSection = projectsSectionRef.current;

//     if (container && experience && projectsContainer && projectsSection) {
//       // Setup GSAP context
//       const ctx = gsap.context(() => {
//         // Experience section animation
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
//           // scrub: 0.5,
//           scrub: true,
//           onUpdate: (self) => {
//             const event = new CustomEvent('scrollProgress', { 
//               detail: { progress: self.progress }
//             });
//             window.dispatchEvent(event);
//           }
//         });

//         // Projects section horizontal scroll
//         const totalWidth = projectsSection.scrollWidth;
        
//         ScrollTrigger.create({
//           trigger: projectsContainer,
//           start: "top top",
//           end: () => `+=${totalWidth - window.innerWidth}`,
//           pin: true,
//           pinSpacing: true,
//           animation: gsap.to(projectsSection, {
//             x: () => -(totalWidth - window.innerWidth),
//             ease: "none",
//           }),
//           // scrub: 0.5,
//           scrub: true,
//           invalidateOnRefresh: true,
//         });
//       });

//       // Cleanup function
//       return () => ctx.revert();
//     }
//   }, []);

//   return (
//     <main className="relative overflow-x-hidden">
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
//       <div ref={projectsContainerRef} className="bg-slate-950">
//   <div 
//     ref={projectsSectionRef}
//     className="min-h-screen flex items-center bg-slate-950"
//   >
//     <Projects />
//   </div>
// </div>
//       <div>
//         <div className="min-h-screen bg-slate-200">
//           <Chatbot />
//         </div>
//       </div>
//     </main>
//   );
// }

















// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';
// import Projects from '@/components/sections/Projects';
// import Chatbot from '@/components/sections/Chatbot';
// import Bio from '@/components/sections/Bio';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const experienceRef = useRef<HTMLDivElement>(null);
//   const projectsContainerRef = useRef<HTMLDivElement>(null);
//   const projectsSectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const experience = experienceRef.current;
//     const projectsContainer = projectsContainerRef.current;
//     const projectsSection = projectsSectionRef.current;

//     if (container && experience && projectsContainer && projectsSection) {
//       const ctx = gsap.context(() => {
//         // Experience section animation
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

//         // Give a small delay before setting up the horizontal scroll
//         setTimeout(() => {
//           // Projects section horizontal scroll
//           ScrollTrigger.create({
//             trigger: projectsContainer,
//             start: "top top",
//             end: () => `+=${projectsSection.scrollWidth - window.innerWidth}`,
//             pin: true,
//             pinSpacing: true,
//             animation: gsap.to(projectsSection, {
//               x: () => -(projectsSection.scrollWidth - window.innerWidth),
//               ease: "none",
//             }),
//             scrub: 1,
//             invalidateOnRefresh: true,
//           });
//         }, 100);
//       });

//       return () => {
//         ctx.revert();
//         ScrollTrigger.getAll().forEach(st => st.kill());
//       };
//     }
//   }, []);

//   return (
//     <main className="relative overflow-x-hidden">
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
//       <div ref={projectsContainerRef} className="relative bg-slate-950">
//         <div 
//           ref={projectsSectionRef}
//           className="flex items-start bg-slate-950"
//         >
//           <Projects />
//         </div>
//       </div>
//       <div>
//         <div className="min-h-screen bg-slate-200">
//           <Chatbot />
//         </div>
//       </div>
//     </main>
//   );
// }


// works

// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';
// import Projects from '@/components/sections/Projects';
// import Education from '@/components/sections/Education';
// import Bio from '@/components/sections/Bio';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const experienceRef = useRef<HTMLDivElement>(null);
//   const bioContainerRef = useRef<HTMLDivElement>(null);
//   const projectsContainerRef = useRef<HTMLDivElement>(null);
//   const projectsSectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const experience = experienceRef.current;
//     const bioContainer = bioContainerRef.current;
//     const projectsContainer = projectsContainerRef.current;
//     const projectsSection = projectsSectionRef.current;

//     if (container && experience && bioContainer && projectsContainer && projectsSection) {
//       const ctx = gsap.context(() => {
//         // Experience section animation
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

//         // Bio section animation
//         ScrollTrigger.create({
//           trigger: bioContainer,
//           start: "top top",
//           end: "bottom bottom",
//           pin: false,
//           pinSpacing: true,
//         });

//         // Give a small delay before setting up the horizontal scroll
//         setTimeout(() => {
//           // Projects section horizontal scroll
//           ScrollTrigger.create({
//             trigger: projectsContainer,
//             start: "top top",
//             end: () => `+=${projectsSection.scrollWidth - window.innerWidth}`,
//             pin: true,
//             pinSpacing: true,
//             animation: gsap.to(projectsSection, {
//               x: () => -(projectsSection.scrollWidth - window.innerWidth),
//               ease: "none",
//             }),
//             scrub: 1,
//             invalidateOnRefresh: true,
//           });
//         }, 100);
//       });

//       return () => {
//         ctx.revert();
//         ScrollTrigger.getAll().forEach(st => st.kill());
//       };
//     }
//   }, []);

//   return (
//     <main className="relative overflow-x-hidden">
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
//       <div ref={bioContainerRef} className="relative bg-slate-950">
//         <Bio />
//       </div>
//       <div ref={projectsContainerRef} className="relative bg-slate-950">
//         <div 
//           ref={projectsSectionRef}
//           className="flex items-start bg-slate-950"
//         >
//           <Projects />
//         </div>
//       </div>
//       <div>
//         <div className="min-h-screen bg-slate-200">
//           <Education />
//         </div>
//       </div>
//     </main>
//   );
// }















// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '@/components/sections/Hero';
// import Experience from '@/components/sections/Experience';
// import Projects from '@/components/sections/Projects';
// import Education from '@/components/sections/Education';
// import Bio from '@/components/sections/Bio';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const experienceRef = useRef<HTMLDivElement>(null);
//   const bioContainerRef = useRef<HTMLDivElement>(null);
//   const projectsContainerRef = useRef<HTMLDivElement>(null);
//   const projectsSectionRef = useRef<HTMLDivElement>(null);
//   const educationContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const experience = experienceRef.current;
//     const bioContainer = bioContainerRef.current;
//     const projectsContainer = projectsContainerRef.current;
//     const projectsSection = projectsSectionRef.current;
//     const educationContainer = educationContainerRef.current;

//     if (container && experience && bioContainer && projectsContainer && projectsSection && educationContainer) {
//       // Create a single GSAP context for all animations
//       const ctx = gsap.context(() => {
//         // Experience section animation
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

//         // Bio section animation
//         ScrollTrigger.create({
//           trigger: bioContainer,
//           start: "top top",
//           end: "bottom bottom",
//           pin: false,
//           pinSpacing: true,
//         });

//         // Projects section horizontal scroll
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

//         // Education section
//         ScrollTrigger.create({
//           trigger: educationContainer,
//           start: "top bottom",
//           end: "bottom top",
//           // markers: true, // For debugging
//           toggleActions: "play none none reverse",
//           // This ensures the education section's internal animations work correctly
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
//     <main className="relative overflow-x-hidden">
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
//       <div ref={bioContainerRef} className="relative bg-slate-950">
//         <Bio />
//       </div>
//       <div ref={projectsContainerRef} className="relative bg-slate-950">
//         <div 
//           ref={projectsSectionRef}
//           className="flex items-start bg-slate-950"
//         >
//           <Projects />
//         </div>
//       </div>
//       <div ref={educationContainerRef}>
//         <div className="min-h-screen bg-slate-950">
//           <Education />
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
import Education from '@/components/sections/Education';
import Bio from '@/components/sections/Bio';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const bioContainerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const educationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const experience = experienceRef.current;
    const bioContainer = bioContainerRef.current;
    const projectsContainer = projectsContainerRef.current;
    const projectsSection = projectsSectionRef.current;
    const educationContainer = educationContainerRef.current;

    if (container && experience && bioContainer && projectsContainer && projectsSection && educationContainer) {
      // Create a single GSAP context for all animations
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
          scrub: true,
          onUpdate: (self) => {
            const event = new CustomEvent('scrollProgress', { 
              detail: { progress: self.progress }
            });
            window.dispatchEvent(event);
          }
        });

        // Bio section animation
        ScrollTrigger.create({
          trigger: bioContainer,
          start: "top top",
          end: "bottom bottom",
          pin: false,
          pinSpacing: true,
        });

        // Projects section horizontal scroll
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

        // Education section - Modified for better coordination
        ScrollTrigger.create({
          trigger: educationContainer,
          start: "top 80%", // Start animation earlier
          end: "bottom 20%", // End animation later
          onEnter: () => {
            const event = new CustomEvent('educationVisible', { 
              detail: { visible: true }
            });
            window.dispatchEvent(event);
          },
          onLeave: () => {
            const event = new CustomEvent('educationVisible', { 
              detail: { visible: false }
            });
            window.dispatchEvent(event);
          },
          onEnterBack: () => {
            const event = new CustomEvent('educationVisible', { 
              detail: { visible: true }
            });
            window.dispatchEvent(event);
          },
          onLeaveBack: () => {
            const event = new CustomEvent('educationVisible', { 
              detail: { visible: false }
            });
            window.dispatchEvent(event);
          }
        });
      });

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    }
  }, []);

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

