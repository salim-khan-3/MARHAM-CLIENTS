// import AllSpecialist from "@/components/Doctor/AllSpecialistList";
// import DoctorDetailsPage from "@/components/Doctor/DoctorDetailsPage";
// import DoctorListing from "@/components/Doctor/DoctorListing";
// import { cities } from "@/data/cities";

// // Next.js 15 এ params একটি Promise হিসেবে আসে
// interface PageProps {
//   params: Promise<{
//     slug?: string[];
//   }>;
// }

// const DoctorsPage = async ({ params }: PageProps) => {
//   // params কে await করতে হবে
//   const resolvedParams = await params;
//   const slug = resolvedParams.slug || [];

//   console.log("Current Slug:", slug); // ডিবাগ করার জন্য

//   // ১. /doctors
//   if (slug.length === 0) {
//     return <AllSpecialist />;
//   }

//   // ২. /doctors/[city] অথবা /doctors/[specialist]
//   if (slug.length === 1) {
//     const param = slug[0].toLowerCase();

//     // আপনার cities list এর সাথে চেক করুন
//     if (cities.includes(param)) {
//       return <DoctorListing city={param} specialist="" />;
//     }

//     // city না হলে specialist হিসেবে ধরবে
//     return <DoctorListing city="" specialist={param} />;
//   }

//   // ৩. /doctors/[city]/[specialist]
//   if (slug.length === 2) {
//     const city = slug[0].toLowerCase();
//     const specialist = slug[1].toLowerCase();

//     return <DoctorListing city={city} specialist={specialist} />;
//   }

//   // ৪. /doctors/[city]/[specialist]/[doctor-slug]
//   // Marham এর লিঙ্কে ৪টি প্যারামিটার থাকে: /doctors/karachi/dermatologist/dr-shamail-zia
//   // আপনার logic অনুযায়ী length ৩ হলে doctor details
//   if (slug.length >= 3) {
//     // যদি ৪টি থাকে তবে শেষেরটি ডক্টর স্লাগ
//     const doctorSlug = slug[slug.length - 1]; 
//     return <DoctorDetailsPage slug={doctorSlug} />;
//   }

//   return <div>Not Found</div>;
// };

// export default DoctorsPage;











import AllSpecialist from "@/components/Doctor/AllSpecialistList";
import DoctorDetailsPage from "@/components/Doctor/DoctorDetailsPage";
import DoctorListing from "@/components/Doctor/DoctorListing";
import AppointmentForm from "@/components/Doctor/AppointmentForm"; // আপনার ফর্মটি ইমপোর্ট করুন
import { cities } from "@/data/cities";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

const DoctorsPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];

  console.log("Current Slug:", slug);

  // ১. /doctors
  if (slug.length === 0) {
    return <AllSpecialist />;
  }

  // ২. /doctors/[city] অথবা /doctors/[specialist]
  if (slug.length === 1) {
    const param = slug[0].toLowerCase();
    if (cities.includes(param)) {
      return <DoctorListing city={param} specialist="" />;
    }
    return <DoctorListing city="" specialist={param} />;
  }

  // ৩. /doctors/[city]/[specialist]
  if (slug.length === 2) {
    const city = slug[0].toLowerCase();
    const specialist = slug[1].toLowerCase();
    return <DoctorListing city={city} specialist={specialist} />;
  }

  // ৪. /doctors/[city]/[specialist]/[doctor-slug] (ডাক্তারের প্রোফাইল পেজ)
  if (slug.length === 3) {
    const doctorSlug = slug[2]; 
    return <DoctorDetailsPage slug={doctorSlug} />;
  }

  // ৫. /doctors/[city]/[specialist]/[doctor-slug]/callcenter (বুকিং ফর্ম পেজ)
  if (slug.length === 4 && slug[3] === 'callcenter') {
    const doctorSlug = slug[2];
    // এখানে আপনার তৈরি করা আধুনিক ফর্মটি রিটার্ন করুন
    return <AppointmentForm slug={doctorSlug} />;
  }

  // ৬. /doctors/[city]/[specialist]/[doctor-slug]/thanks/[id] (ধন্যবাদ পেজ)
  if (slug.length === 5 && slug[3] === 'thanks') {
    const appointmentId = slug[4];
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-emerald-600 mb-2">ধন্যবাদ!</h1>
          <p className="text-slate-600">আপনার অ্যাপয়েন্টমেন্ট সফলভাবে সম্পন্ন হয়েছে।</p>
          <p className="mt-4 font-mono text-sm bg-slate-100 p-2 rounded">আইডি: {appointmentId}</p>
        </div>
      </div>
    );
  }

  return <div>Not Found</div>;
};

export default DoctorsPage;