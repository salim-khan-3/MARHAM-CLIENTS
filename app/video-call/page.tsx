import BookingForm from '@/components/Booking/BookingForm/BookingForm';
import ReviewSection from '@/components/Booking/ReviewSection/ReviewSection';
import React from 'react';

const BookingPage = () => {
    return (
        <div className='max-w-7xl mx-auto px-8 my-10'>
            <BookingForm></BookingForm>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default BookingPage;