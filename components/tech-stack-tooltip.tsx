import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import typescript from "@/info/img/tech-stack/typescript.png";
import react from "@/info/img/tech-stack/react.png";
import nextjs from "@/info/img/tech-stack/nextjs.jpeg";
import tailwindcss from "@/info/img/tech-stack/tailwind.png";
import shadcn from "@/info/img/tech-stack/shadcn.png";
import mongodb from "@/info/img/tech-stack/mongodb.png";
import prisma from "@/info/img/tech-stack/prisma.png";
import web3js from "@/info/img/tech-stack/web3js.jpg";
import nextauth from "@/info/img/tech-stack/nextauth.png";
import javascript from "@/info/img/tech-stack/javascript.png";
import chakraui from "@/info/img/tech-stack/chakraui.png";
import ethersjs from "@/info/img/tech-stack/ethersjs.svg";
import materialui from "@/info/img/tech-stack/materialui.png";
import hardhat from "@/info/img/tech-stack/hardhat.png";
import expressjs from "@/info/img/tech-stack/expressjs.jpeg";
import nodejs from "@/info/img/tech-stack/nodejs.png";
import redux from "@/info/img/tech-stack/redux.png";
import solidity from "@/info/img/tech-stack/solidity.png";

interface TechStackTooltipProps {
  tech: string[];
}

const TechStackTooltip = ({ tech }: TechStackTooltipProps) => {
  const techImages: { [key: string]: string } = {
    typescript: typescript.src,
    nextjs: nextjs.src,
    tailwindcss: tailwindcss.src,
    shadcn: shadcn.src,
    mongodb: mongodb.src,
    prisma: prisma.src,
    web3js: web3js.src,
    nextauth: nextauth.src,
    javascript: javascript.src,
    react: react.src,
    chakraui: chakraui.src,
    ethersjs: ethersjs.src,
    materialui: materialui.src,
    hardhat: hardhat.src,
    expressjs: expressjs.src,
    nodejs: nodejs.src,
    redux: redux.src,
    solidity: solidity.src,
  };

  return (
    <div className="flex -space-x-1 rtl:space-x-reverse h-5 w-full ">
      {tech.map((item) => {
        const src = techImages[item];
        return (
          <TooltipProvider key={item}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  width={20}
                  height={20}
                  className="rounded-full bg-black"
                  src={src}
                  alt="Medium avatar"
                />
              </TooltipTrigger>
              <TooltipContent className="ml-3 bg-zinc-700 text-slate-200">
                <p>{item}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default TechStackTooltip;
