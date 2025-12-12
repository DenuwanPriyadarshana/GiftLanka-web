"use client";

import Link from "next/link";
import { ShoppingBag, BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-white tracking-tighter">
          GIFT<span className="text-yellow-500">LANKA</span>
        </Link>


        {/* MENU LINKS */}
        <div className="flex gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            <ShoppingBag className="h-4 w-4" /> Shop
          </Link>
          <Link href="/blog" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            <BookOpen className="h-4 w-4" /> Magazine
          </Link>
        </div>

      </div>
    </nav>
  );
}