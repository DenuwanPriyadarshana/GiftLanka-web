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
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/galaxy-projector.png" fill className="object-cover" alt="Galaxy Star Projector" />
            </div>
            <p className="mb-6">
              Transform any gaming room into a galaxy. This laser projector is a massive trend on "Gaming Setup" Instagram pages in the USA. It sets the perfect late-night vibe.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 3 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">3. The Sound Advantage: HyperX Cloud II</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/hyperx-cloud.png" fill className="object-cover" alt="HyperX Cloud II" />
            </div>
            <p className="mb-6">
              Legendary comfort and immersive 7.1 surround sound. This headset is a staple for competitive gamers who need to hear every footstep.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 4 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">4. The Typist's Dream: Keychron K2</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/keychron-k2.png" fill className="object-cover" alt="Keychron K2" />
            </div>
            <p className="mb-6">
              A wireless mechanical keyboard that pairs with up to 3 devices. It is compact, clicky, and looks stunning on any desk.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 5 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">5. The Wireless Wonder: Logitech G Pro X Superlight</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/logitech-mouse.png" fill className="object-cover" alt="Logitech G Pro X" />
            </div>
            <p className="mb-6">
              weighing under 63 grams, this mouse is designed for esports pros. It is incredibly fast and precise, removing all drag.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 6 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">6. The Streamer's Friend: Elgato Stream Deck</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/stream-deck.png" fill className="object-cover" alt="Elgato Stream Deck" />
            </div>
            <p className="mb-6">
              15 LCD keys poised to launch unlimited actions. Perfect for streamers to switch scenes, launch media, and control audio with one touch.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 7 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">7. The Reality Bender: Meta Quest 3</h2>
            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
              <Image src="/images/meta-quest-3.png" fill className="object-cover" alt="Meta Quest 3" />
            </div>
            <p className="mb-6">
              The latest in mixed reality. It allows you to play immersive games or work in a virtual environment. A truly futuristic gift.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 8 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">8. The Throne: Secretlab Titan Evo</h2>
            <p className="mb-6">
              The gold standard of gaming chairs. It offers superior ergonomic support for long gaming sessions and premium build quality.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 9 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">9. The Portable King: Nintendo Switch OLED</h2>
            <p className="mb-6">
              With a vibrant 7-inch OLED screen, handheld gaming has never looked better. Perfect for playing Zelda or Mario on the go.
            </p>
            <a href="https://amzn.to/YOUR_LINK_HERE" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                Check Price on Amazon <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* ITEM 10 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">10. The Speed Boost: Samsung T7 Portable SSD</h2>
            <p className="mb-6">
              Gamers always need more space. This SSD is rugged, secure, and incredibly fast, reducing load times significantly for PC and console.
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