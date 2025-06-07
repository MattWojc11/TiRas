'use client';

import { useState } from 'react';
import { projects as allProjects } from '@/app/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("wszystkie");
  
  const filteredProjects = activeCategory === "wszystkie" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center mb-12 gap-4">
        <button 
          onClick={() => setActiveCategory("wszystkie")}
          className={`px-6 py-2 rounded-full ${
            activeCategory === "wszystkie" 
              ? "bg-amber-800 text-white" 
              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          } transition-colors`}
        >
          Wszystkie
        </button>
        <button 
          onClick={() => setActiveCategory("pergole")}
          className={`px-6 py-2 rounded-full ${
            activeCategory === "pergole" 
              ? "bg-amber-800 text-white" 
              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          } transition-colors`}
        >
          Pergole
        </button>
        <button 
          onClick={() => setActiveCategory("tarasy")}
          className={`px-6 py-2 rounded-full ${
            activeCategory === "tarasy" 
              ? "bg-amber-800 text-white" 
              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          } transition-colors`}
        >
          Tarasy
        </button>
        <button 
          onClick={() => setActiveCategory("zadaszenia")}
          className={`px-6 py-2 rounded-full ${
            activeCategory === "zadaszenia" 
              ? "bg-amber-800 text-white" 
              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          } transition-colors`}
        >
          Zadaszenia
        </button>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
} 