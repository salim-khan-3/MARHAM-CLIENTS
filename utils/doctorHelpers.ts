import { Doctor } from "@/data/doctors";

export const filterDoctors = (
  doctors: Doctor[],
  city?: string,
  specialist?: string
): Doctor[] => {
  if (!city || !specialist) return []; 

  return doctors.filter((doctor) => {
    const doctorCity = doctor.city?.toLowerCase();
    const doctorSpecialties = doctor.specialties?.map((sp) => sp.toLowerCase()) || [];

    return doctorCity === city.toLowerCase() &&
           doctorSpecialties.some((sp) => sp.includes(specialist.toLowerCase()));
  });
};