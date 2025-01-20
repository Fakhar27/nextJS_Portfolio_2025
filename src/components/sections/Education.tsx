// import React from 'react'

// const Education = () => {
//   return (
//     <div className='min-h-screen flex items-center justify-center'>
//       <h2 className='font-hackdaddy text-lg text-yellow-500'>HELLO THERE!</h2>
//     </div>
//   )
// }

// export default Education






// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const Education = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const pathRef = useRef<SVGPathElement>(null);
//   const svgRef = useRef<SVGSVGElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const path = pathRef.current;
//     const svg = svgRef.current;
//     const content = contentRef.current;

//     if (!container || !path || !svg || !content) return;

//     // Get the total length of the path for animation
//     const pathLength = path.getTotalLength();
    
//     // Set initial state of the path
//     gsap.set(path, {
//       strokeDasharray: pathLength,
//       strokeDashoffset: pathLength,
//     });

//     // Setup timeline animations
//     const yearAnimation = gsap.timeline({
//       defaults: {
//         duration: 0.3,
//         autoAlpha: 0,
//         y: 20,
//         ease: "power2.out"
//       }
//     })
//     .set(".year", { autoAlpha: 0, y: 20 })
//     .to(".year-2021", { autoAlpha: 1, y: 0 }, 0.2)
//     .to(".year-2025", { autoAlpha: 1, y: 0 }, 0.4);

//     // Ball animation
//     const ballAnimation = gsap.timeline({
//       defaults: { duration: 1, ease: "none" }
//     })
//     .set(".tracking-ball", { autoAlpha: 0 })
//     .to(".tracking-ball", { autoAlpha: 1, duration: 0.1 })
//     .to(".tracking-ball", {
//       duration: 2,
//       motionPath: {
//         path: path,
//         align: path,
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true
//       }
//     });

//     // Main scroll animation
//     const scrollAnimation = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top center",
//         end: "bottom bottom",
//         scrub: true,
//         pin: ".education-left",
//       }
//     })
//     .to(path, {
//       strokeDashoffset: 0,
//       duration: 2,
//       ease: "none"
//     })
//     .add(yearAnimation, 0)
//     .add(ballAnimation, 0);

//     // Text content animation
//     gsap.from(content.children, {
//       scrollTrigger: {
//         trigger: content,
//         start: "top 80%",
//         end: "bottom 80%",
//         toggleActions: "play none none reverse"
//       },
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out"
//     });

//     return () => {
//       scrollAnimation.kill();
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//     <section 
//       ref={containerRef} 
//       className="relative min-h-screen bg-slate-200 flex flex-col lg:flex-row"
//     >
//       <div className="education-left w-full lg:w-1/2 h-screen">
//         <svg
//           ref={svgRef}
//           className="w-full h-full overflow-visible"
//           viewBox="0 0 400 800"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {/* Animated path */}
//           <path
//             ref={pathRef}
//             className="educational-path"
//             d="M 50,100 Q 200,200 150,400 T 200,700"
//             fill="none"
//             stroke="rgb(59, 130, 246)"
//             strokeWidth="4"
//           />
          
//           {/* Years */}
//           <text className="year year-2021 font-hackdaddy" x="30" y="120" fill="rgb(59, 130, 246)" opacity="0">2021</text>
//           <text className="year year-2025 font-hackdaddy" x="30" y="680" fill="rgb(59, 130, 246)" opacity="0">2025</text>
          
//           {/* Tracking ball */}
//           <circle 
//             className="tracking-ball" 
//             r="8" 
//             cx="50" 
//             cy="100"
//             fill="rgb(59, 130, 246)"
//           />
//         </svg>
//       </div>

//       <div className="education-right w-full lg:w-1/2 flex flex-col p-4 lg:p-8">
//         <div ref={logoRef} className="flex-1 flex items-center justify-center">
//           <div className="relative group">
//             {/* NUST Logo with animation */}
//             <svg 
//               className="w-32 h-32 lg:w-48 lg:h-48 transition-transform duration-500 group-hover:scale-105"
//               viewBox="0 0 100 100"
//               fill="none"
//             >
//               <circle 
//                 cx="50" 
//                 cy="50" 
//                 r="45" 
//                 className="stroke-blue-500 transition-all duration-500 group-hover:stroke-purple-500"
//                 strokeWidth="2" 
//               />
//               <text 
//                 x="50" 
//                 y="55" 
//                 textAnchor="middle" 
//                 className="text-2xl font-hackdaddy fill-blue-500 transition-all duration-500 group-hover:fill-purple-500"
//               >
//                 NUST
//               </text>
//             </svg>
//             {/* Glow effect */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//           </div>
//         </div>

