"use client";
import React, { useState } from "react";
import Link from "next/link"; // Next.js Link bileşeni
import { ThemeSwitchButton } from "./theme-switch-button";
import { info } from "@/info/index";
import Container from "./container";

const links = [
  {
    name: "About",
    to: "/about",
    active: "about",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
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
];

export default function Navbar() {
  const [active, setActive] = useState("home"); // Varsayılan aktif bağlantı

  return (
    <Container maxWidth="max-w-4xl">
      <nav className="w-full transition-all pt-2">
        <ul className="flex justify-between items-center gap-8 lowercase text-base">
          {links.map((link, index) => (
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
                onClick={() => setActive(link.active)}
                className="hover:text-current"
              >
                {link.type === "initials" ? (
                  <h1 className="py-2 text-[2rem] font-bold">{link.name}</h1>
                ) : (
                  <p className="py-2">{link.name}</p>
                )}
              </Link>
            </li>
          ))}
          <li>
            <ThemeSwitchButton />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
