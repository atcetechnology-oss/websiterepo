import HeroCarousel from "./HeroCarousel";

const chips = [
  "+600 puntos certificados instalados desde 2021",
  "Negocios premium operando 24/7 sobre nuestra red",
  "0 días de paro por nuestra instalación",
  "12 meses de garantía por escrito",
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-[#0A203C] text-white overflow-hidden">
      {/* Pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 pt-10 pb-10 lg:pt-20 lg:pb-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="uppercase tracking-[0.14em] text-[10px] sm:text-xs text-[#00B4D8] font-semibold mb-4">
            Para empresas que no pueden darse el lujo de parar
          </p>
          <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-5xl leading-[1.15] sm:leading-[1.12] lg:leading-[1.08] font-bold tracking-tight max-w-2xl">
            Tu empresa conectada, vigilada y respaldada contra apagones —{" "}
            <span className="text-[#00B4D8]">
              en 30 días, con un solo contrato y 12 meses de garantía por escrito.
            </span>
          </h1>
          <p className="mt-5 lg:mt-6 text-sm sm:text-base lg:text-[17px] text-white/80 max-w-xl leading-relaxed">
            Diseñamos, presupuestamos e instalamos{" "}
            <strong className="text-white">
              cableado estructurado, videovigilancia, redes de voz y datos, y
              sistemas de respaldo de energía
            </strong>
            . Un solo equipo se encarga de todo. Tú firmas una vez. Nosotros
            respondemos por todo.
          </p>
          <div className="mt-6 lg:mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#cotizacion"
              className="inline-flex items-center justify-center h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base bg-[#00B4D8] text-[#0A203C] font-semibold hover:brightness-110 transition"
            >
              Cotización gratis en 48h
            </a>
            <a
              href="https://wa.me/525511559904"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base border border-white/40 text-white hover:bg-white/10 transition"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroCarousel />
        </div>
      </div>

      {/* Chips */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-4 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 text-[11px] sm:text-xs lg:text-sm text-white/90">
          {chips.map((c) => (
            <div key={c} className="flex items-start gap-2 leading-snug">
              <span className="text-[#00B4D8] mt-0.5 text-[10px]">●</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scarcity band */}
      <div className="relative bg-[#00B4D8] text-[#0A203C]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-3 text-center text-xs sm:text-sm font-medium leading-snug">
          Solo aceptamos 4 proyectos nuevos al mes para no descuidar a nadie.
          Quedan <strong>2 cupos</strong> este mes.
        </div>
      </div>
    </section>
  );
}
