import Image from "next/image";
import Link from 'next/link';
import TestimonialsSection from "./components/home/TestimonialsSection";
import FAQSection from "./components/home/FAQSection";
import StatsSection from "./components/home/StatsSection";
import CTASection from "./components/home/CTASection";
import GallerySection from "./components/home/GallerySection";
import ProjectsGallery from "./components/home/ProjectsGallery";
import HeroCarousel from "./components/home/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero section z karuzelą zdjęć */}
      <HeroCarousel />

      {/* O nas - krótkie wprowadzenie */}
      <section className="py-8 sm:py-16 pb-0 sm:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <div className="mb-6">
                <span className="text-[#00CAFF] font-semibold uppercase tracking-wider">O nas</span>
                <h2 className="text-4xl font-bold mt-2 mb-6 relative">
                  <span className="text-gray-900">TiRas - Tworzymy z pasją</span>
                  <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#00CAFF]"></span>
              </h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Od 2008 roku projektujemy i wykonujemy wysokiej jakości konstrukcje drewniane dla klientów indywidualnych i firm. 
                Nasze pergole, tarasy i zadaszenia łączą w sobie estetykę, trwałość i funkcjonalność.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Każdy projekt traktujemy indywidualnie, dopasowując rozwiązania do potrzeb i oczekiwań klienta. 
                Precyzja wykonania, dbałość o szczegóły i terminowość to wartości, które wyróżniają firmę TiRas na rynku.
              </p>
              <div className="-mb-65 sm:mb-8"> {/* TUTAJ */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nasza firma to zespół wykwalifikowanych specjalistów z wieloletnim doświadczeniem w branży. Łączymy tradycyjne techniki ciesielskie z nowoczesnymi rozwiązaniami, aby tworzyć konstrukcje, które są nie tylko piękne, ale również trwałe i funkcjonalne.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Używamy wyłącznie wyselekcjonowanego drewna z certyfikowanych źródeł, dbając o środowisko naturalne. Nasze realizacje można zobaczyć w wielu miejscach w Polsce - od prywatnych posesji po przestrzenie publiczne, restauracje i hotele.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dzięki stałemu rozwojowi i poszerzaniu kompetencji, oferujemy kompleksowe usługi: od projektu, przez produkcję, po montaż i serwis. Zaufaj naszemu doświadczeniu i stwórz z nami przestrzeń, która będzie Cię cieszyć przez lata.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-64 shadow-lg transform transition-transform hover:scale-105">
                  <div className="h-full w-full bg-[url('/images/about-1.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="rounded-lg overflow-hidden h-64 shadow-lg transform transition-transform hover:scale-105 mt-8">
                  <div className="h-full w-full bg-[url('/images/about-2.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <div className="mt-0 pt-0">
        <StatsSection />
      </div>

      {/* Services - ulepszona sekcja usług */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#00CAFF] font-semibold uppercase tracking-wider">Nasze usługi</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-900">Nasze specjalizacje</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Oferujemy kompleksowe usługi w zakresie projektowania i wykonawstwa konstrukcji drewnianych. 
              Poznaj nasze główne obszary specjalizacji.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pergola.jpg')] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Pergole</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  Eleganckie i funkcjonalne pergole na miarę Twoich oczekiwań. 
                  Wykonane z najwyższej jakości drewna, które łączy trwałość z estetyką. 
                  Idealne do stworzenia przytulnej przestrzeni w ogrodzie.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Pergole klasyczne i nowoczesne
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Systemy zadaszeń przesuwnych
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Oświetlenie i automatyzacja
                  </li>
                </ul>
                <Link href="/realizacje?kategoria=pergole" className="text-[#00CAFF] font-semibold hover:text-[#0099CC] transition-colors flex items-center group">
                  Zobacz realizacje
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/taras.jpg')] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Tarasy</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  Piękne i trwałe tarasy drewniane. Odporne na warunki atmosferyczne, 
                  idealne do relaksu i spotkań z rodziną oraz przyjaciółmi. 
                  Różnorodność materiałów i wzorów.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tarasy drewniane i kompozytowe
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Montaż na legarach lub wspornikach
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Balustrady i schody
                  </li>
                </ul>
                <Link href="/realizacje?kategoria=tarasy" className="text-[#00CAFF] font-semibold hover:text-[#0099CC] transition-colors flex items-center group">
                  Zobacz realizacje
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/zadaszenie.jpg')] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Zadaszenia</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">
                  Funkcjonalne zadaszenia drewniane, które chronią przed słońcem i deszczem.
                  Idealne rozwiązanie do ogrodu, na taras czy przed wejście do domu. 
                  Trwałe i estetyczne.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Wiaty i altany
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Zadaszenia wejść i tarasów
          </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-[#00CAFF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Carporty i zabudowy miejsc postojowych
          </li>
                </ul>
                <Link href="/realizacje?kategoria=zadaszenia" className="text-[#00CAFF] font-semibold hover:text-[#0099CC] transition-colors flex items-center group">
                  Zobacz realizacje
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projekty - Nowa sekcja z projektami z folderu public/images/projects */}
      <ProjectsGallery />

      {/* Process - nowa sekcja pokazująca proces realizacji */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#00CAFF] font-semibold uppercase tracking-wider">Nasz proces</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Jak pracujemy</h2>
            <p className="text-black max-w-3xl mx-auto text-lg">
              Poznaj proces realizacji projektu w TiRas. Każdy etap jest starannie zaplanowany, 
              aby zapewnić najwyższą jakość i zadowolenie klienta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-[#E6F9FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#00CAFF] text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Konsultacja</h3>
              <p className="text-black">
                Spotkanie, omówienie potrzeb i oczekiwań, wstępne pomiary i analiza przestrzeni.
              </p>
              
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-full h-0.5 bg-[#E6F9FF]"></div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-[#E6F9FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#00CAFF] text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Projekt</h3>
              <p className="text-black">
                Przygotowanie koncepcji, wizualizacji i szczegółowego kosztorysu dopasowanego do budżetu.
              </p>
              
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-full h-0.5 bg-[#E6F9FF]"></div>
            </div>
            
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-[#E6F9FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#00CAFF] text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Realizacja</h3>
              <p className="text-black">
                Przygotowanie materiałów, prefabrykacja elementów w warsztacie, montaż na miejscu.
              </p>
              
              {/* Connector line - visible only on desktop */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-full h-0.5 bg-[#E6F9FF]"></div>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#E6F9FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#00CAFF] text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Odbiór</h3>
              <p className="text-black">
                Kontrola jakości, przekazanie gwarancji i instrukcji konserwacji, zadowolenie klienta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <TestimonialsSection />

      {/* FAQ section */}
      <FAQSection />

      {/* CTA section */}
      <CTASection />
    </>
  );
}
