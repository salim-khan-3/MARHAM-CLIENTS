import React from 'react';
import { Search, ChevronDown } from 'lucide-react'; // Lucide-react icons use kora hoyeche search icon er jonno

const FilterSection: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center gap-3">
      
      {/* Search Group */}
      <div className="flex flex-1 min-w-[300px] border border-blue-200 rounded-md overflow-hidden">
        <input 
          type="text" 
          placeholder="Enter City" 
          className="w-1/3 p-2.5 outline-none border-r border-blue-100 text-sm text-gray-600"
        />
        <input 
          type="text" 
          placeholder="Search by Doctors" 
          className="flex-1 p-2.5 outline-none text-sm text-gray-600"
        />
        <button className="bg-[#004e7c] p-2.5 px-4 flex items-center justify-center hover:bg-[#003d66] transition-colors">
          <Search className="text-white w-5 h-5" />
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <button className="px-4 py-2.5 bg-[#f0f7fa] text-[#006097] text-sm font-medium rounded hover:bg-blue-100">
          Clear Filters
        </button>
        
        <button className="px-4 py-2.5 bg-[#f0f7fa] text-[#006097] text-sm font-medium rounded hover:bg-blue-100">
          Doctors Near Me
        </button>

        <button className="px-4 py-2.5 bg-[#f0f7fa] text-[#006097] text-sm font-medium rounded hover:bg-blue-100">
          Fee Upto 500
        </button>

        <button className="px-4 py-2.5 bg-[#f0f7fa] text-[#006097] text-sm font-medium rounded hover:bg-blue-100">
          Top Reviewed
        </button>

        <button className="px-4 py-2.5 bg-[#f0f7fa] text-[#006097] text-sm font-medium rounded hover:bg-blue-100">
          Online Now
        </button>

        {/* Dropdowns */}
        <div className="relative border border-gray-200 rounded px-3 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-gray-50 bg-white">
          <span className="text-sm text-[#006097]">Choose a Time</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        <div className="relative border border-gray-200 rounded px-3 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-gray-50 bg-white">
          <span className="text-sm text-[#006097]">Fee Range</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

    </div>
  );
};

export default FilterSection;