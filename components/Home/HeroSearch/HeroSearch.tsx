// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { MapPin, Search, ChevronDown, Stethoscope, Sparkles } from "lucide-react";
// import { useRouter } from "next/navigation";

// const cities: string[] = ["Dhaka", "Rajshahi", "Khulna", "Sylhet"];

// const specialists: string[] = [
//   "Dermatologist",
//   "Gynecologist",
//   "Urologist",
//   "Gastroenterologist",
//   "General Practitioner",
//   "Psychiatrist",
//   "Pediatrician",
// ];

// const HeroSearch: React.FC = () => {
//   const router = useRouter();

//   const [showCity, setShowCity] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("Dhaka");
//   const [searchText, setSearchText] = useState("");
//   const [showSpecialist, setShowSpecialist] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const cityRef = useRef<HTMLDivElement>(null);
//   const specialistRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
//         setShowCity(false);
//       }
//       if (specialistRef.current && !specialistRef.current.contains(event.target as Node)) {
//         setShowSpecialist(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSpecialistSelect = (specialist: string) => {
//     router.push(`/doctors?city=${selectedCity}&specialist=${encodeURIComponent(specialist)}`);
//   };

//   return (
//     <section className="relative w-full bg-[#f8fafc] py-20 px-4 overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-teal-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-5xl mx-auto relative z-10 text-center">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-6 animate-fade-in">
//           <Sparkles size={14} />
//           <span>Trust by 10,000+ Patients</span>
//         </div>

//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e293b] mb-4 tracking-tight">
//           Find the Best <span className="text-blue-600">Doctor</span> <br className="hidden md:block" />
//           Near Your Location
//         </h1>
//         <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
//           Book appointments with top-rated specialists in your city. Simple, fast, and reliable.
//         </p>

//         {/* Main Search Container */}
//         <div
//           className={`max-w-4xl mx-auto transition-all duration-300 transform ${
//             isFocused ? "scale-[1.02]" : "scale-100"
//           }`}
//         >
//           <div className={`flex flex-col md:flex-row items-stretch bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 transition-all ${
//             isFocused ? "border-blue-400 ring-4 ring-blue-50" : "border-transparent"
//           }`}>

//             {/* City Selector */}
//             <div ref={cityRef} className="relative w-full md:w-1/3">
//               <div
//                 onClick={() => setShowCity(!showCity)}
//                 className="flex items-center h-full px-5 py-4 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group"
//               >
//                 <div className="p-2 bg-blue-50 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
//                   <MapPin size={20} className="text-blue-600" />
//                 </div>
//                 <div className="flex flex-col items-start overflow-hidden">
//                   <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Location</span>
//                   <span className="font-semibold text-gray-800 truncate">{selectedCity}</span>
//                 </div>
//                 <ChevronDown size={18} className={`ml-auto text-gray-400 transition-transform duration-300 ${showCity ? "rotate-180" : ""}`} />
//               </div>

//               {showCity && (
//                 <div className="absolute left-0 mt-3 w-full bg-white border border-gray-100 rounded-xl shadow-2xl z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                   {cities.map((city) => (
//                     <div
//                       key={city}
//                       onClick={() => {
//                         setSelectedCity(city);
//                         setShowCity(false);
//                       }}
//                       className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 cursor-pointer text-sm font-medium transition-colors"
//                     >
//                       {city}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Vertical Divider (Desktop Only) */}
//             <div className="hidden md:block w-px h-10 self-center bg-gray-200" />

//             {/* Specialist Search */}
//             <div ref={specialistRef} className="relative w-full md:w-2/3">
//               <div className="flex items-center h-full px-5 py-4 group">
//                 <div className="p-2 bg-teal-50 rounded-lg mr-3 group-hover:bg-teal-100 transition-colors">
//                   <Search size={20} className="text-teal-600" />
//                 </div>
//                 <div className="flex flex-col flex-1 items-start">
//                   <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Specialty</span>
//                   <input
//                     type="text"
//                     value={searchText}
//                     onFocus={() => {
//                       setShowSpecialist(true);
//                       setIsFocused(true);
//                     }}
//                     onBlur={() => setIsFocused(false)}
//                     onChange={(e) => setSearchText(e.target.value)}
//                     placeholder="E.g. Cardiologist, Dentist..."
//                     className="w-full outline-none text-gray-800 font-semibold placeholder:text-gray-300"
//                   />
//                 </div>
//               </div>

//               {/* Specialist Dropdown */}
//               {showSpecialist && (
//                 <div className="absolute left-0 mt-3 w-full bg-white border border-gray-100 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
//                   <div className="max-h-[320px] overflow-y-auto">
//                     {specialists
//                       .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
//                       .map((item) => (
//                         <div
//                           key={item}
//                           onClick={() => handleSpecialistSelect(item)}
//                           className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-none"
//                         >
//                           <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
//                             <Stethoscope size={16} className="text-gray-500" />
//                           </div>
//                           <span className="text-sm font-medium text-gray-700">{item}</span>
//                         </div>
//                       ))}
//                     {specialists.filter(i => i.toLowerCase().includes(searchText.toLowerCase())).length === 0 && (
//                       <div className="px-5 py-8 text-center text-gray-400 text-sm">
//                         No specialists found.
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* CTA Button (Optional style, or keep the instant redirect) */}
//             <button
//               className="hidden md:flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-bold transition-all shadow-lg shadow-blue-200"
//               onClick={() => setShowSpecialist(true)}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
//           <span>Popular:</span>
//           {["Gynecologist", "Pediatrician", "Dermatologist"].map((tag) => (
//             <button
//               key={tag}
//               onClick={() => handleSpecialistSelect(tag)}
//               className="hover:text-blue-500 transition-colors"
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSearch;

