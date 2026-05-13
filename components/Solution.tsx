import Image from "next/image";

export default function Solution() {
  return (
    <section className="bg-[#0B2A4A] text-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
            Una sola empresa. Un solo contrato. Un solo número al que llamar.
          </h2>
          <div className="mt-5 sm:mt-7 space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed">
            <p>
              ATCE diseña, presupuesta, instala y deja operando la
              infraestructura de telecomunicaciones de tu empresa: cableado
              estructurado, redes de voz y datos, videovigilancia, telefonía IP
              y sistemas de respaldo de energía.
            </p>
            <p>
              Tú firmas una vez. Nosotros respondemos por todo, por 12 meses,
              por escrito.
            </p>
            <p className="font-semibold text-white">
              Si algo se cae, llamas a un número. No buscas culpables. Lo
              arreglamos.
            </p>
          </div>
          <a
            href="#servicios"
            className="inline-flex items-center mt-6 sm:mt-8 h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base bg-[#00B4D8] text-[#0A203C] font-semibold hover:brightness-110 transition"
          >
            Ver nuestras líneas de servicio
          </a>
        </div>

        <div className="relative h-72 sm:h-96 lg:h-[520px] w-full flex items-center justify-center">
          <Image
            src="/clientes/antes-despues-rack-cableado.jpg"
            alt="Antes y después de un rack de redes profesional"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