//         <div ref={contentRef} className="flex-1 text-slate-800 mt-8 lg:mt-0">
//           <div className="max-w-xl mx-auto space-y-6">
//             <h3 className="font-hackdaddy text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//               National University of Sciences & Technology
//             </h3>
//             <p className="font-wilson text-base lg:text-lg">
//               I am pursuing my degree in Software Engineering at the National University of Sciences & Technology (NUST), 
//               often referred to as the 'Harvard of Pakistan' for its academic excellence and rigorous standards.
//             </p>
//             <p className="font-wilson text-base lg:text-lg">
//               Ranked as the top university in Pakistan and #144 globally in Engineering & Technology (QS 2024), 
//               NUST provides a world-class education that fosters innovation, cutting-edge research, and technological advancement.
//             </p>
//             <p className="font-wilson text-base lg:text-lg font-semibold">
//               Currently, I maintain a CGPA of 3.50
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;












// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function Education() {
//   const containerRef = useRef<HTMLElement>(null);
//   const pathRef = useRef<SVGPathElement>(null);
//   const ballRef = useRef<SVGCircleElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let tl: gsap.core.Timeline | null = null;
    
//     const initializeAnimations = () => {
//       const path = pathRef.current;
//       const ball = ballRef.current;
//       const title = titleRef.current;
//       const container = containerRef.current;

//       if (!path || !ball || !title || !container) return;
      
//       const pathLength = (path as SVGPathElement).getTotalLength();

//       // Set initial states
//       gsap.set(title, { opacity: 0, y: 50 });
//       gsap.set(path, {
//         strokeDasharray: pathLength,
//         strokeDashoffset: pathLength
//       });
//       gsap.set(ball, {
//         autoAlpha: 0,
//         x: (path as SVGPathElement).getPointAtLength(0).x,
//         y: (path as SVGPathElement).getPointAtLength(0).y
//       });

//       // Create timeline
//       tl = gsap.timeline({ paused: true });
      
//       // Add animations to timeline
//       tl.to(title, {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out"
//       })
//       .to(path, {
//         strokeDashoffset: 0,
//         duration: 2,
//         ease: "power2.inOut"
//       }, "-=0.5")
//       .to(ball, {
//         autoAlpha: 1,
//         duration: 0.5
//       }, "-=1.5")
//       .to(ball, {
//         motionPath: {
//           path: path,
//           align: path,
//           alignOrigin: [0.5, 0.5],
//           autoRotate: true
//         },
//         duration: 2,
//         ease: "none"
//       }, "-=1");
//     };

//     // Handle visibility changes
//     const handleVisibilityChange = (e: CustomEvent) => {
//       if (e.detail.visible) {
//         tl?.play();
//       } else {
//         tl?.reverse();
//       }
//     };

//     // Initialize animations and event listener
//     initializeAnimations();
//     window.addEventListener('educationVisible', handleVisibilityChange as EventListener);

//     return () => {
//       window.removeEventListener('educationVisible', handleVisibilityChange as EventListener);
//       if (tl) {
//         tl.kill();
//       }
//     };
//   }, []);

//   return (
//     <section 
//       ref={containerRef}
//       className="relative min-h-screen bg-slate-200 flex flex-col items-center justify-center py-16"
//     >
//       {/* Title */}
//       <div ref={titleRef} className="relative mb-12 text-center opacity-0 translate-y-[50px]">
//         <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
//           <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//             Education
//           </span>
//           <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//             Education
//           </span>
//         </h2>
//       </div>

//       {/* Timeline SVG */}
//       <div className="w-full max-w-6xl">
//         <svg
//           className="w-full h-[60vh]"
//           viewBox="0 0 800 600"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {/* Guide lines */}
//           <line 
//             x1="100" y1="100" x2="700" y2="100" 
//             stroke="rgb(59, 130, 246)" 
//             strokeWidth="1"
//             strokeDasharray="5,5"
//             className="opacity-30"
//           />
//           <text 
//             x="50" y="105" 
//             className="font-hackdaddy text-blue-500 text-sm"
//           >
//             2021
//           </text>

