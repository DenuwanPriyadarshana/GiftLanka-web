"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Gamepad2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Top 10 Gifts for Gamers & Tech Lovers (2025 Buying Guide)
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Updated Dec 13, 2025</span> • <span>Tech Reviews</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-12 font-serif">
            "Searching for the best tech gifts? We selected the highest-rated gaming gear on Amazon USA that every gamer actually wants."
          </p>

          {/* ITEM 1 */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
             <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
               <Zap className="h-4 w-4" /> Best for PS5 Owners
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">1. The Pro Upgrade: Sony DualSense Edge</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
                <Image src="/images/sony.jpg" fill className="object-cover" alt="PS5 Pro Controller" />
            </div>
            <p className="mb-6">
              This is the controller the pros use. With customizable back buttons and replaceable stick modules, it gives a competitive advantage in Call of Duty and Fortnite. A premium US tech gift.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2. The Setup Creator: Galaxy Star Projector</h2>
            <p className="mb-6">
              Transform any gaming room into a galaxy. This laser projector is a massive trend on "Gaming Setup" Instagram pages in the USA. It sets the perfect late-night vibe.
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