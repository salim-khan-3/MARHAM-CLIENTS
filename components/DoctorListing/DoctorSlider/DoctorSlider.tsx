import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Phone } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: string;
  price: string;
  image: string;
}

const doctors: Doctor[] = [
  { id: 1, name: 'Dr. Touseef Ashraf', specialty: 'Gynecologist', experience: '7 Years Experience', rating: '4.9/5', price: '100', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Dr. Paras Khowaja', specialty: 'Gynecologist', experience: '6 Years Experience', rating: '4.9/5', price: '500', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Dr. Eruj Saleem', specialty: 'Gynecologist', experience: '11 Years Experience', rating: '4.9/5', price: '500', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Dr. Sarah Khan', specialty: 'Gynecologist', experience: '8 Years Experience', rating: '4.8/5', price: '300', image: 'https://via.placeholder.com/150' },
];

const DoctorSlider: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: false });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Container with background and shadow like the image */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-2 overflow-hidden">
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 p-2">
            {doctors.map((doc) => (
              <div 
                key={doc.id} 
                className="flex-[0_0_85%] md:flex-[0_0_31%] min-w-0 bg-[#005a8d] rounded-lg p-4 text-white shadow-md flex flex-col justify-between"
              >
                {/* Top: Image and Text */}
                <div className="flex gap-4">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-16 h-16 rounded-full border-2 border-white/20 object-cover" 
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm md:text-base underline cursor-pointer truncate">
                      {doc.name}
                    </h3>
                    <p className="text-xs opacity-90">{doc.specialty}</p>
                    <p className="text-xs opacity-90">{doc.experience}</p>
                    <p className="text-xs font-semibold mt-1">{doc.rating}</p>
                  </div>
                </div>

                {/* Bottom: Pricing and Status */}
                <div className="mt-6">
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="font-medium">Online</span>
                    <span className="font-bold">Rs. {doc.price}</span>
                  </div>
                  
                  <button className="w-full bg-[#3a866a] hover:bg-[#2d6b54] transition-colors py-2 rounded-md font-bold text-sm flex items-center justify-center gap-2">
                    Call Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSlider;