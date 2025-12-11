"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Best Gifts for Her 2025: The Viral USA Shopping List
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Updated Dec 11, 2025</span> • <span>USA Market Guide</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-12 font-serif">
            "Looking for the best gifts for women in 2025? We tracked the top-selling items on Amazon USA and TikTok to find the gifts she actually wants."
          </p>

          {/* ITEM 1 */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <div className="flex items-center gap-2 text-yellow-500 font-bold mb-2">
               <Star className="h-4 w-4" /> #1 Most Wished For in USA
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">1. The "It" Cup: Stanley Quencher H2.0</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
                <Image src="/images/stanley.jpg" fill className="object-cover" alt="Stanley Cup USA" />
            </div>
            <p className="mb-6">
              The Stanley Quencher is the undisputed queen of gifts in America right now. It keeps water ice-cold for 48 hours and fits perfectly in US car cup holders. A massive viral hit on social media.
            </p>
            <a href="https://amzn.to/4q725K8" target="_blank">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="mb-16 border-b border-neutral-800 pb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2. The Skincare Viral Hit: Laneige Lip Mask</h2>
            <p className="mb-6">
              With over 20,000 5-star reviews on Amazon, this is the ultimate "stocking stuffer." It hydrates lips overnight and is a staple in every American beauty routine.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </a>
          </div>

           {/* ITEM 3 */}
           <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">3. The Anxiety Reliever: Weighted Blanket</h2>
            <p className="mb-6">
              A top-rated wellness gift in the US. Weighted blankets provide deep pressure stimulation, feeling like a warm hug. Perfect for the winter season.
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