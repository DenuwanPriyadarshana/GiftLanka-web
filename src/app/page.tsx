"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Calendar, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-20">
      <div className="container px-4 mx-auto">
        
        {/* 1. HERO SECTION */}
        <section className="mb-20 text-center">
          <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-500 mb-6">
            <Sparkles className="mr-2 h-4 w-4" /> GiftLanka Magazine
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">
            The Art of <br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Thoughtful Gifting
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Curated guides, premium selections, and timeless ideas for the modern Sri Lankan.
          </p>
        </section>

        {/* 2. FEATURED ARTICLE (Links to the file you just made) */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">Latest Treatise</h2>
          
          <Link href="/blog/top-10-gifts-for-men" className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              <div className="grid md:grid-cols-2">
                {/* Image Placeholder */}
                <div className="relative h-64 md:h-auto w-full bg-neutral-800 flex items-center justify-center">
                   <span className="text-neutral-600 font-mono">Article Cover Image</span>
                </div>
                
                {/* Text Side */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Dec 10, 2025</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> The Curator</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                    A Treatise on the Selection of Worthy Tokens for the Modern Gentleman
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    Presuming upon a marketplace of vast digital richness, the inhabitants of Colombo have given themselves up to a species of purchasing...
                  </p>
                  <div className="flex items-center text-yellow-500 font-bold group-hover:underline">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

      </div>
    </main>
  );
}