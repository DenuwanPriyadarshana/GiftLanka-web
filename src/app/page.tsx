"use client";

import Link from "next/link";
import Image from "next/image"; 
import { Sparkles, ArrowRight, Calendar, User } from "lucide-react";

// --- THE MAGAZINE DATABASE ---
// This list controls what appears on your homepage.
const articles = [
  {
    slug: "top-10-gifts-for-men",
    title: "A Treatise on the Selection of Worthy Tokens for the Modern Gentleman",
    excerpt: "Presuming upon a marketplace of vast digital richness, the inhabitants of Colombo have given themselves up to a species of purchasing which is detrimental...",
    date: "Dec 10, 2025",
    image: "/images/blog-him.jpg", 
    category: "Gentleman's Guide"
  },
  {
    slug: "gifts-for-her-sri-lanka",
    title: "A Study in Elegance: Tokens of Affection for the Lady",
    excerpt: "To select a gift for the fairer sex is not merely a transaction; it is a translation of emotion into matter. We explore the finest options in Colombo...",
    date: "Dec 11, 2025",
    image: "/images/blog-her.jpg",
    category: "For Her"
  },
  {
    slug: "wedding-anniversary-gifts-sri-lanka",
    title: "The Union of Souls: A Guide to Matrimonial Tributes",
    excerpt: "A wedding is a moment; a marriage is an epoch. The search for a wedding gift in Sri Lanka often ends in the tragedy of kitchen appliances. We propose a different path...",
    date: "Dec 12, 2025",
    image: "/images/blog-wedding.jpg",
    category: "Weddings"
  },
  {
    slug: "gifts-for-gamers-sri-lanka",
    title: "The Tools of the Modern Artificer: Gifts for the Technologist",
    excerpt: "He resides not merely in the physical realm, but in the digital ether. Finding gifts for gamers in Sri Lanka need not be a game of chance...",
    date: "Dec 13, 2025",
    image: "/images/blog-gamer.jpg",
    category: "Gaming & Tech"
  },
  {
    slug: "corporate-gifts-sri-lanka",
    title: "The Exchange of Respect: Professional Tokens for the Leader",
    excerpt: "In the theatre of commerce, a gift is a silent ambassador. Selecting a gift for a boss is a delicate negotiation between familiarity and formality...",
    date: "Dec 14, 2025",
    image: "/images/blog-boss.jpg",
    category: "Corporate"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-20">
      <div className="container px-4 mx-auto">
        
        {/* HERO SECTION */}
        <section className="mb-20 text-center">
          <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-500 mb-6">
            <Sparkles className="mr-2 h-4 w-4" /> GiftLanka Magazine
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">
            The Art of <br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Thoughtful Gifting
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Curated guides, premium selections, and timeless ideas for the modern Sri Lankan.
          </p>
        </section>

        {/* ARTICLES GRID */}
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-16">
            {articles.map((article, index) => (
              <Link href={`/blog/${article.slug}`} key={index} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                  <div className="grid md:grid-cols-2 min-h-[300px]">
                    
                    {/* Image Side */}
                    <div className="relative h-64 md:h-auto w-full bg-neutral-800">
                       <Image 
                         src={article.image}
                         alt={article.title}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       {/* Category Tag */}
                       <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-bold text-white rounded-full border border-white/10">
                         {article.category}
                       </div>
                    </div>
                    
                    {/* Text Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono uppercase tracking-wider">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
                        <span className="flex items-center gap-1"><User className="h-3 w-3" /> The Curator</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 mb-8 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-yellow-500 font-bold group-hover:underline">
                        Read Full Treatise <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}