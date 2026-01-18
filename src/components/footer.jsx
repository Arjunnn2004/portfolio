import React from "react";

function Footer({ darkMode }) {
  const year = new Date().getFullYear();
  return (
    <div className="relative mt-auto px-3 pb-3">
      <div
        className={`glass-panel rounded-2xl border transition-colors duration-500 ${
          darkMode ? 'border-white/10' : 'border-white/25'
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between p-4">
          <span className="text-sm italic text-white/80">© {year} Arjun Chawla</span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=randomhila7682@gmail.com&su=SUBJECT&body=BODY">
            <span className="text-sm italic text-white/70 hover:text-cyan-200 transition-colors duration-300">
              randomhila7682@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
