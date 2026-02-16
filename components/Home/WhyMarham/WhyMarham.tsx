"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const WhyMarham = () => {
  const features = [
    {
      id: 1,
      title: "PMC Verified Doctors",
      desc: "16,000+ Doctors Available",
    },
    {
      id: 2,
      title: "15/7 Customer Support Well",
      desc: "Trained & Supportive Team",
    },
    {
      id: 3,
      title: "Secure Online Payments",
      desc: "SSL-encrypted",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
        
        {/* Left Side: Features List */}
        <div className="space-y-12 order-2 lg:order-1">
          <h2 className="text-2xl font-bold text-[#333] mb-8">Why Marham?</h2>
          
          <div className="space-y-10">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-6 group">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f2f7] flex items-center justify-center text-[#005a78] font-bold text-lg group-hover:bg-[#005a78] group-hover:text-white transition-colors duration-300">
                  {feature.id}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Mobile Mockup */}
        <div className="relative flex justify-center order-1 lg:order-2">
          <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px]">
            {/* Mockup Frame Placeholder - Replace src with your local mockup path */}
            <Image 
              src="/marham-app-mockup.png" 
              alt="Marham App Mockup" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Google Rating */}
        <div className="flex flex-col items-center lg:items-end justify-center order-3">
          <div className="flex items-center gap-4 bg-white p-4 rounded-full shadow-lg border border-gray-50">
            {/* Google G Logo */}
            <div className="w-10 h-10 relative">
               <Image src="/google-logo.png" alt="Google" fill className="object-contain" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-800">4.5</span>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < 4 ? "fill-current" : "fill-current text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyMarham;