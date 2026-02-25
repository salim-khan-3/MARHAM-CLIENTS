import { doctorDataList } from "@/data/doctors";
import { notFound} from "next/navigation";
import {
  Star,
  MapPin,
  Calendar,
  Clock,
  Video,
  Award,
  BookOpen,
  ShieldCheck,
  CheckCircle,
  ChevronRight,
  MessageCircle,
  Share2,
} from "lucide-react";
import BookingButton from "./ActionButtons/BookingButton";

// প্রধান পরিবর্তন: এখানে params এর বদলে শুধু slug হবে
interface PageProps {
  slug: string;
}

const DoctorDetailsPage = ({ slug }: PageProps) => {
  // const router = useRouter();
  // ১. slug থেকে ID আলাদা করা
  const doctorId = slug.split("-")[0];

  // ২. id দিয়ে ডাক্তার খুঁজে বের করা
  const doctor = doctorDataList.find((doc) => doc.id === parseInt(doctorId));

  // ৩. চেক করা
  if (!doctor) return notFound();




  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Top Header / Breadcrumb Style */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Doctors</span> <ChevronRight className="w-4 h-4" />
            <span>{doctor.city}</span> <ChevronRight className="w-4 h-4" />
            <span className="text-emerald-600 font-medium">{doctor.name}</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Doctor Profile & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-emerald-50">
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-4 border-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-4xl font-black text-gray-900">
                    {doctor.name}
                  </h1>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> PMC Verified
                  </span>
                </div>
                <p className="text-gray-600 font-medium text-lg mb-1">
                  {doctor.specialties.join(", ")}
                </p>
                <p className="text-gray-400 font-medium">
                  {doctor.qualifications.join(", ")}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-50 p-3 rounded-2xl">
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Experience
                    </p>
                    <p className="text-lg font-bold text-slate-800">
                      {doctor.experience} Years
                    </p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-2xl">
                    <p className="text-xs text-amber-600 font-bold uppercase">
                      Satisfaction
                    </p>
                    <p className="text-lg font-bold text-amber-700">
                      {doctor.satisfaction}% ({doctor.reviews})
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" /> About Doctor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {doctor.name} is a highly experienced {doctor.specialties[0]} in{" "}
                {doctor.city} with {doctor.experience} years of practice. He is
                committed to providing excellent patient care.
              </p>
            </div>

            {/* Services/Tags */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Specializations & Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {doctor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking & Fees */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden sticky top-8">
              <div className="bg-emerald-600 p-6 text-white">
                <p className="text-emerald-100 font-medium">Consultation Fee</p>
                <h2 className="text-3xl font-black">৳ {doctor.videoFee}</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="flex items-center gap-3">
                    <Video className="w-6 h-6 text-emerald-600" />
                    <div>
                      <p className="font-bold text-emerald-900">
                        Video Consultation
                      </p>
                      <p className="text-xs text-emerald-600">
                        Secure & Private
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">Available Today</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">
                      Clinic: {doctor.clinicAddress}
                    </span>
                  </div>
                </div>

               <BookingButton doctor={doctor} slug={slug}></BookingButton>

                <button className="w-full bg-white border-2 border-slate-900 text-slate-900 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Ask a Question
                </button>
              </div>

              <div className="bg-gray-50 p-4 text-center border-t">
                <p className="text-xs text-gray-500 font-medium">
                  100% Secure Payment & Instant Confirmation
                </p>
              </div>
            </div>

            {/* Awards / Extra Info */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-amber-400" />
                <h4 className="font-bold">Top Rated Specialist</h4>
              </div>
              <p className="text-slate-400 text-sm">
                This doctor is in the top 5% of specialists in {doctor.city}{" "}
                based on patient reviews and successful treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
