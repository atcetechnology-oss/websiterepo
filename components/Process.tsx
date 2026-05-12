const steps = [
  {
    n: "01",
    title: "Vamos a verte",
    when: "Día 1-2",
    text: "Sin compromiso. Vamos a tu negocio, medimos, tomamos fotos, anotamos qué necesitas.",
  },
  {
    n: "02",
    title: "Te entregamos la propuesta",
    when: "Día 3-4",
    text: "Plano de cómo va a quedar. Precio cerrado. Fecha de entrega firmada. Si te late, firmamos. Si no, no pasa nada.",
  },
  {
    n: "03",
    title: "Instalamos sin parar tu operación",
    when: "Día 5-30",
    text: "Trabajamos por etapas, en los horarios que te convengan. Nunca cerramos tu negocio.",
  },
  {
    n: "04",
    title: "Te entregamos todo probado",
    when: "Día final",
    text: "Probamos cada punto frente a ti. Te enseñamos a usar lo que necesites. Te dejamos los planos y el contrato de garantía.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight text-center max-w-3xl mx-auto leading-snug">
          De tu primera llamada al día que entregamos: 4 pasos. Nada más.
        </h2>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-[#0B2A4A] pt-4 sm:pt-5">
              <div className="text-[#00B4D8] font-mono text-xs sm:text-sm font-bold">
                {s.n}
              </div>
              <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-[#6b6b6b]">
                {s.when}
              </p>
              <h3 className="mt-2 text-base sm:text-xl font-bold text-[#0B2A4A] leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm text-[#4d4d4d] leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
