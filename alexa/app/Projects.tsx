import React from "react"

const projects = [
  {
    title: "Weather ETL Pipeline with Airflow & Docker",
    tag: "Python Data Eng, Airflow ",
    desc: "A production ready data pipeline that automatically fetches weather data from WeatherStack API, processes it, and stores it in PostgreSQL all orchestrated by Apache Airflow and containerized with Docker.",
    link: "https://github.com/alexander784/Weather_pipeline",
    img: "/images/data pipeline.png",
  },

   {
    title: "Soil Analysis Web Application",
    tag: "Python ·Random Forest  AI Bots webhooks ",
    desc: "This is a Django-based web application for analyzing soil data, predicting soil quality, and providing AI-driven crop suggestions. It features a user-friendly interface with a file upload system, interactive visualizations, and a chatbot powered by a reinforcement learning (RL) agent.",
    link: "https://github.com/alexander784/Soil_Analysis",
    img: "/images/Soil Anal.png",
  },
  {
    title: "Class Pair",
    tag: "React Python ",
    desc: "A system that randomly pairs up students according to their performances keeps track of each pair and changes weekly.",
    link: "https://moringa-pair-beta.vercel.app/",
    img: "/images/class pair.png",
  },
 
  {
    title: "Whatsapp Chatbot",
    tag: "django ·Twilio API Bot",
    desc: "A sleek, user-friendly WhatsApp chatbot built with Django to streamline booking management. Create, check, or cancel bookings effortlessly through an intuitive menu-driven conversation flow.",
    link: "https://github.com/alexander784/Whatsapp_bot",
    img: "/images/opensched.png",
  },
]

const Projects = () => {
  return (

    <section id="projects" className="px-[6vw] py-10 flex flex-col gap-16 border-t border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">
          Projects
        </h2>
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