"use client";

import React from 'react';
import { MapPin, Search, ChevronDown } from 'lucide-react';

const HeroSearch = () => {
  return (
    <div className="w-full bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* User Greeting Section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#005a78] flex items-center justify-center text-white font-bold text-lg">
            G
          </div>
          <span className="text-gray-600 font-medium">Hello, Guest!</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-8">
          Find the Best Doctor Near You
        </h1>

        {/* Search Bar Container */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            
            {/* Location Selector */}
            <div className="flex items-center w-full md:w-1/3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300 group cursor-pointer hover:bg-gray-50 transition-colors">
              <MapPin size={20} className="text-[#005a78] mr-2" />
              <div className="flex flex-col flex-1">
                <span className="text-sm font-semibold text-gray-700">Lahore</span>
              </div>
              <ChevronDown size={18} className="text-[#005a78]" />
            </div>

            {/* Search Input Field */}
            <div className="flex items-center w-full md:w-2/3 px-4 py-3 relative group">
              <input 
                type="text" 
                placeholder="Search by Hospitals" 
                className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base pr-10"
              />
              
              {/* Search Icon Button */}
              <div className="absolute right-3 p-2 bg-[#f0f9ff] rounded-md cursor-pointer hover:bg-blue-100 transition-all">
                <Search size={20} className="text-[#005a78]" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSearch;