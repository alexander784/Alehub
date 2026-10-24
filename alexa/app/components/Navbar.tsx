"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bricolage_Grotesque } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });


const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BD4B0]";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `transition-colors hover:text-teal-700 ${focus} ${
      isActive(href)
        ? "text-teal-700 underline decoration-2 underline-offset-8"
        : "text-black/70"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-amber-50/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className={`${display.className} text-lg font-medium tracking-tight text-black ${focus}`}
        >
          Alexander Nyaga
        </Link>

        <ul className="hidden items-center gap-8 text-base md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={linkClass(l.href)}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href=""
              className="text-black"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`md:hidden ${focus}`}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="space-y-4 border-t border-black/10 px-6 py-5 md:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={linkClass(l.href)}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href=""
              className={`font-medium text-black ${focus}`}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};
