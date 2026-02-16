"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Find Doctors', href: '#', hasDropdown: true },
    { name: 'Hospitals', href: '#', hasDropdown: true },
    { name: 'Surgeries', href: '#', hasDropdown: false },
    { name: 'Medicines', href: '#', hasDropdown: true },
    { name: 'Shop', href: '#', hasDropdown: false },
    { name: 'Labs', href: '#', hasDropdown: true },
    { name: 'Health Hub', href: '#', hasDropdown: false },
    { name: 'Forum', href: '#', hasDropdown: false },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-[#005a78] p-1.5 rounded-full">
                <span className="text-white font-bold text-xl leading-none">M</span>
              </div>
              <span className="text-[#005a78] font-bold text-xl tracking-tight uppercase">Marham</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#005a78] hover:text-blue-600 px-2 py-2 text-[14px] font-medium flex items-center gap-1 transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#" className="text-[#005a78] text-[14px] font-semibold hover:underline">
              Join as Doctor
            </Link>
            <div className="bg-[#005a78] p-2 rounded-md cursor-pointer hover:bg-[#004a63] transition-colors">
              <Phone size={18} className="text-white fill-current" />
            </div>
            <button className="border border-[#005a78] text-[#005a78] px-5 py-1.5 rounded-md font-medium hover:bg-gray-50 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
             <div className="bg-[#005a78] p-2 rounded-md">
              <Phone size={18} className="text-white fill-current" />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#005a78] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-[#005a78] border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
               <button className="w-full text-center border border-[#005a78] text-[#005a78] py-2 rounded-md font-medium">
                Login
              </button>
              <Link href="#" className="text-center text-[#005a78] font-semibold py-2">
                Join as Doctor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;