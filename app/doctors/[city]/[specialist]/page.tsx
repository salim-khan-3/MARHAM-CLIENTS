import SearchComponent from "@/components/DoctorListing/SearchComponent/SearchComponent";
import DoctorCard from "@/components/DoctorListing/DoctorCard/DoctorCard";
import { doctorDataList } from "@/data/doctors";
import { filterDoctors } from "@/utils/doctorHelpers";

interface PageProps {
  params: Promise<{
    city: string;
    specialist: string;
  }>;
}

const DoctorListing = async ({ params }: PageProps) => {

  const { city, specialist } = await params;
  const filteredDoctors = filterDoctors(doctorDataList, city, specialist);

  return (
    <section className="w-full bg-gray-50 pb-20">
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-900 py-16 px-6 md:py-20 shadow-inner">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
            Find the Best {specialist} in {city}
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
          <p className="text-center text-gray-400 text-lg">
            No doctors found in {city} for {specialist}.
          </p>
        )}
      </div>
    </section>
  );
};


export default DoctorListing;

