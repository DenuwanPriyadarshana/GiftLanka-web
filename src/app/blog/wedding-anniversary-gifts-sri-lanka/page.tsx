"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Best Wedding & Anniversary Gifts: USA Registry Favorites
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Updated Dec 12, 2025</span> • <span>Home & Living</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-12 font-serif">
            "Skip the boring toaster. These are the top-rated wedding and anniversary gifts on Amazon USA that couples will cherish for a lifetime."
          </p>

          {/* ITEM 1 */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <h2 className="text-3xl font-bold text-white mb-4">1. The Morning Luxury: Nespresso Vertuo</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
                <Image src="/images/ninja.jpg" fill className="object-cover" alt="Nespresso Coffee Machine" />
            </div>
            <p className="mb-6">
              The #1 wedding registry item in the USA for coffee lovers. It brews barista-quality coffee with a single button. A luxurious addition to any new home.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2. The Modern Memory: Aura Digital Frame</h2>
            <p className="mb-6">
              The perfect anniversary gift. This WiFi-connected frame lets you send photos directly from your phone. It's the best way to display wedding photos in high definition.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

        </div>
      </div>
    </article>
  );
}