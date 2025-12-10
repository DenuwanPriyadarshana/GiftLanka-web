import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          The Tools of the Modern Artificer: Gifts for the Technologist
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Dec 13, 2025</span> • <span>By The Curator</span> • <span>Gaming & Tech</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-8 font-serif">
            "He resides not merely in the physical realm, but in the digital ether. His tools must be sharp, swift, and luminous."
          </p>
          <p>
            To the uninitiated, the world of the gamer is a labyrinth. Yet, finding <strong>gifts for gamers in Sri Lanka</strong> need not be a game of chance. The modern technologist values precision, immersion, and atmosphere.
          </p>

          <hr className="border-neutral-800 my-12" />

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">I. The Engine of Control (Sony DualSense Edge)</h2>
            <p className="mb-4">
              It is not merely a controller; it is an extension of the will. With customizable triggers and haptic feedback, it allows the artificer to manipulate his digital environment with the grace of a pianist.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The PS5 Owner</span> • <span>Est. Price: Rs. 70,000</span>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">II. The Shrine's Backdrop (Gaming Metal Poster)</h2>
            <p className="mb-4">
              Every sanctuary requires iconography. A glossy, high-definition metal print of his favorite digital avatar—be it Elden Ring or Cyberpunk—adds a gravity to the gaming setup that paper posters cannot achieve.
            </p>
            <div className="mt-4 bg-neutral-900/50 p-4 border-l-2 border-yellow-500 text-sm text-gray-400 italic">
               "Coming Soon: Custom Gaming Prints by GiftLanka."
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}