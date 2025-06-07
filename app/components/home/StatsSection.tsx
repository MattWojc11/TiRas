'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Stat = {
  id: number;
  value: number;
  label: string;
  suffix: string;
  increment: number;
  icon?: string;
};

const stats: Stat[] = [
  {
    id: 1,
    value: 15,
    label: "Lat doświadczenia",
    suffix: "+",
    increment: 1,
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  },
  {
    id: 2,
    value: 500,
    label: "Zrealizowanych projektów",
    suffix: "+",
    increment: 10,
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    id: 3,
    value: 98,
    label: "Zadowolonych klientów",
    suffix: "%",
    increment: 1,
    icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
  },
  {
    id: 4,
    value: 5,
    label: "Lat gwarancji",
    suffix: "",
    increment: 1,
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
];

export default function StatsSection() {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Efekt dla animacji liczników
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let currentValue = 0;
      const targetValue = stat.value;
      const increment = stat.increment;
      const duration = 2000; // ms
      const steps = Math.ceil(targetValue / increment);
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });
      }, stepTime);
    });
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-12 text-white relative">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/testimonial-4.jpg" 
          alt="Background" 
          fill 
          className="object-cover"
          style={{ filter: 'brightness(70%)' }}
          priority
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#1A202C]/40 to-[#1A202C]/60"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00CAFF] to-[#45f3ff]">
            Liczby, które mówią same za siebie
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Od 2008 roku realizujemy projekty dla klientów indywidualnych i firm,
            dbając o najwyższą jakość i zadowolenie klientów.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1A202C]/70 to-[#2D3748]/70 backdrop-blur-lg rounded-xl p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/30 group"
            >
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="w-11 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00CAFF]/20 flex items-center justify-center text-[#00CAFF] group-hover:bg-[#00CAFF]/30 transition-all duration-300">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={stat.icon} 
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00CAFF] to-[#45f3ff] group-hover:scale-105 transition-transform duration-300">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-medium mb-1 sm:mb-2 text-white">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-gray-300 hidden sm:block">
                {index === 0 && "Ponad 15 lat doświadczenia w projektowaniu i wykonawstwie konstrukcji drewnianych."}
                {index === 1 && "Ponad 500 zrealizowanych projektów pergoli, tarasów i zadaszeń."}
                {index === 2 && "98% naszych klientów poleca nasze usługi znajomym i rodzinie."}
                {index === 3 && "Do 5 lat gwarancji na nasze konstrukcje i materiały wysokiej jakości."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 