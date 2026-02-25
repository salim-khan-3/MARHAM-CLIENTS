"use client"

import { useRouter } from "next/navigation"; // ১. ইমপোর্ট যোগ করা হয়েছে
import { Calendar } from "lucide-react";

// ২. Props ইন্টারফেস তৈরি করা হয়েছে যাতে টাইপ সেফটি থাকে
interface BookingButtonProps {
  doctor:any; // আপনার ডাক্তার ডাটার টাইপ
  slug: string;
}

const BookingButton = ({ doctor, slug }: BookingButtonProps) => {
  const router = useRouter(); // ৩. রাউটার কল করা হয়েছে

  const handleBookingRedirect = () => {
    // এখন doctor এবং slug ভেরিয়েবলগুলো props থেকে আসবে
    const city = doctor.city.toLowerCase();
    const specialist = doctor.specialties[0].toLowerCase().replace(/\s+/g, '-');
    const doctorSlug = slug; 
    const hospitalId = "144"; 

    const bookingUrl = `/doctors/${city}/${specialist}/${doctorSlug}/callcenter?h_id=${hospitalId}`;
    
    router.push(bookingUrl);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleBookingRedirect}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" /> Book Appointment
      </button>
    </div>
  );
};

export default BookingButton;