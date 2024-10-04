"use client";
import React, { useState } from "react";
import { colors } from "@/info/index";

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
    <div className="flex justify-center items-center py-8">
      <ul className="flex flex-wrap justify-center max-w-xl gap-2 px-2 py-2 md:gap-3 md:px-8">
        {tags.map((tag) => (
          <li
            key={tag}
            className={`text-center border border-teal-500/50 dark:border-gray-600 px-2 py-1 md:text-lg relative md:min-w-[100px] flex justify-center items-center rounded-lg select-none cursor-pointer hover:shadow hover:shadow-red-800 dark:hover:shadow-red-500 ${
              selectedTags.includes(tag)
                ? `bg-gradient-to-r from-[${colors[0]}] to-[${colors[1]}] text-white` // Seçilen etiketler için gradyan
                : "bg-gray-100/50 dark:bg-gray-700"
            }`}
            style={{
              borderColor: selectedTags.includes(tag)
                ? colors[0]
                : "rgba(0, 0, 0, 0.1)",
              transition: "border-color 0.3s, background-color 0.3s", // Geçiş efekti
            }}
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
