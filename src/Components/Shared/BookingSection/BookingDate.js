import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import TimeSlots from './TimeSlots';


const BookingDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { data: timeSlots = [] } = useQuery({
        queryKey: ['foodList'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/time")
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    return (
        <div>
            <div className="hero w-11/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/kxbmwf4/black.jpg")`, width: "400px", height: "320px" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-2 text-3xl font-semibold">Your Booking Date:</h1>
                                <hr className='mb-3' />
                                <p className="mb-5"> <span className='font-semibold-semi text-xl mr-4'>Date:</span> {format(selectedDate, 'PP')}</p>
                                <Link to="/Book-Form"><button className="btn btn-outline btn-warning rounded-full">Book Form</button></Link>
                            </div>
                        </div>
                    </div>
                    <div >
                        <DayPicker className='sm:w-10/12 bg-slate-700 text-white font-serif py-5 px-16'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
            <h1 className='text-center text-3xl font-serif text text-orange-600 my-4'>Select a Time Slot</h1>
            <div>
                <div className="card w-10/12 bg-slate-700 shadow-xl mx-auto my-9 ">

                    <div className="card-body grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {
                            timeSlots && timeSlots.map(timeSlot => <TimeSlots
                                key={timeSlot._id}
                                timeSlot={timeSlot}
                            ></TimeSlots>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDate;