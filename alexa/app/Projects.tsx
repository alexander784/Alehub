import React from "react";

const projects = [
  {
    title: "Weather ETL Pipeline with Airflow & Docker",
    tag: "Python Data Eng, Airflow",
    desc: "A production ready data pipeline that automatically fetches weather data from WeatherStack API, processes it, and stores it in PostgreSQL all orchestrated by Apache Airflow and containerized with Docker.",
    link: "https://github.com/alexander784/Weather_pipeline",
    img: "/images/data pipeline.png",
  },

  {
    title: "Soil Analysis Web Application",
    tag: "Python · Random Forest · AI Bots · Webhooks",
    desc: "This is a Django-based web application for analyzing soil data, predicting soil quality, and providing AI-driven crop suggestions. It features a user-friendly interface with a file upload system, interactive visualizations, and a chatbot powered by a reinforcement learning (RL) agent.",
    link: "https://github.com/alexander784/Soil_Analysis",
    img: "/images/Soil Anal.png",
  },

  {
    title: "Class Pair",
    tag: "React · Python",
    desc: "A system that randomly pairs up students according to their performances, keeps track of each pair, and changes weekly.",
    link: "https://moringa-pair-beta.vercel.app/",
    img: "/images/class pair.png",
  },

  {
    title: "Twilio + NLP AI WhatsApp Chatbot",
    tag: "Django · Twilio API · Bot",
    desc: "A sleek, user-friendly WhatsApp chatbot built with Django to streamline booking management. Create, check, or cancel bookings effortlessly through an intuitive menu-driven conversation flow.",
    link: "https://github.com/alexander784/Whatsapp_bot",
    img: "/images/twilio.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-[6vw] py-16 flex flex-col gap-20 border-t border-white/10"
    >
      <h2 className="text-3xl font-bold text-white">Projects</h2>

      {projects.map((p, i) => {
        const isEven = i % 2 === 0;

        return (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center group ${
              !isEven ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
              <img
                src={p.img}
                alt={p.title}
                className="
                  w-full
                  h-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-[1.02]
                "
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400/70">
                {p.tag}
              </p>

              <h3 className="text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                {p.title}
              </h3>

              <p className="text-[15px] leading-relaxed text-white/70">
                {p.desc}
              </p>

              <span className="text-sm text-amber-400 mt-2 group-hover:translate-x-2 transition-transform duration-300">
                View Project →
              </span>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Projects;