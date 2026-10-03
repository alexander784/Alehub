import React from "react"

const experience = [
  {
    role: "Software Developer",
    company: "Buntu labs",
    period: "08-12-2024 – 01-03-2025",
    desc: [
      "Integrated frontend features with REST APIs, handling authentication and role-based views (patient, doctor, admin).",
      "Implemented secure display of sensitive health data across the platform.",
      "Developed responsive, accessible patient and doctor interfaces for a telehealth platform using React/Next.js and TypeScript.",
      "Built appointment booking, consultation, and Q&A flows.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Truck Tech Investments",
    period: "2025 – 2026",
    desc: [
      "Developed a responsive e-commerce platform using Next.js, Django, PostgreSQL, and AWS.",
      "Supported online payments, inventory management, and order processing for 1,000+ products.",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-10 flex flex-col items-start bg-amber-50">
      <div className="ul max-w-4xl w-full ml-auto pr-[6vw] md:pr-[12vw]">
        <h2 className="text-2xl font-bold text-black mb-6">
          Professional Experience
        </h2>

        <div className="w-full flex flex-col gap-6">
          {experience.map((job, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[200px_1px_1fr] gap-6 py-6"
            >
              <div className="text-right md:text-right">
                <p className="font-mono text-[11px] uppercase tracking-widest text-black/40">
                  {job.period}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-black font-bold mt-1">
                  {job.company}
                </p>
              </div>

              <div className="hidden md:block w-px bg-black/15"></div>

              <div>
                <h3 className="text-lg tracking-tight text-black">{job.role}</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm text-black/60 leading-relaxed max-w-[60ch] marker:text-black/30">
                  {job.desc.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience