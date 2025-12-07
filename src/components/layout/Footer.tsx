import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-gray-400">
      <div className="container grid gap-8 px-4 md:grid-cols-4">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-yellow-600">
              <Sparkles className="h-3 w-3 text-black" />
            </div>
            <span className="text-lg font-bold">GiftLanka</span>
          </div>
          <p className="mt-4 max-w-xs text-sm">
            Sri Lanka's premium metal print studio. Turning memories into waterproof, gallery-grade masterpieces.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-bold text-white">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>Metal Prints</li>
            <li>Magic Mugs</li>
            <li>Rock Slates</li>
            <li>Gift Boxes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-bold text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Colombo, Sri Lanka</li>
            <li>hello@giftlanka.com</li>
            <li>+94 77 123 4567</li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 border-t border-white/10 pt-8 text-center text-xs">
        © 2025 GiftLanka. All rights reserved.
      </div>
    </footer>
  );
}