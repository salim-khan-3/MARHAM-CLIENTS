"use client";

import React from "react";
import Link from "next/link";
import { Video, CheckCircle2, Star, Clock, MapPin } from "lucide-react";

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
  city: string; // Add city here
}

// Helper function to create URL-friendly slugs
const createSlug = (name: string) => {
  return name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-");
};

interface Props {
  doctor: Doctor;
}

const DoctorCard: React.FC<Props> = ({ doctor }) => {
  return (
    <div
      key={doctor.id}
      className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 mb-10"
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Image & Quick Stats */}
          <div className="flex flex-col items-center lg:w-1/4">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-50 ring-8 ring-gray-50/50">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
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
                <span>{doctor.satisfaction}%</span>
              </div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                Satisfaction
              </p>
            </div>
          </div>

          {/* Main Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 hover:text-emerald-700 cursor-pointer transition-colors">
                  {doctor.name}
                </h2>
                <p className="text-emerald-600 font-bold text-sm mt-1 flex items-center gap-1">
                  PMDC Verified Specialist
                </p>
                <p className="text-gray-600 mt-3 font-medium leading-relaxed">
                  {doctor.specialties.join(", ")}
                </p>
                <p className="text-gray-400 text-sm italic">
                  {doctor.qualifications.join(", ")}
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[180px]">
                <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-2xl font-bold shadow-lg shadow-emerald-200 transition-all">
                  <Video className="w-5 h-5" />
                  Video Call
                </button>

                {/* Dynamic View Profile Button */}
                <Link
                  href={`/doctors/${doctor.city?.toLowerCase()}/${doctor.specialties[0]?.toLowerCase()}/${createSlug(
                    doctor.name
                  )}`}
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white py-3 px-6 rounded-2xl font-bold shadow-lg transition-all text-center"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 py-6 border-y border-dashed border-gray-100">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">
                  Reviews
                </p>
                <p className="text-xl font-extrabold text-gray-800">
                  {doctor.reviews}
                </p>
              </div>

              <div className="text-center md:text-left">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">
                  Experience
                </p>
                <p className="text-xl font-extrabold text-gray-800">
                  {doctor.experience} Yrs
                </p>
              </div>

              <div className="hidden md:block">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">
                  Availability
                </p>
                <p className="text-xl font-extrabold text-emerald-600 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> Available Today
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {doctor.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-xl text-xs font-bold"
                >
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
              <p className="text-emerald-700 font-extrabold text-lg mt-1">
                Rs. {doctor.videoFee.toLocaleString()}
              </p>
            </div>
            <span className="bg-white text-emerald-600 px-3 py-1 rounded-lg text-xs font-black shadow-sm">
              FAST CONFIRM
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center group hover:bg-slate-100 transition-all">
            <div className="flex-1 pr-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Clinic Visit
              </h4>
              <p className="text-slate-500 text-xs mt-1 truncate max-w-[200px]">
                {doctor.clinicAddress}
              </p>
              <p className="text-slate-800 font-extrabold text-lg mt-1">
                Rs. {doctor.clinicFee.toLocaleString()}
              </p>
            </div>
            <span className="bg-white text-slate-600 px-3 py-1 rounded-lg text-xs font-black shadow-sm">
              FAST CONFIRM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;




