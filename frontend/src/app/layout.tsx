import type { Metadata } from "next";
import { Caveat, Open_Sans, Poppins } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});
const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "João Henrique — React Developer",
  description: "Desenvolvedor React com mais de 10 projetos entregues.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={[
          openSans.variable,
          caveat.variable,
          poppins.variable,
          "font-open-sans",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
