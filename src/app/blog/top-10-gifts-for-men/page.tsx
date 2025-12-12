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
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="Yeti Hopper" />
            </div>
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
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="Leatherman Wave+" />
            </div>
            <p className="mb-6">
              A toolkit in his pocket. With 18 tools including pliers and wire cutters, it is the definition of practical capability.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 4 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">4. The Ultimate Watch: Apple Watch Ultra 2</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="Apple Watch Ultra 2" />
            </div>
            <p className="mb-6">
              Rugged, capable, and ready for adventure. Whether he is a runner, diver, or hiker, this is the most versatile watch on the market.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 5 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">5. The Aerial Eye: DJI Mini 4 Pro</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="DJI Mini 4 Pro" />
            </div>
            <p className="mb-6">
              A high-tech drone that's easy to fly and captures stunning 4K video. It's the perfect toy for the grown-up gadget lover.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 6 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">6. The Party Starter: JBL Flip 6</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="JBL Flip 6" />
            </div>
            <p className="mb-6">
              Portable, waterproof, and loud. This Bluetooth speaker delivers powerful sound for any occasion, from the beach to the backyard BBQ.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 7 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">7. The Coffee Purist: AeroPress Original</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="AeroPress" />
            </div>
            <p className="mb-6">
              For the man who takes his coffee seriously. It makes a smooth, rich cup of coffee without bitterness and is perfect for travel.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 8 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">8. The Kicks Saver: Jason Markk Shoe Cleaner</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="Jason Markk Kit" />
            </div>
            <p className="mb-6">
              Essential for the sneakerhead. This premium shoe cleaner is safe on all materials and keeps his favorite kicks looking fresh out of the box.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 9 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">9. The Power Tool: DeWalt 20V MAX Cordless Drill</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/dewalt-drill.jpg" fill className="object-cover" alt="DeWalt Drill" />
            </div>
            <p className="mb-6">
              Every man needs a reliable drill. Compact, lightweight, and powerful, it is suitable for tight areas and heavy-duty tasks alike.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 10 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">10. The Entertainment Hub: Apple iPad Air</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/blog-him.jpg" fill className="object-cover" alt="iPad Air" />
            </div>
            <p className="mb-6">
              Serious performance in a thin and light design. Whether for work, creativity, or gaming, the iPad Air does it all with style.
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