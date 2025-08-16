import React, { useEffect, useState } from "react";
import profileImg from "../assets/me.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const typingText = "Martin Koch - AI Engineer & Webdeveloper";

function Landingpage() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(typingText.slice(0, i + 1));
      i++;
      if (i === typingText.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white font-sans overflow-hidden border-b border-gray-200">
      {/* Navbar */}
      <Navbar />

      {/* Padding oben hinzufügen, damit der Text nicht hinter der Navbar liegt */}
      <div className="pt-24 px-6 sm:px-12 md:px-24 lg:px-32 relative z-10 max-w-7xl mx-auto text-left">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] text-black leading-tight">
          <span className="border-r-2 border-blue-600 animate-pulse pr-1">
            {displayedText.split("").map((char, idx) =>
              char === "&" ? (
                <span
                  key={idx}
                  className="text-blue-600 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                >
                  &amp;
                </span>
              ) : (
                <span key={idx}>{char}</span>
              )
            )}
          </span>
        </h1>
      </div>

      {/* Hintergrundbild */}
      <img
        src={profileImg}
        alt="Profilbild"
        className="absolute bottom-0 right-0 w-.9 h-auto object-cover grayscale"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landingpage;
