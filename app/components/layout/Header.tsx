'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-[#33D6FF]">Ti</span>
              <span className="text-[#00CAFF]">Ras</span>
            </span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`text-gray-800 hover:text-[#00CAFF] transition-colors ${isActive('/') ? 'font-bold text-[#00CAFF] border-b-2 border-[#00CAFF]' : ''}`}>
              Home
            </Link>
            <Link href="/o-nas" className={`text-gray-800 hover:text-[#00CAFF] transition-colors ${isActive('/o-nas') ? 'font-bold text-[#00CAFF] border-b-2 border-[#00CAFF]' : ''}`}>
              O nas
            </Link>
            <Link href="/realizacje" className={`text-gray-800 hover:text-[#00CAFF] transition-colors ${isActive('/realizacje') ? 'font-bold text-[#00CAFF] border-b-2 border-[#00CAFF]' : ''}`}>
              Realizacje
            </Link>
            <Link href="/kontakt" className={`text-gray-800 hover:text-[#00CAFF] transition-colors ${isActive('/kontakt') ? 'font-bold text-[#00CAFF] border-b-2 border-[#00CAFF]' : ''}`}>
              Kontakt
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/kontakt" className="bg-[#00CAFF] hover:bg-[#0099CC] text-white px-4 py-2 rounded-md font-medium transition-colors">
              Darmowa wycena
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-[#00CAFF]">
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-6 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`text-gray-800 hover:text-amber-700 transition-colors ${isActive('/') ? 'font-bold text-amber-700' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/o-nas" 
              className={`text-gray-800 hover:text-amber-700 transition-colors ${isActive('/o-nas') ? 'font-bold text-amber-700' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              O nas
            </Link>
            <Link 
              href="/realizacje" 
              className={`text-gray-800 hover:text-amber-700 transition-colors ${isActive('/realizacje') ? 'font-bold text-amber-700' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Realizacje
            </Link>
            <Link 
              href="/kontakt" 
              className={`text-gray-800 hover:text-amber-700 transition-colors ${isActive('/kontakt') ? 'font-bold text-amber-700' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link 
              href="/kontakt" 
              className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md text-center font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Darmowa wycena
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 