"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Search,
  ChevronDown,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

const cities: string[] = [
  "Dhaka",
  "Rajshahi",
  "Khulna",
  "Sylhet",
  "Chittagong",
  "Barisal",
];

const specialists: string[] = [
  "Dermatologist",
  "Gynecologist",
  "Urologist",
  "Gastroenterologist",
  "General Practitioner",
  "Psychiatrist",
  "Pediatrician",
  "Neurologist",
  "Cardiologist",
];

const HeroSearch: React.FC = () => {
  const router = useRouter();

  const [showCity, setShowCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [searchText, setSearchText] = useState("");
  const [showSpecialist, setShowSpecialist] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const cityRef = useRef<HTMLDivElement>(null);
  const specialistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setShowCity(false);
      }
      if (
        specialistRef.current &&
        !specialistRef.current.contains(event.target as Node)
      ) {
        setShowSpecialist(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSpecialistSelect = (specialist: string) => {
    router.push(
      `/doctors/${encodeURIComponent(selectedCity)}/${encodeURIComponent(specialist)}`,
    );
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-24 px-4 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles size={14} />
          Trusted by 10,000+ Patients
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight tracking-tight mb-5">
          Find the Best <span className="text-blue-600">Doctor</span>
          <br className="hidden md:block" />
          Near You
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-14">
          Book appointments with verified specialists in your city. Fast, secure
          and reliable.
        </p>

        {/* Search Box */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-300 ${
            isFocused ? "scale-[1.015]" : ""
          }`}
        >
          <div
            className={`flex flex-col md:flex-row bg-white rounded-2xl p-2 border transition-all duration-300 shadow-xl shadow-slate-200/40 ${
              isFocused
                ? "border-blue-500 ring-4 ring-blue-100"
                : "border-slate-200"
            }`}
          >
            {/* City Selector */}
            <div ref={cityRef} className="relative w-full md:w-1/3">
              <div
                onClick={() => setShowCity(!showCity)}
                className="flex items-center px-6 py-4 rounded-xl cursor-pointer hover:bg-slate-50 transition"
              >
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <MapPin size={18} className="text-blue-600" />
                </div>

                <div className="text-left overflow-hidden">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Location
                  </p>
                  <p className="font-semibold text-slate-800 truncate">
                    {selectedCity}
                  </p>
                </div>

                <ChevronDown
                  size={18}
                  className={`ml-auto text-slate-400 transition-transform duration-300 ${
                    showCity ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showCity && (
                <div className="absolute left-0 mt-3 w-full bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="max-h-60 overflow-y-auto custom-scrollbar">
                    {cities.map((city) => (
                      <div
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setShowCity(false);
                        }}
                        className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer text-sm font-medium transition"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:block w-px bg-slate-200 my-4" />

            {/* Specialist Search */}
            <div ref={specialistRef} className="relative w-full md:w-2/3">
              <div className="flex items-center px-6 py-4">
                <div className="p-2 bg-cyan-50 rounded-lg mr-4">
                  <Search size={18} className="text-cyan-600" />
                </div>

                <div className="flex flex-col flex-1 text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Specialty
                  </p>
                  <input
                    type="text"
                    value={searchText}
                    onFocus={() => {
                      setShowSpecialist(true);
                      setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search specialist..."
                    className="w-full outline-none font-semibold text-slate-800 placeholder:text-slate-300 bg-transparent"
                  />
                </div>
              </div>

              {showSpecialist && (
                <div className="absolute left-0 mt-3 w-full bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="max-h-72 overflow-y-auto custom-scrollbar">
                    {specialists
                      .filter((item) =>
                        item.toLowerCase().includes(searchText.toLowerCase()),
                      )
                      .map((item) => (
                        <div
                          key={item}
                          onClick={() => handleSpecialistSelect(item)}
                          className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 cursor-pointer transition"
                        >
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                            <Stethoscope size={16} className="text-slate-500" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}

                    {specialists.filter((i) =>
                      i.toLowerCase().includes(searchText.toLowerCase()),
                    ).length === 0 && (
                      <div className="px-6 py-8 text-center text-slate-400 text-sm">
                        No specialists found.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => setShowSpecialist(true)}
              className="hidden md:flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-300"
            >
              Search
            </button>
          </div>
        </div>

        {/* Popular */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <span className="font-medium">Popular:</span>
          {["Gynecologist", "Pediatrician", "Dermatologist"].map((tag) => (
            <button
              key={tag}
              onClick={() => handleSpecialistSelect(tag)}
              className="hover:text-blue-600 transition font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </section>
  );
};

export default HeroSearch;
