import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-3xl px-4 mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Magazine
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          A Study in Elegance: Tokens of Affection for the Lady
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Dec 11, 2025</span> • <span>By The Curator</span> • <span>Top 10 For Her</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-8 font-serif">
            "To select a gift for the fairer sex is not merely a transaction; it is a translation of emotion into matter."
          </p>
          <p>
            In the bustling bazaars of Colombo, one is often besieged by the garish and the common. Yet, the lady of discernment requires a tribute that speaks to her grace. Whether seeking a <strong>birthday gift for a wife</strong> or a token for a courtship, one must look beyond the trivial.
          </p>

          <hr className="border-neutral-800 my-12" />

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">I. The Captured Memory (Frameless Metal Print)</h2>
            <p className="mb-4">
              Flowers wither and chocolates are consumed, but a memory preserved in metal endures. For the <strong>gift for a girlfriend in Sri Lanka</strong>, nothing rivals the permanence of a high-definition metal portrait. It is waterproof, like true affection should be.
            </p>
            <div className="mt-4 bg-neutral-900/50 p-4 border-l-2 border-yellow-500 text-sm text-gray-400 italic">
               "GiftLanka Studio: Launching Soon. Join the Waitlist."
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">II. The Scent of Memory (Chanel or Dior)</h2>
            <p className="mb-4">
              It is said that the olfactory sense is the strongest link to memory. A vial of French perfume is not merely a liquid; it is an invisible garment she wears.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The Sophisticate</span> • <span>Est. Price: Rs. 35,000</span>
            </div>
          </div>

          {/* Add more items here... */}

        </div>
      </div>
    </article>
  );
}