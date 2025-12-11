"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Watch, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          10 Best Luxury Gifts for Men (2025 Guide)
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Updated Dec 10, 2025</span> • <span>By The Curator</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-12 font-serif">
            "Stop buying ties. The modern man values utility, durability, and tech. Here are the gifts he actually wants."
          </p>

          {/* ITEM 1 */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <h2 className="text-3xl font-bold text-white mb-4">1. The Noise Killer: Sony WH-1000XM5</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
                <Image src="/images/sony.jpg" fill className="object-cover" alt="Sony Headphones" />
            </div>
            <p className="mb-6">
              Whether he commutes or works in a busy office, silence is the ultimate luxury. These headphones are universally rated as the best noise-canceling tech on the market.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2. The Indestructible Cooler: Yeti Hopper</h2>
            <p className="mb-6">
              For the man who loves the outdoors (or just tailgating). Yeti coolers are legendary for keeping ice frozen for days. It is the last cooler he will ever need to buy.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

           {/* ITEM 3 */}
           <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">3. The Everyday Carry: Leatherman Wave+</h2>
            <p className="mb-6">
              A toolkit in his pocket. With 18 tools including pliers and wire cutters, it is the definition of practical capability.
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