import React from 'react';
import { Link } from 'react-router-dom';

const BookingSection = () => {
    return (
        <section className='mb-8'>
            {/* <section className='mb-12 coverImage'
            >
                <div className="hero max-w-screen-2xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=''>
                            <h1 className="text-5xl font-sans text-white font-semibold mb-5 lg:ml-28">Book A Dining</h1>
                            <button className="btn btn-outline btn-warning rounded-full lg:ml-44 ml-28">Book Now</button>
                        </div>
                    </div>
                </div>
            </section > */}
            <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/NVjfTst/n.png")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center">
                    <div className="my-auto">
                        <h1 className="mb-5 text-5xl font-semibold text-white font-sans mt-10">Book A Dining</h1>
                        <p className='my-5'></p>
                        <Link to="/Booking-Date"><button className="btn btn-outline btn-warning rounded-full mb-16">Book Now</button></Link>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;