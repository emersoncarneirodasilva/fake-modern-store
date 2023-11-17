import StyledComponentsRegistry from "@/registry";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GlobalStyle } from "./GlobalStyle";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake Modern Store",
  description: "Sua loja fake de produtos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
