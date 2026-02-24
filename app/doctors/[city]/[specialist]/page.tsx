
import SearchComponent from "@/components/DoctorListing/SearchComponent/SearchComponent";

// import {

//   Video,
//   Star,
//   MapPin,
//   Clock,
//   CheckCircle2,
//   Filter,
// } from "lucide-react";
import DoctorCard from "@/components/DoctorListing/DoctorCard/DoctorCard";

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
interface PageProps {
  params: {
    city: string;
    specialist: string;
  };
}

const doctorDataList: Doctor[] = [
  {
    id: 1,
    name: "Assoc. Prof. Dr. Imran Qadir",
    specialties: ["Urologist", "Sexologist", "Andrologist"],
    qualifications: ["MBBS", "MD", "FCPS"],
    reviews: 645,
    experience: 15,
    satisfaction: 94,
    tags: ["Kidney Stones", "Male Sexual Health", "Circumcision"],
    videoFee: 2000,
    clinicFee: 1500,
    clinicAddress: "Qadir Medical Complex, People Colony No 2, Faisalabad",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Imran",
  },
  {
    id: 2,
    name: "Dr. Sarah Ahmed",
    specialties: ["Gynecologist", "Obstetrician"],
    qualifications: ["MBBS", "MCPS", "DGO"],
    reviews: 420,
    experience: 10,
    satisfaction: 96,
    tags: ["High Risk Pregnancy", "Infertility Specialist"],
    videoFee: 1500,
    clinicFee: 1200,
    clinicAddress: "City Hospital, Gulberg III, Lahore",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 3,
    name: "Dr. Sarah Ahmed",
    specialties: ["Gynecologist", "Obstetrician"],
    qualifications: ["MBBS", "MCPS", "DGO"],
    reviews: 420,
    experience: 10,
    satisfaction: 96,
    tags: ["High Risk Pregnancy", "Infertility Specialist"],
    videoFee: 1500,
    clinicFee: 1200,
    clinicAddress: "City Hospital, Gulberg III, Lahore",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 4,
    name: "Prof. Dr. Zayed Khan",
    specialties: ["Cardiologist", "Interventional Cardiologist"],
    qualifications: ["MBBS", "FCPS", "MRCP (UK)"],
    reviews: 890,
    experience: 22,
    satisfaction: 98,
    tags: ["Angiography", "Heart Failure", "Hypertension"],
    videoFee: 3000,
    clinicFee: 2500,
    clinicAddress: "Heart Care Center, Clifton, Karachi",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zayed",
  },
  {
    id: 5,
    name: "Prof. Dr. Zayed Khan",
    specialties: ["Cardiologist", "Interventional Cardiologist"],
    qualifications: ["MBBS", "FCPS", "MRCP (UK)"],
    reviews: 890,
    experience: 22,
    satisfaction: 98,
    tags: ["Angiography", "Heart Failure", "Hypertension"],
    videoFee: 3000,
    clinicFee: 2500,
    clinicAddress: "Heart Care Center, Clifton, Karachi",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zayed",
  },
  {
    id: 6,
    name: "Prof. Dr. Zayed Khan",
    specialties: ["Cardiologist", "Interventional Cardiologist"],
    qualifications: ["MBBS", "FCPS", "MRCP (UK)"],
    reviews: 890,
    experience: 22,
    satisfaction: 98,
    tags: ["Angiography", "Heart Failure", "Hypertension"],
    videoFee: 3000,
    clinicFee: 2500,
    clinicAddress: "Heart Care Center, Clifton, Karachi",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zayed",
  },
  {
    id: 7,
    name: "Dr. Maria Sultana",
    specialties: ["Dermatologist", "Cosmetologist"],
    qualifications: ["MBBS", "DDV", "FCPS"],
    reviews: 310,
    experience: 8,
    satisfaction: 92,
    tags: ["Acne Treatment", "Laser Surgery", "Skin Rejuvenation"],
    videoFee: 1200,
    clinicFee: 1000,
    clinicAddress: "Skin Clinic, Blue Area, Islamabad",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
];

const DoctorListing = async({ params }: PageProps) => {
  const { city, specialist } = await params;


  // const filteredDoctors = doctorDataList.filter(
  //   (doctor) =>
  //     doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     doctor.specialties
  //       .join(" ")
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase()),
  // );
  const filteredDoctors = doctorDataList.filter((doctor) =>
    doctor.specialties.some(
      (spec) => spec.toLowerCase() === specialist.toLowerCase(),
    ),
  );
  return (
    <section className="w-full bg-gray-50 pb-20 ">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-900 py-16 px-6 md:py-20 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
            Find the Best Specialists
          </h1>

          <SearchComponent></SearchComponent>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 pt-16 space-y-10">
        {/* Doctor Card */}
        {filteredDoctors.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </section>
  );
};

export default DoctorListing;
