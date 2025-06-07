'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Definicje typów
type Project = {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
};

// Dane projektów na podstawie dostępnych zdjęć
const projects: Project[] = [
  {
    id: 'pergola1',
    title: 'Pergola ogrodowa',
    category: 'pergole',
    images: ['/images/projects/pergola1-1.jpg', '/images/projects/pergola1-2.jpg', '/images/projects/pergola1-3.jpg'],
    description: 'Nowoczesna pergola ogrodowa z drewna sosnowego, idealna do odpoczynku w cieniu.'
  },
  {
    id: 'pergola2',
    title: 'Pergola tarasowa',
    category: 'pergole',
    images: ['/images/projects/pergola2-1.jpg'],
    description: 'Elegancka pergola tarasowa z drewna egzotycznego, odporna na warunki atmosferyczne.'
  },
  {
    id: 'pergola3',
    title: 'Pergola z zadaszeniem',
    category: 'pergole',
    images: ['/images/projects/pergola3-1.jpg'],
    description: 'Pergola z przesuwnym zadaszeniem, idealna na letnie dni.'
  },
  {
    id: 'pergola4',
    title: 'Pergola z oświetleniem',
    category: 'pergole',
    images: ['/images/projects/pergola4-1.jpg', '/images/projects/pergola4-2.jpg', '/images/projects/pergola4-3.jpg'],
    description: 'Nowoczesna pergola z wbudowanym oświetleniem LED, tworząca wyjątkowy klimat wieczorami.'
  },
  {
    id: 'taras1',
    title: 'Taras drewniany',
    category: 'tarasy',
    images: ['/images/projects/taras1-1.jpg', '/images/projects/taras1-2.jpg', '/images/projects/taras1-3.jpg'],
    description: 'Przestronny taras wykonany z desek kompozytowych, odporny na warunki atmosferyczne.'
  },
  {
    id: 'taras2',
    title: 'Taras z balustradą',
    category: 'tarasy',
    images: ['/images/projects/taras2-1.jpg'],
    description: 'Elegancki taras z drewnianą balustradą, idealny do relaksu na świeżym powietrzu.'
  },
  {
    id: 'donice1',
    title: 'Donice drewniane',
    category: 'inne',
    images: ['/images/projects/donice1-1.jpg'],
    description: 'Stylowe donice drewniane, idealne uzupełnienie tarasu lub ogrodu.'
  }
];

// Wybrane 4 projekty do strony głównej
const featuredProjects = [
  projects.find(p => p.id === 'pergola1')!,
  projects.find(p => p.id === 'pergola4')!,
  projects.find(p => p.id === 'taras1')!,
  projects.find(p => p.id === 'donice1')!
];

