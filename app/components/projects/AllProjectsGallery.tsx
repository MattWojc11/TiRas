'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Definicje typów
type Project = {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  details: {
    client?: string;
    location?: string;
    date?: string;
    materials?: string[];
    dimensions?: string;
    features?: string[];
  };
  testimonial?: {
    content: string;
    author: string;
  };
};

// Mapowanie kategorii z URL do kategorii w systemie
const categoryMapping: Record<string, string> = {
  'pergole': 'pergole',
  'tarasy': 'tarasy',
  'zadaszenia': 'inne',
  'inne': 'inne'
};

// Dane projektów na podstawie dostępnych zdjęć
const projects: Project[] = [
  {
    id: 'pergola1',
    title: 'Pergola ogrodowa',
    category: 'pergole',
    images: ['/images/projects/pergola1-1.jpg', '/images/projects/pergola1-2.jpg', '/images/projects/pergola1-3.jpg'],
    description: 'Nowoczesna pergola ogrodowa z drewna sosnowego, idealna do odpoczynku w cieniu.',
    details: {
      client: 'Prywatna posesja',
      location: 'Warszawa',
      date: 'Czerwiec 2023',
      materials: ['Drewno sosnowe', 'Impregnaty ekologiczne', 'Stal nierdzewna'],
      dimensions: '4m x 3m x 2,5m',
      features: [
        'Odporna na warunki atmosferyczne',
        'Możliwość montażu zadaszenia',
        'Konstrukcja samonośna'
      ]
    },
    testimonial: {
      content: 'Jestem bardzo zadowolony z pergoli wykonanej przez firmę TiRas. Profesjonalne podejście, terminowość i wysoka jakość wykonania to główne atuty tej firmy.',
      author: 'Jan Kowalski'
    }
  },
  {
    id: 'pergola2',
    title: 'Pergola tarasowa',
    category: 'pergole',
    images: ['/images/projects/pergola2-1.jpg'],
    description: 'Elegancka pergola tarasowa z drewna egzotycznego, odporna na warunki atmosferyczne.',
    details: {
      client: 'Restauracja "Pod Lipami"',
      location: 'Kraków',
      date: 'Maj 2023',
      materials: ['Drewno egzotyczne', 'Stal malowana proszkowo', 'Tkanina wodoodporna'],
      dimensions: '6m x 4m x 3m',
      features: [
        'Wysoka odporność na warunki atmosferyczne',
        'Częściowo rozsuwane zadaszenie',
        'Zintegrowane oświetlenie LED'
      ]
    }
  },
  {
    id: 'pergola3',
    title: 'Pergola z zadaszeniem',
    category: 'pergole',
    images: ['/images/projects/pergola3-1.jpg'],
    description: 'Pergola z przesuwnym zadaszeniem, idealna na letnie dni.',
    details: {
      client: 'Centrum ogrodnicze',
      location: 'Poznań',
      date: 'Lipiec 2023',
      materials: ['Drewno modrzewiowe', 'Aluminium', 'Tkanina wodoodporna'],
      dimensions: '5m x 4m x 2,8m',
      features: [
        'Przesuwne zadaszenie',
        'Konstrukcja zabezpieczona przed promieniowaniem UV',
        'System odprowadzania wody'
      ]
    }
  },
  {
    id: 'pergola4',
    title: 'Pergola z oświetleniem',
    category: 'pergole',
    images: ['/images/projects/pergola4-1.jpg', '/images/projects/pergola4-2.jpg', '/images/projects/pergola4-3.jpg'],
    description: 'Nowoczesna pergola z wbudowanym oświetleniem LED, tworząca wyjątkowy klimat wieczorami.',
    details: {
      client: 'Hotel "Panorama"',
      location: 'Zakopane',
      date: 'Sierpień 2023',
      materials: ['Drewno sosnowe', 'Aluminium', 'Oświetlenie LED'],
      dimensions: '7m x 5m x 3m',
      features: [
        'System oświetlenia LED sterowany pilotem',
        'Automatyczne rolety boczne',
        'Wodoodporne wykończenie'
      ]
    },
    testimonial: {
      content: 'Pergola idealnie wpisała się w styl naszego hotelu. Goście często spędzają przy niej wieczory, podziwiając widoki i ciesząc się atmosferą tworzoną przez subtelne oświetlenie.',
      author: 'Maria Nowak, Manager Hotelu Panorama'
    }
  },
  {
    id: 'taras1',
    title: 'Taras drewniany',
    category: 'tarasy',
    images: ['/images/projects/taras1-1.jpg', '/images/projects/taras1-2.jpg', '/images/projects/taras1-3.jpg'],
    description: 'Przestronny taras wykonany z desek kompozytowych, odporny na warunki atmosferyczne.',
    details: {
      client: 'Dom jednorodzinny',
      location: 'Gdańsk',
      date: 'Wrzesień 2023',
      materials: ['Deski kompozytowe', 'Aluminium', 'Stal nierdzewna'],
      dimensions: '8m x 4m',
      features: [
        'Odporny na gnicie i insekty',
        'Nie wymaga impregnacji',
        'Antypoślizgowa powierzchnia'
      ]
    },
    testimonial: {
      content: 'TiRas wykonał dla nas idealny taras, który jest nie tylko piękny, ale również praktyczny i trwały. Profesjonalna obsługa i doradztwo przy wyborze materiałów zasługują na najwyższe uznanie.',
      author: 'Anna i Paweł Kowalscy'
    }
  },
  {
    id: 'taras2',
    title: 'Taras z balustradą',
    category: 'tarasy',
    images: ['/images/projects/taras2-1.jpg'],
    description: 'Elegancki taras z drewnianą balustradą, idealny do relaksu na świeżym powietrzu.',
    details: {
      client: 'Apartamentowiec "Nadmorski"',
      location: 'Sopot',
      date: 'Październik 2023',
      materials: ['Drewno tekowe', 'Szkło hartowane', 'Stal nierdzewna'],
      dimensions: '5m x 3m',
      features: [
        'Szklana balustrada z drewnianym wykończeniem',
        'System oświetlenia punktowego',
        'Wysoka odporność na słoną wodę'
      ]
    }
  },
  {
    id: 'donice1',
    title: 'Donice drewniane',
    category: 'inne',
    images: ['/images/projects/donice1-1.jpg'],
    description: 'Stylowe donice drewniane, idealne uzupełnienie tarasu lub ogrodu.',
    details: {
      client: 'Kawiarnia "Zielony Zakątek"',
      location: 'Wrocław',
      date: 'Kwiecień 2023',
      materials: ['Drewno modrzewiowe', 'Stal ocynkowana', 'Geowłóknina'],
      dimensions: 'Różne rozmiary (od 40x40x40cm do 100x100x60cm)',
      features: [
        'Trwała konstrukcja skrzyniowa',
        'System odpływowy',
        'Odporne na zmienne warunki atmosferyczne'
      ]
    }
  }
];

