import React from "react";
import Terminal from "@/components/terminal";
import Container from "@/components/container";
import { info } from "@/info/index";
function AboutPage() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p className="text-gray-300">
          <span className="text-teal-400">
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about {firstName}
        </p>
        <p className="text-gray-300">
          <span className="text-teal-400">
            about{firstName} <span className="text-green-500">(main)</span> $
          </span>{" "}
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p className="text-gray-300">
          <span className="text-teal-400">
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p className="text-gray-300">
          <span className="text-teal-400">
            skills/tools <span className="text-green-500">(main)</span> $
          </span>{" "}
          ls
        </p>
        <p className="text-teal-400 mb-2">Tech Stack</p>
        <ul className=" pl-5 grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {info.skills.proficientWith.map((proficiency, index) => (
            <li
              key={index}
              className="text-gray-200 transition-transform hover:translate-y-[-3px]"
            >
              {proficiency}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p className="text-gray-300">
          <span className="text-teal-400">
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p className="text-gray-300">
          <span className="text-teal-400">
            hobbies/interests <span className="text-green-500">(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-5 pt-3">
          {info.hobbies.map((hobby, index) => (
            <li
              key={index}
              className="text-gray-200 transition-transform hover:translate-y-[-2px]"
            >
              <span className="mr-2">{hobby.emoji}</span>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Container maxWidth="max-w-4xl flex flex-col items-center justify-center mt-8">
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Container>
  );
}

export default AboutPage;
