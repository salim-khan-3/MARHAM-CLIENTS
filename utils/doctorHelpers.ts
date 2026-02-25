// import { Doctor } from "@/data/doctors";

// export const filterDoctors = (
//   doctors: Doctor[],
//   city?: string,
//   specialist?: string
// ): Doctor[] => {
//   if (!city || !specialist) return []; 

//   return doctors.filter((doctor) => {
//     const doctorCity = doctor.city?.toLowerCase();
//     const doctorSpecialties = doctor.specialties?.map((sp) => sp.toLowerCase()) || [];

//     return doctorCity === city.toLowerCase() &&
//            doctorSpecialties.some((sp) => sp.includes(specialist.toLowerCase()));
//   });
// };

import { Doctor } from "@/data/doctors";

export const filterDoctors = (
  doctors: Doctor[],
  city?: string,
  specialist?: string
): Doctor[] => {
  
  // যদি সিটি এবং স্পেশালিস্ট দুইটাই খালি থাকে, তবে সব ডাক্তার দেখাবে
  if (!city && !specialist) return doctors;

  return doctors.filter((doctor) => {
    // ১. সিটি ফিল্টার হ্যান্ডেল
    // যদি ইউআরএল এ সিটি থাকে, তবে চেক করবে। না থাকলে true (সব সিটি এলাউড)।
    const doctorCity = doctor.city?.toLowerCase();
    const matchesCity = city 
      ? doctorCity === city.toLowerCase() 
      : true;

    // ২. স্পেশালিস্ট ফিল্টার হ্যান্ডেল
    // যদি ইউআরএল এ স্পেশালিস্ট থাকে, তবে চেক করবে। না থাকলে true (সব স্পেশালিস্ট এলাউড)।
    const doctorSpecialties = doctor.specialties?.map((sp) => sp.toLowerCase()) || [];
    const matchesSpecialist = specialist 
      ? doctorSpecialties.some((sp) => sp.includes(specialist.toLowerCase())) 
      : true;

    // যখন দুইটা কন্ডিশনই মিলবে (অথবা যেটা দেওয়া নেই সেটা true হবে) তখনই রেজাল্ট দেখাবে
    return matchesCity && matchesSpecialist;
  });
};