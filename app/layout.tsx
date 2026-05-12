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
  title: "ATCE Technology — Redes, cámaras y telefonía para negocios en México",
  description:
    "Diseñamos e instalamos toda la tecnología de tu negocio bajo un solo contrato. Cotización gratis en 48 horas. Garantía de 24 meses por escrito. CDMX y todo México.",
  openGraph: {
    title: "ATCE Technology — Tecnología que sí sirve para tu negocio",
    description:
      "Internet, cámaras, accesos y teléfonos bajo un solo contrato. Garantía de 24 meses por escrito.",
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
