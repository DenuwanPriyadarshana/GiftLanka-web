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
          The Exchange of Respect: Professional Tokens for the Leader
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Dec 14, 2025</span> • <span>By The Curator</span> • <span>Corporate & Office</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-8 font-serif">
            "In the theatre of commerce, a gift is a silent ambassador. It speaks of taste, respect, and standing."
          </p>
          <p>
            Selecting a <strong>gift for a boss</strong> is a delicate negotiation between familiarity and formality. It must be useful, yet dignified. In the boardrooms of Colombo, the <strong>corporate gift</strong> must reflect the stature of the recipient.
          </p>

          <hr className="border-neutral-800 my-12" />

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">I. The Instrument of Signature (Montblanc or Lamy)</h2>
            <p className="mb-4">
              A signature is the seal of authority. To gift a fine writing instrument is to honor the decisions made by the hand that wields it. It is the quintessential executive tribute.
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The Executive</span> • <span>Est. Price: Rs. 25,000+</span>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">II. The Award of Industry (Custom Metal Plaque)</h2>
            <p className="mb-4">
              Glass trophies shatter; wood rots. A custom-printed metal plaque, displaying a company mission or a milestone, stands as a permanent testament to industry. It is modern, sleek, and indestructible.
            </p>
             <div className="mt-4 bg-neutral-900/50 p-4 border-l-2 border-yellow-500 text-sm text-gray-400 italic">
               "GiftLanka Corporate Solutions: Inquire for bulk orders soon."
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}