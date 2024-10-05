import React from "react";
import { SiHashnode } from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

function SocialIcon() {
  return (
    <div className="flex gap-8 text-4xl">
      <Link
        target="_blank"
        href="https://twitter.com/blockenddev"
        rel="noreferrer"
        className="hover:text-gray-400 transition-colors duration-200"
      >
        <FaXTwitter />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/emreaslan7"
        rel="noreferrer"
        className="hover:text-gray-400 transition-colors duration-200"
      >
        <FaGithub />
      </Link>
      <Link
        target="_blank"
        href="https://emreaslan.hashnode.dev/"
        rel="noreferrer"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        <SiHashnode />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/emreaslan7/"
        rel="noreferrer"
        className="hover:text-blue-600 transition-colors duration-200"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
}

export default SocialIcon;
