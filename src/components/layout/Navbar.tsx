"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-yellow-600/50 shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]">
            {/* UPDATED: pointing to .png now */}
            <Image
              src="/gold-logo.png" 
              alt="GiftLanka Premium Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Gift<span className="text-yellow-500">Lanka</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/shop" className="hover:text-yellow-400 transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors">Process</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-400 hover:bg-white/5">
            <ShoppingBag className="size-5" />
          </Button>

          {/* MOBILE MENU */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-300">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-900 border-l border-neutral-800 text-white">
              <div className="flex flex-col gap-6 mt-10 text-lg font-medium">
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}