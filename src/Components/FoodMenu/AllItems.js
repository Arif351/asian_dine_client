import React from 'react';

const AllItems = ({ allItems }) => {
    const { price, img, title, details, ingradiants } = allItems;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-lg">
                <figure><img src={img} alt="" className='w-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <p>Price: {price} Tk.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllItems;