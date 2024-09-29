import React from "react";
import { FaCircle } from "react-icons/fa6";
function Terminal(props: { text: any }) {
  const { text } = props;

  return (
    <section className="shadow-md rounded-lg mb-16 w-full">
      <div className="bg-gray-600 p-2.5 rounded-t-lg text-sm flex justify-start gap-2">
        <FaCircle color="red" className="h-3 w-3" />
        <FaCircle color="orange" className="h-3 w-3" />
        <FaCircle color="#27C93F" className="h-3 w-3" />
      </div>
      <div className="py-4 px-6 rounded-b-lg bg-gray-800 xl:text-2xl text-lg  font-mono">
        {text}
      </div>
    </section>
  );
}

export default Terminal;
