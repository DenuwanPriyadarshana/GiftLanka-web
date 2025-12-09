import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Base URL (Required for Next.js to find your social images)
  metadataBase: new URL('https://giftlanka.com'),

  // 2. Optimized Title
  title: {
    default: "GiftLanka | #1 Premium Metal Prints in Sri Lanka",
    template: "%s | GiftLanka", // If you add other pages later, they will look like "Shop | GiftLanka"
  },

  // 3. Detailed Description for Google Search
  description: "Sri Lanka's first premium metal print studio. Waterproof, frameless wall art and personalized gifts. The perfect birthday and anniversary gift that lasts 60+ years.",
  
  // 4. Keywords for Ranking
  keywords: [
    "Metal Prints Sri Lanka", 
    "Birthday Gifts Sri Lanka", 
    "Online Gift Delivery", 
    "Personalized Gifts", 
    "Wall Art Sri Lanka",
    "Luxury Gifts Colombo",
    "Anniversary Gifts"
  ],

  // 5. Author Info
  authors: [{ name: "GiftLanka Studio" }],
  creator: "GiftLanka",

  // 6. Facebook / WhatsApp / LinkedIn Preview (Open Graph)
  openGraph: {
    title: "GiftLanka | Don't Print on Paper. Print on Metal.",
    description: "The ultimate premium gift. Waterproof, scratch-resistant, and built to last 60+ years.",
    url: "https://giftlanka.com",
    siteName: "GiftLanka",
    images: [
      {
        url: "/og-image.jpg", // make sure you add this image to your public folder!
        width: 1200,
        height: 630,
        alt: "GiftLanka Premium Metal Prints",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 7. Twitter Card Preview
  twitter: {
    card: "summary_large_image",
    title: "GiftLanka | Premium Metal Prints",
    description: "Sri Lanka's first premium metal print studio.",
    images: ["/og-image.jpg"],
  },

  // 8. Robot Instructions (Tell Google to Index this page)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        
        {/* Google Analytics Script */}
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