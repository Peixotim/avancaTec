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

export const metadata: Metadata = {
  title: {
    default: "AvancaTec - Cursos Técnicos ",
    template: "%s | AvancaTec",
  },
  description:
    "Educatec Canaã oferece cursos técnicos e profissionalizantes para transformar sua carreira. Inscreva-se e conquiste seu futuro!",
  keywords: [
    "educatec canaã",
    "cursos técnicos",
    "cursos profissionalizantes",
    "cursos em Canaã dos Carajás",
    "educação técnica",
  ],
  authors: [{ name: "Educatec Canaã" }],
  creator: "Educatec Canaã",
  publisher: "Educatec Canaã",
  metadataBase: new URL("https://seudominio.com"),
  openGraph: {
    title: "Educatec Canaã - Cursos Técnicos em Canaã dos Carajás",
    description:
      "Transforme sua vida com cursos técnicos de qualidade. Conheça Educatec Canaã.",
    url: "https://seudominio.com",
    siteName: "Educatec Canaã",
    images: [
      {
        url: "https://seudominio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Educatec Canaã",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Educatec Canaã - Cursos Técnicos em Canaã dos Carajás",
    description:
      "Cursos técnicos e profissionalizantes para transformar seu futuro.",
    images: ["https://seudominio.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>

      <body
        className={`${montserrat.className} bg-white text-gray-900 antialiased`}
      >
        {/* Layout geral com sidebar e conteúdo */}
        <div className="flex">
          {/* Sidebar fixa à esquerda */}
          <Sidebar />

          {/* Conteúdo principal */}
          <main className="flex-1 overflow-x-hidden transition-all duration-300">
            {children}

            {/* Elementos fixos globais */}
            <WhatsAppButton />
            <CookieConsent />
          </main>
        </div>
      </body>
    </html>
  );
}
