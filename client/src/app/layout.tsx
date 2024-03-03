import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/utils/theme-provider";
const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnSpace",
  description: "Plataforma Unificada de estudos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
