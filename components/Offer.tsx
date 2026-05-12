import Image from "next/image";

const alwaysIncluded = [
  "Visita técnica a tu negocio para medir, fotografiar y entender qué necesitas",
  "Plano profesional con la ubicación exacta de cada punto de red y cámara",
  "Cableado certificado y probado, etiquetado punto por punto",
  "Equipos de marca (no clones) listados en tu contrato",
  "Pruebas con reporte por escrito antes de entregar",
  "Capacitación de tu equipo para que sepan usar lo que les dejamos",
];

const sizeRanges = [
  {
    label: "Pequeño negocio o local",
    range: "1 – 15 puntos",
    example:
      "Una sola planta, 3-4 áreas, cámaras en accesos. Internet interno y telefonía básica.",
    invest: "desde $80,000 MXN",
  },
  {
    label: "Empresa u oficina mediana",
    range: "16 – 40 puntos",
    example:
      "Varias áreas o pisos, cámaras 4K, central telefónica, control de acceso, respaldo de energía.",
    invest: "desde $185,000 MXN",
    highlight: true,
  },
  {
    label: "Corporativo o multi-sucursal",
    range: "40 – 100+ puntos",
    example:
      "Pisos múltiples o varias ubicaciones, redes separadas por área, servidor, redundancia, integración total.",
    invest: "desde $350,000 MXN",
  },
];

const bonuses = [
  {
    title: "Soporte 24/7 los primeros 6 meses",
    text: "WhatsApp directo con un técnico, sin tickets ni espera.",
  },
  {
    title: "Revisión post-instalación a los 90 días",
    text: "Vamos personalmente a probar que todo siga funcionando.",
  },
  {
    title: "Manuales, planos y contrato de garantía",
    text: "Para que cualquier técnico futuro entienda lo que tienes.",
  },
];

export default function Offer() {
  return (
    <section id="oferta" className="bg-[#F4F6F8] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative h-36 sm:h-48 lg:h-64 w-full mb-8 sm:mb-12">
          <Image
            src="/clientes/rack-patchpanel-cat6-completo.jpg"
            alt="Patch panel certificado"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold">
          Cómo funcionan los precios
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight leading-snug">
          Cuánto cuesta resolver tu caso depende de tu caso.
          <br className="hidden sm:block" />
          <span className="text-[#00B4D8]"> Y eso es justo lo que queremos saber primero.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#4d4d4d] leading-relaxed max-w-3xl">
          No vendemos paquetes prearmados. Cada negocio tiene un tamaño, un
          flujo y prioridades distintas — pretender que todos pagan lo mismo es
          de proveedor flojo. Lo que sí podemos prometerte:{" "}
          <strong className="text-[#0B2A4A]">
            te damos un precio cerrado por escrito en 48 horas, y ese precio no
            se mueve durante la obra.
          </strong>
        </p>

        {/* What's always included */}
        <div className="mt-10 sm:mt-12 bg-white border border-gray-200 p-6 sm:p-8">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-[#6b6b6b] font-semibold">
            Lo que siempre incluimos — sin importar el tamaño
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-4">
            {alwaysIncluded.map((item) => (
              <li key={item} className="flex gap-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-[#0E9F6E] mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-[#2B2F36] leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Three reference ranges */}
        <div className="mt-10 sm:mt-12">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-[#6b6b6b] font-semibold">
            Tres rangos para que te orientes
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#4d4d4d] max-w-2xl">
            Son referencias reales basadas en proyectos que hemos entregado.
            Tu precio exacto cambia según tu sitio, equipos y prioridades.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4 sm:gap-5">
            {sizeRanges.map((r) => (
              <div
                key={r.label}
                className={
                  r.highlight
                    ? "bg-[#0B2A4A] text-white p-6 sm:p-7 relative"
                    : "bg-white text-[#0B2A4A] p-6 sm:p-7 border border-gray-200"
                }
              >
                {r.highlight && (
                  <span className="absolute -top-3 left-6 bg-[#00B4D8] text-[#0A203C] text-[10px] sm:text-xs uppercase tracking-wider font-bold px-3 py-1">
                    El más común
                  </span>
                )}
                <p
                  className={
                    r.highlight
                      ? "text-[#00B4D8] text-[10px] sm:text-xs uppercase tracking-wider font-bold"
                      : "text-[#00B4D8] text-[10px] sm:text-xs uppercase tracking-wider font-bold"
                  }
                >
                  {r.range}
                </p>
                <h3
                  className={
                    r.highlight
                      ? "mt-2 text-lg sm:text-xl font-bold text-white leading-snug"
                      : "mt-2 text-lg sm:text-xl font-bold text-[#0B2A4A] leading-snug"
                  }
                >
                  {r.label}
                </h3>
                <p
                  className={
                    r.highlight
                      ? "mt-3 text-sm text-white/80 leading-relaxed"
                      : "mt-3 text-sm text-[#4d4d4d] leading-relaxed"
                  }
                >
                  {r.example}
                </p>
                <div
                  className={
                    r.highlight
                      ? "mt-5 pt-4 border-t border-white/15"
                      : "mt-5 pt-4 border-t border-gray-100"
                  }
                >
                  <p
                    className={
                      r.highlight
                        ? "text-[10px] sm:text-xs uppercase tracking-wider text-white/60"
                        : "text-[10px] sm:text-xs uppercase tracking-wider text-[#6b6b6b]"
                    }
                  >
                    Inversión típica
                  </p>
                  <p
                    className={
                      r.highlight
                        ? "mt-1 text-xl sm:text-2xl font-bold text-[#00B4D8]"
                        : "mt-1 text-xl sm:text-2xl font-bold text-[#0B2A4A]"
                    }
                  >
                    {r.invest}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs sm:text-sm italic text-[#6b6b6b] leading-relaxed">
            Si tu caso no entra en ninguno de estos rangos, también te cotizamos.
            Hemos trabajado con negocios de todos los tamaños y giros — desde
            despachos profesionales hasta corporativos multi-sucursal.
          </p>
        </div>

        {/* Bonuses always */}
        <div className="mt-10 sm:mt-12 bg-[#E8F5EE] border-l-4 border-[#0E9F6E] p-5 sm:p-7">
          <p className="font-bold text-[#0B2A4A] uppercase tracking-wider text-xs sm:text-sm">
            Lo que no cambia, sin importar el tamaño
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#2B2F36]">
            Estos tres bonos van incluidos en cualquier proyecto que firmemos:
          </p>
          <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
            {bonuses.map((b) => (
              <li key={b.title} className="flex gap-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-[#0E9F6E] mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[#0B2A4A] text-sm sm:text-base">
                    {b.title}
                  </p>
                  <p className="text-[#4d4d4d] text-xs sm:text-sm">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-[#4d4d4d] max-w-2xl mx-auto leading-relaxed">
            La única forma honesta de saber cuánto te va a costar tu proyecto
            es que un ingeniero vea tu sitio. Por eso esa visita —{" "}
            <strong className="text-[#0B2A4A]">y la cotización cerrada en 48 horas</strong>
            {" "}— son completamente gratis.
          </p>
          <a
            href="#cotizacion"
            className="mt-6 inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-[#0B2A4A] text-white font-semibold hover:bg-[#0A203C] transition"
          >
            Quiero mi precio cerrado
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
