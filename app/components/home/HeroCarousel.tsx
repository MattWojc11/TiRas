'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Tablica ze ścieżkami do zdjęć, które będą rotowane w karuzeli
const heroImages = [
  '/images/projects/pergola1-1.jpg',
  '/images/projects/pergola2-1.jpg',
  '/images/projects/pergola3-1.jpg',
  '/images/projects/pergola4-1.jpg'
];

export default function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Automatyczna zmiana zdjęcia co 6 sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    
    // Cleanup funkcji useEffect
    return () => clearInterval(interval);
  }, []);
  
  // Funkcja do ręcznej zmiany zdjęcia
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  // Funkcja do przejścia do następnego zdjęcia
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };
  
  // Funkcja do przejścia do poprzedniego zdjęcia
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Gradient overlay dla lepszej czytelności tekstu */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
      
      {/* Karuzela zdjęć z subtelną animacją */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{ 
              opacity: { duration: 1.2, ease: "easeInOut" } 
            }}
          />
        ))}
      </div>
      
      {/* Strzałki nawigacyjne - ukryte na urządzeniach mobilnych */}
      <button 
        onClick={prevImage} 
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all"
        aria-label="Poprzednie zdjęcie"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextImage} 
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all"
        aria-label="Następne zdjęcie"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Kontrolki karuzeli - przesunięte w dół */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#00CAFF] w-6 sm:w-8' 
                : 'bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Przejdź do zdjęcia ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Zawartość tekstowa na tle karuzeli */}
      <div className="container mx-auto px-4 h-full flex items-center">
        <motion.div 
          className="max-w-2xl text-white relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative mb-4 sm:mb-6">
            <span className="inline-block px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider rounded-full bg-[#00CAFF]/20 text-[#00CAFF] uppercase mb-2 sm:mb-4">
              Pergole • Zadaszenia • Tarasy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight text-white">
              Twoja <span className="relative inline-block text-white">
                <span className="relative z-10 font-bold text-white">wymarzona</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-[#00CAFF]/50 -z-0"></span>
              </span> przestrzeń <br/>
              <span className="text-[#00CAFF]">na świeżym powietrzu</span>
            </h1>
          </div>
          
          <motion.p 
            className="text-base sm:text-xl md:text-2xl font-light mb-3 sm:mb-4 drop-shadow text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Zrealizujemy to z pasją, precyzją i gwarancją jakości
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 text-white drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Kompleksowe realizacje – od projektu po montaż. <br className="hidden md:block" />
            Dołącz do setek zadowolonych klientów w całej Polsce!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Link href="/realizacje" className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl rounded-full hover:translate-y-[-2px] transition-transform">
              Zainspiruj się realizacjami
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 