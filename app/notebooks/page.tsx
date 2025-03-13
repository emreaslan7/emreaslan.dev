"use client";
import React from "react";
import {
  AnimatedBeamAI,
  AnimatedBeamCryptomath,
} from "@/components/animated-beams";

const NotebooksPage = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-300">
          Notebooks
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mt-2 text-center">
          Explore technical notebooks cover structured notes, quizzes, exams,
          and practical applications in AI, cryptography and more...
        </p>
      </div>
      <AnimatedBeamAI />

      <AnimatedBeamCryptomath />
    </div>
  );
};

export default NotebooksPage;
