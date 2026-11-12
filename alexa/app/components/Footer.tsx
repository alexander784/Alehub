import { Bricolage_Grotesque } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

const EMAIL = "alexanders7sg@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Free consultation request"
)}`;

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BD4B0]";

const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-sky-950">
      <div className="mx-auto max-w-5xl px-6 pt-16 md:pt-20">
        <h2
          className={`${display.className} max-w-2xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl`}
        >
          Let&apos;s build something that lasts.
        </h2>

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
          Tell me about your idea and I&apos;ll help you work out the right
          foundation.
        </p>

        <a
          href={MAILTO}
          className={`mt-8 inline-block font-medium underline decoration-teal-700 decoration-2 underline-offset-8 ${focus}`}
        >
          Book a free consultation
        </a>
      </div>

      <div className="mx-auto mt-16 max-w-5xl border-t border-black/10 px-6 py-6">
        <p className="text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Alexander Nyaga
        </p>
      </div>
    </footer>
  );
};

export default Footer;