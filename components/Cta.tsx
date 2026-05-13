import LeadForm from "./LeadForm";

export default function Cta() {
  return (
    <section id="cotizacion" className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-5 gap-8 lg:gap-10">
        <div className="lg:col-span-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold">
            Cotización gratis · 48 horas
          </p>
          <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-[#0B2A4A] tracking-tight leading-snug">
            Un ingeniero revisa tu caso y te manda plano, alcance, precio cerrado y fecha de entrega.
          </h2>

          <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
            {[
              "Plano preliminar de tu instalación",
              "Lista de lo que incluye y lo que no",
              "Precio cerrado por escrito",
              "Fecha de entrega que podemos firmar",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start text-sm sm:text-[15px] text-[#2B2F36] leading-snug">
                <svg
                  className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-[#0E9F6E] mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Handoff cue to form */}
          <div className="mt-7 sm:mt-8 flex items-center gap-3">
            <div className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-1.5 bg-[#00B4D8] text-[#0A203C] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 16l-6-6h12z" />
              </svg>
              Empieza aquí
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00B4D8] to-transparent" />
          </div>

          <div className="mt-4">
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
