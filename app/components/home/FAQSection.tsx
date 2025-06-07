'use client';

import { useState } from 'react';

// Dane FAQ
const faqData = [
  {
    question: "Jakie drewno jest najlepsze do budowy pergoli?",
    answer: "Do budowy pergoli najlepiej sprawdzają się gatunki drewna odporne na warunki atmosferyczne, takie jak modrzew europejski, sosna impregnowana ciśnieniowo, dąb czy drewno egzotyczne (np. bangkirai, massaranduba). Wybór zależy od budżetu, estetyki i warunków, w jakich będzie stała pergola. Podczas konsultacji pomożemy dobrać najlepsze rozwiązanie dla Twojego projektu."
  },
  {
    question: "Jak długo trwa realizacja tarasu drewnianego?",
    answer: "Czas realizacji tarasu drewnianego zależy od jego wielkości, stopnia skomplikowania projektu oraz dostępności materiałów. Standardowo proces trwa od 2 do 4 tygodni, wliczając w to projektowanie, przygotowanie materiałów i montaż. Dokładny harmonogram ustalamy indywidualnie z każdym klientem podczas wyceny."
  },
  {
    question: "Czy oferujecie gwarancję na swoje konstrukcje?",
    answer: "Tak, na wszystkie nasze realizacje udzielamy gwarancji. Standardowo jest to 2 lata na konstrukcję i montaż. Na wybrane materiały gwarancja może być dłuższa, zgodnie z warunkami producenta. Dodatkowo zapewniamy wsparcie pogwarancyjne i porady dotyczące konserwacji, aby Twoja konstrukcja służyła jak najdłużej."
  },
  {
    question: "Jak dbać o taras drewniany, aby służył przez lata?",
    answer: "Regularna konserwacja tarasu drewnianego jest kluczowa dla jego trwałości. Zalecamy czyszczenie tarasu 2-3 razy w roku, usuwanie liści i innych zanieczyszczeń na bieżąco, olejowanie lub impregnację raz w roku lub co dwa lata (w zależności od gatunku drewna i ekspozycji na warunki atmosferyczne). Po montażu przekazujemy szczegółowe instrukcje konserwacji dopasowane do użytych materiałów."
  },
  {
    question: "Czy potrzebuję pozwolenia na budowę pergoli lub tarasu?",
    answer: "W większości przypadków budowa pergoli czy tarasu nie wymaga pozwolenia na budowę, ale może wymagać zgłoszenia. Zależy to od wielkości konstrukcji, jej lokalizacji oraz lokalnych przepisów. Podczas konsultacji pomożemy ustalić, jakie formalności są wymagane w Twoim przypadku i doradzimy w kwestii dokumentacji."
  },
  {
    question: "Czy wykonujecie projekty według indywidualnych pomysłów klienta?",
    answer: "Tak, specjalizujemy się w realizacjach na miarę. Każdy projekt traktujemy indywidualnie, dopasowując go do potrzeb, oczekiwań i budżetu klienta. Możemy pracować na podstawie Twojego pomysłu, szkicu, inspiracji lub stworzyć projekt od podstaw po konsultacji i analizie przestrzeni."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#00CAFF] font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Często zadawane pytania</h2>
          <p className="text-black max-w-3xl mx-auto text-lg">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług, 
            materiałów i procesu realizacji projektów.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqData.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      activeIndex === index ? 'transform rotate-180 text-[#00CAFF]' : 'text-gray-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`mt-3 transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-black leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-black mb-6">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
          <a href="/kontakt" className="inline-flex items-center text-[#00CAFF] font-medium hover:text-[#33D6FF]">
            Skontaktuj się z nami
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 