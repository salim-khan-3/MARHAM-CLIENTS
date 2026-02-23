import React from "react";
import { Video, User, CheckCircle2, Star, Clock, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface Availability {
  type: string;
  status: string;
  fee: string;
  fastConfirm: boolean;
}

interface Doctor {
  id: number;
  name: string;
  verified: boolean;
  specialty: string;
  qualifications: string;
  image: string;
  reviews: number;
  experience: string;
  satisfaction: string;
  tags: string[];
  availability: Availability[];
}

interface Props {
  doctor: Doctor;
}

const DoctorCard: React.FC<Props> = ({ doctor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-2xl p-5 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 mb-8 group">
      
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left: Image & Quick Stats (Mobile Friendly) */}
        <div className="flex flex-row md:flex-col items-center md:items-start gap-4 flex-shrink-0">
  <div className="relative">
    {/* Decorative Background */}
    <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
    
    {/* Next.js Optimized Image */}
    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
      <Image
        src={doctor.image}
        alt={doctor.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 112px, 128px"
        priority={doctor.id <= 4} // Prothom 4-ta card-er image age load hobe (LCP optimize korar jonno)
      />
    </div>

    {/* Verified Badge */}
    {doctor.verified && (
      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm z-10">
        <CheckCircle2 size={20} className="text-emerald-500 fill-emerald-50" />
      </div>
    )}
  </div>
</div>

        {/* Middle: Doctor Info */}
        <div className="flex-1 space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight group-hover:text-blue-700 transition-colors">
                {doctor.name}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <span className="text-blue-600 font-bold text-sm">{doctor.specialty}</span>
              <span className="text-slate-300 hidden md:block">•</span>
              <span className="text-slate-500 text-sm font-medium">{doctor.qualifications}</span>
            </div>
          </div>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg">
              <Star size={14} className="text-orange-400 fill-orange-400" />
              <span className="text-xs font-bold text-slate-700">{doctor.reviews} Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg">
              <Clock size={14} className="text-blue-500" />
              <span className="text-xs font-bold text-slate-700">{doctor.experience} Exp</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg">
              <ThumbsUp size={14} className="text-emerald-500" />
              <span className="text-xs font-bold text-slate-700">{doctor.satisfaction}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {doctor.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-blue-50/50 text-blue-600 text-[11px] font-bold rounded-full border border-blue-100/50 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col gap-3 w-full md:w-56 justify-center">
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] active:scale-95">
            <Video size={18} />
            Video Call
          </button>
          <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold py-3.5 rounded-xl border border-slate-200 transition-all active:scale-95">
            <User size={18} />
            View Profile
          </button>
        </div>
      </div>

      {/* Bottom: Availability Slots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 border-t border-slate-50 pt-6">
        {doctor.availability.map((slot, index) => (
          <div
            key={index}
            className={`group/slot relative p-4 rounded-2xl border-2 transition-all cursor-pointer ${
              slot.fastConfirm 
                ? "border-emerald-100 bg-emerald-50/20 hover:bg-emerald-50/40" 
                : "border-slate-100 bg-white hover:border-blue-200"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className={`text-xs font-black uppercase tracking-widest ${slot.fastConfirm ? 'text-emerald-700' : 'text-slate-400'}`}>
                {slot.type.includes('Video') ? 'Online' : 'In-Person'}
              </h4>
              {slot.fastConfirm && (
                <span className="bg-emerald-500 text-white text-[9px] px-2 py-0.5 rounded-full font-black uppercase">
                  Instant
                </span>
              )}
            </div>
            <p className="text-[13px] font-bold text-slate-800 line-clamp-1">{slot.type}</p>
            <div className="flex justify-between items-end mt-3">
              <span className="text-[11px] font-medium text-slate-500">{slot.status}</span>
              <span className="text-sm font-black text-blue-700">{slot.fee}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;