import React, { useState, useRef, useEffect } from 'react';
import Profile from '../Pages/profile';
import { Link } from 'react-router-dom';
import home from '../Pages/home';
import Signout from '../Pages/signout';
import Auth from '../auth';
import { BrowserRouter as Router, Route, Routes, Switch, redirect, Navigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();  // Referencia al menú

  // Efecto para añadir y limpiar el event listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);  // Cierra el menú si el clic fue fuera
      }
    };

    // Añadir cuando el menú está abierto y quitar cuando se cierra
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpiar el event listener al desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);  // Dependencia del estado isOpen

  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
        <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <a href="/app" className="block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-black antialiased">
              APM
            </a>
            <button
              className="relative ml-auto h-10 w-10 rounded-full flex items-center justify-center bg-gray-800 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            {isOpen && (
              <div ref={menuRef} className="absolute right-0 mt-12 mr-4 py-2 w-48 bg-white rounded-lg shadow-xl">
                <Link to="/profile"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</a>
                <Link to = "/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Salir </Link>

              </div>
            )}
          </div>
        </nav>
        <div className="max-w-screen-md py-12 mx-auto">

        </div>
      </div>
    </div>
  );
};

export default Header;
