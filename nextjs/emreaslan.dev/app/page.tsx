import React from "react";
import me from "@/info/img/self.png";
import { info } from "@/info/index";
import Image from "next/image";

import EmojiBullet from "@/components/EmojiBullet";
import SocialIcon from "@/components/social-icon";

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-175px)]">
      <Image
        alt="image of developer"
        className="rounded-full dark:shadow-gray-700 shadow-2xl w-[35vh] h-[35vh] md:w-[40vh] md:h-[40vh] mb-4 md:mb-0 md:mr-8 p-4"
        style={{ background: info.gradient }}
        src={me}
      />
      <div className="space-y-2">
        <h1 className="font-bold text-2xl text-center md:text-left md:text-3xl lg:text-5xl">
          Hi, I'm{" "}
          <span
            className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName}
          </span>
          <span className="inline-block animate-wave">🤚</span>
        </h1>
        <h2 className="font-bold text-center text-xl md:text-left  md:text-2xl lg:text-3xl">
          I'm {info.position}
        </h2>
        <ul className="p-4  space-y-1">
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </ul>
        <div className="flex gap-6 justify-center text-2xl md:text-3xl lg:text-4xl">
          <SocialIcon />
        </div>
      </div>
    </main>
  );
}
