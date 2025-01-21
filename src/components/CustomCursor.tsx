// // components/CustomCursor/index.tsx
// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { usePathname } from 'next/navigation';
// import styles from './CustomCursor.module.css';

// interface CustomCursorProps {
//   isDesktop?: boolean;
// }

// const CustomCursor: React.FC<CustomCursorProps> = ({ isDesktop = true }) => {
//   const cursor = useRef<HTMLDivElement>(null);
//   const follower = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();

//   const onHover = () => {
//     if (cursor.current && follower.current) {
//       gsap.to(cursor.current, {
//         scale: 0.5,
//         duration: 0.3,
//       });
//       gsap.to(follower.current, {
//         scale: 3,
//         duration: 0.3,
//       });
//     }
//   };

//   const onUnhover = () => {
//     if (cursor.current && follower.current) {
//       gsap.to(cursor.current, {
//         scale: 1,
//         duration: 0.3,
//       });
//       gsap.to(follower.current, {
//         scale: 1,
//         duration: 0.3,
//       });
//     }
//   };

//   const moveCircle = (e: MouseEvent) => {
//     if (cursor.current && follower.current) {
//       // Move the main cursor
//       gsap.to(cursor.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0,
//         ease: "none"
//       });
      
//       // Move the follower with slight delay
//       gsap.to(follower.current, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.15,
//         ease: "power2.out"
//       });
//     }
//   };

//   const initCursorAnimation = () => {
//     if (!cursor.current || !follower.current) return;
    
//     // Hide default cursor
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
//       // Hide default cursor on interactive elements
//       (el as HTMLElement).style.cursor = 'none';
//     });

//     // Remove custom cursor when leaving the window
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
//   }, [isDesktop, pathname]);

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
// components/CustomCursor/index.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.css';

interface CustomCursorProps {
  isDesktop?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isDesktop = true }) => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  const onHover = () => {
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
  };

  const onUnhover = () => {
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
  };

  const moveCircle = (e: MouseEvent) => {
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
  };

  const initCursorAnimation = () => {
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
    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [role="button"], .link, .interactive'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onUnhover);
      (el as HTMLElement).style.cursor = 'none';
    });

    document.addEventListener('mouseleave', () => {
      if (cursor.current && follower.current) {
        cursor.current.style.display = 'none';
        follower.current.style.display = 'none';
      }
    });

    document.addEventListener('mouseenter', () => {
      if (cursor.current && follower.current) {
        cursor.current.style.display = 'block';
        follower.current.style.display = 'block';
      }
    });

    return () => {
      document.removeEventListener('mousemove', moveCircle);
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onUnhover);
        (el as HTMLElement).style.cursor = 'auto';
      });
    };
  };

  useEffect(() => {
    if (isDesktop && window.innerWidth > 1024) {
      const cleanup = initCursorAnimation();
      return () => {
        cleanup && cleanup();
      };
    }
  }, [isDesktop]);

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