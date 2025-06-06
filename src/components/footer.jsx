import React from "react";

function Footer({ darkMode }) {
  const year = new Date().getFullYear();
  return (
    <div className={`flex justify-between p-4 shadow-md transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <span className="text-md italic">© {year} Arjun Chawla</span>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=randomhila7682@gmail.com&su=SUBJECT&body=BODY">
        <span className="text-md italic hover:text-blue-500 transition-colors duration-400">randomhila7682@gmail.com</span>
        </a>
    </div>
  );
}

export default Footer;
