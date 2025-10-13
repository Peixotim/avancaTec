import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieBanner";
import SchemaOrg from "./seo/schema";
import Sidebar from "@/components/sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Colégio AvançaTec | Cursos Técnicos e Profissionalizantes Reconhecidos pelo MEC",
  description:
    "O Colégio AvançaTec oferece cursos técnicos e profissionalizantes reconhecidos pelo MEC. Transforme seu futuro com educação técnica de excelência.",
  keywords: [
    "colégio avancatec",
    "avancatec",
    "cursos técnicos",
    "curso técnico em enfermagem",
    "curso de refrigeração",
    "escola técnica",
    "educação profissional",
    "cursos reconhecidos pelo MEC",
    "curso técnico em administração",
    "curso técnico em informática",
    "curso técnico MG",
    "ensino técnico em Coronel Fabriciano",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-24">
      <head>
        <SchemaOrg />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#024E0E" />
        <meta
          name="google-site-verification"
          content="CNScKtYMuazZjXrh3r8i8LHVtEcb70eC5-re9VMWySY"
        />
      </head>

      <body
        className={`${montserrat.className} bg-white text-gray-900 antialiased`}
      >
        <div className="flex">
          {/* Sidebar fixa */}
          <Sidebar />

          {/* Conteúdo principal */}
          <main className="flex-1 overflow-x-hidden transition-all duration-300">
            {children}

            {/* Botão do WhatsApp e Cookie Banner globais */}
            <WhatsAppButton />
            <CookieConsent />
          </main>
        </div>
      </body>
    </html>
  );
}
