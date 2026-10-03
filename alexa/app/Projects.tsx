import React from "react";

const projects = [

  //  {
  //   title: "Twilio + NLP AI WhatsApp Chatbot",
  //   tag: "Django · Twilio API · Bot",
  //   desc: "Automates booking interactions through WhatsApp, reducing the need for manual booking coordination",
  //   link: "https://github.com/alexander784/Whatsapp_bot",
  //   img: "/images/twilio.png",
  // },

   {
    title: "Charisma Constructions",
    tag: "Nextjs,Typescript AWS",
    desc: "",
    link: "https://construction-omega-drab.vercel.app/",
    img: "/images/port.png",
  },

  {
    title: "Student ID Replacement System",
    tag: "Django ·Nextjs AWS",
    desc: "Digitizes the student ID replacement workflow, replacing a manual process with a centralized system for submissions and administrative decisions",
    link: "https://github.com/alexander784/Replacing",
    img: "/images/portal.png",
  },

  {
    title: "Weather ETL Pipeline with Airflow & Docker",
    tag: "Python Data Eng, Airflow",
    desc: "A production ready data pipeline that automatically fetches weather data from WeatherStack API, processes it, and stores it in PostgreSQL.",
    link: "https://github.com/alexander784/Weather_pipeline",
    img: "/images/data pipeline.png",
  },

  {
    title: "Soil Analysis Web Application",
    tag: "Python · Random Forest · AI Bots",
    desc: "Django-based web application for analyzing soil data and providing AI-driven crop suggestions.",
    link: "https://github.com/alexander784/Soil_Analysis",
    img: "/images/Soil Anal.png",
  },

  {
    title: "Class Pair",
    tag: "React · Python",
    desc: "A system that randomly pairs up students according to their performances.",
    link: "https://moringa-pair-beta.vercel.app/",
    img: "/images/class pair.png",
  },

 
   {
    title: "Dockerized Django Authentication system",
    tag: "Docker · Django · jwt · Python",
    desc: "A containerized Django authentication system built with PostgreSQL and Docker. The project includes secure user registration, login, logout, and admin authentication features, designed for scalable deployment and streamlined development using Docker Compose. Built with Django’s built-in authentication framework and optimized for easy setup in modern development environments.",
    link: "https://github.com/alexander784/django_auth-with-docker",
    img: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-[6vw] py-16 border-t border-white/10 bg-amber-50"
    >
      <h2 className="text-3xl font-bold text-black mb-12 text-center">
        Proof of impact
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-2xl
              overflow-hidden
              border border-white/10
              bg-white/5
              backdrop-blur-sm
              hover:border-amber-400/40
              hover:-translate-y-2
              transition-all
              duration-300
              shadow-lg
            "
          >
            <div className="w-full h-52 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black">
                {p.tag}
              </p>

              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black transition-colors">
                {p.title}
              </h3>

              <p className="text-sm leading-relaxed text-black/70">
                {p.desc}
              </p>

              <span className="text-sm text-black mt-2">
                View Project →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;