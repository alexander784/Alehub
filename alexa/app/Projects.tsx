import React from "react"

const projects = [
  {
    title: "Weather ETL Pipeline with Airflow & Docker",
    tag: "Python Data Eng, Airflow ",
    desc: "A production ready data pipeline that automatically fetches weather data from WeatherStack API, processes it, and stores it in PostgreSQL all orchestrated by Apache Airflow and containerized with Docker.",
    link: "https://github.com/alexander784/Weather_pipeline",
    img: "/images/invoicely.png",
  },
  {
    title: "Moodboard AI",
    tag: "AI · React · OpenAI",
    desc: "Generate curated visual moodboards from a single text prompt using GPT-4 Vision.",
    link: "#",
    img: "/images/moodboard.png",
  },
  {
    title: "TrailMap",
    tag: "Mobile · React Native · Maps",
    desc: "Offline-capable hiking trail app with GPX tracking and community route sharing.",
    link: "#",
    img: "/images/trailmap.png",
  },
  {
    title: "OpenSched",
    tag: "Open Source · TypeScript",
    desc: "A zero-dependency scheduling library with cron syntax support. 1.2k GitHub stars.",
    link: "#",
    img: "/images/opensched.png",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="px-[6vw] py-10 flex flex-col gap-16 border-t border-white/10">
      {projects.map((p, i) => {
        const isEven = i % 2 === 0

        return (
          <a
            key={i}
            href={p.link}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center group ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full h-60 md:h-48 rounded-md overflow-hidden bg-white/5 border border-white/10">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-normal tracking-tight group-hover:text-amber-400 transition-colors">
                {p.title}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-amber-400/70">
                {p.tag}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          </a>
        )
      })}
    </section>
  )
}

export default Projects