"use client";

import React, { useState } from "react";
import { 
  Search, ChevronRight, Video, User, Star, 
  MapPin, Calendar, Clock, CheckCircle2, Filter
} from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialties: string[];
  qualifications: string[];
  reviews: number;
  experience: number;
  satisfaction: number;
  tags: string[];
  videoFee: number;
  clinicFee: number;
  clinicAddress: string;
  imageUrl: string;
}

const doctorData: Doctor = {
  id: 1,
  name: "Assoc. Prof. Dr. Imran Qadir",
  specialties: ["Urologist", "Sexologist", "Andrologist", "Pediatric Urologist"],
  qualifications: ["MBBS", "MD", "FCPS"],
  reviews: 645,
  experience: 15,
  satisfaction: 94,
  tags: ["Kidney Stones", "Male Sexual Health", "Circumcision", "Paediatrics"],
  videoFee: 2000,
  clinicFee: 1500,
  clinicAddress: "Qadir Medical Complex, People Colony No 2, Faisalabad",
  imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=doctor1" 
};

const DoctorListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="w-full bg-gray-50 pb-20 ">
      {/* Search Header with Modern Green Gradient */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-900 py-16 px-6 md:py-20 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
            Find the Best Specialists
          </h1>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-teal-600" />
            </div>
            <input
              type="text"
              placeholder="Search by name, specialty or disease..."
              className="w-full p-5 pl-14 rounded-2xl border-none shadow-2xl focus:ring-4 focus:ring-emerald-400/40 outline-none text-gray-900 text-lg placeholder:text-gray-400 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-3 top-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Find
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 pt-16">
        {/* Sorting/Filters (Optional visual placeholder) */}
        <div className="flex overflow-x-auto gap-3 mb-8 no-scrollbar py-2">
            {['Online Now', 'Fee Upto 500', 'Top Reviewed', 'Doctors Near Me'].map(filter => (
                <button key={filter} className="whitespace-nowrap bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm hover:border-emerald-500 hover:text-emerald-600 transition-all">
                    {filter}
                </button>
            ))}
        </div>

        {/* Doctor Card */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Profile Image & Quick Stats */}
              <div className="flex flex-col items-center lg:w-1/4">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-50 ring-8 ring-gray-50/50">
                    <img 
                      src={doctorData.imageUrl} 
                      alt={doctorData.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-emerald-500 p-1.5 rounded-full border-4 border-white">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-lg">
                    <Star className="w-5 h-5 fill-amber-500" />
                    <span>{doctorData.satisfaction}%</span>
                  </div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Satisfaction</p>
                </div>
              </div>

              {/* Main Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 hover:text-emerald-700 cursor-pointer transition-colors">
                      {doctorData.name}
                    </h2>
                    <p className="text-emerald-600 font-bold text-sm mt-1 flex items-center gap-1">
                       PMDC Verified Specialist
                    </p>
                    <p className="text-gray-600 mt-3 font-medium leading-relaxed">
                      {doctorData.specialties.join(", ")}
                    </p>
                    <p className="text-gray-400 text-sm italic">{doctorData.qualifications.join(", ")}</p>
                  </div>
                  
                  <div className="flex flex-col gap-3 min-w-[180px]">
                    <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-2xl font-bold shadow-lg shadow-emerald-200 transition-all">
                      <Video className="w-5 h-5" />
                      Video Call
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white py-3 px-6 rounded-2xl font-bold shadow-lg transition-all">
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 py-6 border-y border-dashed border-gray-100">
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">Reviews</p>
                    <p className="text-xl font-extrabold text-gray-800">{doctorData.reviews}</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">Experience</p>
                    <p className="text-xl font-extrabold text-gray-800">{doctorData.experience} Yrs</p>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">Availability</p>
                    <p className="text-xl font-extrabold text-emerald-600 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Available Today
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {doctorData.tags.map(tag => (
                    <span key={tag} className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-xl text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fees/Location Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex justify-between items-center group hover:bg-emerald-100 transition-all">
                <div>
                  <h4 className="font-bold text-emerald-900 flex items-center gap-2">
                    <Video className="w-4 h-4" /> Video Consultation
                  </h4>
                  <p className="text-emerald-700 font-extrabold text-lg mt-1">Rs. {doctorData.videoFee.toLocaleString()}</p>
                </div>
                <span className="bg-white text-emerald-600 px-3 py-1 rounded-lg text-xs font-black shadow-sm">FAST CONFIRM</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center group hover:bg-slate-100 transition-all">
                <div className="flex-1 pr-4">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Clinic Visit
                  </h4>
                  <p className="text-slate-500 text-xs mt-1 truncate max-w-[200px]">{doctorData.clinicAddress}</p>
                  <p className="text-slate-800 font-extrabold text-lg mt-1">Rs. {doctorData.clinicFee.toLocaleString()}</p>
                </div>
                <span className="bg-white text-slate-600 px-3 py-1 rounded-lg text-xs font-black shadow-sm">FAST CONFIRM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorListing;