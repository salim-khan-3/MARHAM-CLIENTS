// import SearchComponent from "@/components/DoctorListing/SearchComponent/SearchComponent";
// import DoctorCard from "@/components/DoctorListing/DoctorCard/DoctorCard";
// import { doctorDataList } from "@/data/doctors";
// import { filterDoctors } from "@/utils/doctorHelpers";
// interface DoctorListingProps {
//   city: string;
//   specialist: string;
// }
// const DoctorListing = async ({ city, specialist }: DoctorListingProps) => {

//   const filteredDoctors = filterDoctors(doctorDataList, city, specialist);

//   return (
//     <section className="w-full bg-gray-50 pb-20">
//       <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-900 py-16 px-6 md:py-20 shadow-inner">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
//             Find the Best {specialist} in {city}
//           </h1>
//           <SearchComponent />
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 pt-16 space-y-10">
//         {filteredDoctors.length > 0 ? (
//           filteredDoctors.map((doctor) => (
//             <DoctorCard doctor={doctor} key={doctor.id} />
//           ))
//         ) : (
//           <p className="text-center text-gray-400 text-lg">
//             No doctors found in {city} for {specialist}.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };


// export default DoctorListing;

import SearchComponent from "@/components/DoctorListing/SearchComponent/SearchComponent";
import DoctorCard from "@/components/DoctorListing/DoctorCard/DoctorCard";
import { doctorDataList } from "@/data/doctors";
import { filterDoctors } from "@/utils/doctorHelpers";

interface DoctorListingProps {
  city: string;
  specialist: string;
}

const DoctorListing = async ({ city, specialist }: DoctorListingProps) => {
  // ১. ফিল্টার কল করা (তোর নতুন হেল্পার ফাংশন অনুযায়ী)
  const filteredDoctors = filterDoctors(doctorDataList, city, specialist);

  // ২. ডাইনামিক টাইটেল সেট করা (যাতে খালি টেক্সট না আসে)
  const getHeaderTitle = () => {
    if (specialist && city) return `Best ${specialist} in ${city}`;
    if (specialist) return `Best ${specialist} Specialists`;
    if (city) return `Best Doctors in ${city}`;
    return "All Available Doctors";
  };

  return (
    <section className="w-full bg-gray-50 pb-20">
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-900 py-16 px-6 md:py-20 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          {/* এখানে ডাইনামিক টাইটেল হ্যান্ডেল করা হয়েছে */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md capitalize">
            {getHeaderTitle()}
          </h1>
          <SearchComponent />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-16 space-y-10">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
            <p className="text-gray-500 text-xl font-medium">

              No doctors found 
              {specialist ? ` for ${specialist}` : ""} 
              {city ? ` in ${city}` : ""}.
            </p>
            <p className="text-gray-400 mt-2 font-normal">Please try searching with another city or specialty.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorListing;