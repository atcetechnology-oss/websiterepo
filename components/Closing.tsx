export default function Closing() {
  return (
    <section className="bg-[#0B2A4A] text-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="text-xl sm:text-2xl lg:text-4xl font-bold leading-snug">
          Una sola empresa. Un solo contrato. Una sola llamada cuando algo se
          mueve.
        </p>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/80">
          Eso es todo lo que cambia. Y eso lo cambia todo.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
    </section>
  );
}