//           <line 
//             x1="100" y1="500" x2="700" y2="500" 
//             stroke="rgb(59, 130, 246)" 
//             strokeWidth="1"
//             strokeDasharray="5,5"
//             className="opacity-30"
//           />
//           <text 
//             x="50" y="505" 
//             className="font-hackdaddy text-blue-500 text-sm"
//           >
//             2025
//           </text>

//           {/* Main path */}
//           <path
//             ref={pathRef}
//             d="M 100,100 Q 300,100 400,200 T 400,500"
//             stroke="rgb(59, 130, 246)"
//             strokeWidth="4"
//             fill="none"
//           />

//           {/* Ball */}
//           <circle
//             ref={ballRef}
//             r="12"
//             fill="rgb(59, 130, 246)"
//           />

//           {/* Static nodes */}
//           <circle 
//             cx="100" cy="100" r="8" 
//             fill="rgb(59, 130, 246)" 
//             className="opacity-50" 
//           />
//           <circle 
//             cx="400" cy="200" r="8" 
//             fill="rgb(59, 130, 246)" 
//             className="opacity-50" 
//           />
//           <circle 
//             cx="400" cy="500" r="8" 
//             fill="rgb(59, 130, 246)" 
//             className="opacity-50" 
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Type declarations for GSAP
// declare module 'gsap' {
//   interface GSAPTimeline {
//     kill(): void;
//   }
// }

// // Custom event type
// interface EducationVisibilityEvent extends CustomEvent {
//   detail: {
//     visible: boolean;
//   };
// }

// gsap.registerPlugin(ScrollTrigger);

// export default function Education(): JSX.Element {
//   // Specify correct types for refs
//   const containerRef = useRef<HTMLElement | null>(null);
//   const pathRef = useRef<SVGPathElement | null>(null);
//   const ballRef = useRef<SVGCircleElement | null>(null);
//   const titleRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     let tl: gsap.core.Timeline | null = null;
    
//     const initializeAnimations = (): void => {
//       const path = pathRef.current;
//       const ball = ballRef.current;
//       const title = titleRef.current;
//       const container = containerRef.current;

//       if (!path || !ball || !title || !container) return;
      
//       const pathLength = path.getTotalLength();

//       // Set initial states
//       gsap.set(title, { opacity: 0, y: 50 });
//       gsap.set(path, {
//         strokeDasharray: pathLength,
//         strokeDashoffset: pathLength
//       });
//       gsap.set(ball, {
//         autoAlpha: 0,
//         x: path.getPointAtLength(0).x,
//         y: path.getPointAtLength(0).y
//       });

//       // Create timeline
//       tl = gsap.timeline({ paused: true });
      
//       // Add animations to timeline
//       tl.to(title, {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out"
//       })
//       .to(path, {
//         strokeDashoffset: 0,
//         duration: 3,
//         ease: "power2.inOut"
//       }, "-=0.5")
//       .to(ball, {
//         autoAlpha: 1,
//         duration: 0.5
//       }, "-=2.5")
//       .to(ball, {
//         motionPath: {
//           path: path,
//           align: path,
//           alignOrigin: [0.5, 0.5],
//           autoRotate: true
//         },
//         duration: 3,
//         ease: "none"
//       }, "-=2");
//     };

//     // Handle visibility changes with proper type
//     const handleVisibilityChange = (e: EducationVisibilityEvent): void => {
//       if (e.detail.visible) {
//         tl?.play();
//       } else {
//         tl?.reverse();
//       }
//     };

//     // Initialize animations and event listener
//     initializeAnimations();
//     window.addEventListener('educationVisible', handleVisibilityChange as EventListener);

//     // Cleanup function
//     return () => {
//       window.removeEventListener('educationVisible', handleVisibilityChange as EventListener);
//       if (tl) {
//         tl.kill();
//       }
//     };
//   }, []);

//   return (
//     <section 
//       ref={containerRef}
//       className="relative min-h-[150vh] bg-slate-200 flex flex-col items-center justify-center py-16"
//     >
//       {/* Title */}
//       <div ref={titleRef} className="relative mb-12 text-center opacity-0 translate-y-[50px]">
//         <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
//           <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//             Education
//           </span>
//           <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//             Education
//           </span>
//         </h2>
//       </div>

