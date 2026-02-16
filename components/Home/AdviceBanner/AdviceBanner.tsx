"use client";

import React from 'react';
import { Check } from 'lucide-react';

const AdviceBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-[#e2f2f0] rounded-xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between min-h-[220px]">
        
        {/* Left Content Side */}
        <div className="p-8 md:pl-12 z-10 w-full md:w-3/5">
          <h2 className="text-[#005a78] text-xl md:text-2xl font-bold mb-4">
            Get free medical advice by asking a doctor
          </h2>
          
          <ul className="space-y-2 mb-8">
            <li className="flex items-center gap-2 text-[#005a78] text-sm md:text-base">
              <Check size={18} className="font-bold" />
              <span>Ask a question anonymously</span>
            </li>
            <li className="flex items-center gap-2 text-[#005a78] text-sm md:text-base">
              <Check size={18} className="font-bold" />
              <span>Get a reply from PMC verified doctors</span>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#005a78] px-6 py-2.5 rounded-md font-semibold shadow-sm hover:bg-gray-50 transition-all border border-transparent">
              View All Questions
            </button>
            <button className="bg-[#005a78] text-white px-8 py-2.5 rounded-md font-semibold hover:bg-[#004a63] transition-all shadow-md">
              Ask a Question
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="hidden md:block absolute right-0 bottom-0 w-1/3 h-full">
           {/* Replace with your local image path */}
           <div 
             className="w-full h-full bg-contain bg-right-bottom bg-no-repeat" 
             style={{ backgroundImage: "url('/doctor-advice-banner.png')" }} 
           />
        </div>

        {/* Mobile Image (Optional: showing a small version or just hiding it for space) */}
        <div className="md:hidden w-full flex justify-end pr-4 opacity-50 absolute right-0 bottom-0 pointer-events-none">
            <div className="w-32 h-32 bg-contain bg-no-repeat bg-bottom" style={{ backgroundImage: "url('/doctor-advice-banner.png')" }} />
        </div>
      </div>
    </section>
  );
};

export default AdviceBanner;