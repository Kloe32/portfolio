import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Space_Grotesk, Exo_2 } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import Navbar from "@/components/sections/Navbar";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/ui/particles";
import Cursor from "@/components/ui/cursor";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sai Saing Wan | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, and TypeScript. Passionate about building scalable web applications and exploring new technologies.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        figtree.variable,
        spaceGrotesk.variable,
        exo2.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Particles
          className="fixed inset-0 -z-10"
          quantity={200}
          color="#51A2FF"
        />
        <Navbar />
        <Cursor />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