export default function AllProjectsGallery() {
  const searchParams = useSearchParams();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [filter, setFilter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'opis' | 'detale' | 'opinie'>('opis');

  // Ustawienie filtra na podstawie parametru URL przy pierwszym renderowaniu
  useEffect(() => {
    const kategoria = searchParams.get('kategoria');
    if (kategoria && categoryMapping[kategoria]) {
      setFilter(categoryMapping[kategoria]);
    }
  }, [searchParams]);

  // Filtrowanie projektów
  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter) 
    : projects;

  // Otwieranie szczegółów projektu
  const openProject = (project: Project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
    setActiveTab('opis');
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
    <section className="py-16 relative overflow-hidden bg-gray-50">
      {/* Dekoracyjne elementy tła */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#00CAFF]/5 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#33D6FF]/5 blur-3xl"></div>
        <div className="absolute bottom-[40%] left-[40%] w-40 h-40 rounded-full bg-[#0099CC]/5 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-[#00CAFF]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#0099CC] font-semibold uppercase tracking-wider">Nasze realizacje</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Wszystkie projekty</h2>
          <p className="text-gray-600">
            Przeglądaj nasze realizacje i wybierz kategorię, która Cię interesuje. 
            Kliknij na dowolny projekt, aby zobaczyć więcej szczegółów i zdjęć.
          </p>
        </div>
        
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === null ? 'bg-[#00CAFF] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter(null)}
          >
            Wszystkie
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'pergole' ? 'bg-[#00CAFF] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('pergole')}
          >
            Pergole
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'tarasy' ? 'bg-[#00CAFF] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('tarasy')}
          >
            Tarasy
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'inne' ? 'bg-[#00CAFF] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('inne')}
          >
            Inne
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 group bg-white hover:-translate-y-1"
              onClick={() => openProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.images[0]} 
                  alt={project.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <span className="inline-block mb-2 px-3 py-1 bg-[#00CAFF] text-white text-xs uppercase tracking-wider rounded-full">
                  {project.category === 'pergole' ? 'Pergola' : 
                  project.category === 'tarasy' ? 'Taras' : 'Inne'}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal z detalami projektu */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-end p-4">
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
                  <motion.div 
                    className="relative h-[60vh]"
                    key={activeImageIndex}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
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
                    
                    {/* Numeracja zdjęć */}
                    {activeProject.images.length > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {activeImageIndex + 1} / {activeProject.images.length}
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Miniatury zdjęć */}
                  {activeProject.images.length > 1 && (
                    <div className="bg-gray-100 p-4 flex flex-wrap gap-2 justify-center">
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
                  )}
                </div>
                
                <div className="md:w-2/5 p-8">
                  <div className="flex items-center mb-4">
                    <span className="inline-block mr-3 px-3 py-1 bg-[#00CAFF] text-white text-xs uppercase tracking-wider rounded-full">
                      {activeProject.category === 'pergole' ? 'Pergola' : 
                      activeProject.category === 'tarasy' ? 'Taras' : 'Inne'}
                    </span>
                    {activeProject.details.date && (
                      <span className="text-gray-500 text-sm">{activeProject.details.date}</span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">{activeProject.title}</h2>
                  
                  {/* Zakładki */}
                  <div className="border-b border-gray-200 mb-6">
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => setActiveTab('opis')}
                        className={`py-2 relative ${activeTab === 'opis' ? 'text-[#00CAFF] font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        Opis
                        {activeTab === 'opis' && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00CAFF]"
                            layoutId="tabIndicator"
                          />
                        )}
                      </button>
                      <button 
                        onClick={() => setActiveTab('detale')}
                        className={`py-2 relative ${activeTab === 'detale' ? 'text-[#00CAFF] font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        Szczegóły
                        {activeTab === 'detale' && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00CAFF]"
                            layoutId="tabIndicator"
                          />
                        )}
                      </button>
                      {activeProject.testimonial && (
                        <button 
                          onClick={() => setActiveTab('opinie')}
                          className={`py-2 relative ${activeTab === 'opinie' ? 'text-[#00CAFF] font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                          Opinia klienta
                          {activeTab === 'opinie' && (
                            <motion.div 
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00CAFF]"
                              layoutId="tabIndicator"
                            />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Zawartość zakładek */}
                  <div className="mt-6 space-y-6">
                    {activeTab === 'opis' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-700 text-lg leading-relaxed">{activeProject.description}</p>
                        
                        {activeProject.details.client && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-700">
                              <span className="font-medium">Klient:</span> {activeProject.details.client}
                            </p>
                            {activeProject.details.location && (
                              <p className="text-gray-700">
                                <span className="font-medium">Lokalizacja:</span> {activeProject.details.location}
                              </p>
                            )}
                          </div>
                        )}
                      </motion.div>
                    )}
                    
                    {activeTab === 'detale' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {activeProject.details.dimensions && (
                          <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Wymiary</h3>
                            <p className="text-gray-700">{activeProject.details.dimensions}</p>
                          </div>
                        )}
                        
                        {activeProject.details.materials && activeProject.details.materials.length > 0 && (
                          <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Materiały</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                              {activeProject.details.materials.map((material, index) => (
                                <li key={index}>{material}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {activeProject.details.features && activeProject.details.features.length > 0 && (
                          <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Cechy i zalety</h3>
                            <ul className="space-y-2">
                              {activeProject.details.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className="h-5 w-5 text-[#00CAFF] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                    
                    {activeTab === 'opinie' && activeProject.testimonial && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-gray-50 p-6 rounded-xl relative">
                          <svg className="absolute top-3 left-3 h-8 w-8 text-[#00CAFF]/20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <div className="ml-6">
                            <p className="text-gray-700 italic mb-4 leading-relaxed">{activeProject.testimonial.content}</p>
                            <p className="text-gray-900 font-medium">— {activeProject.testimonial.author}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 