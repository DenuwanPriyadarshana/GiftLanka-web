"use client";

import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function UploadZone() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`relative flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all ${
        isHovering
          ? "border-yellow-500 bg-yellow-500/10"
          : "border-neutral-700 bg-neutral-900"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <div className={`rounded-full p-3 transition-colors ${isHovering ? "bg-yellow-500 text-black" : "bg-neutral-800 text-gray-400"}`}>
          <UploadCloud className="h-6 w-6" />
        </div>
        <div>
          <p className="font-medium text-white">Click to Upload Photo</p>
          <p className="text-xs text-gray-500">JPG or PNG (Max 20MB)</p>
        </div>
      </div>
      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
    </div>
  );
}