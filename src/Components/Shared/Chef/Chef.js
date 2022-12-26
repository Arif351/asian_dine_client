import React from 'react';
import './Chef.css'

const Chef = () => {

    const chef1 = "https://i.ibb.co/Z1NVWRg/chef2.jpg";
    const chef2 = "https://i.ibb.co/4jSLb7g/chef3.jpg";
    const chef3 = "https://i.ibb.co/Y2XYxnG/chef1.jpg";

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-none text-center'>
                    <img src={chef1} className="max-w-sm" alt='' />
                    <h1 className='font-mono text-xl text-yellow-600 font-semibold'>Main Chef</h1>
                </div>
                <div className='flex-none text-center'>
                    <img src={chef2} className="max-w-sm" alt='' />
                    <h1 className='font-mono text-xl text-yellow-600 font-semibold'>Assistant Chef</h1>
                </div>
                <div>
                    <h1 className="text-4xl font-thin"></h1>
                    <p className="py-6 text-4xl font-thin">Hello, Our building has been there for more than 20 years. We produce the best!</p>
                </div>
            </div>
        </div>
    );
};

export default Chef;