"use client";

import React, { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { 
  User, Baby, Activity, Heart, Eye, Brain, Bone, 
  Stethoscope, Syringe, Pill, Thermometer, Microscope, 
  Dna, Briefcase, Smile, ShieldCheck, Flame, Zap, 
  Wind, Droplets, Scissors, FlaskConical, Languages
} from 'lucide-react';

interface Specialty {
  id: number;
  title: string;
  description: string;
  count: number;
  icon: React.ReactNode;
}



const specialties: Specialty[] = [
  { id: 1, title: "Dermatologist", description: "Specialists who treat skin, hair, and nail problems.", count: 1330, icon: <User className="w-6 h-6 text-blue-600" /> },
  { id: 2, title: "Gynecologist", description: "Specialists for women's reproductive health and childbirth.", count: 3345, icon: <Baby className="w-6 h-6 text-pink-600" /> },
  { id: 3, title: "Urologist", description: "Treats urinary tract and male reproductive issues.", count: 659, icon: <Activity className="w-6 h-6 text-emerald-600" /> },
  { id: 4, title: "Cardiologist", description: "Heart and blood vessel specialists.", count: 1200, icon: <Heart className="w-6 h-6 text-red-600" /> },
  { id: 5, title: "Neurologist", description: "Specialists for brain, spinal cord, and nerve disorders.", count: 850, icon: <Brain className="w-6 h-6 text-purple-600" /> },
  { id: 6, title: "Orthopedic", description: "Specialists for bone, joint, and muscle issues.", count: 1500, icon: <Bone className="w-6 h-6 text-orange-600" /> },
  { id: 7, title: "Ophthalmologist", description: "Eye care and vision specialists.", count: 980, icon: <Eye className="w-6 h-6 text-cyan-600" /> },
  { id: 8, title: "Pediatrician", description: "Medical care for infants, children, and adolescents.", count: 2100, icon: <Baby className="w-6 h-6 text-yellow-500" /> },
  { id: 9, title: "Psychiatrist", description: "Specialists in mental health and emotional disorders.", count: 740, icon: <Smile className="w-6 h-6 text-indigo-600" /> },
  { id: 10, title: "Dentist", description: "Oral health, teeth, and gum care specialists.", count: 1800, icon: <Activity className="w-6 h-6 text-teal-600" /> },
  { id: 11, title: "Oncologist", description: "Cancer diagnosis and treatment specialists.", count: 450, icon: <ShieldCheck className="w-6 h-6 text-red-800" /> },
  { id: 12, title: "Endocrinologist", description: "Hormone and metabolic disorder specialists.", count: 520, icon: <FlaskConical className="w-6 h-6 text-violet-600" /> },
  { id: 13, title: "Gastroenterologist", description: "Digestive system and liver specialists.", count: 890, icon: <Droplets className="w-6 h-6 text-green-700" /> },
  { id: 14, title: "Pulmonologist", description: "Lung and respiratory system specialists.", count: 670, icon: <Wind className="w-6 h-6 text-blue-400" /> },
  { id: 15, title: "Nephrologist", description: "Kidney health and disease specialists.", count: 410, icon: <Activity className="w-6 h-6 text-blue-800" /> },
  { id: 16, title: "ENT Specialist", description: "Ear, Nose, and Throat specialists.", count: 1100, icon: <Stethoscope className="w-6 h-6 text-rose-500" /> },
  { id: 17, title: "Rheumatologist", description: "Arthritis and autoimmune disease specialists.", count: 320, icon: <Zap className="w-6 h-6 text-amber-600" /> },
  { id: 18, title: "Hematologist", description: "Blood disorder and bone marrow specialists.", count: 290, icon: <Droplets className="w-6 h-6 text-red-700" /> },
  { id: 19, title: "General Surgeon", description: "Specialists in surgical procedures for various organs.", count: 1400, icon: <Scissors className="w-6 h-6 text-gray-700" /> },
  { id: 20, title: "Physiotherapist", description: "Specialists in physical rehab and movement.", count: 2200, icon: <Activity className="w-6 h-6 text-lime-600" /> },
  { id: 21, title: "Radiologist", description: "Medical imaging and X-ray specialists.", count: 560, icon: <Microscope className="w-6 h-6 text-blue-900" /> },
  { id: 22, title: "Anesthesiologist", description: "Pain management and anesthesia specialists.", count: 340, icon: <Syringe className="w-6 h-6 text-purple-400" /> },
  { id: 23, title: "Pathologist", description: "Specialists in laboratory testing and diagnosis.", count: 480, icon: <Microscope className="w-6 h-6 text-emerald-800" /> },
  { id: 24, title: "Vascular Surgeon", description: "Specialists for blood vessel surgeries.", count: 210, icon: <Activity className="w-6 h-6 text-rose-700" /> },
  { id: 25, title: "Nutritionist", description: "Diet and healthy eating specialists.", count: 1600, icon: <Flame className="w-6 h-6 text-orange-500" /> },
  { id: 26, title: "Geriatrician", description: "Healthcare for elderly and aged people.", count: 390, icon: <User className="w-6 h-6 text-stone-500" /> },
  { id: 27, title: "Internal Medicine", description: "Comprehensive care for adult diseases.", count: 2500, icon: <Stethoscope className="w-6 h-6 text-blue-500" /> },
  { id: 28, title: "Infectious Disease", description: "Specialists in complex bacterial and viral infections.", count: 310, icon: <Microscope className="w-6 h-6 text-red-500" /> },
  { id: 29, title: "Plastic Surgeon", description: "Cosmetic and reconstructive surgery specialists.", count: 420, icon: <User className="w-6 h-6 text-pink-400" /> },
  { id: 30, title: "Sports Medicine", description: "Treatment for sports-related injuries.", count: 680, icon: <Activity className="w-6 h-6 text-green-500" /> },
  { id: 31, title: "Allergist", description: "Specialists in allergies and immune systems.", count: 440, icon: <Wind className="w-6 h-6 text-sky-500" /> },
  { id: 32, title: "Podiatrist", description: "Foot, ankle, and lower leg specialists.", count: 280, icon: <Activity className="w-6 h-6 text-slate-600" /> },
  { id: 33, title: "Neurosurgeon", description: "Surgical specialists for brain and spine.", count: 190, icon: <Brain className="w-6 h-6 text-red-900" /> },
  { id: 34, title: "Speech Therapist", description: "Help for speech and language disorders.", count: 530, icon: <Languages className="w-6 h-6 text-violet-500" /> },
  { id: 35, title: "Homeopath", description: "Specialists in alternative medicine treatments.", count: 1150, icon: <Pill className="w-6 h-6 text-emerald-500" /> },
  { id: 36, title: "Neonatologist", description: "Specialized care for newborn infants.", count: 240, icon: <Baby className="w-6 h-6 text-blue-300" /> },
  { id: 37, title: "Audiologist", description: "Hearing and balance disorder specialists.", count: 370, icon: <Activity className="w-6 h-6 text-indigo-400" /> },
  { id: 38, title: "Pain Management", description: "Specialists in chronic pain relief techniques.", count: 590, icon: <Thermometer className="w-6 h-6 text-yellow-600" /> },
  { id: 39, title: "Geneticist", description: "Specialists in hereditary and genetic disorders.", count: 120, icon: <Dna className="w-6 h-6 text-fuchsia-600" /> },
  { id: 40, title: "Sleep Physician", description: "Specialists for insomnia and sleep apnea.", count: 260, icon: <Activity className="w-6 h-6 text-indigo-900" /> },
  { id: 41, title: "Occupational Med", description: "Health and safety in the workplace.", count: 470, icon: <Briefcase className="w-6 h-6 text-cyan-800" /> },
  { id: 42, title: "Pharmacologist", description: "Drug interaction and medication specialists.", count: 610, icon: <Pill className="w-6 h-6 text-purple-700" /> },
  { id: 43, title: "Virologist", description: "Study and treatment of viral diseases.", count: 180, icon: <Microscope className="w-6 h-6 text-red-600" /> },
  { id: 44, title: "Hepatologist", description: "Liver, gallbladder, and pancreas specialists.", count: 330, icon: <Droplets className="w-6 h-6 text-amber-700" /> },
  { id: 45, title: "Emergency Physician", description: "Specialists in urgent and critical care.", count: 1900, icon: <ShieldCheck className="w-6 h-6 text-red-600" /> },
  { id: 46, title: "General Physician", description: "Primary care and routine health checkups.", count: 4500, icon: <Stethoscope className="w-6 h-6 text-blue-700" /> },
  { id: 47, title: "Cardiac Surgeon", description: "Surgeons specializing in heart operations.", count: 150, icon: <Heart className="w-6 h-6 text-rose-600" /> },
  { id: 48, title: "Palliative Care", description: "Care for patients with life-limiting illnesses.", count: 210, icon: <Heart className="w-6 h-6 text-pink-300" /> },
  { id: 49, title: "Colorectal Surgeon", description: "Specialists in lower digestive tract surgery.", count: 180, icon: <Activity className="w-6 h-6 text-brown-600" /> },
  { id: 50, title: "Toxicologist", description: "Specialists in poison and chemical exposure.", count: 90, icon: <FlaskConical className="w-6 h-6 text-green-900" /> },
];

const DoctorSearchSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
     <section className="w-full min-h-screen bg-gray-50/50">

      {/* Hero Search Area with green gradient */}
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
              aria-label="Search doctors or specialties"
              placeholder="Search specialties, symptoms, or doctors..."
              className="w-full p-4 pl-12 rounded-2xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 shadow-lg focus:ring-4 focus:ring-green-300 focus:outline-none text-lg transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-2 top-2 bottom-2 bg-green-600 hover:bg-green-700 text-white px-6 rounded-xl font-medium transition-colors hidden sm:flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Specialty Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Most Viewed Specialties
            </h2>
            <p className="text-gray-500 mt-1">
              Access 100+ medical specialties at your fingertips
            </p>
          </div>
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
            <button className="px-5 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold shadow-md transition-all">
              Most Popular
            </button>
            <button className="px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-all">
              All Specialties (A-Z)
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-green-50 transition-colors">
                  {item.icon}
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
                        {item.count.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">Doctor(s)</span>
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