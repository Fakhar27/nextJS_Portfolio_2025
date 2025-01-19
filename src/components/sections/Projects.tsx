// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';
// import { section } from 'framer-motion/client'; 

// export default function Projects() {
//   return (
//     <section className='relative flex flex-col w-full min-h-screen bg-slate-600'>
//       {/* Text Content Container */}
//       <div className='lg:sticky lg:top-0 p-6 lg:p-8 w-full lg:w-auto'>
//         <div className="relative mb-6">
//           <h2 className="relative inline-block font-hackdaddy text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//             <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//               Projects
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//         </div>
//         <div>
//           <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-hackdaddy text-gray-200'>
//             Full-stack applications with automation and AI integration
//           </p>
//         </div>
//       </div>

//       {/* Projects Container */}
//       <div className='flex-1 p-6 lg:p-8'>
//         <div className='flex gap-6 md:gap-8 snap-x snap-mandatory w-full'>
//           {projects.map((project) => (
//             <div 
//               key={project.id} 
//               className="w-[85vw] sm:w-[70vw] md:w-[600px] shrink-0 snap-center"
//             >
//               <ProjectBentoBox project={project} />
//             </div>
//           ))}
//           {/* Spacer div to ensure last item is fully visible */}
//           <div className="w-2 md:w-3 shrink-0" aria-hidden="true" />
//         </div>
//       </div>
//     </section>
//   );
// }


















// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';

// export default function Projects() {
//   return (
//     <section className='relative flex flex-col w-full min-h-screen bg-slate-600'>
//       {/* Text Content Container */}
//       <div className='lg:sticky lg:top-0 p-6 lg:p-8 w-full'>
//         <div className="relative mb-6">
//           <h2 className="relative inline-block font-hackdaddy text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//             <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//               Projects
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//         </div>
//         <div>
//           <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-hackdaddy text-gray-200'>
//             Full-stack applications with automation and AI integration
//           </p>
//         </div>
//       </div>

//       {/* Projects Container */}
//       <div className='flex-1 p-4 lg:p-6'>
//         <div className='flex gap-4 lg:gap-6 snap-x snap-mandatory w-full'>
//           {projects.map((project) => (
//             <div 
//               key={project.id} 
//               className="w-[85vw] sm:w-[70vw] md:w-[450px] lg:w-[400px] shrink-0 snap-center"
//             >
//               <ProjectBentoBox project={project} />
//             </div>
//           ))}
//           <div className="w-2 shrink-0" aria-hidden="true" />
//         </div>
//       </div>
//     </section>
//   );
// }




















// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';
// import { motion } from 'framer-motion';

// export default function Projects() {
//   return (
//     <section className='relative flex flex-col w-full min-h-screen bg-slate-950'>
//       {/* Text Content Container */}
//       <div className='lg:sticky lg:top-0 p-6 lg:p-8 w-full'>
//         <div className="relative mb-6 text-center lg:text-left">
//           <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
//             <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//               Projects
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//         </div>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className='font-wilson text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl'
//         >
//           Full-stack applications with automation and AI integration
//         </motion.p>
//       </div>

//       {/* Projects Container */}
//       <div className='flex-1 p-4 lg:p-6'>
//         <div className='flex gap-4 lg:gap-6 snap-x snap-mandatory w-full'>
//           {projects.map((project, index) => (
//             <motion.div 
//               key={project.id} 
//               className="w-[85vw] sm:w-[70vw] md:w-[450px] lg:w-[400px] shrink-0 snap-center"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <ProjectBentoBox project={project} />
//             </motion.div>
//           ))}
//           <div className="w-2 shrink-0" aria-hidden="true" />
//         </div>

//         {/* Gradient line at the bottom */}
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40" />
//       </div>
//     </section>
//   );
// }

















// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';

