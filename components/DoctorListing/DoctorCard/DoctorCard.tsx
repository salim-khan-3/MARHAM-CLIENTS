import React from 'react';
import Image from 'next/image';
import { Video, User } from 'lucide-react';

const DoctorCard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
      {/* Top Section: Info & Buttons */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Profile Image */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image source
            alt="Doctor Profile"
            className="rounded-full border-2 border-gray-100 object-cover w-full h-full"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#006097] hover:underline cursor-pointer">
            Dr. Mariam Khalid
          </h2>
          <p className="text-xs font-semibold text-teal-600 mt-1 uppercase tracking-wide">
            PMDC Verified
          </p>
          <div className="mt-2 text-sm text-gray-700 space-y-1">
            <p>Gynecologist</p>
            <p className="text-gray-500">MBBS, FCPS (Obstetrics & Gynecology)</p>
          </div>

          {/* Stats Section */}
          <div className="flex gap-8 mt-4 border-t border-b border-gray-50 py-3">
            <div>
              <p className="text-xs text-gray-400 uppercase">Reviews</p>
              <p className="font-bold text-gray-700">336</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Experience</p>
              <p className="font-bold text-gray-700">10 Yrs</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase">Satisfaction</p>
              <p className="font-bold text-gray-700">90%</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 w-full md:w-64">
          <button className="flex items-center justify-center gap-2 bg-[#2d7a5e] hover:bg-[#24634c] text-white font-semibold py-3 px-4 rounded-md transition-all">
            <Video size={20} />
            Video Call
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#004e7c] hover:bg-[#003d66] text-white font-semibold py-3 px-4 rounded-md transition-all">
            <User size={20} />
            View Profile
          </button>
        </div>
      </div>

      {/* Specialization Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {['Gynecology', 'Obstetrician', 'Infertility Expert', 'Infertility'].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-[#f0f7fa] text-[#006097] text-xs rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Booking Slots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Slot 1: Active/Green */}
        <div className="border-2 border-emerald-400 rounded-xl p-4 bg-white">
          <div className="flex justify-between items-start">
            <p className="text-sm font-bold text-[#006097]">Video Consultation</p>
            <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-md font-bold">Fast Confirm</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Available Today</p>
          <p className="text-sm font-bold mt-2">Rs. 1,000</p>
        </div>

        {/* Slot 2 */}
        <div className="border border-gray-300 rounded-xl p-4 hover:border-[#006097] transition-colors cursor-pointer">
          <p className="text-sm font-bold text-[#006097]">Saira Memorial Hospital, Lahore</p>
          <p className="text-xs text-gray-500 mt-1">Available Tomorrow</p>
          <p className="text-sm font-bold mt-2">Rs. 2,000</p>
        </div>

        {/* Slot 3 */}
        <div className="border border-gray-300 rounded-xl p-4 hover:border-[#006097] transition-colors cursor-pointer">
          <p className="text-sm font-bold text-[#006097]">Shalamar Medical Hospital, Lahore</p>
          <p className="text-xs text-gray-500 mt-1">Available from Feb 18</p>
          <p className="text-sm font-bold mt-2">Rs. 2,000</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;