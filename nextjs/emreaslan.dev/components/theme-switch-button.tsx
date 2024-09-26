"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="text-2xl p-2 cursor-pointer transition-all duration-250 ease-in-out transform hover:translate-y-[-3px]">
      {theme == "light" ? (
        // <span
        //   onClick={() => setTheme("dark")}
        //   aria-label="Full Moon"
        //   role="img"
        // >
        //   🌑
        // </span>
        <MoonIcon onClick={() => setTheme("dark")} className="h-8 w-8" />
      ) : (
        // <span
        //   onClick={() => setTheme("light")}
        //   aria-label="New Moon"
        //   role="img"
        // >
        //   🌕
        // </span>
        <SunIcon onClick={() => setTheme("light")} className="h-8 w-8" />
      )}
    </div>
  );
}
