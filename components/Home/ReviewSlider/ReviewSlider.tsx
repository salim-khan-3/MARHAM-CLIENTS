"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ThumbsUp, Star } from 'lucide-react';

// Sample Data based on your image
const reviews = [
  {
    id: 1,
    name: "Umair Ali",
    text: "I got late on my appointment, but after 10 minutes, the doctor called me and prescribed medicines, which is far better than appointing physically and waiting!",
    status: "Good",
    stars: 4,
    bgColor: "bg-[#e2f2f0]", // Light teal/greenish
  },
  {
    id: 2,
    name: "Misbah Khan",
    text: "My first appointment today. It was a very smooth experience and the skin specialist was very helpful and professional experiences so far facility is also very good.",
    status: "Satisfied",
    stars: 5,
    bgColor: "bg-[#e2f2f0]",
  },
  {
    id: 3,
    name: "Irfan Muddassir",
    text: "It is a really good initiative to connect with health care personals. If you feel a need for help then helpline is there to take care of it. overall very good experience.",
    status: "Good",
    stars: 5,
    bgColor: "bg-[#fde8d7]", // Light orange/peach
  },
  {
    id: 4,
    name: "Umair Ali",
    text: "I got late on my appointment, but after 10 minutes, the doctor called me and prescribed medicines, which is far better than appointing physically and waiting!",
    status: "Good",
    stars: 4,
    bgColor: "bg-[#e2f2f0]",
  }
];

const ReviewSlider = () => {
  // Embla setup with Autoplay
  const [emblaRef] = useEmblaCarousel(
    { 
      align: 'start', 
      loop: true, 
      slidesToScroll: 1 
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-6 px-2">Marham Users</h2>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
            >
              <div className="h-full border border-gray-100 rounded-xl shadow-sm flex flex-col overflow-hidden bg-white">
                
                {/* Review Body */}
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#005a78] p-1.5 rounded-md">
                      <ThumbsUp size={16} className="text-white fill-current" />
                    </div>
                    <h3 className="font-bold text-[#333]">{review.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                    "{review.text}"
                  </p>
                </div>

                {/* Bottom Status Bar */}
                <div className={`px-5 py-3 flex justify-between items-center ${review.bgColor}`}>
                  <span className="font-bold text-[#005a78] text-sm uppercase tracking-wide">
                    {review.status}
                  </span>
                  <div className="flex gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < review.stars ? "fill-current" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;