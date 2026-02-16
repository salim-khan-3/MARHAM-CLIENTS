import React from 'react';
import { Star } from 'lucide-react';

const ReviewSection: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">336 Reviews</h3>
        <div className="flex text-yellow-500 my-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-sm text-gray-600">
          <span className="bg-[#006097] text-white px-2 py-0.5 rounded mr-2">5/5</span>
          Average rating based on 336 reviews.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-b py-6">
        <div className="space-y-2">
           {['Patient Satisfaction', 'Diagnosis', 'Staff Behaviour', 'Clinic Environment'].map((label) => (
             <div key={label} className="flex items-center gap-4">
               <span className="text-xs text-gray-600 w-32">{label}</span>
               <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                 <div className="bg-emerald-500 h-full w-[90%]"></div>
               </div>
               <span className="text-xs font-bold text-gray-500">4.5/5</span>
             </div>
           ))}
        </div>
        <div className="flex flex-col justify-center items-center border-l border-gray-100">
           <p className="text-xs text-gray-400">Wait Time</p>
           <p className="text-lg font-bold text-gray-700">10 mins</p>
        </div>
      </div>

      {/* Individual Review */}
      <div className="space-y-8">
        {[1, 2].map((r) => (
          <div key={r} className="border-b border-gray-50 pb-6 last:border-0">
            <div className="flex items-center gap-3 mb-2">
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">U</div>
               <div>
                  <p className="text-sm font-bold text-gray-700">u.a - 24/08/2024</p>
                  <p className="text-sm font-bold text-emerald-700">I am satisfied with the doctor.</p>
               </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              She is extremely cooperative and i am completely satisfied with her response definitely recommend.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">Great Experience</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">5 min meetup</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button className="flex-1 border border-[#006097] text-[#006097] py-2 rounded font-bold text-sm">View All Reviews</button>
        <button className="flex-1 border border-[#006097] text-[#006097] py-2 rounded font-bold text-sm">Post a Review</button>
      </div>
    </div>
  );
};

export default ReviewSection;