import React from "react"
const articles = [
  {
    title: "Building a Next.js SaaS Dashboard",
    publisher: "Dev.to",
    date: "Jan 2025",
    desc: "Step-by-step guide to creating a fast, scalable dashboard in Next.js with Tailwind CSS and React Hooks.",
    link: "#",
  },
  {
    title: "Optimizing React Performance",
    publisher: "Medium",
    date: "Dec 2024",
    desc: "Techniques to improve performance in large React applications including memoization, code splitting, and lazy loading.",
    link: "#",
  },
  {
    title: "Design Systems for Startups",
    publisher: "Hashnode",
    date: "Oct 2024",
    desc: "How to implement a lightweight, reusable design system for small product teams without slowing development.",
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
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">
                {a.publisher} · {a.date}
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