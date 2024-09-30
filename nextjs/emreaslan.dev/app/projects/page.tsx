import React from "react";
import { ProjectsCard } from "@/components/projects-card";
import TechStackTooltip from "@/components/tech-stack-tooltip";

function ProjectsPage() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-300">
          Projects
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mt-2">
          A collection of projects I've worked on
        </p>
      </div>

      <ProjectsCard />
    </div>
  );
}

export default ProjectsPage;
