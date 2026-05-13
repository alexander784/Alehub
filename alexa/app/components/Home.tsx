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
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-10">

  <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[1.2fr_260px] items-center gap-6 lg:gap-12">

    <div className="min-w-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-400 mb-3">
        Data & Software Developer
      </p>

      <p className="text-[15px] leading-relaxed text-white/70 max-w-xl">
        Hi, My name is{" "}
        <strong className="text-white">
          Alexander Nyaga
        </strong>
        . I build scalable web applications, AI-powered systems,<br/>
        and modern user experiences using Python, React, Next.js,
        and cloud technologies.
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
          src="/images/profile.jpg"
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

    <div className="flex flex-col gap-4">
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

</div>
    
</section>
  );
};

export default Home;