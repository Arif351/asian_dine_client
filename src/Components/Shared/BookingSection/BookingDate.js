import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import TimeSlots from './TimeSlots';
import BookForm from './BookForm';


const BookingDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showTime, setShowTime] = useState()
    console.log(showTime);

    const { data: timeSlots = [] } = useQuery({
        queryKey: ['foodList'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/time")
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    const handleTimeSlot = (timeSlot) => {
        console.log(timeSlot);
        const ts = timeSlot.slots
        console.log(ts);
        const res = setShowTime(ts);
        console.log(res);

        //     const time = timeSlot;
        //    const timeTableSlot= time.setShowTime()

    }

    return (
        <div>
            <div className="hero w-11/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                    <div className="hero bg-slate-800" style={{ backgroundColor: '', width: "400px", height: "320px" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-2 text-3xl font-semibold">Your Booking Date</h1>
                                <hr className='my-6' />
                                <p className="my-2 text-xl font-medium text-start">Date: <span className='text-orange-400 ml-5'> {format(selectedDate, 'PP')}</span></p>
                                <p className='text-xl font-medium text-start'>Time: <span className='text-orange-400 ml-5'>{showTime}</span> </p>
                                {/* <Link to="/Book-Form"><button className="btn btn-outline btn-warning rounded-full">Book Form</button></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className='lg:mr-12'>
                        <DayPicker className='sm:w-10/12 bg-slate-700 text-white font-serif py-5 px-16'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center text-3xl font-serif text text-orange-600 mt-4'>Time:</h1>
                <hr className='w-10/12 mx-auto my-4' />
            </div>            <div>
                <div className="card w-10/12  mx-auto my-4 ">
                    <div className="card-body grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {
                            timeSlots && timeSlots.map(timeSlot => <TimeSlots
                                key={timeSlot._id}
                                timeSlot={timeSlot}
                                handleTimeSlot={handleTimeSlot}
                            ></TimeSlots>)
                        }
                    </div>
                </div>
            </div>
            <div>
                {/* <BookForm></BookForm> */}
            </div>
        </div>
    );
};

export default BookingDate;