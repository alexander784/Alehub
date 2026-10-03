// app/page.tsx  (Next.js App Router + TypeScript + Tailwind)
import type { Metadata } from "next";
import type React from "react";
import Image from "next/image";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Alexander Nyaga | Software & Data Engineer",
  description:
    "I build scalable platforms and the data infrastructure behind them: APIs, backends and pipelines that hold up under real customers.",
};

const display = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const EMAIL = "alexanders7sg@gmail.com";
const PHONE_DISPLAY = "+254 796097131";
const PHONE_LINK = "+254796097131";
const GITHUB = "https://github.com/alexander784";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "I'd like to build something with you"
)}`;

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BD4B0]";

const contactLink = `inline-flex items-center gap-3 transition-colors hover:text-teal-700 ${focus}`;

// Inline SVG icons (no extra package needed)
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-teal-700"
    >
      {children}
    </svg>
  );
}

const MailIcon = () => (
  <Icon>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);

const GithubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);

export default function Welcome() {
  return (
    <main className={`${body.className} min-h-screen bg-amber-50 text-black`}>
      <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 py-16 md:grid-cols-[1fr_auto] md:py-28">
        {/* Left: pitch */}
        <div>
          <p className="text-base text-black/60">
           Data &amp; Software Developer
          </p>

          <h1
            className={`${display.className} mt-6 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-black md:text-7xl`}
          >
            Your idea is ready. Is your tech?
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-black">
            I build platforms that{" "}
            <span className="text-teal-700">handle real customers,</span> real
            payments and real data without breaking. APIs, backends and data
            pipelines designed to scale from day one so you never pay for a
            rebuild.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={MAILTO}
              
              className={`font-medium underline decoration-teal-700 decoration-2 underline-offset-8 ${focus}`}
            >
              Tell me what you&apos;re building
            </a>
            
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/Portf.jpg"
            alt="Alexander Nyaga"
            width={288}
            height={288}
            priority
            className="h-56 w-56 rounded-full object-cover md:h-72 md:w-72"
          />

          <ul className="mt-6 space-y-3 text-base text-black/70">
            <li>
              <a href={`mailto:${EMAIL}`} className={contactLink}>
                <MailIcon />
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_LINK}`} className={contactLink}>
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLink}
              >
                <GithubIcon />
                github.com/alexander784
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}