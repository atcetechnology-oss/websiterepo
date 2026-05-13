import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A203C] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-12 sm:py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="ATCE Technology"
              width={240}
              height={72}
              className="h-16 sm:h-20 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-extrabold text-xl tracking-tight">
                ATCE Technology
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-xs leading-relaxed">
            Cableado estructurado, videovigilancia, redes de voz y datos, y
            sistemas de respaldo de energía para empresas que no pueden parar.
            CDMX y todo México.
          </p>
          <p className="mt-3 text-xs text-white/50">RFC: ATE211110EU2</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#00B4D8]">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a
                href="https://wa.me/525511559904"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00B4D8] transition"
              >
                WhatsApp / Tel: 55 1155 9904
              </a>
            </li>
            <li>
              <a
                href="mailto:atcetechnology@gmail.com"
                className="hover:text-[#00B4D8] transition break-all"
              >
                atcetechnology@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/atcetechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00B4D8] transition"
              >
                Instagram: @atcetechnology
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#00B4D8]">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a href="/privacidad" className="hover:text-[#00B4D8] transition">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="/terminos" className="hover:text-[#00B4D8] transition">
                Términos de Servicio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-5 text-xs text-white/50">
          © 2026 ATCE Technology. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
