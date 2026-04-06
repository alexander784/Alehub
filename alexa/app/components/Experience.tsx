import React from "react"

const experience = [
  {
    role: "Senior Fullstack Developer",
    company: "FGN Enterprises",
    period: "08-10-2025 – 07-02-2026 ",
    desc: "Designed and deployed a custom POS system that eliminated manual paperwork and optimized time management across daily business operations.",
  },
  {
    role: "Data Analyst",
    company: "Truck Tech Investments",
    period: "2021 – 2023",
    desc: "Analyzed sales trends and customer purchasing behavior to identify revenue growth opportunities, contributing to a 70% increase in monthly sales..",
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-10 flex flex-col items-start"
    >
      <div className="max-w-4xl w-full ml-auto pr-[6vw] md:pr-[12vw]">
        <h2 className="text-2xl font-bold text-white mb-6">
          Professional Experience
        </h2>

        <div className="w-full flex flex-col gap-6">
          {experience.map((job, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[200px_1px_1fr] gap-6 py-6"
            >
              <div className="text-right md:text-right">
                <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                  {job.period}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-amber-400 mt-1">
                  {job.company}
                </p>
              </div>

              <div className="hidden md:block w-px bg-white/15"></div>

              <div>
                <h3 className="text-lg tracking-tight">{job.role}</h3>
                <p className="text-sm text-white/60 leading-relaxed mt-1 max-w-[50ch]">
                  {job.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience