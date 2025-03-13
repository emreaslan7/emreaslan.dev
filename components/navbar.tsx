"use client";
import React, { useState } from "react";
import Link from "next/link"; // Next.js Link bileşeni
import { ThemeSwitchButton } from "@/components/theme-switch-button";
import { info } from "@/info/index";
import Container from "@/components/container";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger menü ve kapama simgeleri için import

const links = [
  {
    name: "About",
    to: "/about",
    active: "about",
  },
  {
    name: "Projects",
    to: "/projects",
    active: "projects",
  },
  {
    name: info.initials,
    type: "initials",
    to: "/",
    active: "home",
  },
  {
    name: "Articles",
    to: "/articles",
    active: "articles",
  },
  {
    name: "Notebooks",
    to: "/notebooks",
    active: "notebooks",
  },
];

const mobileLinks = [
  links[2], // İlk olarak "initials"
  links[0], // Sonra "About"
  links[1], // Sonra "Projects"
  links[3], // Sonra "Articles"
  links[4], // Son olarak "Notebooks"
];

import { useEffect } from "react"; // Yeni import
// ... existing code ...

export default function Navbar() {
  const [active, setActive] = useState("home"); // Varsayılan aktif bağlantı
  const [isOpen, setIsOpen] = useState(false); // Menü durumu

  // Menü açma/kapama fonksiyonu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Ekran boyutuna göre menüyü kapat
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container maxWidth="max-w-4xl">
      <button
        onClick={toggleMenu}
        className="md:hidden absolute top-2 left-2 p-1"
      >
        {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}{" "}
        {/* Hamburger menü simgesi */}
      </button>
      <nav className="w-full transition-all pt-2 flex justify-center">
        <div className="flex justify-center items-center w-full max-w-4xl">
          <ul
            className={`flex flex-col md:flex-row justify-between items-center gap-12 lowercase text-base $transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden md:flex md:opacity-100 md:max-h-full"
            }`}
          >
            {isOpen
              ? mobileLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`text-center transition-transform hover:translate-y-[-3px] ${
                      link.active === active
                        ? "border-b-5 border-solid border-b-current"
                        : ""
                    }`}
                  >
                    <Link
                      href={link.to}
                      passHref
                      onClick={() => {
                        setActive(link.active);
                        setIsOpen(false); // Menü kapat
                      }}
                      className="hover:text-current"
                    >
                      {link.type === "initials" ? (
                        <h1 className="py-2 text-[2rem] font-bold">
                          {link.name}
                        </h1>
                      ) : (
                        <p className="py-2">{link.name}</p>
                      )}
                    </Link>
                  </li>
                ))
              : links.map((link, index) => (
                  <li
                    key={index}
                    className={`text-center transition-transform hover:translate-y-[-3px] ${
                      link.active === active
                        ? "border-b-5 border-solid border-b-current"
                        : ""
                    }`}
                  >
                    <Link
                      href={link.to}
                      passHref
                      onClick={() => {
                        setActive(link.active);
                        setIsOpen(false); // Menü kapat
                      }}
                      className="hover:text-current"
                    >
                      {link.type === "initials" ? (
                        <h1 className="py-2 text-[2rem] font-bold">
                          {link.name}
                        </h1>
                      ) : (
                        <p className="py-2">{link.name}</p>
                      )}
                    </Link>
                  </li>
                ))}
          </ul>
          <div className="absolute top-2 right-2 md:static md:top-auto md:right-auto pl-12">
            {" "}
            {/* Butonu sağ üstte konumlandır */}
            <ThemeSwitchButton />
          </div>
        </div>
      </nav>
    </Container>
  );
}

// export default function Navbar() {
//   const [active, setActive] = useState("home"); // Varsayılan aktif bağlantı

//   return (
//     <Container maxWidth="max-w-4xl">
//       <nav className="w-full transition-all pt-2">
//         <ul className="flex justify-between items-center gap-8 lowercase text-base">
//           {links.map((link, index) => (
//             <li
//               key={index}
//               className={`text-center transition-transform hover:translate-y-[-3px] ${
//                 link.active === active
//                   ? "border-b-5 border-solid border-b-current"
//                   : ""
//               }`}
//             >
//               <Link
//                 href={link.to}
//                 passHref
//                 onClick={() => setActive(link.active)}
//                 className="hover:text-current"
//               >
//                 {link.type === "initials" ? (
//                   <h1 className="py-2 text-[2rem] font-bold">{link.name}</h1>
//                 ) : (
//                   <p className="py-2">{link.name}</p>
//                 )}
//               </Link>
//             </li>
//           ))}
//           <li>
//             <ThemeSwitchButton />
//           </li>
//         </ul>
//       </nav>
//     </Container>
//   );
// }
