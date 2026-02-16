import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Get <span className="text-emerald-600">Confirmed</span> Appointment Online
      </h2>

      {/* Step 1: Select Clinic */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
          <span className="font-semibold text-sm">Select Hospital/Clinic</span>
        </div>
        
        {/* Selected Slot Example */}
        <div className="border-2 border-emerald-500 rounded-lg p-4 bg-emerald-50/30">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-[#006097] text-sm underline">Video Consultation</p>
              <p className="text-xs text-gray-600 mt-1">Rs. 1,000</p>
              <p className="text-xs text-gray-500">Available Today - 10:00 AM - 10:00 PM</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Online</span>
          </div>
        </div>
      </div>

      {/* Step 2: Select Date & Time */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
          <span className="font-semibold text-sm">Select Date & Time</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select className="border border-gray-300 rounded-md p-2.5 text-sm outline-none focus:border-blue-500">
            <option>Wed - 18 Feb</option>
          </select>
          <select className="border border-gray-300 rounded-md p-2.5 text-sm outline-none focus:border-blue-500">
            <option>10:00 AM</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
             <span className="bg-gray-100 px-3 py-2.5 text-sm border-r">+92</span>
             <input type="text" placeholder="Add Phone Number" className="flex-1 p-2.5 text-sm outline-none" />
          </div>
          <input type="text" placeholder="Add Patient Name" className="border border-gray-300 rounded-md p-2.5 text-sm outline-none" />
        </div>

        <input type="text" placeholder="Add Promo Code" className="w-full border border-gray-300 rounded-md p-2.5 text-sm outline-none" />

        <button className="w-full bg-[#3a866a] hover:bg-[#2d6b54] text-white font-bold py-3 rounded-md transition-all mt-4">
          Book Video Consultation
        </button>
      </div>
    </div>
  );
};

export default BookingForm;