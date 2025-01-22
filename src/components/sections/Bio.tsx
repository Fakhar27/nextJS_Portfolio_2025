'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Bio() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const animations = () => {
      const lineContainers = document.querySelectorAll('.bio-line');
      
      lineContainers.forEach((line) => {
        const words = line.querySelectorAll('.animated-word');
        
        gsap.set(words, { 
          opacity: 1,
          backgroundPositionX: "100%" 
        });

        words.forEach((word, wordIndex) => {
          gsap.to(word, {
            backgroundPositionX: "0%",
            duration: 1,
            delay: wordIndex * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top bottom-=100",
              end: "top center",
              toggleActions: "play none none reverse",
            //   markers: true,
            }
          });
        });
      });
    };

    const timer = setTimeout(animations, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const bioText = [
    "Innovative Software Engineer specializing in Full-Stack Development",
    "with expertise in AI-driven solutions and cloud architecture.",
    "Focused on creating intelligent applications that leverage",
    "cutting-edge AI/ML technologies, advanced automation pipelines,",
    "and enterprise-grade cloud infrastructure to deliver",
    "scalable, secure, and high-performance solutions."
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      {/* Title with layered glow effect */}
      {/* <div className="relative mb-12 text-center">
        <h2 
          ref={titleRef}
          className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{ opacity: 0 }}
        >
          <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </div> */}

      <div ref={containerRef} className="max-w-4xl mx-auto">
        {bioText.map((line, index) => (
          <div
            key={index}
            className="bio-line flex flex-wrap justify-center lg:justify-start gap-2 mb-4"
          >
            {line.split(" ").map((word, idx) => (
              <span
                key={idx}
                className="animated-word inline-block font-hackdaddy text-lg sm:text-xs lg:text-xl"
                style={{
                  opacity: 0,
                  background: 'linear-gradient(to right, #60A5FA 50%, #1F2937 50%)', 
                  backgroundSize: '200% 100%',
                  backgroundPositionX: '100%',
                  color: 'transparent',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}



// // components/sections/Bio.tsx
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function Bio() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const titleAnimation = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "100 bottom",
//           end: "center bottom",
//           toggleActions: "play none none reverse",
//         },
//       });

//       titleAnimation.to(
//         ".animated-word",
//         {
//           opacity: 1,
//           transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
//           ease: "power2.inOut",
//           stagger: 0.02,
//         },
//         0
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const bioText = [
//     "Innovative Software Engineer specializing in Full-Stack Development",
//     "with expertise in AI-driven solutions and cloud architecture.",
//     "Focused on creating intelligent applications that leverage",
//     "cutting-edge AI/ML technologies, advanced automation pipelines,",
//     "and enterprise-grade cloud infrastructure to deliver",
//     "scalable, secure, and high-performance solutions."
//   ];

//   return (
//     <section className="relative min-h-screen bg-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div ref={containerRef} className="max-w-4xl mx-auto">
//         {bioText.map((line, index) => (
//           <div
//             key={index}
//             className="flex flex-wrap justify-center lg:justify-start gap-2 mb-2"
//           >
//             {line.split(" ").map((word, idx) => (
//               <span
//                 key={idx}
//                 className="animated-word inline-block opacity-0 font-wilson text-lg sm:text-xl lg:text-2xl text-gray-300"
//                 style={{
//                   transform: 'translate3d(0, 50px, 0) rotateY(10deg) rotateX(10deg)',
//                 }}
//               >
//                 {word}&nbsp;
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }