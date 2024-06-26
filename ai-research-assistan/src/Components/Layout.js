// src/components/Layout.js
import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300"> {/* Fondo gris para toda la página */}
      <main className="flex-1 container mx-auto px-4 lg:px-20 py-4" style={{ maxWidth: '1200px', backgroundColor: 'white' }}>
        <Header /> {/* Mueve el Navbar aquí dentro para que respete los márgenes */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
