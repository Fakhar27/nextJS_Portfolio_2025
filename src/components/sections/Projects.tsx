'use client'

import React from 'react';
import { projects } from "@/lib/data/projectsData";
import { ProjectBentoBox } from '../re-usable/BentoBoxProjects';

export default function Projects() {
  return (
    <section className="pt-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Title with layered glow */}
        <div className="relative mb-12 text-center">
          <h2 className="relative inline-block font-hackdaddy text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Projects
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px] opacity-70 animate-pulse-slow bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectBentoBox key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}