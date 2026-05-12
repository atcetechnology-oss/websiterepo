import LeadForm from "./LeadForm";

export default function Cta() {
  return (
    <section id="cotizacion" className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-5 gap-8 lg:gap-10">
        <div className="lg:col-span-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight leading-snug">
            Recibe tu cotización en 48 horas.
            <br className="hidden sm:block" />
            <span className="sm:block"> Gratis. Sin que te vendamos nada que no necesitas.</span>
          </h2>
          <div className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#4d4d4d] space-y-3 leading-relaxed">
            <p>
              Un ingeniero — no un vendedor — revisa tu caso y te manda:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex gap-2">
                <span className="text-[#00B4D8]">—</span>
                <span>Plano preliminar de cómo quedaría tu instalación.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00B4D8]">—</span>
                <span>Lista clara de lo que incluye (y lo que no).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00B4D8]">—</span>
                <span>Precio cerrado por escrito.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00B4D8]">—</span>
                <span>Fecha de entrega que podemos firmar.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8">
            <LeadForm />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-2 bg-[#F4F6F8] p-6 sm:p-7 lg:p-8 h-fit">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-[#6b6b6b] font-semibold">
            ¿Prefieres hablar directo?
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#2B2F36]">
            Estas tres opciones llegan al mismo equipo.
          </p>

          <a
            href="https://wa.me/525511559904"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 sm:mt-6 inline-flex items-center justify-center w-full h-11 sm:h-12 px-5 text-sm sm:text-base bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold transition"
          >
            Escríbenos por WhatsApp
          </a>

          <div className="mt-5 sm:mt-6 space-y-4 text-[#2B2F36]">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6b6b6b]">
                Llamar
              </p>
              <a
                href="tel:+525511559904"
                className="text-sm sm:text-base font-semibold text-[#0B2A4A] hover:text-[#00B4D8]"
              >
                55 1155 9904
              </a>
              <p className="text-xs sm:text-sm text-[#6b6b6b]">Lun a Vie, 9:00 a 18:00</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6b6b6b]">
                Correo
              </p>
              <a
                href="mailto:atcetechnology@gmail.com"
                className="text-sm sm:text-base font-semibold text-[#0B2A4A] hover:text-[#00B4D8] break-all"
              >
                atcetechnology@gmail.com
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
