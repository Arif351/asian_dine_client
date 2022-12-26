import React from 'react';
import spoon from '../../../Resturant/features/spoon.png';
import plate3 from '../../../Resturant/features/plate3.png';
import bread from '../../../Resturant/features/bread.png';
import noodles from '../../../Resturant/features/noodles.png';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-6 mx-5'>
            <div className="card lg:card-side flex-none">
                <figure><img src={spoon} alt="" className='w-5/12' /></figure>
                <div className="card-body">
                    <p><span className='font-semibold'>Asian Dine</span> prides itself in using the most fresh, highest quality ingredients and most stringent quality checks & processes for preparing our food. Each biryani is individually prepared in traditional dum style in natural clay handis.<Link className="badge badge-warning badge-outline ml-3">read more</Link>

                    </p>
                </div>
            </div>
            <div className="card lg:card-side flex-none">
                <figure><img src={noodles} alt="" className='w-5/12' /></figure>
                <div className="card-body">
                    <p><span className='font-semibold'>Asian Dine</span> prides itself in using the most fresh, highest quality ingredients and most stringent quality checks & processes for preparing our food. Each biryani is individually prepared in traditional dum style in natural clay handis.<Link className="badge badge-warning badge-outline ml-3">read more</Link>
                    </p>
                </div>
            </div>
            <div className="card lg:card-side flex-none">
                <figure><img src={bread} alt="" className='w-5/12' /></figure>
                <div className="card-body">
                    <p><span className='font-semibold'>Asian Dine</span> prides itself in using the most fresh, highest quality ingredients and most stringent quality checks & processes for preparing our food. Each biryani is individually prepared in traditional dum style in natural clay handis.<Link className="badge badge-warning badge-outline ml-3">read more</Link>

                    </p>
                </div>
            </div>
            <div className="card lg:card-side flex-none">
                <figure><img src={plate3} alt="" className='w-5/12' /></figure>
                <div className="card-body">
                    <p><span className='font-semibold'>Asian Dine</span> prides itself in using the most fresh, highest quality ingredients and most stringent quality checks & processes for preparing our food. Each biryani is individually prepared in traditional dum style in natural clay handis.<Link className="badge badge-warning badge-outline ml-3">read more</Link>

                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;