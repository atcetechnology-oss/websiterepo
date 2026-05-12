import Image from "next/image";

const projects = [
  {
    name: "Clínica dental premium en Roma Norte",
    year: "2025",
    image: "/clientes/rack-instalado-cableado-azul-techo.jpg",
    points: [
      "42 puntos de red certificados",
      "16 cámaras 4K con grabación local",
      "Central telefónica IP y sistema de audio",
      "0 días que la clínica cerró durante la instalación",
    ],
  },
  {
    name: "Clínica dental premium en Polanco",
    year: "2024",
    image: "/clientes/camaras-hikvision-entrada-consultorio.jpg",
    points: [
      "40 puntos de red separados por área",
      "Cámaras con detección de movimiento",
      "Central Grandstream para 8 líneas",
      "Respaldo de energía en zonas críticas (rayos X, expedientes)",
    ],
  },
  {
    name: "Clínica dental en Polanco",
    year: "2021-2023",
    image: "/clientes/monitor-cctv-consultorio-radiografia.jpg",
    points: [
      "Red inalámbrica empresarial en toda la clínica",
      "Videovigilancia conectada a monitor en recepción",
      "Servidor central para expedientes y radiografías",
      "4 años funcionando sin un solo incidente reportado",
    ],
  },
];

const gallery = [
  {
    src: "/clientes/rack-patchpanel-cat6-completo.jpg",
    alt: "Cableado certificado y etiquetado punto por punto",
    caption: "Cableado certificado y etiquetado, punto por punto.",
  },
  {
    src: "/clientes/antes-despues-rack-cableado.jpg",
    alt: "Antes y después del mismo rack",
    caption:
      "Antes y después del mismo rack. La izquierda es lo que tu proveedor actual llama “normal”.",
  },
  {
    src: "/clientes/ups-cdp-uprs2008-instalado.jpg",
    alt: "Respaldo de energía UPS instalado",
    caption: "Respaldo de energía para que un apagón no te tire la operación.",
  },
  {
    src: "/clientes/regulador-powertron-rayos-x.jpg",
    alt: "Regulador de voltaje junto a equipo de rayos X",
    caption: "Protección eléctrica dedicada para tus equipos más caros.",
  },
  {
    src: "/clientes/ups-steren-nobreak-instalado.jpg",
    alt: "UPS Steren No Break en operación",
    caption: "Respaldo modular según el equipo que necesitas mantener vivo.",
  },
  {
    src: "/clientes/workstation-msi-pc-alliance.jpg",
    alt: "Workstation administrativa configurada en sitio",
    caption: "Equipo administrativo armado y configurado en sitio.",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-[#F4F6F8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2A4A] tracking-tight max-w-3xl">
          No vendemos promesas. Vendemos trabajos que llevan años funcionando.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.name} className="bg-white">
              <div className="relative h-56 w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[#6b6b6b]">
                  {p.year}
                </p>
                <h3 className="mt-1 font-bold text-[#0B2A4A] text-lg">
                  {p.name}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-[#4d4d4d]">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-[#00B4D8]">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-16">
          <p className="text-sm uppercase tracking-wider text-[#6b6b6b] font-semibold">
            Más evidencia
          </p>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <figure key={g.src} className="bg-white">
                <div className="relative h-52 w-full">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-[#4d4d4d]">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-[#0B2A4A] text-white p-10 lg:p-14">
          <p className="text-3xl lg:text-4xl font-bold leading-snug">
            “Antes teníamos tres proveedores que se peleaban entre ellos. Hoy
            llamamos a un número y todo se resuelve. La red lleva meses sin un
            solo incidente.”
          </p>
          <p className="mt-6 text-[#00B4D8] font-semibold">
            — Dr. Carlos Ariza, Director Clínico, Drdiente
          </p>
        </div>
      </div>
    </section>
  );
}
