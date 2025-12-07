"use client";

import Image from "next/image";
import Link from "next/link"; // <--- This fixes the Link error
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react"; // <--- This fixes ShoppingBag error
import { Button } from "@/components/ui/button"; // <--- This fixes Button error
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  // Logic to check if it's metal (for the gold styling)
  const isMetal = product.category === "metal";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-xl border ${
        isMetal ? "border-yellow-600/50" : "border-neutral-800"
      } bg-neutral-900`}
    >
      {/* 1. THE GOLD GLOW (Only for Metal Prints) */}
      {isMetal && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {/* 2. PRODUCT IMAGE */}
      <div className="relative aspect-square w-full overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-700">
           {/* If you have images, use <Image /> here. For now, a grey box. */}
           <div className="h-full w-full bg-neutral-800" />
        </div>
        
        {/* "NEW" Badge */}
        {product.isNew && (
          <div className="absolute left-3 top-3 rounded-full bg-yellow-500 px-2 py-1 text-[10px] font-bold text-black shadow-lg shadow-yellow-500/20">
            NEW
          </div>
        )}
      </div>

      {/* 3. PRODUCT DETAILS */}
      <div className="relative z-10 p-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            {isMetal && (
              <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-yellow-500">
                <Sparkles className="h-3 w-3" /> Premium
              </span>
            )}
            <h3 className="text-lg font-bold text-white">{product.name}</h3>
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-gray-400 mb-4 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <span className="font-mono text-lg text-white">
            Rs. {product.price.toLocaleString()}
          </span>
          
          {/* THE BUTTON THAT LINKS TO THE PRODUCT PAGE */}
          <Link href={`/shop/${product.id}`}>
            <Button size="sm" className={isMetal ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-white text-black hover:bg-gray-200"}>
              <ShoppingBag className="mr-2 h-4 w-4" /> Customize
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}