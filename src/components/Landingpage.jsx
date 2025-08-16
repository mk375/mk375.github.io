import React, { useEffect, useState } from "react";
import profileImg from "../assets/me.png";

const typingText = "Martin Koch - Data Scientist & Webdeveloper";

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
    <nav className="relative w-full h-screen bg-white font-sans shadow-xl border-b border-gray-200 overflow-hidden">
      {/* Hintergrundbild */}
      <img
        src={profileImg}
        alt="Profilbild"
        className="absolute bottom-0 right-0 w-full grayscale"
      />

      {/* Text darüber */}
      <div className="relative z-10 p-6 max-w-8xl mx-10 text-left">
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

        <div className="flex flex-col gap-2 text-base font-medium mb-4 text-black">
          <div>
            <span className="font-bold">Telefon:</span>{" "}
            <a
              href="tel:+491234567890"
              className="hover:text-blue-300 transition"
            >
              +49 123 4567890
            </a>
          </div>

          <div>
            <span className="font-bold">Mail:</span>{" "}
            <a
              href="mailto:martin@example.com"
              className="hover:text-blue-300 transition"
            >
              martin@example.com
            </a>
          </div>

          <div>
            <span className="font-bold">Instagram:</span>{" "}
            <a
              href="https://instagram.com/deinprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition flex items-center gap-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" />
                <rect x="7" y="7" width="10" height="10" rx="5" stroke="#2563eb" strokeWidth="2" />
                <circle cx="16.5" cy="7.5" r="1.5" fill="#2563eb" />
              </svg>
              @deinprofil
            </a>
          </div>

          <div>
            <span className="font-bold">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/deinprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition flex items-center gap-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="#2563eb" strokeWidth="2" />
                <rect x="6" y="10" width="2" height="6" fill="#2563eb" />
                <rect x="10" y="10" width="2" height="6" fill="#2563eb" />
                <circle cx="7" cy="7" r="1" fill="#2563eb" />
                <rect x="14" y="10" width="2" height="3" fill="#2563eb" />
                <path d="M16 13v3" stroke="#2563eb" strokeWidth="2" />
              </svg>
              deinprofil
            </a>
          </div>

          <div>
            <span className="font-bold">Ort:</span>{" "}
            <span className="flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 21c-4-5-7-8-7-12a7 7 0 1 1 14 0c0 4-3 7-7 12z" stroke="#2563eb" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="9" r="2.5" stroke="#2563eb" strokeWidth="2" fill="none"/>
              </svg>
              Berlin, Deutschland
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Landingpage;
