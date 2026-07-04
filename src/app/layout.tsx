import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://podologamilenawunsch.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Milena Wunsch Podóloga",
    template: "%s | Milena Wunsch Podóloga",
  },
  description:
    "Podologia com acolhimento, técnica e cuidado preventivo. Agende seu atendimento com Milena Wunsch pelo WhatsApp.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Milena Wunsch",
    "podóloga",
    "podologia",
    "podologia preventiva",
    "unha encravada",
    "calos e fissuras",
    "micose nas unhas",
  ],
  openGraph: {
    title: "Milena Wunsch Podóloga",
    description:
      "Cuidado profissional para saúde, conforto e bem-estar dos seus pés.",
    url: siteUrl,
    siteName: "Milena Wunsch Podóloga",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
