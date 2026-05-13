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
    href: "mailto:ga.nyaga7@gmail.com",
    label: "Email",
    value: "ga.nyaga7@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    href: "tel:+254796097131",
    label: "Phone",
    value: "+254 96097131",
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
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.65fr_0.35fr] gap-6 items-center">

      <div className="flex flex-col justify-start">

        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-400 mb-3">
          Data & Software Developer
        </p>

        <p className="mt-4 text-[16px] leading-relaxed text-white/70 max-w-3xl">
          Hi, My name is{" "}
          <strong className="text-white">
            Alexander Nyaga
          </strong>
          . I build scalable web applications, AI-powered systems,
          and modern user experiences using Python, React, Next.js,
          and cloud technologies.
        </p>

        <div className="mt-7">

          <h2 className="text-lg font-semibold text-white mb-4">
            Contacts
          </h2>
          <div className=" gap-x-8 gap-y-4">

            {contacts.map(({ icon: Icon, href, label, value }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3
                  text-white/70
                  hover:text-amber-400
                  transition-all duration-300
                "
              >

                <div
                  className="
                    min-w-[42px]
                    h-[42px]
                    rounded-lg
                    border border-white/10
                    bg-white/5
                    flex items-center justify-center
                  "
                >
                  <Icon size={14} />
                </div>

                <div className="overflow-hidden">
                  <span className="text-[12px] text-white/40 block">
                    {label}
                  </span>

                  <span className="text-sm text-white/80 break-all">
                    {value}
                  </span>
                </div>

              </a>
            ))}

          </div>
        </div>

        <div className="mt-7">
          <a
            href="#projects"
            className="
              inline-flex items-center
              px-5 py-2.5
              bg-amber-400
              text-black
              rounded-xl
              text-sm
              font-medium
              hover:bg-amber-300
              transition
            "
          >
            View Projects
          </a>
        </div>

      </div>

      <div className="flex justify-end lg:-mr-4">
        <div
          className="
            relative
            w-[240px]
            h-[320px]
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            shadow-2xl
          "
        >
          <img
            src="/images/profile.jpg"
            alt="Alexander Nyaga"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
</section>
  );
};

export default Home;