import React from 'react';

const BookForm = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-serif text text-orange-600 my-4'>Fill up the form</h1>

            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-lg">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" name='name' placeholder="Name" className="input input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='email' placeholder="email" className="input input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <input type="number" name='number' placeholder="Phone Number" className="input input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <input type="number" name='person' placeholder="Total Person" className="input input-bordered input-primary" />
                        </div>
                        <select className="select select-bordered w-full input-primary">
                            <option disabled selected>Book for:</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Birthday</option>
                            <option>Official</option>
                            <option>Family</option>
                        </select>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookForm;