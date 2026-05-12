const items = [
  {
    title: "Un solo responsable",
    text: "No subcontratamos a nadie. Nuestro equipo hace todo. Si algo falla, no hay a quién culpar más que a nosotros — y a nosotros nos toca arreglarlo.",
  },
  {
    title: "Precio cerrado, por escrito",
    text: "Te cotizamos en 48 horas. El precio que firmas es el precio que pagas. Si sube por algo del alcance original, esa diferencia la pagamos nosotros.",
  },
  {
    title: "Garantía de verdad",
    text: "24 meses. Si un punto de red falla, te lo reponemos en menos de 48 horas. Si no llegamos en 48 horas, ese punto es gratis de por vida.",
  },
];

export default function WhyAtce() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight text-center">
          Tres diferencias que cambian todo.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="border border-gray-200 p-7 hover:border-[#0B2A4A] transition"
            >
              <div className="text-[#00B4D8] font-mono font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-xl font-bold text-[#0B2A4A]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#4d4d4d] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
