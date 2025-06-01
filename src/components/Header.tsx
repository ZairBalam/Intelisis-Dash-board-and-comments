
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-intelisis-blue text-white py-3 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <div className="text-2xl font-bold flex items-center">
               <img src="public/logo_intelisis_blanco.png" alt="Descripción"  className="h-12 object-contain" />         
            </div>
          </div>
          
          {!isMobile && (
            <nav className="ml-6">
              <ul className="flex space-x-2">
                <li className="relative group px-3 py-2 cursor-pointer">
                  Inicio <span className="text-xs">▾</span>
                </li>
                <li className="relative group px-3 py-2 cursor-pointer">
                  Compañía <span className="text-xs">▾</span>
                </li>
                <li className="relative group px-3 py-2 cursor-pointer">
                  Soluciones <span className="text-xs">▾</span>
                </li>
                <li className="relative group px-3 py-2 cursor-pointer">
                  Industrias <span className="text-xs">▾</span>
                </li>
                <li className="relative group px-3 py-2 cursor-pointer font-semibold">
                  Comentarios y sugerencias <span className="text-xs">▾</span>
                </li>
              </ul>
            </nav>
          )}
        </div>
        
        <div className="flex items-center">
          {!isMobile && (
            <button className="bg-white text-intelisis-blue px-4 py-1 rounded-md font-medium flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              CONTÁCTANOS
            </button>
          )}
          {isMobile && (
            <button className="text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
