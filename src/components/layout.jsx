import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router';
import bg from './bg.jpg'; 

function Layout() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <div className={`flex flex-col min-h-screen backdrop-blur-lg ${currentTheme === 'dark' ? 'bg-gray-900 text-black' : 'bg-white text-black'}` } style={{ backgroundImage: `url(${bg})` }}>
      <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer darkMode={currentTheme === 'dark'} />
    </div>
  );
}

export default Layout;

