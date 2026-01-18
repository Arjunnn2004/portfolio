import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router';
import dark from './dark.jpg'; 
import bg from './bg.jpg'

function Layout() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <div
      className={`app-shell relative flex min-h-screen flex-col overflow-x-hidden ${
        currentTheme === 'dark' ? 'text-white' : 'text-slate-900'
      } transition-all duration-500`}
      style={
        currentTheme === 'dark'
          ? { backgroundImage: `url(${dark})`, backgroundSize: 'cover' }
          : { backgroundImage: `url(${bg})`, backgroundSize: 'cover' }
      }
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/55 via-slate-900/35 to-cyan-500/10" />
      <div className="pointer-events-none absolute -top-40 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/15 blur-3xl" />

      <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <main className="relative flex-grow container mx-auto px-4 py-8 sm:py-10">
        <Outlet />
      </main>
      <Footer darkMode={currentTheme === 'dark'} />
    </div>
  );
}

export default Layout;

