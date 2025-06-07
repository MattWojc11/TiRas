'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Zamknij menu po zmianie strony
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Strona główna' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/realizacje', label: 'Realizacje' },
    { href: '/kontakt', label: 'Kontakt' }
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;

    return (
      <Link href={href} className="relative group">
        <span className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-[#00CAFF] transition-colors text-sm uppercase tracking-wider font-medium ${isActive ? 'text-[#00CAFF]' : ''}`}>
          {label}
          {isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00CAFF]" />
          )}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00CAFF] transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    );
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center group">
            <span className="font-bold text-2xl relative">
              <span className={`${scrolled ? 'text-[#00CAFF]' : 'text-[#33D6FF]'} transition-colors duration-300`}>Ti</span>
              <span className={`${scrolled ? 'text-[#0099CC]' : 'text-[#00CAFF]'} transition-colors duration-300`}>Ras</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00CAFF] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </motion.div>
        
        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden focus:outline-none relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 transform ${
                isMenuOpen 
                  ? 'rotate-45 translate-y-0.5 bg-[#00CAFF]' 
                  : '-translate-y-1 ' + (scrolled ? 'bg-gray-800' : 'bg-white')
              }`} 
            />
            <span 
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                isMenuOpen 
                  ? 'opacity-0 bg-[#00CAFF]' 
                  : 'opacity-100 ' + (scrolled ? 'bg-gray-800' : 'bg-white')
              }`} 
            />
            <span 
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 transform ${
                isMenuOpen 
                  ? '-rotate-45 -translate-y-0.5 bg-[#00CAFF]' 
                  : 'translate-y-1 ' + (scrolled ? 'bg-gray-800' : 'bg-white')
              }`} 
            />
          </div>
        </motion.button>
        
        {/* Desktop navigation */}
        <motion.div 
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </motion.div>
        
        {/* Contact button - visible on desktop */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            href="/kontakt" 
            className={`btn px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              scrolled 
                ? 'bg-[#00CAFF] text-white hover:bg-[#0099CC]' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            Darmowa wycena
          </Link>
        </motion.div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-white shadow-xl p-6 z-50"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <div className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        className={`text-gray-800 text-lg font-medium block py-2 ${pathname === link.href ? 'text-[#00CAFF]' : 'hover:text-[#00CAFF]'}`}
                      >
                        {link.label}
                        {pathname === link.href && (
                          <span className="block w-10 h-0.5 bg-[#00CAFF] mt-1" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6 mt-6 border-t border-gray-100"
                  >
                    <Link href="/kontakt" className="btn btn-primary w-full text-center py-3 rounded-full">
                      Darmowa wycena
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 