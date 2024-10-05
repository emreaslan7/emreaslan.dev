import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center pb-3 pt-12 opacity-70 w-full">
      <p>
        created &hearts; by{" "}
        <Link
          target="_blank"
          href={"https://twitter.com/blockenddev"}
          rel="noreferrer"
          className="hover:underline font-bold mr-4"
        >
          emre aslan
        </Link>
      </p>
      <p>&copy; 2024</p>
    </footer>
  );
};
