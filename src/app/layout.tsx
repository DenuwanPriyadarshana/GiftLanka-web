import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GiftLanka | Launching Soon",
  description: "Sri Lanka's First Premium Metal Print Studio. Coming Soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* Centered Content Layout */}
      <body className={`${inter.className} bg-neutral-950 text-white antialiased flex min-h-screen items-center justify-center`}>
        {children}
      </body>
    </html>
  );
}