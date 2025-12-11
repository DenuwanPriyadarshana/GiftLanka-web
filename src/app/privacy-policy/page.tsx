"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-gray-400 pt-24 pb-20">
      <div className="container max-w-4xl px-4 mx-auto">
        
        {/* HERO SECTION */}
        <div className="mb-12 border-b border-neutral-800 pb-8">
          <Link href="/" className="inline-flex items-center text-sm text-yellow-500 hover:text-yellow-400 mb-6 transition-colors font-bold">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
             <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                <Shield className="h-6 w-6" />
             </div>
             <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">Last Updated: December 11, 2025</p>
        </div>

        {/* CONTENT BLOCKS */}
        <div className="grid gap-6">
            
            {/* Block 1 */}
            <section className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-500" /> 1. Amazon Associates Disclosure
                </h3>
                <p className="leading-relaxed">
                    GiftLanka is a participant in the <strong>Amazon Services LLC Associates Program</strong>. This means that when you click on links to Amazon from our site, we may earn a small commission. This comes at <strong>zero cost to you</strong> and helps us keep this magazine running.
                </p>
            </section>

            {/* Block 2 */}
            <section className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-green-500" /> 2. Cookies & Tracking
                </h3>
                <p className="leading-relaxed mb-4">
                    We use standard tracking technologies (cookies) to improve your experience. Specifically:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                    <li><strong>Analytics:</strong> We track anonymous data (like which articles are most popular).</li>
                    <li><strong>Affiliate Tracking:</strong> If you click a product link, Amazon places a cookie on your device for 24 hours to track the referral.</li>
                </ul>
            </section>

            {/* Block 3 */}
            <section className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-500" /> 3. Information Collection
                </h3>
                <p className="leading-relaxed">
                    We <strong>do not</strong> collect your personal data (like name, address, or credit card info). All purchases are handled securely by Amazon. We never see your payment details.
                </p>
            </section>

            

        </div>
      </div>
    </main>
  );
}