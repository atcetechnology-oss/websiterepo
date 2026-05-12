const items = [
  {
    title: "Llegó un cliente importante y el internet estaba caído.",
    text: "Quedaste mal y nadie te dio una explicación clara.",
  },
  {
    title: "Pasó algo serio y las cámaras no estaban grabando.",
    text: "Te dieron mil excusas. Ninguna te devolvió la grabación.",
  },
  {
    title:
      "El de las cámaras dice que es de la red. El de la red dice que es del teléfono.",
    text: "Y mientras, tú pierdes el día buscando culpables.",
  },
  {
    title: "Te cotizaron $80 mil. Terminaste pagando $130 mil.",
    text: "“Es que salió esto extra…” Te tocó pagar el extra.",
  },
  {
    title: "Tu equipo aprendió a vivir con cosas rotas.",
    text: "“Así trabaja”, “ya nos acostumbramos”. Eso no es trabajar. Eso es resignarse.",
  },
  {
    title: "Cada vez que algo falla, tú lo resuelves.",
    text: "Tu negocio depende de ti hasta para reiniciar un módem.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight">
          Si tu negocio depende de la tecnología, una de estas cosas te ha
          pasado en el último año.
        </h2>

        <ol className="mt-10 space-y-7">
          {items.map((item, i) => (
            <li key={i} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 bg-[#0B2A4A] text-white font-bold flex items-center justify-center text-sm">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-[#0B2A4A] text-lg">
                  {item.title}
                </p>
                <p className="mt-1 text-[#4d4d4d]">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 border-l-4 border-[#00B4D8] pl-5">
          <p className="text-xl lg:text-2xl font-bold text-[#0B2A4A] leading-snug">
            Eso no es mala suerte. Es lo que pasa cuando tienes 3 o 4 proveedores
            diferentes haciendo trabajos sueltos.
          </p>
          <p className="mt-2 text-lg text-[#4d4d4d]">
            Ninguno es responsable de todo. Por eso nadie te resuelve nada.
          </p>
        </div>
      </div>
    </section>
  );
}
