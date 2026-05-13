const items = [
  {
    title: "Tu red empresarial siempre disponible",
    text: "Cuando llega tu cliente o el cierre del mes, hay conexión estable, sin caídas. No más explicaciones a tu equipo de por qué hoy no se puede trabajar.",
  },
  {
    title: "Tus cámaras siempre grabando",
    text: "Si pasa algo serio dentro de tu empresa, la grabación existe y se recupera en minutos. No promesas: discos certificados con retención mínima de 30 días.",
  },
  {
    title: "Un solo equipo responsable de todo",
    text: "Cableado, redes, cámaras y energía bajo el mismo contrato. Si algo se mueve, llamas a un número. Sin proveedores echándose la culpa.",
  },
  {
    title: "Precio cerrado, firmado por escrito",
    text: "Lo que cotizamos en 48 horas es lo que pagas. Si algo del alcance original sube de costo durante la obra, esa diferencia la asumimos nosotros.",
  },
  {
    title: "Equipos funcionando todos los días",
    text: "Tu operación no se aprende a vivir con cosas rotas. Cables certificados, cámaras de marca, UPS dimensionado a tus equipos críticos.",
  },
  {
    title: "Si algo falla, lo resolvemos nosotros",
    text: "12 meses de garantía sobre cada cable, cada cámara, cada equipo. Reemplazo en menos de 48 horas. Tu equipo no tiene que volverse técnico.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold">
          Lo que resolvemos por ti
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight leading-snug">
          Seis cosas que dejan de pasar en tu empresa cuando trabajamos
          contigo.
        </h2>

        <ol className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <li key={i} className="flex gap-4 sm:gap-5">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#0E9F6E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth={1.5}
                    className="text-[#0E9F6E]/30"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12l3 3 5-6"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#0B2A4A] text-base sm:text-lg leading-snug">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm sm:text-base text-[#4d4d4d] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 sm:mt-12 border-l-4 border-[#00B4D8] pl-4 sm:pl-5">
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-[#0B2A4A] leading-snug">
            Una sola empresa. Un solo contrato. Un solo responsable.
          </p>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-[#4d4d4d]">
            Esa es la diferencia entre coordinar cuatro proveedores y operar
            tranquilo durante años.
          </p>
        </div>
      </div>
    </section>
  );
}
