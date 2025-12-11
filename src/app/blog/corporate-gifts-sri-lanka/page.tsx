"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Executive Gift Guide: Best Corporate Gifts for Clients & Bosses
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Updated Dec 14, 2025</span> • <span>Business Trends</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-12 font-serif">
            "Impress your clients and executives with these premium corporate gifts. Selected for their professional appeal and high utility in the US business world."
          </p>

          {/* ITEM 1 */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <h2 className="text-3xl font-bold text-white mb-4">1. The Executive Standard: Montblanc Pen</h2>
            <p className="mb-6">
              In the American boardroom, a Montblanc pen is a universal symbol of success and authority. It is the ultimate traditional gift for a signing ceremony or promotion.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2. The Smart Notebook: Kindle Scribe</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
                <Image src="/images/kindle.jpg" fill className="object-cover" alt="Kindle Scribe" />
            </div>
            <p className="mb-6">
              Perfect for the modern CEO. It allows them to read documents and take handwritten notes digitally. A top-rated productivity tool in the US market.
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