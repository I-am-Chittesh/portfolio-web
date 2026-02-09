import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/context/SessionContext"; // <--- Add this

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "~/chittesh",
  description: "ChitteshOS - Arch-based Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased h-screen w-screen overflow-hidden bg-gruv-bg text-gruv-fg`}>
        {/* Wrap everything in the Provider */}
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}