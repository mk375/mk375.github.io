import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      href: "https://goo.gl/maps/yourlocation",
      icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />,
      text: "Stuttgart, Deutschland",
      isExternal: false,
    },
    {
      href: "tel:+491635142926",
      icon: <FaPhone className="text-blue-600 text-2xl" />,
      text: "+49 163 5142926",
      isExternal: false,
    },
    {
      href: "mailto:martin.koch00@gmx.de",
      icon: <FaEnvelope className="text-blue-600 text-2xl" />,
      text: "martin.koch00@gmx.de",
      isExternal: false,
    },
    {
      href: "https://de.linkedin.com/in/martin-koch-1a2a77376",
      icon: <FaLinkedin className="text-blue-600 text-2xl" />,
      text: "LinkedIn",
      isExternal: true,
    },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 py-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.isExternal ? "_blank" : "_self"}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-400 transition-colors"
            >
              {link.icon}
              <span className="hidden sm:inline text-sm md:text-base">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