//       {/* Timeline SVG */}
//       <div className="w-full max-w-6xl">
//         <svg
//           className="w-full h-[90vh]"
//           viewBox="0 0 800 2200"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {/* Guide lines */}
//           <line 
//             x1="100" y1="200" x2="700" y2="200" 
//             stroke="rgb(59, 130, 246)" 
//             strokeWidth="1"
//             strokeDasharray="5,5"
//             className="opacity-30"
//           />

//           {/* Year labels */}
//           <text 
//             x="150" y="180" 
//             className="font-hackdaddy text-blue-500 text-sm"
//           >
//             2021
//           </text>
//           <text 
//             x="600" y="480" 
//             className="font-hackdaddy text-blue-500 text-sm"
//           >
//             2022
//           </text>
//           <text 
//             x="600" y="1080" 
//             className="font-hackdaddy text-blue-500 text-sm"
//           >
//             2023
//           </text>
//           <text 
//             x="600" y="1680" 
//             className="font-hackdaddy text-blue-500 text-sm"
//           >
//             2024
//           </text>

//           {/* Main path */}
//           <path
//             ref={pathRef}
//             d="M 200 200 C 400 200 600 300 600 500 C 599 738 200 700 200 800 C 200 900 600 900 600 1100 C 600 1300 200 1300 200 1400 C 200 1500 600 1500 600 1700 C 600 1900 200 1900 200 2000"
//             stroke="rgb(59, 130, 246)"
//             strokeWidth="4"
//             fill="none"
//           />

//           {/* Ball */}
//           <circle
//             ref={ballRef}
//             r="12"
//             fill="rgb(59, 130, 246)"
//           />

//           {/* Static nodes at curve points */}
//           <circle cx="200" cy="200" r="8" fill="rgb(59, 130, 246)" className="opacity-50" />
//           <circle cx="600" cy="500" r="8" fill="rgb(59, 130, 246)" className="opacity-50" />
//           <circle cx="200" cy="800" r="8" fill="rgb(59, 130, 246)" className="opacity-50" />
//           <circle cx="600" cy="1100" r="8" fill="rgb(59, 130, 246)" className="opacity-50" />
//           <circle cx="200" cy="1400" r="8" fill="rgb(59, 130, 246)" className="opacity-50" />
//           <circle cx="600" cy="1700" r="8" fill="rgb(59, 130, 246)" className="opacity-50" />
//           <circle cx="200" cy="2000" r="8" fill="rgb(59, 130, 246)" className="opacity-50" />
//         </svg>
//       </div>
//     </section>
//   );
// }





//                     ----- FINAL CODE WHICH WORKS -----
'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface EducationVisibilityEvent extends CustomEvent {
  detail: {
    visible: boolean;
  };
}

gsap.registerPlugin(ScrollTrigger);

