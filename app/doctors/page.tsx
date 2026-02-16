"use client";

import DoctorCard from '@/components/DoctorListing/DoctorCard/DoctorCard';
import DoctorSlider from '@/components/DoctorListing/DoctorSlider/DoctorSlider';
import FaqSection from '@/components/DoctorListing/FaqSection/FaqSection';
import FilterSection from '@/components/DoctorListing/FilterSection/FilterSection';
import Header from '@/components/DoctorListing/Header/Header';
import React from 'react';

const DoctorListingPage = () => {
    return (
        <div>
            {/* header part  */}
            <Header></Header>

            {/* filter section  */}
            <FilterSection></FilterSection>


            {/* main card section  */}
            <DoctorCard></DoctorCard>

            <DoctorSlider></DoctorSlider>

            {/* faq section  */}
            <FaqSection></FaqSection>
        </div>
    );
};

export default DoctorListingPage;