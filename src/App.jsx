import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Profile3D from "./components/Profile3D";

function App() {
  const values = ["Web Developer", "UI/UX Designer", "Creative Coder"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <section className="relative pb-6 sm:pb-10">
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 order-2 lg:order-none">
          <div className="glass-panel tilt-hover rounded-3xl p-7 md:p-10">
            <div className="text-xs tracking-[0.35em] uppercase text-white/70">
              Portfolio • 2026
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white text-3d leading-tight">
              Arjun Chawla
            </h1>

            <div className="mt-4 sm:mt-5 text-white/85 text-base sm:text-lg md:text-xl">
              I’m a{" "}
              <span
                key={currentIndex}
                className="fade-up inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 font-semibold"
              >
                {values[currentIndex]}
              </span>
            </div>

            <p className="mt-5 sm:mt-6 text-white/75 leading-relaxed text-base sm:text-lg">
              Welcome to my digital space! I build modern, responsive, and
              user-friendly web experiences. From crafting intuitive UI/UX to
              building full-stack apps (and shipping fast), I love turning ideas
              into clean, scalable products.
            </p>

            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="glass-panel rounded-2xl p-4 tilt-hover">
                <div className="text-white/70 text-xs uppercase tracking-widest">
                  Focus
                </div>
                <div className="mt-2 text-white font-semibold">UI + Frontend</div>
              </div>
              <div className="glass-panel rounded-2xl p-4 tilt-hover">
                <div className="text-white/70 text-xs uppercase tracking-widest">
                  Strength
                </div>
                <div className="mt-2 text-white font-semibold">Clean Systems</div>
              </div>
              <div className="glass-panel rounded-2xl p-4 tilt-hover">
                <div className="text-white/70 text-xs uppercase tracking-widest">
                  Mindset
                </div>
                <div className="mt-2 text-white font-semibold">Always Learning</div>
              </div>
            </div>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-4">
              <Button value={`Projects`} link="https://github.com/arjunnn2004" />
              <Button
                value={`My Resume`}
                link="https://drive.google.com/file/d/1aY5J7xmdEYBXgcMB7Mb32B5sZk6eegpb/view?usp=sharing"
              />
            </div>
          </div>

        </div>

        <div className="lg:col-span-5 order-1 lg:order-none">
          <Profile3D imageSrc="/profile.jpg" name="Arjun Chawla" />
        </div>
      </div>
    </section>
  );
}

export default App;
