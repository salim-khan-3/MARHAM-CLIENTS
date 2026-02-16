"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

const diseases = [
  { name: 'Dengue fever', icon: '🦟' },
  { name: 'Typhoid Fever', icon: '🤒' },
  { name: 'Piles', icon: '🦠' },
  { name: 'Gastritis', icon: '🍕' },
  { name: 'Hernia', icon: '🧘' },
  { name: 'Vaginal Infection', icon: '🩺' },
  { name: 'Migraine', icon: '🤯' },
  { name: 'TB', icon: '🫁' },
];

const DiseasesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Diseases</h2>
        <button className="flex items-center text-[#005a78] font-semibold text-sm hover:underline">
          View all <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
        {diseases.map((disease, index) => (
          <div key={index} className="flex flex-col items-center min-w-[100px] cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-3xl mb-3 group-hover:shadow-md transition-all group-hover:-translate-y-1">
              {disease.icon}
            </div>
            <span className="text-xs font-medium text-[#005a78] text-center whitespace-nowrap">
              {disease.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiseasesSection;