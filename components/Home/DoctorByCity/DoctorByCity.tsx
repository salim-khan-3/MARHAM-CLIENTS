import React from 'react';

// Data structure define kora hoyeche jate code clean thake
const cityData = [
  {
    cityName: "Lahore",
    specialists: [
      "Best Dermatologist in Lahore", "Best Gynecologist in Lahore", "Best Psychiatrist in Lahore",
      "Best Gastroenterologist in Lahore", "Best Urologist in Lahore", "Best General Practitioner in Lahore",
      "Best Psychologist in Lahore", "Best General Physician in Lahore", "Best Neurologist in Lahore",
      "Best Nutritionist in Lahore"
    ]
  },
  {
    cityName: "Karachi",
    specialists: [
      "Best Dermatologist in Karachi", "Best Gynecologist in Karachi", "Best Psychiatrist in Karachi",
      "Best Gastroenterologist in Karachi", "Best Urologist in Karachi", "Best General Physician in Karachi",
      "Best Neurologist in Karachi", "Best Endocrinologist in Karachi", "Best Pediatrician in Karachi",
      "Best Orthopedic Surgeon in Karachi"
    ]
  },
  {
    cityName: "Islamabad",
    specialists: [
      "Best Psychologist in Islamabad", "Best Dermatologist in Islamabad", "Best Gynecologist in Islamabad",
      "Best Psychiatrist in Islamabad", "Best Urologist in Islamabad", "Best Gastroenterologist in Islamabad",
      "Best Neuro Surgeon in Islamabad", "Best Neurologist in Islamabad", "Best General Surgeon in Islamabad",
      "Best Orthopedic Surgeon in Islamabad"
    ]
  },
  {
    cityName: "Other Cities in Pakistan",
    specialists: [
      "Best Orthopedic Surgeon in Quetta", "Best Gastroenterologist in Quetta", "Best Dermatologist in Quetta",
      "Best Dermatologist in Rawalpindi", "Best Neuro Physician in Quetta", "Best Gynecologist in Quetta",
      "Best Psychiatrist in Quetta", "Best Gynecologist in Peshawar", "Best Pediatrician in Quetta",
      "Best Dermatologist in Multan"
    ]
  }
];

const DoctorByCity = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#005177] mb-12">
          Find A Doctor By City
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cityData.map((city, index) => (
            <div key={index} className="space-y-4">
              {/* City Title */}
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2 sm:border-none">
                {city.cityName}
              </h3>
              
              {/* Links List */}
              <ul className="space-y-2">
                {city.specialists.map((specialist, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-200 block"
                    >
                      {specialist}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorByCity;