'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Nowoczesna pergola z zadaszeniem",
    category: "pergole",
    image: "/images/gallery-1.jpg",
    link: "/realizacje/pergola-nowoczesna"
  },
  {
    id: 2,
    title: "Taras kompozytowy z balustradą",
    category: "tarasy",
    image: "/images/gallery-2.jpg",
    link: "/realizacje/taras-kompozytowy"
  },
  {
    id: 3,
    title: "Zadaszenie tarasu restauracji",
    category: "zadaszenia",
    image: "/images/gallery-3.jpg",
    link: "/realizacje/zadaszenie-restauracji"
  },
  {
    id: 4,
    title: "Pergola w stylu rustykalnym",
    category: "pergole",
    image: "/images/gallery-4.jpg",
    link: "/realizacje/pergola-rustykalna"
  },
  {
    id: 5,
    title: "Taras drewniany ze schodami",
    category: "tarasy",
    image: "/images/gallery-5.jpg",
    link: "/realizacje/taras-ze-schodami"
  },
  {
    id: 6,
    title: "Wiata garażowa drewniana",
    category: "zadaszenia",
    image: "/images/gallery-6.jpg",
    link: "/realizacje/wiata-garazowa"
  }
];

export default function GallerySection() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredItems = filter 
    ? galleryItems.filter(item => item.category === filter)
    : galleryItems;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nasze realizacje</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Zobacz przykłady naszych prac i zainspiruj się do stworzenia własnej przestrzeni.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === null 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wszystkie
            </button>
            <button
              onClick={() => setFilter('pergole')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'pergole' 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pergole
            </button>
            <button
              onClick={() => setFilter('tarasy')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'tarasy' 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tarasy
            </button>
            <button
              onClick={() => setFilter('zadaszenia')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'zadaszenia' 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Zadaszenia
            </button>
          </div>
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group">
              <Link href={item.link} className="block overflow-hidden rounded-lg shadow-lg relative h-80">
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <span className="inline-block px-3 py-1 bg-amber-600 text-white text-xs uppercase rounded-full">
                    {item.category}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-12">
          <Link href="/realizacje" className="btn btn-primary">
            Zobacz wszystkie realizacje
          </Link>
        </div>
      </div>
    </section>
  );
} 