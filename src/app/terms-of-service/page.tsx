"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle, Copyright } from "lucide-react";

export default function TermsOfService() {
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
                <Scale className="h-6 w-6" />
             </div>
             <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">Last Updated: December 11, 2025</p>
        </div>

        {/* CONTENT BLOCKS */}
        <div className="grid gap-6">

            <section className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-500" /> 1. Acceptance of Terms
                </h3>
                <p className="leading-relaxed">
                    By accessing <strong>GiftLanka.com</strong>, you agree to these terms. If you do not agree, you may not use our services. We provide this website as a free resource for gift ideas and product reviews.
                </p>
            </section>

            <section className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" /> 2. Affiliate Disclaimer
                </h3>
                <p className="leading-relaxed">
                    This website contains affiliate links. We are not the manufacturer or seller of the products listed. We simply curate and review them. 
                    <strong> We are not liable</strong> for any issues with products purchased through Amazon (shipping delays, defects, etc.). Please contact Amazon support for those issues.
                </p>
            </section>

            <section className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Copyright className="h-5 w-5 text-yellow-500" /> 3. Intellectual Property
                </h3>
                <p className="leading-relaxed">
                    The content, text, and original images on GiftLanka are owned by us. You may not copy or republish our articles without written permission. Product images belong to their respective manufacturers.
                </p>
            </section>

        </div>
      </div>
    </main>
  );
}