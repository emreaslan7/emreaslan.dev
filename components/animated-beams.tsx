"use client";

import type React from "react";
import { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

import { LinkPreview } from "@/components/ui/link-preview";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

const GradientText = ({
  children,
  emoji,
}: {
  children: React.ReactNode;
  emoji?: string;
}) => {
  return (
    <div className="z-10 bg-opacity-100 group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
          backgroundColor: "rgba(255, 255, 255,1)", // Arka planı daha az görünür hale getirmek için opaklığı azaltıyoruz
        }}
      />
      <span className="text-white">{emoji}</span>
      <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
      <AnimatedGradientText className="text-sm font-medium">
        {children}
      </AnimatedGradientText>
      <ChevronRight
        className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </div>
  );
};

const Card = forwardRef<
  HTMLDivElement,
  {
    isCenter?: boolean;
    url?: string;
    image?: string;
    className?: string;
    text?: string;
    emoji?: string;
    children?: React.ReactNode;
  }
>(({ isCenter, url, emoji, className, children }, ref) => {
  return (
    <div ref={ref} className={"opacity-100"}>
      {isCenter ? (
        <LinkPreview url={url || ""} className={className}>
          <GradientText emoji={emoji}>{children}</GradientText>
        </LinkPreview>
      ) : (
        <div
          ref={ref}
          className={cn(
            "z-10 flex items-center justify-center rounded-lg border transition-all px-4 py-2 shadow-md hover:shadow-lg",
            className,
            // Dark theme styles
            "bg-white text-black dark:bg-gray-800 dark:text-white" // Adjusted for dark theme
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
});

Card.displayName = "Card";

export function AnimatedBeamAI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[350px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[250px] max-w-2xl flex-col items-stretch justify-between z-10">
        <div className="flex flex-row items-center justify-between ">
          <Card ref={div1Ref}>
            <span className="font-medium">Machine Learning</span>
          </Card>
          <Card ref={div2Ref}>
            <span className="font-medium">Neural Networks</span>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Card
            ref={centerRef}
            isCenter={true}
            url={"https://ai.emreaslan.dev/"}
            emoji="🧠"
            className={
              "font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 z-10"
            }
          >
            ai.emreaslan.dev
          </Card>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Card ref={div3Ref}>
            <span className="font-medium">Deep Learning</span>
          </Card>
          <Card ref={div4Ref}>
            <span className="font-medium">Artificial Intelligence</span>
          </Card>
        </div>
      </div>

      {/* AnimatedBeam bileşenlerini güncelle */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={centerRef}
        curvature={-75}
        endYOffset={-10}
        gradientStartColor="#3b82f6"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={centerRef}
        curvature={-75}
        endYOffset={-10}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#d946ef"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={centerRef}
        curvature={75}
        endYOffset={10}
        gradientStartColor="#10b981"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={centerRef}
        curvature={75}
        endYOffset={10}
        reverse
        gradientStartColor="#ef4444"
        gradientStopColor="#8b5cf6"
      />
    </div>
  );
}

export function AnimatedBeamCryptomath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[350px] w-full items-center justify-center overflow-hidden p-10 "
      ref={containerRef}
    >
      <div className="flex size-full max-h-[250px] max-w-2xl flex-col items-stretch justify-between z-10">
        {/* Top row with one button */}
        <div className="flex flex-row items-center justify-center">
          <Card ref={div1Ref}>Cryptography</Card>
        </div>

        {/* Middle row with center button */}
        <div className="flex items-center justify-center z-10 opacity-100">
          <Card
            ref={centerRef}
            isCenter={true}
            url={"https://cryptomath.emreaslan.dev/"}
            emoji="🔐"
            className={
              "font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 z-10"
            }
          >
            cryptomath.emreaslan.dev
          </Card>
        </div>

        {/* Bottom row with two buttons */}
        <div className="flex flex-row items-center justify-between">
          <Card ref={div2Ref}>Mathematics</Card>
          <Card ref={div3Ref}>Number Theory</Card>
        </div>
      </div>

      {/* AnimatedBeam bileşenlerini güncelle */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={centerRef}
        curvature={-75}
        endYOffset={-10}
        gradientStartColor={"#f59e0b"}
        gradientStopColor={"#6366f1"}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={centerRef}
        curvature={75}
        endYOffset={10}
        gradientStartColor={"#22c55e"}
        gradientStopColor={"#6366f1"}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={centerRef}
        curvature={75}
        endYOffset={10}
        reverse
        gradientStartColor={"#6366f1"}
        gradientStopColor={"#6366f1"}
      />
    </div>
  );
}
