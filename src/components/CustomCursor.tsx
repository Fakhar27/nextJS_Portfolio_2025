// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import styles from './CustomCursor.module.css';

// interface CustomCursorProps {
//   isDesktop?: boolean;
// }

// const CustomCursor: React.FC<CustomCursorProps> = ({ isDesktop = true }) => {
//   const cursor = useRef<HTMLDivElement>(null);
//   const follower = useRef<HTMLDivElement>(null);

//   const onHover = () => {
//     if (cursor.current && follower.current) {
//       gsap.to(cursor.current, {
//         width: '12px',
//         height: '12px',
//         duration: 0.3,
//         ease: 'power2.out',
//       });
//       gsap.to(follower.current, {
//         width: '50px',
//         height: '50px',
//         borderColor: 'rgba(255, 255, 255, 1)',
//         duration: 0.3,
//         ease: 'power2.out',
//       });
//     }
//   };

//   const onUnhover = () => {
//     if (cursor.current && follower.current) {
//       gsap.to(cursor.current, {
//         width: '8px',
//         height: '8px',
//         duration: 0.3,
//         ease: 'power2.out',
//       });
//       gsap.to(follower.current, {
//         width: '24px',
//         height: '24px',
//         borderColor: 'rgba(255, 255, 255, 0.8)',
//         duration: 0.3,
//         ease: 'power2.out',
//       });
//     }
//   };

//   const moveCircle = (e: MouseEvent) => {
//     if (cursor.current && follower.current) {
//       // Move main cursor instantly
//       gsap.set(cursor.current, {
//         x: e.clientX,
//         y: e.clientY,
//       });
      
//       // Move follower with smooth lag
//       gsap.to(follower.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.7,
//         ease: 'power2.out',
//       });
//     }
//   };

//   const initCursorAnimation = () => {
//     if (!cursor.current || !follower.current) return;
    
//     // Hide default cursor
//     document.documentElement.style.cursor = 'none';
//     document.body.style.cursor = 'none';
    
//     // Show custom cursor
//     cursor.current.style.display = 'block';
//     follower.current.style.display = 'block';

//     // Add mousemove event
//     document.addEventListener('mousemove', moveCircle);

//     // Add hover effects for interactive elements
//     const interactiveElements = document.querySelectorAll(
//       'a, button, input, select, textarea, [role="button"], .link, .interactive'
//     );
    
//     interactiveElements.forEach((el) => {
//       el.addEventListener('mouseenter', onHover);
//       el.addEventListener('mouseleave', onUnhover);
//       (el as HTMLElement).style.cursor = 'none';
//     });

//     document.addEventListener('mouseleave', () => {
//       if (cursor.current && follower.current) {
//         cursor.current.style.display = 'none';
//         follower.current.style.display = 'none';
//       }
//     });

//     document.addEventListener('mouseenter', () => {
//       if (cursor.current && follower.current) {
//         cursor.current.style.display = 'block';
//         follower.current.style.display = 'block';
//       }
//     });

//     return () => {
//       document.removeEventListener('mousemove', moveCircle);
//       document.documentElement.style.cursor = 'auto';
//       document.body.style.cursor = 'auto';
//       interactiveElements.forEach((el) => {
//         el.removeEventListener('mouseenter', onHover);
//         el.removeEventListener('mouseleave', onUnhover);
//         (el as HTMLElement).style.cursor = 'auto';
//       });
//     };
//   };

//   useEffect(() => {
//     if (isDesktop && window.innerWidth > 1024) {
//       const cleanup = initCursorAnimation();
//       return () => {
//         cleanup && cleanup();
//       };
//     }
//   }, [isDesktop]);

//   return (
//     <>
//       <div
//         ref={cursor}
//         className={styles.cursor}
//         aria-hidden="true"
//       />
//       <div
//         ref={follower}
//         className={styles.cursorFollower}
//         aria-hidden="true"
//       />
//     </>
//   );
// };

// export default CustomCursor;


'use client';

import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.css';

interface CustomCursorProps {
  isDesktop?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isDesktop = true }) => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  const onHover = useCallback(() => {
    if (cursor.current && follower.current) {
      gsap.to(cursor.current, {
        width: '12px',
        height: '12px',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(follower.current, {
        width: '50px',
        height: '50px',
        borderColor: 'rgba(255, 255, 255, 1)',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, []);

  const onUnhover = useCallback(() => {
    if (cursor.current && follower.current) {
      gsap.to(cursor.current, {
        width: '8px',
        height: '8px',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(follower.current, {
        width: '24px',
        height: '24px',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, []);

  const moveCircle = useCallback((e: MouseEvent) => {
    if (cursor.current && follower.current) {
      // Move main cursor instantly
      gsap.set(cursor.current, {
        x: e.clientX,
        y: e.clientY,
      });
      
      // Move follower with smooth lag
      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
        ease: 'power2.out',
      });
    }
  }, []);

  const initCursorAnimation = useCallback(() => {
    if (!cursor.current || !follower.current) return;
    
    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    
    // Show custom cursor
    cursor.current.style.display = 'block';
    follower.current.style.display = 'block';

    // Add mousemove event
    document.addEventListener('mousemove', moveCircle);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll<HTMLElement>(
      'a, button, input, select, textarea, [role="button"], .link, .interactive'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onUnhover);
      el.style.cursor = 'none';
    });

    const handleMouseLeave = () => {
      if (cursor.current && follower.current) {
        cursor.current.style.display = 'none';
        follower.current.style.display = 'none';
      }
    };

    const handleMouseEnter = () => {
      if (cursor.current && follower.current) {
        cursor.current.style.display = 'block';
        follower.current.style.display = 'block';
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Return cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCircle);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onUnhover);
        el.style.cursor = 'auto';
      });
    };
  }, [moveCircle, onHover, onUnhover]);

  useEffect(() => {
    if (isDesktop && window.innerWidth > 1024) {
      const cleanup = initCursorAnimation();
      return () => {
        if (cleanup) {
          cleanup();
        }
      };
    }
  }, [isDesktop, initCursorAnimation]);

  return (
    <>
      <div
        ref={cursor}
        className={styles.cursor}
        aria-hidden="true"
      />
      <div
        ref={follower}
        className={styles.cursorFollower}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;