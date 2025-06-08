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
    <div className="flex flex-col lg:justify-between gap-10 md:flex-col lg:flex-row ">
      <div className="flex flex-col flex-wrap">
        <br />
        <h1 className="text-7xl font-extrabold ">Arjun Chawla</h1>

        <p className="text-lg italic font-sans text-gray-600 transition-all duration-500">
         <br />
          I’m a <span style={{ cursor: "pointer", textDecoration: "underline" }}>{values[currentIndex]}</span> <br />
          Welcome to my digital space! I specialize in building modern, responsive, and user-friendly web experiences. Whether it's crafting intuitive UI/UX designs, building full-stack applications, or solving complex coding problems — I'm always up for the challenge.
<br />
💡 Passionate about technology.
<br />
🔧 Obsessed with clean code.
<br />
🚀 Always learning, always growing.
<br />
Explore my projects, learn about my journey, and let’s connect to build something awesome together.
        </p>
        <div className="mt-10 flex flex-row gap-4">
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