// export default function Projects() {
//   return (
//     <section className="relative w-full">
//       {/* Fixed Text Column */}
//       <div className="fixed left-0 top-0 h-screen w-[300px] flex flex-col justify-center p-8 z-10">
//         <div className="space-y-6">
//           <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
//             <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//               Projects
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-gray-300 font-wilson text-lg">
//             Full-stack applications with automation and AI integration
//           </p>
//         </div>
//       </div>

//       {/* Scrolling Projects Container */}
//       <div className="ml-[300px] flex items-center">
//         <div className="flex gap-8 p-8">
//           {projects.map((project, index) => (
//             <div 
//               key={project.id} 
//               className="w-[min(600px,80vw)] md:w-[600px] shrink-0 last:mr-8"
//             >
//               <ProjectBentoBox project={project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }













// Projects.tsx
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
    // Initialize animations
    const animations = () => {
      // Title animation
      gsap.set(titleRef.current, { opacity: 1 }); // Ensure title is visible
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
          // markers: true // Enable for debugging
        }
      });

      // Description animation
      gsap.set(descRef.current, { opacity: 1 }); // Ensure description is visible
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

    // Small delay to ensure DOM is ready
    const timer = setTimeout(animations, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className='relative flex flex-col w-full min-h-screen bg-slate-950'>
      {/* Text Content Container */}
      <div className='lg:sticky lg:top-0 p-6 lg:p-8 w-full'>
        <div ref={titleRef} className="relative mb-6 text-center lg:text-left" style={{ opacity: 0 }}>
          <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Projects
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>
        <div ref={descRef} style={{ opacity: 0 }}>
          <p className='font-wilson text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl'>
            Full-stack applications with automation and AI integration
          </p>
        </div>
      </div>
      {/* Projects Container */}
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
        {/* Gradient line at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40" />
      </div>
    </section>
  );
}


// lg screen perfect not md or sm

// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';

// export default function Projects() {
//   return (
//     <section className="flex flex-col w-full min-h-screen bg-slate-600">
//       {/* Title Section */}
//       <div className="pt-12 px-4 md:px-6 lg:px-8 mb-12">
//         <div className="container mx-auto">
//           {/* Title with layered glow */}
//           <div className="relative mb-6">
//             <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
//               <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//                 Projects
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//                 Projects
//               </span>
//             </h2>
//           </div>
//           <p className="text-white/80 text-lg max-w-2xl">
//             I have contributed in over 20+ projects ranging from Frontend development, 
//             UI/UX design, Open Source, and Motion Graphics
//           </p>
//         </div>
//       </div>

//       {/* Projects Container */}
//       <div className="flex-1 w-full">
//         <div className="flex gap-8 items-start px-4 md:px-6 lg:px-8">
//           {projects.map((project) => (
//             <div key={project.id} className="w-[600px] shrink-0">
//               <ProjectBentoBox project={project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';

// export default function Projects() {
//   return (
//     <section className="w-full min-h-screen bg-slate-600">
//       {/* Title Section */}
//       <div className="pt-12 px-4 md:px-6 lg:px-8">
//         <div className="max-w-[90rem] mx-auto">
//           {/* Title with layered glow */}
//           <div className="relative mb-6">
//             <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
//               <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//                 Projects
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//                 Projects
//               </span>
//             </h2>
//           </div>
//           <p className="text-white/80 text-lg max-w-2xl">
//             I have contributed in over 20+ projects ranging from Frontend development, 
//             UI/UX design, Open Source, and Motion Graphics
//           </p>
//         </div>
//       </div>

//       {/* Projects Container */}
//       <div className="w-full mt-12">
//         {/* On mobile: flex-col, On desktop: flex-row */}
//         <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 md:px-6 lg:px-8">
//           {projects.map((project) => (
//             <div key={project.id} className="w-full md:w-[600px] shrink-0">
//               <ProjectBentoBox project={project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// Projects.tsx
// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';

// export default function Projects() {
//   return (
//     <section className="flex flex-row lg:flex-col w-full min-h-screen bg-slate-600">
//       {/* Title Section */}
//       <div className="pt-12 px-4 md:px-6 lg:px-8">
//         <div className="max-w-[90rem] mx-auto">
//           {/* Title with layered glow */}
//           <div className="relative mb-6">
//             <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
//               <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//                 Projects
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//                 Projects
//               </span>
//             </h2>
//           </div>
//           <p className="text-white/80 text-lg max-w-2xl">
//             I have contributed in over 20+ projects ranging from Frontend development, 
//             UI/UX design, Open Source, and Motion Graphics
//           </p>
//         </div>
//       </div>

//       {/* Projects Container */}
//       <div className="w-full">
//         <div className="flex gap-6 px-4 md:px-6 lg:px-8">
//           {projects.map((project) => (
//             <div key={project.id} className="w-[600px] shrink-0">
//               <ProjectBentoBox project={project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client'
// import React from 'react';
// import { projects } from "@/lib/data/projectsData";
// import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';

// export default function Projects() {
//   return (
//     <section className="flex flex-row lg:flex-col w-full min-h-screen bg-slate-600">
//       {/* Small screens: Title inline with projects */}
//       <div className="block lg:hidden py-8 px-4 md:px-6">
//         <div className="flex gap-8 items-start">
//           {/* Title with layered glow */}
//           <div className="relative shrink-0 w-[300px]">
//             <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl font-bold">
//               <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//                 Projects
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//                 Projects
//               </span>
//             </h2>
//           </div>
          
//           {/* Projects Grid for small screens */}
//           <div className="flex gap-8 items-start">
//             {projects.map((project) => (
//               <div key={project.id} className="w-[480px] shrink-0">
//                 <ProjectBentoBox project={project} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Large screens: Title above projects */}
//       <div className="hidden lg:block">
//         {/* Title Section */}
//         <div className="pt-12 px-8 mb-12">
//           <div className="container mx-auto">
//             <div className="relative mb-6">
//               <h2 className="relative inline-block font-hackdaddy text-5xl font-bold">
//                 <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//                   Projects
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
//                   Projects
//                 </span>
//               </h2>
//             </div>
//             <p className="text-white/80 text-lg max-w-2xl">
//               I have contributed in over 20+ projects ranging from Frontend development, 
//               UI/UX design, Open Source, and Motion Graphics
//             </p>
//           </div>
//         </div>

//         {/* Projects Container for large screens */}
//         <div className="flex-1 w-full">
//           <div className="flex gap-8 items-start px-8">
//             {projects.map((project) => (
//               <div key={project.id} className="w-[600px] shrink-0">
//                 <ProjectBentoBox project={project} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












// <section className="py-8 px-4 md:px-6 lg:px-8">
    //   <div className="flex gap-8 items-start">
    //     {/* Title with layered glow */}
    //     <div className="relative mb-12 shrink-0 w-[300px]">
    //       <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
    //         <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
    //           Projects
    //         </span>
    //         <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
    //           Projects
    //         </span>
    //       </h2>
    //     </div>
        
    //     {/* Projects Grid */}
    //     <div className="flex gap-8 items-start">
    //       {projects.map((project) => (
    //         <div key={project.id} className="w-[600px] shrink-0">
    //           <ProjectBentoBox project={project} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    
    
    
    // <section className='flex flex-row lg:flex-col px-4 py-10 w-full min-h-screen bg-slate-600'>
    //   <div className='px-4 mt-5 mb-2'>
    //     <div className="relative mb-6 text-start">
    //       <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
    //         <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
    //           Experience
    //         </span>
    //         <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
    //           Experience
    //         </span>
    //       </h2>
    //     </div>
    //     <div>
    //       <p className='text-sm md:text-4xl font-hackdaddy'>Full-stack applications with automation and AI integration</p>
    //     </div>
    //   </div>

    //   <div className='flex gap-8 items-start'>
    //     {projects.map((project) => (
    //       <div key={project.id} className="w-[600px] shrink-0">
    //         <ProjectBentoBox project={project} />
    //       </div>
    //     ))}
    //   </div>
    // </section>
    