"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero section */}
      <section className="relative py-32 bg-[#2D3748] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about-1.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">O naszej <span className="text-[#00CAFF]">firmie</span></h1>
            <p className="text-xl max-w-2xl text-gray-200 leading-relaxed">
              Jesteśmy zespołem pasjonatów drewna, którzy od ponad 15 lat tworzą wyjątkowe konstrukcje drewniane, 
              łącząc tradycyjne rzemiosło z nowoczesnymi technikami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/team-1.jpg" 
                alt="Nasz zespół" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-8 relative text-gray-900">
                <span className="text-[#00CAFF]">Nasza historia</span>
                <div className="absolute -bottom-3 left-0 w-20 h-1 bg-[#00CAFF]"></div>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Firma KonstrukcjeDrewniane powstała w 2008 roku jako mały, rodzinny warsztat stolarski. 
                  Zaczynaliśmy od niewielkich projektów, takich jak altanki czy proste pergole, jednak z czasem 
                  nasza pasja i zaangażowanie pozwoliły nam rozwinąć działalność.
                </p>
                <p>
                  Z biegiem lat zdobywaliśmy doświadczenie i rozszerzaliśmy naszą ofertę. Dziś jesteśmy jednym 
                  z wiodących wykonawców konstrukcji drewnianych w regionie, specjalizującym się w pergolach, 
                  tarasach i zadaszeniach.
                </p>
                <p>
                  Naszym celem jest tworzenie trwałych i pięknych konstrukcji, które nie tylko spełniają oczekiwania 
                  klientów, ale również harmonijnie wpisują się w otaczającą przestrzeń. Każdy projekt traktujemy 
                  indywidualnie, dostosowując rozwiązania do potrzeb i wymagań klienta.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nasza droga</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Kluczowe momenty w rozwoju naszej firmy</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#E6F9FF]"></div>
            {[
              { year: "2008", title: "Początek działalności", description: "Założenie rodzinnego warsztatu stolarskiego specjalizującego się w małych konstrukcjach drewnianych." },
              { year: "2012", title: "Rozszerzenie oferty", description: "Wprowadzenie do oferty kompleksowych projektów tarasów i zadaszeń. Zatrudnienie pierwszych pracowników." },
              { year: "2015", title: "Pierwszy duży projekt", description: "Realizacja pierwszego dużego projektu - kompleksowego zagospodarowania przestrzeni zewnętrznej dla hotelu." },
              { year: "2018", title: "Nowa siedziba", description: "Przeprowadzka do nowej, większej siedziby z nowoczesnym warsztatem i showroomem." },
              { year: "2023", title: "Dzisiaj", description: "Zespół 15 specjalistów realizujących projekty w całej Polsce, z naciskiem na ekologiczne i innowacyjne rozwiązania." }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative z-10 mb-16 flex ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#00CAFF] max-w-md">
                  <div className="absolute top-6 -right-4 md:hidden w-8 h-8 bg-[#00CAFF] rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {event.year}
                  </div>
                  <div className={`absolute top-6 ${index % 2 === 0 ? 'md:-right-16' : 'md:-left-16'} hidden md:flex w-12 h-12 bg-[#00CAFF] rounded-full items-center justify-center text-white font-bold`}>
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nasze wartości</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Fundamenty, na których budujemy każdy projekt</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Jakość",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                description: "Priorytetem jest dla nas najwyższa jakość wykonania. Dbamy o każdy detal, używamy najlepszych materiałów i stale doskonalimy nasze techniki pracy."
              },
              {
                title: "Zrównoważony rozwój",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                description: "Stawiamy na ekologiczne rozwiązania i odpowiedzialnie pozyskiwane drewno. Dbamy o środowisko, minimalizując nasz wpływ na naturę."
              },
              {
                title: "Współpraca",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                description: "Budujemy trwałe relacje z klientami oparte na zaufaniu i szacunku. Słuchamy potrzeb i realizujemy projekty w ścisłej współpracy."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#E6F9FF] p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-[#00CAFF] rounded-2xl flex items-center justify-center mb-6 mx-auto text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">{value.title}</h3>
                <p className="text-gray-700 text-center text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Co mówią nasi klienci</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Opinie osób, które zaufały naszemu doświadczeniu</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Karolina Malinowska",
                role: "Właścicielka domu jednorodzinnego",
                image: "/images/testimonial-1.jpg",
                quote: "Zdecydowaliśmy się na budowę tarasu z pergolą i jesteśmy zachwyceni efektem. Profesjonalne podejście, terminowość i jakość wykonania na najwyższym poziomie."
              },
              {
                name: "Michał Adamski",
                role: "Właściciel restauracji",
                image: "/images/testimonial-2.jpg",
                quote: "Firma wykonała dla nas zadaszenie ogródka restauracyjnego. Projekt został dopasowany idealnie do naszych potrzeb, a realizacja przebiegła sprawnie i bez żadnych problemów."
              },
              {
                name: "Magdalena Kowalczyk",
                role: "Architekt krajobrazu",
                image: "/images/testimonial-3.jpg",
                quote: "Jako architekt krajobrazu często współpracuję z różnymi wykonawcami. Ta firma wyróżnia się profesjonalizmem, dbałością o detale i świetną komunikacją na każdym etapie realizacji."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#E6F9FF] p-8 rounded-2xl shadow-lg relative"
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-[#00CAFF] opacity-20 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v6c0 3.3-2.7 6-6 6H4v4h4c5.5 0 10-4.5 10-10V8h-8zm20 0v6c0 3.3-2.7 6-6 6h-4v4h4c5.5 0 10-4.5 10-10V8h-4z"/>
                  </svg>
                  <p className="text-gray-700 text-lg relative z-10">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill 
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Często zadawane pytania</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Odpowiedzi na najczęściej zadawane pytania</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Jak długo trwa realizacja projektu?",
                answer: "Czas realizacji projektu zależy od jego złożoności i wielkości. Małe projekty, takie jak altanki czy proste pergole, mogą być zrealizowane w ciągu 2-4 tygodni. Większe projekty, takie jak kompleksowe tarasy z zadaszeniem, mogą zająć od 4 do 8 tygodni. Zawsze ustalamy dokładny harmonogram przed rozpoczęciem prac."
              },
              {
                question: "Jakie drewno stosujecie w swoich konstrukcjach?",
                answer: "W naszych konstrukcjach wykorzystujemy różne rodzaje drewna, w zależności od potrzeb projektu i preferencji klienta. Najczęściej pracujemy z drewnem sosnowym impregnowanym ciśnieniowo, modrzewiem europejskim oraz drewnem egzotycznym (np. bangkirai, massaranduba). Wszystkie używane przez nas materiały posiadają niezbędne certyfikaty i pochodzą z odpowiedzialnych źródeł."
              },
              {
                question: "Czy oferujecie gwarancję na swoje usługi?",
                answer: "Tak, na wszystkie nasze konstrukcje udzielamy gwarancji. Standardowa gwarancja wynosi 2 lata i obejmuje wady wykonawcze. Na niektóre elementy, jak np. impregnowane drewno konstrukcyjne, gwarancja może być dłuższa, nawet do 10 lat. Szczegółowe warunki gwarancji są zawsze określone w umowie."
              },
              {
                question: "Czy zajmujecie się również projektowaniem?",
                answer: "Tak, oferujemy kompleksową usługę, która obejmuje zarówno projektowanie, jak i wykonanie konstrukcji. Nasz zespół projektowy współpracuje ściśle z klientem, aby stworzyć rozwiązanie idealnie dopasowane do jego potrzeb i oczekiwań. Przygotowujemy wizualizacje 3D, które pozwalają zobaczyć, jak będzie wyglądał gotowy projekt."
              },
              {
                question: "Czy działacie tylko lokalnie, czy na terenie całej Polski?",
                answer: "Realizujemy projekty na terenie całej Polski. Większość naszych realizacji znajduje się w województwie mazowieckim, łódzkim i wielkopolskim, ale podejmujemy się również projektów w innych regionach kraju. W przypadku projektów oddalonych od naszej siedziby, może być konieczne uwzględnienie dodatkowych kosztów transportu i zakwaterowania ekipy."
              },
              {
                question: "Jak wygląda proces realizacji zamówienia?",
                answer: "Proces realizacji zamówienia składa się z kilku etapów. Najpierw przeprowadzamy konsultację i ustalamy potrzeby klienta. Następnie przygotowujemy projekt i kosztorys. Po akceptacji projektu i podpisaniu umowy, przystępujemy do produkcji elementów w naszym warsztacie. Ostatnim etapem jest montaż konstrukcji na miejscu. Na każdym etapie informujemy klienta o postępach prac."
              },
              {
                question: "Czy pomagacie w uzyskaniu pozwolenia na budowę?",
                answer: "Tak, pomagamy naszym klientom w przygotowaniu niezbędnej dokumentacji oraz doradzamy w kwestiach formalnych związanych z uzyskaniem pozwolenia na budowę konstrukcji drewnianych." 
              },
              {
                question: "Czy można zamówić indywidualny projekt konstrukcji?",
                answer: "Oczywiście! Każdy projekt traktujemy indywidualnie i dostosowujemy go do potrzeb oraz oczekiwań klienta. Realizujemy zarówno standardowe, jak i nietypowe zamówienia." 
              },
              {
                question: "Jakie są możliwości personalizacji konstrukcji?",
                answer: "Oferujemy szerokie możliwości personalizacji: wybór rodzaju drewna, koloru, wykończenia, dodatków takich jak oświetlenie, systemy automatyki czy zadaszenia przesuwne." 
              },
              {
                question: "Czy oferujecie serwis i konserwację po zakończeniu budowy?",
                answer: "Tak, zapewniamy serwis gwarancyjny i pogwarancyjny, a także doradzamy w zakresie konserwacji i pielęgnacji konstrukcji drewnianych." 
              },
              {
                question: "Czy można zobaczyć Wasze realizacje na żywo?",
                answer: "Tak, po wcześniejszym umówieniu się istnieje możliwość obejrzenia wybranych realizacji w terenie lub odwiedzenia naszego showroomu." 
              },
              {
                question: "Jakie są formy płatności i czy można rozłożyć płatność na raty?",
                answer: "Akceptujemy różne formy płatności, w tym przelew bankowy i gotówkę. W przypadku większych inwestycji istnieje możliwość ustalenia płatności w transzach." 
              }
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl shadow-lg border bg-white transition-all duration-300 ${isOpen ? 'border-[#00CAFF] ring-2 ring-[#00CAFF]/20' : 'border-gray-200'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-8 py-6 focus:outline-none group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg font-semibold text-gray-900 text-left group-hover:text-[#00CAFF] transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex items-center justify-center">
                      <svg
                        className={`w-7 h-7 transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#00CAFF]' : 'text-gray-400 group-hover:text-[#00CAFF]'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 px-8 ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
                    aria-hidden={!isOpen}
                  >
                    <p className="text-gray-700 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D3748] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Gotowy na realizację swojego projektu?</h2>
            <p className="text-xl text-gray-200 mb-10">
              Skontaktuj się z nami, aby omówić swoje potrzeby i rozpocząć współpracę nad wymarzonym projektem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/kontakt" 
                className="btn btn-primary"
              >
                Skontaktuj się z nami
              </Link>
              <Link 
                href="/realizacje" 
                className="btn btn-secondary"
              >
                Zobacz nasze realizacje
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 