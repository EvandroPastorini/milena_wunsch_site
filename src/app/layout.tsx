import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milena Wunsch Podóloga",
  description:
    "Podologia com acolhimento, técnica e cuidado preventivo. Agende seu atendimento com Milena Wunsch pelo WhatsApp.",
  openGraph: {
    title: "Milena Wunsch Podóloga",
    description:
      "Cuidado profissional para saúde, conforto e bem-estar dos seus pés.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
