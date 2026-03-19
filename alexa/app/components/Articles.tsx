import React from "react"
const articles = [
  {
    title: "A System Design Approach",
    desc: "A step by step step to designing a scalable web application",
    link: "https://medium.com/@ga.nyaga7/a-system-design-approach-0b43f1b3650c",
  },
  {
    title: "Deploying a kubernetes App to AWS",
    desc: "In this article we successfully went through kubernetes it purpoise and eventually deployed a Kubernetes app to the AWS cloud.",
    link: "https://medium.com/@ga.nyaga7/deploying-a-kubernetes-app-to-aws-78b2e3889ff0",
  },
  {
    title: "production Ready Weather ETL Pipeline with Python,Airflow and Docker",
    desc: "Step followedin a data pipeline from Extraction of Data Transformation and loading into a database on warehouse ",
    link: "#",
  },
]
const Articles = () => {
  return (
    <section id="articles" className="px-[6vw] py-10 flex justify-center border-t border-white/10">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {articles.map((a, i) => (
          <a
            key={i}
            href={a.link}
            className="grid grid-cols-1 md:grid-cols-[220px_1px_1fr] gap-6 py-6 hover:text-amber-400 transition-colors"
          >
            <div className="text-right md:text-right">
              <p className="font-mono text-[11px] uppercase tracking-widest text-amber-400">
                {a.title}
              </p>
            </div>

            <div className="hidden md:block w-px bg-white/15"></div>

            <div>
              <p className="text-sm text-white/60 leading-relaxed">{a.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Articles