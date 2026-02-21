import DoctorProfileCard from '@/components/Doctor-Profile/DoctorProfileCard/DoctorProfileCard';
import DoctorStats from '@/components/Doctor-Profile/DoctorStats/DoctorStats';
// import ReviewCard from '@/components/Doctor-Profile/ReviewCard/ReviewCard';
// import ReviewCard from '@/components/Doctor-Profile/ReviewCard/ReviewCard';
import React from 'react';

const DoctorDetails = () => {
    return (
        <div>
            <DoctorProfileCard></DoctorProfileCard>
            <DoctorStats></DoctorStats>
            {/* <ReviewCard></ReviewCard> */}
            {/* <ReviewCard></ReviewCard> */}
        </div>
    );
};

export default DoctorDetails;