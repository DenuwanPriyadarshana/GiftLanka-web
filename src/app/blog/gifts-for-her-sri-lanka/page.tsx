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
          Top 10 Gifts for Her: Best-Selling Ideas She'll Love
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Updated Dec 11, 2025</span> • <span>USA Market Guide</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-12 font-serif">
            "Whether it's your mom, sister, or partner, these gifts are fail-safe. Curated from the most wished-for items on Amazon."
          </p>

          {/* ITEM 1 */}
          <div className="mb-16 border-b border-border pb-12">
            <div className="flex items-center gap-2 text-yellow-500 font-bold mb-2">
              <Star className="h-4 w-4" /> #1 Most Wished For in USA
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">1. The "It" Cup: Stanley Quencher H2.0</h2>
            <div className="relative h-64 w-full bg-card rounded-xl overflow-hidden mb-6 border border-white/5">
              <Image src="/images/stanley.jpg" fill className="object-cover" alt="Stanley Cup USA" />
            </div>
            <p className="mb-6">
              The Stanley Quencher is the undisputed queen of gifts in America right now. It keeps water ice-cold for 48 hours and fits perfectly in US car cup holders. A massive viral hit on social media.
            </p>
            <a href="https://amzn.to/4q725K8" target="_blank">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 2 */}
          <div className="mb-16 border-b border-border pb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">2. The Skincare Viral Hit: Laneige Lip Mask</h2>
            <div className="relative h-64 w-full bg-card rounded-xl overflow-hidden mb-6 border border-white/5">
              <Image src="/images/laneige.jpg" fill className="object-cover" alt="Laneige Lip Mask" />
            </div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">3. The Anxiety Reliever: Weighted Blanket</h2>
            <div className="relative h-64 w-full bg-card rounded-xl overflow-hidden mb-6 border border-white/5">
              <Image src="/images/weighted-blanket.jpg" fill className="object-cover" alt="Weighted Blanket" />
            </div>
            <p className="mb-6">
              A top-rated wellness gift in the US. Weighted blankets provide deep pressure stimulation, feeling like a warm hug. Perfect for the winter season.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 4 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">4. The Beauty Essential: Dyson Airwrap</h2>
            <div className="relative h-64 w-full bg-card rounded-xl overflow-hidden mb-6 border border-white/5">
              <Image src="/images/dyson.jpg" fill className="object-cover" alt="Dyson Airwrap" />
            </div>
            <p className="mb-6">
              The most coveted hair tool in the world. It dries and styles simultaneously without extreme heat. A serious luxury gift that she will use every day.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 5 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">5. The Yogi's Choice: Lululemon Reversible Mat 5mm</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-her.jpg" fill className="object-cover" alt="Lululemon Mat" />
            </div>
            <p className="mb-6">
              Extra cushion and grip for her practice. This is the gold standard for yoga mats, providing stability and comfort for any workout.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 6 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">6. The Instant Memory: Instax Mini 12</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-her.jpg" fill className="object-cover" alt="Instax Mini 12" />
            </div>
            <p className="mb-6">
              Capture moments instantly with a retro vibe. This camera is fun, easy to use, and perfect for parties and travel.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 7 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">7. The Everyday Bag: Marc Jacobs The Tote Bag</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-her.jpg" fill className="object-cover" alt="Marc Jacobs Tote" />
            </div>
            <p className="mb-6">
              Functional, stylish, and iconic. This tote bag has taken over social media and is practical enough for work or weekend trips.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 8 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">8. The Luxury Scent: Baccarat Rouge 540</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-her.jpg" fill className="object-cover" alt="Baccarat Rouge 540" />
            </div>
            <p className="mb-6">
              A fragrance that turns heads. Sophisticated and long-lasting, it is a splurge that signifies true luxury.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 9 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">9. The Golden Touch: Mejuri Gold Hoops</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-her.jpg" fill className="object-cover" alt="Mejuri Hoops" />
            </div>
            <p className="mb-6">
              Classic, elegant, and perfect for daily wear. These gold vermeil hoops are a timeless addition to her jewelry collection.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 10 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">10. The Ambiance: Diptyque Baies Candle</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-her.jpg" fill className="object-cover" alt="Diptyque Baies" />
            </div>
            <p className="mb-6">
              Not just a candle, but a piece of decor. The Baies scent is fresh and fruity, filling the room with a luxurious aroma.
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