"use client";
import React, { useState } from "react";
import { ProjectsCard } from "@/components/projects-card";
import FilterTags from "@/components/filter-tags";
import { projects } from "@/info/projects";

function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"]); // Default olarak "All" seçili

  const handleTagChange = (tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-300">
          Projects
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mt-2">
          A collection of projects I've worked on
        </p>
      </div>
      <FilterTags onChange={handleTagChange} />
      <ProjectsCard selectedTags={selectedTags} />
    </div>
  );
}

export default ProjectsPage;
