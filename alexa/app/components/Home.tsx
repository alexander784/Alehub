import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const contacts = [
  { icon: FaGithub, href: "https://github.com/yourname", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/yourname", label: "Twitter" },
  { icon: FaEnvelope, href: "mailto:hello@yourname.dev", label: "Email" },
]

const Home = () => {
  return (
    <section className="flex items-start justify-center px-[6vw] pt-16 pb-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
            Data & Software Developer
          </p>

          <h1 className="text-[clamp(2rem,4vw,3rem)] leading-tight font-medium">
            Crafting <span className="italic text-amber-400">digital</span> experiences.
          </h1>

          <p className="text-sm text-white/70 max-w-[40ch]">
            Hi, I'm <strong className="text-white">Alexander Nyaga</strong>. I build fast,
            accessible web apps with clean code and thoughtful UX.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {contacts.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded border border-white/15 text-white/60 hover:border-amber-400 hover:text-amber-400 transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="flex gap-3 pt-3">
            <a
              href="#projects"
              className="px-6 py-2 text-xs font-mono uppercase tracking-wider bg-amber-400 text-black rounded hover:bg-amber-300 transition"
            >
              Projects
            </a>
            <div>
              <h3>ga.nyaga7@gmail.com</h3>
            </div>


           
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[260px] h-[340px] rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/30 text-sm">
            Your Photo
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home