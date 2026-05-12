import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/logo.png"
            alt="ATCE Technology"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm text-[#4d4d4d] max-w-xs leading-relaxed">
            Tecnología que sí sirve, para negocios que no pueden parar.
            CDMX y todo México.
          </p>
          <p className="mt-3 text-xs text-[#6b6b6b]">RFC: ATE211110EU2</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0B2A4A]">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#2B2F36]">
            <li>
              <a
                href="https://wa.me/525511559904"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00B4D8]"
              >
                WhatsApp / Tel: 55 1155 9904
              </a>
            </li>
            <li>
              <a
                href="mailto:atcetechnology@gmail.com"
                className="hover:text-[#00B4D8] break-all"
              >
                atcetechnology@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/atcetechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00B4D8]"
              >
                Instagram: @atcetechnology
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0B2A4A]">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#2B2F36]">
            <li>
              <a href="/privacidad" className="hover:text-[#00B4D8]">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="/terminos" className="hover:text-[#00B4D8]">
                Términos de Servicio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-[#6b6b6b]">
          © 2026 ATCE Technology. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
