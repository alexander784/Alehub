import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

interface Contact {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href?: string;
}

const contacts: Contact[] = [
  {
    icon: FaEnvelope,
    label: "alexanders7sg@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "+254 796097131",
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

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_260px] items-center gap-6 lg:gap-12">
          
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black font-bold mb-3">
              Data & Software Developer
            </p>

            <p className="text-[16px] leading-relaxed text-black/80 max-w-xl">
              Hi, my name is{" "}
              <span className="text-black font-semibold">
                Alexander Nyaga
              </span>{" "}
              I'm an engineer and entrepreneur building{" "}
              <span className="text-black font-bold">
                scalable digital products
              </span>{" "}
              and the{" "}
              <span className="text-black font-bold">
                data infrastructure
              </span>{" "}
              behind them. My work spans API and backend development,
              data pipelines, and venture building helping businesses
              turn technical ideas into lasting platforms.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end lg:pt-3">
            <div
              className="
                relative
                w-[160px]
                h-[200px]
                sm:w-[170px]
                sm:h-[220px]
                overflow-hidden
                rounded-3xl
                border border-black/10
                bg-white/5
                shadow-2xl
                shrink-0
              "
            >
              <img
                src="/images/Portf.jpg"
                alt="Alexander Nyaga"
                className="w-full h-full object-cover bg-rounded-3xl"
              />
            </div>
          </div>

        </div>

        <div>
          <h2 className="text-lg font-semibold text-black mb-4">
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
                    border border-black/10
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
                    text-black/70
                    hover:text-amber-400
                    transition-colors duration-300
                  "
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="text-black/70">
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