"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Which symptoms and issues are treated by Gynecologists in Pakistan?",
    answer: "Gynecologists specialists in Pakistan provide the best services and treat issues like Infertility Treatment, Laparoscopy, Epidural Analgesia, Laproscopy And Hysteroscopy, Cesarean Section, Clinical Breast Examination (CBE), Normal Delivery / Svd."
  },
  {
    question: "Who is the best Gynecologist in Pakistan?",
    answer: "The best Gynecologist can vary based on experience and reviews. You can check the top-rated doctors in our listing above."
  },
  {
    question: "How do I choose a Gynecologist in Pakistan?",
    answer: "Look for PMDC verification, years of experience, patient satisfaction scores, and proximity to your location."
  },
  // Tumi ekhon baki question gulo eivabe add korte paro...
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default prothom ta open thakbe

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions about Best Gynecologists in Pakistan
      </h2>

      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-4 px-4 bg-[#f8fbfe] hover:bg-[#f0f7ff] transition-colors text-left"
            >
              <span className={`text-sm font-medium ${openIndex === index ? 'text-[#006097]' : 'text-gray-700'}`}>
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>
            
            {/* Animated Expandable Content */}
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 text-sm text-gray-600 leading-relaxed bg-white">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;