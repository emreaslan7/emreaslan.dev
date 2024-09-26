import React from "react";

function EmojiBullet(props: { emoji: string; text: string }) {
  const { emoji, text } = props;

  return (
    <li className="flex items-center text-base leading-6 cursor-default transition-transform hover:translate-y-[-2px]">
      <span className="mr-5 text-2xl" aria-label="emoji" role="img">
        {emoji}
      </span>
      {text}
    </li>
  );
}

export default EmojiBullet;
