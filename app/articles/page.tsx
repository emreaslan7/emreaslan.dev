import React from "react";
import ArticlesCard from "@/components/article-card";
import Container from "@/components/container";

import { articles } from "@/info/articles";

function ArticlesPage() {
  // use map for articles

  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-300">
          Articles
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mt-2">
          A collection of articles I have written
        </p>
      </div>
      <Container maxWidth="max-w-6xl">
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
            {articles.map((article, index) => (
              <ArticlesCard
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
                link={article.link}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ArticlesPage;
