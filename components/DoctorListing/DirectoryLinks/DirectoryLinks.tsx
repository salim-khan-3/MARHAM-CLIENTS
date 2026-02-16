import React from 'react';

const DirectoryLinks: React.FC = () => {
  const hospitalList = [
    "Liaquat National Hospital", "South City Hospital", "Patel Hospital", 
    "Fatima Memorial Hospital (Fmh)", "Shalamar Hospital", "Kulsoom International Hospital",
    "Quaid-E-Azam International Hospital", "Darul Sehat Hospital", "Mamji Hospital",
    "Ali Medical Centre", "Hameed Latif Hospital", "Mujahid Hospital",
    "Mid City Hospital", "Imam Clinic", "Surgimed Hospital", "Evercare Hospital",
    "Aziz Fatima Hospital", "Sadiq Hospital", "Doctors Hospital", "Omar Hospital & Cardiac Centre"
  ];

  const diseases = [
    "Best Endometriosis Doctor in Pakistan", "Best Pregnancy Doctor in Pakistan",
    "Best Menopause Doctor in Pakistan", "Best Ectopic Pregnancy Doctor in Pakistan",
    "Best Bacterial Vaginosis Doctor in Pakistan", "Best Premenstrual Dysphoric Disorder Doctor in Pakistan",
    "Best Abortion Doctor in Pakistan"
  ];

  const cities = [
    "Best Gynecologist in Lahore", "Best Gynecologist in Karachi",
    "Best Gynecologist in Islamabad", "Best Gynecologist in Rawalpindi",
    "Best Gynecologist in Faisalabad", "Best Gynecologist in Peshawar",
    "Best Gynecologist in Multan", "Best Gynecologist in Quetta",
    "Best Gynecologist in Gujranwala", "Best Gynecologist in Sargodha"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      
      {/* Best Hospitals Section */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-6">Best Hospitals in Pakistan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-3">
          {hospitalList.map((item, index) => (
            <a key={index} href="#" className="text-sm text-[#006097] hover:underline hover:text-blue-700">
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* Related Diseases Section */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-6">Gynecologist Related Diseases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {diseases.map((item, index) => (
            <a key={index} href="#" className="text-sm text-[#006097] hover:underline hover:text-blue-700">
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* Other Cities Section */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-6">Best Gynecologist in other cities of Pakistan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {cities.map((item, index) => (
            <a key={index} href="#" className="text-sm text-[#006097] hover:underline hover:text-blue-700">
              {item}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default DirectoryLinks;