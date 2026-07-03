import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    label: "alexanders7sg@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "+254 796097131",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/alexander784",
    label: "GitHub",
  },
];

const Home = () => {
  return (
    <section className="flex items-start px-[5vw] pt-2 pb-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-10">
        
        <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[1.2fr_260px] items-center gap-6 lg:gap-12">
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-400 mb-3">
              Data & Software Developer
            </p>

            <p className="text-[15px] leading-relaxed text-white/70 max-w-xl">
              Hi, my name is{" "}
              <span className="text-white font-semibold">
                Alexander Nyaga
              </span>
              . I am a developer and problem solver specializing in SaaS and
              AI powered products from API integrations to full scale platforms
              built for long term impact. I turn complex ideas into clean,
              scalable solutions that ship and endure.
            </p>
          </div>

          <div className="flex justify-end lg:pt-3">
            <div
              className="
                relative
                w-[120px]
                h-[150px]
                sm:w-[170px]
                sm:h-[220px]
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                shadow-2xl
                shrink-0
              "
            >
              <img
                src="/images/Portf.jpg"
                alt="Alexander Nyaga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Contacts
          </h2>

          <div className="flex flex-wrap gap-3">
            {contacts.map(({ icon: Icon, href, label }) => {
              const content = (
                <div
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    border border-white/10
                    bg-white/5
                  "
                >
                  <Icon size={14} />
                  <span className="text-sm">{label}</span>
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white/70
                    hover:text-amber-400
                    transition-colors duration-300
                  "
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="text-white/70"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;