import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router';

function Layout() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <div className={`flex flex-col min-h-screen ${currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer darkMode={currentTheme === 'dark'} />
    </div>
  );
}

export default Layout;

