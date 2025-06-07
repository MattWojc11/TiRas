import type { Metadata } from "next";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFormWrapper from "../components/contact/ContactFormWrapper";

export const metadata: Metadata = {
  title: "Kontakt | TiRas",
  description: "Skontaktuj się z nami - konstrukcje drewniane, pergole, tarasy, zadaszenia. Bezpłatna wycena.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-[url('/images/projects/pergola1-2.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Kontakt</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Jesteśmy tutaj, aby pomóc Ci stworzyć wymarzony projekt. Skontaktuj się z nami.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column - contact info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 after:content-[''] after:block after:w-16 after:h-1 after:bg-[#00CAFF] after:mt-4 text-gray-800">Dane kontaktowe</h2>
              <ContactInfo className="space-y-10" />
            
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Znajdź nas online</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#E6F9FF] text-[#00CAFF] hover:bg-[#00CAFF] hover:text-white h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#E6F9FF] text-[#00CAFF] hover:bg-[#00CAFF] hover:text-white h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#E6F9FF] text-[#00CAFF] hover:bg-[#00CAFF] hover:text-white h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right column - form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 after:content-[''] after:block after:w-16 after:h-1 after:bg-[#00CAFF] after:mt-4 text-gray-800">Napisz do nas</h2>
              <div className="bg-[#F9FAFB] p-8 rounded-lg">
              <ContactFormWrapper />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="bg-[#F3F4F6]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-24 flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-[#00CAFF] after:mt-4 text-gray-800">Gdzie nas znaleźć</h2>
              <p className="text-lg text-gray-600 mb-8">
                Zapraszamy do naszego biura w Szwajcarii. Jesteśmy dostępni od poniedziałku do piątku w godzinach 8:00-16:00.
              </p>
              <div className="flex items-center space-x-4 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00CAFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Müllerstrasse 38, 8810 Horgen, Szwajcaria</span>
              </div>
            </div>
          </div>
          <div className="h-[50vh] lg:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.4395597936884!2d8.523371315892822!3d46.95217597914721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478573c75e90a37d%3A0x7b23bfcda61c4685!2sM%C3%BCllerstrasse%2038%2C%208810%20Horgen%2C%20Szwajcaria!5e0!3m2!1spl!2spl!4v1628599234562!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
} 