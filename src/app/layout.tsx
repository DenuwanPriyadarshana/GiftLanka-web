import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import your components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// --- SEO CONFIGURATION (USA & Global Targeting) ---
export const metadata: Metadata = {
  // 1. The Title: This is what users see in Google Search results.
  title: {
    template: "%s | GiftLanka",
    default: "GiftLanka | #1 Gift Shop, Magazine & Gift Ideas",
  },
  // 2. The Description: The text under the link in Google.
  description: "The ultimate Gift Magazine and Gift Shop. Discover trending gift ideas, viral USA products, and expert buyer's guides for 2025.",
  
  // 3. Keywords: The Massive SEO List
  keywords: [
    // Original Keywords
    "gift shop usa", 
    "gift magazine", 
    "gift ideas 2025", 
    "online gift store", 
    "best gifts for men", 
    "best gifts for women",
    
    // USA & Delivery Keywords
    "gift shop usa",
    "gift usa",
    "gift usa birthday",
    "gifts images",
    "send gifts to usa amazon",
    "gifts to usa same day delivery",
    "gift usa reviews",
    "gift usa christmas",
    "gift usa birthday gifts",
    "send gifts to usa from uk online",
    "gift usa delivery",
    "us gift tax",
    "gift usa to india",
    "nespresso welcome gift usa",
    "birthday gift usa",
    "send veuve clicquot gift usa",
    "wedding gift usa",
    "sending champagne as a gift usa",
    "send gift usa",
    "diwali gift usa",
    "apple card gift usa",
    "sephora birthday gift usa",
    "vanilla gift usa",
    "gift cards in usa",
    "gifts to india from usa",
    "gifts from usa",
    "gift card apple usa",
    "gift baskets usa",
    "gifts to take to india from usa",
    "gift card store in usa",
    "amazon us gift card",
    "gift card psn usa"
  ],

  // 4. Social Media Card
  openGraph: {
    title: "GiftLanka | Gift Shop & Magazine",
    description: "Find the perfect gift idea. Shop viral trends and read our expert guides.",
    url: "https://giftlanka.com",
    siteName: "GiftLanka",
    images: [
      {
        url: "/images/gold-logo.png",
        width: 800,
        height: 600,
        alt: "GiftLanka Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 antialiased selection:bg-yellow-500/30 selection:text-yellow-200`}>
        
        {/* 1. NAVIGATION */}
        <Navbar />
        
        {/* 2. MAIN CONTENT AREA */}
        <div className="flex-grow min-h-screen">
          {children}
        </div>

        {/* 3. FOOTER */}
        <Footer />

      </body>
    </html>
  );
}