"use client";

import Link from "next/link";
import Image from "next/image"; 
import { ArrowRight, BookOpen } from "lucide-react";

// --- ARTICLE DATABASE (SEO OPTIMIZED) ---
const articles = [
 {
    slug: "global-gift-trends-2025",
    // UPDATE TITLE:
    title: "Viral in the USA: Top 5 Trending Gifts of 2025", 
    // UPDATE EXCERPT:
    excerpt: "We tracked the American market to find the items that are selling out everywhere. From the Stanley Cup to the Ninja Creami...",
    image: "/images/blog-global.jpg", 
    category: "Market Trends"
  },
  {
    slug: "top-10-gifts-for-men",
    title: "10 Best Luxury Gifts for Men (2025 Guide)", // SEO: "Best Gifts for Men"
    excerpt: "Stop buying boring ties. Here are the top 10 high-value gifts for husbands, fathers, and boyfriends that they actually want...",
    image: "/images/blog-him.jpg", 
    category: "For Him"
  },
  {
    slug: "gifts-for-her-sri-lanka",
    title: "Unique Gifts for Her: The Ultimate Shopping List", // SEO: "Unique Gifts for Her"
    excerpt: "From skincare viral hits to timeless jewelry, discover the gifts that are trending for women this holiday season...",
    image: "/images/blog-her.jpg", 
    category: "For Her"
  },
  {
    slug: "gifts-for-gamers-sri-lanka", 
    title: "Top 10 Gifts for Gamers & Tech Lovers", // SEO: "Gifts for Gamers"
    excerpt: "Don't buy the wrong game. We break down the best tech accessories, controllers, and room decor for the modern gamer...",
    image: "/images/blog-gamer.jpg", 
    category: "Tech & Gaming"
  },
  {
    slug: "wedding-anniversary-gifts-sri-lanka", 
    title: "Best Wedding & Anniversary Gifts for Couples", // SEO: "Wedding Gifts"
    excerpt: "Skip the kitchen appliances. Here are meaningful, lasting gift ideas that celebrate the union of two people...",
    image: "/images/blog-wedding.jpg", 
    category: "Weddings"
  },
  {
    slug: "corporate-gifts-sri-lanka", 
    title: "Corporate Gifting Guide: Ideas for Bosses & Clients", // SEO: "Corporate Gifting"
    excerpt: "Navigate the delicate art of business gifting. Safe, professional, and impressive options for your executive team...",
    image: "/images/blog-boss.jpg", 
    category: "Business"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-20">
      <div className="container px-4 mx-auto">
        
        {/* HEADER */}
        <section className="mb-16 text-center">
           <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-6">
            <BookOpen className="mr-2 h-4 w-4" /> GiftLanka Magazine
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Read. Learn. Gift.</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert buyer's guides, global trend reports, and curated lists for every occasion.
          </p>
        </section>

        {/* ARTICLE GRID */}
        <section className="max-w-5xl mx-auto grid gap-8">
          {articles.map((article, index) => (
            <Link href={`/blog/${article.slug}`} key={index} className="group block">
              <div className="flex flex-col md:flex-row gap-6 items-center border border-neutral-800 bg-neutral-900/50 p-4 rounded-xl hover:border-yellow-500/50 transition-all">
                
                {/* IMAGE THUMBNAIL */}
                <div className="relative h-48 w-full md:w-72 overflow-hidden rounded-lg bg-black">
                   <Image 
                     src={article.image} 
                     alt={article.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform" 
                   />
                </div>
                
                {/* TEXT CONTENT */}
                <div className="flex-1 p-2">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">{article.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <span className="text-sm font-bold text-white flex items-center group-hover:underline">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}