"use client";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import { Search, ChevronRight } from "lucide-react";
import {
  User,
  Baby,
  Activity,
  Heart,
  Brain,
  Smile,
  Droplets,
  Stethoscope,
} from "lucide-react";

import { doctorDataList } from "@/data/doctors";

const iconMap: Record<string, React.ReactNode> = {
  Dermatologist: <User className="w-6 h-6 text-blue-600" />,
  Gynecologist: <Baby className="w-6 h-6 text-pink-600" />,
  Urologist: <Activity className="w-6 h-6 text-emerald-600" />,
  Cardiologist: <Heart className="w-6 h-6 text-red-600" />,
  Neurologist: <Brain className="w-6 h-6 text-purple-600" />,
  Pediatrician: <Baby className="w-6 h-6 text-yellow-500" />,
  Psychiatrist: <Smile className="w-6 h-6 text-indigo-600" />,
  Gastroenterologist: <Droplets className="w-6 h-6 text-green-700" />,
  "General Practitioner": <Stethoscope className="w-6 h-6 text-blue-700" />,
};

const DoctorSearchSection: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");


  const specialties = useMemo(() => {
    const map = new Map<string, number>();

    doctorDataList.forEach((doctor) => {
      doctor.specialties.forEach((spec) => {
        map.set(spec, (map.get(spec) || 0) + 1);
      });
    });

    return Array.from(map.entries()).map(([title, count], index) => ({
      id: index + 1,
      title,
      description: `${title} specialists available for consultation.`,
      count,
    }));
  }, []);

  // 🔥 Filter logic
  const filteredSpecialties = useMemo(() => {
    return specialties.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, specialties]);

  return (
    <section className="w-full min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 py-16 px-6 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Find The Best Doctors Near You
          </h1>

          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-green-300 transition-colors" />
            </div>

            <input
              type="text"
              placeholder="Search specialties..."
              className="w-full p-4 pl-12 rounded-2xl border border-gray-200 bg-white text-gray-800 shadow-lg focus:ring-4 focus:ring-green-300 focus:outline-none text-lg transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Available Specialties
          </h2>
          <p className="text-gray-500 mt-1">
            Showing {filteredSpecialties.length} specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-green-50 transition-colors">
                  {iconMap[item.title] || (
                    <Stethoscope className="w-6 h-6 text-gray-500" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <span className="text-green-600 font-bold">
                        {item.count}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">
                        Doctor(s)
                      </span>
                    </div>

                    <button className="flex items-center text-sm font-bold text-gray-700 hover:text-green-600 transition-colors">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSearchSection;
