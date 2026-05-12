import Image from "next/image";

const includes = [
  {
    item: "Diseño completo de tu red (planos, ubicación de cada punto, ruta de cableado)",
    value: "$35,000",
  },
  {
    item: "Cableado profesional certificado (cada punto probado y etiquetado)",
    value: "$1,200 por punto",
  },
  {
    item: "Cámaras 4K conectadas a tu red, con grabación de mínimo 30 días",
    value: "desde $85,000",
  },
  {
    item: "Control de acceso con huella o tarjeta para entradas y áreas restringidas",
    value: "desde $45,000",
  },
  {
    item: "Tu propia central telefónica (extensiones, transferencias, contestadora)",
    value: "desde $28,000",
  },
  {
    item: "Respaldo de energía para que un apagón no te tire la operación",
    value: "desde $18,000",
  },
];

const bonuses = [
  {
    title: "Revisión de seguridad a los 90 días",
    text: "Vamos personalmente a probar que todo siga funcionando.",
    value: "$12,000",
  },
  {
    title: "Soporte 24/7 los primeros 6 meses",
    text: "WhatsApp directo con un técnico, sin tickets ni espera.",
    value: "$24,000",
  },
  {
    title: "Manuales y planos de tu instalación",
    text: "Para que cualquier técnico futuro entienda lo que tienes.",
    value: "$8,000",
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

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight leading-snug">
          Esto es exactamente lo que entregamos en tu proyecto.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#4d4d4d] leading-relaxed">
          Sin paquetes confusos. Sin “extras” después. Lo que ves aquí, es lo
          que firmas.
        </p>

        {/* Includes */}
        <div className="mt-8 sm:mt-10 bg-white border border-gray-200">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex justify-between text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#4d4d4d]">
            <span>Lo que recibes</span>
            <span className="text-right">Lo que cuesta normalmente</span>
          </div>
          <ul>
            {includes.map((row) => (
              <li
                key={row.item}
                className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100 last:border-b-0 flex gap-4 sm:gap-6 justify-between items-start"
              >
                <span className="text-sm sm:text-base text-[#2B2F36] flex-1 leading-snug">
                  {row.item}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#0B2A4A] whitespace-nowrap">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bonuses */}
        <div className="mt-8 sm:mt-10 bg-[#E8F5EE] border-l-4 border-[#0E9F6E] p-5 sm:p-7">
          <p className="font-bold text-[#0B2A4A] uppercase tracking-wider text-xs sm:text-sm">
            Bonos sin costo extra (solo si firmas este mes)
          </p>
          <ul className="mt-4 sm:mt-5 space-y-4">
            {bonuses.map((b) => (
              <li
                key={b.title}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2"
              >
                <div>
                  <p className="font-semibold text-[#0B2A4A] text-sm sm:text-base">
                    {b.title}
                  </p>
                  <p className="text-[#4d4d4d] text-xs sm:text-sm">{b.text}</p>
                </div>
                <p className="font-bold text-[#0E9F6E] text-sm sm:text-base whitespace-nowrap">
                  Valor: {b.value}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Savings */}
        <div className="mt-8 sm:mt-10 bg-white border border-gray-200 p-5 sm:p-7">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#4d4d4d]">
            Cuánto te ahorras en realidad
          </p>
          <table className="mt-4 sm:mt-5 w-full text-left">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-sm sm:text-base text-[#2B2F36] pr-3">
                  Todo lo anterior al precio normal del mercado
                </td>
                <td className="py-3 text-sm sm:text-base font-bold text-[#0B2A4A] text-right whitespace-nowrap">
                  $303,000
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 text-sm sm:text-base text-[#2B2F36] pr-3">
                  Tu inversión real con ATCE (proyecto promedio 40 puntos)
                </td>
                <td className="py-3 text-sm sm:text-base font-bold text-[#0B2A4A] text-right whitespace-nowrap">
                  desde $185,000
                </td>
              </tr>
              <tr className="bg-[#0B2A4A] text-white">
                <td className="py-3 px-3 text-sm sm:text-base font-bold">
                  Lo que te ahorras
                </td>
                <td className="py-3 px-3 text-sm sm:text-base font-bold text-right whitespace-nowrap">
                  $118,000
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm italic text-[#6b6b6b] leading-relaxed">
            No es descuento ni promoción. Es lo que cuesta cuando un solo equipo
            hace todo en vez de cuatro proveedores cobrándote por separado.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="#cotizacion"
            className="inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-[#0B2A4A] text-white font-semibold hover:bg-[#0A203C] transition"
          >
            Quiero mi cotización en 48h
          </a>
        </div>
      </div>
    </section>
  );
}
