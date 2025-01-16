import React, { useState, useEffect } from 'react';
import { Project } from "@/lib/data/projectsData";
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectBentoBoxProps {
  project: Project;
}

export function ProjectBentoBox({ project }: ProjectBentoBoxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    tap: {
      scale: 0.8,
      rotate: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden rounded-lg">
          <div className="relative aspect-[1255/640] w-full">
            <motion.div 
              className="relative w-full h-full"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              {/* Current Image */}
              <motion.img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="absolute top-0 left-0 w-full h-full object-contain"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  →
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Details */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div className="space-y-4">
            <motion.h3 
              className="font-hackdaddy text-lg md:text-2xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h3>

            <motion.p 
              className="font-wilson sm:text-sm text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.description}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full 
                           bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                           text-white backdrop-blur-sm hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 
                           transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* GitHub Link */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                       text-white backdrop-blur-sm hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30
                       transition-colors"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Github className="w-5 h-5" />
              <span className="font-wilson">View on GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
