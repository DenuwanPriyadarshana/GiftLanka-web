"use client";

import Image from "next/image";
import { ExternalLink, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- PRODUCT DATABASE ---
const products = [
  {
    id: 1,
    name: "Stanley Quencher H2.0 (40oz)",
    // Price removed for safety
    image: "/images/stanley.jpg", 
    rating: 5,
    link: "https://amzn.to/4q725K8", 
    tag: "Viral #1 Best Seller"
  },
  {
    id: 2,
    name: "Kindle Paperwhite (16GB)",
    image: "/images/kindle.jpg", 
    rating: 5,
    link: "https://amzn.to/4iSQVGq", 
    tag: "Top Tech Gift"
  },
  {
    id: 3,
    name: "Ninja CREAMI Ice Cream Maker",
    image: "/images/ninja.jpg", 
    rating: 4,
    // ✅ NEW LINK ADDED HERE:
    link: "https://amzn.to/48NiDjg", 
    tag: "Kitchen Essential"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Headphones",
    image: "/images/sony.jpg", 
    rating: 5,
    link: "https://amzn.to/44Iv1Qr", 
    tag: "Premium Audio"
  },
];

export default function ShopHome() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-20">
      
      {/* SHOP HERO */}
      <div className="container px-4 mx-auto mb-12 text-center">
        <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-500 mb-6">
            <TrendingUp className="mr-2 h-4 w-4" /> Global Best Sellers
        </div>
        <h1 className="text-5xl font-extrabold mb-4">
          The Global <span className="text-yellow-500">Collection</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          The finest viral products from the USA, available for global shipping.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all hover:-translate-y-1">
              
              {/* Image Area */}
              <div className="relative h-64 bg-white overflow-hidden">
                <Image 
                  src={product.image} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  alt={product.name} 
                />
                
                {product.tag && (
                  <span className="absolute top-2 left-2 z-10 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded shadow-md">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Details Area */}
              <div className="p-5">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                
                <h3 className="font-bold text-lg line-clamp-1 mb-4">{product.name}</h3>
                
                {/* Price removed. Button now encourages the click. */}
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-black hover:bg-yellow-400 hover:text-black font-bold transition-colors">
                    Check Price on Amazon <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

    </main>
  );
}