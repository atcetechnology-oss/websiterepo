const items = [
  {
    n: "01",
    title: "Precio cerrado",
    text: "Si nuestro precio sube un solo peso durante la obra por algo que estaba en el alcance original, esa diferencia la pagamos nosotros.",
  },
  {
    n: "02",
    title: "Documentación y entrega",
    text: "Recibes diagrama de red, fichas técnicas y manual de uso de cada equipo instalado. No nos vamos del sitio hasta que tú y tu equipo dominen al 100% lo que dejamos operando.",
  },
  {
    n: "03",
    title: "Trabajo y equipos",
    text: "12 meses de garantía sobre todo trabajo realizado y los equipos que instalamos y suministramos. Si algo falla, lo reemplazamos en menos de 48 horas.",
  },
];

export default function Guarantees() {
  return (
    <section className="bg-[#0B2A4A] text-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold text-center">
          Nuestras garantías
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center max-w-3xl mx-auto leading-snug">
          Tres garantías por escrito, firmadas en tu contrato.
        </h2>

        <div className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((g) => (
            <div key={g.n} className="bg-white text-[#0B2A4A] p-6 sm:p-8">
              <div className="text-[#00B4D8] font-mono font-bold text-xs sm:text-sm">
                {g.n}
              </div>
              <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold leading-snug">
                {g.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#4d4d4d] leading-relaxed">
                {g.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-12 text-center text-sm sm:text-base text-[#00B4D8] font-medium leading-relaxed px-2">
          Pregúntale a tu proveedor actual si te firma una sola de estas.
          Te ahorras el resto de la página.
        </p>
      </div>
    </section>
  );
}
