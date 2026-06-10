import React from "react";

const articles = [
  {
    title: "A System Design Approach",
    desc: "A step by step guide to designing a scalable web application.",
    tags: ["System Design", "Architecture"],
    link: "https://medium.com/@ga.nyaga7/a-system-design-approach-0b43f1b3650c",
  },
  {
    title: "Deploying a Kubernetes App to AWS",
    desc: "Learn Kubernetes fundamentals and deploy a containerized application to AWS.",
    tags: ["Kubernetes", "AWS", "Docker"],
    link: "https://medium.com/@ga.nyaga7/deploying-a-kubernetes-app-to-aws-78b2e3889ff0",
  },
  {
    title: "Production Ready Weather ETL Pipeline",
    desc: "Building a complete ETL pipeline using Python, Airflow, Docker, and a data warehouse.",
    tags: ["Python", "Airflow", "Docker", "ETL"],
    link: "#",
  },
];

const Articles = () => {
  return (
    <section
      id="articles"
      className="px-[6vw] py-16 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          Articles
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {article.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {article.desc}
              </p>

              <span className="text-amber-400 text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                Read More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;