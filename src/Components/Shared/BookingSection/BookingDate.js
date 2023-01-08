import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const BookingDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <div className="hero w-11/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src="https://i.ibb.co/JxzqzH9/book-Atable.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                    <div className="hero" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")`, width: "400px", height: "320px" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-2 text-3xl font-semibold">Your Booking Date:</h1>
                                <hr className='mb-3' />
                                <p className="mb-5"> <span className='font-semibold-semi text-xl mr-4'>Date:</span> {format(selectedDate, 'PP')}</p>

                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <DayPicker className='bg-slate-700 text-white font-serif p-5 rounded-lg'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDate;