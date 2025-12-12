"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Flame, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">

        {/* BACK BUTTON */}
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>

        {/* HERO TITLE */}
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-sm text-red-500 mb-6">
            <Flame className="mr-2 h-4 w-4" /> Viral on TikTok & Instagram
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Viral in the USA: The Top 5 Trending Gifts of 2025
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 font-mono">
            <span>Updated Dec 15, 2025</span> • <span>By The Curator</span>
          </div>
        </div>

        {/* INTRO */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-12 font-serif">
            "We tracked the American market to find the items that are selling out everywhere. If you want a gift that screams 'modern' and 'cool', this is your list."
          </p>

          {/* PRODUCT 1: STANLEY */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <div className="flex items-center gap-2 text-yellow-500 font-bold mb-2">
              <TrendingUp className="h-5 w-5" /> #1 Best Seller
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">1. The Hydration Status Symbol: Stanley Quencher H2.0</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              {/* Ensure you have stanley.jpg in public/images/ */}
              <Image src="/images/stanley.jpg" fill className="object-cover" alt="Stanley Cup" />
            </div>
            <p className="mb-6">
              It is not just a cup; it is a fashion accessory. Seen on the desk of every influencer from New York to LA, the 40oz Stanley Quencher keeps ice frozen for 2 days and fits perfectly in a car cup holder.
            </p>
            <a href="https://amzn.to/4q725K8" target="_blank">
              <Button className="w-full md:w-auto bg-yellow-500 text-black hover:bg-yellow-400 font-bold text-lg">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* PRODUCT 2: KINDLE */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <Zap className="h-5 w-5" /> Tech Favorite
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">2. The Infinite Library: Kindle Paperwhite</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/kindle.jpg" fill className="object-cover" alt="Kindle Paperwhite" />
            </div>
            <p className="mb-6">
              "BookTok" has made reading cool again. The new Paperwhite is waterproof, has a warm light for night reading, and holds thousands of books. It is the ultimate travel companion.
            </p>
            <a href="https://amzn.to/4iSQVGq" target="_blank">
              <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-bold text-lg">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* PRODUCT 3: NINJA CREAMI */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <h2 className="text-3xl font-bold text-white mb-4">3. The Kitchen Viral Hit: Ninja CREAMI</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/ninja.jpg" fill className="object-cover" alt="Ninja Creami" />
            </div>
            <p className="mb-6">
              This machine turns anything—protein shakes, fruit, or yogurt—into gourmet ice cream. It is currently the most wished-for kitchen gadget in America.
            </p>

            {/* ✅ NEW LINK ADDED HERE: */}
            <a href="https://amzn.to/48NiDjg" target="_blank">
              <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-bold text-lg">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* PRODUCT 4: SONY HEADPHONES */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">4. The Silence Maker: Sony WH-1000XM5</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/sony.jpg" fill className="object-cover" alt="Sony Headphones" />
            </div>
            <p className="mb-6">
              The gold standard for noise cancellation. Whether for a busy office or a long flight, these headphones create a sanctuary of silence. Sleek, comfortable, and incredible sound.
            </p>
            <a href="https://amzn.to/44Iv1Qr" target="_blank">
              <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-bold text-lg">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* PRODUCT 5: OURA RING */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">5. The Health Tracker: Oura Ring Gen3</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-global.jpg" fill className="object-cover" alt="Oura Ring" />
            </div>
            <p className="mb-6">
              Discreet, stylish, and incredibly powerful. This ring tracks your sleep, readiness, and activity with precision, all without a screen to distract you.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-bold text-lg">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </article>
  );
}