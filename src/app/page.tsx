"use client";

import Image from "next/image";
import { Sparkles, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex w-full max-w-4xl flex-col items-center justify-center p-4 text-center">
      
      {/* Background Glow Effect */}
      <div className="absolute -top-40 left-0 right-0 mx-auto h-[500px] w-[500px] rounded-full bg-yellow-600/10 blur-[120px]" />

      {/* 1. THE LOGO */}
      <div className="relative mb-8 h-24 w-24 overflow-hidden rounded-2xl border border-yellow-600/30 shadow-[0_0_30px_rgba(234,179,8,0.15)]">
        <Image
          src="/gold-logo.png"
          alt="GiftLanka"
          fill
          className="object-cover"
        />
      </div>

      {/* 2. THE HEADLINE */}
      <div className="space-y-6">
        <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-500">
          <Sparkles className="mr-2 h-4 w-4" /> Coming Soon to SriLanka
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          Don't Print on Paper. <br />
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Print on Metal.
          </span>
        </h1>

        {/* UPDATED TEXT SECTION */}
        <p className="mx-auto max-w-xl text-lg text-gray-400 leading-relaxed">
          The perfect gift doesn't fade. <br/>
          Give them a masterpiece that shines forever.
        </p>
      </div>

      {/* 3. SOCIAL LINKS */}
      <div className="mt-12 flex gap-8 text-gray-600">
        <a href="#" className="hover:text-yellow-500 hover:scale-110 transition-all duration-300">
            <Instagram className="h-8 w-8" />
        </a>
        <a href="#" className="hover:text-yellow-500 hover:scale-110 transition-all duration-300">
            <Facebook className="h-8 w-8" />
        </a>
      </div>
      
      <p className="mt-12 text-xs text-neutral-800 font-mono">© 2025 GiftLanka. All rights reserved.</p>

    </main>
  );
}