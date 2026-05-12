import Image from "next/image";

const navLinks = [
  { href: "#problema", label: "Cómo trabajamos" },
  { href: "#oferta", label: "Lo que hacemos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#faq", label: "Preguntas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B2A4A] border-b border-white/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/logo.png"
            alt="ATCE Technology"
            width={200}
            height={56}
            className="h-11 sm:h-14 w-auto transition group-hover:scale-105"
            priority
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-bold text-base tracking-tight">
              ATCE Technology
            </span>
            <span className="text-[#00B4D8] text-[10px] uppercase tracking-[0.18em] font-semibold">
              Tecnología que sí sirve
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-white/75">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/525511559904"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 h-10 text-sm font-medium text-white border border-white/30 hover:border-white hover:bg-white/5 transition"
          >
            WhatsApp
          </a>
          <a
            href="#cotizacion"
            className="inline-flex items-center px-3 sm:px-5 h-9 sm:h-10 text-xs sm:text-sm font-bold text-[#0A203C] bg-[#00B4D8] hover:brightness-110 transition whitespace-nowrap"
          >
            Cotización gratis
          </a>
        </div>
      </div>
    </header>
  );
}
