"use client";

import React, { useState } from 'react';
import { 
  Calendar, Clock, User, Phone, 
  HeartPulse, ShieldCheck, ArrowRight, 
  CheckCircle, AlertCircle, ChevronLeft,
  Sparkles, ClipboardList, MessageSquare
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface AppointmentFormProps {
  slug: string;
}

const AppointmentForm = ({ slug }: AppointmentFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    shift: 'morning',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1800));
    
    const fakeId = Math.floor(100000 + Math.random() * 900000);
    // Redirecting to thanks page
    router.push(`${window.location.pathname.replace('/callcenter', '')}/thanks/${fakeId}`);
  };

  return (
    <div className="min-h-screen bg-[#F3F7FA] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-bold transition-all mb-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Go Back
        </button>

        <div className="bg-white rounded-[45px] shadow-[0_30px_90px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row border border-white/60">
          
          {/* Left Panel: Information */}
          <div className="lg:w-[38%] bg-gradient-to-br from-[#4338CA] via-[#4F46E5] to-[#7C3AED] p-10 lg:p-14 text-white relative">
            <div className="absolute bottom-0 right-0 p-10 opacity-10 pointer-events-none">
               <HeartPulse size={250} />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-black mb-10 self-start border border-white/20 uppercase tracking-widest">
                <Sparkles size={14} /> 
                Next-Gen Healthcare
              </div>

              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8 tracking-tight">
                Quality Care, <br />Only a Click <br />Away.
              </h2>
              
              <p className="text-indigo-50/70 text-lg mb-12 leading-relaxed font-medium">
                Book your appointment with our top-rated specialists instantly. Your health data is always safe with us.
              </p>

              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-5 bg-white/5 p-5 rounded-[28px] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default group">
                  <div className="bg-white text-indigo-600 p-3.5 rounded-2xl shadow-lg transition-transform group-hover:scale-110">
                    <ShieldCheck size={26} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none">Secure Booking</h4>
                    <p className="text-indigo-100/60 text-sm mt-1">100% Data Privacy Guaranteed</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/5 p-5 rounded-[28px] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default group">
                  <div className="bg-white text-purple-600 p-3.5 rounded-2xl shadow-lg transition-transform group-hover:scale-110">
                    <CheckCircle size={26} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none">Instant Response</h4>
                    <p className="text-indigo-100/60 text-sm mt-1">Direct Clinic Confirmation</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-[2px] opacity-60">Helpline</p>
                  <p className="text-xl font-black">+880 1700-000000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:w-[62%] p-10 lg:p-16 bg-white relative">
            <div className="mb-14">
              <div className="flex items-center gap-3 text-indigo-600 font-black mb-3 uppercase tracking-[3px] text-xs">
                <ClipboardList size={18} /> Appointment Details
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
                Complete Your Booking
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-black text-slate-600 mb-2.5 ml-1 transition-colors group-focus-within:text-indigo-600 uppercase tracking-wide">
                    Patient Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-black text-slate-600 mb-2.5 ml-1 transition-colors group-focus-within:text-indigo-600 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="017XXXXXXXX"
                      className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="group">
                  <label className="block text-sm font-black text-slate-600 mb-2.5 ml-1 transition-colors group-focus-within:text-indigo-600 uppercase tracking-wide">
                    Appointment Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      required
                      type="date"
                      name="date"
                      className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 text-slate-800 focus:bg-white focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all font-semibold cursor-pointer [color-scheme:light]"
                    />
                  </div>
                </div>

                {/* Shift */}
                <div className="group">
                  <label className="block text-sm font-black text-slate-600 mb-2.5 ml-1 transition-colors group-focus-within:text-indigo-600 uppercase tracking-wide">
                    Select Shift
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <select
                      name="shift"
                      className="w-full pl-16 pr-10 py-5 rounded-2xl bg-slate-50 border-2 border-slate-50 text-slate-800 focus:bg-white focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all font-semibold appearance-none cursor-pointer"
                    >
                      <option value="morning">Morning (09:00 AM – 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 04:00 PM)</option>
                      <option value="evening">Evening (05:00 PM – 09:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-black text-slate-600 mb-2.5 ml-1 transition-colors group-focus-within:text-indigo-600 uppercase tracking-wide">
                  Brief Concern (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-6 top-6 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your health concern..."
                    className="w-full pl-16 pr-8 py-5 rounded-3xl bg-slate-50 border-2 border-slate-50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 outline-none transition-all font-semibold resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-300 text-white font-black text-xl py-6 rounded-[30px] shadow-2xl shadow-indigo-100 transition-all transform hover:-translate-y-1.5 active:scale-[0.98] flex items-center justify-center gap-4 group overflow-hidden relative"
              >
                {loading ? (
                  <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Confirm Appointment
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-300" />
                  </>
                )}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer transition-transform"></div>
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[3px]">
                 <AlertCircle size={14} /> HIPAA Compliant • SSL Encrypted
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.8s infinite;
        }
      `}</style>
    </div>
  );
};

export default AppointmentForm;