export default function Education(): JSX.Element {
  const containerRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const ballRef = useRef<SVGCircleElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;
    
    const initializeAnimations = (): void => {
      const path = pathRef.current;
      const ball = ballRef.current;
      const content = contentRef.current;
      const logo = logoRef.current;
      const container = containerRef.current;
      const contentWrapper = contentWrapperRef.current;

      if (!path || !ball || !content || !logo || !container || !contentWrapper) return;
      
      const pathLength = path.getTotalLength();

      // Set initial states
      const resetAnimation = () => {
        gsap.set(content, { opacity: 0, y: 50 });
        gsap.set(logo, { opacity: 0, scale: 0.9 });
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });
        gsap.set(ball, {
          autoAlpha: 0,
          x: path.getPointAtLength(0).x,
          y: path.getPointAtLength(0).y
        });
      };

      resetAnimation();

      // Create timeline for content animations
      tl = gsap.timeline({ paused: true });
      
      tl.to(logo, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      })
      .to(content, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7")
      .to(path, {
        strokeDashoffset: 0,
        duration: 10,
        ease: "power2.inOut"
      }, "-=0.5")
      .to(ball, {
        autoAlpha: 1,
        duration: 0.7
      }, "-=2.5")
      .to(ball, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 4,
        ease: "none"
      }, "-=2");

      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          resetAnimation();
          tl?.restart();
        },
        onEnterBack: () => {
          resetAnimation();
          tl?.restart();
        }
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: contentWrapper,
        pinSpacing: false,
        scrub: true,
      });
    };

    initializeAnimations();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-slate-950 overflow-y-hidden"
    >
      {/* Content wrapper - This will be pinned */}
      <div 
        ref={contentWrapperRef}
        className="flex flex-row items-center justify-between w-full h-screen"
      >
        {/* Left side - SVG Timeline */}
        <div className="w-1/2 h-full">
  <svg
    className="w-full h-full"
    viewBox="0 0 800 4000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Guide lines (now with gradient) */}
    <line 
      x1="100" y1="200" x2="700" y2="200" 
      stroke="url(#guidelineGradient)" 
      strokeWidth="1"
      strokeDasharray="5,5"
      className="opacity-30"
    />

    {/* Define gradients */}
    <defs>
      <linearGradient id="pathGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#60A5FA" /> {/* blue-400 */}
        <stop offset="50%" stopColor="#C084FC" /> {/* purple-400 */}
        <stop offset="100%" stopColor="#EC4899" /> {/* pink-500 */}
      </linearGradient>

      <linearGradient id="guidelineGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>

      <radialGradient id="ballGradient" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#93C5FD" /> {/* blue-300 */}
        <stop offset="100%" stopColor="#60A5FA" /> {/* blue-400 */}
      </radialGradient>

      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#60A5FA" floodOpacity="0.5" />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>

    {/* Main path with gradient and glow */}
    <path
      id="mainPath"
      ref={pathRef}
      d="M 200 200 C 400 200 600 500 600 1000 
         C 599 1438 200 1400 200 1600 
         C 200 1800 600 1800 600 2100 
         C 600 2400 200 2400 200 2600 
         C 200 2800 600 2800 600 3200 
         C 600 3600 200 3600 200 3800"
      stroke="url(#pathGradient)"
      strokeWidth="4"
      filter="url(#glow)"
      fill="none"
    />

    {/* Animated ball */}
    <circle 
      ref={ballRef} 
      r="12" 
      fill="url(#ballGradient)"
      filter="url(#glow)"
      className="animate-pulse"
    />

    {/* Year Labels with gradient text */}
    <text
      x="600"
      y="200"
      className="fill-transparent"
      style={{ 
        fontSize: '10rem', 
        fontFamily: 'Hackdaddy', 
        fontWeight: 'bold',
        fill: 'url(#pathGradient)'
      }}
      textAnchor="middle"
      alignmentBaseline="middle"
      filter="url(#glow)"
    >
      2021
    </text>

    {/* Final section */}
    <g>
      {/* Last Ball with same styling as animated ball */}
      <circle
        cx="200"
        cy="3800"
        r="12"
        fill="url(#ballGradient)"
        filter="url(#glow)"
        className="animate-pulse"
      />

      {/* Last Year Label with gradient */}
      <text
        x="500"
        y="3800"
        className="fill-transparent"
        style={{ 
          fontSize: '10rem', 
          fontFamily: 'Hackdaddy',
          fontWeight: 'bold',
          fill: 'url(#pathGradient)'
        }}
        textAnchor="middle"
        alignmentBaseline="middle"
        filter="url(#glow)"
      >
        2025
      </text>
    </g>
  </svg>
</div>

        {/* Right side - Content */}
        <div className="w-1/2 flex flex-col items-center justify-center px-4 sm:px-8">
          {/* Logo section */}
          <div ref={logoRef} className="w-full flex items-center justify-center max-w-xs opacity-0 scale-90 mb-8">
            <img 
              src="/logo/nust-seeklogo.svg" 
              alt="NUST Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Description section */}
          <div 
            ref={contentRef} 
            className="opacity-0 translate-y-[50px] max-w-xs"
          >
            <p className="font-wilson text-xs sm:text-sm md:text-lg text-blue-400 mb-1">
              I am pursuing my degree in <strong className='text-emerald-100'>Software Engineering</strong> at the <a className='text-emerald-100' href="#">National University 
              of Sciences & Technology (NUST)</a>, often referred to as the 'Harvard of Pakistan' 
              for its academic excellence and rigorous standards. Maintaining a <strong className='text-emerald-100'>3.50 CGPA</strong>
            </p>
            <p className="font-wilson text-xs sm:text-sm md:text-lg text-blue-400 mb-4">
              Ranked as the top university in Pakistan and <strong className='text-emerald-100'>#144 globally in Engineering & 
              Technology</strong> (QS 2024), NUST provides a world-class education that fosters 
              innovation, cutting-edge research, and technological advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}