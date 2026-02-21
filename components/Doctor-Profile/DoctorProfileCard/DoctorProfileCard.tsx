import Image from "next/image";

const DoctorProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex gap-6">
        <Image
          src="/doctor.jpg"
          alt="Doctor"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">
            Dr. Sadia Mughese
          </h2>
          <p className="text-gray-500 mt-1">
            Dermatologist • MBBS, FCPS
          </p>

          <div className="flex gap-4 mt-3">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
              Consult Online
            </button>
            <button className="border border-teal-600 text-teal-600 px-4 py-2 rounded-lg">
              Visit Clinic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
