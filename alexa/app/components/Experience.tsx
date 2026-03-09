import React from "react"

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "FGN Enterprises",
    period: "08-10-2025 – 07-02-2026 ",
    desc: "Led a team of 4 engineers building a design system used across 12 products. Reduced bundle size by 40%.",
  },
  {
    role: "Data Analyst",
    company: "Truck Tech Investments",
    period: "2021 – 2023",
    desc: "Built performant React dashboards for fintech clients, integrating real-time WebSocket data feeds.",
  },
  {
    role: "Junior Developer",
    company: "DevStudio",
    period: "2020 – 2021",
    desc: "Delivered pixel-perfect UI components and maintained legacy jQuery codebases during modernisation.",
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-[6vw] md:pl-[12vw] py-10 flex flex-col items-start"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Professional Experience
      </h2>

      <div className="w-full max-w-4xl flex flex-col gap-6">
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
    </section>
  )
}

export default Experience