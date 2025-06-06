import React from 'react';
import Layout from './layout';
import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import gmail from './search.png';

// Use <a> for external links instead of <Link> from react-router
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
      <div className="flex flex-row gap-8">
        <a
          href="https://www.instagram.com/_.itsarjun._/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:shadow-lg rounded-full bg-white p-4"
        >
          <img src={instagram} alt="Instagram" className="w-12 h-12" />
        </a>
        <a
          href="https://wa.me/+919027596874"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:shadow-lg rounded-full bg-white p-4"
        >
          <img src={whatsapp} alt="WhatsApp" className="w-12 h-12" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=randomhila7682@gmail.com&su=SUBJECT&body=BODY"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:shadow-lg rounded-full bg-white p-4"
        >
          <img src={gmail} alt="Gmail" className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}

export default Contact;