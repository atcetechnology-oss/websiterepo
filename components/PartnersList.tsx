"use client";

import { useEffect, useRef, useState } from "react";

const categories: { label: string; brands: string[] }[] = [
  {
    label: "Cableado estructurado",
    brands: [
      "Panduit",
      "Belden",
      "Siemon",
      "Viakon",
      "Condumex",
      "Charofil",
      "LinkedPro",
    ],
  },
  {
    label: "Redes y conectividad",
    brands: ["Cisco", "HPE Aruba", "TP-Link", "Planet"],
  },
  {
    label: "Videovigilancia",
    brands: ["Hikvision", "Dahua"],
  },
  {
    label: "Telefonía IP",
    brands: ["Grandstream", "Asterisk"],
  },
  {
    label: "Respaldo de energía",
    brands: [
      "Schneider Electric",
      "APC",
      "CyberPower",
      "CDP (Chicago Digital Power)",
      "Smartbitt",
      "Steren",
    ],
  },
  {
    label: "Cómputo y periféricos",
    brands: [
      "HP",
      "Dell",
      "Lenovo",
      "Toshiba",
      "Acer",
      "ASUS",
      "MSI",
      "NVIDIA",
      "Compaq",
      "Xtreme PC Gaming",
    ],
  },
  {
    label: "Pantallas",
    brands: ["Samsung", "LG"],
  },
  {
    label: "Audio",
    brands: ["Yamaha", "Onkyo"],
  },
  {
    label: "Accesorios y conectividad",
    brands: ["Manhattan Connect-Pro", "StarTech"],
  },
];

export default function PartnersList() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cierra al hacer click fuera (útil para mobile después de tap)
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", onDown);
      return () => document.removeEventListener("mousedown", onDown);
    }
  }, [open]);

  const totalBrands = categories.reduce((acc, c) => acc + c.brands.length, 0);

  return (
    <section className="bg-white py-12 sm:py-14 border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#00B4D8] font-bold">
          Trabajamos con las mejores marcas del mercado
        </p>
        <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-[#0B2A4A] leading-snug">
          Más de {totalBrands} fabricantes en nuestro ecosistema de partners
        </h3>

        <div
          ref={ref}
          className="relative inline-block mt-6 sm:mt-7"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={
              "inline-flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-semibold transition border " +
              (open
                ? "bg-[#0B2A4A] text-white border-[#0B2A4A]"
                : "bg-white text-[#0B2A4A] border-[#0B2A4A]/30 hover:border-[#0B2A4A] hover:bg-[#0B2A4A]/5")
            }
          >
            Ver todas las marcas
            <svg
              className={"w-4 h-4 transition-transform " + (open ? "rotate-180" : "")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Card desplegable */}
          <div
            className={
              "absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(92vw,720px)] z-30 origin-top transition-all duration-200 " +
              (open
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none")
            }
          >
            <div className="bg-white border border-gray-200 shadow-[0_20px_50px_-15px_rgba(11,42,74,0.25)] p-5 sm:p-7 text-left">
              {/* Top accent */}
              <div className="absolute -top-px inset-x-0 h-1 bg-gradient-to-r from-[#00B4D8] via-[#0E9F6E] to-[#00B4D8]" />

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {categories.map((cat) => (
                  <div key={cat.label}>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#00B4D8] font-bold">
                      {cat.label}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      {cat.brands.map((b) => (
                        <li
                          key={b}
                          className="text-sm sm:text-[15px] text-[#0B2A4A] font-medium"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-6 pt-5 border-t border-gray-100 text-xs sm:text-sm text-[#6b6b6b] italic leading-relaxed">
                Todos los equipos son originales, con factura y garantía del
                fabricante. Si una marca que necesitas no está aquí, dinos —
                trabajamos con distribuidores oficiales de prácticamente todo
                el mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
