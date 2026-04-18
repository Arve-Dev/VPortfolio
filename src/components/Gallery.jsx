import React from "react";

import art1 from "../assets/Gallery/0.png";
import art2 from "../assets/Gallery/1.png";
import art3 from "../assets/Gallery/2.jpg";
import art4 from "../assets/Gallery/3.png";
import art5 from "../assets/Gallery/4.jpg";
import art6 from "../assets/Gallery/5.jpg";
import art7 from "../assets/Gallery/6.png";
import art8 from "../assets/Gallery/7.png";
import art9 from "../assets/Gallery/8.png";
import art10 from "../assets/Gallery/9.png";

function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 scroll-mt-7">

      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Illustrations
        </h2>
        <p className="text-gray-500 mt-2">
          A collection of works I have so far
        </p>
      </div>

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 [column-gap:0] animate-fadeIn">

        <img src={art1} className="w-full break-inside-avoid" />
        <img src={art2} className="w-full break-inside-avoid" />
        <img src={art3} className="w-full break-inside-avoid" />
        <img src={art4} className="w-full break-inside-avoid" />
        <img src={art5} className="w-full break-inside-avoid" />
        <img src={art6} className="w-full break-inside-avoid" />
        <img src={art7} className="w-full break-inside-avoid" />
        <img src={art8} className="w-full break-inside-avoid" />
        <img src={art9} className="w-full break-inside-avoid" />
        <img src={art10} className="w-full break-inside-avoid" />

      </div>

    </section>
  );
}

export default Gallery;