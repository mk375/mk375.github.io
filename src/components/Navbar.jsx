import React from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      href: "https://goo.gl/maps/yourlocation",
      icon: <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />,
      text: "Stuttgart, Deutschland",
      isExternal: false,
    },
    {
      href: "tel:+491635142926",
      icon: <FaPhone className="text-blue-600 w-5 h-5" />,
      text: "+49 163 5142926",
      isExternal: false,
    },
    {
      href: "mailto:martin.koch00@gmx.de",
      icon: <FaEnvelope className="text-blue-600 w-5 h-5" />,
      text: "martin.koch00@gmx.de",
      isExternal: false,
    },
    {
      href: "https://de.linkedin.com/in/martin-koch-1a2a77376",
      icon: <FaLinkedin className="text-blue-600 w-5 h-5" />,
      text: "LinkedIn",
      isExternal: true,
    },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <ul className="flex w-full">
            {links.map((link, index) => (
              <li key={index} className="flex-1 flex items-center justify-center">
                <a
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center gap-2 hover:text-blue-300 transition-colors"
                >
                  {link.icon}
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
