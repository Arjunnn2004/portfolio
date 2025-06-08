import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Button from "./components/Button";


function App() {
  const values = ['Web Developer', 'UI/UX Designer', 'Creative Coder'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <div className="flex flex-col justify-center lg:justify-between gap-10 md:flex-col lg:flex-row ">
      <div className="flex flex-col flex-wrap">
        <h1 className="text-7xl font-extrabold ">Arjun Chawla</h1>
        <br />
        <p className="text-lg italic font-sans text-gray-600 transition-all duration-500">
          Hi, I'm Arjun Chawla 👋 <br />
          I’m a <span style={{ cursor: "pointer", textDecoration: "underline" }}>{values[currentIndex]}</span> <br />I build
          products and services including beautiful websites, engaging
          experiences, smart applications
        </p>
        <div className="mt-16 flex flex-row gap-4">
        <Button value={`Projects`} link="https://github.com/arjunnn2004"/>
        <Button value={`My Resume`} link="https://drive.google.com/file/d/1dQ_LKtkygSlnDbTCWF6QXlHKuMhgGEp7/view?usp=sharing"/>
        </div>
      </div>
      <div>
      <Card/>
      </div>
    </div>
  );
}

export default App;
