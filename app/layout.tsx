import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const GTM_ID = "GTM-M5K2T87K";

export const metadata: Metadata = {
  metadataBase: new URL("https://atcetechnology.com"),
  title:
    "ATCE Technology — Cableado estructurado, videovigilancia, redes y respaldo de energía en México",
  description:
    "Diseñamos, presupuestamos e instalamos cableado estructurado, videovigilancia, redes de voz y datos, y sistemas de respaldo de energía. Un solo contrato. Cotización gratis en 48 horas. 12 meses de garantía por escrito. CDMX y todo México.",
  openGraph: {
    title:
      "ATCE Technology — Infraestructura de telecomunicaciones para empresas",
    description:
      "Cableado, videovigilancia, redes y respaldo de energía bajo un solo contrato. 12 meses de garantía por escrito.",
    images: ["/clientes/rack-instalado-cableado-azul-techo.jpg"],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#2B2F36]">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
