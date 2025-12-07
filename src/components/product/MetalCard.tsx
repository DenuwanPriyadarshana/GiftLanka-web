"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function MetalCard() {
  return (
    <div className="relative h-[400px] w-[300px] rounded-xl bg-neutral-900 p-2 shadow-2xl">
      {/* GOLD BORDER GLOW */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 opacity-30 blur-sm" />
      
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
        {/* IMAGE PLACEHOLDER (Later you put a real photo here) */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black">
            <div className="flex h-full flex-col items-center justify-center text-center p-6">
                <Sparkles className="h-12 w-12 text-yellow-500 mb-4 opacity-50" />
                <p className="text-gray-500 text-sm">Your Photo Here</p>
            </div>
        </div>

        {/* THE SHINE ANIMATION */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* TEXT AT BOTTOM */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">Wedding Collection</h3>
          <p className="text-xs text-yellow-500">From Rs. 4,500</p>
        </div>
      </div>
    </div>
  );
}