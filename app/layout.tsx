import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/layout/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TiRas - Pergole, Tarasy, Zadaszenia Drewniane",
    template: "%s | TiRas"
  },
  description: "Profesjonalne konstrukcje drewniane - pergole, tarasy, zadaszenia. Najwyższa jakość, indywidualne projekty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
          <Navigation />
        <main>
        {children}
          </main>
          <Footer />
          <CookieConsent />
      </body>
    </html>
  );
}
