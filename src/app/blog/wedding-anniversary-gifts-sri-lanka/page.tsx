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
          The Union of Souls: A Guide to Matrimonial Tributes
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-neutral-800 pb-8 mb-8 font-mono">
          <span>Dec 12, 2025</span> • <span>By The Curator</span> • <span>Weddings & Anniversaries</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-white italic mb-8 font-serif">
            "A wedding is a moment; a marriage is an epoch. The gift must reflect the gravity of this oath."
          </p>
          <p>
            The search for a <strong>wedding gift in Sri Lanka</strong> often ends in the tragedy of kitchen appliances. We propose a different path. A gift for a union should be as lasting as the vows themselves. Whether for a young couple or as an <strong>anniversary gift for parents</strong>, let the choice be timeless.
          </p>

          <hr className="border-neutral-800 my-12" />

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">I. The Eternal Canvas (Large Metal Wall Art)</h2>
            <p className="mb-4">
              A blender will rust. A set of plates will break. But a wedding portrait infused into a 24-inch sheet of aluminum will witness the turning of generations. It is the ultimate <strong>luxury wedding gift</strong>.
            </p>
            <div className="mt-4 bg-neutral-900/50 p-4 border-l-2 border-yellow-500 text-sm text-gray-400 italic">
               "Coming Soon to Colombo. The gold standard of wall art."
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">II. The Domestic Hearth (Nespresso Machine)</h2>
            <p className="mb-4">
              If one must give a machine, let it be one that fuels conversation. A coffee machine is the hearth of the modern home, where husband and wife convene before the battles of the day begin.
            </p>
             <div className="flex gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mt-4">
                <span>Best For: The New Home</span> • <span>Est. Price: Rs. 65,000</span>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}