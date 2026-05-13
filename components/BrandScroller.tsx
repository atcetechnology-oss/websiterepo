"use client";

type Brand = { name: string; svg?: string };

// Row 1 — telecom & redes (logos disponibles primero, wordmarks después)
const row1: Brand[] = [
  { name: "Cisco", svg: "/marcas/cisco.svg" },
  { name: "TP-Link", svg: "/marcas/tplink.svg" },
  { name: "HPE Aruba" },
  { name: "Hikvision" },
  { name: "Dahua" },
  { name: "Panduit" },
  { name: "Belden" },
  { name: "Siemon" },
  { name: "LinkedPro" },
  { name: "Grandstream" },
  { name: "Asterisk", svg: "/marcas/asterisk.svg" },
  { name: "Planet", svg: "/marcas/planet.svg" },
  { name: "Viakon" },
  { name: "Condumex" },
  { name: "Charofil" },
];

// Row 2 — energía, cómputo, audio
const row2: Brand[] = [
  { name: "Schneider", svg: "/marcas/schneiderelectric.svg" },
  { name: "APC" },
  { name: "CyberPower" },
  { name: "CDP" },
  { name: "Smartbitt" },
  { name: "Steren" },
  { name: "HP", svg: "/marcas/hp.svg" },
  { name: "Dell", svg: "/marcas/dell.svg" },
  { name: "Lenovo", svg: "/marcas/lenovo.svg" },
  { name: "Toshiba", svg: "/marcas/toshiba.svg" },
  { name: "Acer", svg: "/marcas/acer.svg" },
  { name: "ASUS", svg: "/marcas/asus.svg" },
  { name: "MSI", svg: "/marcas/msi.svg" },
  { name: "NVIDIA", svg: "/marcas/nvidia.svg" },
  { name: "Samsung", svg: "/marcas/samsung.svg" },
  { name: "LG", svg: "/marcas/lg.svg" },
  { name: "Yamaha", svg: "/marcas/yamahacorporation.svg" },
  { name: "Onkyo" },
  { name: "Manhattan" },
  { name: "StarTech" },
];

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div className="flex items-center justify-center gap-3 px-6 sm:px-8 shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
      {brand.svg ? (
        <span
          aria-label={brand.name}
          role="img"
          className="block w-7 h-7 sm:w-8 sm:h-8 bg-[#0B2A4A]"
          style={{
            WebkitMaskImage: `url(${brand.svg})`,
            maskImage: `url(${brand.svg})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      ) : null}
      <p className="text-base sm:text-lg font-bold text-[#0B2A4A] tracking-tight whitespace-nowrap">
        {brand.name}
      </p>
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
      className="group flex overflow-hidden py-3 [--gap:2rem] flex-row max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_8%,rgba(0,_0,_0,_1)_92%,rgba(0,_0,_0,_0))]"
      style={{ ["--duration" as string]: duration }}
    >
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={
              "flex shrink-0 justify-around [gap:var(--gap)] flex-row " +
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
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 mb-6 sm:mb-8 text-center">
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

      <MarqueeRow brands={row1} duration="55s" />
      <MarqueeRow brands={row2} duration="65s" reverse />
    </section>
  );
}
