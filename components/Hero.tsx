import Image from "next/image";

const chips = [
  "+120 puntos de red instalados desde 2021",
  "Negocios premium operando 24/7 sobre nuestra red",
  "0 días que un cliente nuestro cerró por nuestra instalación",
  "Garantía de 24 meses por escrito",
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

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 pt-10 pb-10 lg:pt-24 lg:pb-20 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.12em] text-[10px] sm:text-xs text-[#00B4D8] font-semibold mb-4">
            Para negocios que no pueden darse el lujo de que la tecnología falle
          </p>
          <h1 className="text-[22px] sm:text-[34px] lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] font-bold tracking-tight">
            Tu negocio merece internet que no se cae, cámaras que sí graban
            y teléfonos que sí entran.
            <br />
            <span className="text-[#00B4D8]">
              Nosotros lo dejamos así. En 30 días o menos.
            </span>
          </h1>
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/80 max-w-xl leading-relaxed">
            Un solo equipo se encarga de tu red, tus cámaras, tus accesos y
            tu telefonía. Te entregamos todo conectado, probado y por escrito.
            Si algo falla, lo arreglamos nosotros — gratis — por 24 meses.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
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

        <div className="relative h-56 sm:h-80 lg:h-[520px] w-full">
          <Image
            src="/clientes/rack-instalado-cableado-azul-techo.jpg"
            alt="Rack profesional instalado por ATCE Technology"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[#0A203C]/30" />
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
