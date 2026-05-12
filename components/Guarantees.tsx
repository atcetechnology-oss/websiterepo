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
    <section className="bg-[#0B2A4A] text-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-center max-w-3xl mx-auto">
          Esto está firmado en tu contrato. No es marketing. Es legal.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((g) => (
            <div key={g.n} className="bg-white text-[#0B2A4A] p-8">
              <div className="text-[#00B4D8] font-mono font-bold text-sm">
                {g.n}
              </div>
              <h3 className="mt-3 text-2xl font-bold">{g.title}</h3>
              <p className="mt-4 text-[#4d4d4d] leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-[#00B4D8] font-medium">
          Pregúntale a tu proveedor actual si te firma una sola de estas.
          Te ahorras el resto de la página.
        </p>
      </div>
    </section>
  );
}
