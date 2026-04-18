import React, { useState, useEffect } from 'react';
import './index.css';

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Gallery from './components/Gallery';

function App() {

  {/*-------------------------Scroll to top button------------------------ */}
  const [showButton, setShowButton] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  {/*-------------------------------------------------------------------- */}

  return (
    <div className="bg-gray-100 text-gray-900 font-sans">

      {/* Hero Banner */}
      <nav className="fixed top-0 w-full bg-[#6b0e1d] shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-23 py-4">

          <div className="flex items-center gap-10">
            <button onClick={scrollToTop} className="font-bold text-lg text-white border-2 border-white px-2 py-1 rounded hover:opacity-80 transition">
              AD {/*ArveDev@Github */}
            </button>

              <div className="flex gap-6 text-white font-medium">
                <a href="#about" className="hover:underline">About Me</a>
                <a href="#education" className="hover:underline">ED</a>
                <a href="#experience" className="hover:underline">XP</a>
                <a href="#skills" className="hover:underline">Skills</a>
                <a href="#gallery" className="hover:underline">Gallery</a>
              </div>
          </div>

          <a href="#contact"  className="bg-white text-[#6b0e1d] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Welcome Page */}
      <section className="pt-32 pb-20 text-center bg-gray-50">
        <img src="/pp.jpg" alt="picture" className="w-40 h-40 mx-auto rounded-full border-4 border-gray-800 shadow-lg" />

        <h1 className="mt-10 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
          Welcome to <span className="text-[#6b0e1d] font-mono">Rizele</span>'s Portfolio
        </h1>

        <p className="italic text-[30px]">
          Developer | Artist | Student
        </p>
      </section>

      {/* Body */}
      <main className="max-w-6xl mx-auto px-20 py-12 space-y-8">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
      </main>

      <Gallery />

      <main className="max-w-6xl mx-auto px-20 py-12 space-y-8">
        <Contact />
      </main>
      
      {/* Scroll to top appear */}
      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-[#6b0e1d] text-white w-12 h-12 rounded-full shadow-lg hover:bg-red-800 transition flex items-center justify-center" >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Rize. All rights reserved.
      </footer>

    </div>
  );
}

export default App;