import React, { useEffect, useState } from "react";
import profileImg from "../assets/me.png";
import Navbar from "./Navbar"; // Navbar importieren

const typingText = "Martin Koch -  AI Engineer & Webdeveloper";

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
    <div className="relative w-full h-screen bg-white font-sans shadow-xl border-b border-gray-200 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Padding oben hinzufügen, damit der Text nicht hinter der Navbar liegt */}
      <div className="pt-24 relative z-10 p-24 max-w-8xl mx-10 text-left">
        <h1 className="font-bold text-6xl md:text-9xl mb-3 min-h-[160px] text-black">
          <span className="border-r-2 border-blue-600 animate-pulse pr-1">
            {displayedText.split("").map((char, idx) =>
              char === "&" ? (
                <span
                  key={idx}
                  className="text-6xl md:text-9xl text-blue-600 font-bold"
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
        className="absolute bottom-0 right-20 w-full grayscale"
      />
    </div>
  );
}

export default Landingpage;
