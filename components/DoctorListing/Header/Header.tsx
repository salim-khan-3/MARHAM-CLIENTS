import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-4">
      {/* Container with shadow and border radius */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col gap-2">
        
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#003d66]">
          3,067 Best Gynecologists In Pakistan
        </h1>

        {/* Breadcrumb Section */}
        <nav className="flex items-center text-sm text-gray-500">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">
            Marham
          </span>
          <span className="mx-2 text-gray-400 font-light">&gt;</span>
          <span className="text-[#003d66] font-medium">
            Gynecologist
          </span>
        </nav>
        
      </div>
    </div>
  );
};

export default Header;