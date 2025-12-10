import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      
      {/* ARTICLE HEADER */}
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          A Treatise on the Selection of Worthy Tokens for the Modern Gentleman
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Dec 10, 2025</span> • <span>By The Curator</span> • <span>Top 10 For Him</span>
        </div>

        {/* INTRO */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-8 font-serif">
            "The present age is one of unprecedented material abundance, yet paradoxically, it remains an era of profound confusion regarding the art of giving."
          </p>
          <p>
            Presuming upon a marketplace of vast digital richness, the inhabitants of Colombo have for a long series of years given themselves up to a species of purchasing which was beginning at length to be detrimental in its effects—namely, the acquisition of the temporary, the plastic, and the forgettable.
          </p>
          <p>
            Therefore, we have ventured to compile a catalogue of ten items of merit—objects not merely of utility, but of character.
          </p>

          <hr className="border-neutral-800 my-12" />

          {/* ITEM 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">I. The Immutable Portrait (Custom Metal Print)</h2>
            <p className="mb-4">
              In an epoch where memories are imprisoned within the fragile glass of cellular telephones, there exists a noble rebellion in the act of giving physical permanence to a moment. We speak here of the <strong>Metal Print</strong>. Unlike the paper of old, these images are infused by fire into sheets of aluminum.
            </p>
            <div className="mt-4 bg-neutral-900/50 p-4 border-l-2 border-yellow-500 text-sm text-gray-400 italic">
               "Coming Soon: GiftLanka's own studio is currently being prepared to bring this craft to Colombo."
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">II. The Illuminated Manuscript (Kindle Paperwhite)</h2>
            <p className="mb-4">
              It has been observed by scholars that a man who reads lives a thousand lives before he dies. The Kindle Paperwhite resolves the tension of physical libraries, offering a slate of infinite knowledge that mimics the very texture of ink on paper.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The Intellectual</span> • <span>Est. Price: Rs. 45,000</span>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">III. The Vessel of Temperature (Yeti Rambler)</h2>
            <p className="mb-4">
              There is a plain intimation in the laws of thermodynamics that heat must inevitably dissipate. However, the engineers at Yeti have seemingly defied this natural order. For the man who labors long hours, it is an indispensable companion.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The Workaholic</span> • <span>Est. Price: Rs. 15,000</span>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">IV. The Orchestrator of Sound (Sony WH-1000XM5)</h2>
            <p className="mb-4">
              We live in a world of clamour and noise. To bestow upon a man the gift of silence is an act of supreme kindness. These headphones do not merely produce music; they actively suppress the chaos of the outside world, creating a sanctuary of quietude.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The Commuter</span> • <span>Est. Price: Rs. 110,000</span>
            </div>
          </div>

           {/* ITEM 5 */}
           <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">V. The Blade of Precision (Swiss Army Knife)</h2>
            <p className="mb-4">
              Presuming that a man should be prepared for the vicissitudes of fortune, the Swiss Army Knife remains the quintessential tool of readiness. It is not merely a knife, but a compact arsenal of utility. To carry one is to carry confidence.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The Adventurer</span> • <span>Est. Price: Rs. 12,000</span>
            </div>
          </div>
           
           <hr className="border-neutral-800 my-12" />

           <div className="bg-neutral-900 p-8 rounded-2xl text-center">
             <Quote className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
             <p className="italic text-gray-400 text-lg">
               "Let it not be said that the inhabitants of this region are without recourse in the face of a celebration. The perfect token awaits the discerning eye."
             </p>
             <p className="text-sm font-bold text-white mt-4">— The Curator</p>
           </div>

        </div>
      </div>
    </article>
  );
}