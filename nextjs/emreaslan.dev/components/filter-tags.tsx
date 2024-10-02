"use client";
import React, { useState } from "react";

type FilterTagsProps = {
  onChange: (selectedTags: string[]) => void; // Yeni prop
};

const FilterTags: React.FC<FilterTagsProps> = ({ onChange }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]); // Default olarak "All" seçili

  const tags = [
    "All",
    "Hackathon",
    "Frontend",
    "Backend",
    "Web3",
    "Ethereum",
    "Learning",
    "Fullstack",
  ];

  const toggleTag = (tag: string) => {
    if (tag === "All") {
      setSelectedTags((prev) => (prev.includes("All") ? [] : ["All"]));
    } else {
      setSelectedTags((prev) => {
        if (prev.includes("All")) {
          return [tag];
        } else {
          return prev.includes(tag)
            ? prev.filter((t) => t !== tag)
            : [...prev, tag];
        }
      });
    }
  };

  if (selectedTags.length === 0) {
    setSelectedTags(["All"]);
  }

  // Seçilen tag'leri üst bileşene ilet
  React.useEffect(() => {
    onChange(selectedTags);
  }, [selectedTags, onChange]);

  return (
    <div className="flex justify-center items-center">
      <ul className="flex flex-wrap justify-center max-w-xl gap-2 px-2 py-2 md:gap-3 md:py-6 md:px-8">
        {tags.map((tag) => (
          <li
            key={tag}
            className={`text-center border border-teal-500/50 dark:border-gray-600 px-2 py-1 md:text-lg relative md:min-w-[100px] flex justify-center items-center rounded-lg select-none cursor-pointer hover:shadow hover:shadow-teal-500 dark:hover:shadow-teal-500 ${
              selectedTags.includes(tag)
                ? "bg-teal-500 text-white"
                : "bg-gray-100/50 dark:bg-gray-700"
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTags;
