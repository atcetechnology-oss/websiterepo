const lines = [
  {
    title: "Cableado estructurado",
    subtitle: "UTP Cat6/6A y fibra óptica certificada",
    text: "Cada punto medido, instalado, etiquetado y certificado por escrito. El sistema nervioso de tu empresa, hecho para durar 15 años sin fallar.",
    icon: (
      <svg fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" d="M6 12h36M6 24h36M6 36h36" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <circle cx="36" cy="36" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Videovigilancia",
    subtitle: "Cámaras IP 4K y monitoreo continuo",
    text: "Cámaras de marca instaladas en los puntos críticos, grabando 24/7 con retención mínima de 30 días. Acceso remoto desde tu celular.",
    icon: (
      <svg fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <rect x="6" y="14" width="28" height="20" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M34 22l8-5v14l-8-5z" />
        <circle cx="20" cy="24" r="3" />
      </svg>
    ),
  },
  {
    title: "Redes de voz y datos",
    subtitle: "Cableadas e inalámbricas, telefonía IP",
    text: "Switches administrables, access points empresariales, centrales telefónicas IP con extensiones, transferencias y contestadora. Voz y datos en la misma red, sin caídas.",
    icon: (
      <svg fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <rect x="8" y="20" width="32" height="14" rx="1.5" />
        <circle cx="14" cy="27" r="1.2" fill="currentColor" />
        <circle cx="20" cy="27" r="1.2" fill="currentColor" />
        <circle cx="26" cy="27" r="1.2" fill="currentColor" />
        <circle cx="32" cy="27" r="1.2" fill="currentColor" />
        <path strokeLinecap="round" d="M16 20v-6m10 6v-6m10 6v-6M16 34v6m16-6v6" />
      </svg>
    ),
  },
  {
    title: "Respaldo de energía",
    subtitle: "UPS, reguladores y protección eléctrica",
    text: "Sistemas dimensionados a tus equipos críticos: rayos X, servidores, centrales telefónicas. Un apagón no detiene tu operación ni te quema un equipo de medio millón.",
    icon: (
      <svg fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M26 6L12 28h10l-2 14 14-22H24l2-14z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold">
            Líneas de servicio
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight leading-snug">
            Cuatro líneas. Un solo proveedor.
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#4d4d4d] leading-relaxed">
            Diseñamos, presupuestamos, instalamos y dejamos operando toda la
            infraestructura tecnológica de tu empresa. Bajo un solo contrato,
            con un solo responsable.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {lines.map((l) => (
            <article
              key={l.title}
              className="bg-[#0B2A4A] text-white p-6 sm:p-7 flex flex-col"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 text-[#00B4D8] mb-5">
                {l.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold leading-snug">
                {l.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#00B4D8] font-semibold">
                {l.subtitle}
              </p>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                {l.text}
              </p>
            </article>
          ))}
        </div>

        {/* Project cycle */}
        <div className="mt-12 sm:mt-16 bg-[#F4F6F8] p-6 sm:p-8 lg:p-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold">
            Cómo trabajamos cada proyecto
          </p>
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-[#0B2A4A] leading-snug max-w-3xl">
            Diseñamos, presupuestamos, instalamos y dejamos todo operando
            correctamente. Cuatro fases bajo un solo equipo.
          </p>
          <div className="mt-6 grid sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { n: "01", t: "Diseñamos", d: "Visita técnica, planos y alcance" },
              { n: "02", t: "Presupuestamos", d: "Precio cerrado en 48 horas" },
              { n: "03", t: "Instalamos", d: "Por etapas, sin parar tu operación" },
              { n: "04", t: "Operando", d: "Pruebas, capacitación y garantía" },
            ].map((s, i) => (
              <div key={s.n} className="flex sm:flex-col gap-3 sm:gap-0 items-start">
                <div className="hidden sm:flex items-center mb-3 w-full">
                  <div className="w-8 h-8 bg-[#0B2A4A] text-white text-xs font-bold flex items-center justify-center">
                    {s.n}
                  </div>
                  {i < 3 && <div className="flex-1 h-px bg-[#0B2A4A]/20 ml-2" />}
                </div>
                <div className="sm:hidden w-8 h-8 bg-[#0B2A4A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <p className="font-bold text-[#0B2A4A] text-sm sm:text-base">
                    {s.t}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4d4d4d] mt-0.5">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
