"use client";

// scale = porcentaje del bounding box que ocupa el logo (default 100).
// Isotipos (símbolos sin texto) llenan demasiado el viewBox de simpleicons,
// por eso los achicamos para que tengan el mismo peso óptico que los wordmarks.
type Brand = { name: string; svg: string; scale?: number };

// Solo marcas con SVG real disponible — sin texto al lado
const row1: Brand[] = [
  { name: "Cisco", svg: "/marcas/cisco.svg", scale: 70 }, // bridge/wave isotipo
  { name: "TP-Link", svg: "/marcas/tplink.svg" },
  { name: "HP", svg: "/marcas/hp.svg", scale: 70 }, // round badge
  { name: "Dell", svg: "/marcas/dell.svg" },
  { name: "Lenovo", svg: "/marcas/lenovo.svg" },
  { name: "Toshiba", svg: "/marcas/toshiba.svg" },
  { name: "Acer", svg: "/marcas/acer.svg" },
  { name: "ASUS", svg: "/marcas/asus.svg" },
];

const row2: Brand[] = [
  { name: "Schneider Electric", svg: "/marcas/schneiderelectric.svg" },
  { name: "Asterisk", svg: "/marcas/asterisk.svg", scale: 55 }, // isotipo
  { name: "Planet", svg: "/marcas/planet.svg", scale: 60 }, // isotipo p en círculo
  { name: "MSI", svg: "/marcas/msi.svg", scale: 60 }, // dragón
  { name: "NVIDIA", svg: "/marcas/nvidia.svg", scale: 65 }, // isotipo ojo
  { name: "Samsung", svg: "/marcas/samsung.svg" },
  { name: "LG", svg: "/marcas/lg.svg", scale: 75 }, // round
  { name: "Yamaha", svg: "/marcas/yamahacorporation.svg" },
];

function BrandItem({ brand }: { brand: Brand }) {
  const scale = brand.scale ?? 100;
  const size = `${scale}%`;
  return (
    <div className="flex items-center justify-center shrink-0 px-8 sm:px-10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition">
      <span
        aria-label={brand.name}
        role="img"
        title={brand.name}
        className="block w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#0B2A4A]"
        style={{
          WebkitMaskImage: `url(${brand.svg})`,
          maskImage: `url(${brand.svg})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: size,
          maskSize: size,
        }}
      />
    </div>
  );
}

function MarqueeRow({
  brands,
  reverse,
  duration,
}: {
  brands: Brand[];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div
      className="group flex overflow-hidden py-3 sm:py-4 flex-row max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_8%,rgba(0,_0,_0,_1)_92%,rgba(0,_0,_0,_0))]"
      style={{ ["--duration" as string]: duration }}
    >
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={
              "flex shrink-0 justify-around flex-row " +
              (reverse ? "animate-marquee-reverse" : "animate-marquee")
            }
          >
            {brands.map((b) => (
              <BrandItem key={`${b.name}-${i}`} brand={b} />
            ))}
          </div>
        ))}
    </div>
  );
}

export default function BrandScroller() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 mb-8 sm:mb-12 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold">
          Ecosistema de partners
        </p>
        <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B2A4A] tracking-tight leading-snug">
          Trabajamos con las marcas que tu empresa necesita.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#4d4d4d] max-w-2xl mx-auto leading-relaxed">
          Equipos certificados y soportados oficialmente. Nada de clones ni
          marcas desconocidas — solo lo que las empresas serias usan en
          producción.
        </p>
      </div>

      <MarqueeRow brands={row1} duration="50s" />
      <MarqueeRow brands={row2} duration="60s" reverse />
    </section>
  );
}
