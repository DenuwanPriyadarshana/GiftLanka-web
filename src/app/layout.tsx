import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YKKYTVBNCP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YKKYTVBNCP');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}