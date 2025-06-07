'use client';

import { useState } from 'react';
import Image from 'next/image';

// Dane opinii klientów
const testimonials = [
  {
    id: 1,
    content: "Jesteśmy bardzo zadowoleni z pergoli wykonanej przez firmę TiRas. Profesjonalne podejście, terminowość i wysoka jakość wykonania. Polecamy!",
    author: "Anna i Piotr Kowalscy",
    location: "Warszawa",
    rating: 5,
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    content: "Taras wykonany przez TiRas to prawdziwe dzieło sztuki. Drewno najwyższej jakości, precyzyjne wykonanie i świetny kontakt podczas całego procesu realizacji.",
    author: "Marek Nowak",
    location: "Kraków",
    rating: 5,
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    content: "Zadaszenie tarasu wykonane przez TiRas spełniło wszystkie nasze oczekiwania. Solidna konstrukcja, estetyczne wykończenie i konkurencyjna cena.",
    author: "Katarzyna Wiśniewska",
    location: "Gdańsk",
    rating: 5,
    image: "/images/testimonial-3.jpg"
  },
  {
    id: 4,
    content: "Pergola z drewna egzotycznego, którą wykonała dla nas firma TiRas, jest ozdobą naszego ogrodu. Pełen profesjonalizm i dbałość o detale.",
    author: "Tomasz i Agnieszka Lewandowscy",
    location: "Poznań",
    rating: 5,
    image: "/images/testimonial-4.jpg"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#00CAFF] font-semibold uppercase tracking-wider">Opinie klientów</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-900">Co mówią o nas klienci</h2>
          <p className="text-black max-w-3xl mx-auto text-lg">
            Poznaj opinie klientów, którzy zdecydowali się na współpracę z nami. 
            Ich zadowolenie jest dla nas najlepszą rekomendacją.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-auto md:h-[500px]">
              {/* Testimonial content */}
              <div className="flex flex-col md:flex-row md:absolute md:inset-0">
                <div className="w-full md:w-1/2 relative h-72 md:h-auto">
                  <Image 
                    src={testimonials[activeIndex].image || "/images/testimonial-placeholder.jpg"} 
                    alt={testimonials[activeIndex].author} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    {/* Stars rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#00CAFF] mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Testimonial text */}
                    <blockquote className="text-xl italic font-medium text-gray-900 mb-6">
                      &ldquo;{testimonials[activeIndex].content}&rdquo;
                    </blockquote>
                    
                    {/* Author info */}
                    <div className="flex items-center">
                      <div>
                        <p className="font-bold text-gray-900">{testimonials[activeIndex].author}</p>
                        <p className="text-gray-600">{testimonials[activeIndex].location}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation arrows */}
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-gray-500 text-sm">{activeIndex + 1} / {testimonials.length}</span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Poprzednia opinia"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-[#00CAFF] text-white hover:bg-[#0099CC] transition-colors"
                        aria-label="Następna opinia"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#00CAFF]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 