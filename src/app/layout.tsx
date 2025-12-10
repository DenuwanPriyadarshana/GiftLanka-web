import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- UPDATE THIS SECTION FOR GOOGLE ---
export const metadata: Metadata = {
  title: "GiftLanka Magazine | The Ultimate Gift Guide for Sri Lanka",
  description: "Find the perfect gift for him, her, and corporate events in Sri Lanka. Curated reviews of luxury gifts, tech gadgets, and custom metal prints. Stop guessing, start gifting.",
  keywords: ["gifts sri lanka", "gift ideas for men", "wedding gifts colombo", "corporate gifts sri lanka", "metal prints"],
  openGraph: {
    title: "GiftLanka Magazine | The Art of Thoughtful Gifting",
    description: "Don't buy boring gifts. Read our curated guides for the best birthday, anniversary, and corporate gifts in Sri Lanka.",
    url: "https://giftlanka.com",
    siteName: "GiftLanka",
    images: [
      {
        url: "/images/gold-logo.png", // Make sure you have a logo image here
        width: 800,
        height: 600,
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}