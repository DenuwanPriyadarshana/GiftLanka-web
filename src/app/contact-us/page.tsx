"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-neutral-950 text-gray-300 pt-24 pb-20">
      <div className="container max-w-2xl px-4 mx-auto">
        
        {/* BACK BUTTON */}
        <Link href="/" className="inline-flex items-center text-sm text-yellow-500 hover:text-yellow-400 mb-8 transition-colors font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
        </Link>
        
        {/* HEADER */}
        <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 items-center justify-center text-black mb-6 shadow-lg shadow-yellow-500/20">
                <Mail className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Support</h1>
            <p className="text-gray-400 text-lg">
                Need help with a product or want to partner with us?
            </p>
        </div>

        {/* INFO CARD */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl mb-12">
            
            <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mt-1">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Headquarters</p>
                        <p className="text-white font-medium text-lg">Colombo, Sri Lanka</p>
                    </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-1">
                        <Clock className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Response Time</p>
                        <p className="text-white font-medium text-lg">Within 24 Hours</p>
                        <p className="text-sm text-gray-500">Mon - Fri (9am - 5pm)</p>
                    </div>
                </div>
            </div>

            <hr className="border-neutral-800 my-8" />

            {/* ACTION BUTTON */}
            <div className="text-center">
                <a href="mailto:giftlanka.com@gmail.com">
                    <Button className="w-full bg-white text-black hover:bg-yellow-400 hover:text-black font-bold py-6 text-lg rounded-xl transition-all shadow-lg hover:shadow-yellow-500/20">
                        Click to Email Us <MessageCircle className="ml-2 h-5 w-5" />
                    </Button>
                </a>
                <p className="text-xs text-neutral-600 mt-4">
                    Secure channel. Opens your default email app.
                </p>
            </div>
        </div>

      </div>
    </main>
  );
}