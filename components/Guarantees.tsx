const items = [
  {
    n: "01",
    title: "Precio cerrado",
    text: "Si nuestro precio sube un solo peso durante la obra por algo que estaba en el alcance original, esa diferencia la pagamos nosotros.",
  },
  {
    n: "02",
    title: "Plazo de entrega",
    text: "Si no entregamos en la fecha firmada, te descontamos 5% del proyecto por cada semana de retraso. Hasta 25% del total.",
  },
  {
    n: "03",
    title: "Que funcione",
    text: "Si un punto de red certificado falla en los primeros 24 meses, lo reemplazamos en menos de 48 horas. Si no llegamos en 48 horas, ese punto es gratis de por vida.",
  },
];

export default function Guarantees() {
  return (
    <section className="bg-[#0B2A4A] text-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center max-w-3xl mx-auto leading-snug">
          Esto está firmado en tu contrato. No es marketing. Es legal.
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
