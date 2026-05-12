import Image from "next/image";

const navLinks = [
  { href: "#problema", label: "Cómo trabajamos" },
  { href: "#oferta", label: "Lo que hacemos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#faq", label: "Preguntas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="ATCE Technology"
            width={140}
            height={36}
            className="h-7 sm:h-9 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#4d4d4d]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[#0B2A4A] transition"
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
            className="hidden sm:inline-flex items-center px-4 h-10 text-sm font-medium text-[#0B2A4A] border border-[#0B2A4A]/20 hover:border-[#0B2A4A] transition"
          >
            WhatsApp
          </a>
          <a
            href="#cotizacion"
            className="inline-flex items-center px-3 sm:px-4 h-9 sm:h-10 text-xs sm:text-sm font-semibold text-white bg-[#0B2A4A] hover:bg-[#0A203C] transition whitespace-nowrap"
          >
            Cotización gratis
          </a>
        </div>
      </div>
    </header>
  );
}
