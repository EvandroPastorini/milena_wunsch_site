import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { business, siteUrl } from "./business";
import "./globals.css";

const title = "Podóloga em Canoas/RS | Milena Wunsch Podologia";
const description =
  "Podóloga em Canoas/RS: unha encravada, calos, fissuras, micose e podologia preventiva com Milena Wunsch. Atendimento acolhedor. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Milena Wunsch Podóloga",
  },
  description,
  applicationName: business.name,
  authors: [{ name: business.person }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "podóloga em Canoas",
    "podologia Canoas",
    "podóloga Canoas RS",
    "unha encravada Canoas",
    "podóloga Esteio",
    "podóloga Sapucaia do Sul",
    "podóloga Zona Norte Porto Alegre",
    "Milena Wunsch",
    "podologia preventiva",
    "calos e fissuras",
    "micose nas unhas",
  ],
  openGraph: {
    title,
    description:
      "Podologia clínica e preventiva em Canoas/RS. Cuidado profissional para saúde, conforto e bem-estar dos seus pés.",
    url: siteUrl,
    siteName: business.name,
    locale: "pt_BR",
    type: "website",
    images: [{
      url: "/media/compartilhar.jpg",
      width: 1200,
      height: 630,
      alt: "Milena Wunsch, podóloga em Canoas/RS — cuidado profissional dos pés",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/media/compartilhar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-RS",
    "geo.placename": "Canoas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
