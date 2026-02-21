"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Search, ChevronDown, Stethoscope } from "lucide-react";
import { useRouter } from "next/navigation";

const cities: string[] = [
  "Dhaka",
  "Rajshahi",
  "Khulna",
  "Sylhet",
];

const specialists: string[] = [
  "Dermatologist",
  "Gynecologist",
  "Urologist",
  "Gastroenterologist",
  "General Practitioner",
  "Psychiatrist",
  "Pediatrician",
];

const HeroSearch: React.FC = () => {
  const router = useRouter();

  const [showCity, setShowCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [searchText, setSearchText] = useState("");
  const [showSpecialist, setShowSpecialist] = useState(false);

  const cityRef = useRef<HTMLDivElement>(null);
  const specialistRef = useRef<HTMLDivElement>(null);

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cityRef.current &&
        !cityRef.current.contains(event.target as Node)
      ) {
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔥 Specialist Select → Instant Redirect
  const handleSpecialistSelect = (specialist: string) => {
    router.push(
      `/doctors?city=${selectedCity}&specialist=${encodeURIComponent(
        specialist
      )}`
    );
  };

  return (
    <div className="w-full bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-8">
          Find the Best Doctor Near You
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-lg shadow-sm">

            {/* City Selector */}
            <div ref={cityRef} className="relative w-full md:w-1/3">
              <div
                onClick={() => setShowCity(!showCity)}
                className="flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300 cursor-pointer hover:bg-gray-50"
              >
                <MapPin size={20} className="text-[#005a78] mr-2" />
                <span className="flex-1 font-medium text-sm">
                  {selectedCity}
                </span>
                <ChevronDown size={18} />
              </div>

              {showCity && (
                <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-lg z-20">
                  {cities.map((city) => (
                    <div
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCity(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Specialist Search */}
            <div
              ref={specialistRef}
              className="relative w-full md:w-2/3 px-4 py-3"
            >
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchText}
                  onFocus={() => setShowSpecialist(true)}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search by Doctors"
                  className="w-full outline-none text-sm md:text-base"
                />
                <Search size={20} className="text-[#005a78]" />
              </div>

              {/* Specialist Dropdown */}
              {showSpecialist && (
                <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                  {specialists
                    .filter((item) =>
                      item
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                    .map((item) => (
                      <div
                        key={item}
                        onClick={() => handleSpecialistSelect(item)}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        <Stethoscope size={16} className="text-gray-400" />
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;