export default function ProjectsGallery() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Otwieranie szczegółów projektu
  const openProject = (project: Project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  // Zamykanie szczegółów projektu
  const closeProject = () => {
    setActiveProject(null);
  };

  // Nawigacja między zdjęciami projektu
  const nextImage = () => {
    if (activeProject) {
      setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setActiveImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Dekoracyjne elementy tła */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#00CAFF]/5 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#33D6FF]/5 blur-3xl"></div>
        <div className="absolute bottom-[40%] left-[40%] w-40 h-40 rounded-full bg-[#0099CC]/5 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-[#00CAFF]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#0099CC] font-semibold uppercase tracking-wider">Nasze realizacje</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Wyróżnione projekty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Odkryj nasze najlepsze realizacje, które łączą funkcjonalność z nowoczesnym designem.
          </p>
        </div>
        
        {/* Asymetryczny układ projektów */}
        <div className="relative h-[800px] md:h-[700px] max-w-6xl mx-auto">
          {/* Projekt 1 - lewy górny */}
          <div 
            className="absolute top-0 left-0 w-[48%] h-[45%] z-10 transition-all duration-500 cursor-pointer"
            style={{ 
              transform: hoveredIndex === 0 ? 'scale(1.03)' : 'scale(1)',
              zIndex: hoveredIndex === 0 ? 30 : 10
            }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openProject(featuredProjects[0])}
          >
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image 
                src={featuredProjects[0].images[0]} 
                alt={featuredProjects[0].title} 
                fill 
                style={{ objectFit: 'cover' }} 
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="inline-block mb-2 px-3 py-1 bg-[#00CAFF] text-white text-xs uppercase tracking-wider rounded-full">
                    {featuredProjects[0].category === 'pergole' ? 'Pergola' : 
                     featuredProjects[0].category === 'tarasy' ? 'Taras' : 'Inne'}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{featuredProjects[0].title}</h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{featuredProjects[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projekt 2 - prawy górny */}
          <div 
            className="absolute top-0 right-0 w-[48%] h-[55%] z-20 transition-all duration-500 cursor-pointer"
            style={{ 
              transform: hoveredIndex === 1 ? 'scale(1.03)' : 'scale(1)',
              zIndex: hoveredIndex === 1 ? 30 : 20
            }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openProject(featuredProjects[1])}
          >
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image 
                src={featuredProjects[1].images[0]} 
                alt={featuredProjects[1].title} 
                fill 
                style={{ objectFit: 'cover' }} 
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="inline-block mb-2 px-3 py-1 bg-[#00CAFF] text-white text-xs uppercase tracking-wider rounded-full">
                    {featuredProjects[1].category === 'pergole' ? 'Pergola' : 
                     featuredProjects[1].category === 'tarasy' ? 'Taras' : 'Inne'}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{featuredProjects[1].title}</h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{featuredProjects[1].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projekt 3 - lewy dolny */}
          <div 
            className="absolute bottom-0 left-0 w-[58%] h-[50%] z-20 transition-all duration-500 cursor-pointer"
            style={{ 
              transform: hoveredIndex === 2 ? 'scale(1.03)' : 'scale(1)',
              zIndex: hoveredIndex === 2 ? 30 : 20
            }}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openProject(featuredProjects[2])}
          >
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image 
                src={featuredProjects[2].images[0]} 
                alt={featuredProjects[2].title} 
                fill 
                style={{ objectFit: 'cover' }} 
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="inline-block mb-2 px-3 py-1 bg-[#00CAFF] text-white text-xs uppercase tracking-wider rounded-full">
                    {featuredProjects[2].category === 'pergole' ? 'Pergola' : 
                     featuredProjects[2].category === 'tarasy' ? 'Taras' : 'Inne'}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{featuredProjects[2].title}</h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{featuredProjects[2].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projekt 4 - prawy dolny */}
          <div 
            className="absolute bottom-0 right-0 w-[38%] h-[40%] z-10 transition-all duration-500 cursor-pointer"
            style={{ 
              transform: hoveredIndex === 3 ? 'scale(1.03)' : 'scale(1)',
              zIndex: hoveredIndex === 3 ? 30 : 10
            }}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openProject(featuredProjects[3])}
          >
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image 
                src={featuredProjects[3].images[0]} 
                alt={featuredProjects[3].title} 
                fill 
                style={{ objectFit: 'cover' }} 
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="inline-block mb-2 px-3 py-1 bg-[#00CAFF] text-white text-xs uppercase tracking-wider rounded-full">
                    {featuredProjects[3].category === 'pergole' ? 'Pergola' : 
                     featuredProjects[3].category === 'tarasy' ? 'Taras' : 'Inne'}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{featuredProjects[3].title}</h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{featuredProjects[3].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Przycisk Zobacz wszystkie projekty */}
        <div className="text-center mt-12">
          <Link href="/realizacje" className="inline-block bg-[#00CAFF] hover:bg-[#0099CC] text-white font-medium px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl shadow-[#00CAFF]/20 transform hover:-translate-y-1 duration-300">
            Zobacz wszystkie projekty
          </Link>
        </div>
      </div>

      {/* Modal ze szczegółami projektu */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <div className="absolute top-4 right-4 z-50">
                <button 
                  onClick={closeProject}
                  className="bg-white text-[#00CAFF] hover:bg-gray-100 hover:text-[#0099CC] p-2 rounded-full transition-colors shadow-md"
                  aria-label="Zamknij"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="md:flex">
                <div className="md:w-3/5">
                  <div className="relative h-[60vh]">
                    <Image 
                      src={activeProject.images[activeImageIndex]} 
                      alt={activeProject.title} 
                      fill 
                      style={{ objectFit: 'cover' }}
                      className="rounded-tl-xl md:rounded-bl-xl"
                    />
                    
                    {activeProject.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full p-3 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full p-3 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="md:w-2/5 p-8">
                  <span className="inline-block mb-3 px-3 py-1 bg-[#00CAFF] text-white text-xs uppercase tracking-wider rounded-full">
                    {activeProject.category === 'pergole' ? 'Pergola' : 
                     activeProject.category === 'tarasy' ? 'Taras' : 
                     activeProject.category === 'zadaszenia' ? 'Zadaszenie' : 'Inne'}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{activeProject.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg">{activeProject.description}</p>
                  
                  {/* Miniatury zdjęć */}
                  {activeProject.images.length > 1 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-700">Galeria zdjęć</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.images.map((image, index) => (
                          <div 
                            key={index}
                            className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden transition-all duration-200 ${
                              activeImageIndex === index 
                                ? 'ring-2 ring-[#00CAFF] scale-105 shadow-lg' 
                                : 'opacity-70 hover:opacity-100'
                            }`}
                            onClick={() => setActiveImageIndex(index)}
                          >
                            <div className="relative h-full w-full">
                              <Image 
                                src={image} 
                                alt={`${activeProject.title} - zdjęcie ${index + 1}`} 
                                fill 
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 