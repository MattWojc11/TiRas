'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showCustomizePanel, setShowCustomizePanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Sprawdź czy użytkownik już zaakceptował politykę prywatności
    const hasConsented = localStorage.getItem('cookieConsent');
    
    // Sprawdź czy urządzenie jest mobilne
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Jeśli nie, pokaż banner po małym opóźnieniu, aby strona mogła się najpierw załadować
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', checkIfMobile);
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleAcceptAll = () => {
    // Zapisz informację o akceptacji wszystkich ciasteczek
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookieSettings', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }));
    setShowConsent(false);
  };

  const handleAcceptSelected = () => {
    // Zapisz informację o akceptacji wybranych ciasteczek
    localStorage.setItem('cookieConsent', 'selected');
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    // Zapisz informację o odrzuceniu wszystkich ciasteczek oprócz niezbędnych
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookieSettings', JSON.stringify({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }));
    setShowConsent(false);
  };

  const toggleCustomizePanel = () => {
    setShowCustomizePanel(!showCustomizePanel);
  };
  
  const toggleCompactView = () => {
    setIsCompact(!isCompact);
  };

  const handleCookieSettingChange = (type: keyof typeof cookieSettings) => {
    if (type === 'necessary') return; // Niezbędne ciasteczka zawsze włączone
    
    setCookieSettings({
      ...cookieSettings,
      [type]: !cookieSettings[type]
    });
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div 
          className="fixed bottom-0 inset-x-0 z-50 p-2 sm:p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            {isMobile && isCompact ? (
              // Zminimalizowany widok dla urządzeń mobilnych
              <div className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#E6F9FF] rounded-full flex items-center justify-center text-[#00CAFF] mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-800 font-medium">Strona używa plików cookies</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={toggleCompactView}
                    className="text-gray-600 hover:text-gray-800 p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="text-xs sm:text-sm bg-[#00CAFF] hover:bg-[#0099CC] text-white font-medium px-2 py-1 rounded transition-colors"
                  >
                    Akceptuj
                  </button>
                </div>
              </div>
            ) : (
              // Pełny widok
              <>
                {/* Główny panel zgody */}
                <div className={`p-4 sm:p-6 md:p-8 border-b border-gray-100 ${isMobile ? 'relative' : ''}`}>
                  {isMobile && (
                    <button 
                      onClick={toggleCompactView}
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                  )}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 sm:mr-5 hidden sm:block">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E6F9FF] rounded-full flex items-center justify-center text-[#00CAFF]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Szanujemy Twoją prywatność</h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        Używamy cookies do zapamiętywania preferencji, analizy ruchu i dostosowania treści.
                      </p>
                      <div className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
                        <p>
                          Akceptując zgadzasz się na używanie wszystkich plików cookies. 
                          Możesz też dostosować ustawienia.
                          Więcej w naszej{' '}
                          <Link href="/polityka-prywatnosci" className="text-[#00CAFF] hover:underline">
                            Polityce Prywatności
                          </Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel dostosowywania (pokazywany po kliknięciu "Dostosuj ustawienia") */}
                <AnimatePresence>
                  {showCustomizePanel && (
                    <motion.div 
                      className="p-4 sm:p-6 bg-gray-50 border-b border-gray-100"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100">
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <h3 className="font-medium text-gray-900 text-sm sm:text-base">Niezbędne</h3>
                            <div className="relative">
                              <input 
                                type="checkbox" 
                                checked={cookieSettings.necessary}
                                disabled
                                className="sr-only"
                              />
                              <div className="w-8 h-4 sm:w-10 sm:h-5 bg-[#00CAFF] rounded-full shadow-inner"></div>
                              <div className="dot absolute w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow -left-1 -top-0 transition"></div>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Niezbędne do prawidłowego funkcjonowania strony.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100">
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <h3 className="font-medium text-gray-900 text-sm sm:text-base">Funkcjonalne</h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                checked={cookieSettings.functional}
                                onChange={() => handleCookieSettingChange('functional')}
                                className="sr-only peer"
                              />
                              <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-[#00CAFF]"></div>
                            </label>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Umożliwiają zapamiętywanie preferencji.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100">
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <h3 className="font-medium text-gray-900 text-sm sm:text-base">Analityczne</h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                checked={cookieSettings.analytics}
                                onChange={() => handleCookieSettingChange('analytics')}
                                className="sr-only peer"
                              />
                              <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-[#00CAFF]"></div>
                            </label>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Pomagają analizować ruch na stronie.
                          </p>
                        </div>

                        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100">
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <h3 className="font-medium text-gray-900 text-sm sm:text-base">Marketingowe</h3>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                checked={cookieSettings.marketing}
                                onChange={() => handleCookieSettingChange('marketing')}
                                className="sr-only peer"
                              />
                              <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-[#00CAFF]"></div>
                            </label>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Używane do wyświetlania spersonalizowanych reklam.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Przyciski akcji */}
                <div className="p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row-reverse items-center justify-between gap-2 sm:gap-4">
                  <div className="flex flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                    <button 
                      onClick={handleAcceptAll}
                      className="w-full sm:w-auto px-3 sm:px-6 py-2 sm:py-3 bg-[#00CAFF] hover:bg-[#0099CC] text-white font-medium rounded-lg text-sm sm:text-base transition-colors"
                    >
                      Akceptuj wszystkie
                    </button>
                    
                    {showCustomizePanel ? (
                      <button 
                        onClick={handleAcceptSelected}
                        className="w-full sm:w-auto px-3 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg text-sm sm:text-base border border-gray-200 transition-colors"
                      >
                        Zapisz
                      </button>
                    ) : (
                      <button 
                        onClick={toggleCustomizePanel}
                        className="w-full sm:w-auto px-3 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg text-sm sm:text-base border border-gray-200 transition-colors"
                      >
                        Dostosuj
                      </button>
                    )}
                  </div>
                  
                  <button 
                    onClick={handleRejectAll}
                    className="w-full sm:w-auto text-sm sm:text-base text-gray-600 hover:text-gray-800 font-medium transition-colors underline"
                  >
                    Odrzuć wszystkie
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 