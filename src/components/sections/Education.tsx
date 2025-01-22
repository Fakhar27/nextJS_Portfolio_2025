'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
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
  const firstTextRef = useRef<HTMLParagraphElement | null>(null);
  const secondTextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;
    
    const initializeAnimations = (): void => {
      const path = pathRef.current;
      const ball = ballRef.current;
      const content = contentRef.current;
      const logo = logoRef.current;
      const container = containerRef.current;
      const contentWrapper = contentWrapperRef.current;
      const firstText = firstTextRef.current;
      const secondText = secondTextRef.current;

      if (!path || !ball || !content || !logo || !container || !contentWrapper || !firstText || !secondText) return;
      
      const pathLength = path.getTotalLength();
      const highlights = Array.from(content.querySelectorAll('strong, a')) as HTMLElement[];

      const resetAnimation = () => {
        gsap.set([firstText, secondText], { 
          opacity: 0, 
          y: 30,
        });
        gsap.set(highlights, {
          opacity: 0,
          y: 20,
        });
        gsap.set(logo, { 
          opacity: 0, 
          scale: 0.9 
        });
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
      tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 1.5,
          ease: "power2.out"
        }
      });

      // Build the animation sequence
      tl.to(firstText, {
        opacity: 1,
        y: 0,
        duration: 2
      })
      .to(secondText, {
        opacity: 1,
        y: 0,
        duration: 2
      }, "-=1.5")
      .to(highlights, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2
      }, "-=1")
      .to(logo, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1")
      .to(path, {
        strokeDashoffset: 0,
        duration: 5,
        ease: "none"
      }, "-=1")
      .to(ball, {
        autoAlpha: 1,
        duration: 0.5
      }, "-=8")
      .to(ball, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 8,
        ease: "none"
      }, "<");

      const handleVisibility = (event: Event) => {
        const customEvent = event as EducationVisibilityEvent;
        if (customEvent.detail.visible) {
          resetAnimation();
          tl?.restart();
        } else {
          tl?.pause(0);
        }
      };

      window.addEventListener('educationVisible', handleVisibility);

      return () => {
        window.removeEventListener('educationVisible', handleVisibility);
      };
    };

    initializeAnimations();

    return () => {
      if (tl) {
        tl.kill();
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const strongText = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-slate-950 overflow-y-hidden"
    >
      <div 
        ref={contentWrapperRef}
        className="flex flex-row items-center justify-between w-full h-screen"
      >
        <div className="w-1/2 h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 4000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <line 
              x1="100" y1="200" x2="700" y2="200" 
              stroke="url(#guidelineGradient)" 
              strokeWidth="1"
              strokeDasharray="5,5"
              className="opacity-30"
            />

            <defs>
              <linearGradient id="pathGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>

              <linearGradient id="guidelineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>

              <radialGradient id="ballGradient" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#60A5FA" />
              </radialGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="#60A5FA" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>

            <path
              ref={pathRef}
              d="M 200 200 C 400 200 600 500 600 1000 
                 C 599 1438 200 1400 200 1600 
                 C 200 1800 600 1800 600 2100 
                 C 600 2400 200 2400 200 2600 
                 C 200 2800 600 2800 600 3200 
                 C 600 3600 200 3600 200 3800"
              stroke="url(#pathGradient)"
              strokeWidth="8"
              filter="url(#glow)"
              fill="none"
            />
            <circle 
              ref={ballRef} 
              r="40" 
              fill="url(#ballGradient)"
              filter="url(#glow)"
              className="animate-pulse"
            />
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

            <g>
              <circle
                cx="200"
                cy="3800"
                r="40"
                fill="url(#ballGradient)"
                filter="url(#glow)"
                className="animate-pulse"
              />
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

        <div className="w-1/2 flex flex-col items-center justify-center px-2 sm:px-8">
          <div ref={logoRef} className="w-full flex items-center justify-center max-w-xs mb-8">
            <img 
              src="/logo/nust-seeklogo.svg" 
              alt="NUST Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>

          <div ref={contentRef} className="max-w-xs">
            <p ref={firstTextRef} className="font-wilson text-xs sm:text-sm md:text-lg text-blue-400 mb-1">
              I am pursuing my degree in <motion.strong initial="initial"
          whileHover="hover"
          variants={strongText} className='text-emerald-100'>Software Engineering</motion.strong> at the <a className='text-emerald-100' href="https://nust.edu.pk/">National University 
              of Sciences & Technology (NUST)</a>, often referred to as the 'Harvard of Pakistan' 
              for its academic excellence and rigorous standards. Maintaining a 3.50 CGPA
            </p>
            <p ref={secondTextRef} className="font-wilson text-xs sm:text-sm md:text-lg text-blue-400 mb-4">
              Ranked as the top university in Pakistan and <motion.strong initial="initial"
          whileHover="hover"
          variants={strongText} className='text-emerald-100'>#144 globally</motion.strong> in Engineering & 
              Technology (QS 2024), NUST provides a world-class education that fosters 
              innovation, cutting-edge research, and technological advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}