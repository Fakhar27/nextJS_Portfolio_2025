import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Project } from "@/lib/data/projectsData";
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const BentoTilt = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: 'transform 0.2s ease-out' }}
    >
      {children}
    </div>
  );
};

interface ProjectBentoBoxProps {
  project: Project;
}

export function ProjectBentoBox({ project }: ProjectBentoBoxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleButtonMouseMove = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleButtonMouseEnter = () => setHoverOpacity(1);
  const handleButtonMouseLeave = () => setHoverOpacity(0);

  return (
    <BentoTilt className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-3 h-full">
      <div className="flex flex-col h-full">
        <div className="relative w-full overflow-hidden rounded-lg group mb-3">
          <div className="relative aspect-[16/9] w-full">
            <motion.div className="relative w-full h-full">
              <motion.img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prevImage}
                  className="p-1 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="p-1 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  →
                </button>
              </div>

              <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.h3
          className="font-hackdaddy text-sm sm:text-base md:text-lg lg:text-xl text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="font-wilson text-xs sm:text-sm md:text-base text-gray-300 mb-3 line-clamp-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-1.5 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[10px] sm:text-xs md:text-sm rounded-full 
                       bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                       text-white backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                     bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                     text-white backdrop-blur-sm overflow-hidden
                     hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30
                     transition-colors text-[10px] sm:text-xs md:text-sm"
            onMouseMove={handleButtonMouseMove}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            ref={hoverButtonRef}
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-wilson">View on GitHub</span>
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(101, 111, 226, 0.533), rgba(0, 0, 0, 0.15))`,
                opacity: hoverOpacity,
                transition: 'opacity 0.3s ease-out',
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </BentoTilt>
  );
}