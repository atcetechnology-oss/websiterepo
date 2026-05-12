const faqs = [
  {
    q: "¿Cuánto cuesta esto?",
    a: "Depende del tamaño de tu negocio. Un consultorio chico cuesta desde $80 mil. Una clínica grande llega a $750 mil. Te damos el precio exacto en 48 horas, sin compromiso.",
  },
  {
    q: "¿Cuánto se tardan?",
    a: "Entre 3 y 6 semanas, dependiendo del tamaño. Te entregamos un calendario con fechas firmadas el día que aceptas la propuesta.",
  },
  {
    q: "¿Tengo que cerrar mi negocio durante la instalación?",
    a: "No. Trabajamos por bloques y en horarios que tú nos digas. Nuestras 3 clínicas activas no cerraron ni un día durante la obra.",
  },
  {
    q: "¿Qué pasa si mi negocio crece y necesito más?",
    a: "Diseñamos tu red con 30% de espacio libre desde el inicio. Crecer no requiere romper paredes ni gastar el doble.",
  },
  {
    q: "¿Quién me da soporte después de la instalación?",
    a: "Nosotros. Los primeros 6 meses tienes WhatsApp directo con un técnico, 24/7. Después, sigues con garantía completa por 24 meses.",
  },
  {
    q: "¿Trabajan fuera de CDMX?",
    a: "Sí. Todo México. Los viáticos se cotizan por separado, transparentes desde el inicio.",
  },
  {
    q: "No soy técnico. ¿Voy a entender lo que me proponen?",
    a: "Sí. Te entregamos la propuesta en español, sin palabras raras. Si no entiendes algo, lo explicamos hasta que lo entiendas. Si no entiendes, no firmas.",
  },
  {
    q: "No tengo nada todavía y no sé ni por dónde empezar. ¿Sirve igual?",
    a: "Eso es lo más fácil para nosotros. Te visitamos, vemos tu espacio, y te decimos qué necesitas y qué no. Sin venderte de más.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight">
          Lo que la gente nos pregunta.
        </h2>

        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <span className="font-semibold text-[#0B2A4A] text-lg">
                  {f.q}
                </span>
                <span className="text-[#00B4D8] text-2xl leading-none transition-transform group-open:rotate-45 select-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#4d4d4d] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
