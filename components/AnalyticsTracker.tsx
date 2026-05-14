"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function AnalyticsTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest("a[href*='wa.me']") as HTMLAnchorElement | null;
      if (!link) return;

      // Identificar la sección donde ocurrió el click
      const section = link.closest("section[id], section, footer, header");
      const location =
        (section as HTMLElement | null)?.id ||
        section?.tagName?.toLowerCase() ||
        "unknown";

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        link_url: link.href,
        location,
        page_path: window.location.pathname,
        page_url: window.location.href,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
