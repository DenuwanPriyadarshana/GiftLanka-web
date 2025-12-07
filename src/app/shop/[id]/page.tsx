"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetalCard from "@/components/product/MetalCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 pt-20">
      
      {/* HERO SECTION */}
      <section className="container flex flex-col items-center justify-center gap-10 px-4 py-20 md:flex-row md:justify-between">
        
        {/* LEFT SIDE: TEXT */}
        <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
          <div className="inline-flex items-center self-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500 md:self-start">
            <Star className="mr-2 h-3 w-3" /> #1 Premium Gift in Sri Lanka
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Don't Print on Paper. <br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Print on Metal.
            </span>
          </h1>

          <p className="text-lg text-gray-400">
            Waterproof. Scratch-resistant. 60+ Year Lifespan. <br/>
            Turn your favorite memories into gallery-grade art.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
              <Link href="/shop">
                Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-neutral-800 text-gray-300 hover:bg-neutral-900 hover:text-white">
              View Gallery
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE: THE SHINING CARD */}
        <div className="mt-10 md:mt-0">
          <MetalCard />
        </div>

      </section>
    </main>
  );
}