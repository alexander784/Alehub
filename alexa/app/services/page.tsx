import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Services | Alexander Nyaga",
  description:
    "Backend development, web applications, data engineering, cloud deployment and AI integrations, built to run reliably long after launch.",
};

const display = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const EMAIL = "alexanders7sg@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Project enquiry"
)}`;

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BD4B0]";

const link = `font-medium underline decoration-teal-700 decoration-2 underline-offset-8 ${focus}`;

const stack = [
  {
    name: "Django / Python",
    text: "Secure backends, REST APIs, admin tooling and multi-tenant SaaS platforms with clean, maintainable code.",
  },
  {
    name: "Next.js / React",
    text: "Fast, SEO-friendly frontends and dashboards written in TypeScript, built around how your users actually work.",
  },
  {
    name: "PostgreSQL & Data",
    text: "Well-modelled databases, ETL pipelines and reporting layers that turn raw data into decisions.",
  },
  {
    name: "AWS & CI/CD",
    text: "Deployments on EC2 and RDS with automated pipelines, so shipping a change is routine, not risky.",
  },
];

const services = [
  {
    cmd: "build --backend",
    title: "Backend & API development",
    text: "Robust APIs, authentication, payments and business logic that handle real customers and real transactions.",
  },
  {
    cmd: "build --webapp",
    title: "Full-stack web applications",
    text: "From MVP to production: dashboards, portals, POS and booking systems with a polished interface on top.",
  },
  {
    cmd: "build --pipeline",
    title: "Data engineering & analytics",
    text: "Pipelines, warehouses and dashboards in Python, SQL, Power BI or Tableau, so your numbers are trusted and current.",
  },
  {
    cmd: "deploy --cloud",
    title: "Cloud setup & deployment",
    text: "Production hosting on AWS, CI/CD, monitoring and backups, set up properly the first time.",
  },
  {
    cmd: "integrate --ai --api",
    title: "AI & third-party integrations",
    text: "Connect AI models, payment gateways and external services into your product without brittle glue code.",
  },
  {
    cmd: "launch --saas",
    title: "SaaS & MVP builds",
    text: "Turn an idea into a working, billable product, with an architecture that won't need a rebuild at your first hundred customers.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We talk through your goals, users and constraints, and agree on what to build first.",
  },
  {
    step: "02",
    title: "Design",
    text: "I map the architecture, data model and milestones so there are no surprises later.",
  },
  {
    step: "03",
    title: "Build",
    text: "Work ships in small, reviewable increments. You see progress, not promises.",
  },
  {
    step: "04",
    title: "Launch & support",
    text: "Deployment, handover and ongoing support, so the system keeps working after go-live.",
  },
];

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Custom web platforms, APIs, SaaS products, data pipelines and dashboards. If it involves a backend, a database or data that needs to be reliable, it's likely a fit.",
  },
  {
    q: "Do you work with early-stage founders?",
    a: "Yes. I help founders scope an MVP, choose a sensible stack and build something that can grow without a rewrite.",
  },
  {
    q: "How do you choose the tech stack?",
    a: "By the problem, not by habit. I use Django, Next.js and PostgreSQL where they fit, and I'll say so plainly if something else suits your project better.",
  },
  {
    q: "Can you work on an existing codebase?",
    a: "Yes. I take on upgrades, bug fixing, performance work and new features on existing Django and Next.js projects.",
  },
  {
    q: "How does pricing and timing work?",
    a: "After a short discovery call I send a clear scope with a timeline and price. The first conversation is free.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className={`${body.className} bg-amber-50 text-black`}>
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          {/* Hero */}
          <Link href="/" className={`text-sm text-black/60 hover:text-teal-700 ${focus}`}>
            &larr; Back home
          </Link>

          <p className="mt-10 text-base text-black/60">Services</p>
          <h1
            className={`${display.className} mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-5xl`}
          >
            Building the systems your business runs on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/80">
            Backends, web applications, data pipelines and cloud infrastructure,
            chosen to fit the problem and built to{" "}
            <span className="text-teal-700">keep working long after launch.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={MAILTO} className={link}>
              Start a project
            </a>
            <Link href="/portfolio" className={`text-black/70 hover:text-teal-700 ${focus}`}>
              See my work
            </Link>
          </div>

          
          <section className="mt-24">
            <p className="text-base text-black/60">What you get</p>
            <h2
              className={`${display.className} mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl`}
            >
              Beyond the framework, here&apos;s what actually ships.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-lg border border-black/10 p-6 transition-colors hover:border-teal-700/50"
                >
                  <p className="font-mono text-sm text-teal-700">$ {s.cmd}</p>
                  <h3 className={`${display.className} mt-3 text-xl font-medium`}>
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-black/70">{s.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <p className="text-base text-black/60">How we work</p>
            <h2
              className={`${display.className} mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl`}
            >
              A clear process from first call to launch.
            </h2>

            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {process.map((p) => (
                <li key={p.step} className="border-t border-black/10 pt-5">
                  <span className="font-mono text-sm text-teal-700">{p.step}</span>
                  <h3 className={`${display.className} mt-2 text-xl font-medium`}>
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-black/70">{p.text}</p>
                </li>
              ))}
            </ol>
          </section>

          
          <section className="mt-24">
            <h2
              className={`${display.className} max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl`}
            >
              Have a specific requirement?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black/80">
              Tell me what you&apos;re building and I&apos;ll tell you honestly
              which approach fits.
            </p>
            <a href={MAILTO} className={`mt-8 inline-block ${link}`}>
              Start a project
            </a>
          </section>
        </div>
      </main>
    </>
  );
}