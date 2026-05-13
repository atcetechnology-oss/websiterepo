"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/clientes/rack-instalado-cableado-azul-techo.jpg",
    caption: "Rack profesional con cableado certificado en techo",
  },
  {
    src: "/clientes/rack-patchpanel-cat6-completo.jpg",
    caption: "Patch panel UTP Cat6 etiquetado punto por punto",
  },
  {
    src: "/clientes/antes-despues-rack-cableado.jpg",
    caption: "Antes y después del mismo rack",
  },
  {
    src: "/clientes/camaras-hikvision-entrada-consultorio.jpg",
    caption: "Cámaras IP Hikvision instaladas en accesos",
  },
  {
    src: "/clientes/monitor-cctv-consultorio-radiografia.jpg",
    caption: "Monitoreo CCTV integrado con estación de trabajo",
  },
  {
    src: "/clientes/ups-cdp-uprs2008-instalado.jpg",
    caption: "UPS CDP para equipos críticos",
  },
  {
    src: "/clientes/ups-cdp-rsmart-equipo-laboratorio.jpg",
    caption: "Respaldo de energía para laboratorio",
  },
  {
    src: "/clientes/ups-steren-nobreak-instalado.jpg",
    caption: "Sistema UPS modular Steren",
  },
  {
    src: "/clientes/regulador-powertron-rayos-x.jpg",
    caption: "Regulador de voltaje junto a equipo de rayos X",
  },
  {
    src: "/clientes/workstation-msi-pc-alliance.jpg",
    caption: "Workstation administrativa configurada en sitio",
  },
  {
    src: "/clientes/pc-interior-gpu-pny-rtx.jpg",
    caption: "Equipo de cómputo armado en sitio",
  },
  {
    src: "/clientes/dell-optiplex-mantenimiento.jpg",
    caption: "Mantenimiento interno de equipos Dell",
  },
];

export default function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    function onScroll() {
      if (!el) return;
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(idx);
    }
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function scrollBy(dir: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  function goTo(i: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="relative w-full h-72 sm:h-96 lg:h-[560px] group">
      <div
        ref={trackRef}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            className="relative shrink-0 w-full h-full snap-center bg-[#0A203C] flex items-center justify-center"
          >
            <Image
              src={s.src}
              alt={s.caption}
              fill
              className="object-contain p-3 sm:p-4"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={i < 2}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A203C] via-[#0A203C]/85 to-transparent px-4 py-3 sm:py-4">
              <p className="text-xs sm:text-sm text-white/85 leading-snug">
                {s.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Counter top-right */}
      <div className="absolute top-3 right-3 bg-[#0A203C]/75 backdrop-blur px-2.5 py-1 text-[10px] sm:text-xs font-mono text-white/90 pointer-events-none">
        {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Prev / Next buttons */}
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Anterior"
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-[#0A203C]/70 hover:bg-[#0A203C] backdrop-blur flex items-center justify-center text-white transition opacity-80 hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Siguiente"
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-[#0A203C]/70 hover:bg-[#0A203C] backdrop-blur flex items-center justify-center text-white transition opacity-80 hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-14 sm:bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a foto ${i + 1}`}
            className={
              "pointer-events-auto h-1 transition-all " +
              (i === activeIndex
                ? "w-6 bg-[#00B4D8]"
                : "w-1.5 bg-white/40 hover:bg-white/70")
            }
          />
        ))}
      </div>
    </div>
  );
}
