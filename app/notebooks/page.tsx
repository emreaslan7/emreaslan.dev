import React from "react";
import Link from "next/link";

const notebooks = [
  { id: 1, title: "Notebook 1", description: "Description for Notebook 1" },
  { id: 2, title: "Notebook 2", description: "Description for Notebook 2" },
  { id: 3, title: "Notebook 3", description: "Description for Notebook 3" },
  { id: 4, title: "Notebook 4", description: "Description for Notebook 4" },
];

const NotebooksPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Notebooks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 justify-items-center">
        {notebooks.map((notebook) => (
          <div
            key={notebook.id}
            className="border p-4 rounded shadow-md w-full max-w-xs"
          >
            <h2 className="text-xl font-semibold">{notebook.title}</h2>
            <p className="text-gray-600">{notebook.description}</p>
            <Link href={`/notebooks/${notebook.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotebooksPage;
