"use client";

import React from 'react';
import Image from 'next/image';

const ServiceGrid = () => {
  const smallServices = [
    { name: 'Labs', img: '/labs.png' },
    { name: 'Medicines', img: '/medicines.png' },
    { name: 'Health Hub', img: '/health-hub.png' },
    { name: 'Hospitals', img: '/hospitals.png' },
    { name: 'Surgeries', img: '/surgeries.png' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">How can we help you today?</h2>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Left: Video Consultation (Tall Card) */}
        <div className="md:col-span-3 bg-[#e6f7f9] rounded-2xl p-5 flex flex-col justify-between overflow-hidden relative min-h-[350px]">
          <div>
            <h3 className="text-[#005a78] font-bold text-lg">Video Consultation</h3>
            <p className="text-gray-600 text-sm">PMC Verified Doctors</p>
          </div>
          <div className="absolute bottom-0 right-0 w-[90%] h-[70%]">
             {/* Replace with your image */}
             <div className="w-full h-full bg-contain bg-bottom bg-no-repeat" style={{backgroundImage: "url('/doctor-mask.png')"}} />
          </div>
        </div>

        {/* Right Side: Container for other cards */}
        <div className="md:col-span-9 flex flex-col gap-4">
          
          {/* Top Row: In-clinic & Instant Doctor */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
            {/* In-clinic Visit */}
            <div className="lg:col-span-4 bg-[#fde8d7] rounded-2xl p-5 flex justify-between overflow-hidden relative min-h-[140px]">
              <div>
                <h3 className="text-[#005a78] font-bold text-lg">In-clinic Visit</h3>
                <p className="text-gray-600 text-sm">Book Appointment</p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-contain bg-right-bottom bg-no-repeat" style={{backgroundImage: "url('/doctor-female.png')"}} />
            </div>

            {/* Instant Doctor (Wide) */}
            <div className="lg:col-span-6 bg-[#e6f2ee] rounded-2xl p-5 flex justify-between items-center overflow-hidden relative min-h-[140px]">
              <div className="flex gap-3 items-center">
                <span className="text-yellow-500 text-3xl font-bold">⚡</span>
                <div>
                  <h3 className="text-[#005a78] font-bold text-xl uppercase italic leading-tight">Instant <br /> Doctor <span className="text-red-500">+</span></h3>
                  <p className="text-gray-600 text-sm mt-1">Get Instant Relief in a Click</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-full bg-contain bg-right-bottom bg-no-repeat" style={{backgroundImage: "url('/doctor-male.png')"}} />
            </div>
          </div>

          {/* Bottom Row: Weight Loss & Mini Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
            {/* Weight Loss Clinic */}
            <div className="lg:col-span-4 bg-[#fff6e0] rounded-2xl p-5 flex justify-between overflow-hidden relative min-h-[140px]">
              <div>
                <h3 className="text-[#005a78] font-bold text-lg">Weight Loss Clinic</h3>
                <p className="text-gray-600 text-sm">Healthy Lifestyle</p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-contain bg-right-bottom bg-no-repeat" style={{backgroundImage: "url('/weight-loss.png')"}} />
            </div>

            {/* Mini Icon Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-3 sm:grid-cols-5 gap-2">
              {smallServices.map((item) => (
                <div key={item.name} className="bg-white border border-gray-100 rounded-xl p-2 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 relative mb-2">
                     <div className="w-full h-full bg-blue-50 rounded-lg" /> {/* Placeholder for icons */}
                  </div>
                  <span className="text-[#005a78] font-bold text-[11px] text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceGrid;