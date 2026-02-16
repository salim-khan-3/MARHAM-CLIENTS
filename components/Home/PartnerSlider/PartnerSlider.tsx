"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronRight } from 'lucide-react';

const partners = [
  { id: 1, name: "Adamjee Insurance", logo: "/logos/adamjee.png" },
  { id: 2, name: "Graana", logo: "/logos/graana.png" },
  { id: 3, name: "Zameen.com", logo: "/logos/zameen.png" },
  { id: 4, name: "TCS", logo: "/logos/tcs.png" },
  { id: 5, name: "Sanofi", logo: "/logos/sanofi.png" },
  { id: 6, name: "Abbott", logo: "/logos/abbott.png" },
];

const PartnerSlider = () => {
  // Autoplay setup jate logo-gulo auto slide hoy
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold text-gray-800">
          Our Partners
        </h2>
        <Link 
          href="/join-us" 
          className="flex items-center text-sm font-semibold text-[#005a78] hover:underline"
        >
          Join Us <ChevronRight size={16} />
        </Link>
      </div>

      {/* Slider Area */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center gap-12 lg:gap-20">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex-[0_0_40%] md:flex-[0_0_20%] lg:flex-[0_0_15%] min-w-0 flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          {/* Infinite loop-er jonno same data arekbar repeat kora bhalo */}
          {partners.map((partner) => (
            <div 
              key={`repeat-${partner.id}`} 
              className="flex-[0_0_40%] md:flex-[0_0_20%] lg:flex-[0_0_15%] min-w-0 flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;