import Link from "next/link";
import { ShoppingBag, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-gray-400 py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* BRAND */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2 mb-4">
              GIFT<span className="text-yellow-500">LANKA</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              The premier digital magazine for discerning gift buyers in Sri Lanka. Curating global trends, luxury items, and practical essentials.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold mb-4">Magazine</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/global-gift-trends-2025" className="hover:text-yellow-500">Global Trends</Link></li>
              <li><Link href="/blog/top-10-gifts-for-men" className="hover:text-yellow-500">Gifts for Him</Link></li>
              <li><Link href="/blog/gifts-for-her-sri-lanka" className="hover:text-yellow-500">Gifts for Her</Link></li>
              <li><Link href="/blog/corporate-gifts-sri-lanka" className="hover:text-yellow-500">Corporate Guide</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-yellow-500">Terms of Service</Link></li>
              <li><Link href="/contact-us" className="hover:text-yellow-500">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* AMAZON DISCLAIMER (REQUIRED) */}
        <div className="border-t border-neutral-800 pt-8 text-xs text-justify text-gray-600">
          <p className="mb-4">
            <strong>Affiliate Disclosure:</strong> GiftLanka is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <p>
            As an Amazon Associate, we earn from qualifying purchases. Prices and availability of products are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon at the time of purchase will apply to the purchase of this product.
          </p>
        </div>

        <div className="text-center mt-8 text-xs text-gray-600" suppressHydrationWarning>
          © {new Date().getFullYear()} GiftLanka. All rights reserved.
        </div>

      </div>
    </footer>
  );
}