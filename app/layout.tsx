import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
      <body className="min-h-screen flex flex-col bg-white text-[#2B2F36]">
        {children}
      </body>
    </html>
  );
}
