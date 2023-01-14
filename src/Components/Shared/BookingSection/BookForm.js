import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthContext/AuthProvider';

const BookForm = ({ selectedDate, showTime }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(showTime);
    console.log(selectedDate);
    console.log(user);

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const time = form.time.value;

        console.log(name, email, phone, date, time);

        const booking = {
            bookingDate: date,
            email,
            phone,
            time,
            name
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Please, make payment to confirm.")
                    navigate('')
                }
            })
    };

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='border border-purple-700 lg:w-6/12 w-10/12'>
                <form onSubmit={handleBooking}>
                    <div className='text-center'>
                        <h1 className='text-3xl font-sans text text-orange-600 mt-4'>Booking Form</h1>
                        <h4 className='font-sans mt-2 text-orange-700 text-lg'>[select date and time from up]</h4>
                    </div>
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full max-w-lg">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" name='name' className="input input-bordered input-primary" defaultValue={user?.displayName} placeholder="Name" />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='email' placeholder="email" className="input input-bordered input-primary" defaultValue={user?.email} />
                                </div>
                                <div className="form-control">
                                    <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-primary" defaultValue={user?.phoneNumber} />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='time' placeholder="Time Slot" className="input input-bordered input-primary" defaultValue={showTime} readOnly required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name='date' placeholder="Select Date" className="input input-bordered input-primary" value={format(selectedDate, 'PP')} readOnly required />
                                </div>
                                <div className="form-control">
                                    <input type="number" name='person' placeholder="Total Person" className="input input-bordered input-primary" />
                                </div>
                                <div className="form-control mt-3">
                                    <button type='submit' className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div>

    );
};

export default BookForm;